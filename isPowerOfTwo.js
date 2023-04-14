// function getBaseLog(x, y) {
//     return Math.log(y) / Math.log(x);
//   }
function isPowerOfTwo(n){
    let isValid = false
    let a=  Math.log2(n)
    if(Number.isInteger(a))
    {
        isValid =  true
    }
    else{
        isValid =  false
    }
    return isValid
  }
  isPowerOfTwo(333)