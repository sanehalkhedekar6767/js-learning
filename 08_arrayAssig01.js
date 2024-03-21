console.log(`--------- STEP 1 ---------`);
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`Original Array is: `);
console.log(fruits_seasonal);
console.log(`First element of array is: ${fruits_seasonal[0]}`);
const arrLength = fruits_seasonal.length;
console.log(`Last element of array is: ${fruits_seasonal[arrLength-1]}`);

console.log(`--------- STEP 2 ---------`);
fruits_seasonal.unshift(`Papaya`);
console.log(`Array after adding element before "Banana" is:`);
console.log(fruits_seasonal );

console.log(`--------- STEP 3 ---------`);
fruits_seasonal.splice(4, 1);
console.log(`Array after removing element "Mango" is: `);
console.log(fruits_seasonal);

console.log(`--------- STEP 4 ---------`);
fruits_seasonal.push(`Pineapple`);
console.log(`Array after adding element at last is: `);
console.log(fruits_seasonal);

console.log(`--------- STEP 5 ---------`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`Array after adding element "Dragon Fruit" before "Watermelon" is: `);
console.log(fruits_seasonal);

console.log(`--------- STEP 6 ---------`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(`Array after replacing '"Orange" with "Kiwi" is: `);
console.log(fruits_seasonal);

console.log(`--------- STEP 7 ---------`);
const elements = fruits_seasonal.slice(1,5);
console.log(`Elements starting from index 1 to 4 are: `);
console.log(elements);

console.log(`--------- STEP 8 ---------`);
const arrayLength = fruits_seasonal.length;
let lastElements = fruits_seasonal.slice(arrayLength-3);
console.log(`Last 3 elements of array are: ${lastElements}`);






