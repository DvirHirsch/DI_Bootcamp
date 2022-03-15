console.log(`-----*****----- Exercise 1 : Nested functions -----*****-----`);
/*
    1. Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

    2. Change the code below to nested arrow functions.
*/
let landscape = () => {
	let result = '';

	let flat = (x) => {
		for (let count = 0; count < x; count++) {
			result = result + '_';
		}
	};

	let mountain = (x) => {
		result = result + '/';
		for (let counter = 0; counter < x; counter++) {
			result = result + "'";
		}
		result = result + '\\';
	};

	flat(4);
	mountain(4);
	flat(4);

	return result; // ____/''''\____
};

//landscape();
console.log(landscape());

console.log(`-----*****----- Exercise 2 : Closure -----*****-----`);
// Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = (x) => (y) => x + y;
let addToTen = addTo(10);
addToTen(3); // 13
console.log(addToTen(3));

console.log(`-----*****----- Exercise 3 : Currying -----*****-----`);
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum = (a, b) => a + b;
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); // 31
console.log(curriedSum(30)(1));

console.log(`-----*****----- Exercise 4 : Currying -----*****-----`);
// Analyse the code below, and before executing it, predict the outcome of the last line.

const sum1 = (a, b) => a + b;
const curriedSum1 = (a) => (b) => a + b;
const add5 = curriedSum1(5);
add5(12); // 17
console.log(add5(12));

console.log(`-----*****----- Exercise 5 : Composing -----*****-----`);
// Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5again = (num) => num + 5;
compose(add1, add5again)(10); // 16
console.log(compose(add1, add5again)(10));
