// PROBLEM:
// Consider designing the system for controlling a New Year's Eve display. Design a data definition to represent the current state of the countdown, which falls into one of three categories:
// 1. not yet started
// 2. from 10 to 1 seconds before midnight
// 3. complete (Happy New Year!)

// countDown is one of:
// false
// Natural[1,10]
// 'complete'

// interp.
// false means not yet started
// Natural[1,10] means from 10 to 1 seconds before midnight
// 'complete' means complete (Happy New Year!)

const CD1 = false
const CD2 = 10
const CD3 = 1
const CD4 = 'complete'

const fnForCountdown = (CD) => {
  switch (CD) {
    case false:
      // ...
      break
    case typeof CD === Number && CD >= 1 && CD <= 10:
      // ...
      break
    case typeof CD === String && CD === 'complete':
      // ...
      break
    default:
      break
  }
}
