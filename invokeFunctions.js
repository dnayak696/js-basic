// using a function expression

var greetFunc = function (name){
    console.log('Hello'+ name);
}

greetFunc('Jhon');


// using an immediate invoked function Expression (IIFE)

var greeting = function (name){
    return 'Hello '+ name;
}("Rock");

console.log(greeting);


"i am a string" // valid not getting any error
3; // A valid js expression

// function(name){
//     name: "uhaoi"
// }//  this is not a valid function

(function(global, name){
    console.log(name);
    global.greeting = "Hi"
    return "Hello "+ name;
}("Biki")) //classic example of IIFE



// Frame work Aside

console.log("----Function Aside======");


// Global exeecution context  // it only takes the variable declare it and assign given value
// Execution Context for the anonymous function // getting "Hello"
