import React from "react";
import "./styles/oon.scss";
import CopyButton from "@/app/Components/ui/CopyButton/Component";

function OON() {
	return (
		<section className="block out-of-network-benefits" id="fees__oon">
			<div className="block__content container">
				<h2>How Out-of-Network Benefits Work</h2>

				<p>
					Many PPO insurance plans include {"out-of-network"} (OON) mental
					health benefits. If you have these benefits, your insurance can
					reimburse you for a significant share of your session fee, often
					between 40% and 80%. This can make your actual cost similar to, or
					even less than, high in-network copays, while still giving you access
					to specialized, integrative care.
				</p>

				<div className="insurance-questions">
					<h3>First: Check Your Benefits</h3>
					<p>
						Before starting therapy, call your insurance to understand your
						coverage. Ask these questions:
					</p>
					<ul>
						<CopyButton>
							<li>
								What are my out-of-network benefits for mental health services?
							</li>
							<li>
								What percentage do you cover for CPT code 90834 (individual
								psychotherapy) and other common CPT codes? (see below)
							</li>
							<li>
								What{"'"}s my out-of-network deductible, and how much have I met
								this year?
							</li>
							<li>Is there a session limit for mental health services?</li>

							<li>
								<strong>Common CPT codes:</strong> 90791 (Intake), 90837 (60
								min), 90834 (45 min), 90832 (30 min)
							</li>
						</CopyButton>
					</ul>
				</div>

				<div className="reimbursement__steps">
					<h3>Then: Getting Reimbursed (Step-by-Step)</h3>
					<ol>
						<li>
							<strong>You pay for your session:</strong> All payments are
							handled securely through our client portal (SimplePractice). You
							{"'"}ll keep a credit, debit, or HSA/FSA card on file, which will
							be charged after each session.
						</li>
						<li>
							<strong>We provide everything you need:</strong> After each
							session, we give you a detailed superbill with all the information
							your insurance requires.
						</li>
						<li>
							<strong>You submit for reimbursement:</strong> Upload the
							superbill to your insurance website or mail it in. Most clients
							get reimbursed within 2-4 weeks.
						</li>
						<li>
							<strong>Insurance sends you money back:</strong> You receive a
							check or direct deposit for your covered amount.
						</li>
					</ol>
				</div>
			</div>
		</section>
	);
}

export default OON;
