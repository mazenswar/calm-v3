// File: /app/api/decap/oauth/callback/route.js
export const runtime = "nodejs";

import { NextResponse } from "next/server";

function successHTML(token) {
	// Decap listens for this exact postMessage signature
	// 'authorization:github:success:{"token":"..."}'
	return `<!doctype html><html><body><script>
    (function(){
      function send(){
        try {
          const msg = 'authorization:github:success:' + JSON.stringify({token: ${JSON.stringify(
						token
					)}});
          window.opener && window.opener.postMessage(msg, '*');
          window.close();
        } catch(e) {
          console.error(e);
          document.body.innerText = 'Authorized, you can close this window.';
        }
      }
      send();
    })();
  </script></body></html>`;
}

function errorHTML(message) {
	return `<!doctype html><html><body><script>
    (function(){
      var msg = 'authorization:github:error:' + JSON.stringify({message: ${JSON.stringify(
				message
			)}});
      try { window.opener && window.opener.postMessage(msg, '*'); } catch(e){}
      document.body.innerText = 'Authorization error: ' + ${JSON.stringify(
				message
			)};
    })();
  </script></body></html>`;
}

export async function GET(req) {
	const url = new URL(req.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const cookieState = req.headers
		.get("cookie")
		?.match(/(?:^|; )decap_oauth_state=([^;]+)/)?.[1];

	if (!code) {
		return new NextResponse(errorHTML("Missing code"), {
			status: 400,
			headers: { "Content-Type": "text/html" },
		});
	}
	if (!state || !cookieState || state !== cookieState) {
		return new NextResponse(errorHTML("Invalid state"), {
			status: 400,
			headers: { "Content-Type": "text/html" },
		});
	}

	const clientId = process.env.GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET;
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

	if (!clientId || !clientSecret || !siteUrl) {
		return new NextResponse(errorHTML("Server misconfigured"), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	// Exchange code for access token
	const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { "Content-Type": "application/json", Accept: "application/json" },
		body: JSON.stringify({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			redirect_uri: `${siteUrl}/api/decap/oauth/callback`,
		}),
		// IMPORTANT on Vercel: do not cache
		cache: "no-store",
	});

	if (!tokenRes.ok) {
		const txt = await tokenRes.text();
		return new NextResponse(errorHTML("Token exchange failed: " + txt), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	const data = await tokenRes.json(); // { access_token, token_type, scope, ... }
	const token = data.access_token;
	if (!token) {
		return new NextResponse(errorHTML("No access_token in response"), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	// Clear the state cookie
	const res = new NextResponse(successHTML(token), {
		headers: { "Content-Type": "text/html" },
	});
	res.cookies.set("decap_oauth_state", "", {
		httpOnly: true,
		sameSite: "lax",
		secure: true,
		path: "/",
		maxAge: 0,
	});
	return res;
}
