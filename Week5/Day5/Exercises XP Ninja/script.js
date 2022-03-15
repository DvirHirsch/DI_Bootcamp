console.log(`-----*****----- Exercise 1 : Random Number -----*****-----`);
/*
   1. Get a random number between 1 and 100.
   2. Console.log all even numbers from 0 to the random number.
*/
const randomNum = function () {
	let randNum = Math.floor(Math.random() * 100);
	let evenNums = [];
	for (let i = 0; i < randNum; i++) {
		if (i % 2 === 0) evenNums.push(i);
	}
	return console.log(
		`The random number is: ${randNum}, and the even numbers from 0 to ${randNum} is: ${evenNums.join(
			','
		)}`
	);
};

randomNum();

console.log(`-----*****----- Exercise 2: Capitalized letters -----*****-----`);
/*
   1. Create a function that takes a string as an argument.
   2. Have the function return:
        The string but all letters in even indexes should be capitalized.
        The string but all letters in odd indexes should be capitalized.

Note:
   * Index 0 will be considered even.
   * The argument of the function should be a lowercase string with no spaces.
*/
const capitalize = function (str) {
	let evenCap = ' ';
	let oddCap = ' ';

	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			evenCap += str[i].toUpperCase();
			oddCap += str[i];
		} else {
			evenCap += str[i];
			oddCap += str[i].toUpperCase();
		}
	}
	return console.log(
		`The string is: ${str}, the even indexes capitalized: ${evenCap}, the odd indexes capitalized: ${oddCap}`
	);
};
capitalize('abcdef');

console.log(`-----*****----- Exercise 3 : Is palindrome? -----*****-----`);
/*
    Write a JavaScript function that checks whether a string is a palindrome or not.
    Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
*/
function checkPalindrome(str) {
	// Change the string into lower case and remove  all non-alphanumeric characters
	let lowerCaseStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
	let checkCount = 0;
	// Check whether the string is empty or not
	if (lowerCaseStr === '') {
		console.log('Nothing found!');
		return false;
	}
	// Check if the length of the string is even or odd
	if (lowerCaseStr.length % 2 === 0) {
		checkCount = lowerCaseStr.length / 2;
	} else {
		// If the length of the string is 1 then it becomes a palindrome
		if (lowerCaseStr.length === 1) {
			console.log('Entry is a palindrome.');
			return true;
		} else {
			// If the length of the string is odd ignore middle character
			checkCount = (lowerCaseStr.length - 1) / 2;
		}
	}
	// Loop through to check the first character to the last character and then move to the next
	for (let i = 0; i < checkCount; i++) {
		// Compare characters and drop them if they do not match
		if (lowerCaseStr[i] != lowerCaseStr.slice(-1 - i)[0]) {
			console.log(`Entry "${str}" is not a palindrome.`);
			return false;
		} else {
			console.log(`The "${str}" entry is a palindrome.`);
			return true;
		}
	}
}

checkPalindrome('madam');
checkPalindrome('nurses run');
checkPalindrome('fox');

console.log(`-----*****----- Exercise 4 : Biggest Number -----*****-----`);
/*
    Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
    Note : This function should work with any array;
*/
const biggestNumberInArray = function (arrayNumber) {
	let largest;
	if (arrayNumber.length > 0 && arrayNumber[0] === /^[0-9]/) {
		largest = arrayNumber[0];
	} else {
		largest = 0;
	}

	for (let i = 0; i < arrayNumber.length; i++) {
		if (arrayNumber[i] > largest) {
			largest = arrayNumber[i];
		}
	}
	return largest;
};

console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));

console.log(`-----*****----- Exercise 5: Unique Elements -----*****-----`);
/*
Write a JS function that takes an array and returns a new array with only unique elements.
*/
const unieqeEl = function (arrayList) {
	return console.log([...new Set(arrayList)]);
};
const list = [1, 2, 3, 3, 3, 3, 4, 5];
unieqeEl(list);
