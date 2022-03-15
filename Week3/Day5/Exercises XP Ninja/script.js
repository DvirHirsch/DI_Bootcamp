console.log(`-----*****----- Exercise 1 : Checking the BMI -----*****-----`);
/*
    1. Create two objects, each object should hold a person’s details. Here are the details:
        1. FullName
        2. Mass
        3. Height

    2. Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

    3. Outside of the objects, create a JS function that compares the BMI of both objects.

    4. Display the name of the person who has the largest BMI.
*/
const david = {
	FullName: 'David Levin',
	Mass: 80,
	Height: 1.75,
	BMI: function () {
		let bmi = this.Mass / this.Height ** 2;
		return bmi.toFixed(1);
	},
};
const rose = {
	FullName: 'Rose James',
	Mass: 60,
	Height: 1.59,
	BMI: function () {
		let bmi = this.Mass / this.Height ** 2;
		return bmi.toFixed(1);
	},
};

const jessica = {
	FullName: 'Jessica James',
	Mass: 50,
	Height: 1.49,
	BMI: function () {
		let bmi = this.Mass / this.Height ** 2;
		return bmi.toFixed(1);
	},
};

const compareBMI = function (person1, person2) {
	person1.BMI() > person2.BMI()
		? console.log(
				`${person1.FullName} has bigger BMI(${person1.BMI()}) than ${
					person2.FullName
				} BMI(${person2.BMI()})`
		  )
		: console.log(
				`${person2.FullName} has bigger BMI(${person2.BMI()}) than ${
					person1.FullName
				} BMI(${person1.BMI()})`
		  );
};
compareBMI(rose, jessica);

console.log(`-----*****----- Exercise 2 : Grade Average -----*****-----`);
/*
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

    1. Create a function called findAvg(gradesList) that takes an argument called gradesList.

    2. Your function must calculate and console.log the average.

    3. If the average is above 65 let the user know they passed

    4. If the average is below 65 let the user know they failed and must repeat the course.
    Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
    Hint One function must call the other.
*/
const grades = [67, 91, 84, 75, 59, 93, 74];
const findAvg = function (gradesList) {
	let sum = 0;
	for (let i = 0; i < gradesList.length; i++) {
		sum += gradesList[i];
	}
	let avg = sum / gradesList.length;
	console.log(`The average is: ${avg.toFixed(1)}`);
	return avg;
};

const isPassed = function (avgGrade) {
	avgGrade > 65
		? console.log(`You passed!`)
		: console.log(`You failed and you must repeat the course!`);
};
findAvg(grades);
isPassed(findAvg(grades));
