"use strict";
// Write an if else chain
// the player gets 5 points for shooting green alien
Object.defineProperty(exports, "__esModule", { value: true });
let alienColour = "green";
if (alienColour === "green") {
    console.log("you earned 5 points for shooting the alien!");
}
else if ((alienColour = "yellow")) {
    console.log("you earned 10 points!");
}
;
// the player gets 10 points if alien is not green
alienColour = "yellow";
if (alienColour === "green") {
    console.log("you earned 5 points for shooting the alien!");
}
else if ((alienColour = "yellow")) {
    console.log("you earned 10 points!");
}
;
