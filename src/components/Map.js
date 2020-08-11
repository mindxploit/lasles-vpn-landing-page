import React from "react";
import map from "../assets/map/map.svg";

import Fade from "react-reveal/Fade";

const Map = () => {
	return (
		<div className="map-container">
			<Fade bottom>
				<div className="map-header">
					<h2>Huge Global Network of Fast VPN</h2>
					<p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
				</div>
			</Fade>
			<div className="map-illustration">
				<img src={map} alt="map" />
			</div>
		</div>
	);
};

export default Map;
