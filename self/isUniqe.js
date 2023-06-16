const str1 ="abfrgth";


console.log(isUnique(str1));

function isUnique(string) {
     const str = string.split("");

     for ( let i = 0; i < str.length; i++){
        for (let j = i+ 1; j < str.length; j++){
            if(str[i] == str[j]){
                return false
            }
        }
     }
      

     return true;

}