"use strict";
// Formatting city-country pairs
// write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: //"Lahore, Pakistan"
Object.defineProperty(exports, "__esModule", { value: true });
// Call your function with at least three city-country pairs, and print the value 
// that’s returned.
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Seoul", "South Korea"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Rome", "Italy"));
console.log(city_country("Paris", "France"));
