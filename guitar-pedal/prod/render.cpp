#include <Bela.h>
#include <cmath>
#include <chrono>

#define LOOP_BUFFER_SIZE 44100

using namespace std::chrono;

int START_TIME = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
int AUDIO_FRAMES_PER_ANALOG_FRAME = 1; // updated during setup
float INVERSE_SAMPLE_RATE = 1.0;
int DEBOUNCE_DELAY = 500; // ms
int DOUBLE_CLICK_DELAY = 500; // ms

// TODO create a button struct that contains: status, last_update_timestamp. And a looper struct.

// Button pins
int BUTTON_A_PIN = 15;
int BUTTON_B_PIN = 14;
int BUTTON_C_PIN = 13;
int BUTTON_D_PIN = 12;

// Button depression status (0 = released, 1 = depressed)
int BUTTON_A = 0;
int BUTTON_B = 0;
int BUTTON_C = 0;
int BUTTON_D = 0;

// Looper statuses (I don't like this not being part of a configurable abstraction but dealing with it)
 // 0 = off, 1 = recording, 2 = playing, 3 = not playing back but has recording
int LOOPER_A = 0;
int LOOPER_A_TIMESTAMP = -1;
int LOOPER_A_BUF_PTR = 0;
float LOOPER_A_BUFFER[LOOP_BUFFER_SIZE] = {0};

// LEDs
int LED_A = 11;

// Defaults in range [0, 1]
float POT_A = 0.5;
float POT_B = 0.5;
float POT_C = 0.5;
float POT_D = 0.5;
float POT_MAX = 0.837; // for mapping [0, 1]

struct Click {
  int type;
  int timestamp;
};

float normalizePot(float v)
{
  return map(v, 0.0, POT_MAX, 0.0, 1.0);
}

// Detects if there was a click event
// Currently, a double click will also trigger the event for a single click just beforehand.
// I'm not sure how to prevent this without causing a delay in the action. I'm not okay with a
// delay or waiting for release event. That being said, this solutions probably works just fine.
// 0 = no click event, 1 = single click, 2 = double click
struct Click click_detector(bool oldStatus, bool newStatus, int oldTimestamp)
{
  int now = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();

  // If it has been less than 1 second since launch, detect no press
  if (now - START_TIME < 1000)
    return {0, 0};

  // Duration of depression
  int duration = now - oldTimestamp;

  if (duration > DEBOUNCE_DELAY) {
    // If depressed
    if (oldStatus == false && newStatus == true) {
      if (duration < DOUBLE_CLICK_DELAY) {
        return {2, now};
      } else {
        return {1, now};
      }
    } else {
      return {0, 0};
    }
  } else {
    return {0, 0};
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

  // Calculate audioFrames per analog Frame
  if(context->analogFrames) {
    AUDIO_FRAMES_PER_ANALOG_FRAME = context->audioFrames / context->analogFrames;
  }

  // Calculate inverse sample rate
  INVERSE_SAMPLE_RATE = 1.0 / context->audioSampleRate;

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
  // totalNoise stores estimate of input noise
  float totalNoise = 0.0;

  // audio loop
  for (unsigned int n = 0; n < context->audioFrames; n++) {
    // read audio
    float in = audioRead(context, n, 0);
    float out = in;

    // Calulate noise, very poorly
    totalNoise += in;

    switch (LOOPER_A)
      {
      case 1: { // recording
        // TODO can I tirgger "end of recording" if LOOP_BUFFER_SIZE exceeded
        // If the size has not been exceeded
        if (LOOPER_A_BUF_PTR < LOOP_BUFFER_SIZE) {
          LOOPER_A_BUFFER[LOOPER_A_BUF_PTR] = out;
        }
        LOOPER_A_BUF_PTR++;
        break;
      }
      case 2: // playing
        // If the size has not been exceeded
        if (LOOPER_A_BUF_PTR < LOOP_BUFFER_SIZE) {
          out += LOOPER_A_BUFFER[LOOPER_A_BUF_PTR] * POT_A;
          LOOPER_A_BUF_PTR++;
        }
        // Start over
        else {
          LOOPER_A_BUF_PTR = 0;
        }
        break;
      }

    // always pass through
    audioWrite(context, n, 0, out);
  }

  // analog loop
  for (unsigned int n = 0; n < context->analogFrames; n++) {
    // analog led react to input
    analogWriteOnce(context, n, 0, constrain(fabs(totalNoise * 2.0), 0.0, 1.0)); // I have no idea if this is a somewhat valuable representation of input

    // read and map pots
    POT_A = normalizePot(analogRead(context, n, 0));
    POT_B = normalizePot(analogRead(context, n, 1));
    POT_C = normalizePot(analogRead(context, n, 2));
    POT_D = normalizePot(analogRead(context, n, 3));
    // rt_printf("ABCD: %.2f %.2f %.2f %.2f\n", POT_A, POT_B, POT_C, POT_D);
  }

  // digital loop
  for (unsigned int n = 0; n < context->digitalFrames; n++) {
    // on/off pin always on
    digitalWriteOnce(context, n, 0, true);

    // read buttons
    int button_a = (digitalRead(context, 0, 15) - 1) * -1;
    Click button_a_click = click_detector(BUTTON_A, button_a, LOOPER_A_TIMESTAMP);
    BUTTON_A = button_a; // update global to new state
    switch (button_a_click.type)
      {
      case 0: { // no click event
        break;
      }
      case 1: { // single click event
        // increment looper status, cap at 2
        LOOPER_A = (LOOPER_A + 1) % 3;

        // Now that status is updated,
        // If status is 1, to begin recording need to reset pointer
        // If status is 2, to begin playing need to reset pointer
        if (LOOPER_A == 1 || LOOPER_A == 2) {
          LOOPER_A_BUF_PTR = 0;
        }
        break;
      }
      case 2: { // double click event
        // Shut off looper
        LOOPER_A = 0;
        // update last timestamp click event
        LOOPER_A_TIMESTAMP = button_a_click.timestamp;
        break;
      }
      }

    // BUTTON_B = (digitalRead(context, 0, 14) - 1) * -1;
    // BUTTON_C = (digitalRead(context, 0, 13) - 1) * -1;
    // BUTTON_D = (digitalRead(context, 0, 12) - 1) * -1;
    // rt_printf("ABCD: %d %d %d %d\n", BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_D);

    // update LED_A to reflect LOOPER_A (status)
    switch (LOOPER_A)
      {
      case 0: {
        digitalWriteOnce(context, n, LED_A, false);
        break;
      }
      case 1: {
        int t = std::chrono::duration_cast<std::chrono::milliseconds>(std::chrono::steady_clock::now().time_since_epoch()).count();
        bool toggle = (t / 500) % 2 == 0; // flash every 500 ms
        digitalWriteOnce(context, n, LED_A, toggle);
        break;
      }
      case 2: {
        digitalWriteOnce(context, n, LED_A, true);
        break;
      }
      }

    // TODO off is off, recording is blinking, playback is on

    // FIXME don't use PAUSED, just delete. it can be a feature for later. will need to stop handling double click.

  }
}

void cleanup(BelaContext *context, void *userData)
{

}
