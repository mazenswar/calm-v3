// =============================================================
// File: /app/Components/ui/SmoothAnchor/Component.js
// Purpose: Reusable in-page anchor link with smooth scroll + header offset
// =============================================================
"use client";
import React from "react";

function getHeaderOffset(selector = ".site-header", fallback = 88) {
	if (typeof document === "undefined") return fallback;
	const el = document.querySelector(selector);
	return el ? el.getBoundingClientRect().height : fallback;
}

export default function SmoothAnchor({
	href,
	children,
	offsetSelector = ".site-header",
	extraOffset = 12,
	onClick,
	...rest
}) {
	const handleClick = (e) => {
		// only intercept same-page hash links
		const isHash = typeof href === "string" && href.startsWith("#");
		if (!isHash) {
			onClick?.(e);
			return;
		}

		const id = href.slice(1);
		const target = document.getElementById(id);
		if (!target) {
			onClick?.(e);
			return;
		}

		e.preventDefault();
		const header = getHeaderOffset(offsetSelector);
		const top =
			window.pageYOffset +
			target.getBoundingClientRect().top -
			header -
			extraOffset;

		window.scrollTo({ top, behavior: "smooth" });
		onClick?.(e);
	};

	return (
		// eslint-disable-next-line jsx-a11y/anchor-is-valid
		<a href={href} onClick={handleClick} {...rest}>
			{children}
		</a>
	);
}
