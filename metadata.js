// layout.js

export const layout = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || "https://calmtherapy.center"
	),

	title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
	description:
		"Private-pay therapy for adults seeking growth and transformation. East Coast based, licensed in NY, NJ, PA, and available in 40 other U.S. states and jurisdictions.",
	alternates: { canonical: "https://calmtherapy.center/" },
	openGraph: {
		title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
		description:
			"Therapy that integrates evidence-based care with holistic growth. Licensed in NY, NJ, PA, and available in 43 states.",
		url: "https://calmtherapy.center/",
		images: [
			{ url: "/social/ss.webp", width: 1200, height: 630, alt: "CALM Therapy" },
		],
	},

	manifest: "/manifest.json",
	// Icons for all contexts
	icons: {
		icon: [
			{ url: "/favicon.ico" }, // legacy
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		apple: [
			{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
		],
		// Android/other extra icons
		other: [
			{ rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
			{ rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
			// Safari pinned tab (monochrome SVG). If you have it:
			{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7f5a83" },
		],
	},
};

// KAP "/kap"

export const kap = {
	title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
	description:
		"Explore virtual ketamine-assisted psychotherapy (KAP) at CALM Therapy, a trauma-informed, spiritually grounded path to healing anxiety, OCD, and emotional stuckness. Available to adults in 43 PSYPACT-participating states and licensed in NY, NJ, and PA.",
	openGraph: {
		title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
		description:
			"Explore virtual KAP at CALM Therapy: evidence-based and spiritually grounded care for anxiety, OCD, and emotional stuckness. Available in 43 PSYPACT states and licensed in NY, NJ, PA.",
		url: "https://calmtherapy.center/kap",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy social preview image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
		description:
			"CALM Therapy offers virtual, trauma-informed KAP to help adults heal from anxiety, OCD, and emotional stuckness. Now available in 43 states.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/kap",
	},
};

// blog

export const blog = {
	title: "Blog",
	description: "Latest posts from CALM Wellness Counseling",
};

// FAQ "/faq"

export const faq = {
	title: "FAQ | CALM Therapy",
	description:
		"Find clear answers to common questions about therapy, fees, and our East Coast-based services in 43 states.",
	alternates: { canonical: "https://calmtherapy.center/faq" },
	openGraph: {
		title: "FAQ | CALM Therapy",
		description:
			"Answers about therapy specialties, fees, and how we work with clients.",
		url: "https://calmtherapy.center/faq",
		images: [{ url: "/social/ss.webp", width: 1200, height: 630, alt: "FAQ" }],
	},
};

// fees-and-insurance "/fees-and-insurance"

export const feesAndInsurance = {
	title: "Fees & Insurance | CALM Therapy",
	description:
		"Transparent, private-pay therapy with out-of-network insurance options. Learn about fees and payment at CALM Therapy.",
	alternates: { canonical: "https://calmtherapy.center/fees-and-insurance" },
	openGraph: {
		title: "Fees & Insurance | CALM Therapy",
		description:
			"Private-pay therapy designed for flexibility, with out-of-network options available.",
		url: "https://calmtherapy.center/fees-and-insurance",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "Fees and Insurance",
			},
		],
	},
};

// credentials page "/people/tanya-sigh"

export const credentials = {
	title: "Dr. Tanya Singh - Credentials | CALM Therapy",
	description:
		"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
	keywords:
		"Dr. Tanya Singh, clinical psychologist, CALM Therapy founder, anxiety specialist, OCD therapist, trauma therapy",
	openGraph: {
		title: "Dr. Tanya Singh - Credentials | CALM Therapy",
		description:
			"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
		url: "https://www.calmtherapy.center/people/tanya-singh",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Dr. Tanya Singh Credentials",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Dr. Tanya Singh - Credentials | CALM Therapy",
		description:
			"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy approaches.",
		images: ["/social/ss.webp"],
	},
};

// BDD "/specialties/bdd"

export const bddMetadata = {
	title: "BDD Therapy | Body Dysmorphic Disorder Treatment | CALM Therapy",
	description:
		"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image through specialized care.",
	keywords:
		"BDD therapy, body dysmorphic disorder treatment, body image therapy, appearance concerns therapy, self-image counseling, body dysmorphia",
	openGraph: {
		title: "BDD & Body Image Therapy | CALM Therapy",
		description:
			"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image.",
		url: "https://www.calmtherapy.center/specialties/body-dysmorphic-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - BDD & Body Image Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "BDD & Body Image Therapy | CALM Therapy",
		description:
			"Therapy for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image.",
		images: ["/social/ss.webp"],
	},
};

// complex trauma "/specialties/complex-trauma"

export const complexTraumaMetadata = {
	title: "Complex Trauma Therapy | C-PTSD Treatment | CALM Therapy",
	description:
		"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care. Telehealth available nationwide.",
	keywords:
		"complex trauma therapy, C-PTSD treatment, complex PTSD therapy, trauma counseling, childhood trauma therapy, developmental trauma",
	openGraph: {
		title: "Complex Trauma & C-PTSD Therapy | CALM Therapy",
		description:
			"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care.",
		url: "https://www.calmtherapy.center/specialties/complex-trauma",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Complex Trauma & C-PTSD Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Complex Trauma & C-PTSD Therapy | CALM Therapy",
		description:
			"Specialized therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care.",
		images: ["/social/ss.webp"],
	},
};

// depression "/specialties/depression"

export const depressionMetadata = {
	title: "Depression Therapy | CALM Therapy",
	description:
		"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches that honor your whole experience.",
	keywords:
		"depression therapy, major depression treatment, depression counseling, therapy for depression, depressive disorder treatment, mood therapy",
	openGraph: {
		title: "Depression Therapy | CALM Therapy",
		description:
			"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches.",
		url: "https://www.calmtherapy.center/specialties/depression",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Depression Therapy",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Depression Therapy | CALM Therapy",
		description:
			"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches.",
		images: ["/social/ss.webp"],
	},
};

// gad "/specialties/gad"

export const gadMetadata = {
	title: "GAD Therapy | Generalized Anxiety Disorder Treatment | CALM Therapy",
	description:
		"Therapy for generalized anxiety disorder (GAD). Reduce persistent worry and reconnect with steadiness through mindfulness, CBT, and somatic approaches.",
	keywords:
		"GAD therapy, generalized anxiety disorder treatment, anxiety counseling, worry therapy, persistent anxiety treatment, anxiety therapy",
	openGraph: {
		title: "GAD & Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for generalized anxiety disorder (GAD). Reduce persistent worry and reconnect with steadiness through evidence-based approaches.",
		url: "https://www.calmtherapy.center/specialties/generalized-anxiety-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - GAD & Anxiety Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "GAD & Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for generalized anxiety disorder (GAD). Reduce persistent worry and reconnect with steadiness through evidence-based approaches.",
		images: ["/social/ss.webp"],
	},
};

// life transitions "/specialties/life-transitions"
export const lifeTransitionsMetadata = {
	title:
		"Life Transitions Therapy | Career & Life Change Support | CALM Therapy",
	description:
		"Therapy for life transitions and major life changes. Navigate career, relationship, and personal transitions with clarity, integrity, and support.",
	keywords:
		"life transitions therapy, career change therapy, life change counseling, transition support, major life changes therapy, life transitions",
	openGraph: {
		title: "Life Transitions Therapy & Support | CALM Therapy",
		description:
			"Therapy for life transitions and major life changes. Navigate career, relationship, and personal transitions with clarity and integrity.",
		url: "https://www.calmtherapy.center/specialties/life-transitions",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Life Transitions & Change Support Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Life Transitions Therapy & Support | CALM Therapy",
		description:
			"Therapy for life transitions and major life changes. Navigate career, relationship, and personal transitions with clarity and integrity.",
		images: ["/social/ss.webp"],
	},
};

// ocd "/specialties/ocd"

export const ocdMetadata = {
	title:
		"OCD Therapy & Treatment | Obsessive-Compulsive Disorder | CALM Therapy",
	description:
		"Specialized therapy for OCD using ERP, CBT, and acceptance-based approaches. Break cycles of compulsions and rebuild self-trust. Serving 43 U.S. states via telehealth.",
	keywords:
		"OCD therapy, obsessive compulsive disorder treatment, ERP therapy, OCD counseling, intrusive thoughts therapy, compulsions treatment",
	openGraph: {
		title: "Expert OCD Therapy & Treatment | CALM Therapy",
		description:
			"Specialized therapy for OCD using ERP, CBT, and acceptance-based approaches. Break cycles of compulsions and rebuild self-trust.",
		url: "https://www.calmtherapy.center/specialties/ocd",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - OCD Treatment & Therapy Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Expert OCD Therapy & Treatment | CALM Therapy",
		description:
			"Specialized therapy for OCD using ERP, CBT, and acceptance-based approaches. Break cycles of compulsions and rebuild self-trust.",
		images: ["/social/ss.webp"],
	},
};

// panic disorder "/specialties/pd"

export const panicDisorderMetadata = {
	title: "Panic Disorder Therapy | Panic Attack Treatment | CALM Therapy",
	description:
		"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches and nervous system regulation.",
	keywords:
		"panic disorder therapy, panic attack treatment, panic therapy, anxiety therapy, panic disorder counseling, fear of panic",
	openGraph: {
		title: "Panic Disorder & Panic Attack Therapy | CALM Therapy",
		description:
			"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches.",
		url: "https://www.calmtherapy.center/specialties/panic-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Panic Disorder & Panic Attack Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Panic Disorder & Panic Attack Therapy | CALM Therapy",
		description:
			"Therapy for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches.",
		images: ["/social/ss.webp"],
	},
};

// perfectionism "/specialties/perfectionism"

export const perfectionismMetadata = {
	title:
		"Perfectionism Therapy | Overcome Perfectionist Patterns | CALM Therapy",
	description:
		"Therapy for perfectionism. Practice enoughness from the inside out and explore the protective parts that drive perfectionist patterns.",
	keywords:
		"perfectionism therapy, perfectionist counseling, high standards therapy, perfectionism treatment, self-criticism therapy, perfectionist patterns",
	openGraph: {
		title: "Perfectionism Therapy & Treatment | CALM Therapy",
		description:
			"Therapy for perfectionism. Practice enoughness from the inside out and explore the protective parts that drive perfectionist patterns.",
		url: "https://www.calmtherapy.center/specialties/perfectionism",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Perfectionism Treatment & Therapy Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Perfectionism Therapy & Treatment | CALM Therapy",
		description:
			"Therapy for perfectionism. Practice enoughness from the inside out and explore the protective parts that drive perfectionist patterns.",
		images: ["/social/ss.webp"],
	},
};

// sad "/specialties/sad"

export const socialAnxietyMetadata = {
	title: "Social Anxiety Therapy | CALM Therapy",
	description:
		"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
	keywords:
		"social anxiety therapy, SAD therapy, fear of judgment therapy, social anxiety counseling, social confidence",
	openGraph: {
		title: "Social Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
		url: "https://www.calmtherapy.center/specialties/social-anxiety-disorder",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Social Anxiety Treatment Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Social Anxiety Therapy | CALM Therapy",
		description:
			"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
		images: ["/social/ss.webp"],
	},
};

// self-worth "/specialties/self-worth"

export const selfEsteemMetadata = {
	title: "Self-Esteem & Self-Worth Therapy | Build Confidence | CALM Therapy",
	description:
		"Therapy for self-esteem and self-worth issues. Reconnect with internal worth independent of performance or approval. Compassionate, individualized care.",
	keywords:
		"self-esteem therapy, self-worth counseling, confidence building, low self-esteem treatment, self-acceptance therapy, worth and value therapy",
	openGraph: {
		title: "Self-Esteem & Self-Worth Therapy | CALM Therapy",
		description:
			"Therapy for self-esteem and self-worth issues. Reconnect with internal worth independent of performance or approval.",
		url: "https://www.calmtherapy.center/specialties/self-worth",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Self-Esteem & Self-Worth Therapy Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Self-Esteem & Self-Worth Therapy | CALM Therapy",
		description:
			"Therapy for self-esteem and self-worth issues. Reconnect with internal worth independent of performance or approval.",
		images: ["/social/ss.webp"],
	},
};

// spiritual inquiry "/specialties/spiritual-inquiry"

export const spiritualExplorationMetadata = {
	title:
		"Spiritual Exploration Therapy | Existential Counseling | CALM Therapy",
	description:
		"Therapy for spiritual exploration and existential inquiry. Explore deeper longings and meaning without imposed frameworks in a supportive, open space.",
	keywords:
		"spiritual exploration therapy, existential therapy, meaning-making therapy, spiritual counseling, existential inquiry, spiritual development",
	openGraph: {
		title: "Spiritual Exploration & Existential Therapy | CALM Therapy",
		description:
			"Therapy for spiritual exploration and existential inquiry. Explore deeper longings and meaning without imposed frameworks.",
		url: "https://www.calmtherapy.center/specialties/spiritual-inquiry",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Spiritual Exploration & Existential Inquiry Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Spiritual Exploration & Existential Therapy | CALM Therapy",
		description:
			"Therapy for spiritual exploration and existential inquiry. Explore deeper longings and meaning without imposed frameworks.",
		images: ["/social/ss.webp"],
	},
};

// stress management "/specialties/stress-management"

export const stressManagementMetadata = {
	title: "Stress Management Therapy | Work-Life Balance | CALM Therapy",
	description:
		"Therapy for stress management and work-life balance. Recalibrate your life patterns, set boundaries, and create sustainable balance through integrative approaches.",
	keywords:
		"stress management therapy, work-life balance therapy, stress counseling, chronic stress treatment, burnout therapy, stress and anxiety",
	openGraph: {
		title: "Stress Management & Work-Life Balance Therapy | CALM Therapy",
		description:
			"Therapy for stress management and work-life balance. Recalibrate your life patterns, set boundaries, and create sustainable balance.",
		url: "https://www.calmtherapy.center/specialties/stress-management",
		siteName: "CALM Therapy",
		images: [
			{
				url: "/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy - Stress Management & Work-Life Balance Services",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Stress Management & Work-Life Balance Therapy | CALM Therapy",
		description:
			"Therapy for stress management and work-life balance. Recalibrate your life patterns, set boundaries, and create sustainable balance.",
		images: ["/social/ss.webp"],
	},
};

// where we serve "https://www.calmtherapy.center/where-we-serve"

export const whereWeServe = {
	title: "Where We Serve | Online Therapy in 43 States | CALM Therapy",
	description:
		"See where CALM Therapy provides online care. Licensed in NJ, NY & PA and authorized via PSYPACT to offer telehealth in 40 additional U.S. states and jurisdictions. Explore the map and search to find your state, including MD, CT & VA.",
	openGraph: {
		title: "Where We Serve | Online Therapy in 43 States | CALM Therapy",
		description:
			"CALM Therapy offers virtual care licensed in NJ, NY & PA and authorized via PSYPACT to serve clients in 40 additional states and jurisdictions. Use the map or search to find your state, including MD, CT & VA.",
		url: "https://calmtherapy.center/where-we-serve",
		type: "website",
		images: [
			{
				url: "https://calmtherapy.center/social/ss.webp",
				width: 1200,
				height: 630,
				alt: "CALM Therapy social preview image",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Where We Serve | Online Therapy in 43 States | CALM Therapy",
		description:
			"Online therapy licensed in NJ, NY & PA and authorized via PSYPACT in 40 other states and jurisdictions. Use the map and search to find your state, including MD, CT & VA.",
		images: ["https://calmtherapy.center/social/ss.webp"],
	},
	alternates: {
		canonical: "https://calmtherapy.center/where-we-serve",
	},
};
