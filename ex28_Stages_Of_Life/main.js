"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Set a value for the variable age
let age = 20;
// If the person is less than 2 years old
// the person is a baby.
if (age < 2) {
    console.log("The person is a baby.");
}
// If the person is at least 2 years old but less than 4
// person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
// If the person is at least 4 years old but less than 13
// person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
// If the person is at least 13 years old but less than 20
// person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
// If the person is at least 20 years old but less than 65
// person is an adult.
// this is answer as the variable age = 20
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
// If the person is age 65 or older
//if above conditions are false then else will run
else {
    console.log("The person is an elder.");
}
