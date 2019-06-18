/*https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
Shortest Word
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
Fundamentals

Test.describe("Example tests",_=>{
  Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
  Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
  });
*/

// pro tip: use nodemon instead of node
let verifyEquals = require('./verify-equals.js');

// we need 6 test cases.
let inputs = [];
let outputs = [];

inputs.push("bitcoin take over the world maybe who knows perhaps");
outputs.push(3);

inputs.push("turns out random test cases are easier than writing out basic ones");
outputs.push(3);


function findShort(s){
  let strArray = s.split(' ');
  let strTmp = strArray[0];
  for(let i=1; i< strArray.length; i++){
    if(strTmp.length > strArray[i].length) strTmp = strArray[i]
  }
  
  return strTmp.length;
  }

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = findShort(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);

console.log('All tests passed for ' + __filename);