console.log("\ndarshika\nDARSHIKA\nDarshika\n");

let userName: string = "Amna";
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
console.log(userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase())

let name1: string = "Faiza";
console.log(name1.toLowerCase());
console.log(name1.toUpperCase());
console.log(name1.replace(/\b\w/g, (char) => char.toUpperCase()));

let newName: string = "Hania";
// Printing in lowercase
console.log("Lowercase:", newName.toLowerCase());
// Printing in uppercase
console.log("Uppercase:", newName.toUpperCase());
// Printing in titlecase
console.log("Titlecase:", newName.toString());