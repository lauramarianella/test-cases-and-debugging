// pro tip: use nodemon instead of node
let verifyEquals = require('./verify-equals.js');

// we need 6 test cases.
let inputs = [['add', 10, 20], ['chair', 20, 10]];

let outputs = [30, undefined];

inputs.push(['sub', 10, 20]);
outputs.push(-10);

inputs.push(['mult', 10, 20]);
outputs.push(200);

inputs.push([10, 'mult', 20]);
outputs.push(undefined);

inputs.push([true, 'mult', 20]);
outputs.push(undefined);

/*
The function takes an array. The array has 3 elements. The first element of the array is a string that represents an operation.
If the operation is "add", return the sum of the two other elements of the array. "sub" return their difference. "mult" return their product.  
Anything else return undefined. 
For example:
f(["add", 10, 20]); // 30
f(["mult", 2, 3]); // 6
f(["spoof", 10, 10]); // undefined

*/
function f(arr) {
  if(typeof arr !== 'object') return undefined;
  if(arr.length !== 3) return undefined;
  if(typeof arr[0] !== 'string' || typeof arr[1] !== 'number' || typeof arr[2] !== 'number') return undefined;


  let result = 0;
  let operation = "";
  operation = arr[0];
  operation = operation.toLocaleLowerCase();

  switch(operation) {
    case 'add':
      result = arr[1] + arr[2];
      break;
    case 'sub':
      result = arr[1] - arr[2];
      break;
    case 'mult':
      result = arr[1] * arr[2];
      break;
    default:
      result = undefined;
      break;
  } 

  return result;
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
runTest(5);
console.log('All tests passed for ' + __filename);