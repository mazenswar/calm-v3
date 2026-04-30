import React from "react";
import Header from "./Header";
import Details from "./Details";
import Map from "./Map";
import "./edisonpbl.scss";
import { metadata } from "../../config/metadata.mjs";

export const generateMetadata = () => metadata.pages.understandingAnxiety;

function EdisonLibrary() {
	return (
		<main id="edisonpbl">
			<Header upcoming={false} />
			<Details />
			<Map />
		</main>
	);
}

export default EdisonLibrary;
