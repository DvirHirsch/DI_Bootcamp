// Exercise 1
let addressNumber = 13;
let addressStreet = 'Jerusalem';
let country = 'Israel';
let globalAddress = `I live in ${addressStreet} ${addressNumber}, in ${country}`;

console.log(globalAddress);

// Exercise 2
let birthYear = 1996;
let futureYear = 2030;
let futureMe = `I will be ${futureYear - birthYear} in ${futureYear}`;

console.log(futureMe);

// Exercise 3
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
// 2. Display dog
console.log(pets.slice(1, 2));
// 3. Add to the array pets, the pet horse. Remove the pet rabbit
pets.splice(3, 1, 'horse');
console.log(pets);
// 4. Display the array length
console.log(pets.length);
