// Print a greeting message to array of names in a customized manner i.e. one by one

let list: string[] = ["Bisma", "Areesha", "Hania"];
for (let name of list) { console.log(`Hello ${name}, will you become my typescipt learning partner?`); }

// lets also do it the other way
let message: string = "will you become my typescrpit partner?";
console.log(list[0] + ", " + message);
console.log(list[1] + ", " + message);
console.log(list[2] + ", " + message);
