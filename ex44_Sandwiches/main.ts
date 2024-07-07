// write a function that accepts a list of items a person wants on sandwich. 

// the function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 

function sandwich(...items: string[]) {
  console.log(`Making a sandwich of ${items.join(', ')}.`);
}

// Call the function three times, using a different number of arguments each time.
sandwich("Bread", "Mayo", "Cheese", "Salami");
sandwich("Bread", "Avocado", "Mustard", "Minced Beef");
sandwich("Bran Bread", "Ketchup", "Lettuce", "Cheese", "Chicken");
