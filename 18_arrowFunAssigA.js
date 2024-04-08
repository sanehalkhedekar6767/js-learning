 console.log(`-----------STEP 1-----------`);
 let show =  ()=>{
    console.log("Good Morning, Today is Tuesday");
 }
 show();

 console.log(`-----------STEP 2-----------`);
let multiply = (n1, n2, n3=1)=>{
console.log(`Multiplication is: ${n1*n2*n3}`);
}
console.log(`a) Given values are: 5, 5, 2`);
multiply(5, 5, 2);
console.log(`b) Given values are: 10, 4 and n3=1 is default value`);
multiply(10,4);

console.log(`-----------STEP 3-----------`);
let add = (n1, n2, n3, n4, n5)=>{
    let result = n1 + n2 + n3 + n4 + n5;
    return result;
}
let addition1 = add(100, 100, 200, 349, 756);
console.log(`a) Passed values are: 100, 100, 200, 349, 756`);
console.log(`Addition of numbers is: ${addition1} `);
let addition2 = add("I am ", "learning ", "ES6 ", "features ", "in depth");
console.log(`b) Passed values are: "I am ", "learning ", "ES6 ", "features ", "in depth"`);
console.log(`Addition of given strings are: ${addition2}`);
