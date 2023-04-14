function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    return (sqrt + 1) **2;
  }

  return -1;
}
console.log("findNextSquare(121)", findNextSquare(121));
