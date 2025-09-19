import Button from "@/app/Components/ui/Button";
import "./tanya-singh.scss";
import Image from "next/image";
import tanyaHeadshot from "../../HomePage/Hero/assets/ts-home.jpg";

export const metadata = {
	title: "Dr. Tanya Singh - Credentials | CALM Therapy",
	description:
		"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
	keywords:
		"Dr. Tanya Singh, clinical psychologist, CALM Therapy founder, anxiety specialist, OCD therapist, trauma therapy",
	openGraph: {
		title: "Dr. Tanya Singh - Credentials | CALM Therapy",
		description:
			"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
		url: "https://www.calmtherapy.center/about/credentials",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Dr. Tanya Singh Credentials",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Dr. Tanya Singh - Credentials | CALM Therapy",
		description:
			"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
		images: ["/social/ss.webp"],
	},
};

export default function CredentialsPage() {
	return (
		<>
			<section className="block">
				<div className="block__content container">
					<div className="credentials-header">
						<div className="credentials-intro">
							<h1>Tanya Singh, Ph.D.</h1>
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
									<p>Serving NY, NJ, PA, and 40+ states through PSYPACT</p>
									<ul>
										<li>
											Integrative psychotherapy for anxiety, OCD, complex
											trauma, and life transitions
										</li>
										<li>
											Integration of evidence-based approaches (ERP, ACT, I-CBT,
											DBT, IFS) with contemplative frameworks
										</li>
										<li>
											Ketamine-assisted psychotherapy (KAP) including
											preparation, dosing, and integration
										</li>
										<li>
											Collaboration with psychiatrists and wellness providers
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2022 — 2025</div>
								<h3>Licensed Clinical Psychologist</h3>
								<p className="institution">CBT Center for Anxiety and OCD</p>
								<div className="role-description">
									<ul>
										<li>
											Psychotherapy for adults and adolescents with anxiety and
											OCD
										</li>
										<li>
											Evidence-based treatments: ERP, I-CBT, ACT, DBT, ComB, HRT
										</li>
										<li>
											Supervision of doctoral externs in clinical practice
										</li>
										<li>
											Ongoing professional training in OCD and anxiety disorders
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
									Rutgers University Behavioral Health Care
								</p>
								<div className="role-description">
									<p>
										APA-accredited clinical internship on the Adult Outpatient
										Track
									</p>
									<ul>
										<li>
											Individual, family, and group therapy using CBT, DBT, ACT
										</li>
										<li>Psychological assessments and integrated reports</li>
										<li>Crisis assessment for high-risk presentations</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2020 — 2021</div>
								<h3>Advanced Practicum Student</h3>
								<p className="institution">
									Harvard University/Massachusetts General Hospital
								</p>
								<div className="role-description">
									<ul>
										<li>
											Hospital-based programs for adolescents and young adults
										</li>
										<li>Specialized group therapy and assessment services</li>
										<li>
											Research contributions resulting in published manuscripts
										</li>
									</ul>
								</div>
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
									Montclair State University, Department of Psychology
								</p>
								<p>APA- and PCSAS-accredited program</p>
							</div>

							<div className="credential-item">
								<div className="date-range">2013 — 2015</div>
								<h3>M.A., Psychology in Education</h3>
								<p className="institution">
									Teachers College, Columbia University
								</p>
							</div>
						</div>

						<div className="credential-card">
							<div className="credential-header">
								<h2>Selected Publications</h2>
							</div>

							<div className="publications-grid">
								<div className="publication-item">
									<a
										href="https://psychiatryonline.org/doi/full/10.1176/appi.ps.201900186"
										className="publication-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										<strong>Singh, T. &</strong> Reyes-Portillo, J.A. (2020).
										Using Technology to Train Clinicians in Evidence-based
										Treatment. <em>Psychiatric Services</em>, 71(4), 364-377.
									</a>
								</div>

								<div className="publication-item">
									<a
										href="https://www.researchprotocols.org/2021/1/e25746/"
										className="publication-link"
										target="_blank"
										rel="noopener noreferrer"
									>
										Greenberg, J., <strong>Singh, T.</strong>, et al. (2021). A
										live video mind-body treatment to prevent persistent
										symptoms following mild traumatic brain injury: protocol for
										a mixed methods study. <em>JMIR Research Protocols</em>,
										10(1).
									</a>
								</div>

								<div className="publication-item">
									<strong>Book Chapter:</strong> Stanley, B. &{" "}
									<strong>Singh, T.</strong> (2017). Differential diagnosis of
									Borderline Personality Disorder. In{" "}
									<em>Primer of Borderline Personality Disorder</em>. Oxford
									University Press.
								</div>

								<div className="publication-item">
									<strong>Book Chapter:</strong> Szlyk, H. S.,{" "}
									<strong>Singh, T.</strong>, & Reyes-Portillo, J. A. (2022).
									Technology-enhanced interventions for youth suicide
									prevention. In <em>Handbook of Youth Suicide Prevention</em>.
								</div>
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
