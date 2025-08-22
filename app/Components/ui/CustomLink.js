import Link from "next/link";
import React from "react";

function CustomLink({ url, children, classN, newWindow }) {
	return (
		<Link
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
