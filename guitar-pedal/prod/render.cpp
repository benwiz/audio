#include <Bela.h>
#include <cmath>
#include <chrono>

#define LOOP_BUFFER_SIZE 2646000

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
int LOOPER_A_PTR = 0;
int LOOPER_A_PTR_MAX = 0;
float LOOPER_A_BUFFER[LOOP_BUFFER_SIZE] = {0};

// LEDs
int LED_A = 11;
int lED_B = 10; // maybe wrong
int LED_C = 9; // maybe wrong
int LED_D = 8; // maybe wrong

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

float audio_loop(int status, int &looper_ptr, int &looper_ptr_max, float* buf, float pot_value, float in)
{
  float out = 0;
  switch (status)
    {
    case 0: { // off
      // Reset buffer
      looper_ptr = 0;
    }
    case 1: { // recording
      // If the size has not been exceeded
      if (looper_ptr < LOOP_BUFFER_SIZE) {
        buf[looper_ptr] = in;
        looper_ptr++;
      }
      // TODO later, toggle the status to 2 which will start playback
      break;
    }
    case 2: // playing
      // If the size has not been exceeded
      // rt_printf("XXX: %d / %d\n", looper_ptr, looper_ptr_max);
      if (looper_ptr <= looper_ptr_max) {
        out += buf[looper_ptr] * pot_value;
        looper_ptr++;
      }
      // Start over
      else {
        looper_ptr = 1; // I'm not sure why the ptr resets to 1 instead of 0, `case 0` sets 0.
      }
      break;
    }
  // rt_printf("out: %.2f\n", out);
  return out;
}

void read_button(BelaContext *context, int pin, int &button_status, int &looper_status, int &looper_timestamp, int &looper_ptr, int &looper_ptr_max)
{
  int button = (digitalRead(context, 0, pin) - 1) * -1;
  Click button_click = click_detector(button_status, button, looper_timestamp);
  button_status = button; // update global to new state
  switch (button_click.type)
    {
    case 0: { // no click event
      break;
    }
    case 1: { // single click event
      // increment looper status, cap at 2
      looper_status = (looper_status + 1) % 3;

      // Now that status is updated,
      // If status is 1, to begin recording need to reset pointer
      if (looper_status == 1) {
        looper_ptr = 0;
      }
      // If status is 2, need to mark the latest ptr value and reset
      // to begin playing need to reset pointer until the latest value
      if (looper_status == 2) {
        rt_printf("looper_ptr max: %d\n", looper_ptr);
        looper_ptr_max = looper_ptr;
        looper_ptr = 0;
      }
      break;
    }
    case 2: { // double click event
      // Shut off looper
      looper_status = 0;
      // update last timestamp click event
      looper_timestamp = button_click.timestamp;
      break;
    }
    }
}

void set_looper_led(BelaContext *context, int n, int pin, int status)
{
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

    // Audio loops
    // rt_printf("BEFORE---- %d %d %f %f %f\n", LOOPER_A, LOOPER_A_PTR, POT_A, in, out);
    out += audio_loop(LOOPER_A, LOOPER_A_PTR, LOOPER_A_PTR_MAX, LOOPER_A_BUFFER, POT_A, in);
    // rt_printf("AFTER----- %d %d %f %f %f\n", LOOPER_A, LOOPER_A_PTR, POT_A, in, out);

    // Output audio
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
    // on/off led pin always on
    digitalWriteOnce(context, n, 0, true);

    // read buttons
    read_button(context, 15, BUTTON_A, LOOPER_A, LOOPER_A_TIMESTAMP, LOOPER_A_PTR, LOOPER_A_PTR_MAX);

    // BUTTON_B = (digitalRead(context, 0, 14) - 1) * -1;
    // BUTTON_C = (digitalRead(context, 0, 13) - 1) * -1;
    // BUTTON_D = (digitalRead(context, 0, 12) - 1) * -1;
    // rt_printf("ABCD: %d %d %d %d\n", BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_D);

    // update LED_A to reflect LOOPER_A (status)
    set_looper_led(context, n, LED_A, LOOPER_A);
  }
}

void cleanup(BelaContext *context, void *userData)
{

}
