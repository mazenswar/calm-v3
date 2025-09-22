// StressManagementPage.js
import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import heroImg from "./foreshore.png";
import Image from "next/image";

import { metadata } from "@/app/config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.specialties.stressManagement;

export default function StressManagementPage() {
	const stressManagementData = {
		hero: {
			title: "Therapy for Stress Management & Work-Life Balance",
			description:
				"Stress can build until daily life feels unmanageable. Therapy helps you recalibrate with tools for both mind and body.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={heroImg} height={360} width={360} alt="shore" />
				</div>
			),
		},

		definition: {
			title: "Understanding Stress & Work-Life Balance Challenges",
			children: (
				<>
					<p>
						Chronic stress often develops gradually as demands accumulate and
						boundaries erode, leaving you feeling constantly on edge or
						overwhelmed. What begins as manageable pressure can become a
						persistent state of activation that affects your physical health,
						emotional wellbeing, and ability to connect with what matters most
						to you.
					</p>
					<p>
						Work-life balance challenges frequently reflect deeper questions
						about values, boundaries, and what you{"'"}re willing to sacrifice
						for external expectations or achievements. The stress may stem not
						just from having too much to do, but from a fundamental misalignment
						between how you{"'"}re living and what truly matters to you.
					</p>
					<p>
						Sometimes healing means recognizing that the problem isn{"'"}t just
						poor time management or lack of coping skills, but systems and
						patterns that need fundamental recalibration. This might involve
						setting boundaries that feel uncomfortable, taking rest that feels
						unproductive, or asking new questions about what you{"'"}re doing
						and why you{"'"}re doing it.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Chronic Stress Might Feel Like",
			experiences: [
				"Feeling constantly on edge, overwhelmed, or unable to relax",
				"Difficulty balancing work demands with personal needs and relationships",
				"Exhaustion without time or permission to recover",
				"Physical symptoms like tension, headaches, or sleep problems",
				"Feeling like you're always behind or not doing enough",
				"Difficulty saying no or setting boundaries with others' demands",
				"Losing touch with activities or relationships that used to bring joy",
				"Questioning whether this pace of life is sustainable long-term",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Stress Management & Work-Life Balance",
			helpItems: [
				{
					title: "Identify sources of stress internally and externally.",
					description:
						"We explore both the external demands and pressures in your life and the internal beliefs, expectations, and patterns that contribute to stress. This includes examining what drives your sense of obligation and what makes it difficult to prioritize your own wellbeing.",
				},
				{
					title: "Practice tools for boundary-setting and rest.",
					description:
						"Rather than just adding more to your schedule, we focus on creating space through boundaries and rest. This includes learning to say no, delegate effectively, and give yourself permission to pause without guilt or anxiety about productivity.",
				},
				{
					title: "Explore deeper questions about meaning and alignment.",
					description:
						"Chronic stress often signals a disconnect between how you're living and what you truly value. We create space to examine what matters most to you and whether your current life structure supports or undermines those priorities.",
				},
				{
					title: "Create space for recalibration of life patterns.",
					description:
						"Sometimes stress management requires fundamental changes in how you approach work, relationships, or daily life. We support you in making both small adjustments and larger recalibrations that bring more alignment and sustainability.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Stress Management Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique stress patterns.",
					description:
						"We explore what creates stress in your life, how it shows up in your body and mind, and what you've already tried to manage it. This assessment helps us identify both immediate relief strategies and deeper patterns that need attention.",
				},
				{
					title:
						"Treatment provides both immediate relief strategies and long-term shifts toward balance.",
					description:
						"You'll learn practical tools for managing stress in the moment while also exploring the bigger questions about how you want to live and what needs to change to create more sustainable balance.",
				},
				{
					title:
						"Sessions explore both practical strategies and deeper meaning questions.",
					description:
						"We work on concrete skills like boundary-setting and time management while also examining your relationship with productivity, rest, achievement, and what constitutes a meaningful life for you.",
				},
			],
		},

		// Custom section for symptom relief and deeper recalibration note
		customSections: [
			<section
				key="relief-recalibration"
				className="specialty-therapy block center"
			>
				<div className="container block__content">
					<p>
						Throughout this process, we maintain attention to both symptom
						relief and the deeper recalibration that may be needed for lasting
						change.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title:
				"Why Choose CALM Therapy for Stress Management & Work-Life Balance",
			reasons: [
				{
					title:
						"Integration of practical strategies with reflective exploration.",
					description:
						" We combine concrete tools for managing stress and setting boundaries with deeper exploration of what drives your stress patterns and what kind of life would feel more aligned and sustainable.",
				},
				{
					title: "Focus on recalibration rather than just coping.",
					description:
						" Rather than helping you cope better with an unsustainable situation, we focus on supporting the recalibration that may be needed to create genuine balance and wellbeing. This might involve difficult questions about priorities, boundaries, and life structure.",
				},
				{
					title: "Attention to both internal and external sources of stress.",
					description:
						" We explore both the external demands in your life and the internal beliefs, expectations, and patterns that contribute to chronic stress, recognizing that lasting change often requires addressing both levels.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, explore the deeper questions about life balance and meaning, and adjust our methods as you make changes in your work and personal life.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Stress management isn't just about learning to cope better with an overwhelming situation. Sometimes it's about recognizing that the situation itself needs to change and supporting yourself through the process of creating more balance and alignment in your life. Ready to explore how therapy might help you recalibrate toward more balance and sustainability?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		// resources: {
		// 	title: "Additional Stress Management Resources",
		// 	resourceSections: [
		// 		{
		// 			title: "Organizations & Information:",
		// 			links: [
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.apa.org/topics/stress"
		// 							newWindow={true}
		// 						>
		// 							American Psychological Association - Stress Management
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Research-based information about stress, its effects, and management strategies",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.cdc.gov/niosh/topics/stress/"
		// 							newWindow={true}
		// 						>
		// 							National Institute for Occupational Safety and Health (NIOSH)
		// 							- Workplace Stress
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Government resource on workplace stress and prevention",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.mhanational.org/conditions/stress"
		// 							newWindow={true}
		// 						>
		// 							Mental Health America - Stress
		// 						</CustomLink>
		// 					),
		// 					description: "Resources on stress management and mental health",
		// 				},
		// 			],
		// 		},
		// 		{
		// 			title: "Online Resources:",
		// 			links: [
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Stress"
		// 							newWindow={true}
		// 						>
		// 							Centre for Clinical Interventions - Stress Management
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Government-developed self-help resources and worksheets for stress management",
		// 				},
		// 				{
		// 					component: (
		// 						<CustomLink
		// 							url="https://www.psychologytools.com/self-help/stress/"
		// 							newWindow={true}
		// 						>
		// 							Psychology Tools - Stress Management
		// 						</CustomLink>
		// 					),
		// 					description:
		// 						"Professional treatment resources and information handouts",
		// 				},
		// 			],
		// 		},
		// 	],
		// 	disclaimer:
		// 		"These resources are for educational purposes and are not substitutes for professional treatment. If stress is significantly impacting your life, consulting with a qualified mental health professional is recommended.",
		// },
	};

	return <Template {...stressManagementData} />;
}
