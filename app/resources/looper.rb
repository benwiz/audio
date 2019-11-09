# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# FIXME: There is a little latency between the pressing of the
# record button and the first sound recorded. First, look into
# my use of two different live_audio synths, this could be the
# cause. If that isn't the cause, look into recording the prior
# second and stiching together two buffers using.

# TODO: Better named osc commands
# TODO: More erganomic osc commands

# TODO: Clean up thread use and make sure I'm not spawning tons of them
# TODO: `start` osc command should be able to specify buffer
# TODO: `pause` osc command should be able to specify buffer
# TODO: new osc commands to control the metronome
# TODO: Expose state by creating an api with osc
# TODO: Use a logging library if printing to stdout causes performance issues
# TODO: I may want to not use real time for the timing assistance, there's a name for this on other looping pedals
# TODO***: There are several locations where I could take a more event-driven architecutre

# FIXME: There is a minor audible glitch when looping. I'm pretty
# certain this is a microphone hardware issue.

require 'securerandom'


###############
##|         |##
##| Configs |##
##|         |##
###############

use_bpm 60
set :metronome, false
set :buffer_size, 32 # Large enough to hold whatever someone may record. # TODO: Maybe there is a way of joining buffers?


############
##|      |##
##| Init |##
##|      |##
############

set :buffer_ids, []
set :play, true
live_audio :tunnel


#################
##|           |##
##| Playback  |##
##| Functions |##
##|           |##
#################


def play_buffer_in_thread(buf)
  in_thread do
    if buf[:play] # Later, this may require grabbing the buffer from state again
      loop do
        if get(:play)
          sample buffer(buf[:id], buf[:buffer_size])
        else
          stop # TODO: Probably want to avoid stopping threads for performance reasons
        end
        print "size=", buf[:size]
        sleep buf[:size] # If 0, will throw error
      end
    end
  end
end


def play_audio()
  # When we are not playing
  if get(:play) == false
    set :play, true

    # buffer_size = get(:buffer_size) # TODO: I think this can be removed
    buffer_ids = get(:buffer_ids)
    print "buffer_ids=", buffer_ids

    # Play each buffer
    buffer_ids.each do |buf|
      play_buffer_in_thread buf
    end

  end
end


def pause_audio()
  print "buffer_ids=", get(:buffer_ids)
  set :play, false
end


#################
##|           |##
##| Recording |##
##| Functions |##
##|           |##
#################

# Generate a new id and add it to the
# global list of buffer ids. Return
# new id. By using UUID there is no risk
# of using an old cached buffer.
def new_buffer_id()
  id = SecureRandom.uuid.to_sym
  buffer_ids = get(:buffer_ids)
  buffer_ids += [{id: id,
                  play: true,
                  size: get(:buffer_size),
                  buffer_size: get(:buffer_size)}]
  set :buffer_ids, buffer_ids
  return id
end


def start_record_audio()
  # When there is no recording currently happening
  if get(:curr_buffer_id) == nil
    # Create a new buffer
    id = new_buffer_id
    set :curr_buffer_id, id
    buffer_size = get(:buffer_size)
    buf = buffer(id, buffer_size)
    print "buf=", buf

    # Stop the other live_audio
    live_audio :tunnel, :stop

    # Record audio into buffer
    set :start_time, Time.now.to_f
    with_fx :record, buffer: buf do
      live_audio :recording
    end
  end
end


def stop_record_audio()
  # When the system is recording into a buffer
  if get(:curr_buffer_id)
    print "stop_record_audio"

    # Stop audio and calculate size using clock time
    size = Time.now.to_f - get(:start_time)
    live_audio :recording, :stop
    size = size.floor(4)
    print "size=", size

    # Start using the live_audio :tunnel
    live_audio :tunnel

    buf = nil

    # When bukffer is long enough)
    if size > 0.5
      # Update buffer_ids
      buffer_ids = get(:buffer_ids)
      curr_buffer_id = get(:curr_buffer_id)
      print "curr_buffer_id=", curr_buffer_id
      # TODO: There must be a better way, such as using index as id, and store a wav_id for the buffer's name
      new_buffer_ids = SonicPi::Core::SPVector.new(
        # The datatypes: https://github.com/hamstergem/hamster
        buffer_ids.map do |b|
          if b[:id] == curr_buffer_id
            b = b.put(:size, size)
            buf = b
            SonicPi::Core::SPMap.new(b)
          else
            SonicPi::Core::SPMap.new(b)
          end
      end)
    end

    # Update global state
    set :curr_buffer_id, nil
    set :buffer_ids, new_buffer_ids

    # Start playing the new recording immediately
    if buf # Probably unnecessary precaution
      print "buf:", buf
      play_buffer_in_thread buf
    end
  end
end



#################
##|           |##
##|   Other   |##
##| Functions |##
##|           |##
#################


def delete_buffers()
  print "before=", get(:buffer_ids)
  set :buffer_ids, SonicPi::Core::SPVector[]
  print "after=", get(:buffer_ids)
end


def kick()
  sample :bd_haus, rate: 1
  print Time.now.to_f
end


#################
##|           |##
##| Metronome |##
##|           |##
#################

# FIXME: This is pretty bad architecture for the metronome.
# I shouldn't be killing threads nor using `use_real_time`.
# Or restarting the metronome.

def metronome_on()
  set :metronome, true

  in_thread do
    loop do
      if get(:metronome)
        play 77, release: 0.05
      else
        stop # TODO: Probably don't want to be stopping threads
      end
      sleep 1
    end
  end
end



def metronome_off()
  set :metronome, false
end


#####################
##|               |##
##| OSC Listeners |##
##|               |##
#####################

osc_commands = [
  {message: "/osc/looper/kick",         fn: :kick},
  {message: "/osc/looper/metronome-on", fn: :metronome_on},
  {message: "/osc/looper/metronome-off", fn: :metronome_off},
  {message: "/osc/looper/start",        fn: :start_record_audio},
  {message: "/osc/looper/stop",         fn: :stop_record_audio},
  {message: "/osc/looper/play",         fn: :play_audio},
  {message: "/osc/looper/pause",        fn: :pause_audio},
  {message: "/osc/looper/delete",       fn: :delete_buffers},
]

osc_commands.each do |osc_command|
  in_thread do
    live_loop osc_command[:fn] do
      use_real_time
      sync osc_command[:message]
      method(osc_command[:fn]).()
    end
  end
end
