import React from 'react';

class Events extends React.Component {
	constructor() {
		super();
		this.state = {
			isToggleOn: true,
		};
	}
	render() {
		const clickMe = () => {
			alert('I was clicked');
		};
		const handleKeyPress = (ev) => {
			if (ev.key === 'Enter') {
				alert(`The Enter key was pressed, your input is: ${ev.target.value}`);
			}
		};
		const toggle = (ev) => {
			console.log(this.state.isToggleOn);
			if (this.state.isToggleOn) {
				this.setState({ isToggleOn: false });
				ev.target.textContent = 'ON';
			} else {
				this.setState({ isToggleOn: true });
				ev.target.textContent = 'OFF';
			}
		};

		return (
			<>
				<button onClick={clickMe}>Click me</button>
				<br></br>
				<input
					type="text"
					placeholder="Press the ENTER key!"
					onKeyPress={handleKeyPress}
				/>
				<br></br>
				<button onClick={toggle}>State</button>
			</>
		);
	}
}
export default Events;
