// string Anagram
// 'hello' -> 'world'


//condition 
// length Check (for Boith Strings);
// string 'hello' 
// {h:1, e:1, l:2, o:1}


function isAnagram(string1, string2){

    if(string1.length != string2.length){
        return false;
    }

    let counter = {}

    for(let letter of string1){
      counter[letter] = (counter[letter] || 0) + 1;
      console.log(counter[letter]);
     //  console.log(letter);
    }

    for(let letter of string2){
        console.log(letter);
        if(!counter[letter]){
            return false;
        }

        counter[letter] -= 1;     
    }

    return true;

}

console.log(isAnagram("hellow", "llhowe"));

//Time complexity linear o(n);
