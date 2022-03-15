console.log(`-----*****----- Exercise 1: Your favorite food -----*****-----`);
/*
  1. Store your favorite food into a variable.
  2. Store your favorite meal into a variable (ie. breakfast, lunch or dinner)
  3. Console.log I eat <favorite food> at every <favorite meal>
*/
let favFood = 'Afganit';
let favMeal = 'lunch';
console.log(`I eat ${favFood} at every ${favMeal}`);

console.log(`-----*****----- Exercise 2 : Series -----*****-----`);
console.log(`--- Part I ---`);
/*
Part I

Using this array : let watchedSeries = ["black mirror", "money heist", "the big bang theory"]

    1. Create a variable named watchedSeriesLength that is equal to the number of series in the watchedSeries array.

    2. Create a variable named myWatchedSeries, that is equal to a sentence describing the series you watched
    For example : black mirror, money heist, and the big bang theory

    3. Console.log a sentence using both of the variables created above
    For example : I watched 3 series : black mirror, money heist, and the big bang theory
*/
let watchedSeries = ['black mirror', 'money heist', 'the big bang theory'];
let watchedSeriesLength = watchedSeries.length;
let myWatchedSeries = watchedSeries.toString();

console.log(`I watched ${watchedSeriesLength} series: ${myWatchedSeries}`);

console.log(`--- Part II ---`);
/*
Part II

    1. Change the series “the big bang theory” to “friends”. Hint : You will need to use  the index of “the big bang theory” series.
    2. Add, at the end of the array, the name of another series you watched.
    3. Add, at the beginning of the array, the name of your favorite series.
    4. Delete the series “black mirror”.
    5. Console.log the third letter of the series “money heist”.
    6. Console.log the watchedSeries array.
*/
watchedSeries.splice(2, 1, 'friends');
console.log(watchedSeries);

watchedSeries.push('prison break');

watchedSeries.unshift('gomora');

watchedSeries.splice(1, 1);

console.log(watchedSeries[1][2]);

console.log(watchedSeries);

console.log(
	`-----*****----- Exercise 3 : The temperature converter -----*****-----`
);
/*
    1. Store a celsius temperature into a variable.

    2. Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
    Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
    Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32
*/
let celsTemp = 25;
let fharTemp = (celsTemp / 5) * 9 + 32;

console.log(`${celsTemp}°C is ${fharTemp}°F`);

console.log(
	`-----*****----- Exercise 4 : Guess the answers #1 -----*****-----`
);
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

console.log(
	`-----*****----- Exercise 5 : Guess the answers #2 -----*****-----`
);
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
// Actual: string
// explain: a value of string
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
// Actual: hamburgers
// explain: add a letter(string) to a string
console.log('hamburger' + 's');

'hamburgers' - 's';
// Prediction: NaN
// Actual: NaN
// explain: subtraction only work on type numbers, so it converts both sides to numbers and gets NaN
console.log('hamburgers' - 's');

'1' + '3';
// Prediction: '13'
// Actual: '13'
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

console.log(
	`-----*****----- Exercise 6 : Guess the answers #3 -----*****-----`
);
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
// Prediction: NaN
// Actual: Nan
// explain: subtraction only work on type numbers, so it converts both sides to numbers and gets NaN
console.log('Bob' - 'bill');
