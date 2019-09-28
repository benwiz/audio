# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO: Make the osc listeners more data oriented instead of code oriented
# TODO: Rather than storing just the buffer_id, store a
# map with a `play?` boolean.
# TODO: play_audio should honor the play boolean
# TODO: OSC command to set the play boolean (or toggle if no args)

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
# new id.
define :new_buffer_id do
  id = SecureRandom.uuid.to_sym
  buffer_ids = get(:buffer_ids)
  buffer_ids += [id]
  set :buffer_ids, buffer_ids
  return id
end


define :kick do
  sample :bd_haus, rate: 1
end


define :start_record_audio do
  # Create a new buffer
  id = new_buffer_id
  buf = buffer(id, buffer_size)
  # Record audio into buffer
  with_fx :record, buffer: buf do
    live_audio :live_audio_synth
  end
end


define :stop_record_audio do
  live_audio :live_audio_synth, :stop
end


define :play_audio do
  buffer_ids = get(:buffer_ids)
  buffer_ids.each do |id|
    sample buffer(id, buffer_size)
  end
end


# FIXME
define :logbuffers do
  buffer_ids = get(:buffer_ids)
  puts "buffer_ids::"
  puts buffer_ids
end


#####################
##|               |##
##| OSC Listeners |##
##|               |##
#####################

in_thread do
  live_loop :kick do
    use_real_time
    sync "/osc/trigger/kick"
    kick
  end
end


in_thread do
  live_loop :start do
    use_real_time
    sync "/osc/trigger/start"
    start_record_audio
  end
end


in_thread do
  live_loop :stop do
    use_real_time
    sync "/osc/trigger/stop"
    stop_record_audio
  end
end


in_thread do
  live_loop :play do
    use_real_time
    sync "/osc/trigger/play"
    play_audio
  end
end

in_thread do
  live_loop :logbuffers do
    use_real_time
    sync "/osc/trigger/logbuffers"
    logbuffers
  end
end





