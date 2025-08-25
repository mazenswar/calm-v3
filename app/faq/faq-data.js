export const faqGroups = [
	{
		id: "therapy",
		title: "Therapy & Fit",
		items: [
			{
				id: "therapy-approach",
				q: "What kind of therapy do you offer?",
				a: "We take an integrative approach rooted in evidence-based practices like cognitive behavioral therapy (CBT), mindfulness, and insight-oriented work. Depending on your needs, sessions may focus on building skills, exploring deeper patterns, or developing more compassionate awareness. This isn't just about coping; it's about meaningful, sustainable change.",
				tags: ["approach", "integrative", "evidence-based"],
			},
			{
				id: "therapy-virtual",
				q: "Do you offer virtual sessions?",
				a: "Yes. All therapy sessions are offered online via secure video conferencing. Many clients find virtual therapy just as effective and more accessible, especially when it fits seamlessly into their day.",
				tags: ["virtual", "logistics"],
			},
			{
				id: "therapy-population",
				q: "Do you work with couples, families, or teens?",
				a: "We work with adults and older adolescents (age 16+). We do not currently offer couples or family therapy.",
				tags: ["population"],
			},
			{
				id: "therapy-duration",
				q: "How long will I need to be in therapy?",
				a: "Therapy isn't one-size-fits-all. Some clients seek short-term support for a specific issue, while others stay longer for deeper work. We'll regularly revisit your goals together to ensure therapy continues to serve your needs.",
				tags: ["duration", "goals"],
			},
			{
				id: "therapy-scheduling",
				q: "How do I schedule a session?",
				a: "You can request a free 15-minute consultation using the scheduling buttons throughout the site. Scheduling is handled through our secure SimplePractice portal, where you can choose a time and complete a HIPAA-compliant intake form.",
				tags: ["schedule", "intake"],
			},
			{
				id: "therapy-cancellation",
				q: "What if I need to cancel or reschedule a session?",
				a: "Please provide at least 24 hours' notice to cancel or reschedule a session. Sessions canceled with less than 24 hours' notice may be charged the full session fee.",
				tags: ["policy", "cancellation"],
			},
			{
				id: "therapy-fit",
				q: "How will I know if you're the right therapist for me?",
				a: "That’s what the free consultation is for. It’s a chance for us to connect, discuss what you're looking for, and see if it feels like a good fit. If it doesn’t, we’ll gladly offer a referral to someone who might be a better match.",
				tags: ["fit", "consultation"],
			},
		],
	},
	{
		id: "insurance",
		title: "Fees & Insurance",
		items: [
			{
				id: "fees-insurance-why-oons",
				q: "Why don't you accept insurance?",
				a: "To offer care that is flexible, personalized, and free from diagnostic labels or session limits, we work outside of insurance networks. This allows us to focus on what matters most: your healing. You may be able to use out-of-network benefits through your insurance provider, depending on your plan. After each session, we provide a superbill that you can submit for reimbursement. For more information, visit the Fees & Insurance page.",
				tags: ["insurance", "out-of-network"],
			},
			{
				id: "fees-pricing",
				q: "How much do sessions cost?",
				a: "An initial intake session (75 minutes) is $420. Ongoing individual sessions (45 minutes) are $250. You can find more details about fees and out-of-network reimbursement on the Fees & Insurance page.",
				tags: ["pricing"],
			},
			{
				id: "fees-why-expensive",
				q: "Why is therapy so expensive?",
				a: "Therapy is an investment in your mental health and well-being. It involves specialized training, ongoing education, and dedicated time before, during, and after sessions to provide quality care. We offer a limited number of reduced-fee slots and can help connect you with other options if needed.",
				tags: ["pricing", "access"],
			},
			{
				id: "fees-verify-coverage",
				q: "How do I verify my coverage?",
				a: "You can call your insurance provider and provide them with CALM’s practice information and the relevant CPT codes. This will help you check your out-of-network benefits and understand what is covered under your plan.",
				tags: ["verify", "insurance"],
			},
			{
				id: "fees-reimbursement",
				q: "How does reimbursement work after each session?",
				a: "After each session, CALM provides you with a superbill, which you submit to your insurance company for reimbursement. The amount reimbursed depends on your individual insurance plan and coverage.",
				tags: ["reimbursement", "insurance"],
			},
		],
	},
	{
		id: "kap",
		title: "Ketamine-Assisted Psychotherapy (KAP)",
		items: [
			{
				id: "kap-appropriate",
				q: "Is Ketamine-Assisted Psychotherapy (KAP) right for everyone?",
				a: "No, KAP is not appropriate for everyone. Like any therapeutic modality, it is effective when used in the right context with careful consideration. KAP may be a helpful tool for those with treatment-resistant symptoms and who are open to exploring their inner experience in an altered state. This is assessed together during intake and preparation. It is not a one-size-fits-all solution.",
				tags: ["kap", "suitability"],
			},
			{
				id: "kap-fix-me",
				q: "Will ketamine fix me?",
				a: "No single tool or treatment can fix a person, because you're not broken to begin with. Healing is not linear and does not come from a single experience or insight. Ketamine, when used safely and integrated in therapy, can support new perspectives, but it is not a cure-all. What matters most is how you work with the experience.",
				tags: ["kap", "expectations"],
			},
			{
				id: "kap-why-offer",
				q: "Why do you offer KAP if you already use other therapies?",
				a: "People are complex, and no single approach works for everyone all the time. KAP is one tool among many that we draw from to meet individual needs. While we use therapies like CBT, IFS, and mindfulness, sometimes accessing insight or memory in a different state of consciousness can be helpful. Our goal is to respond to what is needed, integrating across modalities as appropriate.",
				tags: ["kap", "integrative"],
			},
		],
	},
	{
		id: "service-area",
		title: "Service Area & Access",
		items: [
			{
				id: "service-virtual",
				q: "Do you offer virtual sessions?",
				a: "Yes. All therapy sessions are offered online via secure video conferencing. Many clients find virtual therapy just as effective and more accessible, especially when it fits seamlessly into their day.",
				tags: ["virtual", "access"],
			},
			{
				id: "service-where",
				q: "Where do you offer therapy?",
				a: "CALM is licensed to provide therapy in New York, New Jersey, and Pennsylvania, and is also available in 40 other states and jurisdictions through PSYPACT, totaling 43 states and jurisdictions. Our practice is East Coast based.",
				tags: ["service-area", "psypact"],
			},
		],
	},
];

// Backward-compatible flat list export in case existing components expect `questions`
export const questions = faqGroups.flatMap((group, gi) =>
	group.items.map((item, idx) => ({
		id: item.id,
		q: item.q,
		a: item.a,
		tags: item.tags,
		groupId: group.id,
		groupTitle: group.title,
		order: gi * 100 + idx,
	}))
);
