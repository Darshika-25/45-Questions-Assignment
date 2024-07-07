"use strict";
// start with a copy of your program from Exercise 41.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Hania", "Darshika", "Sakina"];
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
make_great(magicians); // Modifies the original array
// Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
show_magicians(magicians); // Shows modified names