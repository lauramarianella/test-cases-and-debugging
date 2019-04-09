let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = ["hey hello morning"];

let outputs = ["morning"];

inputs.push("");
outputs.push("");

inputs.push("hey morning MORNING");
outputs.push("MORNING");

inputs.push(true);
outputs.push(undefined);

inputs.push("longest is me");
outputs.push("longest");

/*
Make this function return the longest word in the input string. If the input string is empty then return an empty string.
If multiple words have the same length, return the last one that matches.

Example
  f("hey hello morning") returns "morning"

HINTS: 
   - You'll need to use the split string method
   - A for loop might be helpful
*/
function f(str) {
  if (typeof str !== 'string') return undefined;

  if (str==="") return "";
  let strArray = str.split(" ");
  tmp = strArray[0];
  for(let i=1; i<strArray.length; i++){
    if (strArray[i].length >= tmp.length){
      tmp = strArray[i];
    }
  }

  return tmp;
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