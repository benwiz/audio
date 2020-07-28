#include <Bela.h>
#include <cmath>
#include <chrono>

#define LOOP_BUFFER_SIZE 44100

using namespace std::chrono;

// TODO do not share a global gPhase

int gLaunchTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();

// Set range for analog outputs designed for driving LEDs
const float kMinimumAmplitude = (1.5 / 5.0);
const float kAmplitudeRange = 1.0 - kMinimumAmplitude;

float gFrequency = 3.0;
float gPhase = 0.0;
float gInverseSampleRate;
int gAudioFramesPerAnalogFrame = 0;

int gOnOffLEDPin = 0;

int gDebounceDelay = 80; // ms
int gDoubleClickDelay = 500; // ms

int gBank1LEDPin = 1; // analog out
int gBank1ButtonPin = 0;
bool gBank1ButtonStatus = false;
int gBank1ButtonPressTimestamp = -1;
int gBank1Status = 0; // 0 = off, 1 = recording, 2 = playing, 3 = not playing back but has recording
float gBank1Buffer_l[LOOP_BUFFER_SIZE] = {0};
float gBank1Buffer_r[LOOP_BUFFER_SIZE] = {0};
int gBank1BufWritePtr = 0;
int gBank1BufWritePtrMax = 0;
int gBank1PotPin = 0; // analog in
float gBank1Amplitude = 1.0;

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
// NOTE currently, a double click will also trigger the event for a single click just beforehand.
// I'm not sure how to prevent this without causing a delay in the action. I'm not okay with a
// delay or waiting for release event. That being said, this solutions probably works just fine.
struct Click click_detector(bool oldStatus, bool newStatus, int oldTimestamp)
{
  int currTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();

  // If it has been less than 1 second since launch, detect no press
  if (currTimestamp - gLaunchTimestamp < 1000) {
    return {0, 0};
  }

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
void handle_button_event(BelaContext *context, bool &gBankButtonStatus, int &gBankStatus, int &gBankButtonPressTimestamp, int &gBankBufWritePtr, int &gBankBufWritePtrMax, int pin)
{
  int button = digitalRead(context, 0, pin);
  bool newButtonStatus = button == 1; // 1 means depressed in the current configuration (depends which way the button is hooked up) (yellow connected to gpio)
  struct Click buttonClick = click_detector(gBankButtonStatus, newButtonStatus, gBankButtonPressTimestamp);
  gBankButtonStatus = newButtonStatus;
  switch (buttonClick.type)
    {
    case 0: // no click event
      break;
    case 1: // single click event
      if (gBankStatus == 3) { // if pending (3)
        gBankStatus = 2; // set to playing (2)
      } else {
        // if stopped (0), set to recording (1)
        // if recording (1), set to playing (2)
        // if playing (2), set to pending (3)
        gBankStatus++;
      }
      // mark last timestamp click event
      gBankButtonPressTimestamp = buttonClick.timestamp;
      // Now that status is updated
      // If status is 1, to begin recording need to reset pointer
      // If status is 2, to begin playing need to reset pointer
      if (gBankStatus == 1 || gBankStatus == 2) {
        // gBankBufWritePtrMax = gBankBufWritePtr; // I dont see any uses of the max value, though I get the point is for looping
        gBankBufWritePtr = 0;
      }
      break;
    case 2: // double click event
      gBankStatus = 0;
      // mark last timestamp click event
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

  // Claculaet audioFrames per analog Frame
  if(context->analogFrames) {
    gAudioFramesPerAnalogFrame = context->audioFrames / context->analogFrames;
  }

  return true;
}

void render(BelaContext *context, void *userData)
{
  rt_printf("status: %d\tamplitude: %f\n", gBank1Status, gBank1Amplitude);

  // audio loop
  for (unsigned int n = 0; n < context->audioFrames; n++) {
    float out_l = audioRead(context, n, 0);
    float out_r = audioRead(context, n, 1);

    switch (gBank1Status)
      {
      case 1: // recording
        // TODO can I tirgger "end of recording" if LOOP_BUFFER_SIZE exceeded
        // If the size has not been exceeded
        if (gBank1BufWritePtr < LOOP_BUFFER_SIZE) {
          gBank1Buffer_l[gBank1BufWritePtr] = out_l;
          gBank1Buffer_r[gBank1BufWritePtr] = out_r;
        }
        gBank1BufWritePtr++;
        break;
      case 2: // playing
        if (gBank1BufWritePtr < LOOP_BUFFER_SIZE) {
          out_l += gBank1Buffer_l[gBank1BufWritePtr] * gBank1Amplitude;
          out_r += gBank1Buffer_r[gBank1BufWritePtr] * gBank1Amplitude;
          gBank1BufWritePtr++;
        } else {
          gBank1BufWritePtr = 0;
        }
        break;
      }

    // always pass through
    audioWrite(context, n, 0, out_l);
    audioWrite(context, n, 1, out_r);
  }

  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // Always keep pin on to show the system is on and running
    analog_always_on(context, n, gOnOffLEDPin);

    // Set bank led pin based on status
    set_bank_led(context, n, gBank1LEDPin, gBank1Status);

    // Set amplitude for bank 1 // TODO if the analog loop moves above the audio loop, this variable can be local to render
    gBank1Amplitude = map(analogRead(context, n, gBank1PotPin), 0.0, 0.836, 0.0, 2.0);
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    // button 1 handling
    handle_button_event(context, gBank1ButtonStatus, gBank1Status, gBank1ButtonPressTimestamp, gBank1BufWritePtr, gBank1BufWritePtrMax, gBank1ButtonPin);
  }
  // rt_printf("bank1 status: %d %d\n", gBank1ButtonPressTimestamp, gBank1Status);
}

void cleanup(BelaContext *context, void *userData)
{

}
