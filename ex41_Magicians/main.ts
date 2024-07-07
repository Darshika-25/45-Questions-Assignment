// make a array of magician’s names.

let magicians: string[] = ["Hania", "Darshika", "Sakina"];

// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(magicians: string[]) {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

show_magicians(magicians);
