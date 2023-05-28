
function greet(){
    console.log("Hello");
}


var anonymousGreet  = function(){

    return "hi"
}

anonymousGreet();


function log(a){
     a()
}


log( function(){
    console.log( "Hello")
})

