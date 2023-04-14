var thirdMax = function (nums) {
  let result = [];
  if (nums.length > 2) {
    let sorted = nums.sort((a, b) => {
      return b - a;
    });
    let set = new Set(sorted);
    let num2 = Array.from(set);
    result = num2[num2.length - 1];
  } else {
    result = nums[1];
  }
  return result;
};
console.log(thirdMax([1,1,2]));
