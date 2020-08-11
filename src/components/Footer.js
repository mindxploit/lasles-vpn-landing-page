import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/social_icons/Facebook.svg";
import twitter from "../assets/social_icons/Twitter.svg";
import instagram from "../assets/social_icons/Instagram.svg";

import Subscribe from "./Subscribe";

const Footer = () => {
	return (
		<>
			<div className="footer">
				<Subscribe />
				<div className="footer-container">
					<div className="footer-left">
						<div className="footer-logo">
							<img className="logo-img" src={logo} alt="logo" />
							<a className="logo-text" href="#">
								Lasles<span className="bold">VPN</span>
							</a>
						</div>
						<div className="footer-text">
							<p>
								<span className="medium">LaslesVPN</span> is a private virtual network that has
								unique features and has high security.
							</p>
						</div>
						<div className="footer-icons">
							<a href="#">
								<img src={facebook} alt="facebook-icon" />
							</a>
							<a href="#">
								<img src={twitter} alt="twitter-icon" />
							</a>
							<a href="#">
								<img src={instagram} alt="instagram-icon" />
							</a>
						</div>
						<p className="footer-lighter">©2020LaslesVPN</p>
					</div>
					<div className="footer-right">
						<div className="footer-col">
							<h2>Product</h2>
							<div className="footer-links">
								<a href="#">Download</a>
								<a href="#">Pricing</a>
								<a href="#">Locations</a>
								<a href="#">Server</a>
								<a href="#">Countries</a>
								<a href="#">Blog</a>
							</div>
						</div>
						<div className="footer-col">
							<h2>Engage</h2>
							<div className="footer-links">
								<a href="#">LaslesVPN ?</a>
								<a href="#">FAQ</a>
								<a href="#">Tutorials</a>
								<a href="#">About Us</a>
								<a href="#">Privacy Policy</a>
								<a href="#">Terms of Service</a>
							</div>
						</div>
						<div className="footer-col">
							<h2>Earn Money</h2>
							<div className="footer-links">
								<a href="#">Affiliate</a>
								<a href="#">Become Partner</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
