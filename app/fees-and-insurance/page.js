import React from "react";
import InvestmentInsurancePage from "./Investment";
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.feesAndInsurance;

function FeesAndInsurancePage() {
	// return <FeesAndInsurance />;
	return <InvestmentInsurancePage />;
}

export default FeesAndInsurancePage;
