console.log(`-----*****----- Exercise 1 -----*****-----`);
/*
Create a structured HTML file linked to a JS file

1. Create these variables and give them values:
    * addressNumber
    * addressStreet
    * country

2. Write a variable named globalAddress, and concatenate inside, the variables:
    * addressNumber
    * addressStreet
    * country

In order to create a sentence

3. Display globalAddress Example: globalAddress should display « I live in BenYehuda 5, in Israel »
*/
let addressNumber = 20;
let addressStreet = 'Kazanelson';
let country = 'Israel';
let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;

console.log(globalAddress);

console.log(`-----*****----- Exercise 2 -----*****-----`);
/*
  1. Store your birth year in a variable.
  2. Store a future year in a variable.
  3. Calculate your possible ages for that year based on the stored values.
  4. Display : "I will be NN in YYYY", substituting the values.
*/
let birthYear = 1996;
let futureYear = 2030;
let futureMe = `I will be ${futureYear - birthYear} in ${futureYear}`;

console.log(futureMe);

console.log(`-----*****----- Exercise 3 -----*****-----`);
// 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
// 2. Display dog
console.log(pets.slice(1, 2));
// 3. Add to the array pets, the pet horse. Remove the pet rabbit
pets.splice(3, 1, 'horse');
console.log(pets);
// 4. Display the array length
console.log(pets.length);
