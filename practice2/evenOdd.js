const numbers = [1,2,3,4,5,6,7,8,9,10,11];

const even = numbers.filter((item)=> {
    return item%2 === 0;

})


const odd = numbers.filter((item)=>{
    return item%2 ===1;
})


console.log(even);

console.log(odd);

