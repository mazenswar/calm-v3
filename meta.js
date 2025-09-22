// static routes

export const staticRoutes = [
	"/",
	"/specialties",
	"/specialties/ocd",
	"/specialties/gad",
	"/specialties/sad",
	"/specialties/pd",
	"/specialties/bdd",
	"/specialties/complex-trauma",
	"/specialties/depression",
	"/specialties/perfectionism",
	"/specialties/self-worth",
	"/specialties/life-transitions",
	"/specialties/stress-management",
	"/specialties/spiritual-inquiry",
	"/people/tanya-singh",
	"/kap",
	"/fees-and-insurance",
	"/about",
	"/blog",
	"/faq",
	"/where-we-serve",
];

// BLOG dynamic page metadata /blog/[slug]
//
/* ---------------- Metadata ---------------- */
export async function generateMetadata({ params }) {
	const { slug } = await params;
	const post = await groqFetch(postBySlugQuery, { slug });

	const base = getBaseUrl();
	const url = `${base}/blog/${slug}`;

	const title = post?.seoTitle || post?.title || "CALM Therapy Blog";

	const description =
		post?.seoDescription ||
		post?.excerpt ||
		"Thoughtful notes on care, clarity, and growth from CALM Therapy.";

	// Prefer the projected Sanity ref if present; otherwise accept a direct URL.
	const ogRef = post?.mainImage?.asset?._ref || post?.mainImage?.ref;
	let ogUrl = ogRef
		? urlFor({ _type: "image", asset: { _ref: ogRef } })
				.width(1200)
				.height(630)
				.fit("crop")
				.quality(80)
				.url()
		: post?.mainImage?.url || null;

	// Site-wide fallback if the post has no image
	if (!ogUrl) ogUrl = `${base}/social-share.jpg`; // adjust path/name if different

	const published = post?.publishedAt || post?._createdAt || null;
	const authorName = post?.author?.name;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			type: "article",
			publishedTime: published || undefined,
			authors: authorName ? [authorName] : undefined,
			images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogUrl],
		},
	};
}

// layout.js metadata (base)

export const metadata = {
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
