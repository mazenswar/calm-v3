// app/api/decap/callback/route.js
export async function GET(req) {
	const { searchParams } = new URL(req.url);
	const code = searchParams.get("code");

	if (!code) {
		return new Response("Missing code", { status: 400 });
	}

	const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			client_id: process.env.GITHUB_CLIENT_ID,
			client_secret: process.env.GITHUB_CLIENT_SECRET,
			code,
			redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/decap/callback`,
		}),
	});

	const data = await tokenRes.json();

	if (data.error) {
		return new Response(JSON.stringify(data), { status: 400 });
	}

	// Decap CMS expects token in a specific format
	return new Response(
		JSON.stringify({
			token: data.access_token,
			provider: "github",
		}),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
}
