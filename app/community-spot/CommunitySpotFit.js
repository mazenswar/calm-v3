// ============================================
// CommunitySpotFit

import Link from "next/link";

// ============================================
export default function CommunitySpotFit() {
	return (
		<section className="block community-spot-fit" id="community-spot__fit">
			<div className="block__content">
				<h2>Is This Right for You?</h2>
				<p>
					This spot is for individuals who are experiencing financial hardship
					and cannot currently afford therapy. It{"'"}s designed as a
					short-term, focused work—not ongoing open-ended treatment. You should
					come with something specific you{"'"}d like to work on, and we
					{"'"}ll support you in making meaningful progress over our time
					together.
				</p>
				<p>
					This spot is best suited for individuals whose goals align with our{" "}
					<Link className="link" href="/specialties">
						areas of focus
					</Link>
					. We especially welcome women seeking this support.
				</p>
			</div>
		</section>
	);
}
