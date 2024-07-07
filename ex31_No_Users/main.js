"use strict";
// add an if test to Exercise 28 to make sure the list of users is not empty
Object.defineProperty(exports, "__esModule", { value: true });
// if the list is empty, print the message "We need to find some users!"
// remove all of the usernames from your array, and make sure the correct message is printed.
let users = [];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    users = [];
    console.log(`All users have been removed, ${users.length}`);
}
