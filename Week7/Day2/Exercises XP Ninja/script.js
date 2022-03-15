console.log(`-----*****----- Exercise 1 : Array to Object -----*****-----`);
/*
	Using this array const letters = ['x', 'y', 'z', 'z'];

    1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
    2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
*/
const letters = ['x', 'y', 'z', 'z'];

// for loop
const countVals = (arr, vals) => {
	let counts = 0;
	arr.forEach((curr) => {
		vals === curr ? counts++ : (counts = counts);
	});
	return counts;
};

let countObj = {};
letters.forEach((e) => {
	countObj[e] = countVals(letters, e);
});
console.log(countObj);

// reduce method
const withReduce = letters.reduce(
	(prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
	{}
);
console.log(withReduce);

console.log(`-----*****----- Exercise 2 : Let’s play! -----*****-----`);
/*
    1. Create an array using map() that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
    2. Filter the gameInfo array to only include users who are on the red team.
*/
const gameInfo = [
	{
		username: 'john',
		team: 'red',
		score: 5,
		items: ['ball', 'book', 'pen'],
	},
	{
		username: 'becky',
		team: 'blue',
		score: 10,
		items: ['tape', 'backpack', 'pen'],
	},
	{
		username: 'susy',
		team: 'red',
		score: 55,
		items: ['ball', 'eraser', 'pen'],
	},
	{
		username: 'tyson',
		team: 'green',
		score: 1,
		items: ['book', 'pen'],
	},
];

const usernames = gameInfo.map((e) => e.username + '!');
console.log(usernames);

const redTeam = gameInfo.filter((e) => e.team === 'red');
console.log(redTeam);

console.log(`-----*****----- Exercise 3: Dog competition -----*****-----`);
/*
	Hint: Dog Years -> the dog’s age is the age multiplied by 7.

    1. Use a loop to find the sum of all the dog’s ages in dog years.
    2. Using the map() method, find the sum of all the dog’s ages in dog years.
    3. Using the filter() method, find the sum of all the dog’s ages in dog years.
    4. Using the reduce() method, find the sum of all the dog’s ages in dog years.
*/
const data = [
	{
		name: 'Butters',
		age: 3,
		type: 'dog',
	},
	{
		name: 'Cuty',
		age: 5,
		type: 'rabbit',
	},
	{
		name: 'Lizzy',
		age: 6,
		type: 'dog',
	},
	{
		name: 'Red',
		age: 1,
		type: 'cat',
	},
	{
		name: 'Joey',
		age: 3,
		type: 'dog',
	},
	{
		name: 'Rex',
		age: 10,
		type: 'dog',
	},
];
let sumAges = 0;
data.forEach((e) => (sumAges += e.age * 7));
console.log(sumAges);

let sumAges1 = 0;
data.map((e) => (sumAges1 += e.age * 7));
console.log(sumAges1);

let sumAges2 = 0;
data.filter((e) => (sumAges2 += e.age * 7));
console.log(sumAges2);

const sumDogAges = data.reduce((acc, curr) => acc + curr.age * 7, 0);
console.log(sumDogAges);

console.log(`-----*****----- Exercise 4 : Email -----*****-----`);
// Clean up this email to have no whitespaces. Do it in a single line (return a new string).

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
const trimEmail13 = userEmail3.trim();
console.log(trimEmail13);

console.log(`-----*****----- Exercise 5: Employees #3 -----*****-----`);
/*
    Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
    Example: { 'Bradley Bouley': 'Full Stack Resident' }
    Hint: Step one, create an empty object.
*/
let users = [
	{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
	{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
	{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
	{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
	{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
	{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
	{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
];

let nameAndRoleArr = [];
users.forEach((e) => {
	let obj = {};
	obj[e.firstName + ' ' + e.lastName] = e.role;
	nameAndRoleArr.push(obj);
});

// the updated users array
users = nameAndRoleArr;
console.log(users);
