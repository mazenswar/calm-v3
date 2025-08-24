import "./style/kap-investment.scss";
import CustomLink from "../Components/ui/CustomLink";

export function KapInvestment() {
	return (
		<section className="block keta-box alt kap-investment kap-investment--v3">
			<div className="block__content">
				{/* Intro */}
				<div className="intro">
					<h2>Investment</h2>
					<p>
						Ketamine-Assisted Psychotherapy involves both medical and
						therapeutic services. Below is a breakdown to help you understand
						the financial commitment and plan ahead.
					</p>
				</div>

				{/* Costs grid: stacks on mobile, 2 cols at md+ */}
				<div className="costs-grid">
					{/* Therapy FIRST (your services) */}
					<div className="therapy-costs">
						<h3>Therapy Costs (CALM Therapy)</h3>
						<p>
							All therapy sessions are billed directly through our practice.
						</p>

						<ul className="price-cards" role="list">
							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Foundational therapy sessions (6 minimum)
									</span>

									<span className="price-card__value">
										$250<span aria-hidden="true">/session</span>
									</span>
								</div>
							</li>

							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Dosing sessions (8 total)
									</span>
									<span className="price-card__value">see below</span>
								</div>

								<ul className="price-card__sublist">
									<li>
										<span className="price-card__label">First hour</span>
										<span className="price-card__value">$330</span>
									</li>
									<li>
										<span className="price-card__label">
											Additional time<sup>*</sup>
										</span>
										<span className="price-card__value">
											$165 <span className="muted">flat</span>
										</span>
									</li>
								</ul>
							</li>

							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Integration sessions (8 total)
									</span>
									<span className="price-card__value">
										$250<span aria-hidden="true">/session</span>
									</span>
								</div>
							</li>
						</ul>

						<p className="muted">
							<sup>*</sup> Most dosing sessions last{" "}
							<strong>90–120 minutes</strong>. In our experience, insurers
							typically reimburse the <em>first hour</em> (CPT 90837). Any time
							beyond that is usually out‑of‑pocket, so we cap it at a flat{" "}
							<strong>$165</strong> instead of a second full‑hour charge.
						</p>
					</div>

					{/* Medical SECOND (Journey Clinical) */}
					<div className="medical-costs">
						<h3>
							Medical Costs (via{" "}
							<CustomLink
								url="https://www.journeyclinical.com/patients"
								newWindow={true}
							>
								Journey Clinical
							</CustomLink>
							)
						</h3>
						<p>
							Journey Clinical is a separate medical provider that handles all
							evaluations and prescriptions related to ketamine.
						</p>

						<ul className="price-cards" role="list">
							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Initial medical consultation
									</span>
									<span className="price-card__value">$250</span>
								</div>
							</li>

							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Ketamine lozenges (starter dose for 2 sessions)
									</span>
									<span className="price-card__value">$97</span>
								</div>
							</li>

							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Follow‑up medical evaluations
									</span>
									<span className="price-card__value">$150</span>
								</div>
								<p className="price-card__note">
									Required at least once per quarter
								</p>
							</li>

							<li className="price-card">
								<div className="price-card__line">
									<span className="price-card__label">
										Prescription refills (up to 6 doses)
									</span>
									<span className="price-card__value">$163</span>
								</div>
							</li>
						</ul>

						<p className="muted">
							Some of Journey Clinical{"'"}s services may be covered by
							insurance depending on your state and provider.
						</p>
					</div>
				</div>

				{/* Summary */}
				<div className="investment-summary">
					<h3>Payment</h3>

					<p className="investment-note">
						We recognize this is a significant financial investment. That’s why
						you pay only after each session and receive documentation for any
						reimbursable visits. A structured payment‑plan option is in the
						works to make care even more accessible.
					</p>

					<ul className="summary-cards" role="list">
						<li className="summary-card">Pay‑as‑you‑go</li>
						<li className="summary-card">
							total ~ <strong>$7,500</strong>
							<span className="muted">(spread over ~6 months)</span>
						</li>
						<li className="summary-card">
							Insurance‑ready superbills
							<span className="muted">OON reimbursement up to 70%</span>
						</li>
					</ul>

					<p className="muted">
						Some sessions may be reimbursable through out‑of‑network benefits;
						we provide superbills to support that process.
					</p>

					<CustomLink url="/fees-and-insurance#verify-benefits">
						See our coverage guide →
					</CustomLink>
				</div>
			</div>
		</section>
	);
}
