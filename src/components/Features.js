import React from "react";
import check from "../assets/green_check.svg";
import illustration from "../assets/illustration_features.svg";

import Fade from "react-reveal/Fade";

const Features = () => {
	return (
		<div id="features" className="feature">
			<Fade left>
				<div className="feature-left">
					<img src={illustration} alt="illustration" />
				</div>
			</Fade>
			<Fade right>
				<div className="feature-right">
					<div>
						<h1>We Provide Many Features You Can Use</h1>
						<p className="feature-desc">
							You can explore the features that we provide with fun and have their own functions
							each feature.
						</p>
					</div>
					<div className="feature-p-container">
						<div className="feature-p">
							<img src={check} alt="check" />
							<p>Powerfull online protection.</p>
						</div>
						<div className="feature-p">
							<img src={check} alt="check" />
							<p>Internet without borders.</p>
						</div>
						<div className="feature-p">
							<img src={check} alt="check" />
							<p>Supercharged VPN</p>
						</div>
						<div className="feature-p">
							<img src={check} alt="check" />
							<p>No specific time limits.</p>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Features;
