import React from "react";

import "./style.scss";
import DiversityBanner from "./DiversityBanner";
import ContactInfoBanner from "./ContactInfoBanner";
import Copyright from "./Copyright";

function Footer() {
	return (
		<footer>
			<DiversityBanner />
			<ContactInfoBanner />
			<Copyright />
		</footer>
	);
}

export default Footer;
