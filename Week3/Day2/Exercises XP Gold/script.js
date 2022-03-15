console.log(`-----*****----- Exercise 1 : Favorite Color -----*****-----`);
/* 
let me = ["my","favorite","color","is","blue"]

  Write some simple Javascript code that will join all the items in the array above, and console.log the result.
*/
let me = ['my', 'favorite', 'color', 'is', 'blue'];
console.log(me.join(' '));

console.log(`-----*****----- Exercise 2 : Mixup -----*****-----`);
/*
    1. Create 2 variables. The values should be strings. For example:
    let str1 = "mix" let str2 = "pod"
    2. Slice out and swap the first 2 characters of the 2 strings from part 1.
    3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
    4. Finally console.log the new concatenated string.
*/
let str1 = 'mix';
let str2 = 'pad';
let newWord =
	str2.slice(0, 2) + // 'pa'
	str1.slice(2, str1.length) + // 'x'
	' ' +
	str1.slice(0, 2) + // 'mi'
	str2.slice(2, str1.length); // 'd'
console.log(newWord);

console.log(`-----*****----- Exercise 3 : Calculator -----*****-----`);
/*
Make a Calculator. Follow the instructions:

    1. Prompt the user for the first number.
    2. Store the first number in a variable called num1.
    Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
    3. Prompt the user for the second number.
    4. Store the second number in a variable called num2.
    5. Create an Alert where the value is the SUM of num1 and num2.
    6. BONUS: Make a program that can subtract, multiply, and also divide!
*/
/*
let num1 = +prompt('first number please');
let num2 = +prompt('second number please');
let sum = +alert(`the sum is: ${num1 + num2}`);
let subtract = +alert(`the subtract is: ${num1 - num2}`);
let multiply = +alert(`the multiply is: ${num1 * num2}`);
let divide = +alert(`the divide is: ${num1 / num2}`);
*/
