console.log(
	`-----*****----- Exercise 1 : The World Translator -----*****-----`
);
/*
Hint: Use Switch Case

    1. Ask the user which language they speak.

    2. Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

    3. Create a few conditions :
    4. If the user speaks French : display “Bonjour”
    5. If the user speaks English : display “Hello”
    6. If the user speaks Hebrew : display “Shalom”
    7. If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
*/
/*
let userLang = prompt('which language do you speak?');
userLang.toLowerCase();

switch (userLang) {
	case 'french':
		console.log('Bonjour');
		break;
	case 'english':
		console.log('Hello');
		break;
	case 'hebrew':
		console.log('Shalom');
		break;
	default:
		console.log('01110011 01101111 01110010 01110010 01111001');
}

*/
console.log(`-----*****----- Exercise 2 : The Grade Assigner -----*****-----`);
/*
    1. Ask the user for their grade.

    2. If the grade is bigger than 90, console.log “A”
    3. If the grade is between 80 and 90 (included), console.log “B”
    4. If the grade is between 70(included) and 80 (included), console.log “C”
    5. If the grade is lower than 70, console.log “D”
*/
/*
let userGrade = +prompt('what is your grade?');

if (userGrade > 90) {
	console.log('A');
} else if (userGrade >= 80 && userGrade <= 90) {
	console.log('B');
} else if (userGrade >= 70 && userGrade <= 80) {
	console.log('C');
} else {
	console.log('D');
}
*/

console.log(`-----*****----- Exercise 3 : Verbing -----*****-----`);
/*
    1. Prompt the user for a string. It must be a verb.
    2. If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
    3. If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
    4. If the length of the string is less than 3, leave it unchanged.
*/
/*
let userVerb = prompt('what is your verb?');

if (userVerb.length >= 3 && !userVerb.includes('ing')) userVerb += 'ing';
else if (userVerb.length >= 3 && userVerb.includes('ing')) userVerb += 'ly';

console.log(userVerb);
*/
