//https://www.codewars.com/kata/56747fd5cb988479af000028

// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, 
// return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.
// Fundamentals
// Strings

// Test.assertEquals(getMiddle("test"),"es");
// Test.assertEquals(getMiddle("testing"),"t");
// Test.assertEquals(getMiddle("middle"),"dd");
// Test.assertEquals(getMiddle("A"),"A");

let verifyEquals = require('./verify-equals.js');

// we need 7 test cases. I've provided 2.
let inputs = [];

let outputs = [];

inputs.push("test");
outputs.push('es');

inputs.push("testing");
outputs.push("t");

/*
  This function expects an array of 2 numbers as input (e.g. [1,2])
  Make this function return the sum of the two numbers that are passed to it.
  If anything other than an array with 2 numbers is passed, return undefined.
  You can use the typeof function to check the type of each element (e.g. typeof 3 returns 'number')
*/


function getMiddle(s) {
  let str = s;
  if(str === '') return undefined;

  let isOdd = true;
  if(str.length%2 ===0) isOdd = false;

  let arrChars = str.split('');

  if(isOdd) return arrChars[Math.floor(str.length/2)];
  else return arrChars[(str.length/2)-1] + arrChars[(str.length/2)];
}


//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = getMiddle(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
console.log('All tests passed for ' + __filename);