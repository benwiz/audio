// TODO put inside test project

#include <Bela.h>
#include <cmath>
#include <chrono>

#define LOOP_BUFFER_SIZE 44100

using namespace std::chrono;

int START_TIME = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
int AUDIO_FRAMES_PER_ANALOG_FRAME = 1; // updated during setup

int BUTTON_A = 0;
int BUTTON_B = 0;
int BUTTON_C = 0;
int BUTTON_D = 0;

float gInverseSampleRate = 1.0;
float gPhase = 0.0;

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

  // Set pin mode for buttons
  pinMode(context, 0, 12, INPUT);
  pinMode(context, 0, 13, INPUT);
  pinMode(context, 0, 14, INPUT);
  pinMode(context, 0, 15, INPUT);

  return true;
}

void render(BelaContext *context, void *userData)
{
  // audio loop
  for (unsigned int n = 0; n < context->audioFrames; n++) {
    // read audio
    float out_l = audioRead(context, n, 0);
    float out_r = audioRead(context, n, 1);

    // Update phase


    // Modify audio according to buttons
    if (BUTTON_A == 1) {
      audioWrite(context, n, 0, 0.8f * sinf(gPhase));
      audioWrite(context, n, 0, 0.8f * sinf(gPhase));
      gPhase += 2.0f * (float)M_PI * 262.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }
    if (BUTTON_B == 1) {
      audioWrite(context, n, 0, 0.8f * sinf(gPhase));
      audioWrite(context, n, 0, 0.8f * sinf(gPhase));
      gPhase += 2.0f * (float)M_PI * 330.0 * gInverseSampleRate;
      if (gPhase > M_PI)
        gPhase -= 2.0f * (float)M_PI;
    }
    // if (BUTTON_C == 1) {
    //   out_l += 0.8f * sinf(gPhase);
    //   out_r += 0.8f * sinf(gPhase);
    //   gPhase += 2.0f * (float)M_PI * 392.0 * gInverseSampleRate;
    //   if (gPhase > M_PI)
    //     gPhase -= 2.0f * (float)M_PI;
    // }
    // if (BUTTON_D == 1) {
    //   out_l += 0.8f * sinf(gPhase);
    //   out_r += 0.8f * sinf(gPhase);
    //   gPhase += 2.0f * (float)M_PI * 523.0 * gInverseSampleRate;
    //   if (gPhase > M_PI)
    //     gPhase -= 2.0f * (float)M_PI;
    // }

    // always pass through
    audioWrite(context, n, 0, out_l);
    audioWrite(context, n, 1, out_r);
  }

  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // analog led always on
    analogWriteOnce(context, n, 0, 1.0);
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    // digital led always on
    digitalWriteOnce(context, n, 0, true);
    digitalWriteOnce(context, n, 1, true);
    digitalWriteOnce(context, n, 2, true);
    digitalWriteOnce(context, n, 3, true);
    digitalWriteOnce(context, n, 4, true);
    digitalWriteOnce(context, n, 5, true);
    digitalWriteOnce(context, n, 8, true);

    // read buttons
    BUTTON_A = (digitalRead(context, 0, 12) - 1) * -1;
    BUTTON_B = (digitalRead(context, 0, 13) - 1) * -1;
    // BUTTON_C = (digitalRead(context, 0, 14) - 1) * -1;
    // BUTTON_D = (digitalRead(context, 0, 15) - 1) * -1;
  }
  rt_printf("ABCD: %d %d %d %d\n", BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_D);
}

void cleanup(BelaContext *context, void *userData)
{

}
