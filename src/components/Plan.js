import React from "react";
import Fade from "react-reveal/Fade";

import plan from "../assets/plan/plan.svg";
import check from "../assets/plan/check.svg";

const Plan = () => {
	return (
		<div id="pricing" className="plan-container">
			<Fade bottom>
				<div className="plan-header">
					<h1>Choose Your Plan</h1>
					<p>
						Let's choose the package that is best for you and explore it happily and cheerfully.
					</p>
				</div>
				<div className="plans">
					<div className="plan">
						<img className="plan-img" src={plan} alt="plan" />
						<h2>Free Plan</h2>
						<div className="plan-desc">
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Unlimited Bandwidth</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Encrypted Connection</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>No Traffic Logs</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Works on All Devices</p>
							</div>
						</div>
						<div className="plan-select">
							<h2>Free</h2>
							<button className="presentation-btn unselected-btn rounded-btn">Select</button>
						</div>
					</div>
					<div className="plan">
						<img className="plan-img" src={plan} alt="plan" />
						<h2>Standard Plan</h2>
						<div className="plan-desc">
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Unlimited Bandwidth</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Encrypted Connection</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Yes Traffic Logs</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Works on All Devices</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Connect Anywhere</p>
							</div>
						</div>
						<div className="plan-select">
							<h2>
								$9 <span className="mo">/ mo</span>
							</h2>
							<button className="presentation-btn unselected-btn rounded-btn">Select</button>
						</div>
					</div>
					<div className="plan">
						<img className="plan-img" src={plan} alt="plan" />
						<h2>Premium Plan</h2>
						<div className="plan-desc">
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Unlimited Bandwidth</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Encrypted Connection</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Yes Traffic Logs</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Works on All Devices</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Connect Anywhere</p>
							</div>
							<div className="plan-el">
								<img src={check} alt="check" />
								<p>Get New Features</p>
							</div>
						</div>
						<div className="plan-select">
							<h2>
								$12 <span className="mo">/ mo</span>
							</h2>
							<button className="presentation-btn rounded-btn">Select</button>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Plan;
