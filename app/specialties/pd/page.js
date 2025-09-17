// PanicDisorderPage.js

import React from "react";

import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import pdImg from "./pd.jpg";

export const panicDisorderMetadata = {
	title: "Panic Disorder Therapy | Panic Attack Treatment | CALM Therapy",
	description:
		"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches and nervous system regulation.",
	keywords:
		"panic disorder therapy, panic attack treatment, panic therapy, anxiety therapy, panic disorder counseling, fear of panic",
	openGraph: {
		title: "Panic Disorder & Panic Attack Therapy | CALM Therapy",
		description:
			"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches.",
		url: "https://www.calmtherapy.center/specialties/panic-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Panic Disorder & Panic Attack Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Panic Disorder & Panic Attack Therapy | CALM Therapy",
		description:
			"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches.",
		images: ["/social/ss.webp"],
	},
};

export default function PanicDisorderPage() {
	const panicDisorderData = {
		hero: {
			title: "Therapy for Panic Disorder",
			description:
				"Panic attacks can feel overwhelming and unpredictable. Therapy offers tools to change how you respond to fear and physical sensations.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={pdImg} alt="geiser" width={360} height={360} />
				</div>
			),
		},

		definition: {
			title: "Understanding Panic Disorder",
			children: (
				<>
					<p>
						Panic Disorder is characterized by recurrent, unexpected panic
						attacks followed by persistent worry about having additional attacks
						or their consequences. A panic attack involves sudden onset of
						intense fear or discomfort that reaches peak intensity within
						minutes, often accompanied by physical symptoms that can feel
						life-threatening even when they{"'"}re not.
					</p>
					<p>
						What makes panic disorder particularly distressing is how the fear
						of panic attacks can become as limiting as the attacks themselves.
						Many people begin avoiding places or situations where panic has
						occurred, leading to increasing restriction of daily activities. The
						unpredictable nature of panic attacks can create a constant sense of
						vulnerability and hypervigilance about bodily sensations.
					</p>
					<p>
						The cycle of panic often involves misinterpreting normal bodily
						sensations as dangerous, which triggers more intense physical
						responses, creating a feedback loop of escalating fear and symptoms.
						Breaking this cycle requires developing a fundamentally different
						relationship with the physiological sensations of panic.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Panic Disorder Might Feel Like",
			experiences: [
				"Sudden waves of intense fear, racing heart, or shortness of breath",
				"Fear of losing control, going crazy, or something terrible happening",
				"Avoiding places or situations where panic has happened before",
				"Constant monitoring of your body for signs of an impending attack",
				"Feeling like you can't trust your own body or physical sensations",
				"Restrictions on daily activities due to fear of panic occurring",
				"Shame or embarrassment about having panic attacks",
				"Exhaustion from being constantly on guard against panic",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Panic Disorder",
			helpItems: [
				{
					title: "Shift your relationship with panic sensations.",
					description:
						"Rather than fighting or fearing the physical symptoms of panic, we help you develop a different way of relating to these sensations. This involves learning to see them as uncomfortable but not dangerous, and practicing staying present with what arises rather than being overwhelmed by it.",
				},
				{
					title: "Develop capacity to stay present when symptoms arise.",
					description:
						"We work together to build your ability to remain grounded and connected to the present moment even when panic sensations are occurring. This includes breathing techniques, body awareness practices, and mindfulness approaches that help you ride out the wave of panic without being swept away by it.",
				},
				{
					title:
						"Foster long-term resilience through nervous system regulation.",
					description:
						"Using techniques that support nervous system regulation, we help you develop skills for managing your physiological responses to stress and fear. This creates a foundation of stability that makes you less vulnerable to panic attacks over time.",
				},
				{
					title: "Practice acceptance-based approaches to reduce reactivity.",
					description:
						"The more you fight panic sensations, the more intense they often become. We explore acceptance-based strategies that help you stop adding additional fear to already difficult sensations, which naturally reduces their intensity and duration.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Panic Disorder Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on safety and understanding your panic patterns.",
					description:
						"We explore what triggers your panic attacks, how they manifest in your body, and what meanings you've assigned to these sensations. This assessment helps us understand your unique experience and design appropriate interventions.",
				},
				{
					title:
						"Early treatment emphasizes grounding and nervous system regulation.",
					description:
						"You'll learn practical skills for staying present during panic episodes and techniques for calming your nervous system. These tools provide immediate support while building capacity for deeper work.",
				},
				{
					title:
						"As therapy progresses, you'll build skills for meeting panic with steadiness.",
					description:
						"We practice staying present with gradually increasing levels of physiological arousal, helping you develop confidence in your ability to handle panic sensations without being overwhelmed. This might include controlled exposure to panic-like sensations in a safe, supported environment.",
				},
			],
		},

		// Custom section for the process note
		customSections: [
			<section key="process-note" className="specialty-therapy block center">
				<div className="container block__content">
					<p>
						Throughout this process, we maintain careful attention to your
						window of tolerance, ensuring that all practice happens at a pace
						that feels manageable and builds confidence rather than creating
						more fear.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Panic Disorder Treatment",
			reasons: [
				{
					title:
						"Focus on changing relationship to sensations rather than eliminating them.",
					description:
						" We don't work toward preventing all panic sensations but toward helping you relate to them differently. This approach creates genuine freedom because it doesn't depend on perfect control of your physiological responses.",
				},
				{
					title:
						"Integration of acceptance and nervous system regulation techniques.",
					description:
						" We combine mindfulness-based approaches with nervous system regulation strategies, helping you develop both the skills to stay present with difficult sensations and the capacity to support your body's natural calming responses.",
				},
				{
					title: "Emphasis on building long-term resilience.",
					description:
						" Rather than just managing panic attacks, we focus on developing overall resilience and capacity for handling stress and uncertainty. This foundation helps prevent future panic episodes while improving your overall quality of life.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for panic disorder, and adjust our methods as your needs change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from panic disorder isn't about never feeling anxious or having physiological responses to stress. It's about developing the capacity to stay present with whatever arises and trusting in your ability to handle intense sensations without being overwhelmed by them. Ready to explore how therapy might help you build this capacity?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional Panic Disorder Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics/panic-disorder"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - Panic Disorder
								</CustomLink>
							),
							description:
								"Government resource with research-based information about panic disorder",
						},
						{
							component: (
								<CustomLink
									url="https://adaa.org/understanding-anxiety/panic-disorder"
									newWindow={true}
								>
									Anxiety and Depression Association of America (ADAA) - Panic
									Disorder
								</CustomLink>
							),
							description:
								"Professional organization with evidence-based panic disorder treatment information",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders"
									newWindow={true}
								>
									American Psychiatric Association - Panic Disorder
								</CustomLink>
							),
							description:
								"Clinical overview of panic disorder and treatment approaches",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Panic"
									newWindow={true}
								>
									Centre for Clinical Interventions - Panic Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets for panic",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/panic/"
									newWindow={true}
								>
									Psychology Tools - Panic Resources
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing panic attacks, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...panicDisorderData} />;
}
