// Write a JavaScript program that accepts
// a string as input and swaps the case of each
// character. For example if you input
// 'The Quick Brown Fox' the output should be
// 'tHE qUICK bROWN fOX'

var string1 = "The Quick Brown Fox";

changeString(string1);

function changeString(str) {
  var strEl = str.split(" ");
  console.log(strEl);

  const newString = [];

  for (let i = 0; i <= strEl.length; i++) {
    let el = strEl[i];

    if (el?.split("").shift() == el?.split("").shift().toLowerCase()) {
      console.log("Hi It is in uppercase");
    }
  }
}
