import Image from "next/image";
import React from "react";
import sandstoneImg from "./assets/sandstone.jpg";

// Placeholder for main hero illustration – swap for your preferred visual.
function OCDHeroIllustration() {
	return (
		<div className="ocd-hero-illustration">
			<Image src={sandstoneImg} alt="fern" width={360} height={360} />
		</div>
	);
}

function OcdHero() {
	return (
		<section className="ocd-therapy block center hero">
			<div className="container block__content">
				<div className="text">
					<h1>OCD Therapy for Adults</h1>
					<p>
						Obsessive-Compulsive Disorder can disrupt your sense of ease and
						confidence. With the right support, you can move beyond cycles of
						doubt and take meaningful steps toward clarity and self-trust.
					</p>
				</div>
				<OCDHeroIllustration />
			</div>
		</section>
	);
}

export default OcdHero;
