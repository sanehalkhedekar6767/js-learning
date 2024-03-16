  

console.log(`------------------------ STEP 1 ------------------------`);
function greaterNumber(n1, n2){
var greater = n1 > n2 ? n1 : n2;
console.log(`The greatest number among ${n1} and ${n2} is : ${greater}`);
}
greaterNumber(10, -10);
greaterNumber(800, 899);


console.log(`------------------------ STEP 2 ------------------------`);
function isEvenOrOddNum(num){
    var result = num%2 == 0 ? "true" : "false";
    // var result = evenOrOdd == "Even";
    return result;
}
var result = isEvenOrOddNum(29);
console.log(`Is the number Even: ${result}`);
var result = isEvenOrOddNum(44);
console.log(`Is the number Even: ${result}`);
var result = isEvenOrOddNum(0);
console.log(`Is the number Even: ${result}`);
var result = isEvenOrOddNum(101);
console.log(`Is the number Even: ${result}`);


console.log(`------------------------ STEP 3 ------------------------`);
function wordLength(sentence){
    var LengthOfWord = sentence.length % 2 == 0 ? "Even" : "Odd";
    return LengthOfWord ;

}
var LengthOfWord  = wordLength(`Javascript`);
console.log(`Is the length of word "Javascript" even or odd: ${LengthOfWord }`);
var LengthOfWord  = wordLength(`Developer`);
console.log(`Is the length of word "Developer" even or odd: ${LengthOfWord }`);
var LengthOfWord  = wordLength(`Google`);
console.log(`Is the length of word "Google" even or odd: ${LengthOfWord }`);


