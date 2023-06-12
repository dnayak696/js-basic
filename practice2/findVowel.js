



      const vowel = ['a','e','i','o','u'];

      const countVowel = (str) =>{
        var count= 0;
        if(let letter of str.toLowerCase()){
            if(vowels.includes(letter)){
                count ++;
            }
        }
        return count;
      }
