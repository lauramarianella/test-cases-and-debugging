let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 5 test cases. I provided 1 input
let inputs = ['max'];
inputs.push('1xl9');
inputs.push('abc');
inputs.push('xyz');
inputs.push('reverse');

let outputs = ['m'];
outputs.push('1');
outputs.push('a');
outputs.push('x');
outputs.push('r');

// Make this function return the first character of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
  return str.charAt(0);
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual); // verifyEquals is imported above
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);