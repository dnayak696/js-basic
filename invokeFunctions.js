// using a function expression

var greetFunc = function (name){
    console.log('Hello'+ name);
}

greetFunc('Jhon');


// using an immediate invoked function Expression (IIFE)

var greeting = function (name){
    return 'Hello '+ name;
}("Rock")


console.log(greeting);