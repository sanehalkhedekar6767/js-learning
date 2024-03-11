console.log("===========Step 1===========");
function course(){
    console.log("Learning Web Development");
}
course();

console.log("------------------------");

function books(){
    console.log("All the books are related to hsitory");
}
books();

console.log("===========Step 2===========");
function personalDetails( firstName, lastName, collegeName){
    console.log("My first name is:", firstName);
    console.log("My last name is:", lastName);
    console.log("My college name is:", collegeName);
}
personalDetails("Sanehal", "Khedekar", "Fabtech College Sangola");

console.log("===========Step 3===========");
function swapValues(val1, val2){
    console.log("===Before swap===");
    console.log("val1=", val1, "val2=", val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("===After swap===");
    console.log("val1=", val1, "val2=", val2);
}
swapValues("Virat", "Anushka");
console.log("------------------------");
swapValues(1000, 2000);

console.log("===========Step 4===========");
function addThreeValues(val1, val2, val3){
    console.log("The values are:", val1, val2, val3);
    console.log("The addition is:",val1 + val2 + val3);
}

addThreeValues(10.23, 600, 40);
console.log("------------------------");
addThreeValues("Hello"," Good"," Morning");



