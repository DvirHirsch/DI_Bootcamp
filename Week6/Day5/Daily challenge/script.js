/*
    Create a function that returns true if all parameters are truthy, and false otherwise.

    Examples
    allTruthy(true, true, true) ➞ true

    allTruthy(true, false, true) ➞ false

    allTruthy(5, 4, 3, 2, 1, 0) ➞ false
*/

const allTruthy = function () {
	let args = Array.from(arguments);
	return console.log(args.every((el) => el));
};

allTruthy(true, true, true);

allTruthy(true, false, true);

allTruthy(5, 4, 3, 2, 1, 0);
