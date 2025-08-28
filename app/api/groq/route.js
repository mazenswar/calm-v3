// File: /app/api/groq/route.js
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

function client() {
	return createClient({
		projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
		dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
		apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
		// No token for public datasets
		useCdn: true,
		perspective: "published",
	});
}

export async function POST(req) {
	try {
		const { query, params } = await req.json();
		const data = await client().fetch(query, params);
		return NextResponse.json({ ok: true, data });
	} catch (e) {
		return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
	}
}

// NEW: diagnostics to confirm env + see counts without changing your pages
export async function GET(request) {
	const c = client();
	try {
		const count = await c.fetch(`count(*[_type=="post"])`);
		const sample = await c.fetch(
			`*[_type=="post"] | order(coalesce(publishedAt,_createdAt) desc)[0...3]{_id,title,"slug":slug.current}`
		);
		return NextResponse.json({
			ok: true,
			health: "groq-ready",
			projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
			dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
			apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
			postCount: count,
			sample,
		});
	} catch (e) {
		return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
	}
}
