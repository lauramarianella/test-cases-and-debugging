let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [''];
let outputs = [undefined];

inputs.push('last but not least');
outputs.push('t');

inputs.push('the squeaky wheel bla bla ...');
outputs.push('.');

inputs.push("1 2 3 4 5");
outputs.push('5');

inputs.push('abc xyz 123');
outputs.push('3');


// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
  if(str === ''){
    return undefined;
  }else{
    return str.charAt(str.length-1);
  }
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
