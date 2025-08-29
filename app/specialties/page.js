import React from "react";
import Specs from "./Specs";

export const metadata = {
	title: "Therapy Specialties | CALM Therapy",
	description:
		"Explore therapy specialties including anxiety, OCD, depression, trauma, and life transitions. Integrative, evidence-based, and holistic care.",
	alternates: { canonical: "https://calmtherapy.center/specialties" },
	openGraph: {
		title: "Therapy Specialties | CALM Therapy",
		description:
			"Comprehensive therapy specialties for adults seeking meaningful, long-term change.",
		url: "https://calmtherapy.center/specialties",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "Therapy Specialties",
			},
		],
	},
};

export default function Meow() {
	return <Specs />;
}
