// PerfectionismPage.js
"use client";
import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Template from "@/app/special/template/Template";
import heroImg from "./foreshore.png";
import Image from "next/image";

export default function PerfectionismPage() {
	const perfectionismData = {
		hero: {
			title: "Therapy for Perfectionism",
			description:
				"Perfectionism can feel protective yet imprisoning. Therapy creates space to practice enoughness from the inside out.",
			heroImage: (
				<div className="specialty-hero-illustration">
					<Image src={heroImg} height={360} width={360} alt="shore" />;
				</div>
			),
		},

		definition: {
			title: "Understanding Perfectionism",
			children: (
				<>
					<p>
						Perfectionism involves setting unrealistically high standards for
						yourself and experiencing significant distress when these standards
						aren{"'"}t met. While often viewed as a positive trait,
						perfectionism typically stems from deeper fears about being flawed,
						rejected, or not good enough. It becomes a way of trying to earn
						safety, love, or acceptance through flawless performance.
					</p>
					<p>
						What makes perfectionism particularly challenging is how it can feel
						both protective and imprisoning. The drive for perfection often
						develops as a way to avoid criticism, rejection, or failure, yet it
						creates a prison where your worth depends entirely on external
						achievement and control. This leaves you constantly vulnerable to
						feelings of inadequacy whenever reality falls short of impossible
						standards.
					</p>
					<p>
						Perfectionism typically involves parts of yourself that believe your
						safety or worth depend on performance, achievement, or maintaining
						control over outcomes. These protective parts often developed early
						in life as strategies for navigating environments where acceptance
						felt conditional on being {"perfect"} or {"good enough."}{" "}
						Understanding perfectionism this way opens possibilities for healing
						that go beyond simply lowering standards.
					</p>
				</>
			),
		},

		commonExperiences: {
			title: "What Perfectionism Might Feel Like",
			experiences: [
				"Feeling that worth depends on achievement, performance, or being in control",
				"Relentless self-criticism or fear of making mistakes",
				"Difficulty feeling satisfied or at peace, even with success",
				"Procrastination or avoidance when you can't guarantee perfect outcomes",
				"Exhaustion from constantly striving and never feeling like you've done enough",
				"Fear of disappointing others or being seen as inadequate",
				"All-or-nothing thinking where anything less than perfect feels like failure",
				"Difficulty delegating or asking for help because others might not do it 'right'",
			],
		},

		howTherapyHelps: {
			title: "How Therapy Helps with Perfectionism",
			helpItems: [
				{
					title: "Explore the protective parts that drive perfectionism.",
					description:
						"We examine the parts of yourself that believe perfection is necessary for safety, love, or acceptance. This includes understanding how these patterns developed and what they're trying to protect you from, approaching them with curiosity rather than judgment.",
				},
				{
					title: "Practice gentler self-relating and new definitions of worth.",
					description:
						"Rather than trying to eliminate high standards, we focus on developing a kinder relationship with yourself that doesn't depend on perfect performance. This includes exploring what worth and safety might feel like when they're not tied to achievement or control.",
				},
				{
					title: "Create space for rest, joy, and imperfection.",
					description:
						'Perfectionism often leaves little room for ease, playfulness, or the natural messiness of being human. We practice allowing imperfection and finding satisfaction in "good enough" while exploring what it feels like to value yourself independent of productivity or performance.',
				},
				{
					title: "Develop tolerance for uncertainty and vulnerability.",
					description:
						"Perfectionism often serves as a way to avoid the vulnerability of not knowing or not being in control. We gently practice tolerating uncertainty and the discomfort of not having everything figured out or perfectly managed.",
				},
			],
		},

		whatToExpect: {
			title: "What to Expect in Perfectionism Therapy",
			steps: [
				{
					title:
						"Initial sessions focus on understanding your unique perfectionist patterns.",
					description:
						"We explore how perfectionism shows up in your life, what triggers the need for perfection, and what fears or beliefs drive these patterns. This assessment helps us understand the specific protective functions perfectionism serves for you.",
				},
				{
					title:
						"Treatment involves both insight and practice to help loosen rigid patterns.",
					description:
						'You\'ll gain understanding about how perfectionism developed while also practicing new ways of relating to mistakes, imperfection, and your own efforts. This might include experiments in "good enough" and exercises in self-compassion.',
				},
				{
					title:
						"Sessions explore both individual patterns and relational dynamics.",
					description:
						"We examine how perfectionism affects your relationships with others and practice new ways of being in connection that don't depend on perfect performance. This includes exploring boundaries, asking for help, and allowing others to see your imperfections.",
				},
			],
		},

		// Custom section for protective functions note
		customSections: [
			<section
				key="protective-functions"
				className="specialty-therapy block center"
			>
				<div className="container block__content">
					<p>
						Throughout this process, we maintain attention to the protective
						functions of perfectionism, ensuring that you develop internal
						resources for safety and worth before loosening perfectionistic
						patterns.
					</p>
				</div>
			</section>,
		],

		whyCalm: {
			title: "Why Choose CALM Therapy for Perfectionism Work",
			reasons: [
				{
					title:
						"Focus on internal worth rather than external performance standards.",
					description:
						" We don't work on setting \"realistic\" goals or managing perfectionist behaviors. Instead, we focus on developing an internal sense of worth and safety that doesn't depend on perfect achievement or control over outcomes.",
				},
				{
					title: "Integration of parts work and self-compassion practices.",
					description:
						" We explore the different parts of yourself that drive perfectionism, understanding their protective intentions while developing more self-compassionate ways of relating to your efforts and mistakes.",
				},
				{
					title: 'Emphasis on practicing "enoughness" from the inside out.',
					description:
						" Rather than trying to convince you intellectually that you're enough, we create experiential opportunities to feel and embody a sense of enoughness that comes from within rather than from external validation or achievement.",
				},
				{
					title: "Private-pay model allows treatment flexibility.",
					description:
						" Our fee-for-service structure enables us to tailor treatment based on what you actually need, rather than what insurance protocols require. This means we can spend the time necessary for your unique situation, explore the deeper roots of perfectionist patterns, and adjust our methods as you develop new ways of relating to yourself.",
				},
			],
		},

		cta: {
			title: "Taking the Next Step",
			description:
				"Recovery from perfectionism isn't about lowering your standards or becoming careless about quality. It's about developing internal sources of worth and safety that don't depend on perfect performance, allowing you to strive for excellence from a place of self-acceptance rather than fear. Ready to explore how therapy might help you practice enoughness from the inside out?",
			buttonText: "Schedule a Consultation",
			PrimaryButton: PrimaryButton,
		},

		resources: {
			title: "Additional Perfectionism Resources",
			resourceSections: [
				{
					title: "Organizations & Information:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.apa.org/science/about/psa/2017/11/perfectionism"
									newWindow={true}
								>
									American Psychological Association - Perfectionism
								</CustomLink>
							),
							description:
								"Research-based information about perfectionism and its psychological impacts",
						},
						{
							component: (
								<CustomLink
									url="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Anxiety-Disorders"
									newWindow={true}
								>
									National Alliance on Mental Illness (NAMI) - Anxiety Disorders
								</CustomLink>
							),
							description:
								"Information on anxiety disorders that often co-occur with perfectionism",
						},
						{
							component: (
								<CustomLink
									url="https://www.mhanational.org/conditions/anxiety"
									newWindow={true}
								>
									Mental Health America - Anxiety
								</CustomLink>
							),
							description:
								"Resources on anxiety and related mental health concerns",
						},
					],
				},
				{
					title: "Online Resources:",
					links: [
						{
							component: (
								<CustomLink
									url="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Perfectionism"
									newWindow={true}
								>
									Centre for Clinical Interventions - Perfectionism Resources
								</CustomLink>
							),
							description:
								"Government-developed self-help resources and worksheets for perfectionism",
						},
						{
							component: (
								<CustomLink
									url="https://www.psychologytools.com/self-help/perfectionism/"
									newWindow={true}
								>
									Psychology Tools - Perfectionism Resources
								</CustomLink>
							),
							description:
								"Professional treatment resources and information handouts",
						},
					],
				},
			],
			disclaimer:
				"These resources are for educational purposes and are not substitutes for professional treatment. If perfectionism is significantly impacting your life, consulting with a qualified mental health professional is recommended.",
		},
	};

	return <Template {...perfectionismData} />;
}
