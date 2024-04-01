console.log(`----------Object 1: bankSbi----------`);
const bankSbi = {
    name: "State Bank Of India",
    branch: "Sangola",
    branchId: 12345,
    establishment: 1955

}
console.log(bankSbi);

console.log(`----------Object 2: bankLocation----------`);
const bankLocation = {
    street: "abc road",
    city: "Sangola",
    pin: 413307
}
console.log(bankLocation);

console.log(`----------Cloning of Object----------`);
const cloneBankSbi = Object.assign({}, bankSbi);
console.log(`Clone of object bankSbi: `, cloneBankSbi);

const cloneBankLocation = Object.assign({}, bankLocation);
console.log(`Clone of object bankLocation: `, cloneBankLocation);

console.log(`----------Object 3: rateOfInterest----------`);
const rateOfInterest = {
    homeLoanInterest: "9.40%",
    personalLoanInterest: "12.5%" ,
    dueInterest: "14.3%"
}
console.log(rateOfInterest);

console.log(`----------Merging object 1, 2 and 3----------`);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.table(sbiDetails);

console.log(`----------Traversing of object after merging----------`);
for (const key in sbiDetails) {
    console.log(`${key} -> ${sbiDetails[key]}`);
}



