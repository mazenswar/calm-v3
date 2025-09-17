export function CTASection({
	title = "Ready to Take the Next Step?",
	description,
	buttonText = "Schedule a Consult",
	PrimaryButton,
}) {
	return (
		<section className="specialty-therapy block center cta">
			<div className="container block__content">
				<h3>{title}</h3>
				<p>{description}</p>
				<PrimaryButton text={buttonText} />
			</div>
		</section>
	);
}
