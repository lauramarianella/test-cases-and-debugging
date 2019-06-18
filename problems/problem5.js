/*
https://www.codewars.com/kata/554b4ac871d6813a03000035

Highest and Lowest

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.

Fundamentals
Strings */

let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [];
let outputs = [];

inputs.push("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
outputs.push("542 -214");

inputs.push("1 2 -3 4 5");
outputs.push("5 -3");

inputs.push("1 9 3 4 -5");
outputs.push("9 -5");

function highAndLow(numbers) {
  let charNumArr = numbers.split(' ');

  let max = parseInt(charNumArr[0]);
  let min = max;
  for(let i=1; i<charNumArr.length; i++){
    if (max < parseInt(charNumArr[i])) max = charNumArr[i];
    if (min > parseInt(charNumArr[i])) min = charNumArr[i];
  }
  return max + ' ' + min;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = highAndLow(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
// runTest(3);
// runTest(4);
console.log('All tests passed for ' + __filename);