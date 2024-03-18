

var isMarried = true;
var age = 23;
var candidateName = "Billgates"
if (age > 21) {
    console.log(`You are eligible for marriage ${age} ${candidateName}`);
}console.log(`=======`);

var marriageCheck = function(age, candidateName, gender){
    if (age>=21 && gender=="Male") {
        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);
    }
    console.log(`Marriage eligibility check done`);
}
marriageCheck(23, "Bill", "Male");
marriageCheck(21, "jennie", "Female");
marriageCheck(20, "Elon", "Male");

console.log(`=================`);