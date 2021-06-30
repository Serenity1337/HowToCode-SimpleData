// PROBLEM:

// You are asked to contribute to the design for a very simple New Year's Eve countdown display.You already have the data definition given below. You need to design a function that consumes Countdown and produces the current status of the coundown

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

// const fnForCountdown = (CD) => {
//   switch (CD) {
//     case false:
//       // ...
//       break
//     case typeof CD === Number && CD >= 1 && CD <= 10:
//       // ...
//       break
//     case typeof CD === String && CD === 'complete':
//       // ...
//       break
//     default:
//       break
//   }
// }

// countdown --> countdown
// produces a countdown

const countdown = (CD) => {
  if (CD === false) return console.log('The countdown is not running yet')
  if (typeof CD === 'number' && CD >= 1 && CD <= 10)
    return console.log(`The countdown is starting: ${CD}`)
  if (typeof CD === 'string' && CD === 'complete')
    return console.log('The countdown has finished! Happy New Years!')
}

countdown(CD1)
countdown(CD2)
countdown(CD3)
countdown(CD4)
