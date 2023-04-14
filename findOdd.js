function findOdd(arr) {
  const counts = {};
  for (const num of arr) {
    if (num in counts) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  for (const [num, count] of Object.entries(counts)) {
    if (count % 2 === 1) {
      return parseInt(num);
    }
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
