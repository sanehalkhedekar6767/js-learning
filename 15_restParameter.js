
//spread operator as function parameter
function add(n1, ...values){  //here " ...values " means rest parameters
    console.log(n1);
    console.log(values);
}
add(5 ,6 ,7 ,8); // n1 = 5, n2 = 6, ...values = rest : 7, 8


//function with default argument/parameter value
function  division(n1, n2=1){
    console.log(`n1: ${n1}, n2: ${n2}`);
    console.log(n1/n2);
} 
division(2, 5);
division(7); //it will take n2 = 1 as default value 