import Link from "next/link";
import React from "react";
import "./style.scss";
import Button from "@/app/Components/ui/Button";

function TherapyFees() {
	return (
		<section className="block blockTint" id="home-therapy-fees">
			<div className="block__content container">
				<h2 className="h2">Therapy Fees</h2>
				<p className="text">
					CALM Therapy is a private-pay, out-of-network provider. We offer
					superbills you can submit for potential reimbursement through your
					insurance, depending on your plan.
				</p>
				<table className="feeTable">
					<thead>
						<tr>
							<th>Service</th>
							<th>Rate</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Initial Intake (75 min)</td>
							<td>$420</td>
						</tr>
						<tr>
							<td>Ongoing Session (45 min)</td>
							<td>$250</td>
						</tr>
					</tbody>
				</table>

				<Button
					url="/fees-and-insurance"
					primary={false}
					text="More about fees and insurance"
				/>
			</div>
		</section>
	);
}

export default TherapyFees;
