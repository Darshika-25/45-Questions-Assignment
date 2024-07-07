// Start with your work from Exercise 41. 

let magicians: string[] = ["Hania", "Darshika", "Sakina"];

function show_magicians(magicians: string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}

// Call the function make_great() with a copy of the array of magicians’ names. Because the original
// array will be unchanged, return the new array and store it in a separate array.

function make_great(magicians: string[]): string[] {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`${magician} the Great`);
  });
  return greatMagicians;
}

// Call show_magicians() with each array to show that you have one array of the
// original names and one array with the Great added to each magician’s name.

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");

show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
