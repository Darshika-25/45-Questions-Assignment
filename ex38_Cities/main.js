"use strict";
// write a function called describe_city() that accepts the name of a city and its country
// the function should print a simple sentence, such as;
// "Karachi is in Pakistan. 
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`The city of ${city} is in ${country}`);
}
// Give the parameter for the country a default value.Call your function
// for three different cities, at least one of which is not in the default country.
describe_city("Karachi");
describe_city("Lahore");
describe_city("Quetta");
describe_city("Istanbul", "Turkey");