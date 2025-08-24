"use client";

import React, { useState } from "react";

// Unified list of states where therapy is authorized

function States() {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredStates = states.filter(
		(state) =>
			state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			state.code.toLowerCase().includes(searchTerm.toLowerCase())
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
