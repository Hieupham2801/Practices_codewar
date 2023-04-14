var heightChecker = function (heights) {
    let copy = [...heights];
  let count = 0;
  let sortTed = heights.sort();
  for (let i = 0; i < heights.length; i++) {
    if (sortTed[i] != copy[i]) {
      count++;
    }
  }
  return count;
};
console.log("heightChecker", heightChecker([1, 1, 4, 2, 1, 3]));
