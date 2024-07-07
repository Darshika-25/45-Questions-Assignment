// modify the make_shirt() function so that shirts are large by default with a message that reads "I love TypeScript".Make a large shirt and a medium shirt with the default message 

function make_shirt(
  size: string = "large",
  message: string = "I love TypeScript"
) {
  console.log(
    `Making a ${size} t-shirt with the message "${message}" printed on it.`
  );
}

make_shirt(); // Default message, for large size
make_shirt("medium"); // Default message, for medium size

// make a shirt of any size with a different message.

make_shirt("small", "AI is Future"); // Custom message, for small size
