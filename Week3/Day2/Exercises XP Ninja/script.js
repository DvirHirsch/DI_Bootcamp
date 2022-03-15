console.log(`-----*****----- Exercise 1 : Evaluation -----*****-----`);
/*
	For each expression, predict what you think the output will be in a comment (//) without first running the command.
	Of course, explain each prediction.
	Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
*/
5 >= 1;
// predict: true
// actual: true
// explain:  5 is bigger than 1
console.log(5 >= 1);

0 === 1;
// predict: false
// actual: false
// explain:  0 is not equal to 1 in the value
console.log(0 === 1);

4 <= 1;
// predict: false
// actual: false
// explain:  4 is bigger than 1
console.log(4 <= 1);

1 != 1;
// predict: false
// actual: false
// explain:  1 is equal to 1 and should be true without the exclamation mark
console.log(1 != 1);

'A' > 'B';
// predict: false
// actual: false
// explain:  B is bigger than A (65 vs 66)
console.log('A' > 'B');

'B' < 'C';
// predict: true
// actual: true
// explain:  B is smaller than C (66 vs 67)
console.log('B' < 'C');

'a' > 'A';
// predict: true
// actual: true
// explain:  a is bigger than capitalize A (97 vs 65)
console.log('a' > 'A');

'b' < 'A';
// predict: false
// actual: false
// explain:  b is bigger than capitalize A (98 vs 65)
console.log('b' < 'A');

true === false;
// predict: false
// actual: false
// explain:  true is not equal to false
console.log(true === false);

true != true;
// predict: false
// actual: false
// explain:  true that not equal to true is false
console.log(true != true);

console.log(`-----*****----- Exercise 2 : Ask for numbers -----*****-----`);
/*
    1. Ask the user for a string of numbers separated by commas
    2. Console.log the sum of the numbers.
    Hint: use some string methods
*/
/*
const userNums = prompt(
	'Enter a string of numbers separated with commas please'
).split(',');
const reducer = (previousValue, currentValue) =>
	parseInt(previousValue) + parseInt(currentValue);

console.log(userNums.reduce(reducer));
*/
console.log(`-----*****----- Exercise 3 : Find Nemo -----*****-----`);
/*
    1. Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"
    2. Find the word “Nemo”
    3. Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
    4. If you can’t find Nemo, console.log “I can’t find Nemo”.
*/
/*
const userSentence = prompt(
	'Please enter a sentence that containing the word "Nemo"'
);
const isNemo = userSentence.includes('Nemo');
isNemo
	? console.log(`I found Nemo at ${userSentence.indexOf('Nemo')}`)
	: console.log(`I can't find Nemo`);
*/

console.log(`-----*****----- Exercise 4 : Boom -----*****-----`);
/*
Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

    * If the number given is less than 2 : return “boom”
    * If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
    * If the number given is evenly divisible by 2, add a exclamation mark to the end.
    * If the number given is evenly divisible by 5, return the string in ALL CAPS.
    * If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
*/
let userNum = parseInt(prompt('Enter a number please'));
let outpet;
if (userNum < 2) outpet = 'boom';
if (userNum > 2) outpet = `b${'o'.repeat(userNum)}m`;
if (userNum % 2 === 0) outpet += '!';
if (userNum % 5 === 0) outpet = outpet.toUpperCase();
if (userNum % 2 === 0 && userNum % 5 === 0) outpet = outpet.toUpperCase();

console.log(outpet);
