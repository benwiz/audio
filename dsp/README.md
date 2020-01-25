rasberry pi (and probably any debian image) needs `libasound2-dev`

also this https://github.com/google/aiyprojects-raspbian/issues/24#issuecomment-301276304 for asymmetric alsa

summary: create this file: `~/.asoundrc`

```
pcm.!default {
  type asym
  capture.pcm "mic"
  playback.pcm "speaker"
}
pcm.mic {
  type plug
  slave {
    pcm "hw:1,0"
  }
}
pcm.speaker {
  type plug
  slave {
    pcm "hw:0,0"
  }
}
```

and this https://github.com/Audio-Injector/stereo-and-zero

summary:

```sh
wget https://github.com/Audio-Injector/stereo-and-zero/raw/master/audio.injector.scripts_0.1-1_all.deb
sudo dpkg -i audio.intector.scripts_0.1-1_all.deb
audioInjector-setup.sh
```
