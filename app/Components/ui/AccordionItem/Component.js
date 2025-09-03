"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";

/* ---------- Reduced motion helper ---------- */
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

/* ---------- Height + opacity animation ---------- */
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

	const from = container.offsetHeight;

	// compute target height by toggling hidden flag temporarily
	const wasHidden = container.hasAttribute("data-hidden");
	if (opening) container.removeAttribute("data-hidden");
	else container.setAttribute("data-hidden", "");

	const to = opening ? inner.getBoundingClientRect().height : 0;

	// revert back before animating so visuals start from current state
	if (opening !== wasHidden) {
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
		{ duration: dur, easing, fill: "forwards" }
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

/* ---------- Reusable AccordionItem ---------- */
export default function AccordionItem({
	idBase,
	title,
	children,
	defaultOpen = false,
	onToggle, // optional callback(nextOpen: boolean)
	summaryClassName = "", // allow minor per-page styling
	id = "",
}) {
	const btnId = `${idBase}-btn`;
	const panelId = `${idBase}-panel`;
	const [open, setOpen] = useState(!!defaultOpen);

	const containerRef = useRef(null); // height animated element
	const innerRef = useRef(null); // opacity animated wrapper
	const reduce = usePrefersReducedMotion();
	const animatingRef = useRef(false);

	useEffect(() => {
		// ensure closed items are hidden for correct measurement
		if (!open) containerRef.current?.setAttribute("data-hidden", "");
	}, []);

	const setHiddenAttr = (isHidden) => {
		if (isHidden) containerRef.current?.setAttribute("data-hidden", "");
		else containerRef.current?.removeAttribute("data-hidden");
	};

	const commitState = (nextOpen) => {
		setOpen(nextOpen);
		setHiddenAttr(!nextOpen);
		onToggle?.(nextOpen);
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
		// reflect expanded state immediately for responsiveness
		setOpen(opening);

		try {
			await animateHeight({
				container: containerRef.current,
				inner: innerRef.current,
				opening,
			});
			setHiddenAttr(!opening);
			onToggle?.(opening);
		} finally {
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
		<div
			className={`accordion-item ${open ? "is-open" : ""}`}
			id={id ? id : null}
		>
			<button
				id={btnId}
				className={`accordion-item__summary ${summaryClassName}`}
				aria-controls={panelId}
				aria-expanded={open}
				onClick={toggle}
				onKeyDown={onKeyDown}
				type="button"
			>
				<span className="accordion-item__title">{title}</span>
				<span aria-hidden className="accordion-item__sign" />
			</button>

			<div
				id={panelId}
				role="region"
				aria-labelledby={btnId}
				className="accordion-item__content"
				ref={containerRef}
				data-hidden={open ? undefined : ""}
			>
				<div ref={innerRef} className="accordion-item__inner">
					{children}
				</div>
			</div>
		</div>
	);
}
