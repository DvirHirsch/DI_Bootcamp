console.log(`-----*****----- Exercise 1 : Location -----*****-----`);
/* 
    Analyze the code below. What will be the output?
*/
const person = {
	name: 'John Doe',
	age: 25,
	location: {
		country: 'Canada',
		city: 'Vancouver',
		coordinates: [49.2827, -123.1207],
	},
};

const {
	name,
	location: {
		country,
		city,
		coordinates: [lat, lng],
	},
} = person;

console.log(
	`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

console.log(`-----*****----- Exercise 2: Display Student Info -----*****-----`);
/*
	1. Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
	For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
	2. Destructure the parameter inside the function and return a string as the example seen below:
	displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
	// output : 'Your full name is Elie Schoppik'`
*/
const displayStudentInfo = (studentObject) =>
	`Your full name is ${studentObject.first} ${studentObject.last}`;

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

console.log(`-----*****----- Exercise 3: User & id -----*****-----`);
/*
	Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

    1. Using methods taught in class, turn the users object into an array:
    Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
    FYI : The number is their ID number.

    2. Modify the outcome of part 1, by multipling the user’s ID by 2.
    Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
*/
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersEntries = Object.entries(users);
console.log(usersEntries);

const usersIdMultiply = usersEntries.map(([key, val]) => [key, val * 2]);
console.log(usersIdMultiply);

console.log(`-----*****----- Exercise 4 : Person class -----*****-----`);
/*
    Analyze the code below. What will be the output?
*/
class Person {
	constructor(name) {
		this.name = name;
	}
}

const member = new Person('John');
console.log(typeof member); // Output: object

console.log(`-----*****----- Exercise 5 : Dog class -----*****-----`);
/*
	Using the Dog class below:
		class Dog {
		constructor(name) {
			this.name = name;
		}
	};

  Analyze the options below. Which constructor will successfully extend the Dog class?

	// 1
class Labrador extends Dog {
	constructor(name, size) {
		this.size = size;
	}
}
// 2
class Labrador extends Dog {
	constructor(name, size) {
		super(name);
		this.size = size;
	}
}
// 3
class Labrador extends Dog {
	constructor(size) {
		super(name);
		this.size = size;
	}
}
// 4
class Labrador extends Dog {
	constructor(name, size) {
		this.name = name;
		this.size = size;
	}
}
*/
class Dog {
	constructor(name) {
		this.name = name;
	}
}
// 2
class Labrador extends Dog {
	constructor(name, size) {
		super(name);
		this.size = size;
	}
}

let labrador = new Labrador('Shon', 130);

console.log(labrador);

// Answer: Constructor number 2 will successfully extend the Dog class because you must call the super constructor.

console.log(`-----*****----- Exercise 6 : Challenges -----*****-----`);
/*
	1. Evaluate these (ie True or False)
	[2] === [2] 
	{} === {}

	2. What is, for each object below, the value of the property number ?

	const object1 = { number: 5 }; 
	const object2 = object1; 
	const object3 = object2; 
	const object4 = { number: 5}; 
	object1.number = 4;

	3. Create a class Animal with the attributes name, type and color

	4. Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes. 

	5. Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color. 
*/
// 1
console.log([2] === [2]); // Outpet: false
console.log({} === {}); // Outpet: false
// Answer: We get false on both because every {} creates a unique object address by reference and the same for arrays.

// 2
const object1 = { number: 5 }; // Outpet: 4
const object2 = object1; // Outpet: 4
const object3 = object2; // Outpet: 4
const object4 = { number: 5 }; // Outpet: 5
object1.number = 4; // Outpet: 4

// Answer: Object 1 changed value to 4, objects 2 and 3 are refering to the same address in memory, and object 4 is assigned to a new value (5).
console.log(object1, object2, object3, object4);

// 3
class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.type = type;
		this.color = color;
	}
}

// 4
class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color);
	}
	sound(sound) {
		return console.log(
			`The name of the animal is: ${this.name}, the type is: ${this.type}, the color is: ${this.color}, and the sound the animal makes is: ${sound}.`
		);
	}
}

let dog = new Mamal('Sky', 'dog', 'black');
dog.sound('Woff');

// 5
let cow = new Mamal('Otis', 'cow', 'white');
cow.sound('Mooo');
