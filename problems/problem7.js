let verifyEquals = require('./verify-equals.js');

// we need 7 test cases.
let inputs = [["foo", 3]];

let outputs = ["foofoofoo"];

inputs.push(['fo',3]);
outputs.push("fofofo");

inputs.push(['fo',-1]);
outputs.push("");

inputs.push(['fo',0]);
outputs.push("");

inputs.push([true,2]);
outputs.push(undefined);

inputs.push(["foo","tmp"]);
outputs.push(undefined);

inputs.push(["tmp"]);
outputs.push(undefined);

/*
The function input is an array. The first element of the array is a string. The second is a number.
Make this function return the string repeated as many times as specified by the second element of the array. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // ""
*/
function f(arr) {
  if(typeof arr !== 'object') return undefined; 
  if(arr.length !== 2) return undefined;
  if(typeof arr[0] !== 'string' || typeof arr[1] !== 'number') return undefined;


  let times = arr[1];
  if(times <=0) return "";
  
  let stringRepeated = "";

  let i=0;
  while(i < times){
    stringRepeated = stringRepeated + arr[0];
    i++;
  }
  return stringRepeated;
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
runTest(6);
console.log('All tests passed for ' + __filename);