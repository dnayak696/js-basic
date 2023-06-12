// User
// Palindrome Permutation: Given a string, write a function
// to check if it is a permutation of a palin­ drome. A palindrome is a word or phrase that is the same forwards and backwards. 

isPalindromePermutation();

function isPalindromePermutation(str) {
    // Convert the string to lowercase and remove spaces
    str = str.toLowerCase().replace(/\s/g, '');
  
    const charCount = {};
    let oddCount = 0;
  
    // Count the occurrence of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Count the number of characters with odd frequency
    for (const char in charCount) {
      if (charCount[char] % 2 !== 0) {
        oddCount++;
      }
    }
  
    // Check if the string can be rearranged into a palindrome
    return oddCount <= 1;
  }