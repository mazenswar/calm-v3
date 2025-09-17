// GADPage.js
"use client";
import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import gadImg from "./gad.jpg";

export default function GADPage() {
	const gadData = {
		hero: {
			title: "Therapy for Generalized Anxiety Disorder (GAD)",
			description:
				"When worry feels constant and overwhelming, therapy can help untangle the patterns and reconnect you with steadiness.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={gadImg} alt="clouds" width={360} height={360} priority />
				</div>
			),
		},

		definition: {
			title: "Understanding Generalized Anxiety Disorder",
			children: (
				<>
					<p>
						Generalized Anxiety Disorder is characterized by persistent,
						excessive worry about various aspects of daily life that feels
						difficult to control. Unlike anxiety that arises in response to
						specific situations, GAD involves ongoing concern about work,
						health, family, finances, or future events that often feels
						disproportionate to actual circumstances.
					</p>
					<p>
						What makes GAD particularly exhausting is how worry can feel like
						mental noise that never stops. Your mind may jump from one concern
						to another, creating scenarios that feel urgent but rarely have
						clear solutions. This constant mental activity can leave you feeling
						physically tense, emotionally drained, and disconnected from
						present-moment experience.
					</p>
					<p>
						Many people with GAD describe feeling like they{"'"}re always{" "}
						{"on,"}
						unable to relax or trust that things will be okay. The worry often
						feels protective, as if staying vigilant can prevent bad things from
						happening, yet this hypervigilance rarely brings the security it
						promises.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What GAD Might Feel Like",
			experiences: [
				"Persistent worry that feels hard to control or turn off",
				"Restlessness, tension, or difficulty relaxing your body",
				"Feeling like your mind never stops racing from one concern to another",
				"Physical symptoms like muscle tension, headaches, or digestive issues",
				"Fatigue from the constant mental activity and vigilance",
				"Difficulty concentrating because worry interrupts your focus",
				"Irritability or feeling on edge much of the time",
				"Sleep problems from an overactive mind",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with GAD",
			helpItems: [
				{
					title: "Explore the underlying patterns that fuel ongoing anxiety.",
					description:
						"We help you understand how worry functions in your life, what triggers it, and what beliefs or experiences might be driving the need for constant vigilance. This includes examining whether anxiety serves a protective function and what might feel threatening about letting your guard down.",
				},
				{
					title:
						"Practice skills that reduce reactivity and calm the nervous system.",
					description:
						"Using mindfulness-based approaches and somatic awareness, we help you develop tools for interrupting the worry cycle and returning to present-moment groundedness. This includes breathing techniques, body awareness practices, and ways of relating to anxious thoughts that reduce their grip.",
				},
				{
					title:
						"Rebuild trust in your ability to handle daily life with steadiness.",
					description:
						"GAD often involves a fundamental lack of trust in your capacity to cope with uncertainty or challenges. We work together to strengthen your confidence in your own resilience while developing practical skills for navigating life's inevitable ups and downs.",
				},
				{
					title: "Address the mental patterns that maintain anxiety.",
					description:
						"Through approaches like Cognitive Behavioral Therapy (CBT) and Internal Family Systems (IFS), we explore the thoughts, beliefs, and internal dynamics that keep anxiety alive. This might include examining catastrophic thinking patterns, perfectionist tendencies, or protective parts of yourself that believe worry keeps you safe.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in GAD Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique anxiety patterns.",
					description:
						"We explore what triggers your worry, how anxiety shows up in your body and mind, and what approaches you've tried before. This assessment helps us design a treatment plan that addresses your specific presentation of GAD.",
				},
				{
					title:
						"Early treatment emphasizes building tools for calm and presence.",
					description:
						"You'll learn practical skills for managing anxiety in the moment, including grounding techniques, breathing practices, and ways to interrupt worry spirals. These tools provide a foundation for deeper exploration.",
				},
				{
					title:
						"Over time, we explore deeper roots of anxiety and practice new ways of relating to yourself.",
					description:
						"As you develop more capacity for self-regulation, we examine what drives your need for constant vigilance and practice trusting your ability to handle whatever life brings. This deeper work helps create lasting change rather than just symptom management.",
				},
			],
		},

		// Custom section for the process note
		customSections: [
			<section key="process-note" className="specialty-therapy block center">
				<div className="container block__content">
					<p>
						Throughout this process, we maintain attention to both immediate
						relief and long-term healing, ensuring you have practical tools
						while addressing the underlying patterns that maintain anxiety.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for GAD Treatment",
			reasons: [
				{
					title:
						"Integrative approach that reduces mental noise and builds inner steadiness.",
					description:
						" We draw from mindfulness-based approaches, Cognitive Behavioral Therapy (CBT), Internal Family Systems (IFS), and somatic awareness to address anxiety from multiple angles. This comprehensive approach helps you develop genuine steadiness rather than just coping strategies.",
				},
				{
					title:
						"Focus on underlying patterns rather than just symptom management.",
					description:
						" While we provide tools for immediate relief, our primary focus is understanding and shifting the deeper patterns that maintain anxiety. This includes exploring beliefs about safety, control, and your capacity to handle life's challenges.",
				},
				{
					title: "Emphasis on reconnecting with grounded presence.",
					description:
						" GAD often involves disconnection from your body and present-moment experience. We help you develop skills for staying grounded in your physical experience and connected to what's actually happening now, rather than being pulled into future worries.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, use the most effective approaches for GAD, and adjust our methods as your needs change.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from GAD isn't about eliminating all worry but about developing a different relationship with uncertainty and your own capacity to handle whatever life brings. This work takes time and requires approaches that address both the symptoms and the deeper patterns that maintain anxiety. Ready to explore how therapy might help you reconnect with steadiness?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional GAD Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics/anxiety-disorders"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - Anxiety Disorders
								</CustomLink>
							),
							description:
								"Government resource with research-based information about anxiety disorders",
						},
						{
							component: (
								<CustomLink
									url="https://adaa.org/understanding-anxiety/generalized-anxiety-disorder-gad"
									newWindow={true}
								>
									Anxiety and Depression Association of America (ADAA)
								</CustomLink>
							),
							description:
								"Professional organization with evidence-based anxiety treatment information",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychiatry.org/patients-families/anxiety-disorders/what-are-anxiety-disorders"
									newWindow={true}
								>
									American Psychiatric Association - Anxiety Disorders
								</CustomLink>
							),
							description:
								"Clinical overview of anxiety disorders and treatment approaches",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Anxiety"
									newWindow={true}
								>
									Centre for Clinical Interventions - Anxiety Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets for anxiety",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/anxiety/"
									newWindow={true}
								>
									Psychology Tools - Anxiety Resources
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing anxiety symptoms, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...gadData} />;
}
