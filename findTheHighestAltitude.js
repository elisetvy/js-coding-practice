// https://leetcode.com/problems/find-the-highest-altitude/

function findTheHighestAltitude(gain) {
  let max = 0;
  let curr = 0;

  for (const i of gain) {
    curr += i;

    if (curr > max) {
      max = curr;
    }
  }

  return Math.abs(max);
};

console.log(findTheHighestAltitude([-5,1,5,0,-7])); // 1
console.log(findTheHighestAltitude([-4,-3,-2,-1,4,3,2])); // 0
