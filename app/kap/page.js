import React from "react";
import PageToc from "@/app/Components/ui/PageToc/Component";

import KapProcess from "./KapProcess";
import KapIntro from "./KapIntro";
import KapEligibility from "./KapEligibility";
import { KapInvestment } from "./KapInvestment";
import SafetySection from "./SafetySection";
import ResourcesSection from "./ResourcesSection";
import "./style/kap.scss";
import EffectsOfKetamine from "./EffectsOfKetamine";
import BackToTop from "../Components/ui/BackToTop/Component";

export const metadata = {
	title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
	description:
		"Explore virtual ketamine-assisted psychotherapy (KAP) at CALM Therapy, a trauma-informed, spiritually grounded path to healing anxiety, OCD, and emotional stuckness. Available to adults in 43 PSYPACT-participating states and licensed in NY, NJ, and PA.",
	openGraph: {
		title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
		description:
			"Explore virtual KAP at CALM Therapy: evidence-based and spiritually grounded care for anxiety, OCD, and emotional stuckness. Available in 43 PSYPACT states and licensed in NY, NJ, PA.",
		url: "https://calmtherapy.center/ketamine-assisted-psychotherapy",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy social preview image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
		description:
			"CALM Therapy offers virtual, trauma-informed KAP to help adults heal from anxiety, OCD, and emotional stuckness. Now available in 43 states.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/ketamine-assisted-psychotherapy",
	},
};

function Keta() {
	return (
		<main id="keta">
			<div className="toc__container">
				<PageToc
					title="On this page"
					items={[
						{ id: "kap__intro", title: "Intro" },
						{ id: "kap__eligibility", title: "Is KAP Right for You?" },
						{ id: "kap__effects", title: "Effects of Ketamine" },
						{ id: "kap__process", title: "Our KAP Process" },
						{ id: "kap__investment", title: "Investment" },
						{ id: "kap__safety", title: "Safety & Ethical Considerations" },
						{ id: "kap__resources", title: "Further Reading & Resources" },
					]}
					className="keta__toc"
					id="keta__toc"
				/>
			</div>
			<div className="kap__content">
				<KapIntro />

				<KapEligibility />
				<EffectsOfKetamine />
				<KapProcess />

				<KapInvestment />

				<SafetySection />
				<ResourcesSection />
			</div>
			<BackToTop targetId="keta__toc" />
		</main>
	);
}

export default Keta;
