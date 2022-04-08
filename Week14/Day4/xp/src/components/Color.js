import React from 'react';

class Color extends React.Component {
	constructor() {
		super();
		this.state = {
			favoritColor: 'red',
		};
	}

	componentDidMount() {
		const changeYellow = () => {
			this.setState({ favoritColor: 'yellow' });
		};

		setTimeout(changeYellow, 5000);
	}

	render() {
		const changeBlue = () => {
			this.setState({ favoritColor: 'blue' });
		};
		return (
			<>
				<header>
					<h2>My Favorite Color is {this.state.favoritColor}</h2>
				</header>
				<button onClick={changeBlue}>Change to blue</button>
			</>
		);
	}
}

export default Color;
