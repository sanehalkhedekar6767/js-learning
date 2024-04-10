

const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Original array is: `,arrayNumbers);

console.log(`---------------------STEP 1---------------------`);
let resultArray = arrayNumbers.map((element)=>{
    return element + 10;
});
console.log(`New array after adding 10 to each element is: `,resultArray);

console.log(`---------------------STEP 2---------------------`);
let cube = arrayNumbers.map((element)=>{
    return element*element*element;
});
console.log(`Cube of each array element: ${cube}`);

console.log(`---------------------STEP 3---------------------`);
let indexAddArray = arrayNumbers.map((element, index)=>{
    return element + index;
});
console.log(`Array after adding element with it's index is: `,indexAddArray);



