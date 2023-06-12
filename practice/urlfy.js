// URLify convert the string to a to url format

const string1 = "Hello, How are you !"

const strNo  = 20

console.log(URLify(string1, strNo));


// Simple way to convert string to url format
// function URLify(str, strNo) {

//     const str1 = str.split('');

//    const urlString = null;

//     for (let i = 0; i < str1.length; i++) {

//           if(str1[i] === " "){
//              str1[i] = `%${strNo}`
//           }
//     }

//     return str1.join('');
// }























// function URLify(str, trueLength) {
//     // Convert the string to an array of characters
//     let strArr = str.split('');
  
//     let spaceCount = 0;
//     for (let i = 0; i < trueLength; i++) {
//       if (strArr[i] === ' ') {
//         spaceCount++;
//       }
//     }
  
//     let index = trueLength + spaceCount * 2; // Final string length
//     if (trueLength < strArr.length) {
//       strArr[trueLength] = '\0'; // End array
//     }
  
//     for (let i = trueLength - 1; i >= 0; i--) {
//       if (strArr[i] === ' ') {
//         strArr[index - 1] = '0';
//         strArr[index - 2] = '2';
//         strArr[index - 3] = '%';
//         index -= 3;
//       } else {
//         strArr[index - 1] = strArr[i];
//         index--;
//       }
//     }
  
//     // Convert the array back to a string
//     return strArr.join('');
//   }