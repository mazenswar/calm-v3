import CustomLink from "../Components/ui/CustomLink";
import "./style/kap-process.scss";

export default function KapProcess() {
	return (
		<section className="block kap-process keta-box alt" id="kap-process">
			<div className="block__content">
				{/* Intro (copy unchanged) */}
				<div className="intro">
					<h2>Our KAP Process</h2>
					<p className="subhead">What to expect from start to finish</p>
					<p>
						The full KAP process typically takes place over the course of
						approximately six months, depending on your pace and schedule.
					</p>
					<p>
						If you{"'"}re considering Ketamine-Assisted Psychotherapy (KAP) with
						us, here{"'"}s how the process typically unfolds:
					</p>
				</div>

				{/* Vertical timeline (single column) */}
				<div className="kap-timeline" role="list">
					{/* 1. Foundational Therapy */}
					<div className="kap-step" id="step-foundation" role="listitem">
						<article className="kap-step__body">
							<div className="kap-step__head">
								<h3>Foundational Therapy Sessions</h3>
							</div>

							{/* Keys: direct child of body */}
							<ul
								className="kap-step__keys"
								role="list"
								aria-label="Key points"
							>
								<li>Build rapport</li>
								<li>Assess safety</li>
								<li>Set intentions</li>
							</ul>

							{/* All content lives here */}
							<div className="kap-step__content">
								<p className="kap-step__meta">
									Minimum of 6 sessions (more if needed to establish safety and
									readiness)
								</p>

								<ul className="kap-step__bullets">
									<li>
										Opportunity to strengthen the therapeutic relationship
									</li>
									<li>
										Space to build coping skills and deepen self-awareness
										before KAP
									</li>
									<li>
										Preparation for ketamine work, including:
										<ul>
											<li>Clarifying intentions, hopes, and goals</li>
											<li>
												Exploring concerns, expectations, and safety planning
											</li>
											<li>Establishing grounding and coping tools</li>
											<li>Understanding the dosing process and set/setting</li>
										</ul>
									</li>
								</ul>

								<p>
									After your third session, if KAP appears clinically
									appropriate, we{"'"}ll refer you to our medical partner,
									Journey Clinical, for a comprehensive evaluation.
								</p>
							</div>
						</article>
					</div>

					{/* 2. Medical Screening */}
					<div className="kap-step" id="step-screening" role="listitem">
						<article className="kap-step__body">
							<div className="kap-step__head">
								<h3>Medical Screening</h3>
							</div>

							<ul
								className="kap-step__keys"
								role="list"
								aria-label="Key points"
							>
								<li>Virtual prescriber review</li>
							</ul>

							<div className="kap-step__content">
								<ul className="kap-step__bullets">
									<li>
										Virtual consult with{" "}
										<CustomLink
											url="https://www.journeyclinical.com/patients"
											newWindow={true}
										>
											Journey Clinical
										</CustomLink>{" "}
										to review your medical and psychiatric history
									</li>
									<li>
										If approved, ketamine lozenges are prescribed and shipped to
										your home
									</li>
									<li>
										Ongoing contact with Journey Clinical to adjust dosing or
										care as needed
									</li>
								</ul>
							</div>
						</article>
					</div>

					{/* 3. Dosing Sessions */}
					<div className="kap-step" id="step-dosing" role="listitem">
						<article className="kap-step__body">
							<div className="kap-step__head">
								<h3>Dosing Sessions</h3>
							</div>

							<ul
								className="kap-step__keys"
								role="list"
								aria-label="Key points"
							>
								<li>2‑hour session</li>
								<li>Therapist online</li>
								<li>~8 sessions total</li>
							</ul>

							<div className="kap-step__content">
								<p className="kap-step__meta">
									Sessions are approximately 2 hours long
								</p>
								<ul className="kap-step__bullets">
									<li>
										You{"'"}ll be in a quiet, comfortable setting (with optional
										music or eye mask)
									</li>
									<li>
										Your therapist will be present throughout to provide support
										and ensure safety
									</li>
									<li>
										A trusted support person must be present in your home,
										available if needed
									</li>
									<li>
										The first two dosing sessions are exploratory to find your
										optimal dose
									</li>
									<li>
										After this, you{"'"}ll meet again with Journey Clinical to
										confirm the dosage and receive your remaining prescription
									</li>
									<li>
										Clients typically complete eight dosing sessions in total,
										scheduled over several weeks
									</li>
									<li>
										In some cases, up to two in‑home dosing sessions may be
										offered at the beginning of your KAP journey, discussed on a
										case‑by‑case basis
									</li>
								</ul>
							</div>
						</article>
					</div>

					{/* 4. Integration Sessions */}
					<div className="kap-step" id="step-integration" role="listitem">
						<article className="kap-step__body">
							<div className="kap-step__head">
								<h3>Integration Sessions</h3>
							</div>

							<ul
								className="kap-step__keys"
								role="list"
								aria-label="Key points"
							>
								<li>45‑min debrief</li>
								<li>Within 1–3 days</li>
								<li>Turn insights into action</li>
							</ul>

							<div className="kap-step__content">
								<p className="kap-step__meta">
									Integration is a vital part of the healing process. This is
									where insights become lasting change.
								</p>
								<ul className="kap-step__bullets">
									<li>
										After each dosing session, we meet for at least one
										45‑minute integration session
									</li>
									<li>
										Typically scheduled within 24 to 72 hours when
										neuroplasticity is at its peak
									</li>
									<li>Make sense of emotional, somatic, or visual material</li>
									<li>Reflect on themes or breakthroughs that arise</li>
									<li>
										Connect the experience to your ongoing healing process
									</li>
									<li>
										Use tools like mindfulness, somatic practices, or creative
										reflection to deepen integration
									</li>
									<li>
										You{"'"}ll complete eight integration sessions, one after
										each dosing session
									</li>
								</ul>
							</div>
						</article>
					</div>

					{/* 5. Follow‑Up */}
					<div className="kap-step" id="step-followup" role="listitem">
						<article className="kap-step__body">
							<div className="kap-step__head">
								<h3>Follow‑Up and Long‑Term Care</h3>
							</div>

							<ul
								className="kap-step__keys"
								role="list"
								aria-label="Key points"
							>
								<li>Booster every 6–8 wks</li>
								<li>Maintenance sessions</li>
								<li>Safety check‑ins</li>
							</ul>

							<div className="kap-step__content">
								<ul className="kap-step__bullets">
									<li>
										After completing your full KAP series, continued support is
										encouraged through therapy or booster dosing sessions every
										6 to 8 weeks, if appropriate
									</li>
									<li>
										Many clients find benefit in occasional dosing sessions for
										maintenance or deepening work
									</li>
									<li>
										Continued care with your therapist and prescriber ensures
										ongoing alignment and safety
									</li>
								</ul>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
