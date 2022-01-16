// Exercise 1
let me = ['my', 'favorite', 'color', 'is', 'blue'];
console.log(me.join());

// Exercise 2
let str1 = 'mix';
let str2 = 'pad';
let newWord1 = str1.split('mi').join('pa');
let newWord2 = str2.split('pa').join('mi');
let newWord = `${newWord1} ${newWord2}`;
console.log(newWord);

let firstWord = 'Hello';
let secondWord = 'World';
let newFirst = firstWord.split('He').join('Wo');
let newSecond = secondWord.split('Wo').join('He');
let thirdWord = `${newFirst} ${newSecond}`;
console.log(thirdWord);

// Exercise 3 : Calculator
// let num1 = +prompt('first number please');
// let num2 = +prompt('second number please');
// let sum = +alert(`the sum is: ${num1 + num2}`);
// let subtract = +alert(`the subtract is: ${num1 - num2}`);
// let multiply = +alert(`the multiply is: ${num1 * num2}`);
// let divide = +alert(`the divide is: ${num1 / num2}`);
