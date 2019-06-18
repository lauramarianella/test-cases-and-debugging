//https://www.codewars.com/kata/5715eaedb436cf5606000381

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// Fundamentals
// Arrays
// Numbers
// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);


let verifyEquals = require('./verify-equals.js');


let inputs = [];
let outputs = [];

inputs.push([1,-4,7,12]);
outputs.push(20);

inputs.push([-1,-2,-3,-4,-5]);
outputs.push(0);


// Make this function return the last character of the string that is passed to it. If the string does not have a last character, return undefined
function sumPositives(arr){
  if (arr.length ===0 ) return 0;
  let arrayOnlyPositives = arr.filter( (i) => (i>0));
  if (arrayOnlyPositives.length ===0 ) return 0;

  let tot = arrayOnlyPositives.reduce( (acc, curr) => acc +=curr );
  return tot;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = sumPositives(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
console.log('All tests passed for ' + __filename);