
// Js array can hola collection of anything

var arr = [
    1,
    false,
    {
        name: "Tony",
        address: "123 main street"
    },
    function(name){
        var greeting = "Hello";
        console.log(greeting + name);
    },
    "hello"
];


console.log(arr)
console.log(arr[3](arr[2].name));







