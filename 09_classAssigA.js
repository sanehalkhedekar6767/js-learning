
console.log(`--------------- STEP 1 ---------------`);
class Vehicle {
  type;
  company;
  model;
  id;
  color;
  constructor(vehicleType, companyName, modelName, vehicleId, vehicleColor) {
    this.type = vehicleType;
    this.company = companyName;
    this.model = modelName;
    this.id = vehicleId;
    this.color = vehicleColor;
  }
  vehicleDetails() {
    console.log(`Vehicle Details-->  Company: ${this.company}, Model: ${this.model}, Id: ${this.id}, Color: ${this.color}, Type: ${this.type}`);
  }
}
const mahindra = new Vehicle("Car", "Mahindra", "Thar", 123, "Black");
mahindra.vehicleDetails();
const hero = new Vehicle("Bike", "Hero", "Splendor", 267, "Black");
hero.vehicleDetails();
const tata = new Vehicle("Car", "TATA Motors", "Nexon", 893, "Blue");
tata.vehicleDetails();
const tvs = new Vehicle("Bike", "TVS", "Apache", 193, "Red");
tvs.vehicleDetails();
const renault = new Vehicle("Car", "Renault", "Kiger", 456, "White");
renault.vehicleDetails();


const arrayOfVehicles = [mahindra, hero, tata, tvs, renault];
console.log(`-------- Traversing array --------`);
for (const element of arrayOfVehicles) {
 element.vehicleDetails();
}

console.log(`--------------- STEP 2 ---------------`);
class College{
    constructor(name, city, state, courses, students){
        this.name = name;
        this.city = city;
        this.state = state;
        this.courses = courses;
        this.students = students;
    }
    display(){
        console.log(`College Details --> Name: ${this.name}, City: ${this.city}, State: ${this.state}, Courses: ${this.courses}, Students: ${this.students}`);
    }
}
const coep = new College("COEP", "Pune", "Maharashtra", 11, 3256);
coep.display();
const iitn = new College("IIT Nagpur", "Nagpur", "Maharashtra", 6, 1800);
iitn.display();
const govtCollege = new College("Govt. College of Engineering", "Karad", "Maharashtra", 5, 1600);
govtCollege.display();
const kit = new College("KIT College of Engineering", "Kolhapur", "Maharashtra", 8, 1200);
kit.display();


