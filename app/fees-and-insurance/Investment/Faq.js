"use client";

import AccordionItem from "../../Components/ui/AccordionItem/Component";
import "./styles/faq.scss";

const faqItems = [
	{
		id: "insurance-coverage",
		q: "How do I know if my insurance covers out-of-network therapy?",
		a: "Call the member services number on your insurance card and ask the specific questions listed above, including whether pre-authorization is required. This conversation will give you the clearest picture of your benefits.",
	},
	{
		id: "reimbursement-timeline",
		q: "How long does it take to get reimbursed?",
		a: "Online submissions are usually processed within 2-4 weeks, while mailed claims can take longer. Each plan has different timeframes, so your insurance can give you more specific expectations.",
	},
	{
		id: "submission-process",
		q: "How do I submit my superbill for reimbursement?",
		a: "Most insurers let you upload your superbill through their member portal and fill out a simple form. If you prefer mailing, you'll need to include your insurer's claim form. We'll provide detailed superbills with everything you need.",
	},
	{
		id: "claim-denied",
		q: "What if my insurance denies my claim?",
		a: "Check your Explanation of Benefits first to see the reason for denial. Often it's a simple issue like a code or date that can be corrected and resubmitted.",
	},
	{
		id: "deductible-concerns",
		q: "What if I haven't met my deductible yet?",
		a: "Your therapy payments count toward your out-of-network deductible. Once you meet it, your plan begins reimbursing its percentage. Even before that, you're building toward future reimbursement.",
	},
	{
		id: "payment-process",
		q: "How does payment work?",
		a: "We keep a credit card securely on file through our patient portal and charge it after each session. You'll complete a one-time authorization form during intake to set this up.",
	},
	{
		id: "no-out-network-benefits",
		q: "What if my plan doesn't have out-of-network benefits?",
		a: "You can still use HSA/FSA accounts. We're also happy to discuss sliding scale options during your consultation to make therapy accessible.",
	},
];

export default function FAQSection() {
	return (
		<section className="block faq" id="fees__faq">
			<div className="block__content container">
				<h2>Questions You May Have</h2>
				<div className="faq-items">
					{faqItems.map((item) => (
						<AccordionItem
							key={item.id}
							idBase={item.id}
							title={item.q}
							summaryClassName="faq-item__summary"
						>
							<p
								dangerouslySetInnerHTML={{ __html: item.a }}
								className="faq-item__answer"
							/>
						</AccordionItem>
					))}
				</div>
			</div>
		</section>
	);
}
