"use client";

import React, { useState } from "react";

// Unified list of states where therapy is authorized
const states = [
	{ name: "Alabama", abbr: "AL" },
	{ name: "Arizona", abbr: "AZ" },
	{ name: "Arkansas", abbr: "AR" },
	{ name: "Colorado", abbr: "CO" },
	{ name: "Connecticut", abbr: "CT" },
	{ name: "Delaware", abbr: "DE" },
	{ name: "District of Columbia", abbr: "DC" },
	{ name: "Florida", abbr: "FL" },
	{ name: "Georgia", abbr: "GA" },
	{ name: "Idaho", abbr: "ID" },
	{ name: "Illinois", abbr: "IL" },
	{ name: "Indiana", abbr: "IN" },
	{ name: "Kansas", abbr: "KS" },
	{ name: "Kentucky", abbr: "KY" },
	{ name: "Maine", abbr: "ME" },
	{ name: "Maryland", abbr: "MD" },
	{ name: "Michigan", abbr: "MI" },
	{ name: "Minnesota", abbr: "MN" },
	{ name: "Mississippi", abbr: "MS" },
	{ name: "Missouri", abbr: "MO" },
	{ name: "Nebraska", abbr: "NE" },
	{ name: "Nevada", abbr: "NV" },
	{ name: "New Hampshire", abbr: "NH" },
	{ name: "New Jersey", abbr: "NJ" },
	{ name: "New York", abbr: "NY" },
	{ name: "North Carolina", abbr: "NC" },
	{ name: "North Dakota", abbr: "ND" },
	{ name: "Northern Mariana Islands", abbr: "MP" },
	{ name: "Ohio", abbr: "OH" },
	{ name: "Oklahoma", abbr: "OK" },
	{ name: "Pennsylvania", abbr: "PA" },
	{ name: "Rhode Island", abbr: "RI" },
	{ name: "South Carolina", abbr: "SC" },
	{ name: "South Dakota", abbr: "SD" },
	{ name: "Tennessee", abbr: "TN" },
	{ name: "Texas", abbr: "TX" },
	{ name: "Utah", abbr: "UT" },
	{ name: "Vermont", abbr: "VT" },
	{ name: "Virginia", abbr: "VA" },
	{ name: "Washington", abbr: "WA" },
	{ name: "West Virginia", abbr: "WV" },
	{ name: "Wisconsin", abbr: "WI" },
	{ name: "Wyoming", abbr: "WY" },
];

function States() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredStates = states.filter(
		(state) =>
			state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			state.abbr.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className="block state__coverage" id="states">
			<div className="block__content">
				<h2 className="center-title">
					Where We{"'"}re Licensed to Practice in the U.S.
				</h2>
				<p>
					CALM Therapy provides online therapy for adults across 43 U.S. states
					and jurisdictions. We are licensed in New Jersey, New York, and
					Pennsylvania, and through PSYPACT we also serve clients in Maryland,
					Connecticut, Virginia, and many other regions. All sessions are
					remote; in-person therapy is not currently offered.
				</p>
				<p>Use the map or search below to see if we serve your state.</p>

				<input
					type="text"
					placeholder="Search for a state..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="state-search"
				/>

				<ul>
					{filteredStates.map((state) => (
						<li key={state.name}>
							<span className="state-name">{state.name}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default States;
