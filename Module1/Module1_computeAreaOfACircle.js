/*Write a function called "computeAreaOfACircle".

Given the radius of a circle, "computeAreaOfACircle" returns its area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669*/

function computeAreaOfACircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
