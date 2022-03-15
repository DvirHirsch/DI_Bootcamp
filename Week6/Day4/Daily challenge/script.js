/*
    1. Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

    2. Create another arrow function named cloneGroceries.
        * In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
        * Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
        * In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
        * Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
        * Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?

    3. Invoke the cloneGroceries function.
 */

let client = 'John';

let groceries = {
	fruits: ['pear', 'apple', 'banana'],
	vegetables: ['tomatoes', 'cucumber', 'salad'],
	totalPrice: '20$',
	other: {
		payed: true,
		meansOfPayment: ['cash', 'creditCard'],
	},
};

const displayGroceries = () =>
	groceries.fruits.forEach((element) => {
		console.log(element);
	});
displayGroceries();

const cloneGroceries = () => {
	let user = client;
	client = 'Betty';
	console.log(client);
	console.log(user); // No, we don't see this modifcation in the user variable because it's a string (primitive value) and its only pass by value and not by reference.

	let shopping = groceries;
	console.log(groceries);
	console.log(shopping);
	groceries.totalPrice = '35$';
	console.log(groceries.totalPrice);
	console.log(shopping.totalPrice); // Yes, we see this modifcation in the shopping object because it's an object (reference) and they have the same addresss reference.
	groceries.payed = false;
	console.log(shopping.payed); // Yes, we see this modification in the shipping object because it has the same reference as the groceries object.
};

console.log(cloneGroceries());
