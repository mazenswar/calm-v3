import React from "react";
import "./styles/private_pay_value.scss";

function PrivatePayValue() {
	return (
		<section className="block value" id="fees__ppv">
			<div className="block__content container">
				<h2 className="value__heading">Why Private Pay?</h2>

				<div className="value-grid">
					<div className="value-card">
						<h3 className="value-card__title">
							Integrative, Evidence-Based Care
						</h3>
						<p className="value-card__text">
							We thoughtfully combine multiple therapeutic modalities and draw
							from both Western and Eastern traditions to meet your unique
							needs, focusing on the whole person for meaningful, lasting
							change.
						</p>
					</div>

					<div className="value-card">
						<h3 className="value-card__title">Clinical Freedom</h3>
						<p className="value-card__text">
							As a private-pay practice, we can offer the care you actually
							need, without rigid treatment frameworks or diagnosis-first
							requirements often tied to insurance.
						</p>
					</div>

					<div className="value-card">
						<h3 className="value-card__title">
							Designed for High-Functioning Adults
						</h3>
						<p className="value-card__text">
							Care tailored for stable, self-aware adults seeking deeper healing
							and meaningful transformation.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PrivatePayValue;
