import Link from "next/link";
import React from "react";

const simplePracticeClientPortal = "https://tanya-singh.clientsecure.me";

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
