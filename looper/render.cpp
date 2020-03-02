
#include <Bela.h>
#include <cmath>
#include <chrono>

using namespace std::chrono;

// TODO turn button update into a fn
// TODO record audio
// TODO way better variable names

// Set range for analog outputs designed for driving LEDs
const float kMinimumAmplitude = (1.5 / 5.0);
const float kAmplitudeRange = 1.0 - kMinimumAmplitude;

float gFrequency = 3.0;
float gPhase = 0.0;
float gInverseSampleRate;

int gOnOffLEDPin = 0;

int gDebounceDelay = 80; // ms
int gDoubleClickDelay = 500; // ms

int gBank1LEDPin = 1;
int gBank1ButtonPin = 0;
bool gBank1ButtonStatus = false;
int gBank1ButtonPressTimestamp = -1;
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
// FIXME currently, a double click will also trigger the event for a single click just beforehand.
// I'm not sure how to prevent this without causing a delay in the action. I'm not okay with a delay or waiting for release event.
// That being said, this solutions probably works just fine.
struct Click click_detector(bool oldStatus, bool newStatus, int oldTimestamp)
{
  int currTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
  int duration = currTimestamp - oldTimestamp;

  if (duration > gDebounceDelay) {
    // If depressed
    if (oldStatus == false && newStatus == true) {
      if (duration < gDoubleClickDelay) {
        return {2, currTimestamp};
      } else {
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

// First three args are named after their global counter parts. Expecting addr so the globals will be updated.
void handle_button_event(BelaContext *context, bool &gBankButtonStatus, int &gBankStatus, int &gBankButtonPressTimestamp, int pin)
{
  int button = digitalRead(context, 0, pin);
  bool newButtonStatus = button == 0; // 0 means depressed in the current configuration (depends which way the button is hooked up)
  struct Click buttonClick = click_detector(gBankButtonStatus, newButtonStatus, gBankButtonPressTimestamp);
  gBankButtonStatus = newButtonStatus;
  switch (buttonClick.type)
    {
    case 0:
      break;
    case 1:
      if (gBankStatus == 3) {
        gBankStatus = 2;
      } else {
        gBankStatus++;
      }
      gBankButtonPressTimestamp = buttonClick.timestamp;
      break;
    case 2:
      gBankStatus = 0;
      gBankButtonPressTimestamp = buttonClick.timestamp;
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

  // Set the mode of digital pins
  pinMode(context, 0, gBank1ButtonPin, INPUT);

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
    // button 1 handling
    handle_button_event(context, gBank1ButtonStatus, gBank1Status, gBank1ButtonPressTimestamp, gBank1ButtonPin);
  }
  // rt_printf("bank1 status: %d %d\n", gBank1ButtonPressTimestamp, gBank1Status);
}

void cleanup(BelaContext *context, void *userData)
{

}
