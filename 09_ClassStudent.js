
//Filename: 09_ClassStudent.js
//Class name: Student 
//Data members: rollNumber, name, division
//Member function: getDetails()
//Create 3 objects from Student

class Student{
    constructor(rollNumber, name, division){
        this.rollNumber = rollNumber;
        this.name = name;
        this.division = division;
    }
    getDetails(){
        console.log(`Student Details -> RollNumber: ${this.rollNumber}, Name: ${this.name}, Division: ${this.division}`);
    }
}
const kris = new Student(1, "Kris", "A");
// kris.getDetails();
const smith = new Student(2, "Smith", "B");
// smith.getDetails();
const john = new Student(3, "John", "C");
// john.getDetails();

const array = [kris, smith, john];
for (const element of array) {
 element.getDetails(); 
}
