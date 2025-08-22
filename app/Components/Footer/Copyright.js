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
					© 2025 CALM Therapy · Site by
					<CustomLink url="https://mazenswar.dev" className="designer-link">
						Mazen Alswar
					</CustomLink>
				</small>
			</div>
		</section>
	);
}

export default Copyright;
