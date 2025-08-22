import Link from "next/link";
import React from "react";
import { specialties } from "./data";
import "./style.scss";

function Specialties() {
	return (
		<section className="block">
			<div className="block__content container">
				<h2 className="h2">Specialties</h2>
				<ul className={"specialty__grid"}>
					{specialties.map((sp) => (
						<li key={sp.id} className={"specialty__card"}>
							<Link href={sp.slug}>{sp.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Specialties;
