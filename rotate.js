function rotate(str) {
  let length = str.length;
 
  if (str === "") {
    return [];
  }
  let result = [];
  for (let i = 0; i < length; i++) {
    const rotated = str.slice(i) + str.slice(0, i);
    result.push(rotated);
    
  }
  result.push(result.shift())
  if (result.length > 0) {
    return result;
  }
}
console.log('rotate("Hello")', rotate("Hello"));
