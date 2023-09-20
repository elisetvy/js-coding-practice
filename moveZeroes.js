// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=leetcode-75

function moveZeroes(nums) {
  if (nums.length <= 1) return nums;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      for (let j = i + 1; j < nums.length; j++) {

        if (nums[j] !== 0) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
    }
  }

  return nums;
}

// console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
// console.log(moveZeroes([0])); // [0]
