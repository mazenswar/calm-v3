import React from "react";
import "./styles/payment_options.scss";

function PaymentOptions() {
	return (
		<section className="block payment">
			<div className="block__content container">
				<h2>Additional Payment Options</h2>
				<ul>
					<li>
						<strong>HSA & FSA:</strong> Therapy qualifies as a medical expense,
						so you can use these pre-tax dollars.
					</li>
					<li>
						<strong>EAP (Employee Assistance Programs):</strong> Some employers
						offer EAP benefits that can help cover therapy costs. Check with
						your HR department.
					</li>
				</ul>
			</div>
		</section>
	);
}

export default PaymentOptions;
