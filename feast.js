function feast(beast, dish) {
  //your function here
  let result1 = beast.split("");
  let result2 = dish.split("");
  console.log(result1[result1.leht-1]);
  console.log(result2[0]);

  console.log(result2[0]);

  if (
    result1[0] === result2[0] &&
    result1[result1.length - 1] === result2[result2.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(feast("great blue heron", "garlic naan"));
