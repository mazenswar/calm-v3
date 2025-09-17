export function WhyCalmSection({
	title = "Why CALM Therapy?",
	reasons,
	altBg = true,
}) {
	return (
		<section className={`specialty-therapy block why ${altBg ? "alt" : ""}`}>
			<div className="container block__content">
				<h3>{title}</h3>
				<ul className="why-list">
					{reasons.map((reason, index) => (
						<li key={index}>
							<strong>{reason.title}</strong>
							{reason.description}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
