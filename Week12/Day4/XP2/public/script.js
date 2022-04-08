// fetch('http://localhost:3000/user')
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data);
// 		document.getElementById('json').textContent = JSON.stringify(data);
// 	})
// 	.catch((e) => console.log(e));

fetch('http://localhost:3000/:id')
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		document.querySelector('div').textContent = JSON.stringify(data);
	})
	.catch((e) => console.log(e));

const btn = document.getElementById('jsBtn');
const jsAlert = () => alert('Hello From Javascript');

btn.addEventListener('click', jsAlert);
