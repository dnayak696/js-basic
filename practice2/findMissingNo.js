const arrNum =  [1,2, 3 ,4,6,7,8,10,11,12]

const missingArray = [];


const missingValue = (arr) =>{
      const minValue = Math.min(...arrNum)
      const maxValue = Math.max(...arrNum)

      for(let i = 0; i <maxValue; i++){
        if(arr.indexOf(i)<0){
            missingArray.push(i)
        }
      }
}