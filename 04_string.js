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
var len1 = greet.length;
console.log(`${greet} it's length is: ${len1}`);

var afterTrim = greet.trim();
var len2 = afterTrim.length;
//console.log(`After trim : ${afterTrim }`);
console.log(`${afterTrim} it's length is: ${len2}`);
console.log(`The difference in length after trimming is: ${len1 - len2}`);

console.log(`========== include() ==================`);
var greet = "Good Morning";
var varInclude = greet.includes(`Morning`);
console.log(`${varInclude}`);

console.log(`========== slice(start, end) ==================`);
var greet = "Good Morning";
var afterSlice = greet.slice(2, 9);
console.log(`After slicing string is : ${afterSlice}`);




