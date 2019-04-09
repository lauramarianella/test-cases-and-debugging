let verifyEquals = require('./verify-equals.js');

// we need 8 test cases. I've provided the first 2
let inputs = [['hello', 4], ['', 2]];

let outputs = ['o', undefined];

inputs.push(['hello', 40]);
outputs.push(undefined);

inputs.push(["string", "1"]);
outputs.push(undefined);

inputs.push([2, "hello hw r u"]);
outputs.push(undefined);

inputs.push([['array string'], 1]);
outputs.push(undefined);

inputs.push([true, 3]);
outputs.push(undefined);

inputs.push(['hello', -4]);
outputs.push(undefined);


/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.

For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a

*/
function f(arr) {
  if(typeof arr === 'object'){//if it is array
    if (arr.length===2){
      if(typeof arr[0] === 'string' && typeof arr[1] === "number"){
        if(arr[1] <= arr[0].length && arr[1] >=0){
          if (arr[0] === ""){
            return undefined;
          }
          return arr[0].charAt(arr[1]);
        }
      }
    }
  }

  return undefined;
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
runTest(7);
console.log('All tests passed for ' + __filename);