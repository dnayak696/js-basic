// Reverse a string

const reverseString = (str) =>{
     const newData = str.split('').reverse().join("");
     return newData;
}

console.log(reverseString("Hello, world!"));