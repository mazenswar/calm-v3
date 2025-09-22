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
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.kap;

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
