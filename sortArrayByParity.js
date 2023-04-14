let swap = (a, b) => {};
var sortArrayByParity = function (nums) {
  const l = nums.length;
  let i = 0;
  let j = l - 1;
  while (i < j) {
    if (nums[i] % 2 != 0) {
      if (nums[j] % 2 == 0) {
        if (i < j) {
          let t = nums[i];
          nums[i] = nums[j];
          nums[j] = t;
        }
      } else {
        j--;
      }
    } else {
      i++;
    }
  }
  return nums;
};
console.log(sortArrayByParity([3, 1, 2, 4]));
