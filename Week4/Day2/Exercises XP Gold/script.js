console.log(`-----*****----- Exercise 1 : is_Blank -----*****-----`);
// Write a program to check whether a string is blank or not.
const isBlank = function (input) {
	return input.length === 0 ? true : false;
};
console.log(isBlank(''));
console.log(isBlank('abc'));

console.log(`-----*****----- Exercise 2 : Abbrev_name -----*****-----`);
// Write a JavaScript function to convert a string into an abbreviated form.
const abbrevName = function (input) {
	let splitNames = input.trim().split(' ');
	if (splitNames.length > 1) {
		return splitNames[0] + ' ' + splitNames[1].charAt(0) + '.';
	}
	return splitNames[0];
};
console.log(abbrevName('Robin Singh'));

console.log(`-----*****----- Exercise 3 : SwapCase -----*****-----`);
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
const swapCase = function (input) {
	let sentence = input.trim();
	const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const LOWER = 'abcdefghijklmnopqrstuvwxyz';
	const result = [];

	for (let i = 0; i < sentence.length; i++) {
		if (UPPER.includes(sentence[i])) {
			result.push(sentence[i].toLowerCase());
		} else if (LOWER.includes(sentence[i])) {
			result.push(sentence[i].toUpperCase());
		} else {
			result.push(sentence[i]);
		}
	}
	console.log(result.join(''));
};

swapCase('The Quick Brown Fox');

console.log(`-----*****----- Exercise 4 : Omnipresent value -----*****-----`);
/*
  Create a function that determines whether an argument is omnipresent for a given array.
  A value is omnipresent if it exists in every subarray inside the main array. 
*/
function isOmnipresent(arrOfNums, numToCheck) {
	for (let i = 0; i < arrOfNums.length; i++) {
		return arrOfNums[i].includes(numToCheck)
			? console.log(true)
			: console.log(false);
	}
}

isOmnipresent(
	[
		[1, 1],
		[1, 3],
		[5, 1],
		[6, 1],
	],
	1
);
isOmnipresent(
	[
		[1, 1],
		[1, 3],
		[5, 1],
		[6, 1],
	],
	6
);
// num to check is 5
isOmnipresent(
	[
		[5, 1],
		[1, 5],
		[5, 1],
		[6, 5],
	],
	5
);
