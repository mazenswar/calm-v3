// File: /components/ShareButton.jsx
"use client";

import { useState } from "react";

export default function ShareButton({ url, title, text }) {
	const [copied, setCopied] = useState(false);

	const handleShare = async () => {
		// If browser supports native share sheet
		if (navigator.share) {
			try {
				console.log("3");
				await navigator.share({ title, text, url });
			} catch (err) {
				// user cancelled, ignore
			}
			return;
		}

		// Fallback: copy to clipboard
		try {
			await navigator.clipboard.writeText(url);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			// very old fallback
			window.prompt("Copy this link:", url);
		}
	};

	return (
		<button type="button" onClick={handleShare} className="share-btn">
			{copied ? "Copied!" : "Share"}
		</button>
	);
}
