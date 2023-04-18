function generateHashtag(str) {
  const output =
    str.trim().length > 0 &&
    "#" +
      str
        .split(" ")
        .map((word) => word && word[0].toUpperCase() + word.slice(1))
        .join("");
  return output.length <= 140 && output;
}
console.log(generateHashtag("a".repeat(140)));
