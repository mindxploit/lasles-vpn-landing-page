import React from "react";
import Slider from "infinite-react-carousel";
import ReviewsCard from "./ReviewsCard";

import lucas from "../assets/avatars/lucas.png";
import kim from "../assets/avatars/kim.png";
import jessica from "../assets/avatars/jessica.png";
import Fade from "react-reveal/Fade";

const Reviews = () => {
	return (
		<div id="testimonials" className="reviews-container">
			<Fade bottom cascade>
				<div className="reviews-text">
					<h2>Trusted by Thousands of Happy Customer</h2>
					<p>
						These are the stories of our customers who have joined us with great pleasure when using
						this crazy feature.
					</p>
				</div>
			</Fade>
			<Slider dots autoplay={true} arrows={false}>
				<ReviewsCard
					img={kim}
					name="Kim Young Jou"
					location="Seoul, South Korea"
					description="“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”."
				/>
				<ReviewsCard
					img={lucas}
					name="Lucas Smith"
					location="Warsaw, Poland"
					description="“I like it because I like to travel far and still can connect with high speed.”."
				/>
				<ReviewsCard
					img={jessica}
					name="Jessica Burtons"
					location="Shanxi, China"
					description="“This is very unusual for my business that currently requires a virtual private network that has high security.”."
				/>
			</Slider>
		</div>
	);
};

export default Reviews;
