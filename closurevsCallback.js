function sayHi (){
    var greeting ="Hi!";

    setTimeout( function(){
       console.log( greeting );
    }, 3000)
}

sayHi()



// setTimeout is a callback function
// Her set timeout is a clousure



// IN JQuery
// $("button").click(function(){
//   
//}) 


/**
 * CALLBACK FUNCTIONS
 */

function tellMeWhenDone(callback) {
     var a = 1000
     var b = 2000

     callback();
}


tellMeWhenDone(function(){
    console.log("I am Done")
});
tellMeWhenDone(function(){
    console.log("All Done")
});