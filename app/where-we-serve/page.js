import React from "react";
import WhereWeServe from "./WhereWeServe";

export const metadata = {
	title: "Where We Serve | CALM Therapy",
	description:
		"CALM Therapy is East Coast based, licensed in NY, NJ, PA, and available in 43 U.S. states and jurisdictions through PSYPACT.",
	alternates: { canonical: "https://calmtherapy.center/where-we-serve" },
	openGraph: {
		title: "Where We Serve | CALM Therapy",
		description:
			"East Coast based and serving 43 U.S. states and jurisdictions through PSYPACT.",
		url: "https://calmtherapy.center/where-we-serve",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "Where We Serve",
			},
		],
	},
};

function WhereWeServePage() {
	return <WhereWeServe />;
}

export default WhereWeServePage;
