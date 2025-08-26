import React from "react";
import Image from "next/image";
import ts from "./assets/ts-home.jpg";
import "./style.scss";
import Button from "@/app/Components/ui/Button";
import CustomLink from "@/app/Components/ui/CustomLink";

function Hero() {
	return (
		<section className="block blockHero">
			<div className="block__content container">
				<div className="heroCopy">
					<h1>
						You’re Not Broken. <br />
						You’re Becoming.
					</h1>
					<p className="lead">
						Virtual therapy for thoughtful adults navigating anxiety,
						perfectionism, spiritual uncertainty and burnout, available in{" "}
						<CustomLink url="/where-we-serve">
							43 U.S. states and jurisdictions
						</CustomLink>{" "}
						from our East Coast base.
					</p>
					<Button />
				</div>
				<div className="heroImg">
					<Image
						src={ts.src}
						alt="Tanya Singh, PhD — therapist offering integrative care"
						width={480}
						height={480}
						priority
						unoptimized
						sizes="(max-width: 768px) 90vw, 480px"
						style={{ width: "100%", height: "auto" }}
					/>
					<div className="caption">
						<p className="heroImg__caption">Tanya Singh, PhD</p>
						<p className="heroImg__subcaption">
							Co‑Founder &amp; Licensed Clinical Psychologist
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
