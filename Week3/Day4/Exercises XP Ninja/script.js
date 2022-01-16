// Exercise 1
/*
    Given the years two people were born, find the date when the younger one is exactly half the age of the older.
    Notes: The dates are given in the format YYYY

    1. take the current date V
    2. use prompt  V
    3. math / 2  
*/

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
// const userOne = +prompt('what is the year you born?');
// const userTwo = +prompt('what is the year your friend born?');
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
// 1958,1990

// Exercise 2
