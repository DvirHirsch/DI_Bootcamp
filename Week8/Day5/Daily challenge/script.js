/*
    Create a function that takes a date object and return string in the following format: YYYYMMDDHHmmSS.

    The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second.
    If any of the value has only single digit, you must use zero prefix, so that the result string length is always the same.

    Examples

    formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"

    formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"

    formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

    Notes

        1. Assume Date year input will always be greater than 1970.

        2. Try not to rely on the default Date.toString() output in your implementation.

        3. Be aware that the Date's month field is zero based (0 is January and 11 is December).
*/
const formatDate = (date) => {
	const obj = {
		getFullYear: '',
		getMonth: '',
		getDate: '',
		getHours: '',
		getMinutes: '',
		getSeconds: '',
	};

	const valArr = [];

	for (let key in obj) {
		const value = date[key]();
		valArr.push(value);
	}
	console.log(valArr.join(''));
};

formatDate(new Date(2020, 6, 4, 8, 0, 0));
formatDate(new Date(2019, 11, 31, 23, 59, 59));
formatDate(new Date(2020, 6, 4));
