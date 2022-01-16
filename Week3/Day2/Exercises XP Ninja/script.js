// Exercise 1
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

// Exercise 2
// let userNums = prompt('enter string of numbers separated by commas please');

// Exercise 3
// let userSentence = prompt('give a sentence containing the word "Nemo" please');

if ((userSentence.includes = 'Nemo')) {
	console.log(`I found Nemo at ${userSentence.indexOf('Nemo')}`);
} else {
	console.log(`I can't find Nemo`);
}

// Exercise 4
let userNum = +prompt('please enter a num');

if (userNum < 2) console.log('boom');
if (userNum > 2) console.log(``);
