import React from "react";
import user from "../assets/Icon/user.svg";
import server from "../assets/Icon/Server.svg";
import location from "../assets/Icon/location.svg";

import Fade from "react-reveal/Fade";

const Info = () => {
	return (
		<Fade bottom>
			<div className="info-div">
				<div className="info-element">
					<img src={user} alt="user" />
					<div className="info-element-desc">
						<h2>90+</h2>
						<p>Users</p>
					</div>
				</div>
				<div className="info-element">
					<img src={location} alt="location" />
					<div className="info-element-desc">
						<h2>30+</h2>
						<p>Locations</p>
					</div>
				</div>
				<div className="info-element">
					<img src={server} alt="server" />
					<div className="info-element-desc">
						<h2>50+</h2>
						<p>Servers</p>
					</div>
				</div>
			</div>
		</Fade>
	);
};

export default Info;
