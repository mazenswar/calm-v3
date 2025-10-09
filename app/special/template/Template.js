import { CommonExperiencesSection } from "./CommonExperiencesSection";
import { CTASection } from "./CTASection";
import { DefinitionSection } from "./DefinitionSection";
import { HeroSection } from "./HeroSection";
import { HowTherapyHelpsSection } from "./HowTherapyHelpsSection";
import { ResourcesSection } from "./ResourcesSection";
import { WhatToExpectSection } from "./WhatToExpectSection";
import { WhyCalmSection } from "./WhyCalmSection";
import "./template.scss";

export default function Template({
	hero,
	definition,
	commonExperiences,
	howTherapyHelps,
	whatToExpect,
	whyCalm,
	cta,
	resources,
	customSections = [],
}) {
	return (
		<main className="specialty__therapy">
			{hero && <HeroSection {...hero} />}

			{definition && <DefinitionSection {...definition} />}

			{commonExperiences && <CommonExperiencesSection {...commonExperiences} />}

			{howTherapyHelps && <HowTherapyHelpsSection {...howTherapyHelps} />}

			{whatToExpect && <WhatToExpectSection {...whatToExpect} />}

			{/* Insert custom sections at specified positions */}
			{customSections.map((section, index) => section)}

			{whyCalm && <WhyCalmSection {...whyCalm} />}

			{cta && <CTASection {...cta} />}

			{resources && <ResourcesSection {...resources} />}
		</main>
	);
}
