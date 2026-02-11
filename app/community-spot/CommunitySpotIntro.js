// ============================================
// CommunitySpotIntro

import Image from "next/image";
import commImg from "./assets/community-img.jpg";
// ============================================
export default function CommunitySpotIntro() {
	return (
		<section className="block community-spot-intro" id="community-spot__intro">
			<div className="block__content">
				<div className="community__image">
					<Image
						src={commImg}
						alt="community"
						aria-label="community"
						priority
						sizes="(max-width: 768px) 100vw, 400px"
						width={400}
						height={400}
					/>
				</div>
				<div className="community__copy">
					<h1>Community Spot</h1>
					<p>
						We believe everyone deserves access to quality mental health care,
						regardless of financial circumstances. Our Community Spot is a
						reduced fee therapy placement we reserve for someone who is
						experiencing financial hardship and would otherwise be unable to
						access support.
					</p>
				</div>
			</div>
		</section>
	);
}
