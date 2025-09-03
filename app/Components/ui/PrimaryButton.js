import Link from "next/link";
import React from "react";

const url = "https://tanya-singh.clientsecure.me";

function PrimaryButton({ text = "Book a free 15-min call" }) {
	function triggerGtag(e) {
		// Prevent instant navigation so GTM can fire
		e.preventDefault();

		// Push the event
		try {
			window.dataLayer = window.dataLayer || [];
			window.dataLayer.push({
				event: "sp_consult_click",
				button_text: text,
				button_url: url,
			});
		} catch (err) {
			// no-op
		}

		// Give GTM a brief moment to dispatch GA4 request, then navigate
		setTimeout(() => {
			window.location.href = url;
		}, 200); // 150–300ms is typical
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
