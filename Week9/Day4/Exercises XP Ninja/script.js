console.log(`-----*****----- Exercise 1 : Bird class -----*****-----`);
// Analyze the code below, what will be the output?

class Bird {
	constructor() {
		console.log("I'm a bird. 🦢");
	}
}

class Flamingo extends Bird {
	constructor() {
		console.log("I'm pink. 🌸");
		super();
	}
}

const pet = new Flamingo();
// "I'm pink. 🌸"
// "I'm a bird. 🦢"
// Answer: We get 'I'm pink' first because the super keyword is after the log, if the super keyword was before the 'I'm bird' log, it will be first.
