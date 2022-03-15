console.log(`-----*****----- Exercise 1 : Find the sum -----*****-----`);
/* 
    Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
*/

const sum = (a, b) => a + b;
console.log(sum(5, 6));

console.log(`-----*****----- Exercise 2 : Kg and grams -----*****-----`);
/*
Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

    1. First, use function declaration and invoke it.
    2. Then, use function expression and invoke it.
    3. Write in a one line comment, the difference between function declaration and function expression.
    4. Finally, use a one line arrow function and invoke it.
*/

function kgToGramsDec(weight) {
	let grams = weight * 1000;
	return console.log(grams);
}
kgToGramsDec(50);

const kgToGramsExp = function (weight) {
	let grams = weight * 1000;
	return console.log(grams);
};
kgToGramsExp(30);

/*
The difference between function declaration and function expression:

1. A function declaration must have a function name while function expression doesn't.
2. Function declaration does not require a variable assignment while function expression does.
3. Function declaration executed before any other code while function expression load and execute only when the program interpreter reaches the line of code.
4. function declaration can be accessed before and after the function definition while function expression can be accessed only after the function definition.
5. Function declarations are hoisted while Function expressions are not.
*/

const kgToGramsArrow = (weight) => weight * 1000;
console.log(kgToGramsArrow(40));

console.log(`-----*****----- Exercise 3 : Fortune teller -----*****-----`);
/*
    1. Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
    2. The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
*/

(function (numOfChilds, partnerName, location, job) {
	const selectInfo = document.querySelector('.exc3info');
	selectInfo.innerHTML = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChilds} kids.`;
})(3, 'Rossie', 'Finland', 'Secuity manager');

console.log(`-----*****----- Exercise 4 : Welcome -----*****-----`);
/*
John has just signed in to your website and you want to welcome him.

    1. Create a Bootstrap Navbar in your HTML file.
    2. In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
    3. The function should add a div in the nabvar, displaying the name of the user and his profile picture.
*/

(function (userName) {
	const img = document.createElement('img');
	img.setAttribute(
		'src',
		'https://cdn-icons-png.flaticon.com/512/149/149071.png'
	);
	img.setAttribute('id', 'image');

	let div = document.createElement('div');
	let txtNode = document.createTextNode(`Welcome ${userName}`);
	div.appendChild(txtNode);
	div.appendChild(img);

	let appendDivLocation = document.querySelector('#welcome');
	appendDivLocation.appendChild(div);
})('Dvir');

console.log(`-----*****----- Exercise 5 : Juice Bar -----*****-----`);
/*
You will use nested functions, to open a new juice bar.
Part I:

    1. The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

    2. The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

    3. Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
*/
const selectedInfo = document.querySelector('.exc5info');

const makeJuice = function (size) {
	let ingredients = [];
	const addIngredients = function (first, second, third) {
		ingredients.push(first);
		ingredients.push(second);
		ingredients.push(third);

		const displayJuice = function () {
			let sentence = `The client wants a ${size} juice, containing `;
			ingredients.forEach(
				(element, index) =>
					(sentence += `${element}${
						index < ingredients.length - 1 ? ',' : '.'
					} `)
			);

			let exc5sentence = document.createTextNode(sentence);
			selectedInfo.appendChild(exc5sentence);
		};
		displayJuice();
	};

	addIngredients('carrot', 'orange', 'mint');
	addIngredients('apple', 'banana', 'lemon');
};

makeJuice('small');
/*
Part II:

    1. In the makeJuice function, create an empty array named ingredients.

    2. The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

    3. Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

    4. The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
*/
