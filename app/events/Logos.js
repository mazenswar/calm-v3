import Image from "next/image";
import React from "react";
import edisonLibraryLogo from "./edison-library-2026/assets/EdisonPublicLibrary.png";

function Logos() {
	return (
		<div className="logos">
			<Image
				src={"/logo-hr.webp"}
				alt="CALM Therapy Logo"
				aria-label="CALM Therapy Logo"
				priority
				sizes="(max-width: 768px) 100vw, 400px"
				width={300}
				height={300}
			/>

			<Image
				src={edisonLibraryLogo}
				alt="Edison Public Library Logo"
				aria-label="Edison Public Library Logo"
				priority
				sizes="(max-width: 768px) 100vw, 400px"
				width={600}
				height={208}
			/>
		</div>
	);
}

export default Logos;
