class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi,];

console.log(`---------------------STEP 1---------------------`);
console.log(`**Employee working in "TCS" are:`);
arrayEmployees.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(`Name: ${element.emp_name} , Company Name: ${ element.emp_company}`);
    }
});

console.log(`---------------------STEP 2---------------------`);
console.log(`**Employee from Finance department are:`);
arrayEmployees.forEach(element => {
    if (element.emp_dept == "Finance") {
        console.log(`Name: ${element.emp_name} , Department: ${ element.emp_dept}`);
    }
});

console.log(`---------------------STEP 3---------------------`);
console.log(`**Employee whose names starts with "R" are:`);
arrayEmployees.forEach(element => {
    if (element.emp_name.startsWith("R")) {
        console.log(element);
    }
});

console.log(`---------------------STEP 4---------------------`);
console.log(`**Employee with salary>75000 are:`);
arrayEmployees.forEach(element => {
    if (element.emp_salary>75000) {
        console.log(`Name: ${element.emp_name}, Company: ${element.emp_company}, Salary: ${element.emp_salary}`);
    }
});

console.log(`---------------------STEP 5---------------------`);
console.log(`**Employee details whose salary is >= 50000 and department is IT are: `);
arrayEmployees.forEach(element => {
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        console.log(element);
    }
});

console.log(`---------------------STEP 6---------------------`);
console.log(`**Employees from company: "Infy" are:`);
arrayEmployees.forEach(element => {
    if (element.emp_company == "Infy") {
        console.log(element);
    }
});

