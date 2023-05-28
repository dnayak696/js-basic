/**
 * Function Execution Context:
 * 1. variable Environment
 * 2.'this'
 * 3. Outer Environment
 * 
 */

/**
 * Functions has:
 * 1. Invocable Code
 * 2. Name Optional, can be anonymous
 * 3. Call()
 * 4. Apply()
 * 5. Bind()
 */


var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() { 
        var fullname = this.firstname + ' '+ this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: '+ this.getFullName());
    console.log('Arguments: '+lang1 +" "+lang2);
    console.log('----------');
}

var logPersonName = logName.bind(person);

logPersonName('en', 'es');


logName.call(person, "en", "es");
logName.apply(person, ['en', 'es']);


/***
 * How to use in real world applications
 */

//Function Borrowing

 var person2 ={
    firstname: "Jane",
    lastname: "eeo"
 }


 console.log(person.getFullName.apply(person2));


 // Function currying

 function multiply(a,b){
    return a*b;
 }

 var multipleByTwo = multiply.bind(this, 2);


var mutiplyByThree = multiply.bind(this,3);

 console.log(multipleByTwo(5));
console.log(mutiplyByThree(7));

