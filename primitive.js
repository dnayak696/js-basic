
// primitive value

var a = 3;
var b;
b=a;
a = 2;

// console.log(a);
// console.log(b);



// by reference (all projects including functions)

var c = { greeting: 'hi'};
var d;
d = c;

c.greeting = 'hello'; // mutate (to change something) the greeting 

console.log(c);
console.log(d);

//out put: 
// { greeting: 'hello' }
// { greeting: 'hello' }

// ** d must be returned "hi" but it returned "hello" although we have changed it
// but it only referencing the original object and when the value changed it also changed

// immutable It can't be changed


// By reference (even as Parameter);


function changeGreeting(obj){
     obj.greeting = "HOlA"
}


changeGreeting(d);

console.log(d);
console.log(c);


// equals operator setup new memory space (new Address)

c = { greeting: "Howdy"}
console.log(c);
console.log(d);



