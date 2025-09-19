import Button from "@/app/Components/ui/Button";
import "./tanya-singh.scss";
import Image from "next/image";
import tanyaHeadshot from "../../HomePage/Hero/assets/ts-home.jpg";
import Link from "next/link";

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
											Developed live-video program for patients with mild
											traumatic brain injury and comorbid anxiety
										</li>
										<li>
											Psychological assessments with adolescents and integrated
											reporting
										</li>
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

							<div className="credential-item">
								<div className="date-range">2020 — 2021</div>
								<h3>Psychiatric Extern</h3>
								<p className="institution">
									Behavioral Associates, New York, NY
								</p>
								<div className="role-description">
									<ul>
										<li>
											Individual and group psychotherapy in private practice
											serving diverse populations
										</li>
										<li>
											Training in biofeedback, neurofeedback, and virtual
											reality-based exposure procedures
										</li>
										<li>
											Multidisciplinary team collaboration and ongoing case
											consultation
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2019 — 2020</div>
								<h3>Psychiatric Extern</h3>
								<p className="institution">
									SUNY Downstate Medical Center - Children{"'"}s Mental Health
									Center, NY
								</p>
								<div className="role-description">
									<ul>
										<li>
											Assessment and therapy services for children, adolescents,
											and families
										</li>
										<li>
											Developmental, neuropsychological, and diagnostic
											assessments with integrated reports
										</li>
										<li>
											Individual and family therapy with educational advocacy
											for children and caregivers
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
									Montclair State University, Department of Psychology,
									Montclair, NJ
								</p>
								<div className="role-description">
									<p>APA- and PCSAS-accredited program</p>
									<ul>
										<li>
											Comprehensive training in evidence-based psychotherapy
											approaches
										</li>
										<li>
											Specialized focus on anxiety disorders, OCD, and trauma
											treatment
										</li>
										<li>
											Research in technology-enhanced mental health
											interventions
										</li>
										<li>
											Clinical supervision and teaching experience throughout
											doctoral program
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2019</div>
								<h3>M.A., Clinical Psychology</h3>
								<p className="institution">
									Montclair State University, Department of Psychology
								</p>
								<div className="role-description">
									<p>
										Master{"'"}s degree completed as part of doctoral program
									</p>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2013 — 2015</div>
								<h3>M.A., Psychology in Education</h3>
								<p className="institution">
									Teachers College, Columbia University, New York, NY
								</p>
								<div className="role-description">
									<ul>
										<li>
											Focus on educational psychology and mental health in
											academic settings
										</li>
										<li>
											Training in cross-cultural psychology and community mental
											health approaches
										</li>
										<li>
											Research in stigma reduction and mental health literacy
										</li>
									</ul>
								</div>
							</div>

							<div className="credential-item">
								<div className="date-range">2017 — 2021</div>
								<h3>Teaching Experience</h3>
								<p className="institution">Montclair State University</p>
								<div className="role-description">
									<ul>
										<li>
											Adjunct Faculty (2018-2021): Designed and taught
											introductory psychology courses
										</li>
										<li>
											Guest Lecturer (2017-2018): Abnormal Psychology lectures
											on mood, anxiety, and personality disorders
										</li>
										<li>
											Mentored undergraduate students in psychology principles
											and research methods
										</li>
									</ul>
								</div>
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
										href="https://psychiatryonline.org/doi/full/10.1176/appi.ps.201900186"
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
										href="https://global.oup.com/academic/product/borderline-personality-disorder-9780199997510?cc=us&lang=en&#"
									>
										<strong>Book Chapter:</strong> Stanley, B. &{" "}
										<strong>Singh, T.</strong> (2017). Differential diagnosis of
										Borderline Personality Disorder. In{" "}
										<em>Primer of Borderline Personality Disorder</em>. Oxford
										University Press.
									</Link>
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
