"use client";

import React, { useEffect, useMemo, useState } from "react";
import { faqGroups } from "./faq-data";
import CustomLink from "../Components/ui/CustomLink";
import Button from "../Components/ui/Button";
import AccordionItem from "../Components/ui/AccordionItem/Component";
import lightBulbSvg from "./assets/the-light-bulb.svg";

import "./style.scss";
import Image from "next/image";

// simple slugifier for anchors
const slugify = (s) =>
	s
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();

function useDebounced(value, ms = 200) {
	const [v, setV] = useState(value);
	useEffect(() => {
		const t = setTimeout(() => setV(value), ms);
		return () => clearTimeout(t);
	}, [value, ms]);
	return v;
}

const FaqPage = () => {
	const [query, setQuery] = useState("");
	const debounced = useDebounced(query, 200);

	// keep full set for TOC; filter for content render
	const filteredGroups = useMemo(() => {
		const q = debounced.trim().toLowerCase();
		if (!q) return faqGroups;
		return faqGroups
			.map((g) => {
				const items = g.items.filter((it) => {
					const hay = `${it.q} ${it.a} ${(it.tags || []).join(
						" "
					)}`.toLowerCase();
					return hay.includes(q);
				});
				return items.length ? { ...g, items } : null;
			})
			.filter(Boolean);
	}, [debounced]);

	// left mini‑nav smooth scroll with header offset
	useEffect(() => {
		const nav = document.querySelector(".faq__toc");
		if (!nav) return;

		const headerOffset = (() => {
			const sticky = document.querySelector(".site-header");
			return sticky ? sticky.getBoundingClientRect().height : 88;
		})();

		const onClick = (e) => {
			const a = e.target.closest('a[href^="#"]');
			if (!a) return;
			const id = a.getAttribute("href").slice(1);
			const target = document.getElementById(id);
			if (!target) return;
			e.preventDefault();

			const top =
				window.pageYOffset +
				target.getBoundingClientRect().top -
				headerOffset -
				12;

			window.scrollTo({ top, behavior: "smooth" });
		};

		nav.addEventListener("click", onClick);
		return () => nav.removeEventListener("click", onClick);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") return;
		const hash = window.location.hash.replace("#", "");
		if (!hash) return;
		const trigger = document.querySelector(
			`[data-acc-id="${hash}"] button, [data-acc-id="${hash}"] [role="button"]`
		);
		if (trigger) {
			setTimeout(() => {
				trigger.click();
				const header = document.querySelector(".site-header");
				const offset = header ? header.getBoundingClientRect().height : 88;
				const target = document.getElementById(hash);
				if (target) {
					const top =
						window.pageYOffset +
						target.getBoundingClientRect().top -
						offset -
						12;
					window.scrollTo({ top, behavior: "smooth" });
				}
			}, 60);
		}
	}, []);

	const toc = useMemo(
		() => faqGroups.map((g) => ({ id: g.id, title: g.title })),
		[]
	);

	return (
		<main id="faq" className="faq">
			{/* ONE unified section */}
			<section className="block">
				<div className="block__content container">
					{/* Header + search */}
					<div className="faq__intro">
						<div className="faq__intro-copy">
							<p className="eyebrow">FAQs</p>
							<h1>Questions people often ask</h1>
							<p className="lead">
								Clear, concise answers about our approach, availability, fees,
								and ketamine‑assisted psychotherapy. If you don’t see your
								question here,{" "}
								<CustomLink url="/contact" classN="link" ariaLabel="Contact us">
									reach out
								</CustomLink>
								.
							</p>

							<div className="faq__search">
								<label htmlFor="faq-search" className="sr-only">
									Search FAQs
								</label>
								<input
									id="faq-search"
									type="search"
									placeholder="Search questions (e.g., fees, insurance, KAP)"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>
							</div>
						</div>

						{/* optional visual placeholder (kept minimal; swap or remove freely) */}
						<figure className="faq__visual" aria-hidden="true">
							<Image
								src={lightBulbSvg}
								alt=""
								className="faq__bulb"
								loading="lazy"
							/>
						</figure>
					</div>

					{/* Layout: sticky toc + content */}
					<div className="faq__layout">
						<aside className="faq__toc" aria-label="FAQ sections">
							<nav>
								<h2 className="toc__title">On this page</h2>
								<ul>
									{toc.map((t) => (
										<li key={t.id}>
											<a href={`#${t.id}`}>{t.title}</a>
										</li>
									))}
								</ul>
							</nav>
						</aside>

						<div className="faq__content">
							{filteredGroups.length === 0 ? (
								<div className="faq__empty">
									<p>
										No results for <strong>{debounced}</strong>. Try a different
										search term, or browse by section.
									</p>
									<Button onClick={() => setQuery("")}>Clear search</Button>
								</div>
							) : (
								filteredGroups.map((group) => (
									<section
										key={group.id}
										id={group.id}
										className="faq-group"
										aria-labelledby={`${group.id}-title`}
									>
										<div className="faq-group__header">
											<h2 id={`${group.id}-title`}>{group.title}</h2>
										</div>
										<div className="faq-accordion">
											{group.items.map((item) => {
												const anchor = item.id || slugify(item.q);
												return (
													<AccordionItem
														key={anchor}
														idBase={anchor}
														title={item.q}
														summaryClassName="faq-item__summary" // optional: keep your current class hooks
													>
														<p
															dangerouslySetInnerHTML={{ __html: item.a }}
															className="answer"
														/>
													</AccordionItem>
												);
											})}
										</div>
									</section>
								))
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default FaqPage;
