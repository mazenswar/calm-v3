// ============================================
// CommunitySpotOffering

import Link from "next/link";

// ============================================
export default function CommunitySpotOffering() {
	return (
		<section
			className="block community-spot-offering"
			id="community-spot__offering"
		>
			<div className="block__content">
				<h2>What{"'"}s Included</h2>
				<ul>
					<li>
						14 sessions with,{" "}
						<Link href="/about#meet-the-founder" className="link">
							Dr. Tanya Singh
						</Link>
						, a PhD-level licensed clinical psychologist
					</li>
					<li>Sessions are 45 minutes, typically scheduled weekly</li>
					<li>
						The first 12 sessions focus on your goals; the final two help you
						build a plan for what comes next
					</li>
					<li>Reduced rate of $50 per 45-min session (regularly $250)</li>
				</ul>
			</div>
		</section>
	);
}
