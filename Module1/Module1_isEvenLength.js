/*Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false*/

function isEvenLength(word) {
  if (word.length % 2 == 0) return true;
  return false;
}

var output = isEvenLength('wow');
console.log(output);
