function removeSmallest(numbers) {
  if (numbers.length == 0) {
    return [];
  }
  for (const number of numbers) {
    if (number == Math.min(...numbers)) {
        const index = numbers.indexOf(number);
        if (index > -1) {
          numbers.splice(index, 1);
        }
    }
  }
  return numbers;
}
console.log("v", removeSmallest([5, 3, 2, 1, 4]));
