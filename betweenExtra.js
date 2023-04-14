function betweenExtremes(numbers) {
  //write your code here
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return max - min;
}
console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
