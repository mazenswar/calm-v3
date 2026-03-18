import CustomLink from "@/app/Components/ui/CustomLink";
import Link from "next/link";

export default function Details() {
	return (
		<section className="block details alt">
			<div className="block__content container">
				<h2>What to Expect</h2>
				<div className="text">
					<p>
						Anxiety is not a flaw. In many ways, given the world we live in, it
						makes complete sense. This workshop starts there.
					</p>
					<p>
						In this free one-hour session,{" "}
						<CustomLink url="/about#meet-the-founder">
							Dr. Tanya Singh
						</CustomLink>{" "}
						will offer a grounded introduction to anxiety: what it is, how it
						shows up in the mind and body, and what it actually means to manage
						it. We will look at common myths about anxiety, why some of what we
						have been taught about {"calming down"} does not work, and what a
						different relationship with anxiety can look like.
					</p>
					<p>
						The session will cover a range of practical approaches. We will
						explore how our thoughts shape the anxiety experience and how
						reframing can shift that. We will also spend time with somatic tools
						you can use in the moment, including somatic sensing and awareness
						practices that help you notice where anxiety lives in your body and
						learn to stay with it rather than fight it. These are not breathing
						exercises. They are tools for building a sense of internal safety
						and present-moment grounding when anxiety is running high.
					</p>
					<p>
						The goal is not to eliminate anxiety but to understand it, work with
						it, and change your relationship to it over time. If you leave
						feeling like what you are experiencing goes beyond what a workshop
						can address, Dr. Singh will also speak to when further support might
						be worth exploring.
					</p>
					<p>
						This workshop is led by{" "}
						<CustomLink url="/about#meet-the-founder">
							Tanya Singh, PhD
						</CustomLink>
						, licensed clinical psychologist and founder of CALM Therapy.
					</p>
				</div>
			</div>
		</section>
	);
}
