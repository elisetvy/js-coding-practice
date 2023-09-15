// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

function reverseWords(str) {
  return str.replace(/\s+/g, " ").trim().split(" ").reverse().join(" ");
}

// console.log(reverseWords("the sky is blue")); // "blue is sky the"
// console.log(reverseWords("  hello world  ")); // "world hello"
// console.log(reverseWords("a good   example")); // "example good a"