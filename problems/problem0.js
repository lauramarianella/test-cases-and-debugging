// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Example:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
function highAndLow(numbers) {
  let arrTmpStr = numbers.split(' ');
  let arrTmpNum = arrTmpStr.map((elem) => Number(elem));

  let min = arrTmpNum[0];

  let arrMin = arrTmpNum.forEach((num) => {
    if (min > num) min = num;
  });

  let max = arrTmpNum[0];
  let arrMax = arrTmpNum.forEach((num) => {
    if (max < num) max = num;
  });

  return max + ' ' + min;
}
let response = '';
// response = highAndLow('1 2 3 4 5');
// response = highAndLow('1 2 -3 4 5');
response = highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'); //"542 -214"
