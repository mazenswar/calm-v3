"use client";

import React from "react";
import CustomLink from "@/app/Components/ui/CustomLink";
import Image from "next/image";
import diversity from "./assets/diversity.webp";
import "./style.scss";

function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer" role="contentinfo">
			{/* Content band: Inclusion → SEO line → Utilities */}
			<section className="block footer-content" aria-label="Footer information">
				<div className="block__content container">
					{/* Inclusion (flex, image on left, text on right) */}
					<div className="footer-inclusion" aria-label="Inclusion statement">
						<div className="footer-inclusion__media">
							<Image
								src={diversity.src}
								alt="Inclusion illustration"
								width={100}
								height={100}
								className="footer-inclusion__img"
								priority={false}
							/>
						</div>
						<p className="footer-inclusion__text">
							Committed to inclusion and respect for all people across genders,
							races, ethnicities, and identities.
						</p>
					</div>

					{/* SEO line (moved above utilities) */}
					<p className="footer-seo-line">
						Virtual integrative therapy for thoughtful adults in{" "}
						<CustomLink
							url="/where-we-serve"
							classN="footer-link"
							ariaLabel="Where we serve"
						>
							43 U.S. states and jurisdictions
						</CustomLink>
						. East Coast based. Grounded in care and clarity.
					</p>

					{/* Utilities: partners (left) + contact/policy (right, stacked) */}
					<div className="footer-utilities">
						<div
							className="footer-utilities__col footer-utilities__partners"
							aria-label="Trusted partners and directories"
						>
							<div className="footer-utilities__label">
								Trusted partners & directories
							</div>
							<ul className="footer-partners">
								<li>
									<CustomLink
										url="https://journeyclinical.com"
										ariaLabel="Journey Clinical website"
										classN="footer-link"
									>
										Journey Clinical
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="https://asianmhc.org"
										ariaLabel="Asian Mental Health Collective website"
										classN="footer-link"
									>
										Asian Mental Health Collective
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="https://zencare.co"
										ariaLabel="Zencare website"
										classN="footer-link"
									>
										Zencare
									</CustomLink>
								</li>
							</ul>
						</div>

						<div
							className="footer-utilities__col footer-utilities__links"
							aria-label="Contact and policies"
						>
							<ul className="footer-links">
								<li>
									<CustomLink
										url="/privacy-policy"
										classN="footer-link"
										ariaLabel="Privacy policy"
									>
										Privacy Policy
									</CustomLink>
								</li>
								<li>
									<CustomLink
										url="mailto:info@calmtherapy.center"
										classN="footer-link"
										ariaLabel="Email CALM Therapy"
									>
										info@calmtherapy.center
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Bottom bar: copyright + site credit only */}
			<div className="footer-bottombar" aria-label="Copyright and site credit">
				<div className="container">
					<p className="footer-copy">
						© {year} CALM Therapy. All rights reserved.{" "}
						<CustomLink
							url="https://mazenswar.dev"
							ariaLabel="Site credit"
							classN="footer-link"
							newWindow={true}
						>
							Site Credit
						</CustomLink>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
