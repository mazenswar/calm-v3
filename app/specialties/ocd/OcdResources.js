import CustomLink from "@/app/Components/ui/CustomLink";
import React from "react";

/////////////// ORGS & INFO

function OrgsAndInfo() {
	return (
		<div className="resource__part">
			<strong>Organizations & Information:</strong>
			<ul>
				<li>
					<CustomLink url={"https://iocdf.org/"} newWindow={true}>
						International OCD Foundation (IOCDF)
					</CustomLink>
					- The largest organization dedicated to helping those affected by OCD
					and related disorders
				</li>
				<li>
					<CustomLink
						url={
							"https://www.nimh.nih.gov/health/topics/obsessive-compulsive-disorder-ocd"
						}
						newWindow={true}
					>
						National Institute of Mental Health (NIMH) - OCD
					</CustomLink>
					- Government resource with research-based information about OCD
				</li>
				<li>
					<CustomLink
						url={
							"https://www.psychiatry.org/patients-families/obsessive-compulsive-disorder/what-is-obsessive-compulsive-disorder"
						}
						newWindow={true}
					>
						American Psychiatric Association - OCD Information
					</CustomLink>
					- Clinical overview of OCD symptoms and treatment
				</li>
			</ul>
		</div>
	);
}

////////// ONLINE RESOURCES

function OnlineResources() {
	return (
		<div className="resource__part">
			<strong>Online Resources:</strong>
			<ul>
				<li>
					<CustomLink
						url={
							"https://www.calmtherapy.center/blog/living-with-intrusive-thoughts-why-control-doesn-t-work-and-what-actually-helps"
						}
						newWindow={true}
					>
						Living with Intrusive Thoughts: Why Control Doesn{"'"}t Work and
						What Actually Helps
					</CustomLink>
					- CALM Therapy blog exploring why fighting intrusive thoughts
					backfires and offering alternative approaches
				</li>
				<li>
					<CustomLink
						url={
							"https://www.treatmyocd.com/what-is-ocd/info/ocd-stats-and-science/5-free-worksheets-for-people-struggling-with-ocd-developed-by-experts"
						}
						newWindow={true}
					>
						NOCD Free OCD Worksheets
					</CustomLink>
					- Expert-developed worksheets for self-reflection and support
				</li>
				<li>
					<CustomLink
						url={
							"https://www.psychologytools.com/professional/problems/obsessive-compulsive-disorder-ocd"
						}
						newWindow={true}
					>
						Psychology Tools - OCD Resources
					</CustomLink>{" "}
					- Professional treatment resources and information handouts
				</li>
			</ul>
		</div>
	);
}

/////////// MAIN
function OcdResources() {
	return (
		<section className="ocd-therapy block center related__links alt">
			<div className="container block__content">
				<h3>Additional OCD Resources</h3>
				<OrgsAndInfo />
				<OnlineResources />
				<i>
					These resources are for educational purposes and are not substitutes
					for professional treatment. If you{"'"}re experiencing OCD symptoms,
					consulting with a qualified mental health professional is recommended.
				</i>
			</div>
		</section>
	);
}

export default OcdResources;
