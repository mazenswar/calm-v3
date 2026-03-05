import Link from "next/link";
import React from "react";
import "./groups__style.scss";

function Groups() {
	return (
		<main id="groups">
			<section className="block">
				<div className="block__content container">
					<h1>Peer Groups</h1>
					<p>Peer groups are for clinicians</p>
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
		<div className="group__card">
			<h3>BIPOC Group</h3>
			<p>Group for BIPOC clinicians</p>
			<Link href="/groups/peer-bipoc">More Info</Link>
		</div>
	);
}

export default Groups;
