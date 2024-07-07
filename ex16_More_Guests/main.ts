let guests: string[] = ["Doctor Banner", "Bruce Wayne", "Tony Stark"];

// having a bigger table invite more friends to dinner
// print out the good news

console.log("Great News! I have found a bigger dinner table! So lets have more people coming over for a larger feast!!");

// add more guests for invitation
// with push method = this will add the guest by the end of an array

guests.push("Elon Musk", "Warren Buffet");

// with unshift method = this will add the guest by the beginning of an array

guests.unshift("David Wellerman", "William James")

// with splice method = this will add guests at any postion in the array

guests.splice(2, 0, "Barry Allen", "Albert Eisntein");

// with spread operator

guests = [...guests, "Jade Green"];

// with concat method

let newGuests = ["Isaac Newton"];
guests = guests.concat(newGuests)

// now print

guests.forEach(guest => {
	console.log(`Dear ${guest}, You are invited for delicious feasty dinner tonight!`);
	
});