import React from "react";
import fitImg from "./assets/images/fit.jpg";
import "./style/kap-fit.scss";
import Image from "next/image";

const KapEligibility = () => {
	return (
		<section className="block keta-box kap-eligibility">
			<div className="block__content">
				<div className="fit__copy">
					<h2>Is KAP Right for You?</h2>
					<p>
						Ketamine-Assisted Psychotherapy (KAP) may offer a helpful option
						when you{"'"}re feeling stuck or haven{"'"}t found relief through
						traditional methods. It{"'"}s most useful for individuals who are:
					</p>
					<div className="fit__steps" role="list">
						<div className="fit__step" role="listitem">
							<span className="fit__num" aria-hidden="true">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<circle
										cx="12"
										cy="12"
										r="9"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
									/>
								</svg>
							</span>
							<p>
								Addressing anxiety, OCD, or depression that hasn{"'"}t responded
								to other treatments
							</p>
						</div>
						<div className="fit__step" role="listitem">
							<span className="fit__num" aria-hidden="true">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<circle
										cx="12"
										cy="12"
										r="9"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
									/>
								</svg>
							</span>
							<p>Feeling stuck in long-standing emotional patterns</p>
						</div>
						<div className="fit__step" role="listitem">
							<span className="fit__num" aria-hidden="true">
								<svg
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
								>
									<circle
										cx="12"
										cy="12"
										r="9"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
									/>
								</svg>
							</span>
							<p>
								Open to exploring altered states as a pathway to deeper
								self-awareness
							</p>
						</div>
					</div>
					<p>
						We{"'"}ll work together to carefully assess whether KAP offers
						meaningful support for you. Our priority is making sure you{"'"}re
						ready, supported, and positioned to benefit safely within a
						therapeutic framework.
					</p>
				</div>
			</div>
		</section>
	);
};

export default KapEligibility;
