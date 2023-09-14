// https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

const mergeAlternately = function(word1, word2) {
  let shortestWord;
  let longestWord;
  let shortestLength;

  if (word1.length <= word2.length) {
      shortestWord = word1;
      longestWord = word2;
      shortestLength = word1.length;
  } else {
      shortestWord = word2;
      longestWord = word1;
      shortestLength = word2.length;
  }

  let str = '';

  for (let i = 0; i < shortestLength; i++) {
      str += word1[i] + word2[i];
  }

  return str + longestWord.slice(shortestLength);
};

// console.log(mergeAlternately("abc", "pqr")); // "apbqcr"
// console.log(mergeAlternately("ab", "pqrs")); // "apbqrs"
// console.log(mergeAlternately("abcd", "pq")); // "apbqcd"
