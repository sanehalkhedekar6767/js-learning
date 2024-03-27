
let professor = {
    name: `William`,
    course:`abc`,
    age: 38,
    contact: 1234567890,
    city: `abc`,
    state: `Maharashtra`,
    pin: 112233,
    degrees: {
        bachelors: `CSE`,
        PHD: `Adv Computing`,
    },
    certificates: ["Hacker Rank Participation","Certificate in IFE course", "Certification in Adv Programming"]
}

console.log(professor);

console.log(`--------- Adding new property ---------`);
professor.totalExperience = "14 Years";
console.log(professor);

console.log(`--------- Modifying existing property ---------`);
professor.age = 40;
console.log(professor);

professor.certificates.splice(2, 0, "Oracle Certified");

const lastElement = professor.certificates[professor.certificates.length - 1];
console.log(`Last element of array is: ${lastElement}`);

console.table(professor);

console.log(`----------- Traversing of certificates array -----------`);
for (const element of professor.certificates) {
    console.log(element);;
}