// PROBLEM B:

// The city wants to demolish all buildings classified as "old".
// You are hired to design a function called demolish?
// that determines whether a building should be torn down or not.

// BuildingStatus is one of:
// new
// old
// heritage

// interp.
// new means new
// old means old
// heritage means heritage

const BS = 'old'
const BS1 = 'new'
const BS2 = 'heritage'

// const fncForBuildingStatus = (BS) => {
//   // ...BS
// }

const shouldDemolish = (BS) => {
  if (BS === 'old') return true
  return false
}

console.log(shouldDemolish(BS))
console.log(shouldDemolish(BS1))
console.log(shouldDemolish(BS2))
