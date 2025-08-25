export async function GET(request) {
	const site = process.env.NEXT_PUBLIC_SITE_URL;
	const url = new URL(request.url);
	const code = url.searchParams.get("code");

	if (!code) return new Response("Missing code", { status: 400 });

	// Exchange code for access token
	const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { Accept: "application/json" },
		body: new URLSearchParams({
			client_id: process.env.GITHUB_CLIENT_ID,
			client_secret: process.env.GITHUB_CLIENT_SECRET,
			code,
			redirect_uri: `${site}/api/decap/callback`,
		}),
		cache: "no-store",
	});

	const data = await tokenRes.json();
	const token = data?.access_token;

	if (!token) {
		return new Response(`OAuth exchange failed: ${JSON.stringify(data)}`, {
			status: 500,
		});
	}

	// Decap expects the popup to postMessage the token back to the opener and close
	const html = `<!doctype html>
<html><body>
<script>
  (function () {
    try {
      const payload = { token: ${JSON.stringify(token)}, provider: "github" };
      if (window.opener && typeof window.opener.postMessage === "function") {
        window.opener.postMessage(payload, "${site}");
      }
    } catch (e) {}
    window.close();
  })();
</script>
Success. You can close this window.
</body></html>`;

	return new Response(html, { headers: { "Content-Type": "text/html" } });
}
