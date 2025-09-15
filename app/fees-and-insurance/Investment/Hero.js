import Image from "next/image";
import React from "react";
import heroImg from "../assets/waves.webp";
import "./styles/hero.scss";

function Hero() {
	return (
		<section className="block hero" id="fees__hero">
			<div className="block__content container hero__content">
				<div className="hero__text">
					<h1>Therapy is an Investment</h1>
					<p>
						Therapy is an investment in your growth, relationships, and
						wellbeing. At CALM Therapy, we integrate evidence-based practices
						with a holistic perspective to support meaningful change. Each
						session is offered with expertise and intention, grounded in the
						belief that therapy should be thoughtful, effective, and responsive
						to your needs.
					</p>
				</div>
				<div className="hero__media">
					<Image
						src={heroImg} // replace with your asset
						alt="Therapy session illustration"
						width={600}
						height={400}
						priority
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
