import React from "react";
import About from "./About";

export const metadata = {
	title: "About CALM Therapy",
	description:
		"Learn about CALM Therapy, our mission, and our East Coast-based practice serving 43 U.S. states and jurisdictions.",
	alternates: { canonical: "https://calmtherapy.center/about" },
	openGraph: {
		title: "About CALM Therapy",
		description:
			"Discover our mission and approach — modern psychology, timeless wisdom.",
		url: "https://calmtherapy.center/about",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "About CALM Therapy",
			},
		],
	},
};

function AboutPage() {
	return <About />;
}

export default AboutPage;
