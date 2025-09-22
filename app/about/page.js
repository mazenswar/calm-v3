import React from "react";
import About from "./About";

import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.about;

function AboutPage() {
	return <About />;
}

export default AboutPage;
