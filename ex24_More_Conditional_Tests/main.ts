// More conditional tests
// string equality and inequality test-1

console.log("Equality test with strings:", "Apple" == "Apple"); //true
console.log("Inequality test with strings:", ("Apple" as string == "Grape")); //false

// lowercase function test-2

console.log("Lowercase function test:", "CAKE".toLowerCase() == "cake"); //true
console.log("Lowercase function test:", "CAKE".toLowerCase() == "Cake"); //false

// numerical test-3

console.log("Numerical equality test:", 25 == 25); //true
console.log("Numerical inequality test:", (25 as number) == 28); //false
console.log("Numerical greater than test:", 25 > 5);//true
console.log("Numerical less than test:", 3 < 5);//true
console.log("Numerical greater than and equal to test:", 25 >= 25); //true
console.log("Numerical less than and equal to test:", 20 <= 25); //true

// "and" and "or" operators test
console.log("And operator test:", 5 == 5 && 10 > 5); //true
console.log("Or operator test:", 5 == 5 || false); //true

// test items in an array
let cars: string[] = ["Baleno", "Cultus", "Swift"];
console.log("Test swift in cars:", cars.indexOf("Swift")! == 2); //true
console.log("Test swift in cars:", cars.includes("Swift")); //true
console.log("Test mehran in cars:", cars.indexOf("Mehran")! == -1); //true
console.log("Test mehran in cars:", cars.includes("Mehran")); //false

// the 'includes' method requires tsconfig file 


