import React from "react";
import WhereWeServe from "./WhereWeServe";
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.whereWeServe;

function WhereWeServePage() {
	return <WhereWeServe />;
}

export default WhereWeServePage;
