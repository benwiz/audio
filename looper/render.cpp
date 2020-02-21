#include <Bela.h>
#include <cmath>
#include <chrono>

using namespace std::chrono;

// Set range for analog outputs designed for driving LEDs
const float kMinimumAmplitude = (1.5 / 5.0);
const float kAmplitudeRange = 1.0 - kMinimumAmplitude;

float gFrequency = 3.0;
float gPhase;
float gInverseSampleRate;

int gOnOffLEDPin = 0;
int gLooperLEDPin = 1;

int gButtonPressDelay = 100; // ms

int gButton1Pin = 0;
bool gButton1Status = false;
int gButton1PressTimestamp = -1;
int gLoop1Status = 0; // 0 = off, 1 = recording, 2 = playing, 3 = not playing back but has recording

void analog_fast_blink(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, frameNum, pin, out);

  // Update and wrap phase of sine tone
  gPhase += 4.0f * (float)M_PI * gFrequency * gInverseSampleRate;
  if (gPhase > M_PI) {
    gPhase -= 2.0f * (float)M_PI;
  }
}

void analog_slow_blink(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, frameNum, pin, out);

  // Update and wrap phase of sine tone
  gPhase += 0.5f * (float)M_PI * gFrequency * gInverseSampleRate;
  if (gPhase > M_PI) {
    gPhase -= 2.0f * (float)M_PI;
  }
}

void analog_always_on(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude + kAmplitudeRange;
  analogWriteOnce(context, frameNum, pin, out);
}

void analog_always_off(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude;
  analogWriteOnce(context, frameNum, pin, out);
}

// TODO functional (?) click detector
// detects if there was a click event
// 0 = no click event, 1 = single click, 2 = double click, 3 = long click
int click_detector()
{
}

//
// Event loop functions
//

bool setup(BelaContext *context, void *userData)
{

  // Check if analog channels are enabled
  if(context->analogFrames == 0 || context->analogFrames > context->audioFrames) {
    rt_printf("Error: this example needs analog enabled, with 4 or 8 channels\n");
    return false;
  }

  // Configs for modulating LED sine wave
  gInverseSampleRate = 1.0 / context->analogSampleRate;
  gPhase = 0.0;

  // Set the mode of digital pins
  pinMode(context, 0, gButton1Pin, INPUT);

  return true;
}


void render(BelaContext *context, void *userData)
{
  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // Always keep pin on to show the system is on and running
    analog_always_on(context, n, gOnOffLEDPin);

    if (gButton1Status) {
      analog_always_on(context, n, gLooperLEDPin);
    } else {
      analog_always_off(context, n, gLooperLEDPin);
    }
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    int button1 = digitalRead(context, 0, gButton1Pin);
    bool newButton1Status = button1 == 0; // 0 means clicked in the current configuration (depends which way the button is hooked up)

    // If old status was not clicked (false) and new status is clicked (true),
    // then toggle our loop1 status
    if (gButton1Status == false && newButton1Status == true) {
      int currTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
      int duration = currTimestamp - gButton1PressTimestamp;

      // If the duration (delay between clicks) is greater than gButtonPressDelay, then we can count it as a click
      if (duration > gButtonPressDelay) {
        gLoop1Status = (gLoop1Status + 1) % 4;
        gButton1PressTimestamp = currTimestamp;
      }
    }

    // update button status
    gButton1Status = newButton1Status;
  }

  rt_printf("loop1 status: %d %d\n", gButton1PressTimestamp, gLoop1Status);
}

void cleanup(BelaContext *context, void *userData)
{

}
