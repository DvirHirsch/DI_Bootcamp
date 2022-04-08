import React from 'react';

class Garage extends React.Component {
	render() {
		return (
			<div>
				<h2>{`Who lives in my ${this.props.size} Garage?`}</h2>
			</div>
		);
	}
}
export default Garage;
