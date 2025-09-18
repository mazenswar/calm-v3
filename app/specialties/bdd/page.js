// BDDPage.js

import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import heroImg from "./foreshore.png";

export const bddMetadata = {
	title: "BDD Therapy | Body Dysmorphic Disorder Treatment | CALM Therapy",
	description:
		"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image through specialized care.",
	keywords:
		"BDD therapy, body dysmorphic disorder treatment, body image therapy, appearance concerns therapy, self-image counseling, body dysmorphia",
	openGraph: {
		title: "BDD & Body Image Therapy | CALM Therapy",
		description:
			"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image.",
		url: "https://www.calmtherapy.center/specialties/body-dysmorphic-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - BDD & Body Image Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "BDD & Body Image Therapy | CALM Therapy",
		description:
			"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image.",
		images: ["/social/ss.webp"],
	},
};

export default function BDDPage() {
	const bddData = {
		hero: {
			title: "Therapy for Body Dysmorphic Disorder (BDD)",
			description:
				"BDD often involves harsh self-criticism and distorted self-image. Therapy helps you develop a more compassionate relationship with yourself.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={heroImg} height={360} width={360} alt="shore" />;
				</div>
			),
		},

		definition: {
			title: "Understanding Body Dysmorphic Disorder",
			children: (
				<>
					<p>
						Body Dysmorphic Disorder involves persistent preoccupation with
						perceived flaws or defects in physical appearance that are not
						observable or appear minor to others. This preoccupation causes
						significant distress and impairment in daily functioning, often
						leading to repetitive behaviors like mirror checking, excessive
						grooming, or seeking reassurance about appearance.
					</p>
					<p>
						What makes BDD particularly challenging is how the distorted
						perception feels completely real and urgent. The {"flaws"} you see
						or feel in your appearance can dominate your thoughts and drive
						compulsive behaviors aimed at hiding, checking, or correcting these
						perceived imperfections. This can lead to significant avoidance of
						social situations, work, or activities that might involve being seen
						by others.
					</p>
					<p>
						BDD often involves much more than concern about appearance—it
						typically reflects deeper struggles with shame, self-worth, and
						harsh internal criticism. The critical inner narratives that fuel
						BDD usually extend beyond physical appearance to encompass
						fundamental beliefs about being flawed, unacceptable, or not good
						enough in some essential way.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What BDD Might Feel Like",
			experiences: [
				"Persistent preoccupation with perceived flaws in your appearance",
				"Shame, avoidance, or distress around being seen by others",
				"Checking behaviors like mirror use, taking photos, or examining your appearance",
				"Difficulty accepting compliments or positive feedback about your appearance",
				"Comparing yourself to others and consistently finding yourself lacking",
				"Time-consuming grooming rituals or attempts to hide perceived flaws",
				"Avoiding social situations, work, or activities due to appearance concerns",
				"Feeling like everyone notices and judges your perceived imperfections",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with BDD",
			helpItems: [
				{
					title:
						"Explore the critical inner narratives that distort self-image.",
					description:
						"We examine the harsh, critical voice that drives BDD symptoms, understanding how these internal messages developed and what they're trying to protect you from. This includes exploring the difference between self-observation and self-attack.",
				},
				{
					title: "Practice compassion and embodied presence.",
					description:
						"Rather than fighting your relationship with your body, we focus on developing a kinder, more accepting way of relating to your physical self. This includes mindfulness practices that help you inhabit your body from the inside out rather than viewing yourself primarily from an external, critical perspective.",
				},
				{
					title:
						"Rebuild a relationship with yourself based on kindness, not criticism.",
					description:
						"BDD often involves treating yourself in ways you would never treat someone you care about. We explore what it would feel like to relate to yourself with the same compassion you might offer a good friend, and practice extending that kindness to your relationship with your appearance.",
				},
				{
					title: "Challenge distorted beliefs while building self-acceptance.",
					description:
						"We gently examine the beliefs that fuel BDD while simultaneously working to develop genuine self-acceptance that doesn't depend on physical perfection. This dual approach helps reduce symptoms while building resilience.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in BDD Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique experience.",
					description:
						"We explore how BDD shows up in your life, what triggers appearance-related distress, and what beliefs about yourself and your worth drive these concerns. This assessment helps us understand the specific patterns that need attention.",
				},
				{
					title:
						"Treatment emphasizes creating safety and gently challenging distorted beliefs.",
					description:
						"You'll learn tools for managing appearance-related anxiety while also exploring the deeper beliefs and experiences that contribute to your distorted self-image. We work at a pace that feels manageable and supportive.",
				},
				{
					title: "Sessions focus on developing embodied self-acceptance.",
					description:
						"Rather than trying to convince you that your perceptions are wrong, we work on developing a more compassionate and grounded relationship with your body and appearance. This includes practices that help you connect with your body as something you inhabit rather than something you observe.",
				},
			],
		},

		// Custom section for the shame attention note
		customSections: [
			<section key="shame-attention" className="specialty-therapy block center">
				<div className="container block__content">
					<p>
						Throughout this process, we maintain careful attention to the shame
						that often accompanies BDD, ensuring that therapy itself becomes a
						space where you can practice being seen and accepted without
						judgment.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for BDD Treatment",
			reasons: [
				{
					title:
						"Focus on compassionate self-relating rather than appearance management.",
					description:
						" We don't work on changing your appearance or convincing you that your perceptions are inaccurate. Instead, we focus on developing a fundamentally different, more compassionate relationship with yourself and your body.",
				},
				{
					title: "Integration of mindfulness and embodied awareness.",
					description:
						" We incorporate practices that help you connect with your body from the inside out, developing awareness of how your body feels rather than focusing primarily on how it looks. This embodied approach creates a foundation for genuine self-acceptance.",
				},
				{
					title: "Attention to underlying shame and self-worth issues.",
					description:
						" BDD often reflects deeper struggles with worth and acceptability. We address these core issues rather than just focusing on appearance-related behaviors, creating more comprehensive and lasting healing.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for BDD, and adjust our methods as your relationship with yourself evolves.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from BDD isn't about achieving perfect body image or never having concerns about your appearance. It's about developing a fundamentally kinder way of relating to yourself that doesn't depend on physical perfection or external validation. Ready to explore how therapy might help you cultivate this compassionate relationship with yourself?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional BDD Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink url="https://iocdf.org/bdd/" newWindow={true}>
									International OCD Foundation - Body Dysmorphic Disorder
								</CustomLink>
							),
							description:
								"Comprehensive resource on BDD from the leading OCD and related disorders organization",
						},
						{
							component: (
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - Mental Health
									Information
								</CustomLink>
							),
							description:
								"Government resource with research-based information about mental health conditions",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychiatry.org/patients-families"
									newWindow={true}
								>
									American Psychiatric Association - Mental Health Conditions
								</CustomLink>
							),
							description:
								"Clinical overview of mental health conditions and treatment approaches",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Body-Image"
									newWindow={true}
								>
									Centre for Clinical Interventions - Body Image Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets for body image concerns",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/professional/problems/body-dysmorphic-disorder/"
									newWindow={true}
								>
									Psychology Tools - Body Dysmorphic Disorder Resources
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing body dysmorphic concerns, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...bddData} />;
}
