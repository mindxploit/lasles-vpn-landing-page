import React from "react";
import Fade from "react-reveal/Fade";

const Subscribe = () => {
	return (
		<Fade bottom duration={2000}>
			<div className="subscribe-container">
				<div className="subscribe-text">
					<h2>Subscribe Now to Get Special Features!</h2>
					<p>Let's subscribe with us and find the fun.</p>
				</div>
				<button className="presentation-btn">Subscribe Now</button>
			</div>
		</Fade>
	);
};

export default Subscribe;
