#include <Bela.h>
#include <cmath>
#include <chrono>

#define LOOP_BUFFER_SIZE 44100

using namespace std::chrono;

int START_TIME = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
int AUDIO_FRAMES_PER_ANALOG_FRAME = 1; // updated during setup
int counter = 0;

int BUTTON_A = 0;
int BUTTON_B = 0;
int BUTTON_C = 0;
int BUTTON_D = 0;

float POT_A = 0.5;
float POT_B = 0.5;
float POT_C = 0.5;
float POT_D = 0.5;
float POT_MAX = 0.837;

float gInverseSampleRate = 1.0;
float gPhase = 0.0;

float normalizePot(float v)
{
  return map(v, 0.0, POT_MAX, 0.0, 1.0);
}

//
// Event loop functions
//

bool setup(BelaContext *context, void *userData)
{
  rt_printf("Setup\n");
  // Check if analog channels are enabled
  if(context->analogFrames == 0 || context->analogFrames > context->audioFrames) {
    rt_printf("Error: this example needs analog enabled, with 4 or 8 channels\n");
    return false;
  }

  // Calculate audioFrames per analog Frame
  if(context->analogFrames) {
    AUDIO_FRAMES_PER_ANALOG_FRAME = context->audioFrames / context->analogFrames;
  }

  // Calculate inverse sample rate
  gInverseSampleRate = 1.0 / context->audioSampleRate;

  // Set pin mode for LEDs
  pinMode(context, 0, 0, OUTPUT);
  pinMode(context, 0, 1, OUTPUT);
  pinMode(context, 0, 2, OUTPUT);
  pinMode(context, 0, 3, OUTPUT);
  pinMode(context, 0, 4, OUTPUT);
  pinMode(context, 0, 5, OUTPUT);
  pinMode(context, 0, 8, OUTPUT);
  pinMode(context, 0, 9, OUTPUT);
  pinMode(context, 0, 11, OUTPUT);

  // Set pin mode for buttons
  pinMode(context, 0, 12, INPUT);
  pinMode(context, 0, 13, INPUT);
  pinMode(context, 0, 14, INPUT);
  pinMode(context, 0, 15, INPUT);

  return true;
}

void render(BelaContext *context, void *userData)
{
  counter++;
  float totalNoise = 0.0;

  // int now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
  // rt_printf("start_time: %d, now: %d, mod: \n", START_TIME, now);

  // audio loop
  for (unsigned int n = 0; n < context->audioFrames; n++) {
    // read audio
    float in = audioRead(context, n, 0);
    float out = in;

    // Calulate noise very poorly
    totalNoise += in;

    // Modify audio according to buttons
    if (BUTTON_A == 1) {
      out = POT_A * sinf(gPhase);
      gPhase += 2.0f * (float)M_PI * 262.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }
    if (BUTTON_B == 1) {
      out = POT_B * sinf(gPhase);
      gPhase += 2.0f * (float)M_PI * 330.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }
    if (BUTTON_C == 1) {
      out = POT_C * sinf(gPhase);
      gPhase += 2.0f * (float)M_PI * 392.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }
    if (BUTTON_D == 1) {
      out = POT_D * sinf(gPhase);
      gPhase += 2.0f * (float)M_PI * 523.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }

    // always pass through
    audioWrite(context, n, 0, out);
  }

  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // rt_printf("hola %d %d %.2f\n", counter, context->audioSampleRate, counter / context->audioSampleRate);
    // analog led always on
    analogWriteOnce(context, n, 0,
                    // 0.5
                    // The following is a really rough visual estimator of input amplitude
                    constrain(fabs(totalNoise * 2.0), 0.0, 1.0) // I have no idea if this is a somewhat valuable representation of input
                    );

    // read and map pots
    POT_A = normalizePot(analogRead(context, n, 0));
    POT_B = normalizePot(analogRead(context, n, 1));
    POT_C = normalizePot(analogRead(context, n, 2));
    POT_D = normalizePot(analogRead(context, n, 3));
    /* rt_printf("ABCD: %.2f %.2f %.2f %.2f\n", POT_A, POT_B, POT_C, POT_D); */
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    // read buttons
    BUTTON_A = (digitalRead(context, 0, 15) - 1) * -1; // LED 11
    BUTTON_B = (digitalRead(context, 0, 14) - 1) * -1; // LED 9
    BUTTON_C = (digitalRead(context, 0, 13) - 1) * -1; // LED 8
    BUTTON_D = (digitalRead(context, 0, 12) - 1) * -1; // LED 5
    // rt_printf("ABCD: %d %d %d %d\n", BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_D);

    // digital leds
    digitalWriteOnce(context, n, 0, true);
    digitalWriteOnce(context, n, 1, BUTTON_A == 1);
    digitalWriteOnce(context, n, 2, BUTTON_B == 1);
    digitalWriteOnce(context, n, 3, BUTTON_C == 1);
    digitalWriteOnce(context, n, 4, BUTTON_D == 1);
    digitalWriteOnce(context, n, 5, BUTTON_D == 1);
    digitalWriteOnce(context, n, 8, BUTTON_C == 1);
    digitalWriteOnce(context, n, 9, BUTTON_B == 1);
    digitalWriteOnce(context, n, 11, BUTTON_A == 1);
  }
}

void cleanup(BelaContext *context, void *userData)
{

}
