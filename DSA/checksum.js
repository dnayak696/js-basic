//Check sum zero - Problem 1
const data = [-5, -4, -3, -2, -1, 0, 1, 2, 3]
// out put [-4, 4] - Output 


function getSumPairZero(array){
    for(let number of array){
        console.log(number);
        for(let j = 1; j < array.length; j++){
            if(number+array[j] ===0 ){
                return [number, array[j]]
            }
        }
    }
}



const result = getSumPairZero(data);
console.log(result);

// function getSumPairOne(array){}
//o(n^2) quadratic time complexity - we have used loop 2 times







