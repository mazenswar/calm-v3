// File: /app/api/decap/oauth/authorize/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";

function generateState() {
	const bytes = crypto.getRandomValues(new Uint8Array(16));
	return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export async function GET(req) {
	const { searchParams } = new URL(req.url);

	const clientId = process.env.GITHUB_CLIENT_ID;
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL; // e.g. https://calm-v3.vercel.app
	if (!clientId || !siteUrl) {
		return NextResponse.json(
			{ error: "Missing env: GITHUB_CLIENT_ID or NEXT_PUBLIC_SITE_URL" },
			{ status: 500 }
		);
	}

	const state = generateState();
	const scope = searchParams.get("scope") || "repo";

	// Store state in a short-lived cookie to validate in callback
	const res = NextResponse.redirect(
		new URL(
			`https://github.com/login/oauth/authorize?` +
				new URLSearchParams({
					client_id: clientId,
					redirect_uri: `${siteUrl}/api/decap/oauth/callback`,
					scope,
					state,
					// optional: allow signup etc.
				}).toString()
		)
	);

	// lax is fine since we’re doing top-level redirects
	res.cookies.set("decap_oauth_state", state, {
		httpOnly: true,
		sameSite: "lax",
		secure: true,
		maxAge: 10 * 60, // 10 minutes
		path: "/",
	});

	return res;
}
