// Problem: Design a function that pluralizes a given word. (Pluralize means to convert the word to its plural form.) For simplicity you may assume that just adding s is enough to pluralize a word.

// String --> String
// Produce a string's plural form
// const pluralize = (string) => {return string}
// const pluralize = (string) => {return ... string}
const pluralize = (string) => {
  return string + 's'
}
console.log(pluralize('dog'))
