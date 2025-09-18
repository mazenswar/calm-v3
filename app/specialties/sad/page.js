// SocialAnxietyPage.js

import React from "react";

import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import heroImg from "./foreshore.png";
import Image from "next/image";

export const socialAnxietyMetadata = {
	title: "Social Anxiety Therapy | CALM Therapy",
	description:
		"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
	keywords:
		"social anxiety therapy, SAD therapy, fear of judgment therapy, social anxiety counseling, social confidence",
	openGraph: {
		title: "Social Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
		url: "https://www.calmtherapy.center/specialties/social-anxiety-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Social Anxiety Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Social Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
		images: ["/social/ss.webp"],
	},
};

export default function SocialAnxietyPage() {
	const socialAnxietyData = {
		hero: {
			title: "Therapy for Social Anxiety Disorder (SAD)",
			description:
				"Social anxiety often hides a deeper fear of being judged or rejected. Therapy creates space to reclaim confidence and self-worth.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={heroImg} height={360} width={360} alt="shore" />;
				</div>
			),
		},

		definition: {
			title: "Understanding Social Anxiety Disorder",
			children: (
				<>
					<p>
						Social Anxiety Disorder involves intense fear or anxiety in social
						situations where you might be scrutinized, judged, or evaluated by
						others. This goes beyond typical shyness or nervousness to create
						significant distress and interference with daily activities,
						relationships, and life goals.
					</p>
					<p>
						What makes social anxiety particularly challenging is how it can
						become self-perpetuating. The fear of judgment leads to avoidance or
						safety behaviors, which then reinforces the belief that social
						situations are dangerous. Over time, this can create increasing
						isolation and a shrinking world of activities and relationships.
					</p>
					<p>
						Social anxiety often masks deeper fears about being truly seen,
						accepted, or valued. Many people with social anxiety have developed
						elaborate strategies to hide perceived flaws or inadequacies, yet
						these protective behaviors often prevent the genuine connections
						they long for. The fear isn{"'"}t usually about the social situation
						itself but about what others might discover or think about who you
						really are.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Social Anxiety Might Feel Like",
			experiences: [
				"Fear of being judged, criticized, or embarrassed in social situations",
				"Avoidance of gatherings, meetings, or situations where you might be noticed",
				"Self-consciousness that feels overwhelming and all-consuming",
				"Physical symptoms like blushing, sweating, or trembling around others",
				"Rehearsing conversations or worrying extensively before social events",
				"Feeling like everyone is watching and evaluating your every move",
				"Difficulty speaking up or expressing your thoughts and opinions",
				"Exhaustion from constantly monitoring how you come across to others",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Social Anxiety",
			helpItems: [
				{
					title: "Practice gradual exposure in supportive ways.",
					description:
						"We help you slowly and safely expand your comfort zone in social situations, starting with less threatening scenarios and building confidence before moving to more challenging interactions. This exposure happens at your pace with careful attention to your readiness and capacity.",
				},
				{
					title: "Explore the beliefs that fuel shame and fear of rejection.",
					description:
						"Social anxiety often stems from core beliefs about being flawed, inadequate, or fundamentally unacceptable. We examine these beliefs with curiosity and compassion, understanding how they developed while questioning whether they accurately reflect your true worth and value.",
				},
				{
					title: "Rebuild confidence and trust in your ability to connect.",
					description:
						"Many people with social anxiety have lost touch with their natural capacity for connection and authenticity. We work together to help you rediscover your voice, your opinions, and your ability to relate genuinely with others.",
				},
				{
					title:
						"Reclaim your sense of self-worth independent of others' approval.",
					description:
						"Social anxiety often involves making your worth dependent on others' reactions or approval. We explore what it would feel like to know your value independent of social performance, helping you develop internal sources of confidence and self-acceptance.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Social Anxiety Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your specific social fears.",
					description:
						"We explore which social situations trigger anxiety, what you imagine others are thinking or noticing, and what beliefs about yourself drive these concerns. This assessment helps us design exposures and interventions that address your particular presentation.",
				},
				{
					title:
						"Treatment combines exposure practice with insight-oriented exploration.",
					description:
						"You'll gradually practice engaging in social situations while also exploring the deeper fears and beliefs that fuel your anxiety. This dual approach addresses both the behavioral patterns and the underlying wounds that maintain social anxiety.",
				},
				{
					title:
						"Together, we focus on safe practice and reframing self-critical beliefs.",
					description:
						"As you build confidence through supported exposure, we simultaneously work on developing a more compassionate and accurate view of yourself. This includes challenging harsh self-criticism and developing skills for self-acceptance.",
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
						a safe space for practicing being seen and accepted, which can be
						profoundly healing for social anxiety.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Social Anxiety Treatment",
			reasons: [
				{
					title:
						"Integration of exposure-based strategies with insight-oriented therapy.",
					description:
						" We combine gradual, supported exposure to social situations with deeper exploration of the beliefs and experiences that created your social fears. This comprehensive approach creates lasting change rather than just symptom management.",
				},
				{
					title: "Focus on reclaiming your voice and authentic self.",
					description:
						" Rather than just helping you manage anxiety in social situations, we work toward helping you rediscover and express your authentic self. This includes developing confidence in your opinions, needs, and way of being in the world.",
				},
				{
					title: "Emphasis on self-worth independent of social performance.",
					description:
						" We don't just work on social skills but on developing genuine self-acceptance that doesn't depend on others' reactions. This foundation creates resilience that extends far beyond specific social situations.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, design exposures that feel meaningful to your goals, and adjust our methods as your confidence grows.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from social anxiety isn't about becoming perfectly comfortable in all social situations or never feeling nervous around others. It's about reclaiming your voice, trusting in your worth, and developing the capacity to be authentically yourself even when you can't control others' reactions. Ready to explore how therapy might help you reconnect with your authentic self?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		// resources: {
		// 	title: "Additional Social Anxiety Resources",
		// 	resourceSections: [
		// 		{
		// 			title: "Organizations & Information:",
		// 			links: [
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.nimh.nih.gov/health/topics/social-anxiety-disorder"
		// 							newWindow={true}
		// 						>
		// 							National Institute of Mental Health (NIMH) - Social Anxiety
		// 							Disorder
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Government resource with research-based information about social anxiety disorder",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://adaa.org/understanding-anxiety/social-anxiety-disorder"
		// 							newWindow={true}
		// 						>
		// 							Anxiety and Depression Association of America (ADAA) - Social
		// 							Anxiety
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Professional organization with evidence-based social anxiety treatment information",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders"
		// 							newWindow={true}
		// 						>
		// 							American Psychiatric Association - Social Anxiety Disorder
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Clinical overview of social anxiety disorder and treatment approaches",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "Online Resources:",
		// 			links: [
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Social-Anxiety"
		// 							newWindow={true}
		// 						>
		// 							Centre for Clinical Interventions - Social Anxiety Resources
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Government-developed self-help resources and worksheets for social anxiety",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.psychologytools.com/self-help/social-anxiety/"
		// 							newWindow={true}
		// 						>
		// 							Psychology Tools - Social Anxiety Resources
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Professional treatment resources and information handouts",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	disclaimer:
		// 		"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing social anxiety, consulting with a qualified mental health professional is recommended.",
		// },
	};

	return <Template {...socialAnxietyData} />;
}
