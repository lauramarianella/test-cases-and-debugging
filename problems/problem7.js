/*
https://www.codewars.com/kata/552c028c030765286c00007d

IQ Test

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 
Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, 
he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/

let verifyEquals = require('./verify-equals.js');

// we need 7 test cases.
let inputs = [];
let outputs = [];

inputs.push("2 4 7 8 10");
outputs.push(3);

inputs.push("1 2 1 1");
outputs.push(2);


function iqTest(s) {
  let arrayNums = s.split(' ');
  let index = 0;
  let countEven = 0;
  let countOdd = 0;
  for(let i=0; i< arrayNums.length; i++){
    if(arrayNums[i] %2 ===0 ){//isEven
      countEven++;
    }else{
      countOdd++;
    }

  }

  if(countEven === 1){
    s.filter(x => x%2==0);
  }else{//odd
    s.filter(x => x%2>0);
  }
}



//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = iqTest(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
console.log('All tests passed for ' + __filename);