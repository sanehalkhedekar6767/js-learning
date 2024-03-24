//Assignment 02 on array
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];

console.log(`---------------STEP 1---------------`);
const arrayLength = arrayNumbers.length;
console.log(`Length of the array is: ${arrayLength}`);

console.log(`---------------STEP 2---------------`);
console.log(`First element of array is: ${arrayNumbers[0]}`);
console.log(`Last element of array is: ${arrayNumbers[arrayLength-1]}`);

console.log(`---------------STEP 3---------------`);
const thirdElement = arrayNumbers.slice(arrayLength-3,arrayLength-2);
console.log(`Third last element of the array is: ${thirdElement}`);

console.log(`---------------STEP 4---------------`);
console.log(`Even numbers in the given array are..`);
for (let i = 0; i < arrayNumbers.length; i++) {
   if (arrayNumbers[i]%2 == 0) {
     console.log(arrayNumbers[i]);
   }  
}
console.log(`---------------STEP 5---------------`);
console.log(`Odd numbers in the given array are..`);
for (const elements of arrayNumbers) {
    if (elements%2 != 0) {
        console.log(elements);
    } 
}

console.log(`---------------STEP 6---------------`);
let sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
   if (i%2 == 0) {
    sum = sum + arrayNumbers[i];
   } 
}
console.log(`Sum of even positioned number is: ${sum}`);

console.log(`---------------STEP 7---------------`);
sum = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
   if (i%2 != 0) {
    sum = sum + arrayNumbers[i];
   } 
}
console.log(`Sum of odd positioned number is: ${sum}`);

console.log(`---------------STEP 8---------------`);
sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   sum = sum + arrayNumbers[index];
    
}
console.log(`Sum of all elements from arrayNumbers is: ${sum}`);

console.log(`---------------STEP 9---------------`);
    console.log(`Numbers divisible by 5 are..`);
for (const element of arrayNumbers) {
    if (element%5 == 0) {
       console.log(element); 
    } 
}

console.log(`---------------STEP 10---------------`);
console.log(`Is number 115 available in arrayNumbers? ${arrayNumbers.includes(115)}`);

console.log(`---------------STEP 11---------------`);
console.log(`Is number 23 available in arrayNumbers? ${arrayNumbers.includes(23)}`);

console.log(`---------------STEP 12---------------`);
arrayNumbers.splice(3, 0, 55, 66);
console.log(`Array after inserting 55, 66 at index 3 is:`);
console.log(arrayNumbers);

console.log(`---------------STEP 13---------------`);
arrayNumbers.splice(4, 3);
console.log(`Array after deleting 3 elements from index 4 is:`);
console.log(arrayNumbers);










