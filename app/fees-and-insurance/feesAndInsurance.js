"use client";

import React from "react";
import Image from "next/image";
import CustomLink from "../Components/ui/CustomLink";
import heroImg from "./assets/waves.webp";
import "./style.scss";

/**
 * NOTE ON FOLDING:
 * To make this file easy to navigate in VS Code, the page is broken into
 * small render helpers (one per section). You can now fold each function.
 */

function HeroPricing() {
	return (
		<section className="fees__intro block">
			<div className="block__content container">
				<header className="fees-hero">
					<div className="fees-hero__text">
						<h1 className="fees-hero__title">Therapy is an Investment</h1>
						<p className="fees-hero__lead">
							We understand that therapy is a financial commitment. It can feel
							like a lot, and that feeling is valid. But therapy is more than
							just a service. It is a space to unravel, rebuild, and grow. It
							{"'s"} an investment in your clarity, your relationships, your
							sense of self, and your overall well-being. Each session is
							offered with care, presence, and deep experience, because you
							deserve support that is thoughtful, effective, and truly aligned
							with your healing.
						</p>
					</div>
					<figure className="fees-hero__media" aria-hidden="true">
						<Image
							src={heroImg.src}
							alt="waves reaching shore"
							width={400}
							height={400}
							priority
							style={{ width: "100%", height: "auto" }}
						/>
					</figure>
				</header>

				<div className="fees-cards">
					<article className="price-card">
						<h2 className="price-card__label">45 min session</h2>
						<div className="price-card__value">$250</div>
						<p className="price-card__note">
							Ongoing weekly or biweekly sessions
						</p>
					</article>

					<article className="price-card">
						<h2 className="price-card__label">75 min intake</h2>
						<div className="price-card__value">$420</div>
						<p className="price-card__note">
							One-time session to begin therapy
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

function VerifyCoverage() {
	return (
		<section className="fees__verify block" id="verify-coverage">
			<div className="block__content container">
				<h2 className="section-title">Insurance & How to Verify Coverage</h2>
				<div className="prose">
					<p>
						We are an out-of-network provider for all insurance companies, which
						means we do not accept insurance directly. However, many insurance
						plans offer excellent out-of-network reimbursement for therapy.
						After each session, we will provide a superbill (a detailed receipt)
						that you can submit to your insurance company for potential
						reimbursement.
					</p>
					<p>
						Because coverage varies widely, it{"'"}s helpful to verify your
						benefits with your insurance provider before beginning therapy.
					</p>
					<p className="lead">
						Call the member services number on your insurance card and ask
						whether your plan includes{" "}
						<b>out-of-network outpatient mental health</b> benefits. When you
						speak with them, these questions are useful:
					</p>
				</div>

				<div className="verify-questions">
					<ul className="bullets">
						<li>
							What percentage of the session fee is reimbursed for
							out-of-network therapy?
						</li>
						<li>Is there a deductible I need to meet first?</li>
						<li>How do I submit a superbill for reimbursement?</li>
					</ul>
				</div>

				<aside className="info-box" aria-labelledby="info-box-title">
					<h3 id="info-box-title" className="info-box__title">
						Info you may be asked for
					</h3>
					<dl className="info-box__list">
						<dt>Practice name</dt>
						<dd>Center for Anxiety and Life Management, PLLC (CALM Therapy)</dd>

						<dt>Provider name</dt>
						<dd>Tanya Singh, PhD (Licensed Clinical Psychologist)</dd>

						<dt>NPI</dt>
						<dd>#1093592727</dd>

						<dt>CPT codes commonly used</dt>
						<dd>
							90791 – Comprehensive Intake; <br />
							90837 – Psychotherapy, 60 min; <br />
							90834 – Psychotherapy, 45 min; <br />
							90832 – Psychotherapy, 30 min
						</dd>
					</dl>
				</aside>
			</div>
		</section>
	);
}

function WhyOutOfNetwork() {
	return (
		<section className="fees__why block" id="why-oon">
			<div className="block__content container">
				<h2 className="section-title">
					Why Choose an Out-of-Network Therapist?
				</h2>
				<p className="why-intro">
					Therapy is most effective when you work with someone who truly
					understands your needs. In-network options can be limited, and you may
					not find a therapist who specializes in your concerns. Choosing an
					out-of-network provider allows you to prioritize fit, expertise, and
					the quality of care.
				</p>

				<div className="why-grid">
					<article className="why-card">
						<h3>
							<span className="why-card__icon" aria-hidden="true">
								🩺
							</span>
							More Specialized Care
						</h3>
						<p>
							While some in-network providers treat anxiety and OCD, these
							conditions often require specialized training to be addressed
							effectively. Our practice focuses on anxiety-related disorders,
							OCD, and perfectionism, utilizing evidence-based approaches that
							require advanced expertise. Additionally, we offer
							ketamine-assisted therapy for treatment-resistant conditions, a
							service not commonly available in insurance networks.
						</p>
					</article>

					<article className="why-card">
						<h3>
							<span className="why-card__icon" aria-hidden="true">
								🧭
							</span>
							A Personalized Approach
						</h3>
						<p>
							Insurance companies often impose restrictions on session length,
							frequency, and treatment modalities. As an out-of-network
							provider, we have the flexibility to tailor therapy to what works
							best for you, rather than following insurance-mandated guidelines.
						</p>
					</article>

					<article className="why-card">
						<h3>
							<span className="why-card__icon" aria-hidden="true">
								👛
							</span>
							High Reimbursement
						</h3>
						<p>
							Many people assume out-of-network therapy is unaffordable, but
							some plans reimburse a substantial portion of session fees once a
							deductible is met. If you have a high-deductible plan, you may be
							paying out-of-pocket for therapy either way, so it{"'"}s worth
							choosing a therapist who truly fits your needs and can support
							your long-term growth.
						</p>
					</article>
				</div>
			</div>
		</section>
	);
}

function HowReimbursementWorks() {
	return (
		<section className="fees__how block" id="how-reimbursement-works">
			<div className="block__content container">
				<h2 className="section-title">How Reimbursement Works</h2>
				<ol className="steps">
					<li className="step">
						<div className="step__badge" aria-hidden={true}>
							1
						</div>
						<div className="step__body">
							<h3 className="step__title">We provide a superbill</h3>
							<p>
								After each session, we generate an itemized receipt (superbill)
								with the details your insurance company needs.
							</p>
						</div>
					</li>
					<li className="step">
						<div className="step__badge" aria-hidden={true}>
							2
						</div>
						<div className="step__body">
							<h3 className="step__title">You submit it to your insurer</h3>
							<p>
								Submit the superbill to your insurance company (by portal, mail,
								or a reimbursement app). Your insurer processes the claim and,
								if eligible, reimburses you directly.
							</p>
						</div>
					</li>
				</ol>

				<div className="fees-contact">
					<p>
						<strong>More questions?</strong> Feel free to{" "}
						<CustomLink url="mailto:info@calmtherapy.center">
							email us
						</CustomLink>
						. We{"'"}re happy to help you understand the process.
					</p>
				</div>
			</div>
		</section>
	);
}

export default function FeesAndInsurance() {
	return (
		<main id="fees-insurance" className="fees">
			<HeroPricing />
			<VerifyCoverage />
			<WhyOutOfNetwork />
			<HowReimbursementWorks />
		</main>
	);
}
