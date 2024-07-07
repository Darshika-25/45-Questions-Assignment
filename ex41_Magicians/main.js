"use strict";
// make a array of magician’s names.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["Hania", "Darshika", "Sakina"];
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach((magicians) => {
        console.log(magicians);
    });
}
show_magicians(magicians);
