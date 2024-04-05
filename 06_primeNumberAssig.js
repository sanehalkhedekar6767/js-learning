console.log(`---------- Step 1 ----------`);
const array = [3, 9, 7, 6, 19, 29, 53];
function isPrime(num){
    for (let i = 2; i < num; i++) {
        if (num%i == 0) {
            return false;   
        }  
    }
    return true;
}
function countPrime(){
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if(isPrime(array[index])){
            count++;
        }  
    }
    return count;
}
console.log(`Count of prime numbers in given array are: ${countPrime(array)}`);


console.log(`---------- Step 2 ----------`);
function spaceCount(string) {
  let space = 0;
  for (let i = 0; i <= string.length; i++) {
    let character = string.charAt(i);
    if (character == " ") {
      space++;
    }
  }
  return space;
}
let result1 = spaceCount("Revision is the key of success");
console.log(`Total spaces in String 1 is: ${result1}`);

let result2 = spaceCount("Java Script is the language of internet world");
console.log(`Total spaces in String 2 is: ${result2}`);
