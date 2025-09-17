export function ResourcesSection({
	title = "Additional Resources",
	resourceSections,
	disclaimer,
	altBg = true,
}) {
	return (
		<section
			className={`specialty-therapy block center related__links ${altBg ? "alt" : ""}`}
		>
			<div className="container block__content">
				<h3>{title}</h3>
				{resourceSections.map((section, index) => (
					<div key={index} className="resource__part">
						<strong>{section.title}</strong>
						<ul>
							{section.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									{link.component || (
										<a
											href={link.url}
											target={link.newWindow ? "_blank" : "_self"}
											rel={link.newWindow ? "noopener noreferrer" : undefined}
										>
											{link.text}
										</a>
									)}
									{link.description && ` - ${link.description}`}
								</li>
							))}
						</ul>
					</div>
				))}
				{disclaimer && <i>{disclaimer}</i>}
			</div>
		</section>
	);
}
