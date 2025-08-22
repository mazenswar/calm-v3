import Image from "next/image";
import React from "react";
import diversity from "./assets/diversity.webp";

function DiversityBanner() {
	return (
		<section id="diversity" className="block">
			<div className="block__content container">
				<Image
					src={diversity.src}
					width={258}
					height={258}
					alt="diversity illustration"
				/>

				<h2>
					Committed to inclusion and respect for people of all genders, races,
					ethnicities, and identities.
				</h2>
			</div>
		</section>
	);
}

export default DiversityBanner;
