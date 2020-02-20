// TODO hook up button (toggle states and have LED react to the 4 states, later I'll take audio actions on those states)

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
    analog_fast_blink(context, n);
    // analog_slow_blink(context, n);
    // analog_always_on(context, n);
    // analog_always_off(context, n);
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
