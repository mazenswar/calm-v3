// ComplexTraumaPage.js

import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import Template from "@/app/special/template/Template";
import Image from "next/image";
import ctImg from "./ct.jpg";
import { metadata } from "@/app/config/metadata.mjs";
import "./ct.scss";

// metadata
export const generateMetadata = () => metadata.specialties.complexTrauma;

export default function ComplexTraumaPage() {
	const complexTraumaData = {
		hero: {
			title: "Therapy for Complex Trauma and Deeply Rooted Anxiety",
			description:
				"Helping adults address the lasting impact of earlier relational wounds",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={ctImg} alt="flower" width={360} height={360} />
				</div>
			),
		},

		definition: {
			title: "Understanding Complex Trauma",
			children: (
				<p>
					Complex trauma often develops during childhood or in long-term
					relationships where escape or protection felt impossible. It is less
					about a single traumatic event and more about repeated experiences of
					neglect, emotional harm, or violation of trust that shape the nervous
					system and sense of self over time.
				</p>
			),
		},

		commonExperiences: {
			title: "What This Might Feel Like",
			experiences: [
				"Memories or feelings that surface as if they are happening now, or sudden emotional responses that seem out of proportion to the moment",
				"A persistent sense that something is fundamentally wrong with you",
				"Chronic anxiety or hypervigilance, always scanning for what might go wrong",
				"A history of emotional neglect, boundary violations, or feeling unseen or unheard by caregivers or partners",
				"Perfectionism or the need to stay in control to feel safe",
				"Inner conflict or harsh self-criticism that keeps you feeling tense even when life looks outwardly successful",
				"Difficulty relaxing into your body or trusting closeness with others",
			],
		},

		howTherapyHelps: {
			title: "A Personalized Approach to Healing",
			helpItems: [
				{
					title: "Meeting You Where You Are",
					description:
						"We tailor therapy to each person's needs rather than follow a fixed sequence. Our work begins with what you bring into the room and grows at a pace that feels safe.",
				},
				{
					title: "Building a Foundation of Stability",
					description:
						"Early sessions often focus on developing tools for managing anxiety and everyday stress. We introduce grounding skills, nervous-system regulation, and mindfulness practices that can be applied right away.",
				},
				{
					title: "Exploring Deeper Patterns",
					description:
						"Once a sense of steadiness is in place, we gradually turn toward the roots of distress. Clients often learn new language for inner parts or protective responses and practice staying regulated as they explore these experiences.",
				},
				{
					title: "Integrating Modalities Thoughtfully",
					description:
						"We draw on somatic awareness, nervous-system regulation, mindfulness, and parts-informed work to address patterns that interfere with growth. When appropriate, we may also integrate Ketamine-Assisted Psychotherapy (KAP) as an adjunct to support insight and healing.",
				},
				{
					title: "Working Across Levels of Experience",
					description:
						"Our approach weaves together cognitive, behavioral, emotional, and somatic processes. Throughout, we emphasize practicing self-regulation and cultivating self-compassion so that changes made in therapy translate into daily life.",
				},
			],
		},

		whyCalm: {
			title: "Why Choose CALM Therapy for Complex Trauma",
			reasons: [
				{
					title: "Trauma-informed and body-aware approach",
					description:
						"Our approach recognizes that unresolved stress often lives in both mind and body. We integrate somatic awareness, nervous-system regulation, mindfulness, and parts-informed exploration to help you develop a safer relationship with your physical and emotional experience.",
				},
				{
					title: "Integration of modalities",
					description:
						"Somatic awareness, nervous-system regulation, mindfulness, and parts-informed exploration are thoughtfully combined to address patterns that interfere with growth. We may include Ketamine-Assisted Psychotherapy (KAP) when appropriate to support insight and healing.",
				},
				{
					title: "Focus on developing inner safety and self-trust",
					description:
						"We emphasize building the inner safety, self-trust, and resources that make deeper work possible and sustainable.",
				},
				{
					title: "Flexible private-pay model",
					description:
						"Our private-pay model allows treatment flexibility so sessions can be tailored to your needs rather than limited by insurance requirements.",
				},
				{
					title: "Respect for pace and readiness",
					description:
						"We respect each person’s pace and readiness, attending to both present-day coping and the deeper roots of anxiety.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Healing from complex trauma takes time but is possible. Change begins with the safety of a consistent, collaborative relationship. If you feel ready to address the patterns that keep you anxious or self-critical, reach out for a consultation to explore whether this work feels like a good fit for you.",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},
		customSections: [
			<section className="suitability-section block center" key="fit">
				<div className="container block__content">
					<h3>Who This Approach Is Best Suited For</h3>
					<div className="criteria__container">
						<div className="criteria-group">
							<strong>A Good Fit</strong>
							<ul>
								<li>
									Adults who are generally emotionally stable and functioning in
									daily life
								</li>
								<li>
									Those who notice that anxiety, self-criticism, or relational
									strain may be rooted in earlier experiences
								</li>
								<li>
									People who want to go beyond symptom management to understand
									and transform deeper patterns
								</li>
							</ul>
						</div>
						<div className="criteria-group">
							<strong>Outside our current scope</strong>
							<ul>
								<li>Individuals in active suicidal crisis</li>
								<li>
									Anyone experiencing untreated psychosis or significant
									uncontrolled dissociation
								</li>
								<li>
									Clients who require the level of structure and monitoring
									available in inpatient or intensive programs
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>,
		],
	};

	return <Template {...complexTraumaData} />;
}
