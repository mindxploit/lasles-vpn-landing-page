import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Flip from "react-reveal/Flip";

const NavBar = () => {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(!active);
	};

	const closeBurger = () => {
		setActive(false);
	};

	return (
		<Flip top duration={3000} delay={1000}>
			<div className="navbar">
				<div className="navleft">
					<div className="burger" onClick={handleClick}>
						<div className="line1"></div>
						<div className="line2"></div>
						<div className="line3"></div>
					</div>
					<img className="logo-img" src={logo} alt="logo" />
					<a className="logo-text" href="#">
						Lasles<span className="bold">VPN</span>
					</a>
				</div>
				<nav>
					<ul className={active ? "navbar-center nav-active" : "navbar-center"}>
						<li>
							<a onClick={closeBurger} className="nav-links" href="#">
								About
							</a>
						</li>
						<li>
							<a onClick={closeBurger} className="nav-links" href="#features">
								Features
							</a>
						</li>
						<li>
							<a onClick={closeBurger} className="nav-links" href="#pricing">
								Pricing
							</a>
						</li>
						<li>
							<a onClick={closeBurger} className="nav-links" href="#testimonials">
								Testimonials
							</a>
						</li>
						<li>
							<a onClick={closeBurger} className="nav-links" href="#">
								Help
							</a>
						</li>
					</ul>
				</nav>
				<div className="navright">
					<div className="nav-sign">
						<a className="sign-in" href="#">
							Sign In
						</a>
						<button className="sign-btn">
							<a className="sign-up" href="#">
								<span className="bold">Sign Up</span>
							</a>
						</button>
					</div>
				</div>
			</div>
		</Flip>
	);
};

export default NavBar;
