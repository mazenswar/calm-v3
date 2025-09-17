// Common Experiences Bubble Section
export function CommonExperiencesSection({
	title = "Common Experiences",
	experiences,
}) {
	return (
		<section className="specialty-therapy block">
			<div className="container block__content">
				<h3>{title}</h3>
				<div className="specialty-bubble-group">
					{experiences.map((experience, index) => (
						<div key={index} className="specialty-bubble">
							<p>{experience}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
