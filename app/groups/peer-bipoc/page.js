import CustomLink from "@/app/Components/ui/CustomLink";
import React from "react";
import "./peer-bipoc.scss";

function PeerBipoc() {
	return (
		<main id="peer-bipoc-group">
			<section className="block">
				<div className="block__content container">
					<h1> BIPOC Group</h1>
					<p>
						BIPOC Peer Consultation Group This is a small, monthly virtual peer
						consultation group for BIPOC clinicians (clinicians of color) based
						on the East Coast who work with anxiety disorders, OCD, and complex
						trauma.{" "}
					</p>
					<p>
						The group is a 75-minute collegial space, not supervision, focused
						on case consultation and thoughtful discussion of the clinical and
						cultural dimensions that can arise in this work. It is intended to
						support connection, learning, and the exchange of diverse
						perspectives among clinicians.{" "}
					</p>
					<p>
						This is a no-fee group with limited spots in order to maintain a
						space that allows for meaningful discussion.
					</p>{" "}
					<p>
						If you are interested in joining, please complete{" "}
						<CustomLink url="https://forms.gle/kGVUrDU9Zay2jeSp8">
							this Google form
						</CustomLink>
						.
					</p>
				</div>
			</section>
		</main>
	);
}

export default PeerBipoc;
