import Link from "next/link";
import React from "react";

const simplePracticeClientPortal = "https://tanya-singh.clientsecure.me";

function triggerGtag() {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: "consult_click",
		button_text: "Schedule a free consult",
		button_url: "https://tanya-singh.simplepractice.com",
	});
}

function Button({
	text = "Book a free 15-min call",
	primary = true,
	url = simplePracticeClientPortal,
	handleClick = false,
}) {
	{
		return handleClick ? (
			<Link
				href={url}
				className={primary ? "btnPrimary" : "btnSecondary"}
				id={primary ? "booking-button" : null}
				onClick={handleClick}
			>
				{text}
			</Link>
		) : (
			<Link
				href={url}
				className={primary ? "btnPrimary" : "btnSecondary"}
				id={primary ? "booking-button" : null}
			>
				{text}
			</Link>
		);
	}
}

export default Button;
