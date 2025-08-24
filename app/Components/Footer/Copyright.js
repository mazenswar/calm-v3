import React from "react";
import CustomLink from "../ui/CustomLink";

function Copyright() {
	return (
		<section className="copyright block">
			<div className="block__content container">
				<CustomLink url="/privacy-policy" classN="privacy__policy">
					Privacy Policy
				</CustomLink>
				<small>
					© 2025 CALM Therapy ·
					<CustomLink url="https://mazenswar.dev" className="designer-link">
						site credit
					</CustomLink>
				</small>
			</div>
		</section>
	);
}

export default Copyright;
