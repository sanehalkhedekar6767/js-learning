class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
      this.emp_id = emp_id;
      this.emp_name = emp_name;
      this.emp_dept = emp_dept;
      this.emp_salary = emp_salary;
      this.emp_company = emp_company;
    }
    detail(){
        console.log(`Employee Details ---> Employee id: ${this.emp_id}, Employee Name: ${this.emp_name}, Employee dept: ${this.emp_dept}, Employee salary: ${this.emp_salary}, Employee Company: ${this.emp_company}`);
    }
  }
  const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
  const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
  const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
  const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
  const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
  const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
  const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");
  
  const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

  console.log(`------------------- STEP 1 -------------------`);
  const newArray1 = arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_company == "Wipro";
  } );
  newArray1.forEach( (element)=>{
    element.detail();
  } );

  console.log(`------------------- STEP 2 -------------------`);
  const newArray2 = arrayEmps.filter( (currentValue)=>{
    return currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR";
  } );
  newArray2.forEach( (element)=>{
    element.detail();
  } );

console.log(`------------------- STEP 3 -------------------`);
const newArray3 = arrayEmps.filter((currentValue)=>{
    return currentValue.emp_id > 50;
});
newArray3.forEach((element)=>{
element.detail();
});

console.log(`------------------- STEP 4 -------------------`);
const newArray4 = arrayEmps.filter((currentValue)=>{
    return currentValue.emp_name.startsWith("A")||currentValue.emp_name.startsWith("V")||currentValue.emp_name.startsWith("M");
});
newArray4.forEach((element)=>{
element.detail();
});

console.log(`------------------- STEP 5 -------------------`);
const sumOfSalary = arrayEmps.reduce((runningTotal, value)=>{
    return runningTotal + value.emp_salary;
}, 0);
console.log(`Sum of salary of Employees of all dept is: ${sumOfSalary}`);
console.log(`Average salary of employees of all dept is: ${sumOfSalary/arrayEmps.length}`);

console.log(`------------------- STEP 6 -------------------`);
const newArray5 = arrayEmps.filter((currentValue)=>{
   return currentValue.emp_dept == "IT";
});
const sumOfSalary2 = newArray5.reduce((runningTotal, value)=>{
    return runningTotal+value.emp_salary;
}, 0);
console.log(`Sum of salary of Employees of IT dept is: ${sumOfSalary2}`);
console.log(`Average salary of employees of IT dept is: ${sumOfSalary2/newArray5.length}`);













   
