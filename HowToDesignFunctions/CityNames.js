// PROBLEM2:
// Using the cityame data definition below, design a function, that produces true, if the given city is the best in the world. (You are free to decide for yourself whic his the best city in the world.)

// Design a data definition to represent the name of a city.

// CityName is a String.
// interp. the name of a city
const CN1 = 'Boston'
const CN2 = 'Vancouver'
const CN3 = 'Hogsmeade'

// const fnForCityName = (cn) => {
//   //... cn
// }

// CityName --> Boolean
// Produce if the given city is the best in the world

const best = (cn) => (cn === 'Hogsmeade' ? true : false)

console.log(best(CN1))
console.log(best(CN2))
console.log(best(CN3))
