//count Unique Number
// i j
const array = [1,1,1,2,2,3,4,4,5,6,7,8,9]
// 
// [1,2, 3]
//
// output -> 8

function countUnique(array){
    if(array.length > 0){
       let i  = 0;
       for(let j = 1; j < array.length; j++){
          if(array[i] !== array[j]){
            i++;
            array[i] = array[j];
             }
       }
       return i +1;    
    }else{
        throw new Error("Array is Empty")
    }
 }


const result  = countUnique(array);

console.log(result)

