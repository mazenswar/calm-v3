import Link from "next/link";
import React from "react";

function CustomLink({ url, children, classN }) {
	return (
		<Link className={"link " + classN} href={url}>
			{children}
		</Link>
	);
}

export default CustomLink;
