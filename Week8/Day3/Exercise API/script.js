// Use Chuck Norris API : https://api.chucknorris.io/
// Retrieve a random chuck joke in JSON format : https://api.chucknorris.io/jokes/random

let selectEl = document.querySelector('select');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.chucknorris.io/jokes/categories');

xhr.send();

xhr.onload = function () {
	if (xhr.status != 200) {
		// analyze HTTP status of the response
		alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
	} else {
		let answer = xhr.response;
		const answerArr = JSON.parse(answer);
		console.log(answerArr);

		answerArr.forEach((element) => {
			let currentOpt = new Option(element, element);
			selectEl.append(currentOpt);
		});
	}

	let getChuckJoke = () => {
		// 1. Create a new XMLHttpRequest object
		let xhr = new XMLHttpRequest();

		// 2. Configure it: GET-request for the URL
		xhr.open(
			'GET',
			`https://api.chucknorris.io/jokes/random?${
				selectEl.value != '' ? `category=${selectEl.value}` : ''
			}`
		);

		// 3. Send the request over the network
		xhr.send();

		// 4. This will be called after the response is received
		xhr.onload = function () {
			if (xhr.status != 200) {
				// analyze HTTP status of the response
				alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
			} else {
				// show the result
				let answer = xhr.response; // response is the server
				const answerAsObj = JSON.parse(answer);
				console.log(answerAsObj);
				const joke = answerAsObj.value;
				console.log(joke);

				let answerObjKey = Object.keys(answerAsObj);
				console.log(answerObjKey);

				answerObjKey.forEach((name) => {
					let currHtmlEl = document.querySelector(`#${name}`);
					if (currHtmlEl) {
						currHtmlEl.tagName === 'INPUT' || currHtmlEl.tagName === 'TEXTAREA'
							? (currHtmlEl.value = answerAsObj[name])
							: (currHtmlEl.src = answerAsObj[name]);

						console.log(currHtmlEl.value);
					}
				});
			}
		};

		xhr.onerror = function () {
			alert('Request failed');
		};
	};

	document.querySelector('button').addEventListener('click', getChuckJoke);
};
// const parsed = JSON.parse(xhr);
// console.log(parsed);
// const jsoned = JSON.stringify(xhr, null, 2);
// console.log(jsoned);
