import Link from "next/link";
import React from "react";

function CustomLink({ url, children, classN, newWindow, ariaLabel }) {
	return (
		<Link
			aria-label={ariaLabel ? ariaLabel : ""}
			className={"link " + classN}
			href={url}
			target={newWindow ? "_blank" : ""}
			rel={newWindow ? "noopener noreferrer" : ""}
		>
			{children}
		</Link>
	);
}

export default CustomLink;
