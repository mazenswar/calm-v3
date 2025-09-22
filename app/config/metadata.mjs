// config/metadata.js

export const metadata = {
	site: {
		base: new URL(
			process.env.NEXT_PUBLIC_SITE_URL || "https://calmtherapy.center"
		),
		manifest: "/manifest.json",
		icons: {
			icon: [
				{ url: "/favicon.ico" },
				{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
				{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			],
			apple: [
				{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
			],
			other: [
				{ rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
				{ rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
				{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7f5a83" },
			],
		},
	},

	pages: {
		home: {
			title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
			description:
				"Private-pay therapy for adults seeking growth and transformation. East Coast based, licensed in NY, NJ, PA, and available in 42 other states through PSYPACT (43 total).",
			alternates: { canonical: "https://calmtherapy.center/" },
			openGraph: {
				title: "CALM Therapy | Modern Psychology, Timeless Wisdom",
				description:
					"Therapy that integrates evidence-based care with holistic growth. Licensed in NY, NJ, PA, and available in 42 other states through PSYPACT (43 total).",
				url: "https://calmtherapy.center/",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy",
					},
				],
			},
		},

		about: {
			title: "About CALM Therapy",
			description:
				"Learn about CALM Therapy’s mission, approach, and values. We integrate evidence-based care with holistic perspectives to support adults seeking growth and transformation.",
			alternates: { canonical: "https://calmtherapy.center/about" },
			openGraph: {
				title: "About CALM Therapy",
				description:
					"Discover CALM Therapy’s mission and approach. We provide integrative, private-pay therapy for adults seeking meaningful change across 43 U.S. states and jurisdictions.",
				url: "https://calmtherapy.center/about",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "About CALM Therapy",
					},
				],
			},
		},

		kap: {
			title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
			description:
				"Explore virtual ketamine-assisted psychotherapy (KAP) at CALM Therapy, a trauma-informed, spiritually grounded path to healing anxiety, OCD, and feeling stuck. Licensed in NY, NJ, and PA, with telehealth available in 42 other states through PSYPACT (43 total).",
			alternates: { canonical: "https://calmtherapy.center/kap" },
			openGraph: {
				title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
				description:
					"Explore virtual KAP at CALM Therapy: evidence-based and spiritually grounded care for anxiety, OCD, and the experience of feeling stuck.",
				url: "https://calmtherapy.center/kap",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - KAP",
					},
				],
			},
			twitter: {
				card: "summary_large_image",
				title: "Ketamine-Assisted Psychotherapy (KAP) | CALM Therapy",
				description:
					"CALM Therapy offers virtual, trauma-informed KAP for adults. Licensed in NY, NJ, and PA, with telehealth available in 42 other states through PSYPACT (43 total).",
				images: ["/social/ss.webp"],
			},
		},

		faq: {
			title: "FAQ | CALM Therapy",
			description:
				"Find clear answers to common questions about therapy, fees, and our East Coast-based services in 43 U.S. states and jurisdictions.",
			alternates: { canonical: "https://calmtherapy.center/faq" },
			openGraph: {
				title: "FAQ | CALM Therapy",
				description:
					"Answers about therapy specialties, fees, and how we work with clients.",
				url: "https://calmtherapy.center/faq",
				images: [
					{ url: "/social/ss.webp", width: 1200, height: 630, alt: "FAQ" },
				],
			},
		},

		specialties: {
			title: "Therapy Specialties | CALM Therapy",
			description:
				"Explore CALM Therapy’s specialties including anxiety, OCD, trauma, depression, and integrative approaches. Learn how we support adults across 43 U.S. states and jurisdictions.",
			alternates: { canonical: "https://calmtherapy.center/specialties" },
			openGraph: {
				title: "Therapy Specialties | CALM Therapy",
				description:
					"Discover CALM Therapy’s specialty services including OCD therapy, anxiety treatment, trauma support, depression therapy, and more.",
				url: "https://calmtherapy.center/specialties",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "Therapy Specialties | CALM Therapy",
					},
				],
			},
		},

		feesAndInsurance: {
			title: "Fees & Insurance | CALM Therapy",
			description:
				"Transparent, private-pay therapy with out-of-network insurance options. Learn about fees and payment at CALM Therapy.",
			alternates: {
				canonical: "https://calmtherapy.center/fees-and-insurance",
			},
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
						alt: "Fees & Insurance",
					},
				],
			},
		},

		credentials: {
			title: "Dr. Tanya Singh - Credentials | CALM Therapy",
			description:
				"Learn about Dr. Tanya Singh's clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy.",
			alternates: {
				canonical: "https://calmtherapy.center/people/tanya-singh",
			},
			openGraph: {
				title: "Dr. Tanya Singh - Credentials | CALM Therapy",
				description:
					"Clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy.",
				url: "https://calmtherapy.center/people/tanya-singh",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "Dr. Tanya Singh Credentials",
					},
				],
			},
			twitter: {
				card: "summary_large_image",
				title: "Dr. Tanya Singh - Credentials | CALM Therapy",
				description:
					"Clinical training, education, and experience. Licensed psychologist specializing in anxiety, OCD, trauma, and integrative therapy.",
				images: ["/social/ss.webp"],
			},
		},

		blog: {
			title: "Blog | CALM Therapy",
			description:
				"Latest posts from CALM Therapy, covering holistic and evidence-based approaches to growth and healing.",
		},

		whereWeServe: {
			title: "Where We Serve | Online Therapy in 43 States | CALM Therapy",
			description:
				"See where CALM Therapy provides online care. Licensed in NJ, NY, and PA, with telehealth available in 42 other states through PSYPACT (43 total).",
			alternates: { canonical: "https://calmtherapy.center/where-we-serve" },
			openGraph: {
				title: "Where We Serve | Online Therapy in 43 States | CALM Therapy",
				description:
					"Virtual care licensed in NJ, NY, and PA, with telehealth available in 42 other states through PSYPACT (43 total). Use the map to find your state, including MD, CT & VA.",
				url: "https://calmtherapy.center/where-we-serve",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "Where We Serve",
					},
				],
			},
		},
	},

	specialties: {
		ocd: {
			title:
				"OCD Therapy & Treatment | Obsessive-Compulsive Disorder | CALM Therapy",
			description:
				"Therapy for OCD using ERP, CBT, and acceptance-based approaches. Break cycles of compulsions and rebuild self-trust. Serving clients across 43 U.S. states and jurisdictions.",
			openGraph: {
				title: "Expert OCD Therapy & Treatment | CALM Therapy",
				description:
					"Therapy for OCD using ERP, CBT, and acceptance-based approaches. Break cycles of compulsions and rebuild self-trust.",
				url: "https://calmtherapy.center/specialties/ocd",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - OCD Treatment & Therapy Services",
					},
				],
			},
		},

		gad: {
			title:
				"GAD Therapy | Generalized Anxiety Disorder Treatment | CALM Therapy",
			description:
				"Therapy for generalized anxiety disorder (GAD). Reduce persistent worry and reconnect with steadiness through mindfulness, CBT, and somatic approaches.",
			openGraph: {
				title: "GAD & Anxiety Therapy | CALM Therapy",
				description:
					"Therapy for generalized anxiety disorder (GAD). Reduce persistent worry and reconnect with steadiness through evidence-based approaches.",
				url: "https://calmtherapy.center/specialties/gad",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - GAD & Anxiety Treatment Services",
					},
				],
			},
		},

		depression: {
			title: "Depression Therapy | CALM Therapy",
			description:
				"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches that honor your whole experience.",
			openGraph: {
				title: "Depression Therapy | CALM Therapy",
				description:
					"Therapy for depression and major depressive disorder. Reconnect with joy, meaning, and vitality through integrative approaches.",
				url: "https://calmtherapy.center/specialties/depression",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Depression Therapy",
					},
				],
			},
		},

		complexTrauma: {
			title: "Complex Trauma Therapy | C-PTSD Treatment | CALM Therapy",
			description:
				"Therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care. Telehealth available in 43 U.S. states and jurisdictions.",
			openGraph: {
				title: "Complex Trauma & C-PTSD Therapy | CALM Therapy",
				description:
					"Therapy for complex trauma and C-PTSD. Create safety, clarity, and self-compassion through trauma-informed care.",
				url: "https://calmtherapy.center/specialties/complex-trauma",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Complex Trauma & C-PTSD Treatment Services",
					},
				],
			},
		},

		bdd: {
			title: "BDD Therapy | Body Dysmorphic Disorder Treatment | CALM Therapy",
			description:
				"Care for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image through individualized support.",
			openGraph: {
				title: "BDD & Body Image Therapy | CALM Therapy",
				description:
					"Care for body dysmorphic disorder (BDD). Develop a compassionate relationship with yourself and challenge distorted self-image.",
				url: "https://calmtherapy.center/specialties/bdd",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - BDD & Body Image Treatment Services",
					},
				],
			},
		},

		panicDisorder: {
			title: "Panic Disorder Therapy | Panic Attack Treatment | CALM Therapy",
			description:
				"Support for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches and nervous system regulation.",
			openGraph: {
				title: "Panic Disorder & Panic Attack Therapy | CALM Therapy",
				description:
					"Support for panic disorder and panic attacks. Change your relationship with panic sensations through acceptance-based approaches.",
				url: "https://calmtherapy.center/specialties/pd",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Panic Disorder & Panic Attack Treatment Services",
					},
				],
			},
		},

		perfectionism: {
			title:
				"Perfectionism Therapy | Overcome Perfectionist Patterns | CALM Therapy",
			description:
				"Therapy for perfectionism. Practice enoughness from the inside out and explore the protective parts that drive perfectionist patterns.",
			openGraph: {
				title: "Perfectionism Therapy & Treatment | CALM Therapy",
				description:
					"Therapy for perfectionism. Practice enoughness from the inside out and explore the protective parts that drive perfectionist patterns.",
				url: "https://calmtherapy.center/specialties/perfectionism",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Perfectionism Treatment & Therapy Services",
					},
				],
			},
		},

		socialAnxiety: {
			title: "Social Anxiety Therapy | CALM Therapy",
			description:
				"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
			openGraph: {
				title: "Social Anxiety Therapy | CALM Therapy",
				description:
					"Therapy for social anxiety disorder (SAD). Overcome fear of judgment and reclaim your voice through exposure therapy and self-worth work.",
				url: "https://calmtherapy.center/specialties/sad",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Social Anxiety Treatment Services",
					},
				],
			},
		},

		selfEsteem: {
			title:
				"Self-Esteem & Self-Worth Therapy | Build Confidence | CALM Therapy",
			description:
				"Therapy for self-esteem and self-worth issues. Reconnect with internal worth independent of performance or approval. Compassionate, individualized care.",
			openGraph: {
				title: "Self-Esteem & Self-Worth Therapy | CALM Therapy",
				description:
					"Therapy for self-esteem and self-worth issues. Reconnect with internal worth independent of performance or approval.",
				url: "https://calmtherapy.center/specialties/self-worth",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Self-Esteem & Self-Worth Therapy Services",
					},
				],
			},
		},

		lifeTransitions: {
			title:
				"Life Transitions Therapy | Career & Life Change Support | CALM Therapy",
			description:
				"Therapy for life transitions and major life changes. Navigate career, relationship, and personal transitions with clarity, integrity, and support.",
			openGraph: {
				title: "Life Transitions Therapy & Support | CALM Therapy",
				description:
					"Therapy for life transitions and major life changes. Navigate career, relationship, and personal transitions with clarity and integrity.",
				url: "https://calmtherapy.center/specialties/life-transitions",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Life Transitions & Change Support Services",
					},
				],
			},
		},

		spiritualExploration: {
			title: "Spiritual Inquiry | CALM Therapy",
			description:
				"Sessions for spiritual exploration and existential inquiry. Explore deeper longings and meaning without imposed frameworks in a supportive, open space.",
			openGraph: {
				title: "Spiritual Inquiry | CALM Therapy",
				description:
					"Sessions for spiritual exploration and existential inquiry. Explore deeper longings and meaning without imposed frameworks in a supportive, open space.",
				url: "https://calmtherapy.center/specialties/spiritual-inquiry",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Spiritual Exploration & Existential Inquiry Services",
					},
				],
			},
		},

		stressManagement: {
			title: "Stress Management Therapy | Work-Life Balance | CALM Therapy",
			description:
				"Therapy for stress management and work-life balance. Recalibrate your life patterns, set boundaries, and create sustainable balance through integrative approaches.",
			openGraph: {
				title: "Stress Management & Work-Life Balance Therapy | CALM Therapy",
				description:
					"Therapy for stress management and work-life balance. Recalibrate your life patterns, set boundaries, and create sustainable balance.",
				url: "https://calmtherapy.center/specialties/stress-management",
				images: [
					{
						url: "/social/ss.webp",
						width: 1200,
						height: 630,
						alt: "CALM Therapy - Stress Management & Work-Life Balance Services",
					},
				],
			},
		},
	},
};
