import './App.css';
function Body() {
	return (
		<div>
			<div className="body">
				<div className="backgroundImg">
					<div className="text">
						<h2>Our Mission</h2>
						<h4>
							Handpicked, Artisanally Curated, Free Range, Sustainable, Small
							Batch,Fair Trade, Organic Tea
						</h4>
					</div>
				</div>
				<div className="secondPart">
					<div className="text">
						<h2>Tea of the Month</h2>
						<h4>What's steeping at The Tea Cozy?</h4>
					</div>
					<div className="imgWithText">
						<img
							src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg"
							alt="berryblitz"
						/>
						<h4>Fall Berry Biltz Tea</h4>
					</div>
					<div className="imgWithText">
						<img
							src="https://content.codecademy.com/courses/freelance-1/unit-4/img-spiced-rum.jpg"
							alt="spiced rum"
						/>
						<h4>Spiced Rum Tea</h4>
					</div>
					<div className="imgWithText">
						<img
							src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg"
							alt="donut"
						/>
						<h4>Seasonal Donuts</h4>
					</div>
					<div className="imgWithText">
						<img
							src="https://content.codecademy.com/courses/freelance-1/unit-4/img-donut.jpg"
							alt="donut"
						/>
						<h4>Myrtle Ave Tea</h4>
					</div>
					<div className="imgWithText">
						<img
							src="https://content.codecademy.com/courses/freelance-1/unit-4/img-berryblitz.jpg"
							alt="berryblitz"
						/>
						<h4>Bedford Bizarre Tea</h4>
					</div>
				</div>
				<div className="thirdPart">
					<h2>Location</h2>
					<div className="textsGroup">
						<div className="BlackTextBox">
							<h3>Downtown</h3>
							<p>384 West 4th St</p>
							Suite 108
							<p>Portland, Maine</p>
						</div>
						<div className="BlackTextBox">
							<h3>Downtown</h3>
							<p>34433 Phisherman's Avenue</p>
							<p>(Northwest Corner)</p>
							<p>Portland, Maine</p>
						</div>
						<div className="BlackTextBox">
							<h3>Downtown</h3>
							<p>515 Crescent Avenue</p>
							<p>Second Floor</p>
							<p>Portland, Maine</p>
						</div>
					</div>
				</div>
				<div className="footPart">
					<div className="footText">
						<h2>The Tea Cozy</h2>
						<h5>contact@theteacozy.com</h5>
						<h5>917-555-8904</h5>
					</div>
				</div>
			</div>
			<footer>
				<p>copyright The Tea Cozy 2017</p>
			</footer>
		</div>
	);
}

export default Body;
