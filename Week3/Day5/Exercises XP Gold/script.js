// Exercise 1
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 3 === 0) {
		console.log(numbers[i]);
	}
}

// Exercise 2
let guestList = {
	randy: 'Germany',
	karla: 'France',
	wendy: 'Japan',
	norman: 'England',
	sam: 'Argentina',
};

// Exercise 3
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
