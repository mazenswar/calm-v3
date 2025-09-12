// =========================
// /app/HomePage/HomePage.js
// Example of using the module (only change is importing module styles)
// =========================

import Specialties from "./specialties/Component";
import TherapyFees from "./therapy-fees/Component";
import Hero from "./Hero/Component";
import ApproachSection from "./our-approach/Component";

export default function HomePage() {
	return (
		<main id="home__page">
			<Hero />
			<Specialties />
			<ApproachSection />
			{/* <TherapyFees /> */}
		</main>
	);
}
