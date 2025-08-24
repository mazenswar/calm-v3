import Link from "next/link";
import React from "react";
import "./style.scss";
import Button from "@/app/Components/ui/Button";

function TherapyFees() {
	return (
		<section className="block blockTint" id="home-therapy-fees">
			<div className="block__content container">
				<h2 className="h2">Investing in Therapy</h2>
				<div className="text">
					<p>
						Therapy is a meaningful commitment of time, energy, and care. Our
						fees reflect the depth of training and presence we bring to every
						session.
					</p>
					<p>
						Real change also asks for consistency. Therapy is most effective
						when clients invest not only financially, but in showing up
						regularly and engaging fully in the process.
					</p>
					<p>
						CALM Therapy is a private-pay practice. We do not accept insurance
						directly, but many clients use out-of-network benefits for partial
						reimbursement. Learn more about how that works on our Fees &amp;
						Insurance page.
					</p>
				</div>

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
