var a = 0;
var b = 0;
var result = a/b;
console.log(`a divide by b is : ${result}`);

console.log(`Type of ==> ${typeof result}`);

var n1 = "10";
console.log(`value of n1 is ${n1} and it's type is: ${typeof n1}`);

var n2 = +n1;
console.log(`value of n2 is ${n2} and it's type is: ${typeof n2}`);
 var num1 = "100";
 var num2 = 100;
 console.log(`Equality check ${num1 == num2}`); // it only checks the value: Auto Conversion, implicit conversion, automatic conversion
 console.log(`Strict Equality check ${num1 === num2}`); // it checks value along with the datatype of the value

 console.log(`Addition is: ${num1 + num2}`); // doing concatenation of num1 and num2 by converting num2 into string....here num to string conversion is auto conversion...

 console.log(`Operation is: ${true + 1}`); // here true is 1 so when adding with 1 it will result 2.


 //Explicit Conversion
 var n3 = "100"; 
 var result = Number(n3); // can also use +
 console.log(`n3: ${n3}, type: ${typeof n3}, result: ${result}, typeof result: ${typeof result}`);

 //Explicit Conversion
 var n4 = "Hi Everyone"; 
 var result = Number(n4);
 console.log(`n4: ${n4}, type: ${typeof n4}, result: ${result}, typeof result: ${typeof result}`);

 //Explicit Conversion
 var n5 = 200; 
 var result = String(n5);
 console.log(`n5: ${n5}, type: ${typeof n5}, result: ${result}, typeof result: ${typeof result}`);

 //Explicit Conversion
 var n6 = true; //converts it into 1
 var result = Number(n3);
 console.log(`n6: ${n6}, type: ${typeof n6}, result: ${result}, typeof result: ${typeof result}`);

 //Explicit Conversion
 var n7 = 49; //non zero so true
 var result = Boolean(n7);
 console.log(`n7: ${n7}, type: ${typeof n7}, result: ${result}, typeof result: ${typeof result}`);

//Explicit Conversion
var n8 = "100"; 
var result = Boolean(n8);
console.log(`n8: ${n8}, type: ${typeof n8}, result: ${result}, typeof result: ${typeof result}`);