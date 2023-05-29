// arguments and spread ...

// Execution context is created (Function)

 // 1. variable Environment
 // 2. this
 // 3. outer environment scope
// arguments - it contains the arguments


function greet(firstname, lastname, language="en"){
    console.log(firstname)
    console.log(lastname)
    console.log(language)
}

greet();
greet("Jhon");
greet("Jhon", "doe",);
greet("Jhon", "doe", "en");
// * functions arguments are hoisted to the top
// when the function is called it first take alll the arguments
// and then create memory space for the variables on the top
// that's why it returns "undefined" to all


//* Default value pass to the arguments is not available to the all
// Modern Browser
// That's why we we use like this


function greet(firstname, lastname, language){

    language = language || "english";

    console.log(firstname)
    console.log(lastname)
    console.log(language)

    console.log(arguments)

    // arguments keyword contains all the value of the js value
}

const value =  [firstname, lastname, language];
greet(...value);

/**
 * In this way we can spread value to the function
 * and pass params to the function
 */

//** */ when there are two functions of same name then It will execute the last one


/**
 * Arguments are going to be deprecated because it has
 * great alternative 
 * is spread
 */