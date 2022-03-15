console.log(`-----*****----- Exercise 1 : Menu -----*****-----`);
/*
	1. Create a function such as mergeWords('Hello')() that returns the following string: 'Hello'
	2. When the function is called without any arguments return a string where all words have been merged into a sentence. 
*/

const mergeWords = function (str) {
	return function (theNextStr) {
		if (theNextStr === undefined) {
			return str;
		} else {
			return mergeWords(str + ' ' + theNextStr);
		}
	};
};

console.log(mergeWords('Hello')());
console.log(mergeWords('There')('is')('no')('spoon.')());

/*
	3. Below is a verbose JavaScript solution, turn this into a currying function.

	function mergeWords(string) {
 	return function(nextString) {
   if (nextString === undefined) {
     return string;
   } else {
     return mergeWords(string + ' ' + nextString);
   }
 }
}
*/
const curriedMergeWords = (str) => (nextStr) => {
	if (nextStr === undefined) {
		return str;
	} else {
		return curriedMergeWords(str + ' ' + nextStr);
	}
};

console.log(curriedMergeWords('Hello')());
console.log(curriedMergeWords('There')('is')('no')('spoon.')());
