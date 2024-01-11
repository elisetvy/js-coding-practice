// https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75

var findMaxAverage = function(nums, k) {
  let max = -Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    let currAverage = nums.slice(i, i + k).reduce((a, b) => a + b) / k;

    if (currAverage > max) {
      max = currAverage
    }
  }

  return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1))
