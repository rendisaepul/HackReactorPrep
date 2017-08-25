/*Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.
*/

function convertObjectToList(obj) {
  var arr = [];
  for (var i in obj) {
    arr.push([i, obj[i]]);
  }
  return arr;
}

var obj = {
  name: 'Holly',
  age: 35,
  role: 'producer'
};
console.log(convertObjectToList(obj));
