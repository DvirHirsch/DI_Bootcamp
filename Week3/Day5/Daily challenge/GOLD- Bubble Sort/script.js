/*
1. Using the .toString() method convert the array to a string.
2. Using the .join()method convert the array to a string. Try passing different values into the join.
Eg .join(“+”), .join(” “), .join(“”)
3. Bonus : To do this Bonus look up how to work with nested for loops
Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
The output should be: [9,8,7,6,5,4,3,2,1,0]
Hint: The algorithm is called “Bubble Sort”
    * Use a temporary variable to swap values in the array.
    * Use 2 “nested” for loops (Nested means one inside the other).
    * Add comments and console.log the result for each step, this will help you understand.
    Requirement: Don’t copy paste solutions from Google
*/
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
let numsToString = numbers.toString();
console.log(numsToString);
let numsJoin = numbers.join('/');
console.log(numsJoin);

let tempSwap;
const bubbleSort = function (arr) {
	// loop forwards through the array
	for (let i = 0; i < arr.length; i++) {
		// in loop below we set j = i so we move on after finding the greatest value
		for (let j = i; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				tempSwap = arr[i]; // store the original value for swapping
				arr[i] = arr[j]; // set the original value position to greater value
				arr[j] = tempSwap; // set the greater value position to original value
			}
		}
	}
	return console.log(arr);
};
console.log(numbers);
bubbleSort(numbers);
