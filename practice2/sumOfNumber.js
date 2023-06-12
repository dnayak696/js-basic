const arrNum = [1,9,6, 5];


const sumOfNumbers = (arr) =>{

    return arr.reduce((prev, cur) =>{
        return prev + cur
    })

}

console.log(sumOfNumbers(arrNum));