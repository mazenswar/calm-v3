"use client";
import React from "react";
import "./ocd_therapy.scss";

import OcdResources from "./OcdResources";
import OcdCTA from "./OcdCTA";
import WhyCalm from "./WhyCalm";
import WhatToExpect from "./WhatToExpect";
import HowTherapyHelps from "./HowTherapyHelps";
import CommonExperiences from "./CommonExperiences";
import WhatIsOcd from "./WhatIsOcd";
import OcdHero from "./OcdHero";

export default function OCDTherapy() {
	return (
		<main id="ocd__therapy">
			<OcdHero />

			<WhatIsOcd />

			<CommonExperiences />

			<HowTherapyHelps />

			<WhatToExpect />

			<WhyCalm />

			<OcdCTA />
			<OcdResources />
		</main>
	);
}

{
	/* <ul>
  <li>
    <CustomLink
      url={
        "/blog/living-with-intrusive-thoughts-why-control-doesn-t-work-and-what-actually-helps"
      }
      newWindow={true}
    >
      Living with Intrusive Thoughts: Why Control Doesn’t Work and
      What Actually Helps
    </CustomLink>
  </li>
</ul> */
}

// Additional OCD Resources

// Self-Help Books:

// "The OCD Workbook" by Bruce M. Hyman & Cherry Pedrick - Evidence-based self-help strategies used in clinics worldwide
// "Stop Obsessing!" by Edna Foa & Reid Wilson - Scientifically-based self-help program by leading OCD researchers
// "Getting Control" by Lee Baer - Practical guide for overcoming obsessions and compulsions

// Online Resources:

// NOCD Free OCD Worksheets - Expert-developed worksheets for self-reflection and support
// Psychology Tools - OCD Resources - Professional treatment resources and information handouts

// These resources are for educational purposes and are not substitutes for professional treatment. If you're experiencing OCD symptoms, consulting with a qualified mental health professional is recommended.
