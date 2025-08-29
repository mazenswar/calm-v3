// =============================================================
// File: /app/Components/ui/PageToc/Component.js
// Purpose: Reusable sticky TOC block that renders a titled list of in-page links
// Notes: pass items: [{ id, title }], className to reuse page-specific styles
// =============================================================
"use client";
import React from "react";
import SmoothAnchor from "@/app/Components/ui/SmoothAnchor/Component";
import "./style.scss";

export default function PageToc({
	title = "On this page",
	items = [],
	className = "",
	id = "",
	offsetSelector = ".site-header",
}) {
	return (
		<aside
			id={id}
			className={["pagetoc", className].filter(Boolean).join(" ")}
			aria-label={title}
		>
			<nav>
				<h2 className="toc__title">{title}</h2>
				<ul>
					{items.map((t) => (
						<li key={t.id}>
							<SmoothAnchor href={`#${t.id}`} offsetSelector={offsetSelector}>
								{t.title}
							</SmoothAnchor>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
