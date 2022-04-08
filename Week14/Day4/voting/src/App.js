import './App.css';
import React from 'react';
import LangCard from './components/LangCard';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			languages: [
				{ name: 'Php', votes: 0 },
				{ name: 'Python', votes: 0 },
				{ name: 'JavaSript', votes: 0 },
				{ name: 'Java', votes: 0 },
			],
		};
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Vote Your Language!</h1>
					{this.state.languages.map((lang, key) => {
						console.log(lang, key);
						return <LangCard langName={lang.name} key={key} />;
					})}
				</header>
			</div>
		);
	}
}

export default App;
