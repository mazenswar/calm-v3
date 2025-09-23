import React from "react";
import "./style.scss";
import CustomLink from "@/app/Components/ui/CustomLink";
import Button from "@/app/Components/ui/Button";

function HomeSpecialties() {
	return (
		<section
			className="block home-specialties"
			aria-labelledby="home-spec-heading"
		>
			<div className="block__content container">
				<div className="home-specialties__header">
					<h2 id="home-spec-heading">What We Can Help With</h2>
					<p className="home-specialties__sub">
						We’re here to offer care and perspective as you navigate your
						journey.
					</p>
				</div>

				<div className="home-specialties__grid" role="list">
					{/* OCD */}
					<CustomLink
						url="/specialties/ocd"
						classN="spec-card"
						ariaLabel="Read about Obsessive‑Compulsive Disorder"
					>
						<div role="listitem" className="spec-card__inner">
							<h3 className="spec-card__title">
								Obsessive‑Compulsive Disorder (OCD)
							</h3>
							<p className="spec-card__blurb">
								Evidence‑based therapy for intrusive thoughts and compulsions,
								with approaches like ERP, i‑CBT, and ACT.
							</p>
							<span className="spec-card__cta">Learn more →</span>
						</div>
					</CustomLink>

					{/* Complex Trauma */}
					<CustomLink
						url="/specialties/complex-trauma"
						classN="spec-card"
						ariaLabel="Read about Complex Trauma"
					>
						<div role="listitem" className="spec-card__inner">
							<h3 className="spec-card__title">Complex Trauma</h3>
							<p className="spec-card__blurb">
								When the past feels present, old fear or shame can shape today.
								We pair grounding skills with deeper work (IFS, mindfulness) to
								rebuild safety, clarity, and self‑compassion.
							</p>
							<span className="spec-card__cta">Learn more →</span>
						</div>
					</CustomLink>

					{/* Self‑Esteem */}
					{/* <CustomLink
						url="/specialties/self-worth"
						classN="spec-card"
						ariaLabel="Read about Self‑Esteem and Self‑Worth"
					>
						<div role="listitem" className="spec-card__inner">
							<h3 className="spec-card__title">Self‑Esteem & Self‑Worth</h3>
							<p className="spec-card__blurb">
								Reconnecting with a stable sense of worth that isn’t tied to
								performance or appearance.
							</p>
							<span className="spec-card__cta">Learn more →</span>
						</div>
					</CustomLink> */}

					{/* KAP */}

					<CustomLink
						url="/kap"
						classN="spec-card"
						ariaLabel="Read about Ketamine-Assisted Psychotherapy"
					>
						<div role="listitem" className="spec-card__inner">
							<h3 className="spec-card__title">
								Ketamine-Assisted Psychotherapy (KAP)
							</h3>
							<p className="spec-card__blurb">
								A guided process combining ketamine sessions with therapy to
								support healing, growth, and relief from emotional stuckness.
							</p>
							<span className="spec-card__cta">Learn more →</span>
						</div>
					</CustomLink>
				</div>

				<div className="home-specialties__footer">
					<Button
						url="/specialties"
						text="See all specialties"
						primary={false}
					/>
				</div>
			</div>
		</section>
	);
}

export default HomeSpecialties;
