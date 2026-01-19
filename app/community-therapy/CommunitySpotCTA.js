// ============================================
// CommunitySpotCTA

import Link from "next/link";

import Button from "../Components/ui/Button";

// ============================================
export default function CommunitySpotCTA({ isOpen, formUrl }) {
	return (
		<section className="block community-spot-cta" id="community-spot__cta">
			<div className="block__content">
				{isOpen ? (
					<>
						<h2>Ready to Apply?</h2>
						<p>
							Tell us a little about yourself and what you{"'"}re hoping to work
							on. We{"'"}ll be in touch soon.
						</p>
						<Button url={formUrl} text="Apply Now" />
					</>
				) : (
					<>
						<h2>Join the Waiting List</h2>
						<p>
							If the spot is currently filled, you can leave your information
							below. We{"'"}ll reach out when applications reopen. Please know
							this may be a few months—if you{"'"}re in immediate need, we
							encourage you to explore resources like{" "}
							<Link
								href="https://openpathcollective.org"
								target="_blank"
								rel="noopener noreferrer"
							>
								Open Path Collective
							</Link>{" "}
							for affordable therapy options.
						</p>
						<Button url={formUrl} text="Join Waiting List" />
					</>
				)}
			</div>
		</section>
	);
}
