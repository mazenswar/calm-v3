import React from "react";
import "./style.scss";
import Image from "next/image";
import CustomLink from "@/app/Components/ui/CustomLink";
import brainMeditation from "./assets/brain-meditation.webp";
import Button from "@/app/Components/ui/Button";

function ApproachSection() {
	return (
		<section className="block approach">
			<div className="block__content container">
				<div className="approach__layout">
					{/* Left: Copy */}
					<div className="approach__copy">
						<h2>Our Approach to Therapy</h2>
						<p>
							The work we aim to do is both grounded and expansive. Grounded in
							evidence-based psychology, rigorous training, and clear
							therapeutic structure. Expansive in drawing from holistic
							traditions, contemplative practices, and the lived wisdom clients
							bring with them.
						</p>
						<p>
							Tanya’s approach blends practical tools with intuitive insight.
							Some sessions are structured, others leave space for what emerges.
							Therapy is not a space for quick fixes. It is a place for
							presence, curiosity, and lasting change that helps you return to
							what feels essential and true.
						</p>
					</div>

					{/* Right: Media + Highlights (stack vertically on md+) */}
					<div className="approach__side">
						<figure className="approach__media">
							<Image
								src={brainMeditation.src}
								alt="An integrative view: psychology in one hand, contemplative practice in the other"
								width={480}
								height={480}
								priority={false}
								sizes="(max-width: 768px) 92vw, 420px"
								style={{ width: "100%", height: "auto" }}
							/>
						</figure>

						<ul className="approach__list">
							<li>
								Grounded in rigorous clinical training and evidence‑based tools
							</li>
							<li>
								Open to holistic and contemplative practices when appropriate
							</li>
							<li>
								Oriented toward presence and long‑term growth, not quick fixes
							</li>
						</ul>
						<div className="approach__actions">
							<Button text="Learn more" primary={false} url="/about" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ApproachSection;
