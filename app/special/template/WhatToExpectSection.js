export function WhatToExpectSection({
	title = "What to Expect in Therapy",
	steps,
}) {
	return (
		<section className="specialty-therapy block expect">
			<div className="container block__content">
				<h3>{title}</h3>
				<div className="expect-steps">
					{steps.map((step, index) => (
						<div key={index} className="expect-step">
							<strong>
								{step.number || `${index + 1}.`} {step.title}
							</strong>
							<p>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
