console.log(`-----*****----- Exercise 1 : Giphy API #2 -----*****-----`);
/*
    1. Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
    2. Create a program to fetch a gif.
    3. Once the Giphy API has responded with data, append one random GIF to the page.
    Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
*/

const handleSubmit = (e) => {
	e.preventDefault();

	let formData = new FormData(e.target);
	let catObj = Object.fromEntries(formData.entries());
	let catSearch = catObj.category;

	const deleteGif = (e) => {
		e.target.parentNode.remove();
	};

	const deleteAllGifs = () => {
		let mainDiv = document.querySelector('#gifDiv');
		mainDiv.textContent = '';
	};

	let xhr = new XMLHttpRequest();

	xhr.open(
		'GET',
		`https://api.giphy.com/v1/gifs/search?q=${catSearch}&limit=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,
		true
	);

	xhr.send();

	xhr.responseType = 'json';

	xhr.onload = function () {
		let whereAppend = document.querySelector('#gifDiv');
		let newGifDiv = document.createElement('div');
		let dltBtn = document.createElement('button');
		dltBtn.textContent = 'Delete';
		dltBtn.addEventListener('click', deleteGif);
		let gif = document.createElement('img');

		gif.src = xhr.response.data[0].images.preview_gif.url;

		newGifDiv.appendChild(gif);
		newGifDiv.appendChild(dltBtn);

		whereAppend.appendChild(newGifDiv);

		let dltAllGifsBtn = form.deleteAll;
		dltAllGifsBtn.addEventListener('click', deleteAllGifs);
	};
};

let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
