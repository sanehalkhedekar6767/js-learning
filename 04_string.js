//Property-------

console.log("========== length property ==================");
var greet = "Good Morning";
var totalChars = greet.length;   //property without ()
console.log("Total no. of chars is:", totalChars);

//Functions------

console.log("========== charAt() ==================");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is:", charAt0);

var charAt6 = greet.charAt(6);
console.log("Character at index 6 is:", charAt6);

var charAt11 = greet.charAt(11);
console.log("Character at index 11 is:", charAt11);

var sentence = "We're sorry to see you go, but hey, no hard feelings, hopefully we will see you back one day.Pease fill in your email address in order to unsubscribe from the list.You will receive an email to confirm your unsubscription, just to make sure this is not an accident or somebody else tries to unsubscribe you.";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
var lastChar = sentence.charAt(sentence.length-1);
console.log("Last char is:",lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("========== concat() ==================");
var firstName = "Sanehal";
var lastName = " Khedekar";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is: ",resultConcat);

console.log(`========== replace() ==================`);
var greet = "Good Morning";
//const afterReplace = greet.replace("Morning", "Afternoon");
const afterReplace = greet.replace("M", "F");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase()
console.log(`${greet} in upper case is: ${greetInUpperCase}`);

console.log(`========== trim() ==================`);

var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(`${greet} it's length is: ${lengthBeforeTrim}`);

var afterTrim = greet.trim();
var lengthAfterTrim = afterTrim.length;
//console.log(`After trim : ${afterTrim }`);
console.log(`${afterTrim} it's length is: ${lengthAfterTrim}`);
console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);


console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);


console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

console.log(`========== task ==================`);
//Write a function to find a totalwords() with one argument
//'I am Happy Buddy'
//'I am learning JS the language of internet'
// and this function should return the total number of words

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
// console.log(`"I am happy Buddy". Total number of words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);

console.log(`========== substr() ==================`);


