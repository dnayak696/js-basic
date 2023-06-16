const str1 = "Hello, world!";
const str2 = "Hello wordl!,";


console.log(isPermutation(str1,str2));

function isPermutation (str1, str2){

    const charCount = {};

    // char count of 1st string
    for( let i = 0; i < str1.length; i++ ){
           const char = str1[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // loop throgh the second string and find if the string contaions the specific chareacter
      for (let i = 0; i <str2.length; i++) {

        const char = str2[i];
        if(!charCount[char]){
            return false;
        }else{
            charCount[char]--;

        }

      }

      return true;


}