function notSoRandom(b, w) {
  //coding and coding..
  let arrStr = []
  console.log(b, w);
  if (b === w) {
    arrStr.push("Black")
  } else {
    arrStr.push("White")
  }
  return arrStr
}
console.log(notSoRandom(6, 9));
console.log(notSoRandom(1, 1));
console.log(notSoRandom(2, 1));
