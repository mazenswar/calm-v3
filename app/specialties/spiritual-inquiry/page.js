// SpiritualExplorationPage.js
"use client";
import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import heroImg from "./foreshore.png";
import Image from "next/image";

export default function SpiritualExplorationPage() {
	const spiritualExplorationData = {
		hero: {
			title: "Spiritual Exploration & Existential Inquiry",
			description:
				"Therapy can be a safe space to explore deeper longings, awe, or the mystery of being human—without imposed frameworks.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={heroImg} height={360} width={360} alt="shore" />
				</div>
			),
		},

		definition: {
			title: "Understanding Spiritual Exploration & Existential Inquiry",
			children: (
				<>
					<p>
						Spiritual exploration involves questioning, seeking, and opening to
						dimensions of experience that transcend everyday concerns—without
						necessarily following a specific religious or spiritual path. Many
						people feel drawn toward something deeper, more meaningful, or more
						mysterious than their daily routines provide, yet struggle to find
						spaces where these longings can be explored without judgment or
						predetermined answers.
					</p>
					<p>
						Existential inquiry involves wrestling with fundamental questions
						about meaning, purpose, mortality, freedom, and what it means to be
						human. These questions often arise during times of transition, loss,
						or when life{"'"}s usual structures feel insufficient to hold your
						deeper concerns and wonderings.
					</p>
					<p>
						What makes this exploration particularly challenging in our culture
						is how little space exists for genuine spiritual questioning that
						doesn{"'"}t require adopting specific beliefs or frameworks. Many
						people hunger for the sacred or transcendent but don{"'"}t want
						imposed interpretations of what that should look like or mean.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Spiritual Longing Might Feel Like",
			experiences: [
				"A pull toward something deeper, without clear labels or definitions",
				"Questions about meaning, purpose, or your place in the larger mystery of existence",
				"Longing for spiritual grounding or connection in a nonjudgmental space",
				"Awe, wonder, or mystical experiences that you struggle to understand or integrate",
				"Feeling spiritually homeless or between traditional frameworks",
				"Deep questions about life, death, and what lies beyond ordinary consciousness",
				"Sensing there's more to life but not knowing how to access or explore it",
				"Feeling called toward practices, experiences, or ways of being that feel sacred to you",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Spiritual Exploration",
			helpItems: [
				{
					title: "Hold space for curiosity and awe.",
					description:
						"We create a safe container for you to explore your deepest questions, longings, and experiences without judgment or pressure to reach specific conclusions. This includes space for wonder, mystery, and the parts of existence that can't be easily categorized or explained.",
				},
				{
					title:
						"Explore existential questions without pressure to resolve them.",
					description:
						"Many spiritual and existential questions don't have clear answers, and therapy can be a place to sit with these questions fully rather than rushing toward resolution. We support your capacity to live with mystery and uncertainty while finding meaning in the inquiry itself.",
				},
				{
					title: "Integrate spiritual inquiry with practical daily life.",
					description:
						"Spiritual exploration often needs to be woven into everyday existence rather than kept separate from practical concerns. We help you explore how your deeper longings and insights can inform how you live, work, and relate to others.",
				},
				{
					title:
						"Support authentic spiritual expression without imposed frameworks.",
					description:
						"We don't advocate for any particular spiritual path or interpretation, but we support you in discovering what feels authentic and meaningful for your unique spiritual journey, whether that involves traditional practices, nature connection, creative expression, or other forms of spiritual exploration.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Spiritual Exploration Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique spiritual longings.",
					description:
						"We explore what draws you toward deeper inquiry, what questions feel most alive for you, and what you're seeking from spiritual exploration. This assessment helps us understand how to best support your individual journey.",
				},
				{
					title: "Treatment creates space for open-ended exploration.",
					description:
						"Rather than working toward specific goals, we create room for whatever emerges in your spiritual inquiry. This might include processing mystical experiences, exploring meaning-making, or simply sitting with the questions that feel most important to you.",
				},
				{
					title:
						"Sessions honor your questions and help you explore meaning in ways that feel authentic.",
					description:
						"We work collaboratively to create practices, explorations, or reflections that support your spiritual development in ways that align with your own sense of what feels true and meaningful.",
				},
			],
		},

		// Custom section for mystery respect note
		customSections: [
			<section key="mystery-respect" className="specialty-therapy block center">
				<div className="container block__content">
					<p>
						Throughout this process, we maintain respect for the mystery and
						avoid reducing spiritual experience to psychological concepts, while
						still offering the support and container that therapy provides.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Spiritual Exploration",
			reasons: [
				{
					title: "No imposed framework or agenda.",
					description:
						" We don't advocate for any particular spiritual path, belief system, or interpretation of spiritual experience. Instead, we offer space for inquiry, reflection, and authentic exploration of what feels meaningful to you.",
				},
				{
					title:
						"Integration of spiritual inquiry with psychological wellness.",
					description:
						" We understand that spiritual development often involves psychological growth and healing, and we can support both dimensions of your development without reducing one to the other.",
				},
				{
					title: "Respect for both mystery and practical integration.",
					description:
						" We hold space for experiences and questions that transcend ordinary understanding while also helping you integrate spiritual insights into daily life in ways that feel grounding and sustainable.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can provide the open-ended exploration that spiritual development often requires, adjust our approach as your spiritual journey evolves, and offer the kind of deep, reflective space that spiritual inquiry needs.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Spiritual exploration in therapy doesn't require you to adopt any particular beliefs or practices. It's about creating space for your authentic spiritual development, whatever form that might take, while receiving support for the challenges and insights that arise along the way. Ready to explore how therapy might support your spiritual journey?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},
	};

	return <Template {...spiritualExplorationData} />;
}
