"use client";
import Link from "next/link";
import React from "react";

const url = "https://tanya-singh.clientsecure.me";

function PrimaryButton({ text = "Book a free 15-min call" }) {
	function triggerGtag() {
		if (typeof window !== "undefined") {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "consult_click",
				button_text: text,
				button_url: url,
			});
		}
	}

	return (
		<Link
			href={url}
			id="booking-button"
			className="btnPrimary"
			onClick={triggerGtag}
		>
			{text}
		</Link>
	);
}

export default PrimaryButton;
