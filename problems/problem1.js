// Given two strings s1, s2, find the lowest ASCII sum of deleted characters to make two strings equal.

// Example 1:

// Input: s1 = "sea", s2 = "eat"
// Output: 231
// Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
// Deleting "t" from "eat" adds 116 to the sum.
// At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

// Example 2:

// Input: s1 = "delete", s2 = "leet"
// Output: 403
// Explanation: Deleting "dee" from "delete" to turn the string into "let",
// adds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.
// At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
// If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.

// Note:
// 0 < s1.length, s2.length <= 1000.
// All elements of each string will have an ASCII value in [97, 122].


let verifyEquals = require('./verify-equals.js'); // this line imports the verifyEquals function from the verify-equals.js file

// we need 2 test cases. I provided 2 inputs
let inputs = [];
let outputs = [];

inputs.push(['sea','eat']);
outputs.push(231);

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    
    
  let charS1 = s1.split('');
  let charS2 = s2.split('');
  
  let arrayCostStr1 = costDeleteToBeEqual(charS1, charS2);
  let arrayCostStr2 = costDeleteToBeEqual(charS2, charS1);

  let cost=0;
  if(arrayCostStr1[0] == arrayCostStr2[0]) cost = arrayCostStr1[1] + arrayCostStr2[1];
  return cost;
};

function costDeleteToBeEqual(charX, charY){    
  let j=0;
  let strTmp = "";
  let cost = 0;
  for(let i=0; i< charX.length; i++){
      let chatAti=charX[i];
      while(j< charY.length){
          let chatAtj=charY[j];
          if(charX[i] === charY[j]){
             strTmp = strTmp + charX[i];
             j++;
             break;
          }else{
            //let charCode = charX.join().charCodeAt(j);
            //cost = cost + charCode;
          }
          j++;
      }
      if(j>=charY.length){
          cost = cost + charX.join().charCodeAt(i);
          j=0;
      }
  }
  
  let arrayCostStr = [];
  
  arrayCostStr[0] = strTmp;
  arrayCostStr[1] = cost;
  
  return arrayCostStr;
}

// Make this function return the first character of the string that is passed to it. If the string does not have a first character, return undefined

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];

  let actual = minimumDeleteSum(inputs[i][0], inputs[i][1]);
  
  verifyEquals(expected, actual); // verifyEquals is imported above
}

runTest(0);
console.log('All tests passed for ' + __filename);