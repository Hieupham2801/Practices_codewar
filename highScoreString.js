function high(words) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let highestScore = 0;
  let highestScoreWord = "";

  const wordArray = words.split(" ");

  wordArray.forEach((word) => {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      const index = alphabet.indexOf(word[i]) + 1;
      score += index;
    }
    if (score > highestScore) {
      highestScore = score;
      highestScoreWord = word;
    }
  });

  return highestScoreWord;
}

console.log(high("man i need a taxi up to ubud"));
