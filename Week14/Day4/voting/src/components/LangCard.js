import { render } from '@testing-library/react';
import React from 'react';

class LangCard extends React.Component {
	constructor() {
		super();
		this.state = {
			votes: 0,
		};
	}

	render() {
		const moreVote = () => {
			this.setState({ votes: this.state.votes + 1 });
		};

		return (
			<>
				<div className="style">
					<div>{this.state.votes}</div>
					<div>{this.props.langName}</div>
					<button onClick={moreVote}>Click Here</button>
				</div>
			</>
		);
	}
}

export default LangCard;
