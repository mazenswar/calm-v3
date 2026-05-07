import Link from "next/link";
import React from "react";
import "./groups__style.scss";

function Groups() {
	return (
		<main id="groups">
			<section className="block">
				<div className="block__content container">
					<h1>Peer Groups</h1>
					<p>These groups are intended for clinicians only</p>
					<div className="groups__container">
						<GroupCard />
					</div>
				</div>
			</section>
		</main>
	);
}

function GroupCard() {
	return (
		<Link href="/peer-groups/bipoc" className="group__card">
			<h3>BIPOC Group</h3>
			<p>
				a small, monthly virtual peer consultation group for BIPOC clinicians
				(clinicians of color) based on the East Coast who work with anxiety
				disorders, OCD, and complex trauma.
			</p>
		</Link>
	);
}

export default Groups;
