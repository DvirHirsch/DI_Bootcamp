console.log(`-----*****----- Exercise 1 : Menu -----*****-----`);
/*
Using the array below:

let menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]

    1. Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
    2. Using an array method, check if all the elements in the array are starters.
    3. Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.

Using this array :

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

    Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
*/
let menu = [
	{
		type: 'starter',
		name: 'Houmous with Pita',
	},
	{
		type: 'starter',
		name: 'Vegetable Soup with Houmous peas',
	},
	{
		type: 'dessert',
		name: 'Chocolate Cake',
	},
];

menu.some((menu) => menu.type === 'dessert')
	? console.log('yes, dessert is include')
	: console.log('no, dessert is not include');

menu.every((menu) => menu.type === 'starter')
	? console.log('yes, all the elements are starters')
	: console.log('no, not all elements are starters');

if (!menu.some((menu) => menu.type === 'main course')) {
	menu.push({
		type: 'main course',
		name: 'Baked Potatoes',
	});
	console.log('yes, the array has a main course');
}

let vegetarian = ['vegetable', 'houmous', 'eggs', 'vanilla', 'potatoes'];

console.log(`-----*****----- Exercise 2 : Chop into chunks -----*****-----`);
/*
    1. Write a JavaScript function that takes 2 parameters: a string and a number.
    2. The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
*/

const string_chop = function (str, length) {
	return str.match(new RegExp('.{1,' + length + '}', 'g'));
};

console.log(string_chop('developers', 2));

console.log(`-----*****----- Exercise 3 : You said string ? -----*****-----`);
/*
    Write a JavaScript function to find a word within a string.
		console.log(search_word('The quick brown fox', 'fox')); 
		"'fox' was found 1 times." 		
*/

const search_word = function (sentence, word) {
	// split the sentence string by spaces in a
	let a = sentence.split(' ');
	// search for pattern in a
	let count = 0;
	for (let i = 0; i < a.length; i++) {
		// if match found increase count
		if (word === a[i]) count++;
	}

	return `The word '${word}' was found ${count} times.`;
};

console.log(search_word('The quick brown fox', 'fox'));
