// app/about/page.js
"use client";

import "./style.scss";
import Image from "next/image";
import tanyaHeadshot from "./assets/tanya-headshot.jpg";
import calmImg from "./assets/calm.png";

export default function AboutPage() {
	return (
		<main className="about">
			{/* Section 1: About CALM Therapy */}
			<section className="block about__section about__intro">
				<div className="block__content container">
					<div className="about__introWrap">
						<div className="about__introText">
							<h1>About CALM Therapy</h1>
							<p>
								CALM Therapy was founded to create a space for healing that is
								both grounded and expansive. Evidence-based psychology offers
								proven tools for change, while Eastern wisdom and contemplative
								practices bring perspective, balance, and a deeper sense of
								meaning.
							</p>
							<p>
								This blend is important because many people want more than
								short-term strategies. They want care that addresses immediate
								struggles while also speaking to deeper questions of self,
								purpose, and transformation.
							</p>
							<p>
								Our care is designed for people navigating anxiety,
								obsessive–compulsive and related disorders, complex trauma, and
								major life transitions who want therapy that is both practical
								and deeply personal.
							</p>
							<p>
								At CALM, clients find more than symptom management. They find a
								place where authenticity, compassion, and integrity are central,
								and where therapy is understood as both a science and a path of
								growth.
							</p>
						</div>
						<div className="about__introImage">
							<Image
								src={calmImg}
								alt="Calm Therapy visual representation"
								priority
								sizes="(max-width: 768px) 100vw, 400px"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Section 2: Our Philosophy */}
			<section className="block about__section about__philosophy">
				<div className="block__content container">
					<h2>Our Philosophy</h2>
					<div className="about__grid">
						<article className="aboutCard">
							<h3>Integration in Practice</h3>
							<p>
								We draw from gold-standard approaches such as Exposure and
								Response Prevention (ERP), Acceptance and Commitment Therapy
								(ACT), Inference-Based CBT (I-CBT), and Internal Family Systems
								(IFS). These methods provide evidence-based tools, while Eastern
								frameworks invite perspective and balance. Together, they allow
								room for both skills and meaning, short-term relief and
								long-term healing.
							</p>
						</article>
						<article className="aboutCard">
							<h3>Depth and Breadth</h3>
							<p>
								Some sessions are practical, focused on building skills for
								daily life. Others make space for reflection, exploration, and
								healing at the root, especially in the context of complex
								trauma. This balance creates conditions for both immediate
								relief and lasting transformation.
							</p>
						</article>
						<article className="aboutCard">
							<h3>A Values-Driven Practice</h3>
							<p>
								CALM is guided by values of authenticity, compassion, and
								integrity. This is a space where people are encouraged to show
								up as they are, while also being supported in the work of
								change. We believe therapy is not only about reducing distress,
								but about remembering who you are at your core and building a
								life that reflects that truth.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* Section 3: Meet the Founder */}
			{/* Meet the Founder */}
			<section className="block about__tanya" aria-labelledby="about-tanya">
				<div className="block__content about__tanyaWrap">
					{/* Row 1: image + header/meta */}
					<div className="about__tanyaTop">
						<div className="about__tanyaImg">
							<Image
								src={tanyaHeadshot}
								alt="Tanya Singh, PhD Licensed Clinical Psychologist"
								priority
								sizes="(max-width: 768px) 100vw, 360px"
								style={{ width: "100%", height: "auto" }}
							/>
						</div>

						<div className="about__tanyaHead">
							<h2 id="about-tanya" className="about__sectionTitle">
								Meet the Founder
							</h2>
							<p className="about__tanyaName">
								<strong>Tanya Singh, PhD</strong>
								<span className="about__tanyaMeta">
									Licensed Clinical Psychologist • Director &amp; Co-Founder
								</span>
							</p>
						</div>
					</div>

					{/* Row 2: full-width training */}
					<div className="about__tanyaTraining">
						<h3 className="about__subheading">Training &amp; Experience</h3>
						<p>
							Tanya Singh, PhD, is a licensed clinical psychologist specializing
							in anxiety disorders, obsessive–compulsive and related disorders,
							and major life transitions. In working with these concerns, she
							also saw how many people carry the lingering impact of earlier
							hardships, which led her to develop expertise in complex trauma.
						</p>
						<p>
							Her training includes Rutgers University Behavioral Health Care,
							Massachusetts General Hospital/Harvard University, Columbia
							University, and Montclair State University. She has also pursued
							training in ketamine-assisted psychotherapy (KAP), offering care
							for individuals with treatment-resistant conditions.
						</p>
					</div>

					{/* Row 3: two columns on md+, stacked on mobile */}
					<div className="about__tanyaCols">
						<article className="about__tanyaCol">
							<h3 className="about__subheading">An Integrative Presence</h3>
							<p>
								What distinguishes her work is the way she integrates
								evidence-based methods with an authentic and deeply human
								presence. Having grown up in the East and trained as a
								psychologist in the West, she carries both perspectives within
								her. This integration is not something she applies from the
								outside, but part of who she is and how she understands the
								human experience. Clients often say they feel understood without
								needing to over-explain. They recognize her persistence and
								care, and that she is willing to sit with complexity, keep
								puzzling through, and walk alongside them in the work.
							</p>
						</article>

						<article className="about__tanyaCol">
							<h3 className="about__subheading">Beyond the Therapy Room</h3>
							<p>
								For Tanya, therapy is more than a profession. It is a calling
								and a craft, a place where psychological science and spiritual
								wisdom meet, and where growth is possible for both client and
								therapist. Her own ongoing reflection and growth shape the way
								she shows up authentically with those she works with.
							</p>
							<p>
								Outside of her clinical work, she values time in nature, long
								walks, and quiet moments of contemplation. She enjoys cooking
								and exploring new foods, playing video games, writing, and
								spending time with the children in her life. These practices
								keep her connected to curiosity, reverence, and the simple joys
								of living, qualities she brings into her work as a psychologist.
							</p>
						</article>
					</div>
				</div>
			</section>
		</main>
	);
}
