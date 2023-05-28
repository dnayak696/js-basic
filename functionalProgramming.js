
function mapForEach(arr, fn){
    var newArr= [];

    for (var i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]))
    };

    return newArr;
}


var arr1 = [1,2,3];

console.log(arr1);


//  var arr2 = [];

// for (var i = 0; i < arr1.length; i++){
//     arr2.push(arr1[i]*2);
// }

// console.log(arr2);

var arr2 = mapForEach(arr1, function(item){
    return item * 2;
})
console.log(arr2);


var arr3 = mapForEach(arr1, function(item){
    return item >2
})

console.log(arr3);


var checkPastLimit = function(limiter, item){
    return item >limiter;
}

// binnd has  used here to apss another parameter to the function
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 2));
console.log(arr4);


var checkPastLimitSimplified = function(limiter){
    return checkPastLimit.bind(this, limiter);
}

var arr5 = mapForEach(arr1, checkPastLimitSimplified(2));

console.log(  arr5);


// how can we return function of function 
// It will be fine

 // Learn these Libranry:

// Undercore.js
// lodash.js

// () immediately Invoked function expression

