
function  Person( firstName, lastName){

    console.log(this);
    this.firstname =  firstName;
    this.lastname = lastName;

    console.log('This function is invoked');

    return { greeting: "I got in the way"}
}

// new is a operator. 
// It immediately create an empty object

// When we place the new key in the object

var jhon = new Person('Jhon', 'Deo');
console.log(jhon);

var jane = new Person( 'Jane', 'Deo');

console.log(jane);




