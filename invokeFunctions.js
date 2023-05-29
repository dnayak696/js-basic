// using a function expression (Normal function)

var greetFunc = function (name){
    console.log('Hello'+ name);
}

greetFunc('Jhon');

// we can define anonymous function and assign it to 
// a variable wand when we call the variable the function itself
//called



// using an immediate invoked function Expression (IIFE)

/**
 * If we are using an anonymous function
 * and didn't assigned it to a variable
 * then it is going to show you error ;
 * 
 * ** but if we are calling it inside a cloded bracket and
 * calling the function then it is going to call the function
 */


var greeting = function (name){
    return 'Hello '+ name;
}("Rock");

console.log(greeting);


"i am a string" // valid not getting any error
3; // A valid js expression

// function(name){
//     name: "uhaoi"
// }//  this is not a valid function


/**
 * How we can define IIFE
 *  => To define IIFE function we have to 
 *   fist write a anonymous functon then 
 *  place the function inside "()" closed brackets
 *  and then at the end of the function we have to call the 
 * function
 * 
 * => then it will automatically called
 * */
(function(global, name){
    console.log(name);
    global.greeting = "Hi"
    return "Hello "+ name;
}("Biki")) //classic example of IIFE



// Frame work Aside

console.log("----Function Aside======");


// Global exeecution context  // it only takes the variable declare it and assign given value
// Execution Context for the anonymous function // getting "Hello"
