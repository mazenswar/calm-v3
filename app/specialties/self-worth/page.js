// SelfEsteemPage.js
"use client";
import React from "react";

import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";

export default function SelfEsteemPage() {
	const selfEsteemData = {
		hero: {
			title: "Therapy for Self-Esteem & Self-Worth",
			description:
				"Self-esteem work isn't about self-improvement. It's about remembering your worth, independent of performance or appearance.",
			heroImage: (
				<div className="specialty-hero-illustration">
					{/* Add your preferred image component here */}
					<div
						style={{
							width: "360px",
							height: "360px",
							borderRadius: "50%",
							background: "var(--brand-8)",
						}}
					>
						{/* Placeholder - replace with actual image */}
					</div>
				</div>
			),
		},

		definition: {
			title: "Understanding Self-Esteem & Self-Worth",
			children: (
				<>
					<p>
						Self-esteem and self-worth challenges often run deeper than simple
						confidence issues. They typically stem from early messages about
						what makes you valuable, lovable, or acceptable. These beliefs
						become so fundamental to how you see yourself that they feel like
						unchangeable truths rather than learned patterns.
					</p>
					<p>
						Many people struggle with worth that feels entirely dependent on
						external factors like achievements, appearance, or others{"'"}{" "}
						approval. This creates an exhausting cycle of constantly trying to
						prove your value through performance, people-pleasing, or
						perfectionism, yet never feeling truly secure in your sense of self.
					</p>
					<p>
						What makes this particularly difficult is that our culture often
						reinforces the idea that worth must be earned or demonstrated. True
						self-worth, however, isn{"'"}t about becoming better or different.
						It{"'"}s about reconnecting with an inherent sense of value that
						exists independent of what you do, how you look, or what others
						think of you.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Low Self-Esteem Might Feel Like",
			experiences: [
				"Chronic self-doubt or feelings of not being enough",
				"Dependence on external validation for any sense of worth",
				"Difficulty holding boundaries or voicing needs",
				"Constant comparison to others and coming up short",
				"Feeling like an imposter, even when successful",
				"Harsh inner critic that overshadows any positive feedback",
				"Fear of disappointing others or being rejected",
				"Exhaustion from constantly trying to prove your value",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Self-Esteem & Self-Worth",
			helpItems: [
				{
					title: "Reconnect with an internal sense of worth.",
					description:
						"We help you identify and strengthen the part of yourself that knows your value isn't conditional. This involves exploring what worth feels like when it's not tied to performance, appearance, or others' opinions, and practicing holding onto that sense even when external circumstances challenge it.",
				},
				{
					title:
						"Explore beliefs shaped by family, culture, or past experiences.",
					description:
						"Much of how we understand our worth comes from early messages about what made us acceptable or lovable. We examine these inherited beliefs with curiosity and compassion, understanding how they developed while questioning whether they still serve you.",
				},
				{
					title: "Develop confidence that doesn't depend on external approval.",
					description:
						"Rather than building self-esteem through achievements or positive thinking, we focus on cultivating a grounded sense of self that remains stable regardless of external feedback. This includes learning to trust your own perceptions and judgments.",
				},
				{
					title: "Practice new ways of relating to yourself.",
					description:
						"Self-worth work involves developing internal relationships that are kinder and more supportive. We explore how you speak to yourself, what you need to feel secure, and how to provide yourself with the acceptance you may be seeking from others.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Self-Esteem Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique patterns.",
					description:
						"We explore how low self-worth shows up in your life, what triggers feelings of inadequacy, and what messages you've internalized about your value. This helps us understand the specific beliefs and patterns that need attention.",
				},
				{
					title: "Treatment emphasizes both insight and practice.",
					description:
						"You'll gain understanding about how your sense of worth developed while also practicing new ways of relating to yourself in real-time. This might include self-compassion exercises, boundary practice, or experiments in trusting your own judgment.",
				},
				{
					title:
						"Integration involves applying new self-relating to daily life.",
					description:
						"As you develop a more stable sense of worth, we work on how this translates to relationships, work, and decision-making. The goal is for this internal shift to create real changes in how you move through the world.",
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
						a space for practicing being known and accepted without having to
						perform or earn approval.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Self-Esteem Work",
			reasons: [
				{
					title: "Focus on inherent worth rather than earned value.",
					description:
						" We don't work toward making you \"better\" so you can feel worthy. Instead, we help you remember and reconnect with worth that was always there, independent of your achievements, appearance, or others' approval.",
				},
				{
					title: "Integration of insight and embodied practice.",
					description:
						" Self-worth isn't just an intellectual concept but something that needs to be felt and experienced. We incorporate mindfulness, somatic awareness, and relational practices that help you embody a new sense of self.",
				},
				{
					title: "Attention to cultural and family patterns.",
					description:
						" We explore how messages from family, culture, and society have shaped your understanding of worth, helping you distinguish between inherited beliefs and your own authentic sense of value.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for self-worth work, and adjust our methods as your needs change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Self-worth work is about remembrance, not improvement. It's about uncovering and strengthening what was always true about your inherent value, rather than trying to become worthy through achievement or change. Ready to explore how therapy might support this process?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional Self-Esteem Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Depression"
									newWindow={true}
								>
									National Alliance on Mental Illness (NAMI)
								</CustomLink>
							),
							description:
								"Information on mental health conditions that often co-occur with self-esteem issues",
						},
						{
							component: (
								<CustomLink
									url="https://www.apa.org/topics/self-esteem"
									newWindow={true}
								>
									American Psychological Association - Self-Esteem
								</CustomLink>
							),
							description:
								"Research-based information about self-esteem and psychological wellbeing",
						},
						{
							component: (
								<CustomLink
									url="https://www.mhanational.org/conditions/depression"
									newWindow={true}
								>
									Mental Health America
								</CustomLink>
							),
							description: "Resources on mental health and self-care",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Self-Esteem"
									newWindow={true}
								>
									Centre for Clinical Interventions - Self-Esteem Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/self-esteem/"
									newWindow={true}
								>
									Psychology Tools - Self-Esteem Resources
								</CustomLink>
							),
							description: "Professional treatment resources and information",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're struggling with self-esteem, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...selfEsteemData} />;
}
