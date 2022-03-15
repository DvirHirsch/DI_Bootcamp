console.log(window.location.search);
function findGetParameter(parameterName) {
	var result = null,
		tmp = [];
	location.search
		.substr(1)
		.split('&')
		.forEach(function (item) {
			tmp = item.split('=');
			if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
		});
	return result;
}

const showJson = () => {
	const fname = findGetParameter('fname');
	const lname = findGetParameter('lname');
	const output = {
		fname: fname,
		lname: lname,
	};

	document.getElementById('jsonOutput').innerText = JSON.stringify(output);
};

if (window.location.search != '') {
	showJson();
}
