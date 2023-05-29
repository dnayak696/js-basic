// Object Function this
// execution context created
// 1. Variable Environment
// 2. Object Environment
// "this" keyword gives when execution context is created

console.log(this);
// in window it will give the this keyword

function a(){
    //console.log(this);
    this.newvariable = "Hello";

}

var b = function(){
    //console.log(this);
}

a();

console.log(newvariable);

b();


// Object literal "this" keywords
var c = {
    name: "The c object",
    log: function(){

        var self = this;
        this.name = "The updated Property"
        console.log(self);
       
    var setname = function(newname){
        self.name = newname;
    }
    setname("Updated Again! The c objects");
    console.log(self);

    }
}


var arr = [1,2,3];



c.log();

// * If we are difining this inside object literal then it takes the value of the 
// object

// ehen we assign to a new value "this" 
// then we have to update it again
//