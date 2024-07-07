// Delete everyone off from your guest list as you can only invite two people for dinner

console.log("Unfortunately,the bigger table cannot be arranged timely so I can only invite two people for dinner tonight.");

let guests: string[] = [
  "Doctor Banner",
  "Bruce Wayne",
  "Tony Stark",
  "Elon Musk",
  "Warren Buffet",
  "David Wellerman",
  "William James",
  "Barry Allen",
  "Albert Eisntein",
  "Jade Green",
  "Isaac Newton",
];

// remove all from guests list except two and send them an apology text

while (guests.length > 2) {
	let removedGuests = guests.pop(); console.log(`Sorry Respected ${removedGuests}, I can't invite you to dinner due to inavailabilty of the bigger table tonight.`);
};

// print an invitation to the two remaining guest telling them they are still invited
guests.forEach(guest => {
	console.log(`Dear ${guest}, You are still invited for a delicious dinner tonight! \n\nThank You!\n`);
});
// remove the removing 2 guests from the list to make sure its empty now

guests.splice(0, 2);
console.log(guests);
