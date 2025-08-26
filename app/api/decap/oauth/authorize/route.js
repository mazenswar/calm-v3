import { NextResponse } from "next/server";

export async function GET(request) {
	const clientId = process.env.GITHUB_CLIENT_ID;
	if (!clientId)
		return NextResponse.json(
			{ error: "Missing GITHUB_CLIENT_ID" },
			{ status: 500 }
		);

	// Build redirect_uri to our callback
	const url = new URL(request.url);
	const origin = `${url.protocol}//${url.host}`;
	const redirectUri = `${origin}/api/decap/oauth/callback`;

	const gh = new URL("https://github.com/login/oauth/authorize");
	gh.searchParams.set("client_id", clientId);
	gh.searchParams.set("redirect_uri", redirectUri);
	gh.searchParams.set("scope", "repo,user:email");
	gh.searchParams.set("allow_signup", "false");

	return NextResponse.redirect(gh.toString(), { status: 302 });
}
