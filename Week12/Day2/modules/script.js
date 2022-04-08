// const biggestNum = require('./main.js');

// const b = 5;

// let sum = biggestNum.largeNumber + b;
// console.log(sum);

// const http = require('http');
// const server = http.createServer((req, res) => {
// 	console.log('Im listening....');
// 	if (req.url === '/') {
// 		res.end(`My Moudle is: ${sum}, Hi there at the frontend`);
// 	} else {
// 		res.end('page not found');
// 	}
// });

// server.listen(3000, () => console.log('The server is listening to port 3000'));

const dateAndTime = require('./main2.js');

const http = require('http');
const server = http.createServer((req, res) => {
	console.log('Im listening....');
	res.end(
		`The date and time are currently : ${dateAndTime.getCurrentDateTime()}`
	);
});

server.listen(8080, () => console.log('The server is listening to port 8080'));
