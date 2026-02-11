// Files: /app/sitemap.js and /app/robots.js
// Next.js App Router dynamic sitemap + robots using Sanity-backed blog

// ------------------------------
// /app/sitemap.js
// ------------------------------
import { postSlugsQuery } from "@/lib/sanity.queries";

export function getBaseUrl() {
	// Prefer explicit public URL; fallback to Vercel env during build
	const envUrl =
		process.env.NEXT_PUBLIC_SITE_URL ||
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000");
	return envUrl.replace(/\/$/, "");
}

async function groqFetch(query, params = {}) {
	const res = await fetch(`${getBaseUrl()}/api/groq`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query, params }),
		// sitemap is fine to cache for a short interval; tune as needed
		next: { revalidate: 300 },
	});
	if (!res.ok) throw new Error(`GROQ proxy error: ${res.status}`);
	const json = await res.json();
	if (!json.ok) throw new Error(json.error || "Unknown GROQ proxy error");
	return json.data;
}

export default async function sitemap() {
	const base = getBaseUrl();

	// Static routes (add/adjust as your site grows)
	const staticRoutes = [
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
		"/community-spot",
		"/where-we-serve",
	].map((path) => ({
		url: `${base}${path || "/"}`,
		// You can set a common lastModified; Next will serialize to <lastmod>
		lastModified: new Date().toISOString(),
		changeFrequency: "weekly",
		priority: path === "" ? 1.0 : 0.7,
	}));

	// Dynamic blog routes (from Sanity via GROQ proxy)
	let blogRoutes = [];

	try {
		const slugs = await groqFetch(postSlugsQuery);
		blogRoutes = (slugs || []).map((slug) => ({
			url: `${base}/blog/${slug}`,
			lastModified: new Date().toISOString(),
			changeFrequency: "weekly",
			priority: 0.6,
		}));
	} catch (e) {
		// Fail soft: still emit static routes even if blog fetch fails
		console.warn("sitemap: failed to fetch blog slugs", e);
	}

	return [...staticRoutes, ...blogRoutes];
}
