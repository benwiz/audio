# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO (first): `play` must play on a loop. I probably need to record the length
# of the actual content and pass that around in the buffer_ids list

# TODO: There are state change bugs
# TODO: `start` osc command should be able to specify buffer
# TODO: `pause` osc command should be able to specify buffer (logical branch to modify the buffer's :play boolean)
# TODO: new osc commands to control the metronome
# TODO: osc commands should be namespaced better
# TODO: Output information about the buffers via osc_send

# TODO: Not important, but `buffer_ids` is no longer an accurate name
# TODO: Minimize access to global variables

require 'securerandom'


###############
##|         |##
##| Configs |##
##|         |##
###############

use_bpm 60

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

#################
##|           |##
##| Functions |## # TODO: Make this a better title
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
  print "new_buffer_id=", id
  buffer_size = get(:buffer_size)
  buf = buffer(id, buffer_size)
  # Record audio into buffer
  set :start_tick, get(:tick) # Might want to namespace :start_tick with the buffer's id
  with_fx :record, buffer: buf do
    live_audio :live_audio_synth
  end
end


def stop_record_audio()
  live_audio :live_audio_synth, :stop
  size = get(:tick) - get(:start_tick)
  buffer_ids = get(:buffer_ids)
  curr_buffer_id = get(:curr_buffer_id)
  new_buffer_ids = SonicPi::Core::SPVector.new(
    buffer_ids.map do |b|
      if b[:id] == curr_buffer_id
        SonicPi::Core::SPVector.new(b.put(:size, size))
      else
        SonicPi::Core::SPVector.news(b)
      end
  end)
  set :buffer_ids, new_buffer_ids
end


def play_audio()
  set :play, true
  buffer_size = get(:buffer_size)
  buffer_ids = get(:buffer_ids)
  buffer_ids.each do |buf|
    print buf
    if buf[:play]
      loop do
        if get(:play)
          sample buffer(buf[:id], buffer_size)
        else
          return
        end
        #sleep buffer_size
        sleep buf[:size]
      end
    end
  end
end

def pause_audio()
  set :play, false
end


def delete_buffers()
  set :buffer_ids, []
end


def kick()
  sample :bd_haus, rate: 1
end


#################
##|           |##
##| Metronome |##
##|           |##
#################

in_thread do
  live_loop :metronome do
    set :tick, tick
    sleep 1
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
      print tick
      use_real_time
      sync osc_command[:message]
      method(osc_command[:fn]).()
    end
  end
end



