

const isPrimeNo  =(number) => {
    if(number === 1){
        console.log(`${number} is not aprime number`)
    }else if (number < 1){
        console.log(`${number} is not possible`)
    }else{
        for(let i = 2; i < number; i++){
            if(number%i == 0){
                var result = `${number} is not prime number`;
                break;
            }else{
                var result = `${number} is a prime number`;
            }
        }
        console.log(result)
    }
}



isPrimeNo(7);