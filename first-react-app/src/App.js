import './App.css';

function coinToss() {
	return Math.random() < 0.5 ? 'head' : 'tails';
}

const pics = {
	cat: 'https://penntoday.upenn.edu/sites/default/files/2020-02/cat-behavior-teaser.jpg',
	dog: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg',
};

let img;

if (coinToss() === 'head') {
	img = <img src={pics.cat} className="App-logo" alt="cat" />;
} else {
	img = <img src={pics.dog} className="App-logo" alt="dog" />;
}

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{img}
				<button type="button" className="button">
					change
				</button>
			</header>
		</div>
	);
}

export default App;
