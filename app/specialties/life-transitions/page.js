// LifeTransitionsPage.js
"use client";
import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";

export default function LifeTransitionsPage() {
	const lifeTransitionsData = {
		hero: {
			title: "Therapy for Life Transitions",
			description:
				"Life transitions—whether external or internal—can bring uncertainty and grief. Therapy offers space for clarity and steadiness.",
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
			title: "Understanding Life Transitions",
			children: (
				<>
					<p>
						Life transitions involve significant changes in roles,
						relationships, circumstances, or internal sense of self that require
						adaptation and often bring up complex emotions. These transitions
						can be chosen or unexpected, positive or challenging, but they all
						share the quality of requiring you to navigate the space between who
						you{"'"}ve been and who you{"'"}re becoming.
					</p>
					<p>
						Transitions often involve loss, even when they{"'"}re positive
						changes. You may be grieving old identities, familiar routines, or
						previous versions of your life while simultaneously trying to
						embrace new possibilities. This liminal space between what was and
						what will be can feel disorienting and emotionally complex.
					</p>
					<p>
						What makes transitions particularly challenging is how they can
						shake your sense of identity and stability. Whether the transition
						relates to career changes, relationship shifts, family developments,
						health changes, or internal spiritual or psychological growth, you
						may find yourself questioning fundamental assumptions about your
						life, your future, or who you are at your core.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Life Transitions Might Feel Like",
			experiences: [
				"Facing career, family, or personal changes that feel overwhelming",
				"Uncertainty about what's next or who you're becoming",
				"Grief or loss for how things used to be, even when change is positive",
				"Feeling caught between old identities and new possibilities",
				"Anxiety about making the 'right' decisions during times of change",
				"Loneliness or isolation during periods of significant life shifts",
				"Questioning your values, priorities, or life direction",
				"Feeling like you're living between two worlds without fully belonging to either",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Life Transitions",
			helpItems: [
				{
					title: "Create clarity during uncertain times.",
					description:
						"We help you explore what's truly important to you during periods of change, distinguishing between external pressures and your own authentic desires. This includes creating space to discern what you want to carry forward and what you're ready to release.",
				},
				{
					title: "Hold space for both grief and possibility.",
					description:
						"Transitions often involve simultaneous loss and opportunity. We create room for you to grieve what's ending while also exploring what might be emerging, honoring the full complexity of change rather than rushing toward resolution.",
				},
				{
					title: "Support integrity and self-trust while navigating change.",
					description:
						"During transitions, it's easy to lose touch with your own inner compass. We help you reconnect with your values, intuition, and sense of what feels right for you, supporting decision-making that aligns with who you're becoming rather than who others expect you to be.",
				},
				{
					title: "Make space for what may be emerging.",
					description:
						"Transitions often involve new aspects of yourself or your life trying to emerge. We create space to explore these emerging possibilities with curiosity and openness, allowing change to unfold organically rather than forcing predetermined outcomes.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Life Transitions Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your specific transition.",
					description:
						"We explore what changes you're navigating, what feels most challenging about this transition, and what support you need during this time. This assessment helps us understand how to best support you through your particular change process.",
				},
				{
					title:
						"Treatment creates space for processing the complexity of change.",
					description:
						"You'll have room to explore all the emotions that transitions bring up—grief, excitement, fear, anticipation—without pressure to resolve them quickly. We work at the pace that feels right for your unique transition.",
				},
				{
					title:
						"Sessions focus on helping you move through transition with clarity and integrity.",
					description:
						"As you process the emotional aspects of change, we also work on practical questions about decision-making, values clarification, and creating structure during uncertain times. The goal is helping you navigate change in ways that feel authentic and grounded.",
				},
			],
		},

		// Custom section for inner and practical work note
		customSections: [
			<section
				key="inner-practical-work"
				className="specialty-therapy block center"
			>
				<div className="container block__content">
					<p>
						Throughout this process, we maintain attention to both the inner
						work of transition and the practical challenges of navigating change
						in your daily life.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Life Transitions Support",
			reasons: [
				{
					title: "Collaborative exploration of meaning and direction.",
					description:
						" We work together to explore what your transition means to you and what direction feels authentic for your next chapter. This collaborative approach ensures that your therapy serves your own values and vision rather than external expectations.",
				},
				{
					title: "Integration of grief work and possibility exploration.",
					description:
						" We help you simultaneously honor what you're losing while opening to what might be emerging, recognizing that both aspects are essential parts of healthy transition.",
				},
				{
					title: "Focus on authentic self-expression during change.",
					description:
						" Transitions often provide opportunities to align more closely with your authentic self. We support you in discerning what feels true for you during periods of change, even when that differs from others' expectations or your own previous plans.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique transition, adjust our approach as your needs evolve throughout the change process, and provide the kind of open-ended exploration that transitions often require.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Moving through transitions with support doesn't mean avoiding the difficulty or uncertainty they bring. It means having a space to process the complexity of change while staying connected to your own wisdom and values throughout the process. Ready to explore how therapy might support you through your transition?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional Life Transitions Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.apa.org/topics/stress/life-changes"
									newWindow={true}
								>
									American Psychological Association - Life Changes
								</CustomLink>
							),
							description:
								"Research-based information about managing life changes and stress",
						},
						{
							component: (
								<CustomLink
									url="https://www.mhanational.org/life-transitions"
									newWindow={true}
								>
									Mental Health America - Life Transitions
								</CustomLink>
							),
							description:
								"Resources on navigating major life changes and maintaining mental health",
						},
						{
							component: (
								<CustomLink
									url="https://www.nami.org/Support-Education"
									newWindow={true}
								>
									National Alliance on Mental Illness (NAMI) - Mental Health
									Support
								</CustomLink>
							),
							description:
								"General mental health support and education resources",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself"
									newWindow={true}
								>
									Centre for Clinical Interventions - Life Changes Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources for managing life changes",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/stress/"
									newWindow={true}
								>
									Psychology Tools - Life Changes
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts for managing change",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If you're struggling with a life transition, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...lifeTransitionsData} />;
}
