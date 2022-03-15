let display = document.getElementById('display');

const number = function (num) {
	display.value += num;
};

const operator = function (operator) {
	display.value += operator;
};

const equal = function () {
	display.value = eval(display.value);
};

const clear = function () {
	display.value = display.value.slice(0, -1);
};

function reset() {
	display.value = '';
}
