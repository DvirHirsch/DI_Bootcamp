console.log(`-----*****----- Exercise 1 : Information -----*****-----`);
/* 
    Part I: function with no parameters
    1. Create a function called infoAboutMe () that takes no parameter.
    2. The function should console.log a sentence about you (ie. your name, age, hobbies ect...).
    3. Call the function.
    
    Part II: function with three parameters
    1. Create a function called infoAbout Person (personName, personAge, person FavoriteColor) that takes 3 parameters.
    2. The function should console.log a sentence about the person (ie. "You name is .., you are.
        years old, your favorite color is
    3. Call the function twice with the following arguments:
        infoAboutPerson ("David", 45, "blue ")
        infoAboutPerson ( "Josh ", 12, "yellow")
*/
console.log(`----- Part I -----`);
let infoAboutMe = function () {
	console.log(`My name is Dvir, I'm 25 old from Israel and I like to sleep.`);
};

infoAboutMe();

console.log(`----- Part II -----`);
let infoAboutPerson = function (personName, personAge, personFavoriteColor) {
	console.log(
		`Your name is ${personName}, you are ${personAge} years old, and your favorite color is ${personFavoriteColor}.`
	);
};

infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Josh', 12, 'yellow');

console.log(`-----*****----- Exercise 2 : Tips -----*****-----`);
/*   
    John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
    1. Create a function named calculateTip () that takes no parameter.
    2. Inside the function, ask John for the amount of the bill.
    3. Here are the rules
        If the bill is less than $50, tip 20%.
        If the bill is between $50 and $200, tip 15%.
        If the bill is more than $200, tip 10%.
    4. Console.log the tip amount and the final bill (bill + tip).
    5. Call the calculateTip () function.
*/
const calculateTip = function () {
	const bill = +prompt(`Hello John! What's the amount of the bill?`);

	const lessTip = bill * 0.2;
	const betweenTip = bill * 0.15;
	const moreTip = bill * 0.1;

	if (bill < 50)
		console.log(
			`The tip is: ${lessTip}, the bill is: ${bill}, total amount is: ${
				lessTip + bill
			}`
		);
	if (bill >= 50 && bill < 200)
		console.log(
			`The tip is: ${betweenTip}, the bill is: ${bill}, total amount is: ${
				betweenTip + bill
			}`
		);
	if (bill >= 200)
		console.log(
			`The tip is: ${moreTip}, the bill is: ${bill}, total amount is: ${
				moreTip + bill
			}`
		);
};

// calculateTip();

console.log(
	`-----*****----- Exercise 3 : Find the numbers divisible by 23 -----*****-----`
);
/*    
    1. Create a function call isDivisible () that takes no parameter.
    2. In the function, Ioop through numbers O to 500.
    3. Console.log all the numbers divisible by 23.
    4. At the end, console.log the sum of all numbers that are divisible by 2
        Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368 391 414 437 460 483
        Sum : 5313
    5. Bonus: Add a parameter divisor to the function.
        isDivisible(divisor)
        
        Example:
        isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
        isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
*/
let isDivisible = function (divisor) {
	let sum = 0;
	let outcome = [];
	for (let i = 0; i <= 500; i++) {
		if (i % divisor === 0) outcome.push(i);
		if (i % divisor === 0) sum += i;
	}
	console.log(`Outcome : ${outcome.join(',')}`);
	console.log(`Sum : ${sum}`);
};

isDivisible(23);
isDivisible(45);

console.log(`-----*****----- Exercise 4 : Shopping List -----*****-----`);
/* 
    1. Add the stock and prices objects to your js file.
    2. Create an array called shoppingList with the following items:
        "banana", "orange", and "apple". It means that you have 1 banana, 1 orange and 1 apple in your cart.
    3. Create a function called myBill() that takes no parameters.
    4. The function should return the total price of your shoppingList. In order to do this you must follow these rules:
        1. The item must be in stock.
        2. If the item is in stock find out the price in the prices object.
    5. Call the myBill () function.
    6. Bonus: If the item is in stock, decrease the item's stock by 1
*/
const stock = {
	banana: 6,
	apple: 0,
	pear: 12,
	orange: 32,
	blueberry: 1,
};

const prices = {
	banana: 4,
	apple: 2,
	pear: 1,
	orange: 1.5,
	blueberry: 10,
};

const shoppingList = [stock.banana, stock.orange, stock.apple]; //value
const myBill = function () {
	let total = []; // get the prices
	let product = []; // get the product key names
	for (const [key, price] of Object.entries(prices)) {
		if (
			(key === 'banana' && shoppingList[0] > 0) ||
			(key === 'orange' && shoppingList[1] > 0) ||
			(key === 'apple' && shoppingList[2] > 0)
		) {
			total.push(price);
			product.push(key);
		}
	}
	console.log(
		`You buy ${product.join(' and ')}, The total price is ${total.reduce(
			(sum, current) => sum + current
		)}`
	);
};
myBill();

console.log(
	`-----*****----- Exercise 5 : What’s in my wallet ? -----*****-----`
);
/* 
    Note: Read the illustration (point 4), while reading the instructions.
    1. Create a function named changeEnough (itemPrice, amountofchange) that receives two arguments:
        - an item price.
        - and an array representing the amount of change in your pocket.
    2. In the function, determine whether or not you can afford the item.
        - If the sum of the change is bigger or equal than the item's price (ie. it means that you can afford the item), the function should return true
        - If the sum of the change is smaller than the item's price (ie. it means that you cannot afford the item) the function should return false.
    3. Change will always be represented in the rollowing order quarters, dimes, nickels, pennies.
        A quarters is 0.25
        A dimes is 0.10
        A nickel is 0.05
        A penny is 0.01
    4. To illustrate:
        After you created the function, invoke it like this:
        changeEnough(4.25, [25, 20, 5, 0]);
        - The value 4.25 represents the item’s price.
        - The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
        - The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
*/
let changeEnough = function (itemPrice, amountOfChange) {
	let sum = 0;
	const currency = [0.25, 0.1, 0.05, 0.01];
	for (let i = 0; i < amountOfChange.length; i++) {
		sum += amountOfChange[i] * currency[i];
	}
	console.log(`The sum is: ${sum}, The item price is: ${itemPrice}`);

	sum >= itemPrice ? console.log(true) : console.log(false);
};

changeEnough(4.25, [25, 20, 5, 0]);
// changeEnough(14.11, [2, 100, 0, 0]);
// changeEnough(0.75, [0, 0, 20, 5]);

console.log(`-----*****----- Exercise 6 : Vacations Costs -----*****----- `);
/*   
   Let’s create functions that calculate your vacation’s costs:
   1. Define a function called hotelCost().
      -  It should ask the user for the number of nights they would like to stay in the hotel.
      -  If the user doesn’t answer or if the answer is not a number, ask again.
      -  The hotel costs $140 per night. The function should return the total price of the hotel.

   2. Define a function called planeRideCost().
      -  It should ask the user for their destination.
      -  If the user doesn’t answer or if the answer is not a string, ask again.
      -  The function should return a different price depending on the location.
          *  “London”: 183$
          *  “Paris” : 220$
          *  All other destination : 300$

   3. Define a function called rentalCarCost().
      -  It should ask the user for the number of days they would like to rent the car.
      -  If the user doesn’t answer or if the answer is not a number, ask again.
      -  Calculate the cost to rent the car. The car costs $40 everyday.
          *  If the user rents a car for more than 10 days, they get a 5% discount.
      -  The function should return the total price of the car rental.

   4. Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
    Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
    Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

   5. Call the function totalVacationCost()

   6.  Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/
const hotelCost = function () {
	let nightCost = 140;
	let numOfNights;

	while (true) {
		numOfNights = parseInt(
			prompt('For how many nights would you like to stay?')
		);
		if (!isNaN(numOfNights)) {
			break;
		}
	}
	return numOfNights * nightCost;
};
// hotelCost();

const planeRideCost = function () {
	let destinationCost = { london: 183, paris: 220, other: 300 };
	let destination;

	while (true) {
		destination = prompt('What is your destination?');
		if (!/[^a-z]/.test(destination)) {
			break;
		}
	}

	if (!(destination in destinationCost)) {
		destination = 'other';
	}

	return destinationCost[destination];
};
// planeRideCost();

const rentalCarCost = function () {
	const perDay = 40;
	const discount = 0.95;
	let rentDays;

	while (true) {
		rentDays = parseInt(
			prompt('For how many days would you like to rent the car?')
		);
		if (!isNaN(rentDays)) {
			break;
		}
	}
	const total = rentDays * perDay;

	return rentDays > 10 ? total * discount : total;
};
// rentalCarCost();

const totalVacationCost = function () {
	const hotel = hotelCost();
	const plane = planeRideCost();
	const car = rentalCarCost();
	const totalCost = hotel + plane + car;
	console.log(
		`Hotel cost is: ${hotel}, destination cost is: ${plane}, car rental cost is: ${car}`
	);
	console.log(`Total vacation cost is: ${totalCost}`);
};
// totalVacationCost();
