let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ["JAVASCRIPT"];

let outputs = ["No"];

inputs.push("RADAR");
outputs.push("Yes");

inputs.push("AnnA");
outputs.push("Yes");

inputs.push("KAYak");
outputs.push("Yes");

inputs.push("Rotator");
outputs.push("Yes");

/*
Make this function return true if the input string is a palindrome, and false otherwise. A palindrome is simply a string that is the same if you reverse it.

RADAR -> Yes
JAVASCRIPT -> No
*/
function f(str) {
  if(typeof str !== "string") return undefined;
  
  str = str.toLowerCase();

  // let charArray= str.split("");
  // let charArrayReverse = charArray.reverse();
  // let tmp1 = charArrayReversed.join();
  
  let tmp = str.split("").reverse().join("");
  if(str === tmp) return 'Yes';
  return 'No';
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