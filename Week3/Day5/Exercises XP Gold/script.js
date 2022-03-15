console.log(`-----*****----- Exercise 1 : Divisible by three -----*****-----`);
/*
    1. Loop through the array above and determine whether or not each number is divisible by three.
    2. Each time you loop console.log true or false.
*/
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 === 0) {
		console.log(numbers[i], 'true');
	} else {
		console.log(numbers[i], 'false');
	}
}

console.log(`-----*****----- Exercise 2 : Attendance -----*****-----`);
/*
Given the object above where the key is the student’s name and the value is the country they are from.

    1. Prompt the student for their name.
    2. If the name is in the object, console.log the name of the student and the country they come from.
    For example: "Hi! I'm [name], and I'm from [country]."
        * Hint: You don’t need to use a for loop, just look up the statement if ... in
    3. If the name is not in the object, console.log: "Hi! I'm a guest."
*/
let guestList = {
	randy: 'Germany',
	karla: 'France',
	wendy: 'Japan',
	norman: 'England',
	sam: 'Argentina',
};
/*
let studentName = prompt('Please enter your name');
if (studentName in guestList) {
	console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}`);
} else {
	console.log(`Hi! I'm a guest.`);
}
*/

console.log(
	`-----*****----- Exercise 3 : Playing with numbers -----*****-----`
);
/*
Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.

1. Console.log the sum of all the numbers in the age array.
2. Console.log the highest age in the array.
*/
let age = [20, 5, 12, 43, 98, 55];
let sum = 0;
let highestNum = 0;

for (let i = 0; i < age.length; i++) {
	sum += age[i];
	if (highestNum < age[i]) {
		highestNum = age[i];
	}
}
console.log(sum);
console.log(`The largest number in the array: ${highestNum}`);
