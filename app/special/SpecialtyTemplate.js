// app/specialties/SpecialtyTemplate.js
import "./specialty.scss";

export default function SpecialtyTemplate({ sections }) {
	return (
		<main className="specialty">
			{sections.map((Section, idx) => (
				<Section key={idx} />
			))}
		</main>
	);
}
