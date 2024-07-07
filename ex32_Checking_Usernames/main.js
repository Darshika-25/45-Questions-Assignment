"use strict";
//  create a program that simulates how websites ensure that everyone has a unique username
Object.defineProperty(exports, "__esModule", { value: true });
// make a list of five or more usernames called current_users
let currentUsers = ["Faiza", "Hania", "Laiba", "tooba", "Darshika"];
// make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list
let newUsers = ["fizza", "Faiza", "Aliya", "zainab", "darshika"];
// loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted
// thereby convert all to lowercase
newUsers.forEach(newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} is not avaivable and will need to enter a new username.`);
    }
    else {
        console.log(`${newUser}, username is available.`);
    }
});
