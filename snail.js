const snail = function (array) {
  let arr = array;
  let snailOutPut = [];
  if (arr.length == 0) {
    return [];
  }
  if (arr.length == 1) {
    return arr[0];
  }
  while (arr.length > 0) {
    // get first row
    const firstRow = arr[0];
    // save first row
    snailOutPut= snailOutPut.concat(firstRow);
    // remove first row
    arr.shift();
    // rotate 90 degree
    if (arr[0]) {
      arr = arr[0].map((col, i) => arr.map((row) => row[row.length - 1 - i]));
    }
    
  }
//   return snailOutPut;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
