"use strict";
// Produce an index error of an array
Object.defineProperty(exports, "__esModule", { value: true });
let fruits = ["Grapes", "Banana", "Melon"];
console.log(fruits[3]); // here its an error; undefined
// An array index addresses starts from 0
// Lets correct it
console.log(fruits[2]); // Melon will print
