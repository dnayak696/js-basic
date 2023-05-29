function greet(firstname, lastname, language){
    language = language || 'en';

    if(language === 'en'){
        console.log('Hello '+ firstname+' '+ lastname);

    }

    if(language === 'es'){
        console.log('Hello '+ firstname+' '+ lastname);
    }
}

function greetEnglish(firstname, lastname){
      greet(firstname, lastname, 'en');
}

greetEnglish('Jhon', 'Doe');

greetSpanish('Jhon', 'Doe');

// function override is a method through this method we
// override the default function calling it inside an other function 
// by giving some default value to some parameters


// function override is a method through this method we call a
// Private function inside a function to protect its parameters
// by assigning default value to them

