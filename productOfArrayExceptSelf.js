// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75

var productExceptSelf = function(nums) {
  const products = [];

  for (let i = 0; i < nums.length; i++) {
    const exceptSelf = nums.slice(0, i).concat(nums.slice(i + 1));

    if (exceptSelf.includes(0)) {
      products.push(0);
    } else {
      products.push(getProduct(exceptSelf));
    }
  }

  return products;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]