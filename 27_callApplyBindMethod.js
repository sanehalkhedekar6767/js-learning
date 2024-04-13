let person = {
    age: 22,
    city: "Pune"
}

function greet(message, sayHello){
    console.log(message, sayHello);
}
//call()
// greet.call(person, "Good Morning", "Hey Hello");
//apply()
// greet.apply(person, ["Good Morning", "Hey Hello"]);
//bind()
let newFunction = greet.bind(person);
newFunction("Good Morning", "Hey Hello");