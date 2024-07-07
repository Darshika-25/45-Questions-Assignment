// make a array of five usernames, including the name 'Admin'
// create a loop through the array, printing  a greeting to each user
// If the username is 'Admin', print a special greeting, "Hello admin, would you like to see a status report?"
// Otherwise, print a generic greeting, such as "Hello Eric, thank you for logging in again."

let userNames: string[] = ["Admin", "Eric", "Jaden", "Louis", "Thomas"];

// method 1

userNames.forEach((userName) => {
  if (userName === "Admin") {
    console.log(`Hello Admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userName}, thank you for logging in again.`);
  }
});

// method 2

for (let i = 0; i < userNames.length; i++) {
  if (userNames[i] === "Admin") {
    console.log(`Hello Admin, would you like to see a status report?`);
  } else {
    console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
  }
};
