"use client";
import { useState } from "react";

import "./style.scss";

export default function CopyButton({ children }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			const text = normalizeText(children);
			await navigator.clipboard.writeText(text);
			setCopied(true);
			setTimeout(() => setCopied(false), 1200);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};

	const normalizeText = (node) => {
		if (typeof node === "string") return node.trim();
		if (Array.isArray(node)) return node.map(normalizeText).join("\n");
		if (node?.type === "li" || node?.type === "h3")
			return normalizeText(node.props.children) + "\n";
		if (node?.props?.children) return normalizeText(node.props.children);
		return "";
	};

	return (
		<div className="copy-container">
			{children}
			<button className="copy-button" onClick={handleCopy}>
				{copied ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--brand-1)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-check-icon"
					>
						<path d="M20 6 9 17l-5-5" />
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="var(--brand-1)"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-copy-icon"
					>
						<rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
						<path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
					</svg>
				)}
			</button>
		</div>
	);
}
