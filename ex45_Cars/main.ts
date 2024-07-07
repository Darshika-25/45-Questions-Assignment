// write a function that stores information about a car in an Object. The function should always receive a manufacturer and a model name.

// It should then accept an arbitrary number of keyword arguments.Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 

function make_car(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): object {
  let car = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

// Print the Object that’s returned to make sure all the information was stored correctly

console.log(make_car("Honda", "Civic", ["color", "grey"], ["year", 2022]));
console.log(make_car("Mercedes", "Benz", ["color", "black"], ["seats", "ventilated"]));

