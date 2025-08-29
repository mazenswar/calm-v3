import Button from "../Components/ui/Button";
import CustomLink from "../Components/ui/CustomLink";
import waves from "./assets/images/waves.jpg";
import "./style/kap-intro.scss";

export default function KapIntro() {
	return (
		<section className="block kap-intro keta-header">
			<div className="block__content container">
				{/* 
          HERO IMAGE 
          - Added overlay div inside for gradient/duotone treatment in CSS
          - Increased size control via CSS, so here we just set the background
        */}
				<div
					className="hero__img"
					role="img"
					aria-label="Soft water ripple symbolising expanding insight"
					style={{ backgroundImage: `url(${waves.src})` }}
				>
					<div className="hero__overlay" aria-hidden="true" />
				</div>

				{/* 
          HERO COPY 
          - Improved semantic structure: 
            -> h1 (main heading)
            -> h2 instead of italic <i> (subtitle should be semantic heading for SEO/accessibility)
          - Broke up long paragraphs for scannability
          - Added a CTA button/scroll cue for guiding next steps
        */}
				<div className="hero__copy">
					<h1>Ketamine-Assisted Psychotherapy (KAP)</h1>
					<h2 className="hero__subtitle">
						A grounded and integrative path toward healing
					</h2>
					<p>
						Ketamine-Assisted Psychotherapy (KAP) can be a powerful catalyst for
						emotional healing, especially when approached with intention and
						support. At CALM, we see KAP as one part of a larger journey; a
						practice that deepens and complements the work you’re already doing
						to understand yourself and heal.
					</p>
					<p>
						We strongly recommend a consistent baseline of care before, during,
						and after the KAP journey. KAP can be done on its own, but it’s most
						effective when embedded in a larger healing framework.
					</p>
					<p>
						Ketamine’s effects can include enhanced emotional openness, reduced
						reactivity, and temporary relief from symptoms of anxiety,
						depression, and obsessive thought patterns. In a therapeutic
						setting, this creates space for new perspectives, deeper insight,
						and meaningful breakthroughs.
					</p>

					{/* Scroll cue / CTA */}
					<Button
						primary={false}
						text="Explore the KAP Process"
						url="/ketamine-assisted-psychotherapy#kap-process"
					/>
				</div>
			</div>
		</section>
	);
}
