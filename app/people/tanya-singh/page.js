import Link from "next/link";
import Image from "next/image";
import tanyaHeadshot from "../../HomePage/Hero/assets/ts-home.jpg";
import "./credentials.scss";
import Button from "@/app/Components/ui/Button";
import { metadata } from "@/app/config/metadata.mjs";

// metadata
export const generateMetadata = () => metadata.pages.credentials;

export default function CredentialsPage() {
	return (
		<>
			<section className="block">
				<div className="block__content container">
					<div className="credentials-header">
						<div className="credentials-intro">
							<h1>Dr. Tanya Singh, Ph.D.</h1>
							<p>Director and Co-Founder, CALM Therapy</p>
						</div>
						<div className="credentials-image">
							<Image
								src={tanyaHeadshot}
								alt="Dr. Tanya Singh, Licensed Clinical Psychologist"
								className="headshot-image"
								width={360}
								height={360}
								priority
							/>
						</div>
					</div>

					<div className="credentials-grid">
						<div className="credential-card">
							<div className="credential-header">
								<h2>Clinical Experience</h2>
							</div>

							<div className="credential-item">
								<div className="date-range">2024 — Present</div>
								<h3>Director and Co-Founder</h3>
								<p className="institution">
									Center for Anxiety & Life Management (CALM Therapy)
								</p>
								<div className="role-description">
									<ul>
										<li>
											Integrative psychotherapy for adults navigating anxiety
											disorders, obsessive-compulsive concerns, complex trauma,
											and major life transitions
										</li>
										<li>
											Integration of evidence-based approaches (ERP, ACT, I-CBT,
											DBT, IFS) with contemplative and mindfulness-based
											frameworks
										</li>
										<li>
											Specialized provision of ketamine-assisted psychotherapy
											(KAP), including comprehensive preparation, dosing
											support, and therapeutic integration sessions
										</li>
										<li>
											Design and oversight of practice services, including
											development of new therapy offerings and innovative
											treatment modalities
										</li>
										<li>
											Active collaboration with psychiatrists, physicians, and
											wellness providers to support comprehensive client care
										</li>
										<li>
											Contribution to public understanding of mental health
											through psychoeducational content and integrative essays
											bridging psychology with contemplative wisdom
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2022 — 2025</div>
								<h3>Licensed Clinical Psychologist</h3>
								<p className="institution">
									CBT Center for Anxiety and OCD, Lower Gwynedd, PA
								</p>
								<div className="role-description">
									<ul>
										<li>
											Comprehensive psychotherapy for adults and adolescents
											with anxiety disorders, obsessive-compulsive concerns, and
											related conditions
										</li>
										<li>
											Specialized delivery of evidence-based treatments
											including ERP, I-CBT, ACT, DBT, ComB, HRT, BA, and MI
										</li>
										<li>
											Clinical supervision of doctoral externs in evidence-based
											practice and comprehensive case formulation
										</li>
										<li>
											Active participation in case consultation teams and
											ongoing professional training in OCD and anxiety disorder
											specializations
										</li>
										<li>
											Emphasis on integrative care approaches that honor both
											clinical efficacy and individual client needs
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="credential-card">
							<div className="credential-header">
								<h2>Clinical Training</h2>
							</div>

							<div className="credential-item">
								<div className="date-range">2021 — 2022</div>
								<h3>Doctoral Psychology Intern</h3>
								<p className="institution">
									Rutgers University Behavioral Health Care, New Brunswick, NJ
								</p>
								<div className="role-description">
									<p>
										APA-accredited clinical internship on the Adult Outpatient
										Track with minor rotation in high school setting
									</p>
									<ul>
										<li>
											Individual, family, and group therapy in community mental
											health clinic using CBT, DBT, ACT
										</li>
										<li>
											Weekly group therapy facilitation for depression, anxiety,
											and co-occurring conditions
										</li>
										<li>
											Psychological assessments and integrated reports for
											diagnostic clarification
										</li>
										<li>
											Crisis assessment and therapy for high school students
											with suicidal and high-risk presentations
										</li>
										<li>
											Multidisciplinary team collaboration and comprehensive
											case consultation
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2020 — 2021</div>
								<h3>Advanced Practicum Student</h3>
								<p className="institution">
									Harvard University/Massachusetts General Hospital, Boston, MA
								</p>
								<div className="role-description">
									<ul>
										<li>
											Hospital-based clinical and research services for
											adolescents and young adults
										</li>
										<li>
											Led manualized live-video skills training group for
											adolescents with neurofibromatosis
										</li>
										<li>
											Contributed to the development of a live-video program for
											patients with mild traumatic brain injury and comorbid
											anxiety
										</li>
										<li>Psychological assessments with adolescents</li>
										<li>
											Research contributions resulting in three published
											manuscripts
										</li>
										<li>
											IRB protocol preparation and intervention fidelity
											monitoring
										</li>
									</ul>
								</div>
							</div>
							<div className="btn-container">
								<i>
									For a full list of trainings please check out the full resume
								</i>
								<Button
									newWindow={true}
									url="/cv/tanya-singh_cv.pdf"
									text="Full Resume"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="block">
				<div className="block__content container">
					<div className="credentials-grid">
						<div className="credential-card">
							<div className="credential-header">
								<h2>Education</h2>
							</div>

							<div className="credential-item">
								<div className="date-range">2017 — 2022</div>
								<h3>Ph.D., Clinical Psychology</h3>
								<p className="institution">
									Montclair State University, Department of Psychology,
									Montclair, NJ
								</p>
							</div>

							<div className="credential-item">
								<div className="date-range">2019</div>
								<h3>M.A., Clinical Psychology</h3>
								<p className="institution">
									Montclair State University, Department of Psychology
								</p>
							</div>

							<div className="credential-item">
								<div className="date-range">2013 — 2015</div>
								<h3>M.A., Psychology in Education</h3>
								<p className="institution">
									Teachers College, Columbia University, New York, NY
								</p>
							</div>
						</div>

						<div className="credential-card">
							<div className="credential-header">
								<h2>Selected Publications</h2>
							</div>

							<div className="publications-grid">
								<div className="publication-item">
									<Link
										href="https://www.researchprotocols.org/2021/1/e25746/"
										className="publication-link link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Greenberg, J., <strong>Singh, T.</strong>, et al. (2021). A
										live video mind-body treatment to prevent persistent
										symptoms following mild traumatic brain injury: protocol for
										a mixed methods study. <em>JMIR Research Protocols</em>,
										10(1).
									</Link>
								</div>

								<div className="publication-item">
									<Link
										href="https://psychiatryonline.org/doi/full/10.1176/appi.ps.201900186"
										className="publication-link link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<strong>Singh, T. &</strong> Reyes-Portillo, J.A. (2020).
										Using Technology to Train Clinicians in Evidence-based
										Treatment. <em>Psychiatric Services</em>, 71(4), 364-377.
									</Link>
								</div>

								<div className="publication-item">
									<Link
										href="https://www.sciencedirect.com/science/article/abs/pii/S0165032717320700"
										className="publication-link link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Chaudhury, S. R., <strong>Singh, T.</strong>, Burke, A.,
										Stanley, B., Mann, J. J., Grunebaum, M., Sublette, M.E. &
										Oquendo, M. A. (2016). Clinical correlates of planned and
										unplanned suicide attempts.{" "}
										<em>The Journal of Nervous and Mental Disease</em>, 204(11),
										806-811.
									</Link>
								</div>

								<div className="publication-item">
									<Link
										target="_blank"
										rel="noopener noreferrer"
										className="publication-link link"
										href="https://link.springer.com/chapter/10.1007/978-3-030-82465-5_22"
									>
										<strong>Book Chapter:</strong> Szlyk, H. S.,{" "}
										<strong>Singh, T.</strong>, & Reyes-Portillo, J. A. (2022).
										Technology-enhanced interventions for youth suicide
										prevention. In <em>Handbook of Youth Suicide Prevention</em>
										.
									</Link>
								</div>

								<div className="publication-item">
									<Link
										target="_blank"
										rel="noopener noreferrer"
										className="publication-link link"
										href="https://global.oup.com/academic/product/borderline-personality-disorder-9780199997510?cc=us&lang=en&"
									>
										<strong>Book Chapter:</strong> Stanley, B. &{" "}
										<strong>Singh, T.</strong> (2017). Differential diagnosis of
										Borderline Personality Disorder. In{" "}
										<em>Primer of Borderline Personality Disorder</em>. Oxford
										University Press.
									</Link>
								</div>
							</div>
							<br />
							<br />
							<div className="btn-container">
								<i>
									For a full list of publications please check out the full
									resume
								</i>
								<Button
									newWindow={true}
									url="/cv/tanya-singh_cv.pdf"
									text="Full Resume"
								/>
							</div>
						</div>
					</div>

					<div className="full-resume-section">
						<h2>Complete Academic Credentials</h2>
						<p>
							For a comprehensive view of Dr. Singh{"'"}s research,
							publications, conference presentations, and complete professional
							history, please review her full academic curriculum vitae.
						</p>

						<Button
							url={"/cv/tanya-singh_cv.pdf"}
							text="View Full Resume (PDF)"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
