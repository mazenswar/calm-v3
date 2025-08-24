"use client";
import { useMemo, useRef, useState } from "react";

import { STATES } from "./states-data";
import USMap from "./USMap";
import "./wws__hero.scss";

/**
 * Fallback coverage sets (names match the map’s logic).
 * Used when STATES entries don’t have a consistent status field.
 */
const LICENSED_NAMES = new Set(["New York", "New Jersey", "Pennsylvania"]);
const PSYPACT_NAMES = new Set([
	"Alabama",
	"Arizona",
	"Arkansas",
	"Colorado",
	"Connecticut",
	"Delaware",
	"District of Columbia",
	"Florida",
	"Georgia",
	"Idaho",
	"Illinois",
	"Indiana",
	"Kansas",
	"Kentucky",
	"Maine",
	"Maryland",
	"Michigan",
	"Minnesota",
	"Mississippi",
	"Missouri",
	"Nebraska",
	"Nevada",
	"New Hampshire",
	"North Carolina",
	"North Dakota",
	"Northern Mariana Islands",
	"Ohio",
	"Oklahoma",
	"Pennsylvania",
	"Rhode Island",
	"South Carolina",
	"South Dakota",
	"Tennessee",
	"Texas",
	"Utah",
	"Vermont",
	"Virginia",
	"Washington",
	"West Virginia",
	"Wisconsin",
	"Wyoming",
]);

const accessLabel = (a) =>
	a === "licensed" ? "Licensed" : a === "psypact" ? "PSYPACT" : "Unavailable";

/** Try a bunch of shapes, then fall back to name-based sets */
function deriveAccess(s) {
	const raw = (s?.access || s?.status || s?.statusType || "")
		.toString()
		.trim()
		.toLowerCase();

	if (raw === "licensed") return "licensed";
	if (raw === "psypact") return "psypact";
	if (s?.licensed === true || s?.isLicensed === true) return "licensed";
	if (s?.psypact === true || s?.isPsypact === true) return "psypact";

	// Name fallback
	if (s?.name && LICENSED_NAMES.has(s.name)) return "licensed";
	if (s?.name && PSYPACT_NAMES.has(s.name)) return "psypact";

	return "none";
}

export default function WwsHero() {
	const [query, setQuery] = useState("");
	const [focusedCode, setFocusedCode] = useState(null);
	const [activeState, setActiveState] = useState(null);
	const [mapResetKey, setMapResetKey] = useState(0);
	const listRef = useRef(null);

	const results = useMemo(() => {
		const q = query.trim().toLowerCase();
		if (!q) return [];
		return STATES.filter(
			(s) =>
				s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
		).slice(0, 20);
	}, [query]);

	const handleSelect = (s) => {
		setActiveState(s);
		setFocusedCode(s.code);
		setQuery(""); // close dropdown
	};

	const resetAll = () => {
		setActiveState(null);
		setFocusedCode(null);
		setQuery("");
		setMapResetKey((k) => k + 1);
	};

	return (
		<section
			className="block wwsHero__section"
			aria-labelledby="wws-hero-title"
		>
			<div className="block__content">
				<div className="text">
					<h2 id="wws-hero-title" className="center-title">
						Where We Serve
					</h2>
					<p>
						We provide virtual therapy in licensed states and participating
						PSYPACT states. Search below to quickly check availability.
					</p>

					{/* Search */}
					<div
						className="wws__search"
						role="combobox"
						aria-expanded={results.length > 0}
						aria-owns="wws-typeahead"
						aria-haspopup="listbox"
					>
						<label htmlFor="state-search" className="sr-only">
							Search a state or territory
						</label>
						<input
							id="state-search"
							className="state-search"
							type="text"
							placeholder="Search by state name (e.g., New York) or code (e.g., NY)…"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							autoComplete="off"
							role="searchbox"
							aria-autocomplete="list"
							aria-controls="wws-typeahead"
						/>

						{results.length > 0 && (
							<ul
								id="wws-typeahead"
								ref={listRef}
								className="typeahead"
								role="listbox"
							>
								{results.map((s) => {
									const acc = deriveAccess(s); // "licensed" | "psypact" | "none"
									return (
										<li
											key={s.code}
											role="option"
											aria-selected={focusedCode === s.code}
										>
											<button
												type="button"
												onClick={() => handleSelect(s)}
												aria-label={`Select ${s.name}${
													acc !== "none"
														? ` — ${accessLabel(acc)}`
														: " — Unavailable"
												}`}
											>
												{/* ALWAYS render a chip, including gray for Unavailable */}
												<span
													className={`chip ${
														acc === "licensed"
															? "chip--licensed"
															: acc === "psypact"
															? "chip--psypact"
															: "chip--none"
													}`}
													title={accessLabel(acc)}
													aria-hidden="true"
												/>
												<span className="name">{s.name}</span>
												<span className="code">{s.code}</span>
												<span className="sr-only">{accessLabel(acc)}</span>
											</button>
										</li>
									);
								})}
							</ul>
						)}
					</div>

					{/* Legend */}
					<div className="wws__legend" aria-label="Legend">
						<span>
							<i className="chip chip--licensed" aria-hidden="true" /> Licensed
						</span>
						<span>
							<i className="chip chip--psypact" aria-hidden="true" /> PSYPACT
						</span>
						<span>
							<i className="chip chip--none" aria-hidden="true" /> Unavailable
						</span>
					</div>

					{/* Active selection card */}
					{activeState && (
						<div className="wws__active">
							<div className="activeCard" role="status" aria-live="polite">
								<div className="activeCard__title">
									<strong>{activeState.name}</strong>
									<span className="muted">{activeState.code}</span>
								</div>
								<p className="muted">
									Status: {accessLabel(deriveAccess(activeState))}
								</p>
							</div>
						</div>
					)}
				</div>

				{/* Right column: Map */}
				<div className="wws__map" aria-label="Interactive map">
					<div className="mapWrap">
						<USMap key={mapResetKey} />
					</div>

					{/* Reset button sits with the legend area per your latest layout decisions.
              If you want it here instead, move it back. */}
					<div
						style={{
							display: "flex",
							gap: ".5rem",
							marginTop: "1rem",
							alignItems: "center",
						}}
					>
						<button
							onClick={resetAll}
							className="legendReset"
							type="button"
							aria-label="Reset map and clear selection"
						>
							Reset
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
