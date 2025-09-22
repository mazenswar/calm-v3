import HomePage from "./HomePage/HomePage";

import { metadata } from "./config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.home;

export default function Home() {
	return <HomePage />;
}
