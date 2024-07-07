// the previous guest list

let guests: string[] = ["Harvey Dent", "Bruce Wayne", "Tony Stark"];

// make a variable for the guest who did not attend the dinner

let unableToAttend: string = "Harvey Dent";

console.log(`${unableToAttend},was unable to attend us for dinner.`);

// replace the guest by creating a new guest variable and using index.Of built in command

let newGuest: string = "Doctor Banner";

guests[guests.indexOf(unableToAttend)] = newGuest;

// Print the new invitations

guests.forEach(guest => {
	console.log(`Dear ${guest}, you are invited for a dinner tonight!`);
	
});

