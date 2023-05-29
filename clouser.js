// Undersatand the clouser

/**Def
 * Clouser is the combination of lexiacal environment
 * Bundled together with reference to the surrounding state.
 *
 * Clouser give you access to the an outer function's scope from
 *    an inner functions scope from an inner function
 */

function greet (whattosay) {
     var name = "Dhiraj"
       
    var getName =  function () {
        return "Hello 3"+ name;
     }()


    return function(name){
       console.log(whattosay+ " "+ name)
    }  
}

var sayHi= greet("Hi");
console.log(sayHi("Dhiraj"));
sayHi("Tony");


/**
 * Can we define multiple function in a clousure ?
 * => Yes, we can define multiple function
 * 
 * => A closure is a combination of a function and the
 *  lexical environment within which that function was declared.
 *  It allows the function to access variables and parameters from
 *  its outer scope,
 *  even after the outer function has finished executing.
 */

function outerFunction() {
    var outerVariable = 'Hello';
  
    function innerFunction1() {
      console.log(outerVariable + ' from innerFunction1');
    }
  
    function innerFunction2() {
      console.log(outerVariable + ' from innerFunction2');
    }
  
    return {
      innerFunc1: innerFunction1,
      innerFunc2: innerFunction2
    };
  }
  
  var closureObject = outerFunction();
  closureObject.innerFunc1();  // Output: Hello from innerFunction1
  closureObject.innerFunc2();



// inside the clousure we can define some value whcich can be returned
// we get get the 

// Global exection context create space and memory for the function and variable
//  "greet" called and returned whatttosay "hi"
// "sayHi" EXECUTION CONTEXT will be called and returned name "Tony"
// the phenomena of closing in all the variale is called Closure
// these are the feature of js Clousures


console.log("---------------------");


 function  buildFunction(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        );
    }


    return arr;
 }



function buildFunction2(){
    var arr = [];

    for (var i = 0; i < 3; i++){
       // let j = i;

       arr.push(function(j){
              return function(){
                console.log(j);
              }
       }(i))
    }

    return arr;
}


 var fs = buildFunction2();

 // functions which is contained inside the array are called

 fs[0]();
 fs[1]();
 fs[2]();
 
 /**
  * Execution context create one by one 
  */



 /** 
  * Framework aside
  *  */ 

 console.log("=================");


  function makeGreeting(language){
     
    return function(firstname, lastname) {
        if(language === 'en'){
             console.log("Hello "+ firstname+" "+ lastname); 
        }
        if(language === 'es'){
            console.log("Hola "+ firstname+" "+ lastname);
        }
    }
}


 var greetEnglish = makeGreeting('en');
 var greetSpanish = makeGreeting('es');

greetEnglish('Jhon', 'Doe')
greetSpanish('Jhon', 'Doe')

/**
 * Global Execution Context craete the function scpoe in the memory
 *  MakeGreeting function called then it create the language scope
 * two execution context created lang("en") and lang("es") they have their own closoure
 * 
 * then we are calling the clousure function inside then "en" and "es" scope
 * execution context created for the inner function
 * 
 */