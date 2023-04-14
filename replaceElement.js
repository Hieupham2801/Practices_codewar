var replaceElements = function (arr) {
  let length = arr.length;
  for (let i = length - 1; i >= 0; i--) {
    if (i != length - 1) {
      arr[i] = Math.max(arr[i], arr[i + 1]);
    }
  }
  for (let i = 1; i < length; i++) {
    arr[i - 1] = arr[i];
  }
  if (length > 0) {
    arr[length - 1] = -1;
  }
  return arr;
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
