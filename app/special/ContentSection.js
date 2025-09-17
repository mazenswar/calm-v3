// components/specialty/ContentSection.js
export default function ContentSection({ heading, paragraphs }) {
	return (
		<section className="block specialty-section">
			<div className="block__content container">
				<h3>{heading}</h3>
				{paragraphs.map((p, i) => (
					<p key={i}>{p}</p>
				))}
			</div>
		</section>
	);
}
