// Prototype methods for

/**
 * 
 */

var person = {
    firstname: 'John',
    lastname: 'Smith',
    getFullName: function() { 
        return this.firstname + ' ' + this.lastname;
    }
}


var jhon = {
    firstname: "Rock",
    lastname: "star"
}



// don't do this Ever! for demo purposes only !!!
// proto keyword takes double dash at start and end;

jhon.__proto__ = person;
console.log(jhon.getFullName());

for (var prop in jhon){
    if(jhon.hasOwnProperty(prop)){
        console.log(prop + ': '+ jhon[prop]);
    }
  
}

var jane = {
    firstname: "Jane",
}

jane.__proto__= person;


