# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO: osc commands should always be able to be called without breaking
# TODO: `play` should automatically pick up new  tracks, calling it again shouldn't do anything
# To complete this, I may want to send an osc message from `stop` that kills then restarts the `play` thread
# Since threads are named, it could be easy to kill a thread from the outside, maybe.
# TODO: Audio should always be passed through


# ~~ Only above must be done before I start using it.
# ~~ Don't do the below until I've got it working consistently


# TODO: `start` osc command should be able to specify buffer
# TODO: `pause` osc command should be able to specify buffer
# TODO: new osc commands to control the metronome
# TODO: osc commands should be namespaced better, even when it isn't recording
# TODO (probably): Expose state via osc messages
# TODO: Always pass live audio onward

# FIXME: There is a minor audible glitch when looping. I'm pretty
# certain this is a microphone hardware issue.

require 'securerandom'


###############
##|         |##
##| Configs |##
##|         |##
###############

use_bpm 60
metronome = false

##| I need a long buffer because I don't know
##| the final length of my recording. I can be
##| fairly certain it will be less than 32 beats.
##| If this turns out to be an issue I can increase
##| the size later.
set :buffer_size, 8 # 32

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
                  size: get(:buffer_size)}]
  set :buffer_ids, buffer_ids
  return id
end


def start_record_audio()
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


def stop_record_audio()
  # Stop audio and calculate size
  size = Time.now.to_f - get(:start_time)
  live_audio :recording, :stop
  size = size.floor(4)
  print size
  
  # Start using the live_audio tunnel
  live_audio :tunnel
  
  # Update buffer_ids
  buffer_ids = get(:buffer_ids)
  curr_buffer_id = get(:curr_buffer_id)
  print "curr_buffer_id=", curr_buffer_id
  print "buffer_ids=", buffer_ids
  new_buffer_ids = SonicPi::Core::SPVector.new(
    buffer_ids.map do |b|
      if b[:id] == curr_buffer_id
        SonicPi::Core::SPMap.new(b.put(:size, size))
      else
        SonicPi::Core::SPMap.new(b)
      end
  end)
  set :buffer_ids, new_buffer_ids
end


#################
##|           |##
##| Playback  |##
##| Functions |##
##|           |##
#################


def play_audio()
  # Prep to play
  set :play, true
  buffer_size = get(:buffer_size)
  buffer_ids = get(:buffer_ids)
  print "buffer_ids=", buffer_ids
  
  # Play each buffer
  buffer_ids.each do |buf|
    in_thread do
      if buf[:play]
        loop do
          if get(:play)
            sample buffer(buf[:id], buffer_size)
          else
            kill
          end
          print "size=", buf[:size]
          sleep [buf[:size], 1].max # Should never be 0
        end
      end
    end
  end
end


def pause_audio()
  print "buffer_ids=", get(:buffer_ids)
  set :play, false
end


def delete_buffers()
  print "buffer_ids=", get(:buffer_ids)
  set :buffer_ids, SonicPi::Core::SPVector[]
  print "buffer_ids=", get(:buffer_ids)
end

#################
##|           |##
##|   Other   |##
##| Functions |##
##|           |##
#################

def kick()
  sample :bd_haus, rate: 1
  print Time.now.to_f
end


#################
##|           |##
##| Metronome |##
##|           |##
#################

if metronome
  in_thread do
    live_loop :metronome do
      ##| use_real_time
      set :tick, tick
      play 77, release: 0.05
      sleep 1
    end
  end
end


#####################
##|               |##
##| OSC Listeners |##
##|               |##
#####################

osc_commands = [
  {message: "/osc/looper/kick",   fn: :kick},
  {message: "/osc/looper/start",  fn: :start_record_audio},
  {message: "/osc/looper/stop",   fn: :stop_record_audio},
  {message: "/osc/looper/play",   fn: :play_audio},
  {message: "/osc/looper/pause",  fn: :pause_audio},
  {message: "/osc/looper/delete", fn: :delete_buffers},
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



