import "./style/kap-safety-ethics.scss";

export default function SafetySection() {
	return (
		<section className="block kap-safety" id="kap-safety">
			<div className="block__content">
				{/* Intro */}
				<div className="intro">
					<h2>Safety and Ethical Considerations</h2>
					<p className="subhead">
						Your safety, dignity, and informed choice guide every stage of care.
					</p>
					<p>
						We follow clear medical and ethical standards so you know what to
						expect, how decisions are made, and how we protect your wellbeing
						throughout KAP.
					</p>
				</div>

				{/* Three-card grid */}
				<div className="kap-safety__grid" role="list">
					{/* Card 1 */}
					<article className="kap-safety__panel" role="listitem">
						<h3 className="kap-safety__heading">Medical Oversight</h3>
						<ul className="kap-safety__bullets">
							<li>
								A licensed prescriber at <strong>Journey Clinical</strong>{" "}
								reviews your health history and current medications to confirm
								that ketamine is appropriate and safe.
							</li>
							<li>
								Dose selection and any adjustments are handled by the prescriber
								at Journey Clinical.
							</li>
							<li>
								You receive clear guidance from Journey Clinical on dosing, set
								and setting, and safety planning.
							</li>
						</ul>
					</article>

					{/* Card 2 */}
					<article className="kap-safety__panel" role="listitem">
						<h3 className="kap-safety__heading">Consent and Boundaries</h3>
						<ul className="kap-safety__bullets">
							<li>
								Informed consent is ongoing and you can ask questions or pause
								care at any time.
							</li>
							<li>
								Your therapist is present throughout dosing to provide
								monitoring and support.
							</li>
							<li>
								A trusted support person is present at home and available during
								dosing.
							</li>
						</ul>
					</article>

					{/* Card 3 */}
					<article className="kap-safety__panel" role="listitem">
						<h3 className="kap-safety__heading">Professional Ethics</h3>
						<ul className="kap-safety__bullets">
							<li>
								We follow licensed professional ethics standards and state
								regulations for psychotherapy.
							</li>
							<li>
								We maintain clear therapeutic roles and boundaries, with
								confidentiality and informed consent at the core.
							</li>
							<li>
								With your permission, we coordinate with your other providers to
								support continuity of care.
							</li>
						</ul>
					</article>
				</div>

				{/* Bridge to Resources */}
				<p className="kap-safety__bridge muted">
					For deeper reading on methods, safety, and outcomes, see the resources
					below.
				</p>
			</div>
		</section>
	);
}
