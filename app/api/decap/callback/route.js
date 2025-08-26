import { NextResponse } from "next/server";

export async function GET(request) {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET;
	const { searchParams, origin } = new URL(request.url);
	const code = searchParams.get("code");

	if (!code) {
		return NextResponse.json({ error: "Missing ?code" }, { status: 400 });
	}
	if (!clientId || !clientSecret) {
		return NextResponse.json(
			{ error: "Missing GitHub credentials" },
			{ status: 500 }
		);
	}

	// Exchange code for access_token
	const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { Accept: "application/json", "Content-Type": "application/json" },
		body: JSON.stringify({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			redirect_uri: `${origin}/api/decap/oauth/callback`,
		}),
	});

	const data = await tokenRes.json();
	if (!data.access_token) {
		return NextResponse.json(
			{ error: "Token exchange failed", details: data },
			{ status: 500 }
		);
	}

	// Decap expects a tiny HTML page that postMessages the token back to the opener
	const html = `<!doctype html>
<html><body>
<script>
  (function() {
    function send(msg) {
      // Decap listens for this message pattern
      window.opener && window.opener.postMessage(
        'authorization:github:success:' + JSON.stringify({ token: '${data.access_token}' }),
        '*'
      );
      window.close();
    }
    send();
  })();
</script>
<p>Login complete. You can close this window.</p>
</body></html>`;

	return new NextResponse(html, {
		status: 200,
		headers: { "Content-Type": "text/html; charset=utf-8" },
	});
}
