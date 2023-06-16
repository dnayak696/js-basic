// Write a JavaScript program that accepts
// a string as input and swaps the case of each
// character. For example if you input
// 'The Quick Brown Fox' the output should be
// 'tHE qUICK bROWN fOX'


const strMain = 'The Quick Brown Fox'


console.log(convertStr(strMain))

function convertStr(str){
  
     const str1 = str.split("");

     const newStr = [];


     for(let i = 0; i < str1.length; i++){
        let char = str1[i];
         if(char){
           const data  = (char == char.toUpperCase()) ? char.toLowerCase() : char.toUpperCase();
            newStr.push(data);
         }else{
            newStr.push(char);
         }   
     }

     return newStr.join("");




}