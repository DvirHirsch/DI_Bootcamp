console.log(
	`-----*****----- Exercise 1 : Analyzing the map method -----*****-----`
);
// Analyze this code, what will be the output ?
console.log(
	[1, 2, 3].map((num) => {
		if (typeof num === 'number') return num * 2;
		return; // [2, 4, 6]
	})
);

console.log(
	`-----*****----- Exercise 2: Analyzing the reduce method -----*****-----`
);
// Analyze this code, what will be the output ?
console.log(
	[
		[0, 1],
		[2, 3],
	].reduce(
		(acc, cur) => {
			return acc.concat(cur);
		},
		[1, 2] // [1, 2, 0, 1, 2, 3]
	)
);

console.log(`-----*****----- Exercise 3 : Analyze this code -----*****-----`);
// What is the value of i ?

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i); // i = 0,1,2,3,4,5
	//alert(num);
	return num * 2;
});

console.log(`-----*****----- Exercise 4 : Nested arrays -----*****-----`);
/*
    1. Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
    Bonus Try to do it on one line.
    2. Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ].
    3. Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
    4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
*/
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

const modifyArr = array.flat(2);
console.log(modifyArr);

const greeting = [
	['Hello', 'young', 'grasshopper!'],
	['you', 'are'],
	['learning', 'fast!'],
];

const modifyGretting = greeting.map((e) => e.join(' '));
console.log(modifyGretting);

console.log(modifyGretting.join(' '));

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

const notTrapped = trapped.flat(Infinity);
console.log(notTrapped);
