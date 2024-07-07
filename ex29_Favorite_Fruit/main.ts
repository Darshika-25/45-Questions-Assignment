// make an array of your three favorite fruits and call it favorite_fruits.

// write five if statements to check whether a fruit is in your array.
// If the fruit is in your array, the if block should print a statement,
// You really like bananas!

let favorite_fruits: string[] = ["orange", "pear", "melon"];

if (favorite_fruits.indexOf("apple") !== -1) {
  console.log("I really like apple!");
}

if (favorite_fruits.includes("apple")) {
  console.log("I really like apple!");}

if (favorite_fruits.indexOf("banana") !== -1) {
	console.log("I really like banana!");
}

if (favorite_fruits.includes("banana")) {
  console.log("I really like banana!");}

if (favorite_fruits.indexOf("orange") !== -1) {
  console.log("I really like orange!");
}

if (favorite_fruits.includes("orange")) {
 console.log("I really like orange!");}
 
if (favorite_fruits.indexOf("strawberry") !== -1) {
  console.log("I really like strawberry!");
}

if (favorite_fruits.includes("strawberry")) {
 console.log("I really like strawberry!");}
 
if (favorite_fruits.indexOf("pear") !== -1) {
  console.log("I really like pear!");
}

if (favorite_fruits.includes("pear")) {
 console.log("I really like pear!");}
 
if (favorite_fruits.indexOf("melon") !== -1) {
  console.log("I really like melon!");
}

if (favorite_fruits.includes("melon")) {
 console.log("I really like melon!");}

// for 'includes' method requires a ts config file
