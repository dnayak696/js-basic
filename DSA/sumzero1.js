//Check sum zero - Problem 1
const data = [-5, -4, -3, -2, -1, 0, 1, 2, 3]
// out put [-4, 4] - Output 


function FindSumPair(array){
    let left = 0;
    let right = array.length - 1;

    while(left < right ){

        sum = array[left]+ array[right];
        if(sum === 0){
            return  [array[left], array[right]];
        }else if(sum> 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(FindSumPair(data));

// time omplexity o(n)



