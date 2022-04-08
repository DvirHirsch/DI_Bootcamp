import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserFavoriteColors from './components/UserFavoriteColors';
import reportWebVitals from './reportWebVitals';

// Exercise 1 : no JSX
const notUseJSX = React.createElement('h1', {}, 'I do not use JSX!');
ReactDOM.render(notUseJSX, document.getElementById('root'));

// Exercise 2: with JSX
const useJSX = <h1>I Love JSX!</h1>;
ReactDOM.render(useJSX, document.getElementById('root'));

const sum = 5 + 5;
const myExpression = <h1>React is {sum} times better with JSX</h1>;
ReactDOM.render(myExpression, document.getElementById('root'));

// Exercise 3 : Object
const user = {
	first_name: 'Bob',
	last_name: 'Dylan',
	fav_animals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
};

ReactDOM.render(
	<div>
		<h3>{user.first_name}</h3>
		<h3>{user.last_name}</h3>
	</div>,
	document.getElementById('root')
);

ReactDOM.render(
	<UserFavoriteColors array={user.fav_animals} />,
	document.getElementById('root')
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
