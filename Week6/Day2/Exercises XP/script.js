console.log(`-----*****----- Exercise 1 : Scope -----*****-----`);
/* 
    1. Analyse the code below, and predict what will be the value of a in all the following functions.
    2. Write your prediction as comments in a js file.
*/

// #1
function q1() {
	var a = 5;
	if (a > 1) {
		a = 3;
	}
	alert(a);
	// prediction: 3
	// actual: 3
}
// q1();

//#2
var a = 0;
function q2() {
	a = 5;
	// prediction: 5
	// actual: 5
}
// q2();

function q22() {
	alert(a);
	// prediction: 0
	// actual: 0
}
// q22();

//#3
function q3() {
	window.a = 'hello';
	// prediction: undefined
	// actual: undefined
}
// console.log(`value of q3(): ${q3()}`);
// q3();

function q32() {
	alert(a);
	// prediction: 0
	// actual: 0
}
// q32();

//#4
var a = 1;
function q4() {
	var a = 'test';
	alert(a);
	// prediction: 'test'
	// actual: 'test'
}
// q4();

//#5
var a = 2;
if (true) {
	var a = 5;
	// alert(a);
	// prediction: 5
	// actual: 5
}
// alert(a);
// prediction: 5
// actual: 5

console.log(`-----*****----- Exercise 2 : Ternary operator -----*****-----`);
/*
Using the code below:

function winBattle(){
    return true;
}

    1. Transform the winBattle() function to an arrow function.
    2. Create a variable called experiencePoints.
    3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
    4. Console.log the experiencePoints variable.
*/

let winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

console.log(`-----*****----- Exercise 3 : Is it a string ? -----*****-----`);
/*
    Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
    Check out the example below to see the expected output
*/

let isString = (input) => (typeof input === 'string' ? true : false);
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

console.log(`-----*****----- Exercise 4 : Colors -----*****-----`);
/*
    1. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
    2. Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
    Hint : Use the array methods taught in class. Look at the lesson Array Methods.
*/

let colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];

colors.forEach((color, index) => {
	console.log(`${index + 1}# choice is ${color}.`);
});

const isViolet = colors.some((color) => color === 'Violet')
	? console.log('Yeah')
	: console.log('No...');

console.log(`-----*****----- Exercise 5 : Colors #2 -----*****-----`);
/*
    Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
    Hint : Use the array methods taught in class and ternary operator.
*/
let color = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'];
let ordinal = ['th', 'st', 'nd', 'rd'];

// colors.forEach((color, index) => {
// 	const ordinalIndex = index + 1;
// 	let currentOrdinal = ordinal[ordinalIndex]
// 		? ordinal[ordinalIndex]
// 		: ordinal[0];

// 	console.log(`${ordinalIndex}${currentOrdinal} choice is ${color}.`);

// easier one
color.forEach((e, i) => {
	i > 2
		? console.log(`${i + 1}${ordinal[0]} choise is ${e}`)
		: console.log(`${i + 1}${ordinal[i + 1]} choise is ${e}`);
});
console.log(`-----*****----- Exercise 6 : Bank Details -----*****-----`);
/*
In this exercise, you have to decide which type of variables you have to use (ie. let or const):

    1. Create a global variable called bankAmount which value is the amount of money currently in your account.
    2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
    3. Create an array with all your monthly expenses, both positive and negative (money made and money spent).
    Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
    4. Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
    5. Display your curre	nt bankAccount standing at the end of the month.
*/
let bankAmount = 10000;
const vat = 0.17;
let details = [+200, -100, +146, +167, -2900];

detailsVatInclude = details.map((expense) => expense * (1 + vat));

// with reduce
// bankAmount = detailsVatInclude.reduce((prev, curr)=> prev+curr, bankAmount)
// console.log(bankAmount);

// with forEach
detailsVatInclude.forEach((element) => (bankAmount += element));
console.log(bankAmount);
