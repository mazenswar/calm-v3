import React from "react";
import Image from "next/image";
import ts from "./assets/tanya_headshot.png";
import "./style.scss";
import Button from "@/app/Components/ui/Button";
import CustomLink from "@/app/Components/ui/CustomLink";

function Hero() {
	return (
		<section className="block blockHero">
			<div className="block__content container">
				<div className="heroCopy">
					<h1 className="h1">You’re Not Broken. You’re Becoming.</h1>
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
						alt="Dr Tanya Singh smiling"
						width={480}
						height={640}
						priority
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
