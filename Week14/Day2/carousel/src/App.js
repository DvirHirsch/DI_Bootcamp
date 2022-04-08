import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import { render } from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function App() {
	return (
		<div className="App">
			<Carousel />
		</div>
	);
}

render(<App />, document.getElementById('root'));

export default App;
