//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercasetEl = document.getElementById('result');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

// generateEl.addEventListener('click', () => {
//     const length = lengthEl.value;

//     console.log(length);
// })




// Generator functions - http://www.net-comber.com/charset.html
// The numbers represent the variable they are assigned to, via the chart from the website. Numbers 97-121 are lower case letters. Hence; 97 + 26.) THe Math.floor rounds a decimal to the nearst whole, and the Math.random generates a random decimal number. This is where the random letters are comming from. Generating numbers between 97 and 121 that represent lowercase letters.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
//Generating numbers 0-9 (10 total) their placement on the chart is 48-57.
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) +48);
}
//Instead of using a chart, we use a string here. Create a constant. Use the Math.random to generate a random number, .floor to round it, and the symbols.length to generate the the index we are choosing from.
function getRandomSymbol(){
   const symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
}





console.log(getRandomUpper());
console.log(getRandomLower());
console.log(getRandomNumber());
console.log(getRandomSymbol());