import React from "react";
import Specs from "./Specs";
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.specialties;

export default function SpecialtiesPage() {
	return <Specs />;
}
