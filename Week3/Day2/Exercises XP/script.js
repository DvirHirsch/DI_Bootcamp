// Exercise 1
let favFood = 'Afganit';
let favMeal = 'lunch';
console.log(`I eat ${favFood} at every ${favMeal}`);

//  Exercise 2
//    Part 1
let watchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = watchedSeries.toString();

console.log(`I watched ${watchedSeriesLength} series: ${myWatchedSeries}`);

//    Part 2
watchedSeries.splice(2, 1, 'friends');
console.log(watchedSeries);

watchedSeries.push('prison break');

watchedSeries.unshift('gomora');

watchedSeries.splice(1, 1);

console.log(watchedSeries[1][2]);

console.log(watchedSeries);

//  Exercise 3
let celsTemp = 25;
let fharTemp = (celsTemp / 5) * 9 + 32;

console.log(`${celsTemp}°C is ${fharTemp}°F`);

//  Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction: 55
// Actual: 55
// explain: both variables are type number so its a math problem.

a = 2;

console.log(a + b); //second expression
// Prediction: 23
// Actual: 23
// explain: a now is number 2 and both variables are type number so its a math problem.

//  What is the value of c?
// Prediction: undefined
// Actual: undefined
// explain: variable is not defined because it has not assigned to any value.
console.log(c);

console.log(3 + 4 + '5');
// Prediction: '75'
// Actual: '75'
// explain: the outcome is '75' in string becuase if u add string to a number value(7), the whole value will become string. ('75' instead of 12)

//  Exercise 5
typeof 15;
// Prediction: number
// Actual: number
// explain: a value of number
console.log(typeof 15);
typeof 5.5;
// Prediction: number
// Actual:  number
// explain: a value of number
console.log(typeof 5.5);

typeof NaN;
// Prediction: number
// Actual: number
// explain: NaN is a number that is not a legal number
console.log(typeof NaN);

typeof 'hello';
// Prediction: string
// Actual:
// explain:
console.log(typeof 'hello');

typeof true;
// Prediction: boolean
// Actual: boolean
// explain: boolean value get true or false
console.log(typeof true);

typeof (1 != 2);
// Prediction: boolean
// Actual: boolean
// explain: the outcome is true, and boolean value get true or false
console.log(typeof (1 != 2));

'hamburger' + 's';
// Prediction: hamburgers
// Actual: hamburger
// explain: add a letter(string) to a string
console.log('hamburger' + 's');

'hamburgers' - 's';
// Prediction: NaN
// Actual: NaN
// explain: subtraction only work on type numbers, so it converts both sides to numbers and gets NaN
console.log('hamburgers' - 's');

'1' + '3';
// Prediction: 13
// Actual: 13
// explain: adding string to a string results in string
console.log('1' + '3');

'1' - '3';
// Prediction: -2
// Actual: -2
// explain: subtraction string from a string results in type number
console.log('1' - '3');

'johnny' + 5;
// Prediction: 'johnny5'
// Actual: 'johnny5'
// explain: adding number to a string will results in string
console.log('johnny' + 5);

'johnny' - 5;
// Prediction: NaN
// Actual: NaN
// explain: subtraction string from a number results in Nan becuase the string should be a number
console.log('johnny' - 5);

99 * 'hello';
// Prediction: NaN
// Actual: NaN
// explain: multiplying number in a string results in Nan becuase the string should be a number
console.log(99 * 'hello');

1 != 1;
// Prediction: false
// Actual: false
// explain: 1 is equal to 1, so the boolean is false
console.log(1 != 1);

1 == '1';
// Prediction: true
// Actual: true
// explain: 2 equals sign check only comparison of value (value 1 is equal to 1)
console.log(1 == '1');

1 === '1';
// Prediction: false
// Actual: false
// explain:  3 equals sign check comparison also of the type and not only the value (type number not equal to string)
console.log(1 === '1');

//  Exercise 6
5 + '34';
// Prediction: '534'
// Actual: '534'
// explain: adding string to a number results in string
console.log(5 + '34');

5 - '4';
// Prediction: 1
// Actual: 1
// explain:  subtraction number from a string results in type number
console.log(5 - '4');

10 % 5;
// Prediction: 0
// Actual: 0
// explain: 10 modulo 5 is 0
// (10 / 5 = 2, 2 * 5 = 10, 10 - 10 = 0)
console.log(10 % 5);

5 % 10;
// Prediction: 5
// Actual: 5
// explain: 5 modulo 10 is 5
// (5 / 10 = 0.5, 0 * 10 = 0, 5 - 0 = 5)
console.log(5 % 10);

'Java' + 'Script';
// Prediction: 'JavaScript'
// Actual: 'JavaScript'
// explain: adding string to a string results in string
console.log('Java' + 'Script');

' ' + ' ';
// Prediction: null
// Actual: empty
// explain: empty string + empty equal empty
console.log(' ' + ' ');

' ' + 0;
// Prediction: 0
// Actual: 0
// explain: empty string + type number equal number
console.log(' ' + 0);

true + true;
// Prediction: 2
// Actual: 2
// explain: true equal to 1, 1+1 = 2
console.log(true + true);

true + false;
// Prediction: 1
// Actual: 1
// explain: false equal to 0(falsy value) and true to 1, 1+0 = 1
console.log(true + false);

false + true;
// Prediction: 1
// Actual: 1
// explain: false equal to 0(falsy value) and true to 1, 0+1 = 1
console.log(false + true);

false - true;
// Prediction: -1
// Actual: -1
// explain: false equal to 0(falsy value) and true to 1, 0-1 = -1
console.log(false - true);

!true;
// Prediction: false
// Actual: false
// explain: the '!' mark represnt not so !(not)true is false
console.log(!true);

3 - 4;
// Prediction: -1
// Actual: -1
// explain: type number - number results in number
console.log(3 - 4);

'Bob' - 'bill';
// Prediction: nan
// Actual:
// explain: subtraction only work on type numbers, so it converts both sides to numbers and gets NaN
console.log('Bob' - 'bill');
