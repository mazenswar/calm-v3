import Link from "next/link";
import React from "react";

function Button({
	text,
	url = simplePracticeClientPortal,
	handleClick = false,
}) {
	{
		return handleClick ? (
			<Link href={url} className={"btnSecondary"} onClick={handleClick}>
				{text}
			</Link>
		) : (
			<Link href={url} className={"btnSecondary"}>
				{text}
			</Link>
		);
	}
}

export default Button;
