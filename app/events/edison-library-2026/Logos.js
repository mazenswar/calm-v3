import Image from "next/image";
import Link from "next/link";
import React from "react";
import edisonLibraryLogo from "./assets/EdisonPublicLibrary.png";

function Logos() {
	return (
		<div className="logos">
			<Link href="/" target="_blank" rel="noopener noreferrer">
				<Image
					src={"/logo-hr.webp"}
					alt="CALM Therapy Logo"
					aria-label="CALM Therapy Logo"
					priority
					sizes="(max-width: 768px) 100vw, 400px"
					width={300}
					height={300}
				/>
			</Link>
			<a
				href="https://edisonpubliclibrary.org/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Image
					src={edisonLibraryLogo}
					alt="Edison Public Library Logo"
					aria-label="Edison Public Library Logo"
					priority
					sizes="(max-width: 768px) 100vw, 400px"
					width={600}
					height={208}
				/>
			</a>
		</div>
	);
}

export default Logos;
