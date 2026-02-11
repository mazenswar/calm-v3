import React from "react";
import CommunitySpotIntro from "./CommunitySpotIntro";
import CommunitySpotStatus from "./CommunitySpotStatus";
import CommunitySpotOffering from "./CommunitySpotOffering";
import CommunitySpotFit from "./CommunitySpotFit";
import CommunitySpotProcess from "./CommunitySpotProcess";
import CommunitySpotExpectations from "./CommunitySpotExpectations";
import "./community.scss";
import { metadata } from "../config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.communitySpot;

// ============================================
// CONFIG
// ============================================
const IS_SPOT_OPEN = false; // Change to false when spot is filled
const FORM_URL = "https://forms.gle/E6svnu3LKUuJ9LgA6";

// ============================================
// Main Page Component
// ============================================
export default function CommunitySpotPage() {
	return (
		<main id="community-spot">
			<CommunitySpotIntro />
			<CommunitySpotStatus isOpen={IS_SPOT_OPEN} formUrl={FORM_URL} />
			<CommunitySpotOffering />
			<CommunitySpotFit />
			<CommunitySpotProcess />
			<CommunitySpotExpectations />
		</main>
	);
}
