function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
function gap(g, m, n) {
  let prevPrime = 0;
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) {
      if (i - prevPrime === g) {
        return [prevPrime, i];
      }
      prevPrime = i;
    }
  }
  return null;
}
// console.log(test_prime())
console.log(gap(6, 100, 110));
