
console.log(isPalindrome("madam"))


function isPalindrome(str) {
    // reverse string
    var reverseString = str.split("").reverse().join("");

    if(reverseString == str){
        return true;
    }else{
        return false;
    }
}

