import Link from "next/link";
import React from "react";
import "./privacy-policy.scss";

function PrivacyPolicy() {
	return (
		<main id="privacy__policy">
			<section className="pp-container block">
				<div className="block__content container">
					<h1 className="center-title">Privacy Policy</h1>
					<p>Last updated: August 20th, 2025</p>
					<p>
						{
							"Center for Anxiety and Life Management PLLC ('CALM Therapy', 'we', 'us', or 'our') respects your privacy. This Privacy Policy describes how we handle information collected through our website, "
						}
						<a
							href="https://calmtherapy.center"
							target="_blank"
							rel="noopener noreferrer"
						>
							calmtherapy.center
						</a>
						.
						{
							" We currently operate in 43 states through a combination of direct licensure and participation in PSYPACT, an interstate compact that allows licensed psychologists to practice telepsychology across state lines."
						}
					</p>

					<div className="pp-section">
						<h2>Information We Collect</h2>
						<p>
							We do not collect personal information through this website. When
							you choose to book a consultation or appointment, you are securely
							redirected to our SimplePractice client portal—a HIPAA-compliant
							platform—where you may voluntarily provide your name, contact
							information, and other relevant details to request an appointment
							or consultation.
						</p>
					</div>

					<div className="pp-section">
						<h2>Analytics</h2>
						<p>
							We use Google Analytics in a privacy-conscious way. We have
							configured our analytics setup to avoid tracking personal data and
							do not use advertising cookies or personalization features. Our
							configuration denies consent for ad_user_data, ad_personalization,
							and ad_storage by default, while allowing analytics_storage only.
							This ensures your browsing data is not used for targeted
							advertising. Google Analytics may collect basic usage data such as
							your browser type, device, pages visited, and time spent on pages.
							You can learn more about how Google handles this data{" "}
							<a
								href="https://policies.google.com/privacy"
								target="_blank"
								rel="noopener noreferrer"
							>
								here
							</a>
							.
						</p>
					</div>

					<div className="pp-section">
						<h2>Cookies</h2>
						<p>
							We do not use cookies directly. However, Google Analytics may use
							cookies to provide analytics functionality. You can manage cookie
							settings in your browser.
						</p>
					</div>

					<div className="pp-section">
						<h2>Data Sharing and Security</h2>
						<p>
							We do not sell, rent, or share your personal information with
							third parties. Initial appointment bookings occur via
							SimplePractice, a HIPAA-compliant platform. Ongoing communication
							for scheduling adjustments may also occur via email or text,
							depending on client preferences. No client data is stored directly
							on our website.
						</p>
					</div>

					<div className="pp-section">
						<h2>Children{"'"}s Privacy</h2>
						<p>
							Our services and website are not intended for individuals under
							the age of 13. We do not knowingly collect personal information
							from children.
						</p>
					</div>

					<div className="pp-section">
						<h2>Changes to This Policy</h2>
						<p>
							We may update this Privacy Policy from time to time. Any updates
							will be posted on this page with a revised “last updated” date.
						</p>
					</div>

					<div className="pp-section">
						<h2>Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please
							contact us at{" "}
							<Link className="link" href="mailto:info@calmtherapy.center">
								info@calmtherapy.center
							</Link>
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PrivacyPolicy;
