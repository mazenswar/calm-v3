// OCDPage.js

import React from "react";

import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import sandstoneImg from "./assets/sandstone.jpg";

import { metadata } from "@/app/config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.specialties.ocd;
export default function OCDPage() {
	const ocdData = {
		hero: {
			title: "Therapy for Obsessive-Compulsive Disorder (OCD)",
			description:
				"OCD can feel like being trapped in cycles of doubt and reassurance-seeking. Therapy helps you challenge intrusive thoughts while cultivating deeper self-trust.",
			heroImage: (
				<div className="specialty-hero-illustration">
					{/* Add your preferred image component here */}

					<Image src={sandstoneImg} alt="fern" width={360} height={360} />
				</div>
			),
		},

		definition: {
			title: "Understanding Obsessive-Compulsive Disorder",
			children: (
				<>
					<p>
						Obsessive-Compulsive Disorder creates patterns of intrusive thoughts
						(obsessions) followed by repetitive behaviors or mental rituals
						(compulsions) aimed at reducing distress. The cycle remains
						consistent: doubt arises, anxiety builds, and compulsions provide
						temporary relief only for the cycle to begin again.
					</p>
					<p>
						What makes OCD particularly challenging is how it hijacks your
						natural problem-solving abilities, turning them against you through
						endless {"what if"} questions that feel impossible to resolve. Many
						people describe feeling like they{"'"}re living in a prison of their
						own making, knowing their fears don{"'"}t make logical sense yet
						feeling unable to break free from compulsive responses.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What OCD Might Feel Like",
			experiences: [
				"Intrusive thoughts that feel hard to ignore or dismiss",
				"Compulsions or rituals meant to relieve doubt or prevent harm",
				"Feeling stuck in endless cycles of reassurance-seeking",
				"Uncertainty that feels unbearable, leading to checking or researching behaviors",
				"Mental exhaustion from constantly battling your own thoughts",
				"Shame about behaviors that feel 'irrational' but necessary",
				"Avoidance of triggers that might spark obsessive thoughts",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with OCD",
			helpItems: [
				{
					title: "Break cycles of compulsions with structured support.",
					description:
						"Using evidence-based methods like Exposure and Response Prevention (ERP), we guide you through gradually facing feared situations without engaging in compulsive behaviors. This process happens at your pace with careful attention to your readiness and capacity.",
				},
				{
					title: "Learn to face intrusive thoughts without engaging rituals.",
					description:
						"Rather than trying to eliminate obsessive thoughts (which often backfires), you'll develop skills to acknowledge them without getting pulled into compulsive responses. This creates space between the thought and the action.",
				},
				{
					title: "Strengthen self-trust through acceptance-based approaches.",
					description:
						"OCD often erodes confidence in your own judgment and perceptions. We help you rebuild trust in your ability to tolerate uncertainty and make values-based decisions, while exploring any deeper patterns around control, perfectionism, or responsibility that may fuel your OCD.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in OCD Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding how OCD operates in your life.",
					description:
						"We explore your specific obsessions and compulsions, identify patterns, and design a treatment approach that fits your particular presentation.",
				},
				{
					title: "Treatment progresses from skill-building to active practice.",
					description:
						"You'll learn how OCD works and develop tools for managing anxiety, then gradually engage in exposure exercises that challenge your OCD while respecting your readiness. Each step builds confidence before progressing to more challenging situations.",
				},
				{
					title:
						"Later sessions focus on maintaining gains and deeper integration.",
					description:
						"As symptoms improve, we address underlying themes and develop relapse prevention strategies. Throughout this process, therapy moves at your pace while maintaining gentle pressure toward growth.",
				},
			],
		},

		whyCalm: {
			title: "Why Choose CALM Therapy for OCD Treatment",
			reasons: [
				{
					title: "Individualized treatment planning.",
					description:
						" Your treatment plan reflects your specific presentation and life circumstances rather than following a rigid protocol. We thoughtfully incorporate mindfulness, body awareness, and acceptance-based strategies that support lasting change.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for your specific presentation, and adjust our methods as your needs change.",
				},
				{
					title: "Accessible Care",
					description:
						"We serve adults in 43 U.S. states and jurisdictions through secure telehealth, with a focus on clarity and support for lasting change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"If you recognize yourself in these descriptions, you're not alone and recovery is possible. OCD can feel overwhelming, but with the right support, you can reclaim your life from repetitive cycles of doubt and compulsion. Ready to explore how therapy might help?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional OCD Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink url="https://iocdf.org/" newWindow={true}>
									International OCD Foundation (IOCDF)
								</CustomLink>
							),
							description:
								"The largest organization dedicated to helping those affected by OCD and related disorders",
						},
						{
							component: (
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - OCD
								</CustomLink>
							),
							description:
								"Government resource with research-based information about OCD",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder"
									newWindow={true}
								>
									American Psychiatric Association - OCD Information
								</CustomLink>
							),
							description: "Clinical overview of OCD symptoms and treatment",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.calmtherapy.center/blog/living-with-intrusive-thoughts-why-control-doesn-t-work-and-what-actually-helps"
									newWindow={true}
								>
									Living with Intrusive Thoughts: Why Control Doesn{"'"}t Work
									and What Actually Helps
								</CustomLink>
							),
							description:
								"CALM Therapy blog exploring why fighting intrusive thoughts backfires and offering alternative approaches",
						},
						{
							component: (
								<CustomLink
									url="https://www.treatmyocd.com/what-is-ocd/info/ocd-stats-and-science/5-free-worksheets-for-people-struggling-with-ocd-developed-by-experts"
									newWindow={true}
								>
									NOCD Free OCD Worksheets
								</CustomLink>
							),
							description:
								"Expert-developed worksheets for self-reflection and support",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing OCD symptoms, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...ocdData} />;
}
