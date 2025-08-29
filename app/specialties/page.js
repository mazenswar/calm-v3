// app/specialties/page.jsx
"use client";

import { useEffect } from "react";
import AccordionItem from "../Components/ui/AccordionItem/Component";
import "./style.scss";
import flowerImg from "./assets/lotus.jpg";
import Image from "next/image";

export default function SpecialtiesPage() {
	// Smooth in‑page scroll for the TOC chips
	useEffect(() => {
		const toc = document.querySelector(".spec-toc");
		if (!toc) return;

		const getHeaderOffset = () => {
			const sticky = document.querySelector(".site-header");
			return sticky ? sticky.getBoundingClientRect().height + 12 : 88; // small breathing room
		};

		const onClick = (e) => {
			const a = e.target.closest("a[href^='#']");
			if (!a) return;

			const id = a.getAttribute("href").slice(1);
			const el = document.getElementById(id);
			if (!el) return;

			e.preventDefault();
			const top =
				window.pageYOffset + el.getBoundingClientRect().top - getHeaderOffset();

			window.scrollTo({ top, behavior: "smooth" });
		};

		toc.addEventListener("click", onClick);
		return () => toc.removeEventListener("click", onClick);
	}, []);

	// —— Content (your exact copy kept) ——
	const groups = [
		{
			id: "anxiety",
			title: "Anxiety & Related Conditions",
			lead: "Support to reduce reactivity, understand patterns, and build steadier daily habits.",
			items: [
				{
					title: "Generalized Anxiety Disorder (GAD)",
					body: (
						<p>
							When worry feels constant and overwhelming, we help clients
							untangle the patterns behind their anxiety and reconnect with a
							sense of grounded presence. Our approach draws from
							mindfulness-based approaches, Cognitive Behavioral Therapy (CBT),
							Internal Family Systems (IFS), and somatic awareness to reduce
							mental noise and build inner steadiness.
						</p>
					),
				},
				{
					title: "Panic Disorder (PD)",
					body: (
						<p>
							We work with clients to change their relationship to the
							physiological sensations of panic. Together, we build the capacity
							to stay present with what arises, using techniques that support
							acceptance and nervous system regulation. This approach helps
							reduce reactivity and fosters long-term resilience.
						</p>
					),
				},
				{
					title: "Social Anxiety Disorder (SAD)",
					body: (
						<p>
							Social anxiety often masks a deeper fear of being seen or
							rejected. Our work may combine exposure-based strategies with
							insight-oriented therapy to help you reclaim your voice and your
							sense of self-worth.
						</p>
					),
				},
				{
					title: "Obsessive-Compulsive Disorder (OCD)",
					body: (
						<p>
							We use exposure and response prevention (ERP), inference-based CBT
							(i-CBT), and acceptance and commitment therapy (ACT) to help
							clients challenge intrusive thoughts without getting trapped in
							doubt and reassurance-seeking cycles. We approach OCD not just as
							a behavioral issue but as an opportunity to cultivate deeper
							self-trust.
						</p>
					),
				},
				{
					title: "Body Dysmorphic Disorder (BDD)",
					body: (
						<p>
							We explore the critical inner narratives and shame-based beliefs
							that distort your self-image. Therapy focuses on cultivating a
							more compassionate and embodied relationship with yourself.
						</p>
					),
				},
			],
		},
		{
			id: "mood",
			title: "Mood & Self-Perception",
			lead: "Clear steps to understand mood patterns and relate to yourself with care.",
			items: [
				{
					title: "Complex Trauma",
					body: (
						<p>
							Complex trauma can make the past feel like it is still alive in
							the present. Old experiences of fear, shame, or worthlessness
							surface as if they are happening now, shaping how you see yourself
							and how safe you feel in the world. This can leave you feeling
							trapped in patterns that are hard to name but deeply felt. Our
							work together involves both grounding skills for safety in the
							moment and deeper exploration of how these patterns took root. We
							may use body-focused approaches, Internal Family Systems (IFS),
							and mindfulness to help you rebuild trust in yourself and shift
							entrenched beliefs. Healing from complex trauma is not about
							erasing the past, but about creating the conditions for safety,
							clarity, and self-compassion in the present.
						</p>
					),
				},
				{
					title: "Depression",
					body: (
						<p>
							Depression often shows up as a disconnection from the body, from
							joy, and from meaning. Our approach supports emotional processing,
							mindfulness, and behavioral activation, while exploring the deeper
							story your depression may be telling.
						</p>
					),
				},
				{
					title: "Perfectionism",
					body: (
						<p>
							Perfectionism can be both protective and imprisoning. In our work
							together, we explore the parts of you that believe safety or worth
							depend on performance, achievement, or control. We begin to
							practice enoughness from the inside out
						</p>
					),
				},
				{
					title: "Self-Esteem & Self-Worth",
					body: (
						<p>
							This isn{"'"}t about self-improvement. It{"'"}s about
							self-remembrance. We help clients reconnect with an internal sense
							of worth that doesn{"'"}t depend on performance, appearance, or
							external approval.
						</p>
					),
				},
			],
		},
		{
			id: "transitions",
			title: "Life Transitions & Stress",
			lead: "Tools for change, uncertainty, and workload so daily life feels more manageable.",
			items: [
				{
					title: "Life Transitions",
					body: (
						<p>
							Whether the transition is related to career, family, life
							circumstances, or an internal shift, we help clients move through
							it with clarity and integrity. Together, we make space for grief,
							uncertainty, and what may be emerging.
						</p>
					),
				},
				{
					title: "Stress Management & Work-Life Balance",
					body: (
						<p>
							Sometimes healing means setting boundaries, taking rest, or asking
							new questions about what you{"'"}re doing and why. We work with
							clients to identify both internal and external sources of stress
							and create space for recalibration.
						</p>
					),
				},
			],
		},
		{
			id: "integrative",
			title: "Additional Integrative Offerings",
			lead: "Integrative approaches for deeper work with clear boundaries and support.",
			items: [
				{
					title: "Ketamine-Assisted Psychotherapy (KAP)",
					body: (
						<p>
							For clients experiencing treatment-resistant anxiety, OCD, or
							depression, we offer ketamine-assisted psychotherapy in
							partnership with Journey Clinical. This approach can open space
							for new perspectives, soften rigid patterns, and support deep
							emotional healing. We guide clients through preparation, dosing,
							and integration with care and intention.
						</p>
					),
				},
				{
					title: "Spiritual Exploration & Existential Inquiry",
					body: (
						<p>
							Many of our clients do not follow a specific spiritual path, but
							they feel called toward something deeper. Therapy can be a space
							to explore those longings without judgment. We do not impose any
							framework, but we hold space for inquiry, awe, and the mystery of
							being human.
						</p>
					),
				},
			],
		},
	];

	return (
		<section className="block specialties" id="specialties">
			<div className="block__content container">
				{/* HERO */}
				<header className="spec-hero">
					<div className="spec-hero__copy">
						<h1 className="spec-hero__title">How we can support you</h1>
						<p className="spec-hero__lede">
							Seeking therapy is a meaningful step toward change. Below are some
							of the areas where we can work together to bring relief, clarity,
							and growth.
						</p>
					</div>
					{/* Placeholder visual; swap to <Image/> when you have an asset */}
					<figure className="spec-hero__visual" aria-hidden="true">
						<Image
							src={flowerImg}
							alt="Flower blooming"
							priority
							sizes="(max-width: 768px) 100vw, 360px"
							style={{ width: "100%", height: "auto", borderRadius: "100%" }}
						/>
					</figure>
				</header>

				{/* LOCAL NAV / CHIPS */}
				<nav className="spec-toc" aria-label="Browse specialties">
					<ul className="spec-toc__list" role="list">
						{groups.map((g) => (
							<li key={g.id}>
								<a href={`#${g.id}`}>{g.title}</a>
							</li>
						))}
					</ul>
				</nav>

				{/* GROUPS */}
				<div className="spec-groups">
					{groups.map((group) => (
						<article className="spec-group" id={group.id} key={group.id}>
							<header className="spec-group__header">
								<h2>{group.title}</h2>
								{group.lead && <p className="muted">{group.lead}</p>}
							</header>

							<div className="spec-accordion">
								{group.items.map((item, idx) => (
									<AccordionItem key={`${group.id}-${idx}`} title={item.title}>
										{item.body}
									</AccordionItem>
								))}
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
