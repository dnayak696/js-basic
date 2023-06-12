// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/**
Problem Statement:
----------
Given an array of integers "numArr" and an integer "targetSum", 
return indices of the two numbers from array "numArr" such that they add up to "targetSum". 
You may assume that each input would have exactly one solution, 
and you may not use the same element twice. You can return the answer in any order.

Example:
----------
numArr = [2,3,5,7,11,15];
targetSum = 9;

outArr = [0,3];


/**/


    let numArr = [2,3,5,7,11,15];
    let targetSum = 9;

    const out = myFunction(numArr, targetSum);
    console.log(out);


function myFunction(numArr, targetSum) {
    // let outArr = [];
   // const newArr = new Set(numArr);
    
    for( let i = 0; i < numArr.length; i++ ) {
           
            let first =  numArr[i]

            console.log( first)
         for( let j = 1; j < numArr.length; j++ ) {

            if( targetSum == first + numArr[j] ) {
                      
            return [numArr.indexOf(first), numArr.indexOf(numArr[j])]
                
            }
            
         }
    // Your code goes here

    
}
}

