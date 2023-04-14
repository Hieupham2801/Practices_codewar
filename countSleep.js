var countSheep = function (num) {
    let str = ''
  if (num === 0) {
    return "";
  }
  for (i = 0; i < num; i++) {
    str +=`${i+1} sheep...`
  }
  return str
};
console.log("countSheep", countSheep(2));
