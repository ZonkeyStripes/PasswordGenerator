    function generatePassword() {
    var password = "";
    var putinPassword = [];
    var lowercase = document.getElementById("lowercase").checked;
    var uppercase = document.getElementById("uppercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    
    var generate = document.getElementById('generate').value;

    if (lowercase) { putinPassword.push(a); }
    if (uppercase) { putinPassword.push(b); }
    if (numbers) { putinPassword.push(c); }
    if (symbols) { putinPassword.push(d); }

    if (!lowercase && !uppercase && !numbers && !symbols) {
        alert("Please ensure atleast one box is checked");
    }
    if (generate < 8 ) {
        alert("Numeric value can't be under 8.");
        }else if (generate > 128) {
            alert("Numeric value cannot be over 128.");
    }
    for (let i = 0; i < generate ; i++){
        password += randomArr(putinPassword);
        }
        return document.getElementById("password").innerText = password;
    }



    function copyFunc() {
        var copyText = document.getElementById("password");
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        // alert("Copied the text: " + copyText.value);
      }
     // fucntions of arrays
var a = function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

var b = function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
//Generating numbers 0-9 (10 total) their placement on the chart is 48-57.
var c = function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) +48);
};
//Instead of using a chart, we use a string here. Create a constant. Use the Math.random to generate a random number, .floor to round it, and the symbols.length to generate the the index we are choosing from.
var d = function getRandomSymbol() {
   const symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    return symbols[Math.floor(Math.random() * symbols.length)];
};
function randomArr(arr) {
    return arr [Math.floor(Math.random()* arr.length)]();
}