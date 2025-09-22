import React from "react";
import Faq from "./Faq";
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.faq;

function FaqPage() {
	return <Faq />;
}

export default FaqPage;
