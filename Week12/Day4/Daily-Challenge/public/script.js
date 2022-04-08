const validate = () => {
	const email = document.getElementById('email').value;
	const message = document.getElementById('msg').value;
	if (email == '' || message == '') {
		alert('Invalid! Please fill the form');
		return false;
	}
};
