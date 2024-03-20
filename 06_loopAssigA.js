

console.log(`------- STEP 1 -------`);
let sentence = "I am very good IT Developer";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
    let character = sentence.charAt(i);
    let letter = character.toLowerCase();
  if (vowels.includes(letter)) {
    count++;
//    console.log(letter); 
  }  
}
console.log(`Total number of vowels in given string are: ${count}`);

console.log(`------- STEP 2 -------`);
let sum = 0;
for (let num = 1; num <= 5; num++) {
  sum= sum + num * num * num;
//   console.log(sum);
}
console.log(`The sum of the cube of numbers from 1 to 5 is: ${sum}`);

console.log(`------- STEP 3 -------`);
function oddPositionChars(sentence){
 for (let index = 0; index < sentence.length; index++) {
    const character = sentence.charAt(index);
    if (index%2 != 0 && character != " ") {
       console.log(character); 
    }
    
 }
}
console.log(`Odd positioned chars of 1st string`);
oddPositionChars(`Hard work always pays back`);
console.log(`Odd positioned chars of 2nd string`);
oddPositionChars(`Soon I will be UI IT Champ`);

