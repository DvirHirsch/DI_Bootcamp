console.log(`-----*****----- Exercise 1 : HTML Form #3`);
/*
    1. Create a form like the form provided above. The form should contain three inputs:
        * name,
        * lastname,
        * submit
    2. Send the data to another HTML file and display the sent data in the body.
*/
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

	document.getElementById('dataOutput').innerText = JSON.stringify(output);
};

if (window.location.search != '') {
	showJson();
}
