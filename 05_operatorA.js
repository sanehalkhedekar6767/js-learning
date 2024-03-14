
console.log(`--------------------------- STEP 1 ---------------------------`);

function squareOfWordLength(sentence){ 
   var strLength = sentence.length;
   var lengthSquare = strLength ** 2;
   return lengthSquare;
}
var lengthSquare = squareOfWordLength(`Javascript`);
console.log(`The square of length of string is: ${lengthSquare}`);

console.log(`-----------------`);
var lengthSquare = squareOfWordLength(`Goggle Chrome`);
console.log(`The square of length of string is: ${lengthSquare}`);

console.log(`-----------------`);
var lengthSquare = squareOfWordLength(`Developer Smart`);
console.log(`The square of length of string is: ${lengthSquare}`);

console.log(`--------------------------- STEP 2 ---------------------------`);

function profile(){
    var strOfProfile = "I am Angular Developer";
    var lenString = strOfProfile.length;
    var splitString = strOfProfile.split(" ");
    var afterDivision = lenString / splitString.length;
    var afterMultiplication = lenString * splitString.length;
    console.log(`Division of string length with total number of words is: ${afterDivision}`);
    console.log(`-----------------`);
    console.log(`Multiplication of string length with total number of words is: ${afterMultiplication}`);
}
profile();

