const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// map() tutorials to iterate every element(each sentence)
// split each element into individual words
// map() that to be able to iterate all individual elements that are now individual words
// capitalize the first letter of each element that are now words
// join all elements (words) together in order to make back into sentences
// sentences should now be correct (every first letter in each being capitalized)

// function titleCased() {
//   return tutorials.map(words => {const splitWords = words.split(" ");
//   const firstLetter = splitWords.map(letter => letter[0].toUpperCase() + letter.slice(1) ).join(" ");
//   return firstLetter
// } )
// }

const titleCased = () => tutorials.map(words => {const splitWords = words.split(" ");
  const firstLetter = splitWords.map(letter => letter[0].toUpperCase() + letter.slice(1) ).join(" ");
  return firstLetter
} )