console.log(`----------------------IMPLICIT CONVERSION----------------------`);

//numeric string used with + gives string type
let result;
result = "3" + 2;
console.log(result);

result = "3" + true;
console.log(result);

result = "3" + undefined;
console.log(result);

result = "3" + null;
console.log(result);

//if boolean is used, true is 1 and false is 0
result = "4" - true;
console.log(result);

result = 4 + true;
console.log(result);

result = 4 + false;
console.log(result);

//numeric string used with - , / , * results number type
result = "4" - "2";
console.log(result);

result = "4" - 2;
console.log(result);

result = "4" * 2;
console.log(result);

result = "4" / 2;
console.log(result);

//Arithmetic operation of undefined with number with number, boolean or null gives NaN
result = 4 - undefined;
console.log(result);

result = 4 + undefined;
console.log(result);

result = true - undefined;
console.log(result);

result = null - undefined;
console.log(result);

console.log(`----------------------EXPLICIT CONVERSION----------------------`);

//String to number
result = Number("426");
console.log(result);

result = Number("426e-1");
console.log(result);

//Boolean to number
result = Number(false);
console.log(result);

result = Number(true);
console.log(result);

//iIf the string is invalid number, then ot will result NaN
result = Number("HELLO");
console.log(result);

result = Number(undefined);
console.log(result);

result = Number(NaN);
console.log(result);

var numberInString = "100";
 console.log(typeof numberInString);

 var myNumber = +numberInString;
 console.log(typeof myNumber);

 var myNumber = 100;
 console.log(typeof myNumber);
 
 var afterConversion = myNumber.toString();
 console.log(typeof afterConversion);