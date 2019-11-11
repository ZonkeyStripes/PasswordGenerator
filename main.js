// Generator functions - http://www.net-comber.com/charset.html
// The numbers represent the variable they are assigned to, via the chart from the website. Numbers 97-121 are lower case letters. Hence; 97 + 26.) THe Math.floor rounds a decimal to the nearst whole, and the Math.random generates a random decimal number. This is where the random letters are comming from. Generating numbers between 97 and 121 that represent lowercase letters.
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());
console.log(getRandomLower());