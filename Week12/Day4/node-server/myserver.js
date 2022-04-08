// Exercise 1 : HTTP

/*
    1. Create a new folder, name it - node-server
    2. Create a server file, name it - myserver.js
    3. In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
    4. Your server should run on http://localhost:3000/
*/

// 1 - Import Node.js core module
const http = require('http');
// 2 - creating server
const server = http.createServer((req, res) => {
	//handle incoming requests here..
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(
		'<html><body><h1>This is my first response</h1><h1>This is my second response</h1><h5>This is my third response</h5></body></html>'
	);
	res.end();
});
//3 - listen for any incoming requests
server.listen(3000);
console.log('Node.js web server at port 3000 is running..');
