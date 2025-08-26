"use client";

import "./style.scss";
import CustomLink from "../Components/ui/CustomLink";

export default function NotFound() {
	return (
		<main>
			<section className="block notFound">
				<div className="block__content container">
					<h1 className="notFound__title">Page not found</h1>
					<p className="notFound__text">
						The page you’re looking for doesn’t exist or may have been moved.
					</p>
					<CustomLink url="/" classN="notFound__link">
						Return home
					</CustomLink>
				</div>
			</section>
		</main>
	);
}
