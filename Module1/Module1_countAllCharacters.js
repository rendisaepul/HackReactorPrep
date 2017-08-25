/*Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}*/

function countAllCharacters(str) {
  var dict = {};
  if (!str == '') {
    var arr = str.slice();
    for (var i = 0; i < arr.length; i++) {
      if (typeof dict[arr[i]] != 'undefined') {
        dict[arr[i]] += 1;
      } else {
          dict[arr[i]] = 1;
      }
    }
  }
  return dict;
}

var output = countAllCharacters('banana');
console.log(output);
