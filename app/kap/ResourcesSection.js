import React from "react";
import CustomLink from "../Components/ui/CustomLink";
import "./style/resources.scss";

export default function ResourcesSection() {
	return (
		<section className="block resources keta-box alt" id="kap__resources">
			<div className="block__content">
				<div className="resources__intro">
					<h2>Further Reading & Resources</h2>
					<p className="muted">
						If you want to learn more about KAP methods, safety, and outcomes,
						these resources are a good place to start.
					</p>
				</div>

				<ul className="resources__grid" role="list">
					<li className="resource-card" role="listitem">
						<h3 className="resource-card__title">
							<CustomLink
								url="https://www.journeyclinical.com/patients"
								newWindow={true}
							>
								Journey Clinical: KAP for Patients
							</CustomLink>
						</h3>
						<p className="resource-card__desc">
							Overview of the medical evaluation and prescribing model for
							ketamine lozenges, written for clients.
						</p>
						<span className="resource-card__meta">journeyclinical.com</span>
					</li>

					<li className="resource-card" role="listitem">
						<h3 className="resource-card__title">
							<CustomLink
								url="https://www.journeyclinical.com/resources"
								newWindow={true}
							>
								Journey Clinical: KAP Guide
							</CustomLink>
						</h3>
						<p className="resource-card__desc">
							Plain‑language basics of preparation, dosing, and integration
							within a collaborative care model.
						</p>
						<span className="resource-card__meta">journeyclinical.com</span>
					</li>

					<li className="resource-card" role="listitem">
						<h3 className="resource-card__title">
							<CustomLink
								url="https://maps.org/research-archive/mdma/MDMA-Ketamine_Paradigms_RaquelBennett.pdf"
								newWindow={true}
							>
								Paradigms of Ketamine Treatment (Raquel Bennett; MAPS)
							</CustomLink>
						</h3>
						<p className="resource-card__desc">
							A reference overview of clinical approaches to ketamine treatment
							and how they differ in practice.
						</p>
						<span className="resource-card__meta">maps.org</span>
					</li>

					<li className="resource-card" role="listitem">
						<h3 className="resource-card__title">
							<CustomLink
								url="https://pubmed.ncbi.nlm.nih.gov/30360952/"
								newWindow={true}
							>
								KAP outcomes in three large practices (Dore et&nbsp;al., 2018)
							</CustomLink>
						</h3>
						<p className="resource-card__desc">
							Peer‑reviewed outcomes from psychotherapy with ketamine across
							community settings.
						</p>
						<span className="resource-card__meta">pubmed.ncbi.nlm.nih.gov</span>
					</li>
				</ul>
			</div>
		</section>
	);
}
