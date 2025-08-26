export const runtime = "nodejs";
import { NextResponse } from "next/server";
import crypto from "crypto";

function generateState() {
	return crypto.randomBytes(16).toString("hex");
}

export async function GET(req) {
	const url = new URL(req.url);
	const scope = url.searchParams.get("scope") || "repo";

	// Derive the origin from the live request (e.g., https://calm-v3.vercel.app)
	const origin = url.origin;
	// If you want to force env instead, uncomment:
	// const origin = process.env.NEXT_PUBLIC_SITE_URL || url.origin;

	const clientId = process.env.GITHUB_CLIENT_ID;
	if (!clientId) {
		return NextResponse.json(
			{ error: "Missing GITHUB_CLIENT_ID" },
			{ status: 500 }
		);
	}

	const state = generateState();
	const redirectUri = `${origin}/api/decap/oauth/callback`;

	const githubAuthUrl = new URL("https://github.com/login/oauth/authorize");
	githubAuthUrl.searchParams.set("client_id", clientId);
	githubAuthUrl.searchParams.set("redirect_uri", redirectUri);
	githubAuthUrl.searchParams.set("scope", scope);
	githubAuthUrl.searchParams.set("state", state);

	const res = NextResponse.redirect(githubAuthUrl);
	res.cookies.set("decap_oauth_state", state, {
		httpOnly: true,
		sameSite: "lax",
		secure: true,
		maxAge: 10 * 60,
		path: "/",
	});
	return res;
}
