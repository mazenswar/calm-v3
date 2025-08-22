import Link from "next/link";
import React from "react";

const simplePracticeClientPortal = "";

function Button({
	text = "Book a free 15-min call",
	primary = true,
	url = simplePracticeClientPortal,
}) {
	return (
		<Link href={url} className={primary ? "btnPrimary" : "btnSecondary"}>
			{text}
		</Link>
	);
}

export default Button;
