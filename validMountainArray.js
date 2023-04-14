var validMountainArray = function (arr) {
  let count = 0;
  let length = arr.length;
  let isChange = true;
  for (let i = 0; i + 1 < length; i++) {
    let j = i + 1;
    if (arr[i] < arr[j]) {
      count++;
    } else if (arr[i] == arr[j]) {
      return false;
    }
  }
  return true;
};
console.log(validMountainArray([0, 3, 2, 1]));
