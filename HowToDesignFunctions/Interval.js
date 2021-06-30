// PROBLEM:

// Using the SeatNum data definition below, design a function that produces true if the given seat number is one the aisle.

// SeatNum is Natural[1,32]
// interp. seat numbers in a row, 1 to 32 are aisle seats

const SN1 = 1
const SN2 = 12
const SN32 = 32

const fnForSeatNum = (SN) => {
  // ...SN
}

// SeatNum --> Boolean
// interp. Produce true if SeatNum is in the aisle

const isOnAisle = (SN) => {
  if (SN === 1 || SN === 32) return true
  return false
}

console.log(isOnAisle(SN1))
console.log(isOnAisle(SN2))
console.log(isOnAisle(SN32))
console.log(isOnAisle(33))
console.log(isOnAisle(-1))
