export function HowTherapyHelpsSection({
	title = "How Therapy Can Help",
	helpItems,
	altBg = true,
}) {
	return (
		<section className={`specialty-therapy block helps ${altBg ? "alt" : ""}`}>
			<div className="container block__content">
				<h3>{title}</h3>
				<div className="specialty-cards">
					{helpItems.map((item, index) => (
						<div key={index} className="specialty-card">
							<strong>{item.title}</strong>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
