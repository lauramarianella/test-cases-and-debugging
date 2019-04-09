let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[2, 7]];

let outputs = [14];

inputs.push([-2,-7]);
outputs.push(14);

inputs.push([2,-7]);
outputs.push(-14);

inputs.push(["str","temp"]);
outputs.push(undefined);

inputs.push([7]);
outputs.push(undefined);
/*
  The input of the function is an array.
  Make this function return the product of the two numbers in the array.
  If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(input) {
  if(typeof input !== 'object') return undefined;
  if(input.length!==2) return undefined;
  if(typeof input[0] !== 'number' || typeof input[1] !== 'number') return undefined;

  return input[0]*input[1];
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);