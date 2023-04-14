function findMaxSum(n) {
  let arr = [];
  let maxA = [];
  let maxB = [];
  let maxC = [];

  let a = 0;
  let b = 0;
  let c = 0;
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) % 2 == 0) {
        if (i > j) {
          maxA.push(i);
        }
        if (j > i) {
          maxA.push(j);
        }
      }
      if ((arr[i] + arr[j]) % 3 == 0) {
        // console.log("i,j lan 2", i, j);

        if (i % 2 == 0) {
          b = i;
          c = j;
        } else {
          c = i;
          b = j;
        }
        maxB.push(b);
        maxC.push(c);
      }
    }
  }
  let result1 = new Set(maxA);
  let maxa = Math.max(...result1);
  let result2 = new Set(maxB);
  let maxb = Math.max(...result2);
  let result3 = new Set(maxC);
  let maxc = Math.max(...result3);
  console.log(maxa);
  // let result1 = Math.max(...maxA);

  console.log(maxa, maxb, maxc);
  if ((maxa + maxb + maxc) % 5 == 0) {
    return maxa + maxb + maxc;
  } else {
    return 0;
  }
}
console.log(findMaxSum(29));
