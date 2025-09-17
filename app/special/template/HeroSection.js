// SpecialtyPageTemplate.js
"use client";
import React from "react";

// Hero Section Component
export function HeroSection({ title, description, heroImage }) {
	return (
		<section className="specialty-therapy block center hero">
			<div className="container block__content">
				<div className="text">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
				{heroImage && (
					<div className="specialty-hero-illustration">{heroImage}</div>
				)}
			</div>
		</section>
	);
}
