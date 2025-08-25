// File: /app/specialties/page.jsx
"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import "./style.scss";

/* ---------- Helpers ---------- */

function usePrefersReducedMotion() {
	const reduce = useRef(false);
	useEffect(() => {
		const m = window.matchMedia?.("(prefers-reduced-motion: reduce)");
		reduce.current = !!m?.matches;
		const onChange = (e) => (reduce.current = e.matches);
		m?.addEventListener?.("change", onChange);
		return () => m?.removeEventListener?.("change", onChange);
	}, []);
	return reduce;
}

function animateHeight({
	container,
	inner,
	opening,
	openDur = 780,
	closeDur = 640,
}) {
	// cancel any in-flight animations
	container.getAnimations().forEach((a) => a.cancel());
	inner.getAnimations().forEach((a) => a.cancel());

	const from = container.offsetHeight; // current rendered height
	// Virtually compute target height
	const wasHidden = container.hasAttribute("data-hidden");
	if (opening) {
		container.removeAttribute("data-hidden");
	} else {
		container.setAttribute("data-hidden", "");
	}
	const to = opening ? inner.getBoundingClientRect().height : 0;

	// Revert so we can animate from current visuals
	if (opening !== wasHidden) {
		// flip back temporarily
		if (opening) container.setAttribute("data-hidden", "");
		else container.removeAttribute("data-hidden");
	}

	const dur = opening ? openDur : closeDur;
	const easing = opening
		? "cubic-bezier(0.22, 0.65, 0.2, 1)"
		: "cubic-bezier(0.33, 1, 0.68, 1)";

	container.style.overflow = "hidden";

	const heightAnim = container.animate(
		[{ height: `${from}px` }, { height: `${to}px` }],
		{
			duration: dur,
			easing,
			fill: "forwards",
		}
	);

	const fadeAnim = inner.animate(
		opening
			? [{ opacity: 0 }, { opacity: 1 }]
			: [{ opacity: 1 }, { opacity: 0 }],
		{
			duration: Math.min(dur * 0.5, opening ? 420 : 360),
			easing: opening ? "ease-out" : "ease-in",
			fill: "forwards",
		}
	);

	return Promise.all([heightAnim.finished, fadeAnim.finished]).finally(() => {
		container.style.overflow = "";
	});
}

/* ---------- AccordionItem ---------- */

function AccordionItem({ idBase, title, children, defaultOpen = false }) {
	const btnId = `${idBase}-btn`;
	const panelId = `${idBase}-panel`;
	const [open, setOpen] = useState(!!defaultOpen);

	const containerRef = useRef(null); // height animated element
	const innerRef = useRef(null); // opacity animated wrapper
	const reduce = usePrefersReducedMotion();
	const animatingRef = useRef(false);

	useEffect(() => {
		// Initialize hidden state attribute so measurements work
		if (!open) containerRef.current?.setAttribute("data-hidden", "");
	}, []);

	const commitState = (nextOpen) => {
		setOpen(nextOpen);
		// reflect hidden for non-JS/assistive styling (no visual changes required)
		if (!nextOpen) containerRef.current?.setAttribute("data-hidden", "");
		else containerRef.current?.removeAttribute("data-hidden");
	};

	const toggle = async () => {
		if (!containerRef.current || !innerRef.current || animatingRef.current)
			return;

		const opening = !open;
		if (reduce.current) {
			commitState(opening);
			return;
		}

		animatingRef.current = true;
		try {
			await animateHeight({
				container: containerRef.current,
				inner: innerRef.current,
				opening,
			});
			commitState(opening);
		} finally {
			// Clear inline styles set by WAAPI (height is applied virtually; WAAPI already set final visuals)
			containerRef.current.getAnimations().forEach((a) => a.cancel());
			innerRef.current.getAnimations().forEach((a) => a.cancel());
			containerRef.current.style.height = "";
			innerRef.current.style.opacity = "";
			animatingRef.current = false;
		}
	};

	const onKeyDown = (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			toggle();
		}
	};

	return (
		<div className={`spec-item ${open ? "is-open" : ""}`}>
			<button
				id={btnId}
				className="spec-item__summary"
				aria-controls={panelId}
				aria-expanded={open}
				onClick={toggle}
				onKeyDown={onKeyDown}
				type="button"
			>
				{title}
				<span aria-hidden className="spec-item__sign" />
			</button>

			<div
				id={panelId}
				role="region"
				aria-labelledby={btnId}
				className="spec-item__content"
				ref={containerRef}
				data-hidden={open ? undefined : ""}
			>
				<div ref={innerRef} className="spec-item__inner">
					{children}
				</div>
			</div>
		</div>
	);
}

/* ---------- Page ---------- */

export default function SpecialtiesPage() {
	// Smooth in-page TOC scroll
	useEffect(() => {
		const toc = document.querySelector(".spec-toc");
		if (!toc) return;
		const onClick = (e) => {
			const a = e.target.closest("a[href^='#']");
			if (!a) return;
			const id = a.getAttribute("href").slice(1);
			const el = document.getElementById(id);
			if (!el) return;
			e.preventDefault();
			el.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest",
			});
		};
		toc.addEventListener("click", onClick);
		return () => toc.removeEventListener("click", onClick);
	}, []);

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
			title: "Mood & Self‑Perception",
			lead: "Clear steps to understand mood patterns and relate to yourself with care.",
			items: [
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
							Many of my clients do not follow a specific spiritual path, but
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
		<section className="block specialties is-collapsible" id="specialties">
			<div className="block__content container">
				<div className="spec-intro" id="how-i-can-support-you">
					<h2>How I can support you</h2>
					<p className="muted">
						Seeking therapy is a courageous step. This work blends
						evidence‑based care with deeper emotional work and, when useful,
						spiritual insight.
					</p>
				</div>

				<nav className="spec-toc" aria-label="On this page">
					<ul className="spec-toc__list" role="list">
						{groups.map((g) => (
							<li key={g.id}>
								<a href={`#${g.id}`}>{g.title}</a>
							</li>
						))}
					</ul>
				</nav>

				<div className="spec-groups">
					{groups.map((group) => (
						<article className="spec-group" id={group.id} key={group.id}>
							<header className="spec-group__header">
								<h3>{group.title}</h3>
								{group.lead && (
									<p className="spec-group__lead muted">{group.lead}</p>
								)}
							</header>

							<div className="spec-accordion">
								{group.items.map((item, i) => (
									<AccordionItem
										key={item.title}
										idBase={`${group.id}-${i}`}
										title={item.title}
									>
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
