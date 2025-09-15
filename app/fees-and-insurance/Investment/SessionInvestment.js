import React from "react";
import "./styles/session_investment.scss";

const sessions = [
	{
		label: "Ongoing 45 min (90834)",
		fee: 250,
		reimbursement: "50–80 %",
	},
	{
		label: "Intake 75 min (90791)",
		fee: 420,
		reimbursement: "60–80 %",
	},
];

function SessionInvestment() {
	return (
		<section className="sessions" id="fees__inv">
			<div className="container">
				<h2>Session Cost</h2>

				<p className="sessions__intro">
					The fees below reflect standard rates. Most clients receive
					<strong> out-of-network reimbursement </strong> from their PPO plan,
					so the actual cost to you is usually lower than the listed fee.
				</p>

				<div className="sessions__list">
					{sessions.map(({ label, fee, reimbursement }) => {
						const [minPct, maxPct] = reimbursement
							.replace(/[ %]/g, "")
							.split("–")
							.map(Number);
						const maxNet = Math.round(fee * (1 - minPct / 100));
						const minNet = Math.round(fee * (1 - maxPct / 100));

						return (
							<div key={label} className="sessions__item">
								<h3 className="sessions__label">{label}</h3>
								<div className="sessions__row">
									<span className="sessions__title">Standard fee:</span>
									<span>${fee}</span>
								</div>
								<div className="sessions__row">
									<span className="sessions__title">
										Typical PPO reimbursement*:
									</span>
									<span>{reimbursement}</span>
								</div>
								<div className="sessions__row">
									<span className="sessions__title">Estimated net cost:</span>
									<span>
										${minNet} – ${maxNet}
									</span>
								</div>
							</div>
						);
					})}
				</div>

				<p className="sessions__disclaimer muted">
					*Based on recent Explanation of Benefits (EOBs) from Aetna, Cigna,
					Horizon BCBS, and Optum in NY, NJ, and PA. Your plan may differ. A
					Good-Faith Estimate is available upon request under the No Surprises
					Act.
				</p>
			</div>
		</section>
	);
}

export default SessionInvestment;
