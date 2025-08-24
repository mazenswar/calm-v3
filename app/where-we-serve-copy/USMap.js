// /app/where-we-serve-copy/USMap.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
	ZoomableGroup,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import { geoCentroid } from "d3-geo";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Static pan bounds
const TRANSLATE_EXTENT = [
	[-1000, -500],
	[1000, 500],
];

// Coverage sets
const licensed = ["New York", "New Jersey", "Pennsylvania"];
const psypact = [
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
];

function getFill(name) {
	if (licensed.includes(name)) return "#9e7bb5"; // purple (licensed)
	if (psypact.includes(name)) return "#dfc4e2"; // pink (psypact)
	return "#dcd3e2"; // neutral
}
function status(name) {
	return licensed.includes(name)
		? "Licensed"
		: psypact.includes(name)
		? "PSYPACT"
		: "Unavailable";
}

// Label anchors
const stateLabels = [
	{ name: "Alabama", abbr: "AL", coordinates: [-86.9023, 32.3182] },
	{ name: "Arizona", abbr: "AZ", coordinates: [-111.0937, 34.0489] },
	{ name: "Arkansas", abbr: "AR", coordinates: [-92.3731, 34.9697] },
	{ name: "California", abbr: "CA", coordinates: [-119.4179, 36.7783] },
	{ name: "Colorado", abbr: "CO", coordinates: [-105.7821, 39.5501] },
	{ name: "Connecticut", abbr: "CT", coordinates: [-72.7554, 41.6032] },
	{ name: "Delaware", abbr: "DE", coordinates: [-75.5277, 38.9108] },
	{
		name: "District of Columbia",
		abbr: "DC",
		coordinates: [-77.0369, 38.9072],
	},
	{ name: "Florida", abbr: "FL", coordinates: [-81.5158, 27.6648] },
	{ name: "Georgia", abbr: "GA", coordinates: [-82.9001, 32.1656] },
	{ name: "Idaho", abbr: "ID", coordinates: [-114.742, 44.0682] },
	{ name: "Illinois", abbr: "IL", coordinates: [-89.3985, 40.6331] },
	{ name: "Indiana", abbr: "IN", coordinates: [-86.1349, 40.2672] },
	{ name: "Iowa", abbr: "IA", coordinates: [-93.0977, 41.878] },
	{ name: "Kansas", abbr: "KS", coordinates: [-98.4842, 39.0119] },
	{ name: "Kentucky", abbr: "KY", coordinates: [-84.27, 37.8393] },
	{ name: "Louisiana", abbr: "LA", coordinates: [-91.9623, 30.9843] },
	{ name: "Maine", abbr: "ME", coordinates: [-69.4455, 45.2538] },
	{ name: "Maryland", abbr: "MD", coordinates: [-76.6413, 39.0458] },
	{ name: "Massachusetts", abbr: "MA", coordinates: [-71.3824, 42.4072] },
	{ name: "Michigan", abbr: "MI", coordinates: [-85.6024, 44.3148] },
	{ name: "Minnesota", abbr: "MN", coordinates: [-94.6859, 46.7296] },
	{ name: "Mississippi", abbr: "MS", coordinates: [-89.3985, 32.3547] },
	{ name: "Missouri", abbr: "MO", coordinates: [-91.8318, 37.9643] },
	{ name: "Montana", abbr: "MT", coordinates: [-110.3626, 46.8797] },
	{ name: "Nebraska", abbr: "NE", coordinates: [-99.9018, 41.4925] },
	{ name: "Nevada", abbr: "NV", coordinates: [-116.4194, 38.8026] },
	{ name: "New Hampshire", abbr: "NH", coordinates: [-71.5724, 43.1939] },
	{ name: "New Jersey", abbr: "NJ", coordinates: [-74.4057, 40.0583] },
	{ name: "New Mexico", abbr: "NM", coordinates: [-106.0181, 34.5199] },
	{ name: "New York", abbr: "NY", coordinates: [-75.4999, 43.0004] },
	{ name: "North Carolina", abbr: "NC", coordinates: [-79.0193, 35.7596] },
	{ name: "North Dakota", abbr: "ND", coordinates: [-101.002, 47.5515] },
	{ name: "Ohio", abbr: "OH", coordinates: [-82.9071, 40.4173] },
	{ name: "Oklahoma", abbr: "OK", coordinates: [-97.0929, 35.0078] },
	{ name: "Oregon", abbr: "OR", coordinates: [-120.5542, 43.8041] },
	{ name: "Pennsylvania", abbr: "PA", coordinates: [-77.1945, 41.2033] },
	{ name: "Rhode Island", abbr: "RI", coordinates: [-71.4774, 41.5801] },
	{ name: "South Carolina", abbr: "SC", coordinates: [-81.1637, 33.8361] },
	{ name: "South Dakota", abbr: "SD", coordinates: [-99.9018, 43.9695] },
	{ name: "Tennessee", abbr: "TN", coordinates: [-86.5804, 35.5175] },
	{ name: "Texas", abbr: "TX", coordinates: [-99.9018, 31.9686] },
	{ name: "Utah", abbr: "UT", coordinates: [-111.0937, 39.3209] },
	{ name: "Vermont", abbr: "VT", coordinates: [-72.5778, 44.5588] },
	{ name: "Virginia", abbr: "VA", coordinates: [-78.6569, 37.4316] },
	{ name: "Washington", abbr: "WA", coordinates: [-120.7401, 47.7511] },
	{ name: "West Virginia", abbr: "WV", coordinates: [-80.4549, 38.5976] },
	{ name: "Wisconsin", abbr: "WI", coordinates: [-88.7879, 43.7844] },
	{ name: "Wyoming", abbr: "WY", coordinates: [-107.2903, 43.0759] },
];

// A tiny outline to keep text readable on light fills
const LABEL_STROKE = "#ffffff";
const LABEL_FILL = "#4d4d4d";

const TRANSLATE_HINT = [
	[-1000, -500],
	[1000, 500],
];

const easeInOutCubic = (t) =>
	t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function USMap() {
	const [position, setPosition] = useState({ coordinates: [-97, 38], zoom: 1 });
	const [isZoomed, setIsZoomed] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [mounted, setMounted] = useState(false);
	const animationRef = useRef(null);

	useEffect(() => {
		const mqCoarse =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(pointer: coarse)").matches;
		setIsMobile(mqCoarse || window.innerWidth < 768);
		setMounted(true);
		return () => {
			if (animationRef.current) cancelAnimationFrame(animationRef.current);
		};
	}, []);

	const animateTo = (targetCenter, targetZoom, ms = 350) => {
		const start = performance.now();
		const startCenter = position.coordinates;
		const startZoom = position.zoom;

		const step = (now) => {
			const t = Math.min(1, (now - start) / ms);
			const k = easeInOutCubic(t);
			const cx = startCenter[0] + (targetCenter[0] - startCenter[0]) * k;
			const cy = startCenter[1] + (targetCenter[1] - startCenter[1]) * k;
			const z = startZoom + (targetZoom - startZoom) * k;
			setPosition({ coordinates: [cx, cy], zoom: z });
			if (t < 1) {
				animationRef.current = requestAnimationFrame(step);
			} else {
				setIsZoomed(targetZoom > 1.05);
			}
		};
		if (animationRef.current) cancelAnimationFrame(animationRef.current);
		animationRef.current = requestAnimationFrame(step);
	};

	if (!mounted) return null;

	const hint = isMobile
		? "Pinch to zoom and drag to pan"
		: "Click a state to zoom. Click Reset to return.";
	const fontSize = Math.max(9, Math.min(13, 9 * position.zoom));

	return (
		<div
			className="us__map"
			style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}
		>
			<div
				aria-live="polite"
				style={{ marginBottom: ".5rem", fontSize: ".9rem", opacity: 0.8 }}
			>
				{hint}
			</div>

			<ComposableMap projection="geoAlbersUsa">
				<ZoomableGroup
					zoom={position.zoom}
					center={position.coordinates}
					translateExtent={TRANSLATE_HINT}
					onMoveEnd={({ zoom, coordinates }) =>
						setPosition({ zoom, coordinates })
					}
					filterZoomEvent={() => isMobile} // gestures only on mobile
					style={{
						cursor: isMobile ? "grab" : isZoomed ? "zoom-out" : "zoom-in",
					}}
				>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const name = geo.properties.name;
								const fillColor = getFill(name);
								const handleClick = () => {
									if (isMobile) return;
									const center = geoCentroid(geo);
									if (!center || Number.isNaN(center[0])) return;
									const dist = Math.hypot(
										position.coordinates[0] - center[0],
										position.coordinates[1] - center[1]
									);
									if (isZoomed && dist < 4) {
										animateTo([-97, 38], 1, 350);
									} else {
										animateTo(center, 1.8, 350);
									}
								};
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onClick={handleClick}
										role="button"
										tabIndex={0}
										onKeyDown={(e) => {
											if (isMobile) return;
											if (e.key === "Enter" || e.key === " ") {
												e.preventDefault();
												const center = geoCentroid(geo);
												if (!center) return;
												animateTo(
													isZoomed ? [-97, 38] : center,
													isZoomed ? 1 : 1.8,
													350
												);
											}
										}}
										aria-label={`${name}: ${status(name)}`}
										data-tooltip-id="us-map-tooltip"
										data-tooltip-content={`${name} (${status(name)})`}
										fill={fillColor}
										stroke="#b9a8c9"
										strokeWidth={0.5}
										style={{
											default: { outline: "none" },
											hover: { fill: "var(--brand-5)", outline: "none" },
											pressed: { fill: "#333", outline: "none" },
										}}
									/>
								);
							})
						}
					</Geographies>

					{/* Always render labels (no NE-hiding) with an outline for legibility */}
					{stateLabels.map(({ name, abbr, coordinates }) => {
						return (
							<Annotation
								key={abbr}
								subject={coordinates}
								dx={0}
								dy={0}
								connectorProps={{ stroke: "none" }}
							>
								<text
									x="0"
									y="0"
									textAnchor="middle"
									alignmentBaseline="central"
									fontSize={fontSize}
									fill={LABEL_FILL}
									stroke={LABEL_STROKE}
									strokeWidth={2}
									paintOrder="stroke"
									style={{ pointerEvents: "none" }} // labels don’t steal clicks
									data-tooltip-id="us-map-tooltip"
									data-tooltip-content={`${name} (${status(name)})`}
								>
									{abbr}
								</text>
							</Annotation>
						);
					})}
				</ZoomableGroup>
			</ComposableMap>

			<Tooltip id="us-map-tooltip" />
		</div>
	);
}
