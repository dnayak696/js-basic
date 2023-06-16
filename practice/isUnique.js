



const string = "adb";
console.log(string);
console.log(isUnique(string));



function isUnique(string2) {
    const str = string2.split('');
     
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false; // Found a duplicate character
      }
    }
  }
  return true; // No duplicates found
}


