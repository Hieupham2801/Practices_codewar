// function findOutlier(integers) {
//   let even = [];
//   let odd = [];
//   let length = integers.length;
//   for (let i = 0; i < length; i++) {
//     if (integers[i] % 2 == 0) {
//       even.push(integers[i]);
//     } else {
//       {
//         odd.push(integers[i]);
//       }
//     }
//   }
//   if (even.length < 2) {
//     return even;
//   }
//   if (odd.length < 2) {
//     return odd;
//   }
// }
const findOutlier =(arr) =>{
 let even = arr.filter((a)=> a %2 ==0 )
 let odd = arr.filter((a)=> a %2 !=0 )
 return even.length == 1 ? even[0]: odd[0]

}
console.log(findOutlier([1, 2, 3]));
