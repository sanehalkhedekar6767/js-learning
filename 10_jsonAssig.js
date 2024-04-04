const employee = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": "23",
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
console.log(`JSON employee is:`,employee);

console.log(`-------Converting JSON string to object-------`);
 const employeeObj = JSON.parse(employee);
 console.table(employeeObj);

 console.log(`----------`);
console.log(`ROLE-> ${employeeObj.role[0]}`);

console.log(`----------`);
const nameArray = employeeObj.name.split(" ");
console.log(`Last Name is-> ${nameArray[1]}`);

console.log(`----------`);
const dojArray = employeeObj.doj.split("-");
console.log(`Joining year of employee is-> ${dojArray[2]}`);
