import React from "react";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";
import CustomLink from "@/app/Components/ui/CustomLink";
import Image from "next/image";
import sandstoneImg from "./assets/sandstone.jpg";
import { metadata } from "@/app/config/metadata.mjs";
import "./ocd.scss";

// metadata
export const generateMetadata = () => metadata.specialties.ocd;

export default function OCDPage() {
	return (
		<main className="ocd__therapy specialty__therapy">
			{/* Hero Section */}
			<section className="block hero">
				<div className="block__content">
					<div className="ocd__image">
						<Image
							src={sandstoneImg}
							alt="OCD therapy illustration"
							width={360}
							height={360}
						/>
					</div>
					<div className="ocd__text">
						<h1>
							Trauma-informed treatment for Obsessive-Compulsive Disorder (OCD)
						</h1>
						<i>
							Evidence-based OCD therapy that integrates nervous system
							awareness, pacing, and readiness for change
						</i>
					</div>
					<div className="ocd__subtext">
						<p>
							At CALM Therapy, we offer specialized therapy for OCD that
							integrates gold-standard approaches, such as Exposure and Response
							Prevention (ERP), Inference-based Cognitive Behavioral Therapy
							(I-CBT) and Acceptance and Commitment Therapy (ACT) within a
							trauma-informed framework. Treatment is tailored to the
							individual, recognizing that readiness, timing, and nervous system
							regulation play a critical role in sustainable change.
						</p>
					</div>
				</div>
			</section>

			{/* Understanding OCD */}
			<section className="block alt">
				<div className="block__content">
					<h3>Understanding Obsessive-Compulsive Disorder (OCD)</h3>
					<p>
						Obsessive-Compulsive Disorder creates patterns of intrusive thoughts
						(obsessions) followed by repetitive behaviors or mental rituals
						(compulsions) aimed at reducing distress. The cycle remains
						consistent: doubt arises, anxiety builds, and compulsions provide
						temporary relief only for the cycle to begin again.
					</p>
					<p>
						What makes OCD particularly challenging is how it hijacks your
						natural problem-solving abilities, turning them against you through
						endless {"what if"} questions that feel impossible to resolve. Many
						people describe feeling like they{"'"}re living in a prison of their
						own making, knowing their fears don{"'"}t make logical sense yet
						feeling unable to break free from compulsive responses.
					</p>
				</div>
			</section>

			{/* What OCD Might Feel Like */}
			<section className="block">
				<div className="block__content">
					<h3>What OCD Might Feel Like</h3>
					<div className="specialty-bubble-group">
						<div className="specialty-bubble">
							<p>Intrusive thoughts that feel hard to ignore or dismiss</p>
						</div>
						<div className="specialty-bubble">
							<p>
								Compulsions or rituals meant to relieve doubt or prevent harm
							</p>
						</div>
						<div className="specialty-bubble">
							<p>Feeling stuck in endless cycles of reassurance-seeking</p>
						</div>
						<div className="specialty-bubble">
							<p>
								Uncertainty that feels unbearable, leading to checking or
								researching behaviors
							</p>
						</div>
						<div className="specialty-bubble">
							<p>
								Mental exhaustion from constantly battling your own thoughts
							</p>
						</div>
						<div className="specialty-bubble">
							<p>
								Shame about behaviors that feel {"irrational"} but necessary
							</p>
						</div>
						<div className="specialty-bubble">
							<p>Avoidance of triggers that might spark obsessive thoughts</p>
						</div>
					</div>
				</div>
			</section>

			{/* OCD and Trauma Connection */}
			<section className="block alt">
				<div className="block__content">
					<h3>OCD and Trauma: Understanding the Connection</h3>
					<p>
						Trauma does not cause OCD. However, trauma, chronic stress, medical
						experiences, or long-term emotional overwhelm can influence how OCD
						develops or intensifies.
					</p>
					<p>
						For some individuals, experiences of unpredictability or unsafety
						increase sensitivity to uncertainty. Obsessions and compulsions may
						function as attempts to regain control, prevent harm, or manage
						distress. While these strategies may have once been protective, they
						can become rigid and self-reinforcing over time.
					</p>
					<p>
						A trauma-informed understanding of OCD views symptoms as learned
						adaptations rather than personal failures, and treatment focuses on
						expanding tolerance for uncertainty and discomfort without relying
						on compulsive behaviors.
					</p>
				</div>
			</section>

			{/* What Is Trauma-Informed Treatment */}
			<section className="block whatis">
				<div className="block__content">
					<h3>What Is Trauma-Informed OCD Treatment?</h3>
					<p>
						Trauma-informed OCD treatment recognizes that exposure-based work is
						most effective when the nervous system has enough capacity to learn
						from it.
					</p>
					<p>
						Exposure and Response Prevention (ERP) remains a core treatment for
						OCD. However, when a person is operating in a constant state of
						survival, moving too quickly into exposure can increase overwhelm
						rather than reduce symptoms.
					</p>
					<div>
						<p>A trauma-informed approach emphasizes:</p>
						<ul className="why__list">
							<li>
								<p>Assessing readiness for ERP</p>
							</li>
							<li>
								<p>Pacing treatment appropriately</p>
							</li>
							<li>
								<p>Reducing shame around symptoms</p>
							</li>
							<li>
								<p>
									Supporting nervous system regulation alongside behavioral
									change
								</p>
							</li>
							<li>
								<p>
									Meeting clients where they are rather than forcing progress
								</p>
							</li>
						</ul>
						<p>
							The goal is not to avoid ERP, but to introduce it at the right
							time and in a way that supports long-term recovery.
						</p>
					</div>
				</div>
			</section>

			{/* How Trauma-Informed OCD Therapy Helps */}
			<section className="block alt helps center">
				<div className="block__content">
					<h3>How Trauma-Informed OCD Therapy Helps</h3>
					<p>Treatment at CALM Therapy Center may include a combination of:</p>

					<div className="specialty-cards">
						<div className="specialty-card">
							<h4>Exposure and Response Prevention (ERP)</h4>
							<p>
								ERP is introduced thoughtfully and collaboratively. In some
								cases, treatment begins with response prevention and brief
								periods of non-intervention before formal exposure exercises are
								added.
							</p>
						</div>

						<div className="specialty-card">
							<h4>Inference-Based Cognitive Behavioral Therapy (I-CBT)</h4>
							<p>
								I-CBT focuses on how doubt is generated rather than challenging
								the content of thoughts directly. This approach can be
								especially helpful for OCD driven by imagined possibilities,
								reasoning loops, or chronic self-doubt.
							</p>
						</div>

						<div className="specialty-card">
							<h4>Acceptance and Commitment Therapy (ACT)</h4>
							<p>
								ACT supports learning to relate differently to intrusive
								thoughts and sensations, reduce struggle with internal
								experiences, and move toward values-based action even in the
								presence of anxiety.
							</p>
						</div>

						<div className="specialty-card">
							<h4>Somatic and Nervous System Awareness</h4>
							<p>
								Clients learn to notice bodily sensations, urges, and emotional
								shifts without immediately trying to fix or eliminate them. This
								helps restore flexibility, reduce hypervigilance, and increase
								tolerance for uncertainty.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* What to Expect */}
			<section className="block expect">
				<div className="block__content">
					<h3>What to Expect in OCD Therapy</h3>
					<div className="expect-steps">
						<div className="expect-step">
							<h4>Early Sessions</h4>
							<p>
								Treatment begins with a careful assessment of symptoms, history,
								and current stressors. Early work often focuses on identifying
								compulsions, slowing patterns of urgency, and practicing brief
								moments of non-intervention.
							</p>
						</div>

						<div className="expect-step">
							<h4>Ongoing Treatment</h4>
							<p>
								As capacity increases, therapy may include structured ERP,
								cognitive work, and values-based practice. Exposure exercises
								are individualized and paced to support learning rather than
								overwhelm.
							</p>
						</div>

						<div className="expect-step">
							<h4>Later Sessions</h4>
							<p>
								Later stages of therapy focus on generalization, relapse
								prevention, and strengthening confidence in handling uncertainty
								without returning to compulsive behaviors.
							</p>
						</div>
					</div>
					<p style={{ marginTop: "2rem", fontStyle: "italic" }}>
						Throughout treatment, the process is collaborative, transparent, and
						responsive to your needs.
					</p>
				</div>
			</section>

			{/* Why Choose CALM */}
			<section className="block alt whychoose">
				<div className="block__content">
					<h3>Why Choose CALM Therapy Center for OCD Treatment?</h3>
					<p>OCD treatment at CALM Therapy Center is:</p>
					<ul className="why__list">
						<li>
							<p>Evidence-based and trauma-informed</p>
						</li>
						<li>
							<p>Individually tailored rather than protocol-driven</p>
						</li>
						<li>
							<p>Attuned to nervous system capacity and pacing</p>
						</li>
						<li>
							<p>Informed by ERP, I-CBT, ACT, and somatic principles</p>
						</li>
						<li>
							<p>Designed for complexor long-standing OCD presentations</p>
						</li>
					</ul>
					<p style={{ marginTop: "2rem" }}>
						This approach is especially helpful for individuals who feel that
						previous treatment moved too fast, focused only on symptoms, or
						overlooked the role of stress and trauma.
					</p>
				</div>
			</section>

			{/* CTA Section */}
			<section className="block center cta">
				<div className="block__content">
					<h3>Taking the Next Steps</h3>
					<p>
						If you are living with OCD, especially alongside trauma, chronic
						stress, or medical experiences, a trauma-informed approach may offer
						a more sustainable path forward.
					</p>
					<p>
						Contact CALM Therapy Center to learn more about OCD therapy and
						whether this approach is right for you.
					</p>
					<PrimaryButton href="/contact">Schedule a Consultation</PrimaryButton>
				</div>
			</section>

			{/* Resources Section */}
			<section className="block alt related__links">
				<div className="block__content">
					<h3>Additional OCD Resources</h3>

					<div className="resource__part">
						<strong>Organizations & Information:</strong>
						<ul>
							<li>
								<CustomLink url="https://iocdf.org/" newWindow={true}>
									International OCD Foundation (IOCDF)
								</CustomLink>
								<span>
									{" "}
									— The largest organization dedicated to helping those affected
									by OCD and related disorders
								</span>
							</li>
							<li>
								<CustomLink
									url="https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
									newWindow={true}
								>
									National Institute of Mental Health (NIMH) - OCD
								</CustomLink>
								<span>
									{" "}
									— Government resource with research-based information about
									OCD
								</span>
							</li>
							<li>
								<CustomLink
									url="https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder"
									newWindow={true}
								>
									American Psychiatric Association - OCD Information
								</CustomLink>
								<span> — Clinical overview of OCD symptoms and treatment</span>
							</li>
						</ul>
					</div>

					<div className="resource__part">
						<strong>Online Resources:</strong>
						<ul>
							<li>
								<CustomLink
									url="https://www.calmtherapy.center/blog/living-with-intrusive-thoughts-why-control-doesn-t-work-and-what-actually-helps"
									newWindow={true}
								>
									Living with Intrusive Thoughts: Why Control Doesn{"'"}t Work
									and What Actually Helps
								</CustomLink>
								<span>
									{" "}
									— CALM Therapy blog exploring why fighting intrusive thoughts
									backfires and offering alternative approaches
								</span>
							</li>
							<li>
								<CustomLink
									url="https://www.treatmyocd.com/what-is-ocd/info/ocd-stats-and-science/5-free-worksheets-for-people-struggling-with-ocd-developed-by-experts"
									newWindow={true}
								>
									NOCD Free OCD Worksheets
								</CustomLink>
								<span>
									{" "}
									— Expert-developed worksheets for self-reflection and support
								</span>
							</li>
						</ul>
					</div>

					<p
						style={{
							fontStyle: "italic",
							fontSize: "0.95rem",
							marginTop: "2rem",
							opacity: 0.8,
						}}
					>
						These resources are for educational purposes and are not substitutes
						for professional treatment. If you{"'"}re experiencing OCD symptoms,
						consulting a qualified mental health professional is recommended.
					</p>
				</div>
			</section>
		</main>
	);
}
