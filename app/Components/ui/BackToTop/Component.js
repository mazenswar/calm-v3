// File: /app/Components/ui/BackToTop/Component.js
"use client";
import { useEffect, useState } from "react";
import "./style.scss";

export default function BackToTop({ targetId = "kap-toc", threshold = 600 }) {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);

	const handleClick = () => {
		const el = document.getElementById(targetId);
		if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
		else window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (!show) return null;

	return (
		<button
			id="btt"
			type="button"
			className="fabTop"
			aria-label="Back to table of contents"
			onClick={handleClick}
		>
			↑
		</button>
	);
}
