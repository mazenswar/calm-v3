import Link from "next/link";
import React from "react";
import "./style/resources.scss";

function ResourcesSection() {
	return (
		<section className="block resources keta-box alt keta-links">
			<div className="block__content">
				<h2>Further Reading & Resources</h2>
				<ul>
					<li>
						<Link
							href="https://www.journeyclinical.com/patients"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							Journey Clinical - KAP for Patients
						</Link>
					</li>
					<li>
						<Link
							href="https://www.journeyclinical.com/resources"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							Journey Clinical - KAP 101 Guide
						</Link>
					</li>
					<li>
						<Link
							href="https://maps.org/research-archive/mdma/MDMA-Ketamine_Paradigms_RaquelBennett.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							Paradigms of Ketamine Treatment - Raquel Bennett, Psy.D. (MAPS)
						</Link>
					</li>
					<li>
						<Link
							href="https://pubmed.ncbi.nlm.nih.gov/30360952/"
							target="_blank"
							rel="noopener noreferrer"
							className="link"
						>
							Research Study: KAP Outcomes in Three Large Practices - Dore et
							al., 2018
						</Link>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default ResourcesSection;
