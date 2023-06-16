const array =  [1,2,3,4,5,6,7,8,9] // = Total elements - 10
// Count largest sum of consecutive Digits

// num = 4

// sum => 25

//conditions 
// num > array -> Error Message

// 10 - 4+1 =>7 loop will go upto that no

function findLargets(array,num){
    {
        if(num > array){
            throw new Error("Number is not greater than array"); 
        }else{

            let max = 0;
            
            for(let i =0; i<array.length; i++){
                let temp = 0;

                for(let j = 0; j < num; j++){
                    tmp += array[j];
                }

                if(tmp > max){
                    max=tmp;
                }
            }

            return max;
        }
    }
}


const result = findLargets(array)

console.log(result);