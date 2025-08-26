// app/api/decap/authorize/route.js
export async function GET() {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/api/decap/callback`;

	const url = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
		redirectUri
	)}&scope=repo,user`;

	return Response.redirect(url, 302);
}
