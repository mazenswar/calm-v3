// app/specialties/page.jsx

import "./style.scss";
import Image from "next/image";
import flowerImg from "./assets/lotus.jpg";

const specialties = [
	{
		id: "anxiety",
		title: "Anxiety & Related Conditions",
		lede: "Support for worry, panic, and intrusive thoughts, with approaches that calm the mind and steady daily life.",
		link: "/specialties/anxiety",
	},
	{
		id: "mood",
		title: "Mood & Self-Perception",
		lede: "Therapy for depression, perfectionism, and self-worth, helping you relate to yourself with clarity and care.",
		link: "/specialties/mood",
	},
	{
		id: "transitions",
		title: "Life Transitions & Stress",
		lede: "Guidance for change, uncertainty, and workload so daily life feels more manageable.",
		link: "/specialties/transitions",
	},
	{
		id: "integrative",
		title: "Integrative Offerings",
		lede: "Holistic options including ketamine-assisted psychotherapy and spiritual inquiry, always grounded in safety and intention.",
		link: "/specialties/integrative",
	},
];

export default function SpecialtiesHub() {
	return (
		<main>
			<section className="block specialties-hero">
				<div className="block__content container">
					<header className="spec-hero">
						<div className="spec-hero__copy">
							<h1 className="spec-hero__title">How we can support you</h1>
							<p className="spec-hero__lede">
								Seeking therapy is a meaningful step toward change. Below are
								some of the areas where we offer guidance, clarity, and growth.
							</p>
						</div>
						<figure className="spec-hero__visual" aria-hidden="true">
							<Image
								src={flowerImg}
								alt="Flower blooming"
								priority
								sizes="(max-width: 768px) 100vw, 360px"
								style={{ width: "100%", height: "auto", borderRadius: "100%" }}
							/>
						</figure>
					</header>
				</div>
			</section>

			<section className="block specialties-list">
				<div className="block__content container">
					<ul className="spec-grid" role="list">
						{specialties.map((spec) => (
							<li key={spec.id} className="spec-card">
								<h2>{spec.title}</h2>
								<p>{spec.lede}</p>
								<a href={spec.link} className="spec-card__link">
									Learn more
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
