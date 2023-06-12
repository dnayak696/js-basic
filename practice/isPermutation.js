
const str1 = "Hello, world!";

const str2 = "Hello, wordl!";


console.log(isPermutation(str1, str2));



function isPermutation(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // Different lengths, not permutations
    }
  
    const charCount = {};
  
    // Count characters in str1
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Compare character frequencies in str2
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if (!charCount[char]) {
        return false; // Character not present or count is already 0
      }
      charCount[char]--;
    }
  
    return true; // All characters have the same frequency
  }
