// File: /app/investment-insurance/page.js
"use client";

import PageToc from "../Components/ui/PageToc/Component";
import Contact from "./Investment/Contact";
import FAQSection from "./Investment/Faq";
import Hero from "./Investment/Hero";
import OON from "./Investment/OON";
import PrivatePayValue from "./Investment/PrivatePayValue";
import SessionInvestment from "./Investment/SessionInvestment";
import "./investment.scss";

export default function InvestmentInsurancePage() {
	return (
		<main id="investment-insurance">
			<div className="toc__container">
				<PageToc
					title="On this page"
					items={[
						{ id: "fees__hero", title: "Intro" },
						{ id: "fees__ppv", title: "Why Private Pay?" },
						{ id: "fees__inv", title: "Session Cost" },
						{ id: "fees__oon", title: "Out of Network Benefits" },
						{ id: "fees__faq", title: "Common Questions" },
						{ id: "fees__cta", title: "Next Steps" },
					]}
					className="fees__toc"
					id="fees__toc"
				/>
			</div>
			<div className="content">
				<Hero />

				<PrivatePayValue />

				<SessionInvestment />

				<OON />

				<FAQSection />

				<Contact />
			</div>
		</main>
	);
}
