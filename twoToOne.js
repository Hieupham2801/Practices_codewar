// let sortString = (str) => {
//   set = new Set(str);
//   let arr = Array.from(set);
//   return arr.join("");
// };
// function longest(s1, s2) {
//   let fullStr = s1 +s2
//   let result = sortString(fullStr)
//     return result.split('').sort().join('')

// }
const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"));
