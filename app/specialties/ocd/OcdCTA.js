import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import React from "react";

function OcdCTA() {
	return (
		<section className="ocd-therapy block center cta">
			<div className="container block__content">
				<h3>Ready to Take the Next Step?</h3>
				<p>
					Recovery is possible. If you’re interested in learning more or want to
					discuss your goals, schedule a consult or reach out to start the
					conversation.
				</p>
				<PrimaryButton text="Schedule a Consult" />
			</div>
		</section>
	);
}

export default OcdCTA;
