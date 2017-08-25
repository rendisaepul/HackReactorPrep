/*Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"*/

function convertDoubleSpaceToSingle(str) {
  return str.replace(/\s+/g, ' ');
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output);
