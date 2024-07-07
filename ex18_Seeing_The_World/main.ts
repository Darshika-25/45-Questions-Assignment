// Think of at least five places in the world you’d like to visit
// Store the locations in a array, not in alphabetical order

let places: string[] = ["Turkey", "Switzerland", "Italy", "Australia", "Greece"];

// Print your array in its original order
console.log("Original Order:", places);

// Print your array in alphabetical order without modifying the actual list
console.log("Alphabetical Order:", [...places].sort());

// Print your array in its original order
console.log("Original Order:", places);

// Print your array in reverse alphabetical order without modifying the list
console.log("Reversed Alphabetical Order:", [...places].sort().reverse());

// Print your array in its original order
console.log("Original Order:", places);

// Reverse the order of your list
places.reverse();
console.log("Reversed Order:", places);

// Reverse the order of your list again. Print the list to show it’s back to its original order
places.reverse();
console.log("Original Order:", places);

// Sort your array so it’s stored in alphabetical order and print it
places.sort();
console.log("Alphabetical Order:", places);

// Sort to change your array so it’s stored in reverse alphabetical order and print it
places.sort().reverse();
console.log("Reversed Alphabetical Order:", places);
