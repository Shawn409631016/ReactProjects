import { useState } from 'react';
import './App.css';
import Students from './Students';

const pics = {
	dog: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg',
	cat: 'https://penntoday.upenn.edu/sites/default/files/2020-02/cat-behavior-teaser.jpg',
};
const students = ['shawn', 'Andy', 'Gigi', 'Sam'];
const studentsList = students.map((person) => <li>{person}</li>);

function App() {
	const [img, setImg] = useState(pics.cat);
	const [css, setUlCss] = useState('ul-close');
	const changeImg = () => {
		const imgSwitcher = img === pics.cat ? pics.dog : pics.cat;
		const displayUl = css === 'ul-close' ? 'ul-open' : 'ul-close';
		setImg(imgSwitcher);
		setUlCss(displayUl);
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={img} className="App-logo" alt="pic" />
				<button onClick={changeImg} type="button" className="button">
					change
				</button>

				<ul className={css}>{studentsList}</ul>

				<Students list={studentsList} />
			</header>
		</div>
	);
}

export default App;
