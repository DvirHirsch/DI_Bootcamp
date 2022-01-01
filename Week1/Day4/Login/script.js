const calcAge = function (currentYear, birthYear) {
	return currentYear - birthYear;
};

const birthYear = Number(prompt('what year were you born?'));
const currentYear = Number(prompt('what year is it?'));
const myAge = calcAge(currentYear - birthYear);
console.log(`you are ${myAge} years old`);
