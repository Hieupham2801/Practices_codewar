function findMissingLetter(array) {
  //
  let result = array.map(char => char.charCodeAt(0))
  .reduce((current, previous) => previous + current)
  console.log('result',result);
  for (const i of array) {
    let char = String.fromCharCode(+i);
    // let char = array.charCodeAt([+i])
    console.log(char);
  }
  //   console.log(char);
  return " ";
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
