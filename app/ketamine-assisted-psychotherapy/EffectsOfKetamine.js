import "./style/effects-of-ketamine.scss";

export default function EffectsOfKetamine() {
	return (
		<section className="block effects-slim" aria-labelledby="effects-title">
			<div className="block__content container">
				<h2 id="effects-title" className="effects-slim__title">
					Effects of Ketamine
				</h2>

				<ul className="effects-slim__row" role="list">
					<li className="effects-slim__item">
						<span className="effects-slim__icon" aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									d="M16.5 4.75c-1.63 0-3.2.76-4.5 2.03-1.3-1.27-2.87-2.03-4.5-2.03C5.42 4.75 3.5 6.7 3.5 9.0c0 3.34 2.96 6.12 8.13 10.73l.37.32.37-.32C17.54 15.12 20.5 12.34 20.5 9.0c0-2.3-1.92-4.25-4-4.25Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>
						<div className="effects-slim__text">
							<span className="effects-slim__label">Emotional openness</span>
							<span className="effects-slim__sub">
								More access to feeling states and insight.
							</span>
						</div>
					</li>

					<li className="effects-slim__item">
						<span className="effects-slim__icon" aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<polygon
									points="12,4.5 20,19.5 4,19.5"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinejoin="round"
								/>
								<line
									x1="8"
									y1="14"
									x2="16"
									y2="14"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</span>
						<div className="effects-slim__text">
							<span className="effects-slim__label">Reduced reactivity</span>
							<span className="effects-slim__sub">
								Temporary relief from looping patterns.
							</span>
						</div>
					</li>

					<li className="effects-slim__item">
						<span className="effects-slim__icon" aria-hidden="true">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<circle
									cx="12"
									cy="12"
									r="7.5"
									stroke="currentColor"
									strokeWidth="2"
								/>
								<path
									d="M6.25 12c2.4-2 3.5 2 5.75 0s3.35 2 5.75 0"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
								/>
							</svg>
						</span>
						<div className="effects-slim__text">
							<span className="effects-slim__label">New perspectives</span>
							<span className="effects-slim__sub">
								Space for different viewpoints and meaning.
							</span>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
}
