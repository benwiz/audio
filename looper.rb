# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO: Make the osc listeners more data oriented instead of code oriented
# TODO: Rather than storing just the buffer_id, store a
# map with a `play?` boolean.
# TODO: play_audio should honor the play boolean
# TODO: OSC command to set the play boolean (or toggleif no args)
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
buffer_size = 32

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
  buffer_ids += [id]
  set :buffer_ids, buffer_ids
  return id
end


def kick()
  sample :bd_haus, rate: 1
end


def start_record_audio()
  # Create a new buffer
  id = new_buffer_id
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
  buffer_ids = get(:buffer_ids)
  buffer_ids.each do |id|
    sample buffer(id, buffer_size)
  end
end



#####################
##|               |##
##| OSC Listeners |##
##|               |##
#####################

##| in_thread do
##|   live_loop :kick do
##|     use_real_time
##|     sync "/osc/trigger/kick"
##|     kick
##|   end
##| end


##| in_thread do
##|   live_loop :start do
##|     use_real_time
##|     sync "/osc/trigger/start"
##|     start_record_audio
##|   end
##| end


##| in_thread do
##|   live_loop :stop do
##|     use_real_time
##|     sync "/osc/trigger/stop"
##|     stop_record_audio
##|   end
##| end


##| in_thread do
##|   live_loop :play do
##|     use_real_time
##|     sync "/osc/trigger/play"
##|     play_audio
##|   end
##| end

# Attempt to use a more data-oriented approach but I'm
# not sure how to pass around the method.

osc_commands = [
  {message: "/osc/trigger/kick",  fn: method(:kick)},
  {message: "/osc/trigger/start", fn: method(:start_record_audio)},
  {message: "/osc/trigger/stop",  fn: method(:stop_record_audio)},
  {message: "/osc/trigger/play",  fn: method(:play_audio)},
]

osc_commands.each do |osc_command|
  in_thread do
    live_loop :stop do
      use_real_time
      sync osc_command[:message]
      osc_command[:fn].()
    end
  end
end









