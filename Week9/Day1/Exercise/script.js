/* 
Creating a simple promise

    1. A promise is created using a constructor that takes a call back function with two arguments (line 1).
    2. The code needed to perform the promised task is written. In this example, it is assumed that the code executes successfully (line 2).
    3. If the task is successful, the promise is resolved. In this example, the optional parameter “The promised task was performed successfully” is passed (lines 4-5).
    4. If the task is unsuccessful, then the promise is rejected. In this example, an optional parameter is passed (lines 6-7).
    5. The then() method is called when the promise is resolved, ​and the catch() method is called if the promise is rejected or if there was an error during the code execution (lines 10-11).
*/

let promise = new Promise((resolve, reject) => {
	// Code to perform the promised task
	let task_performed = true;
	if (task_performed) {
		resolve('The promised task was performed successfully.');
	} else {
		reject('The promised task was not performed.');
	}
});
promise
	.then((fromRes) => console.log(fromRes))
	.catch((fromRej) => console.log(fromRej));

const arr = [2, 3, 4];
const [x, y, z] = arr;
console.log(arr, x, y, z);
