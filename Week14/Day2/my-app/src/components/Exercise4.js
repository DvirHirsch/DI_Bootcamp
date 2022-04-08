import logo from './logo.svg';
import '../index.css';

const Exercise4 = (props) => {
	const style_header = {
		color: 'white',
		backgroundColor: 'DodgerBlue',
		padding: '10px',
		fontFamily: 'Arial',
	};

	return (
		<div>
			<h1 style={style_header}>This a Header</h1>
			<p className="para">This is a Paragraph</p>
			<a href="#">This is a Link</a>

			<form>
				<h2>This a Form:</h2>
				<label> Enter your name :</label>
				<br></br>
				<input name="name" />
				<input type="submit" value="submit" />
			</form>

			<h3>Here is an image:</h3>
			<img src={logo} className="App-logo" alt="logo" />

			<h3>This is a list:</h3>
			<ul>
				<li>Coffee</li>
				<li>Tea</li>
				<li>Milk</li>
			</ul>
		</div>
	);
};

export default Exercise4;
