// https://leetcode.com/problems/maximum-average-subarray-i/?envType=study-plan-v2&envId=leetcode-75

var findMaxAverage = function(nums, k) {
  let currSum = nums.slice(0, k).reduce((a, b) => a + b);
  let maxAvg = nums.slice(0, k).reduce((a, b) => a + b) / k;

  for (let i = 1; i <= nums.length - k; i++) {
    currSum = currSum - nums[i - 1] + nums[i + k - 1];

    if (currSum / k > maxAvg) {
      maxAvg = currSum / k;
    }
  }

  return maxAvg;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
console.log(findMaxAverage([5], 1));