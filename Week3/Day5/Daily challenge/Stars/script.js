/*
    1. Write a JavaScript program that recreates the pattern below.
    2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out “nested for loops” on Google).
    3. Do this Daily Challenge by youself, without looking at the answers on the internet.
*/
let pattern = '';
let star = '*';
for (let i = 1; i < 7; i++) {
	pattern += star.repeat(i) + '\n';
}
console.log(pattern);

let pattern2 = '';
let star2 = '*';
for (let i = 1; i < 7; i++) {
	for (let j = 0; j < i; j++) {
		pattern2 += star2;
	}
	pattern2 += '\n';
}
console.log(pattern2);
