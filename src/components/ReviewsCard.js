import React from "react";

import star from "../assets/avatars/star.svg";

const ReviewsCard = (props) => {
	return (
		<div className="rev-card">
			<div className="rev-header">
				<div className="rev-profile">
					<img src={props.img} />
				</div>
				<div>
					<p className="rev-name">{props.name}</p>
					<p className="rev-location">{props.location}</p>
				</div>
				<div className="rev-star">
					<p>4.5</p>
					<img src={star} />
				</div>
			</div>
			<p className="rev-desc">{props.description}</p>
		</div>
	);
};

export default ReviewsCard;
