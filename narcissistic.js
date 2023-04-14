function narcissistic(value) {
  // Code me to return true or false
  let sum = 0;
  let result = value.toString().split("");
  let lengthNumber = result.length;
  //    console.log( Number(result));
  // let result2= result.split("")
  //    console.log(result2);
  for (let i = 0; i < lengthNumber; i++) {
    let numbers = Number(result[i]);
    sum = sum +( numbers ** lengthNumber)
    console.log(sum);
  }
  if(sum == value)
  {
    return true
  }
  else{
    return false
  }
}
narcissistic(153);
