// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

function findTheDifferenceOfTwoArrays(nums1, nums2) {
  const new1 = [];
  const new2 = [];

  for (num of nums1) {
    if (!nums2.includes(num) && !new1.includes(num)) new1.push(num);
  }

  for (num of nums2) {
    if (!nums1.includes(num) && !new2.includes(num)) new2.push(num);
  }

  return[new1, new2];
}

// console.log(findTheDifferenceOfTwoArrays([1,2,3], [2,4,6])); // [[1,3], [4,6]]
// console.log(findTheDifferenceOfTwoArrays([1,2,3,3], [1,1,2,2])); // [[3], []]