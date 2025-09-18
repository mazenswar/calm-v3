// ComplexTraumaPage.js

import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
// import "./specialty_page.scss";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import ctImg from "./ct.jpg";

export const complexTraumaMetadata = {
	title: "Complex Trauma Therapy | C-PTSD Treatment | CALM Therapy",
	description:
		"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care. Telehealth available nationwide.",
	keywords:
		"complex trauma therapy, C-PTSD treatment, complex PTSD therapy, trauma counseling, childhood trauma therapy, developmental trauma",
	openGraph: {
		title: "Complex Trauma & C-PTSD Therapy | CALM Therapy",
		description:
			"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care.",
		url: "https://www.calmtherapy.center/specialties/complex-trauma",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Complex Trauma & C-PTSD Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Complex Trauma & C-PTSD Therapy | CALM Therapy",
		description:
			"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care.",
		images: ["/social/ss.webp"],
	},
};

export default function ComplexTraumaPage() {
	const complexTraumaData = {
		hero: {
			title: "Therapy for Complex Trauma",
			description:
				"Complex trauma can make the past feel alive in the present. Therapy creates conditions for safety, clarity, and self-compassion.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={ctImg} alt="flower" width={360} height={360} />
				</div>
			),
		},

		definition: {
			title: "Understanding Complex Trauma",
			children: (
				<>
					<p>
						Complex trauma, also known as Complex Post-Traumatic Stress Disorder
						(C-PTSD), develops from prolonged, repeated exposure to traumatic
						events, often during childhood or in relationships where escape
						feels impossible. Unlike single-incident trauma, complex trauma
						involves ongoing situations that create deep disruptions to one{"'"}
						s sense of safety, identity, and ability to trust.
					</p>
					<p>
						This form of trauma often stems from chronic abuse, neglect, or
						other adverse experiences that occurred during critical
						developmental periods. The impact extends beyond specific memories
						to affect how you relate to yourself and others, your capacity to
						regulate emotions, and your fundamental sense of worth and safety in
						the world.
					</p>
					<p>
						What makes complex trauma particularly challenging is how it can
						remain largely invisible while profoundly shaping daily experience.
						The past doesn{"'"}t feel like memory but like present reality,
						influencing relationships, self-perception, and the ability to feel
						grounded in your own life.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Complex Trauma Might Feel Like",
			experiences: [
				"Memories or feelings that surface as if they are happening now",
				"Patterns of fear, shame, or worthlessness that feel deeply entrenched",
				"Difficulty trusting yourself or others, even when you want to",
				"Emotional overwhelm that feels impossible to contain or understand",
				"Feeling disconnected from your body or experiencing it as unsafe",
				"Relationships that feel either too intense or impossibly distant",
				"A persistent sense that something is fundamentally wrong with you",
				"Hypervigilance or feeling constantly on guard, even in safe situations",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Complex Trauma",
			helpItems: [
				{
					title: "Develop grounding skills to create safety in the moment.",
					description:
						"Before exploring painful experiences, we establish tools that help you feel anchored in the present. These might include breathing techniques, body awareness practices, or ways to connect with your environment that signal safety to your nervous system.",
				},
				{
					title: "Explore the roots of trauma patterns with care.",
					description:
						"Once you have reliable ways to self-regulate, we can begin to understand how past experiences shaped current patterns. This exploration happens slowly and always within your window of tolerance, ensuring you never feel overwhelmed or retraumatized.",
				},
				{
					title:
						"Rebuild trust in yourself while reshaping entrenched beliefs.",
					description:
						"Complex trauma often leaves people feeling fundamentally flawed or dangerous. We work together to challenge these core beliefs through both insight and embodied experience, helping you develop a more compassionate and accurate sense of yourself.",
				},
				{
					title: "Integrate fragmented aspects of experience.",
					description:
						"Trauma can create internal splits or disconnections. Using approaches like Internal Family Systems (IFS), we help different parts of yourself communicate and work together rather than against each other.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Complex Trauma Therapy",
			steps: [
				{
					title: "Initial sessions focus on safety and stabilization.",
					description:
						"We begin by understanding your unique trauma history and developing resources for emotional regulation. This foundation phase ensures you have solid ground before exploring more vulnerable material.",
				},
				{
					title: "Treatment emphasizes building capacity gradually.",
					description:
						"Rather than rushing toward painful memories, we work systematically to expand your ability to stay present with difficult experiences. Each session builds on previous ones, always respecting your pace and readiness.",
				},
				{
					title: "Integration happens alongside processing.",
					description:
						"As we explore past experiences, we continuously weave new insights into your current life. This helps ensure that healing translates into real changes in how you relate to yourself and others day to day.",
				},
			],
		},

		// Custom section for the therapeutic relationship explanation
		customSections: [
			<section
				key="therapeutic-relationship"
				className="specialty-therapy block center"
			>
				<div className="container block__content">
					<p>
						Throughout this process, the therapeutic relationship itself becomes
						a space for healing. Many people with complex trauma haven{"'"}t
						experienced consistent, attuned relationships. Our work together
						offers practice in being known and accepted, which can be profoundly
						reparative.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Complex Trauma Treatment",
			reasons: [
				{
					title: "Trauma-informed and body-aware approach.",
					description:
						" We understand that trauma lives in the body as much as the mind. Our work incorporates somatic awareness, nervous system regulation, and mindfulness practices that help you develop a safer relationship with your physical experience.",
				},
				{
					title: "Integration of multiple therapeutic modalities.",
					description:
						" We draw from approaches like Internal Family Systems (IFS), somatic therapy, and mindfulness-based interventions. This allows us to work with different aspects of trauma's impact while staying responsive to what feels most helpful for you.",
				},
				{
					title: "Emphasis on building internal resources.",
					description:
						" Rather than focusing primarily on what went wrong, we emphasize developing what's needed for healing. This includes self-compassion practices, boundary skills, and ways of relating to yourself that counter trauma's messages.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for complex trauma, and adjust our methods as your needs change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from complex trauma is not about erasing the past, but about creating conditions for safety, clarity, and self-compassion in the present. This work takes time and requires a therapeutic relationship built on trust and understanding. Ready to explore how therapy might support your healing?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		// resources: {
		// 	title: "Additional Complex Trauma Resources",
		// 	resourceSections: [
		// 		{
		// 			title: "Organizations & Information:",
		// 			links: [
		// 				{
		// 					component: (
		// 						<CustomLink url="https://istss.org/" newWindow={true}>
		// 							International Society for Traumatic Stress Studies (ISTSS)
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Professional organization with evidence-based trauma treatment information",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.samhsa.gov/trauma-informed-care"
		// 							newWindow={true}
		// 						>
		// 							SAMHSA Trauma-Informed Care Resources
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Government resources on trauma-informed approaches to healing",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	disclaimer:
		// 		"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing trauma symptoms, consulting with a qualified mental health professional is recommended.",
		// },
	};

	return <Template {...complexTraumaData} />;
}

/////////////////////////////////////////

// import CustomLink from "@/app/Components/ui/CustomLink";
// import React from "react";
// import CTHero from "./CTHero";
// import WhatIsCT from "./WhatIsCT";
// import CommonExperiences from "./CommonExperiences";
// import HowTherapyHelps from "./HowTherapyHelps";
// import WhatToExpect from "./WhatToExpect";
// import WhyCalm from "./WhyCalm";

// import CTResources from "./CTResources";
// import CTCTA from "./CTCTA";

// function ComplexTrauma() {
// 	return (
// 		<main>
// 			<CTHero />
// 			<WhatIsCT />
// 			<CommonExperiences />
// 			<HowTherapyHelps />
// 			<WhatToExpect />
// 			<WhyCalm />
// 			<CTCTA />
// 			<CTResources />
// 		</main>
// 	);
// }

// export default ComplexTrauma;
