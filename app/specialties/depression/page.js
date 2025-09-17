// DepressionPage.js

import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import depImg from "./depression.png";

export const depressionMetadata = {
	title: "Depression Therapy | CALM Therapy",
	description:
		"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches that honor your whole experience.",
	keywords:
		"depression therapy, major depression treatment, depression counseling, therapy for depression, depressive disorder treatment, mood therapy",
	openGraph: {
		title: "Depression Therapy | CALM Therapy",
		description:
			"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches.",
		url: "https://www.calmtherapy.center/specialties/depression",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Depression Therapy",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Depression Therapy | CALM Therapy",
		description:
			"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches.",
		images: ["/social/ss.webp"],
	},
};

export default function DepressionPage() {
	const depressionData = {
		hero: {
			title: "Therapy for Depression",
			description:
				"Depression can feel like disconnection from body, joy, and meaning. Therapy supports reconnection with yourself and your life.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={depImg} alt="" width={360} height={360} />
				</div>
			),
		},

		definition: {
			title: "Understanding Depression",
			children: (
				<>
					<p>
						Depression is more than sadness or feeling down—it{"'"}s a pervasive
						sense of disconnection that can affect your energy, motivation,
						relationships, and sense of meaning. Depression often manifests as a
						profound disconnection from your body, emotions, and the activities
						or relationships that once brought satisfaction or joy.
					</p>
					<p>
						What makes depression particularly challenging is how it can feel
						like a heavy fog that settles over everything, making even simple
						tasks feel overwhelming or pointless. This isn{"'"}t about lacking
						willpower or motivation—depression affects your brain{"'"}s ability
						to experience pleasure, connection, and hope in ways that can feel
						completely outside your control.
					</p>
					<p>
						Depression often has something important to communicate. Rather than
						viewing depression solely as a problem to eliminate, our approach
						considers what your depression might be telling you about unmet
						needs, unexpressed emotions, or life circumstances that need
						attention. This perspective opens possibilities for healing that go
						beyond symptom management to include genuine reconnection with
						yourself and your life.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Depression Might Feel Like",
			experiences: [
				"Persistent sadness, emptiness, or emotional numbness",
				"Loss of interest or pleasure in activities you once enjoyed",
				"Feeling cut off from energy, joy, or sense of meaning",
				"Physical heaviness, fatigue, or disconnection from your body",
				"Difficulty concentrating or making decisions",
				"Sleep disturbances, either too much or too little",
				"Feelings of hopelessness about the future or worthlessness about yourself",
				"Isolation or withdrawal from relationships and activities",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Depression",
			helpItems: [
				{
					title: "Support emotional processing in safe ways.",
					description:
						"Depression often involves emotions that have been suppressed, avoided, or overwhelmed your capacity to process them. We create space for you to feel and explore difficult emotions at a pace that feels manageable, helping you reconnect with your full emotional range.",
				},
				{
					title: "Explore the deeper story your depression may be telling.",
					description:
						"Rather than viewing depression only as a problem, we explore what it might be communicating about your life, relationships, or unmet needs. This includes examining whether depression is serving a protective function or highlighting areas that need attention or change.",
				},
				{
					title:
						"Practice behavioral activation and mindfulness for daily steadiness.",
					description:
						"We help you gradually re-engage with activities and relationships that support wellbeing, while developing mindfulness practices that help you stay connected to present-moment experience. This creates momentum and helps counter the isolation that depression often creates.",
				},
				{
					title: "Reconnect with your body and embodied experience.",
					description:
						"Depression often involves disconnection from physical sensations and needs. We incorporate body awareness practices that help you reconnect with your physical self as a source of information, grounding, and vitality.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Depression Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique experience of depression.",
					description:
						"We explore how depression shows up in your life, what triggers low periods, and what factors support your wellbeing. This assessment helps us understand the specific ways depression affects you and design appropriate interventions.",
				},
				{
					title: "Early treatment emphasizes safety and stabilization.",
					description:
						"We work together to establish basic self-care practices and coping strategies that provide stability while you're navigating depression. This foundation supports deeper exploration without overwhelming your capacity.",
				},
				{
					title:
						"Sessions focus on gentle reconnection with your body, feelings, and sense of meaning.",
					description:
						"As you develop more capacity, we explore the emotions, experiences, or life circumstances that may be connected to your depression. We also practice gradually re-engaging with activities and relationships that support your vitality and sense of purpose.",
				},
			],
		},

		// Custom section for the energy/capacity attention note
		customSections: [
			<section
				key="capacity-attention"
				className="specialty-therapy block center"
			>
				<div className="container block__content">
					<p>
						Throughout this process, we maintain careful attention to your
						energy levels and capacity, ensuring that therapy supports rather
						than depletes your resources.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Depression Treatment",
			reasons: [
				{
					title: "Focus on reconnection rather than just symptom reduction.",
					description:
						" While we work to alleviate depressive symptoms, our primary focus is helping you reconnect with your body, emotions, and sense of meaning. This approach creates more comprehensive and lasting healing.",
				},
				{
					title:
						"Integration of emotional processing, mindfulness, and behavioral activation.",
					description:
						" We combine multiple approaches to address depression from different angles—supporting emotional healing, developing present-moment awareness, and gradually increasing engagement with meaningful activities.",
				},
				{
					title: "Attention to what depression might be communicating.",
					description:
						" We explore depression not just as pathology but as potentially meaningful communication about your life circumstances, relationships, or needs. This perspective can open new possibilities for healing and growth.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for your specific presentation of depression, and adjust our methods as your capacity and needs change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from depression isn't about returning to exactly how things were before or maintaining constant happiness. It's about developing a more connected, meaningful relationship with yourself and your life, even when facing difficult circumstances or emotions. Ready to explore how therapy might support your reconnection with yourself?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional Depression Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics/depression"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - Depression
								</CustomLink>
							),
							description:
								"Government resource with research-based information about depression",
						},
						{
							component: (
								<CustomLink
									url="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Depression"
									newWindow={true}
								>
									National Alliance on Mental Illness (NAMI) - Depression
								</CustomLink>
							),
							description:
								"Comprehensive information and support resources for depression",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychiatry.org/patients-families/depression/what-is-depression"
									newWindow={true}
								>
									American Psychiatric Association - Depression
								</CustomLink>
							),
							description:
								"Clinical overview of depression and treatment approaches",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Depression"
									newWindow={true}
								>
									Centre for Clinical Interventions - Depression Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets for depression",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/depression/"
									newWindow={true}
								>
									Psychology Tools - Depression Resources
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing depression, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...depressionData} />;
}
