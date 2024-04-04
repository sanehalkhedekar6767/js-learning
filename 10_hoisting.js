console.log(city);
var city;

square(5);
function square(num){
    console.log(`Square is: ${num * num}`);
}

//function expression is not hoisted
let cube = function(num){
    console.log(`Cube is: ${num * num * num}`);
}
cube(3);