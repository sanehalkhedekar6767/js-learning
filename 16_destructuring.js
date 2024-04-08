

let person = {
    name: "Sanehal",
    city: "Pune",
    experience: 10,
    pin: 413307
}

//Object Destructuring ----->

// const name = person.name;
// let city = person.city;
// let pin = person.pin;      // instead of writing this we can use object destructuring
let {name, city, pin, isMarried = true} = person;  //object destructuring with default value
console.log(`name: ${name}, city: ${city}, pin: ${pin}, isMarried: ${isMarried}`);

//Array Destructuring ----->

const array = ["Jennie", "Bill", "Stew"];
// let element0 = array[0];
// let element1 = array[1];
// let element2 = array[2];
let [element0, element1, element2, element3 = "Elon"] = array;
console.log(`element0: ${element0}, element1: ${element1}, element2: ${element2}, element3: ${element3}`);
