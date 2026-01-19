"use client";

import { useEffect } from "react";

export default function MailerLiteForm() {
	useEffect(() => {
		window.ml =
			window.ml ||
			function () {
				(window.ml.q = window.ml.q || []).push(arguments);
			};
		window.ml("account", "2048836");

		const script = document.createElement("script");
		script.src = "https://assets.mailerlite.com/js/universal.js";
		script.async = true;
		document.body.appendChild(script);
	}, []);

	return <div className="ml-embedded" data-form="ABTOcN"></div>;
}
