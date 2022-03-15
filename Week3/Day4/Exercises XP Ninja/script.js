console.log(`-----*****----- Exercise 1 : Age difference -----*****-----`);
/*
    1. Given the years two people were born, find the date when the younger one is exactly half the age of the older.
    Notes: The dates are given in the format YYYY
*/
/*
const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const userOne = +prompt('what is the year you born?');
const userTwo = +prompt('what is the year your friend born?');
const halfAgePersonOne = (yyyy - userOne) / 2;
const halfAgePersonTwo = (yyyy - userTwo) / 2;

if (
	halfAgePersonOne > halfAgePersonTwo &&
	halfAgePersonOne === halfAgePersonTwo * 2
)
	console.log(`the year of the younger is ${halfAgePersonTwo}  `);

if (
	halfAgePersonTwo > halfAgePersonOne &&
	halfAgePersonTwo === halfAgePersonOne * 2
)
	console.log(`the year of the younger is ${halfAgePersonOne}  `);

console.log(halfAgePersonOne, halfAgePersonTwo);
*/
// 1958,1990

console.log(`-----*****----- Exercise 2 : Zip codes -----*****-----`);
/*
 Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

    1. While working in a Post Office you must have the clients’ zip code in order to send them their letters.
    2. Ask the client for their zip code and console.log “success” or “error” based on the following rules.
        1. Zip codes consists of 5 numbers
        2. Must only contain numbers
        3. Must not contain any whitespace (spaces)
        4. Must not be greater than 5 digits in length
*/
/*
//	Part 1:
let clientZip = prompt('Enter your zip code please');
// clientZip.length === 5 && !isNaN(clientZip) && clientZip.indexOf(' ') === -1
// 	? console.log('Success')
// 	: console.log('Error');

//	Part 2(regex):
/^[0-9]{5}$/.test(clientZip) && !/\D/.test(clientZip) && !/\s/.test(clientZip)
	? console.log('Success')
	: console.log('Error');
*/

console.log(`-----*****----- Exercise 3 : Secret word -----*****-----`);
/*
    1. Prompt the user for a word and save it to a variable.
    2. Delete all the vowels of the word and console.log the result.
    3. Bonus: Replace the vowels with another character and console.log the result
*/
/*
let userWord = prompt('Enter a word please');
userWord = userWord.replace(/[aeiou]/gi, '');
console.log(userWord);
*/
