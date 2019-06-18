/*https://www.codewars.com/kata/54ff3102c1bad923760001f3

Vowel Count
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
Fundamentals
Strings
Utilities*/


let verifyEquals = require('./verify-equals.js');

let inputs = [];

let outputs = [];

inputs.push("Fundamentas");
outputs.push(4);

inputs.push("Strings");
outputs.push(1);

inputs.push("Utilities");
outputs.push(5);


function getCount(str) {
  str = str.toLowerCase();
  let charStr = str.split('');
  let vowelsCount = 0;
  for(let i=0; i< charStr.length; i++){
    switch(charStr[i]){
      case 'a': vowelsCount+=1; break;
      case 'e': vowelsCount+=1; break;
      case 'i': vowelsCount+=1; break;
      case 'o': vowelsCount+=1; break;
      case 'u': vowelsCount+=1; break;
      default:  break;
    }
  }
  return vowelsCount;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = getCount(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
console.log('All tests passed for ' + __filename);