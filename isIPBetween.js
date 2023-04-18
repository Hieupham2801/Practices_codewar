function ipsBetween(start, end) {
  //TODO
  const firstNums = start.split(".").map(Number).reverse()
  const secondNums = end.split(".").map(Number).reverse()
  let sum = 0;
  for (let i = firstNums.length -1; i >= 0; i--) {
    sum += (secondNums[i] - firstNums[i]) * 256 ** i;
  }
  return sum;
}
console.log(ipsBetween("150.0.0.0", "150.0.0.50"));
