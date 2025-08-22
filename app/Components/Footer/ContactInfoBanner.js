import Image from "next/image";
import React from "react";

import CustomLink from "../ui/CustomLink";

function ContactInfoBanner() {
	return (
		<section className="block contact-info-banner">
			<div className="block__content container">
				<div className="contact-info__grid">
					<div className="contact-info__section contact-info__intro">
						<div className="contact-info__logo">
							<Image
								src="/logo-vr.webp"
								alt="CALM Therapy logo"
								width={200}
								height={60}
							/>
						</div>
						<div className="contact-info__blurb">
							<p>
								Virtual integrative therapy for thoughtful adults in{" "}
								<CustomLink url="where-we-serve">
									43 states and jurisdictions
								</CustomLink>
								. East Coast-based practice, grounded in care and clarity.
							</p>
						</div>
					</div>

					<div className="contact-info__section contact-info__contact">
						<h3>Get in Touch</h3>
						<div className="contact-info__meta">
							<p className="contact-info__phone">
								📞 <CustomLink url="tel:9145704196">(914) 570-4196</CustomLink>
							</p>
							<p className="contact-info__email">
								📧{" "}
								<CustomLink url="mailto:info@calmtherapy.center">
									info@calmtherapy.center
								</CustomLink>
							</p>
						</div>
						<p>
							If you have any questions about starting therapy or our services,
							feel free to reach out. We do our best to respond within one
							business day.
						</p>
					</div>

					<div className="contact-info__section contact-info__trust">
						<h3 className="contact-info__trust-label">
							Partners and directories
						</h3>
						<p> Listed in these trusted networks:</p>
						<div className="contact-info__badges">
							<ul>
								<li>
									<CustomLink url="https://journeyclinical.com">
										Journey Clinical
									</CustomLink>
								</li>
								<li>
									<CustomLink url="https://asianmhc.org">
										Asian Mental Health Collective
									</CustomLink>
								</li>
								<li>
									<CustomLink url="https://zencare.co">Zencare</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactInfoBanner;
