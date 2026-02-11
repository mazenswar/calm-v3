// ============================================
// CommunitySpotStatus

import MailerLiteForm from "../Components/MailerLiteForm";
import Button from "../Components/ui/Button";

// ============================================
export default function CommunitySpotStatus({ isOpen, formUrl }) {
	return (
		<section
			className="block community-spot-status"
			id="community-spot__status"
		>
			<div className="block__content">
				{isOpen ? (
					<>
						<h2>Status</h2>
						<h3>This spot is currently open ✳️</h3>
						<p>
							We{"'"}re accepting applications now. If this feels like the right
							fit for you, we{"'"}d love to hear from you.
						</p>
						<Button url={formUrl} text="Apply" />
					</>
				) : (
					<>
						<h2>Status</h2>
						<h3>This spot is currently filled 🟡</h3>

						<MailerLiteForm />
					</>
				)}
			</div>
		</section>
	);
}
