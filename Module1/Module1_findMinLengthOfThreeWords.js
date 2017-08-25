/*Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1*/

function findMinLengthOfThreeWords(word1, word2, word3) {
  var result = Math.min (word1.length, word2.length, word3.length);
  return result;
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output);
