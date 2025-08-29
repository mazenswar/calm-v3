import React from "react";
import Faq from "./faq";

export const metadata = {
	title: "FAQ | CALM Therapy",
	description:
		"Find clear answers to common questions about therapy, fees, and our East Coast-based services in 43 states.",
	alternates: { canonical: "https://calmtherapy.center/faq" },
	openGraph: {
		title: "FAQ | CALM Therapy",
		description:
			"Answers about therapy specialties, fees, and how we work with clients.",
		url: "https://calmtherapy.center/faq",
		images: [{ url: "/social/ss.webp", width: 1200, height: 630, alt: "FAQ" }],
	},
};

function FaqPage() {
	return <Faq />;
}

export default FaqPage;
