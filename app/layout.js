import { Lexend, DM_Serif_Display } from "next/font/google";
import "./styles/index.scss";
import Footer from "./Components/Footer/Component";
import MainNav from "./Components/MainNav/Component";
import NewFooter from "./Components/NewFooter/Component";

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
	title: "CALM Therapy",
	description: "Online therapy designed for depth and growth.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${dmSerif.variable} ${lexend.variable}`}>
				<MainNav />
				{children}

				<NewFooter />
			</body>
		</html>
	);
}
