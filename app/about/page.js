// app/about/AboutSection.jsx
"use client";
import "./style.scss";
import Image from "next/image";
// If you have a headshot, import it here. Replace the path/name as needed.
import tanyaHeadshot from "./assets/tanya-headshot.jpg";

// If you decide to link internally, use your CustomLink component:
// import CustomLink from "Components/ui/CustomLink";

export default function AboutSection() {
	return (
		<section className="block about">
			<div className="block__content container">
				{/* Intro */}
				<header className="about__intro">
					<h1 className="about__title">About CALM Therapy</h1>
					<p className="about__lede">
						CALM Therapy was founded to provide thoughtful, integrative care for
						adults navigating anxiety, OCD, trauma, and life transitions. Our
						work is designed for people who feel stuck, searching, or ready for
						change and who want therapy that is both accessible and deeply
						personal.
					</p>
				</header>

				{/* Philosophy */}
				<section
					className="about__philosophy"
					aria-labelledby="about-philosophy"
				>
					<h2 id="about-philosophy" className="about__sectionTitle">
						Our Philosophy
					</h2>

					<div className="about__grid">
						<article className="aboutCard">
							<h3 className="aboutCard__title">An Integrative Approach</h3>
							<p>
								We practice a grounded, holistic approach that brings together
								the rigor of evidence based psychology with contemplative and
								embodied traditions. Therapy here isn’t about quick fixes; it’s
								about cultivating presence, curiosity, and lasting change.
							</p>
						</article>

						<article className="aboutCard">
							<h3 className="aboutCard__title">
								Rooted in Science and Experience
							</h3>
							<p>
								CALM Therapy is led by Tanya Singh, PhD, a licensed clinical
								psychologist with training at institutions including Rutgers
								University Behavioral Health Care, Massachusetts General
								Hospital/Harvard, Columbia University, Bellevue Hospital Center,
								and Montclair State University. Clinical research experience and
								ongoing integrative training shape care that is both
								scientifically grounded and deeply human.
							</p>
						</article>

						<article className="aboutCard">
							<h3 className="aboutCard__title">Grounded and Expansive</h3>
							<p>
								Some sessions are practical and skills focused; others invite
								reflection and exploration. This balance creates a container
								where meaningful transformation can unfold moving toward
								clarity, resilience, and a renewed sense of self.
							</p>
						</article>
					</div>
				</section>

				{/* Meet Tanya */}
				<section className="about__tanya" aria-labelledby="about-tanya">
					<div className="about__tanyaWrap">
						<div className="about__tanyaImg">
							<Image
								src={tanyaHeadshot}
								alt="Tanya Singh, PhD Licensed Clinical Psychologist"
								priority
								sizes="(max-width: 768px) 100vw, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>

						<div className="about__tanyaText">
							<h2 id="about-tanya" className="about__sectionTitle">
								Meet Tanya
							</h2>
							<p className="about__tanyaName">
								<strong>Tanya Singh, PhD</strong>
								<span className="about__tanyaMeta">
									Licensed Clinical Psychologist • Director & Co Founder
								</span>
							</p>
							<p>
								Tanya specializes in anxiety, OCD, trauma, life transitions, and
								integrative therapy approaches. She serves clients across New
								York, New Jersey, Pennsylvania, and 40+ PSYPACT states. Her
								style blends evidence based tools with intuitive insight, always
								tailored to the individual.
							</p>
							<p>
								Tanya is also provides Ketamine Assisted Psychotherapy (KAP) for
								treatment resistant conditions, with an emphasis on
								psychological safety, therapeutic depth, and long term
								transformation.
							</p>

							{/* If you want a light CTA later, uncomment and wire up your CustomLink component */}
							{/* <div className="about__cta">
                <CustomLink href="/contact" classN="btn btn--secondary">
                  Book a free 15‑minute call
                </CustomLink>
              </div> */}
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
