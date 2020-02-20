// TODO an LED just for on/off

#include <Bela.h>
#include <cmath>

// Set range for analog outputs designed for driving LEDs
const float kMinimumAmplitude = (1.5 / 5.0);
const float kAmplitudeRange = 1.0 - kMinimumAmplitude;

float gFrequency = 3.0;
float gPhase;
float gInverseSampleRate;

int gOnOffPin = 0;

bool setup(BelaContext *context, void *userData)
{

  // Check if analog channels are enabled
  if(context->analogFrames == 0 || context->analogFrames > context->audioFrames) {
    rt_printf("Error: this example needs analog enabled, with 4 or 8 channels\n");
    return false;
  }

  gInverseSampleRate = 1.0 / context->analogSampleRate;
  gPhase = 0.0;

  // Set gOutputPin as output
  pinMode(context, 0, gOnOffPin, OUTPUT);

  return true;
}

void analog_fast_blink(BelaContext *context, unsigned int n)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, n, 0, out);

  // Update and wrap phase of sine tone
  gPhase += 4.0f * (float)M_PI * gFrequency * gInverseSampleRate;
  if (gPhase > M_PI) {
    gPhase -= 2.0f * (float)M_PI;
  }
}

void analog_slow_blink(BelaContext *context, unsigned int n)
{
  float out = kMinimumAmplitude + kAmplitudeRange * 0.5f * (1.0f + sinf(gPhase));
  analogWriteOnce(context, n, 0, out);

  // Update and wrap phase of sine tone
  gPhase += 0.5f * (float)M_PI * gFrequency * gInverseSampleRate;
  if (gPhase > M_PI) {
    gPhase -= 2.0f * (float)M_PI;
  }
}

void analog_always_on(BelaContext *context, unsigned int n)
{
  float out = kMinimumAmplitude + kAmplitudeRange;
  analogWriteOnce(context, n, 0, out);
}

void analog_always_off(BelaContext *context, unsigned int n)
{
  float out = kMinimumAmplitude;
  analogWriteOnce(context, n, 0, out);
}


void render(BelaContext *context, void *userData)
{
  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // analog_fast_blink(context, n);
    // analog_slow_blink(context, n);
    // analog_always_on(context, n);
    analog_always_off(context, n);
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; ++n) {
    // Set gOutputPin to always on (TODO figure out if there if is a way to turn this on in setup)
    digitalWrite(context, n, gOnOffPin, 1);
  }
}

void cleanup(BelaContext *context, void *userData)
{

}


/**
   \example analog-output/render.cpp

   Fading LEDs
   -----------

   This sketch uses a sine wave to drive the brightness of a series of LEDs
   connected to the eight analog out pins. Again you can see the nested `for` loop
   structure but this time for the analog output channels rather than the audio.

   - connect an LED in series with a 470ohm resistor between each of the analogOut pins and ground.

   Within the first for loop in render we cycle through each frame in the analog
   output channels. At each frame we then cycle through the analog output channels
   with another for loop and set the output voltage according to the phase of a
   sine tone that acts as an LFO. The analog output pins can provide a voltage of
   ~4.092V.

   The output on each pin is set with `analogWriteOnce()` within the for loop that
   cycles through the analog output channels. This needs to be provided with
   arguments as follows `analogWriteOnce(context, n, channel, out)`. Channel is
   where you give the address of the analog output pin (in this case we cycle
   through each pin address in the for loop), out is the variable that holds the
   desired output (in this case set by the sine wave) and `n` is the frame number
   (given by the other for loop).

   Notice that the phase of the brightness cycle for each led is different. This
   is achieved by updating a variable that stores a relative phase value. This
   variable is advanced by pi/4 (1/8 of a full rotation) for each channel giving
   each of the eight LEDs a different phase.
*/
