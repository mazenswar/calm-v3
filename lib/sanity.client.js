if (typeof window !== "undefined") {
	// Should be OK (CDN + published), but warn so we can see who imports it
	console.warn(
		"[Sanity] public client used in browser (OK if CDN). Import stack above shows who pulled it in."
	);
	try {
		// Log current config so we see if it's wrongly using non-CDN
		// (Next Sanity v9 exposes client.config)
		console.log("[Sanity] config:", client.config());
	} catch {}
}
import { createClient } from "next-sanity";

// Browser-safe (public) client — CDN, published-only, no token
export const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"; // default to production
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!projectId) {
	// Fail fast with a clear message during build/dev if envs are missing
	throw new Error(
		"Missing env NEXT_PUBLIC_SANITY_PROJECT_ID. Set it in .env.local and Vercel (Production & Preview)."
	);
}

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true, // use apicdn.sanity.io (no CORS banner)
	perspective: "published", // published content only
	stega: false, // no draft overlay tags
	// IMPORTANT: no token here — keep this file importable by client components safely
});
