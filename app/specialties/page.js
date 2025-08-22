import Image from "next/image";
import React from "react";
import Link from "next/link";
import "./style.scss";
// import depressionImg from "./assets/images/depp.webp";
// import selfImg from "./assets/images/self.webp";
// import addImg from "./assets/images/mmm.webp";
// import brain00 from "./assets/images/brain-00.webp";

function Specialty() {
	return (
		<main id="spec">
			<section className="intro block">
				<div className="block__content">
					<h1>How I Can Support You</h1>
					<p className="linebreak">
						I understand that seeking therapy is a courageous and personal step.
						You may be navigating anxiety, feeling stuck, questioning your
						identity, or simply trying to make sense of your inner world.
					</p>
					<p>
						I offer a compassionate and grounded space where we can explore your
						experience together, using a blend of evidence-based therapy, deep
						emotional work, and, when it{"'"}s helpful, spiritual insight.
					</p>
				</div>
			</section>
			<section className="block specc-section">
				<div className="block__content">
					<h2>Here are some of the areas I specialize in:</h2>
					<div className="anxiety specc-container">
						{/* <div className="img-container">
							<Image
								src={selfImg.src}
								alt="depression illustration"
								width={360}
								height={540}
								priority
								style={{ width: "100%", height: "auto" }}
								sizes="(max-width: 768px) 100vw, 360px"
							/>
						</div> */}
						<div className="text-container">
							<h3>Anxiety & Related Conditions</h3>
							<div className="specc" id="gad">
								<h4>Generalized Anxiety Disorder (GAD)</h4>
								<p>
									When worry feels constant and overwhelming, I help clients
									untangle the patterns behind their anxiety and reconnect with
									a sense of grounded presence. My approach draws from
									mindfulness-based approaches, Cognitive Behavioral Therapy
									(CBT), Internal Family Systems (IFS), and somatic awareness to
									reduce mental noise and build inner steadiness.
								</p>
							</div>
							<div className="specc" id="pd">
								<h4>Panic Disorder (PD)</h4>
								<p>
									I work with clients to change their relationship to the
									physiological sensations of panic. Together, we build the
									capacity to stay present with what arises, using techniques
									that support acceptance and nervous system regulation. This
									approach helps reduce reactivity and fosters long-term
									resilience.
								</p>
							</div>

							<div className="specc" id="sad">
								<h4>Social Anxiety Disorder (SAD)</h4>
								<p>
									Social anxiety often masks a deeper fear of being seen or
									rejected. Our work may combine exposure-based strategies with
									insight-oriented therapy to help you reclaim your voice and
									your sense of self-worth.
								</p>
							</div>
							<div className="specc" id="ocd">
								<h4>Obsessive-Compulsive Disorder (OCD)</h4>
								<p>
									I use exposure and response prevention (ERP), inference-based
									CBT (i-CBT), and acceptance and commitment therapy (ACT) to
									help clients challenge intrusive thoughts without getting
									trapped in doubt and reassurance-seeking cycles. I approach
									OCD not just as a behavioral issue but as an opportunity to
									cultivate deeper self-trust.
								</p>
							</div>

							<div className="specc" id="bdd">
								<h4>Body Dysmorphic Disorder (BDD)</h4>
								<p>
									We explore the critical inner narratives and shame-based
									beliefs that distort your self-image. Therapy focuses on
									cultivating a more compassionate and embodied relationship
									with yourself.
								</p>
							</div>
						</div>
					</div>
					<div className="mood specc-container">
						{/* <div className="img-container">
							<Image
								src={depressionImg.src}
								alt="depression illustration"
								width={360}
								height={540}
								style={{ width: "100%", height: "auto" }}
								sizes="(max-width: 768px) 100vw, 360px"
							/>
						</div> */}
						<div className="text-container">
							<h3>Mood & Self-Perception</h3>
							<div className="specc" id="depression">
								<h4>Depression</h4>
								<p>
									Depression often shows up as a disconnection from the body,
									from joy, and from meaning. My approach supports emotional
									processing, mindfulness, and behavioral activation, while
									exploring the deeper story your depression may be telling.
								</p>
							</div>
							<div className="specc" id="perfectionism">
								<h4>Perfectionism</h4>
								<p>
									Perfectionism can be both protective and imprisoning. In our
									work together, we{"'"}ll explore the parts of you that believe
									safety or worth depend on performance, achievement, or
									control. We{"'"}ll begin to practice enoughness from the
									inside out
								</p>
							</div>
							<div className="specc" id="self-esteem">
								<h4>Self-Esteem & Self-Worth</h4>
								<p>
									This isn{"'"}t about self-improvement. It{"'"}s about
									self-remembrance. I help clients reconnect with an internal
									sense of worth that doesn{"'"}t depend on performance,
									appearance, or external approval.
								</p>
							</div>
						</div>
					</div>
					<div className="life-transitions specc-container">
						{/* <div className="img-container">
							<Image
								src={brain00.src}
								alt="depression illustration"
								width={360}
								height={360}
								style={{ width: "100%", height: "auto" }}
								sizes="(max-width: 768px) 100vw, 360px"
							/>
						</div> */}
						<div className="text-container">
							<h3>Life Transitions & Stress</h3>
							<div className="specc" id="lt">
								<h4>Life Transitions</h4>
								<p>
									Whether the transition is related to career, family, life
									circumstances, or an internal shift, I help clients move
									through it with clarity and integrity. Together, we make space
									for grief, uncertainty, and what may be emerging.
								</p>
							</div>

							<div className="specc" id="sm">
								<h4>Stress Management & Work-Life Balance</h4>
								<p>
									Sometimes healing means setting boundaries, taking rest, or
									asking new questions about what you{"'"}re doing and why. I
									work with clients to identify both internal and external
									sources of stress and create space for recalibration.
								</p>
							</div>
						</div>
					</div>
					<div className="add specc-container">
						{/* <div className="img-container">
							<Image
								src={addImg.src}
								alt="depression illustration"
								width={360}
								height={540}
								style={{ width: "100%", height: "auto" }}
								sizes="(max-width: 768px) 100vw, 360px"
							/>
						</div> */}
						<div className="text-container">
							<h3>Additional Integrative Offerings</h3>

							<div className="specc" id="kap-spec">
								<h4>Ketamine-Assisted Psychotherapy (KAP)</h4>
								<p>
									For clients experiencing treatment-resistant anxiety, OCD, or
									depression, I offer{" "}
									<Link href="/kap" className="link">
										ketamine-assisted psychotherapy
									</Link>{" "}
									in partnership with Journey Clinical. This approach can open
									space for new perspectives, soften rigid patterns, and support
									deep emotional healing. I guide clients through preparation,
									dosing, and integration with care and intention.
								</p>
							</div>

							<div className="specc" id="spi">
								<h4>Spiritual Exploration & Existential Inquiry</h4>
								<p>
									Many of my clients do not follow a specific spiritual path,
									but they feel called toward something deeper. Therapy can be a
									space to explore those longings without judgment. I do not
									impose any framework, but I hold space for inquiry, awe, and
									the mystery of being human.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Specialty;
