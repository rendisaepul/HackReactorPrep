/*Write a function called "getAllKeys" which returns an array of all the input object's keys.
Example input:
{
  name : 'Sam',
  age : 25,
  hasPets : true
}

Function's return value (output) :
['name', 'age', 'hasPets']*/

function getAllKeys(obj) {
  var arr = [];
  for (var i in obj) {
    arr.push(i);
  }
  return arr;
}

var object = {
  name : 'Sam',
  age : 25,
  hasPets : true
};
getAllKeys(object);
