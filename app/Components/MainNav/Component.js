// File: /components/nav/MainNav.jsx
"use client";
import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.scss";
import Button from "../ui/Button";
import PrimaryButton from "../ui/PrimaryButton";

/**
 * Keep desktop visuals. Fix mobile:
 * - No stray “Menu” text
 * - 3-bar burger
 * - Mobile submenus closed by default; first tap opens reliably
 * - Close menu on any link click
 * - ESC closes and returns focus to burger
 * - Collapse to burger below lg
 */
export default function MainNav() {
	const [openMobile, setOpenMobile] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const menuId = useId();
	const burgerRef = useRef(null);

	// Lock page scroll when mobile panel is open
	useEffect(() => {
		const cls = "nav-open";
		const root = document.documentElement;
		if (openMobile) root.classList.add(cls);
		else root.classList.remove(cls);
		return () => root.classList.remove(cls);
	}, [openMobile]);

	// Close on hash changes (best-effort)
	useEffect(() => {
		const handler = () => setOpenMobile(false);
		window.addEventListener("hashchange", handler);
		return () => window.removeEventListener("hashchange", handler);
	}, []);

	// Close on ESC and focus burger
	useEffect(() => {
		if (!openMobile) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpenMobile(false);
				setOpenDropdown(null);
				requestAnimationFrame(() => burgerRef.current?.focus());
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [openMobile]);

	// Close everything on link click
	const handleLinkClick = () => {
		setOpenMobile(false);
		setOpenDropdown(null);
	};

	// Toggle burger; always reset submenu state so first tap works
	const toggleBurger = () => {
		setOpenDropdown(null);
		setOpenMobile((v) => !v);
	};

	// Your exact labels/links
	const nav = [
		{
			label: "Therapy Services",
			href: "/services",
			items: [
				{ label: "Specialties", href: "/specialties" },
				{
					label: "Ketamine-Assisted Psychotherapy (KAP)",
					href: "/ketamine-assisted-psychotherapy",
				},
			],
		},
		{ label: "Fees & Insurance", href: "/fees-and-insurance" },
		{ label: "About", href: "/about" },
		{
			label: "Resources",
			href: "/resources",
			items: [
				{ label: "Blog", href: "/blog" },
				{ label: "FAQ", href: "/faq" },
				{ label: "Where We Serve", href: "/where-we-serve" },
			],
		},
	];

	return (
		<header className={`mainnav ${openMobile ? "is-open" : ""}`}>
			<div className="container mainnav__inner">
				<Link
					href="/"
					className="mainnav__logo"
					aria-label="CALM Therapy home"
					onClick={handleLinkClick}
				>
					<Image
						src="/logo-hr.webp"
						alt="CALM Therapy"
						width={140}
						height={28}
					/>
				</Link>

				<button
					ref={burgerRef}
					className="mainnav__burger"
					aria-expanded={openMobile}
					aria-controls={menuId}
					aria-label="Toggle menu"
					onClick={toggleBurger}
				>
					<span />
					<span />
					<span />
				</button>

				<nav id={menuId} className="mainnav__nav" aria-label="Primary">
					<ul className="mainnav__list">
						{nav.map((item) => {
							const isOpen = openDropdown === item.label;
							return (
								<li
									key={item.label}
									className={`mainnav__item ${isOpen ? "has-open" : ""}`}
								>
									{item.items ? (
										<div className="mainnav__dropdownWrap">
											<button
												type="button"
												className="mainnav__toplink"
												aria-haspopup="menu"
												aria-expanded={isOpen}
												onClick={() =>
													setOpenDropdown((cur) =>
														cur === item.label ? null : item.label
													)
												}
											>
												{item.label}
												<svg
													className="mainnav__caret"
													viewBox="0 0 20 20"
													aria-hidden
												>
													<path
														d="M5 7l5 6 5-6"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
													/>
												</svg>
											</button>
											<div
												className={`mainnav__dropdown ${
													isOpen ? "is-open" : ""
												}`}
												role="menu"
											>
												{item.items.map((sub) => (
													<Link
														key={sub.href}
														href={sub.href}
														className="mainnav__dropdownLink"
														role="menuitem"
														onClick={handleLinkClick}
													>
														{sub.label}
													</Link>
												))}
											</div>
										</div>
									) : (
										<Link
											href={item.href}
											className="mainnav__toplink"
											onClick={handleLinkClick}
										>
											{item.label}
										</Link>
									)}
								</li>
							);
						})}
					</ul>

					<div className="mainnav__cta">
						<PrimaryButton text="book" />
					</div>
				</nav>
			</div>
		</header>
	);
}
