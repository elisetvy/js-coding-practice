// https://leetcode.com/problems/can-place-flowers/?envType=study-plan-v2&envId=leetcode-75

const canPlaceFlowers = function(flowerbed, n) {
  let spots = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (!flowerbed[i]){
      if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
        spots++;
        i += 1
      }
    }
  }
  return spots >= n;
};

// console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
// console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false