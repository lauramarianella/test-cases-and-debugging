let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [[1,2,3]];

let outputs = [6];

inputs.push([1,'hola',3]);
outputs.push(4);

inputs.push([]);
outputs.push(0);

inputs.push(['1','hola',3]);
outputs.push(3);

inputs.push(['1','hola',"tmp"]);
outputs.push(0);

/*
  Make this function return the sum of all the numbers in the input array.
  If any element in the array is not a number, skip it. If the array is empty, return zero.
  What about all array elements being string? return zero or undefined
*/
function f(arr) {
  let acc = 0;
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === "number") acc = acc + arr[i];
  }
  return acc;
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
