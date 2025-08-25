// app/api/auth/route.js
export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const code = searchParams.get("code");
	if (!code) {
		return new Response(JSON.stringify({ error: "Missing code" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	// Exchange code for token with GitHub
	const params = new URLSearchParams({
		client_id: process.env.GITHUB_CLIENT_ID,
		client_secret: process.env.GITHUB_CLIENT_SECRET,
		code,
	});

	const r = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { Accept: "application/json" },
		body: params,
		// no-cache avoids any weirdness when testing
		cache: "no-store",
	});

	const data = await r.json();

	// DecapCMS expects { token: "..." } or an error
	if (!data.access_token) {
		return new Response(JSON.stringify({ error: data.error || "No token" }), {
			status: 400,
			headers: { "Content-Type": "application/json" },
		});
	}

	// CORS: allow calls from your site origin
	return new Response(JSON.stringify({ token: data.access_token }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
			// Replace with your deployed origin if needed
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, OPTIONS",
		},
	});
}

export function OPTIONS() {
	return new Response(null, {
		status: 204,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, OPTIONS",
		},
	});
}
