import { Lexend, DM_Serif_Display } from "next/font/google";
import "./styles/index.scss";

import MainNav from "./Components/MainNav/Component";
import Footer from "./Components/Footer/Component";
import GTM from "./Components/GTM";
import { metadata } from "./config/metadata.mjs";

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

// metadata
export const generateMetadata = () => metadata.site;

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
