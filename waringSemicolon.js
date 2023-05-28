/**
 * Js automatically takes semicolon if we are not assign any value
 * we have to be careful while using return
 */


// Example
function getPerson(){

    return
    {
        firstName: 'John'
    };
}

console.log(getPerson())
// this function will not returning "undefin"
// the semicolon automatically inserted at the end of return


// function getPerson(){

//     return {
//         firstName: 'John'
//     };
// }

// console.log(getPerson())