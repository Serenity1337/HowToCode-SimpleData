// PROBLEM B:

// Design a function that will output the rocket's remaining descent distance
// in a short string that can be broadcast on Twitter.
// When the descent is over, the message should be "The rocket has landed!".
// Call your function rocket-descent-to-msg.

// Distance is Natural[0,100]
// interp. track the distance between 0 and 100 kilometers

const DIST = 0
const DIST1 = 50
const DIST2 = 100

const RocketDescentToMsg = (DIST) => {
  if (DIST > 0 && DIST <= 100) return `Distance to descending is  ${DIST}`
  return 'The rocket has landed!'
}

console.log(RocketDescentToMsg(DIST2))
console.log(RocketDescentToMsg(DIST1))
console.log(RocketDescentToMsg(DIST))
