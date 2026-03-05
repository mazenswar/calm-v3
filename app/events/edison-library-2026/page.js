import React from "react";
import Header from "./Header";
import Details from "./Details";
import Map from "./Map";
import "./edisonpbl.scss";

function EdisonLibrary() {
	return (
		<main id="edisonpbl">
			<Header upcoming={true} />
			<Details />
			<Map />
		</main>
	);
}

export default EdisonLibrary;
