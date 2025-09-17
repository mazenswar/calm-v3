// Definition/What Is Section
export function DefinitionSection({ title, children, altBg = true }) {
	return (
		<section
			className={`specialty-therapy block definition ${altBg ? "alt" : ""}`}
		>
			<div className="container block__content">
				<h3>{title}</h3>
				{children}
			</div>
		</section>
	);
}
