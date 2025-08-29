import React from "react";
import FeesAndInsurance from "./feesAndInsurance";

export const metadata = {
	title: "Fees & Insurance | CALM Therapy",
	description:
		"Transparent, private-pay therapy with out-of-network insurance options. Learn about fees and payment at CALM Therapy.",
	alternates: { canonical: "https://calmtherapy.center/fees-and-insurance" },
	openGraph: {
		title: "Fees & Insurance | CALM Therapy",
		description:
			"Private-pay therapy designed for flexibility, with out-of-network options available.",
		url: "https://calmtherapy.center/fees-and-insurance",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "Fees and Insurance",
			},
		],
	},
};

function FeesAndInsurancePage() {
	return <FeesAndInsurance />;
}

export default FeesAndInsurancePage;
