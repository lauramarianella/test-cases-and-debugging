let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 5 test cases. I provided 1 input
let inputs = ['max'];
let outputs = ['m'];

<<<<<<< HEAD
inputs.push('1xl9');
outputs.push(undefined);

inputs.push('abc');
outputs.push('a');

inputs.push('xyz');
outputs.push('x');

inputs.push('reverse');
outputs.push('r');

// Make this function return the first character of the string that is passed to it. If the string does not have a first letter, return undefined
=======
// Make this function return the first character of the string that is passed to it. If the string does not have a first character, return undefined
>>>>>>> 49c82c328c38586bb38fa1e6013a90e58d5f1905
function f(str) {
  if(typeof str !== 'string') return undefined;
  let chr = str.charAt(0);
 //if(typeof chr === 'string') return chr;

 if (!/[^a-zA-Z]/.test(chr))  {
   return chr;
 }else return undefined;
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