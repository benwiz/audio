# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO (first): `play` must play on a loop. I probably need to record the length
# of the actual content and pass that around in the buffer_ids list

# TODO: `start` osc command should be able to dictate a specific buffer to overwrite (or create). May need to have a static length array.
# TODO: `pause` osc command
# TODO: OSC command to set the play boolean (or toggle if no args)
# TODO: Add metronome and related osc commands
# TODO: Output information about the buffers via osc_send

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
  buffer_ids += [{id: id, play: true}]
  set :buffer_ids, buffer_ids
  return id
end


def start_record_audio()
  # Create a new buffer
  id = new_buffer_id
  buffer_size = get(:buffer_size)
  buf = buffer(id, buffer_size)
  # Record audio into buffer
  with_fx :record, buffer: buf do
    live_audio :live_audio_synth
  end
end


def stop_record_audio()
  live_audio :live_audio_synth, :stop
end


def play_audio()
  set :play, true
  buffer_size = get(:buffer_size)
  buffer_ids = get(:buffer_ids)
  buffer_ids.each do |buf|
    if buf[:play]
      loop do
        if get(:play)
          sample buffer(buf[:id], buffer_size)
          sleep buffer_size # TODO: This should be taken from the buf hash map and will be less than buffer_size
        end
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
    ##| use_real_time
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


