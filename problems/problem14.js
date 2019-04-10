let verifyEquals = require('./verify-equals.js');

// we need 5 test cases.
let inputs = [];
let outputs = [];

//inputs.push("12345 12345 12345");
//outputs.push("12345\n12345\n12345");

inputs.push("Lorem ipsumos dolor sit amet consectetur Lorem ipsumos dolor sit amet consectetur Lorem ipsumos dolor sit amet consectetur");
outputs.push("Lorem ipsumos dolor sit amet consectetur\nLorem ipsumos dolor sit amet consectetur\nLorem ipsumos dolor sit amet consectetur");

inputs.push("Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam");
outputs.push("Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam");

inputs.push("");
outputs.push("");

inputs.push(true);
outputs.push(undefined);

inputs.push(["12345 12345 12345"]);
outputs.push(undefined);

/*
Make this function return the input string wrapped to 40 characters per line. 
This means you'll have to insert a newline \n character after every 40 characters in the input string. 
If the next character after a cut is a space, then do not display it. 

For example with the input:

Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam

the output would be:

Lorem ipsumos dolor sit amet consectetur
adipisicing elit. Magni quisquam

instead of:

Lorem ipsumos dolor sit amet consectetur
 adipisicing elit. Magni quisquam

even though there is a space before the a in adipisicing
*/
function f(str) {
  if (typeof str !== 'string') return undefined;
  if (str === "") return "";

  let n = 40;
  let i=0;

  let strTmp = str.trim();
  let strAcc = "";
  while (i<strTmp.length){
    strAcc = strAcc + strTmp.substring(0, n).trim();//first n's
    strTmp = strTmp.substring(n).trim();//remaining
    if(strTmp !== "") strAcc = strAcc + "\n"
    i = 0;
  }
  //console.log(strFin);
  return strAcc;
}

//This function runs a test. You do not need to change any code under here
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  //console.log("-" +expected +"-");
  let actual = f(inputs[i]);
  //console.log("-" + actual + "-" );
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);