import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import illustration from "../assets/illustration_presentation.svg";

const Presentation = () => {
	return (
		<div className="presentation">
			<Slide left cascade duration={2000}>
				<div className="presentation-left">
					<h1 className="presentation-h1">
						Want anything to be easy with <span className="bold">LaslesVPN.</span>
					</h1>
					<p className="presentation-p">
						Provide a network for all your needs with ease and fun using{" "}
						<span className="medium">LaslesVPN </span> discover interesting features from us.
					</p>
					<Fade bottom duration={3000} delay={1000}>
						<button className="presentation-btn">Get Started</button>
					</Fade>
				</div>
			</Slide>
			<Fade right duration={2000}>
				<div className="presentation-right">
					<img src={illustration} alt="illustration" />
				</div>
			</Fade>
		</div>
	);
};

export default Presentation;
