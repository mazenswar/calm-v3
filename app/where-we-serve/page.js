import React from "react";
import "./where-where-serve.scss";
import WwsHero from "./WwsHero";
import States from "./States";
import { serviceAreaSchema } from "./service-area-schema";

function WhereWeServe() {
	return (
		<main id="where__we-serve">
			<WwsHero />
			<States />
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceAreaSchema) }}
			/>
		</main>
	);
}

export default WhereWeServe;
