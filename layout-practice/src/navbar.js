import './App.css';

function Navbar() {
	return (
		<nav className="nav">
			<img
				className="nav-logo"
				src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png"
				alt="logo"
			/>
			<div className="a-container">
				<p>Mission</p>
				<p>Featured Tea</p>
				<p>Locations</p>
			</div>
		</nav>
	);
}

export default Navbar;
