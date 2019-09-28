# Loop Pedal

# someone else's attempt (check the gist):
# https://in-thread.sonic-pi.net/t/betaversion-of-live-looper-with-touchosc-interface/379/2

# TODO: Keep buffers in a list. May want to make it static length,
# the UX may be better. Just make it plenty large (like 10 or 20).
# TODO: Add osc controls to delete buffers from the list

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

#################
##|           |##
##| Functions |##
##|           |##
#################

define :new_buffer_id do
  set :buffer_id, SecureRandom.uuid.to_sym
end


define :get_buffer do
  buffer_id = get(:buffer_id)
  buf = buffer(buffer_id, buffer_size)
end


define :kick do
  sample :bd_haus, rate: 1
end


define :start_record_audio do
  new_buffer_id
  buf = get_buffer
  with_fx :record, buffer: buf do
    live_audio :live_audio_synth
  end
end


define :stop_record_audio do
  live_audio :live_audio_synth, :stop
end


define :play_audio do
  sample get_buffer
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





