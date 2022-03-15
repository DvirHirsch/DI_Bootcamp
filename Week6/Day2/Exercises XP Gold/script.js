console.log(`-----*****----- Exercise 1: Sum elements -----*****-----`);
// Write a JavaScript program to find the sum of all elements in an array. Don’t use the sum method !

const nums = [9, 18, 21, 7, 15, 3];
let sum = 0;

nums.forEach((num) => {
	sum += num;
});

console.log(`The sum of the array is: ${sum}`);

console.log(`-----*****----- Exercise 2 : Remove Duplicates -----*****-----`);
// Write a JavaScript program to remove duplicate items in an array.

const numsArr = [1, 2, 2, 2, 3, 3, 6];
console.log(...new Set(numsArr));

console.log(
	`-----*****----- Exercise 3 : Remove certain values -----*****-----`
);
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

const arr = [NaN, 0, 15, false, -22, '', undefined, 47, null];

const removeFalsey = function (arr) {
	// Return the first parameter of the callback function
	return arr.filter((val) => val);
};
console.log(removeFalsey(arr));

console.log(`-----*****----- Exercise 4 : Repeat please ! -----*****-----`);
/*
    Write a JavaScript function to concatenate a given string n times (default is 1).
    Create the repeat function yourself:
		console.log(repeat('Ha!',3));
		"Ha!Ha!Ha!"
*/

const repeat = function (str, times) {
	if (typeof times === 'undefined') {
		times = 1;
	}
	return times < 1 ? '' : new Array(times + 1).join(str);
};

console.log(repeat('Ha!', 3));

console.log(`-----*****----- Exercise 5 : Turtle & Rabbit -----*****-----`);
/*
	For this exercise, look at the lesson More JS methods.

	Using this code : 

	const startLine = '     ||<- Start line';
	let turtle = '🐢';
	let rabbit = '🐇';

	1. Line up the Turtle and the Rabbit at the start line.
	2. What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
*/

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.trim().padStart(9, ' ');
rabbit = rabbit.trim().padStart(9, '=');
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');
// console.log(turtle);
