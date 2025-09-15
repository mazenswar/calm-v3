"use client";
import React, { useState } from "react";
import "./styles/contact.scss";
import PrimaryButton from "@/app/Components/ui/PrimaryButton";

function ContactEmail() {
	const [copied, setCopied] = useState(false);
	const email = "info@calmtherapy.center";

	const handleCopy = () => {
		navigator.clipboard.writeText(email).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<section className="block cta" id="fees__cta">
			<div className="block__content container contact-email">
				<div className="cta__inner">
					<h3>
						Therapy is a meaningful investment. If you’re interested in working
						together, we offer a free 15-minute consultation to connect and see
						if our approach feels right for you.
					</h3>
					<PrimaryButton />
				</div>
				<div className="questions">
					<p>
						More questions? Email us at
						<span className="contact-email__address">{email}</span>
					</p>
					<div className="contact-email__actions">
						<button
							onClick={handleCopy}
							className="contact-email__copy"
							aria-label="Copy email to clipboard"
						>
							{copied ? "Copied!" : "Copy"}
						</button>
						<a
							href={`mailto:${email}`}
							className="contact-email__mailto"
							aria-label="Open in your mail client"
						>
							Email Us
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactEmail;
