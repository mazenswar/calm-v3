// =============================================================
// File: /app/faq/Faq.js (updated to use the new components)
// Changes: remove in-file TOC click handler; render <PageToc> with the same items
// =============================================================
"use client";
import React, { useEffect, useMemo, useState } from "react";
import { faqGroups } from "./faq-data";
import CustomLink from "../Components/ui/CustomLink";
import Button from "../Components/ui/Button";
import AccordionItem from "../Components/ui/AccordionItem/Component";
import PageToc from "@/app/Components/ui/PageToc/Component";
import lightBulbSvg from "./assets/the-light-bulb.svg";
import Image from "next/image";
import "./style.scss";

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

export default function Faq() {
	const [query, setQuery] = useState("");
	const debounced = useDebounced(query, 200);

	const filteredGroups = useMemo(() => {
		const q = debounced.trim().toLowerCase();
		if (!q) return faqGroups;
		return faqGroups
			.map((g) => {
				const items = g.items.filter((it) => {
					const hay =
						`${it.q} ${it.a} ${(it.tags || []).join(" ")}`.toLowerCase();
					return hay.includes(q);
				});
				return items.length ? { ...g, items } : null;
			})
			.filter(Boolean);
	}, [debounced]);

	// Open the item if page loads with a #hash
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
			}, 60);
		}
	}, []);

	const toc = useMemo(
		() => faqGroups.map((g) => ({ id: g.id, title: g.title })),
		[]
	);

	return (
		<main id="faq" className="faq">
			<section className="block">
				<div className="block__content container">
					<div className="faq__intro">
						<div className="faq__intro-copy">
							<p className="eyebrow">FAQs</p>
							<h1>Questions people often ask</h1>
							<p className="lead">
								Clear, concise answers about our approach, availability, fees,
								and ketamine‑assisted psychotherapy. If you don’t see your
								question here, {""}
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

						<figure className="faq__visual" aria-hidden="true">
							<Image
								src={lightBulbSvg}
								alt=""
								className="faq__bulb"
								loading="lazy"
							/>
						</figure>
					</div>

					<div className="faq__layout">
						{/* Reusable TOC; keep page class for existing styles */}
						<PageToc title="On this page" items={toc} className="faq__toc" />

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
														summaryClassName="faq-item__summary"
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
}
