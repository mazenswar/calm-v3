import { Lexend, DM_Serif_Display } from "next/font/google";
import "./styles/index.scss";

import MainNav from "./Components/MainNav/Component";
import Footer from "./Components/Footer/Component";
import GTM from "./Components/GTM";

const lexend = Lexend({
	subsets: ["latin"],
	weight: ["300", "400", "500", "700"],
	variable: "--font-lexend",
	display: "swap",
});

const dmSerif = DM_Serif_Display({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-serif",
	display: "swap",
});

export const metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://calmtherapy.center"
	),

	title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
	description:
		"Private-pay therapy for adults seeking growth and transformation. East Coast based, licensed in NY, NJ, PA, and available in 43 U.S. states and jurisdictions.",
	alternates: { canonical: "https://calmtherapy.center/" },
	openGraph: {
		title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
		description:
			"Therapy that integrates evidence-based care with holistic growth. Licensed in NY, NJ, PA, and available in 43 states.",
		url: "https://calmtherapy.center/",
		images: [
			{ url: "/social/ss.webp", width: 1200, height: 630, alt: "CALM Therapy" },
		],
	},

	manifest: "/manifest.json",
	// Icons for all contexts
	icons: {
		icon: [
			{ url: "/favicon.ico" }, // legacy
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
		// Android/other extra icons
		other: [
			{ rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
			{ rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
			// Safari pinned tab (monochrome SVG). If you have it:
			{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7f5a83" },
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${dmSerif.variable} ${lexend.variable}`}>
				<GTM />
				<MainNav />
				{children}

				<Footer />
			</body>
		</html>
	);
}
