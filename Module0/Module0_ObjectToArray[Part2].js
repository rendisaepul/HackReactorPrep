/*Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]*/

function listAllValues(obj) {
  var arr = [];
  for (var i in obj) {
    arr.push(obj[i]);
  }
  return arr;
}

var obj = {
  name : 'Krysten',
  age : 33,
  hasPets : false
};
console.log(listAllValues(obj));
