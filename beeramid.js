// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
  let beers = Math.floor(bonus / price);
  let completeBeer = 0;
  while (beers > 0) {
    const canNeeds = Math.pow(completeBeer + 1, 2);
    if (beers >= canNeeds) {
      completeBeer++;
      beers -= canNeeds;
    } else {
      break;
    }
  }
  return completeBeer
};
console.log(beeramid(9, 2));
