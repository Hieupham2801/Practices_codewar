function getSum(a, b) {
  let sum = 0;
  if (a == b) {
    return a;
  }

  if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (i = a; i <= b; i++) {
    sum += i
  }
  return sum;
}
console.log(getSum(-1, 2));
