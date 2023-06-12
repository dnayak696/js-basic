const arrayNumber  = [1, 9, 8134, 56773245]



const maxFunction = (arr) =>{
     return arr.reduce(function(pre, cur){
        return pre > cur? pre: cur
     })
}

const minFunction = (arr) =>{
    return arr.reduce(function(pre, cur){
        return pre < cur? pre: cur
    })
}


console.log(maxFunction(arrayNumber))
console.log(minFunction(arrayNumber))