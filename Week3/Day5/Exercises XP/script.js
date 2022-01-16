// Exercise 1
//		Part 1
let people = ['Greg', 'Mary', 'Devon', 'James'];
people.shift();
console.log(people);
people.splice(2, 1, 'Jason');
console.log(people);
people.push('Dvir');
console.log(people);
let maryIndex = people.indexOf('Mary');
console.log(`Mary index position is ${maryIndex}`);

let people2 = people.slice(1, 3);
console.log(people2);

let foo = people.indexOf('Foo');
console.log(foo);
// The indexOf() method returns -1 if the value is not found.

let last = people[people.length - 1];
console.log(last);

//		Part 2
for (let i = 0; i < people.length; i++) {
	console.log(people[i]);
}

for (let i = 0; i < people.length; i++) {
	if (people[i] === 'Jason') {
		break;
	}
	console.log(people[i]);
}

// Exercise 2
let colors = ['blue', 'black', 'white', 'green', 'yellow'];
let suffixes = ['st', 'nd', 'rd', 'th'];

for (let i = 0; i < colors.length; i++) {
	console.log(`My #${i + 1} choise is ${colors[i]}`);
}

// Exercise 3
// let userNum = prompt('enter a number please');
// console.log(typeof userNum);

// let userNum;
// do {
// 	userNum = +prompt('enter a number please');
// 	console.log(userNum);
// 	userNum++;
// } while (userNum < 10);

// the diffrence between the while and the do while loops is that in a while loop we check the condition first, and a do while loop says do the stuff first and then check the condition.
// the do while is more relevant for this situation

// Exercise 4
let building = {
	numberOfFloors: 4,
	numberOfAptByFloor: {
		firstFloor: 3,
		secondFloor: 4,
		thirdFloor: 9,
		fourthFloor: 2,
	},
	nameOfTenants: ['Sarah', 'Dan', 'David'],
	numberOfRoomsAndRent: {
		sarah: [3, 990],
		dan: [4, 1000],
		david: [1, 500],
	},
};

console.log(building.numberOfFloors);

console.log(`apartments on floor 1: ${building.numberOfAptByFloor.firstFloor}, apartments on floor 3: ${building.numberOfAptByFloor.thirdFloor}
`);

console.log(
	`the name of the second tenant: ${building.nameOfTenants[1]}, the number of rooms that he has in his apartment: ${building.numberOfRoomsAndRent.dan[0]}`
);

if (
	building.numberOfRoomsAndRent.sarah[1] +
		building.numberOfRoomsAndRent.david[1] >
	+building.numberOfRoomsAndRent.dan[1]
) {
	building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

// Exercise 5
const family = {
	dad: 'david',
	mom: 'alona',
	child1: 'yosi',
	child2: 'james',
	dog: 'moki',
};

for (const property in family) {
	console.log(property);
}

for (const key in family) {
	console.log(family[key]);
}

// Exercise 6
let details = {
	my: 'name',
	is: 'Rudolf',
	the: 'raindeer',
};

for (const key in details) {
	console.log(`${details[key]}`);
}

// Exercise 7
let names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle'];

for (const letter in names) {
	console.log(`${names[letter][0]}`);
}
