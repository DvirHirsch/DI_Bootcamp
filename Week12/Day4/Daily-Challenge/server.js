const express = require('express');
const app = express();
const port = 3000;
app.use('/', express.static(__dirname + '/public'));

app.get('/aboutMe/:hobby', (req, res) => {
	if (typeof req.params !== 'string') {
		res.status(404).send('404 Page not found');
		console.log('404 Page not found');
	} else {
		res.end(req.params.hobby);
		console.log(req.params.hobby);
	}
});

app.get('/pic', (req, res) => {
	res.sendFile('/public/pic.html', { root: __dirname });
	console.log('sending pic....');
});

app.get('/form', (req, res) => {
	res.sendFile('/public/form.html', { root: __dirname });
});

app.get('/formData', (req, res) => {
	let email = req.query.email;
	let msg = req.query.message;
	res.end(`${email} sent you a message: ${msg}`);
	console.log(`getting OUTPUT: ${email} sent you a message: ${msg}`);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}....`);
});

// Exercise 2 : Express & Parameters
// const express = require('express');
// const app = express();
// const port = 3000;
// app.use('/', express.static(__dirname + '/public'));

// app.get('/:id', (req, res) => {
// 	res.json(req.params);
// 	console.log(req.params);
// });

// app.listen(port, () => {
// 	console.log(`Server running on port ${port}....`);
// });

// // Exercise 3: Express & Static files
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use('/', express.static(__dirname + '/public'));

// app.listen(port, () => {
// 	console.log(`Server running on port ${port}...`);
// });
