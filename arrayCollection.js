// Js array can hold collection of anything
// like function value array

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







