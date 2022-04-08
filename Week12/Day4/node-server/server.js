// 1 - Import Node.js core module
const http = require('http');
// 2 - creating server
const server = http.createServer((req, res) => {
	// inform the client that we send JSON response in the header with the appropriate content type.
	res.setHeader('Content-Type', 'application/json');
	res.writeHead(200);
	res.end(JSON.stringify(user));
});
//3 - listen for any incoming requests
server.listen(8080);
console.log('Node.js web server at port 8080 is running..');

const user = {
	firstname: 'John',
	lastname: 'Doe',
};
