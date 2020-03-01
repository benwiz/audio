
#include <Bela.h>
#include <cmath>
#include <chrono>

using namespace std::chrono;

// TODO debounce down and up
// TODO double click or long click to clear bank
// TODO correct cycle behavior after creating the secondary click above
// TODO record audio
// TODO way better variable names

// Set range for analog outputs designed for driving LEDs
const float kMinimumAmplitude = (1.5 / 5.0);
const float kAmplitudeRange = 1.0 - kMinimumAmplitude;

float gFrequency = 3.0;
float gPhase;
float gInverseSampleRate;

int gOnOffLEDPin = 0;
int gBank1LEDPin = 1;

int gDebounceDelay = 80; // ms
int gDoubleClickDelay = 500; // ms

int gButton1Pin = 0;
bool gButton1Status = false;
int gButton1PressTimestamp = -1;
int gBank1Status = 0; // 0 = off, 1 = recording, 2 = playing, 3 = not playing back but has recording

struct Click {
  int type;
  int timestamp;
};

void analog_fast_blink(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, frameNum, pin, out);

  // Update and wrap phase of sine tone
  gPhase += 4.0f * (float)M_PI * gFrequency * gInverseSampleRate; // TODO definitely should not be sharing a global gPhase
  if (gPhase > M_PI) {
    gPhase -= 2.0f * (float)M_PI;
  }
}

void analog_slow_blink(BelaContext *context, unsigned int frameNum, unsigned int pin)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, frameNum, pin, out);

  // Update and wrap phase of sine tone
  gPhase += 0.5f * (float)M_PI * gFrequency * gInverseSampleRate; // TODO definitely should not be sharing a global gPhase
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

// detects if there was a click event (cannot handle long click while events are triggered on only depress)
// 0 = no click event, 1 = single click, 2 = double click
struct Click click_detector(bool oldStatus, bool newStatus, int oldTimestamp)
{
  int currTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
  int duration = currTimestamp - oldTimestamp;

  if (duration > gDebounceDelay) {
    // If depressed
    if (oldStatus == false && newStatus == true) {
      if (duration < gDoubleClickDelay) {
        rt_printf("double click\n");
        return {2, currTimestamp};
      } else {
        rt_printf("single click\n");
        return {1, currTimestamp};
      }
    } else {
      return {0, 0};
    }
  } else {
    return {0, 0};
  }
}

void set_bank_led(BelaContext *context, int n, int bankLEDPin, int bankStatus)
{
  switch (bankStatus)
    {
    case 0: // not recording, empty buffer
      analog_always_off(context, n, bankLEDPin);
      break;
    case 1: // recording, currently filling buffer
      analog_always_on(context, n, bankLEDPin);
      break;
    case 2: // not recording, playing back full buffer
      analog_fast_blink(context, n, bankLEDPin);
      break;
    case 3: // not recording, not playing back, full buffer
      analog_slow_blink(context, n, bankLEDPin);
      break;
    }
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

    // Set bank led pin based on status
    set_bank_led(context, n, gBank1LEDPin, gBank1Status);
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    // TODO can I make a general button handler from this?
    // button 1 handling
    int button1 = digitalRead(context, 0, gButton1Pin);
    bool newButton1Status = button1 == 0; // 0 means clicked in the current configuration (depends which way the button is hooked up)
    struct Click button1Click = click_detector(gButton1Status, newButton1Status, gButton1PressTimestamp);
    gButton1Status = newButton1Status;
    if (button1Click.type > 0) {
      // switch (gBank1
      gBank1Status = (gBank1Status + 1) % 4;
      gButton1PressTimestamp = button1Click.timestamp;
    }
  }

  // rt_printf("bank1 status: %d %d\n", gButton1PressTimestamp, gBank1Status);
}

void cleanup(BelaContext *context, void *userData)
{

}
