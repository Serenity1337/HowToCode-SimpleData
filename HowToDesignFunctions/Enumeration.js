// PROBLEM:

// Using the LetterGrade data definition below, design a function, that consumes a letter grade and produces the next highest letter grade.

// Call your fucntion bump-up

// Grade is one of: "A", "B", "C"
// interp. The letter grade in a course.

const LG1 = 'A'
const LG2 = 'B'
const LG3 = 'C'

// const fcForLetterGrade = (LG) => {
//   switch (LG) {
//     case 'A':
//       // ...
//       break
//     case 'B':
//       // ...
//       break
//     case 'C':
//       // ...
//       break
//     default:
//       break
//   }
// }

//LetterGrade --> LetterGrade
//Produce a higher LetterGrade

const bumpUp = (LG) => {
  switch (LG) {
    case 'A':
      console.log('A')
      break
    case 'B':
      console.log('A')
      break
    case 'C':
      console.log('B')
      break
    default:
      break
  }
}
bumpUp(LG1)
bumpUp(LG2)
bumpUp(LG3)
