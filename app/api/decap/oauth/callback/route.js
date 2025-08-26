export const runtime = "nodejs";
import { NextResponse } from "next/server";

function successHTML(token) {
	return `<!doctype html><meta charset="utf-8"><script>
    (function(){
      var msg = 'authorization:github:success:' + JSON.stringify({token: ${JSON.stringify(
				token
			)}});
      try { window.opener && window.opener.postMessage(msg, '*'); } catch(e){}
      window.close();
    })();
  </script>`;
}

function errorHTML(message) {
	return `<!doctype html><meta charset="utf-8"><script>
    (function(){
      var msg = 'authorization:github:error:' + JSON.stringify({message: ${JSON.stringify(
				message
			)}});
      try { window.opener && window.opener.postMessage(msg, '*'); } catch(e){}
      document.write('Authorization error: ' + ${JSON.stringify(message)});
    })();
  </script>`;
}

export async function GET(req) {
	const url = new URL(req.url);
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const cookie = req.headers.get("cookie") || "";
	const cookieState = (cookie.match(/(?:^|; )decap_oauth_state=([^;]+)/) ||
		[])[1];

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
	const origin = new URL(req.url).origin; // must match what you used in authorize
	if (!clientId || !clientSecret) {
		return new NextResponse(errorHTML("Missing server env"), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
		method: "POST",
		headers: { "Content-Type": "application/json", Accept: "application/json" },
		body: JSON.stringify({
			client_id: clientId,
			client_secret: clientSecret,
			code,
			redirect_uri: `${origin}/api/decap/oauth/callback`,
		}),
		cache: "no-store",
	});

	if (!tokenRes.ok) {
		const txt = await tokenRes.text();
		return new NextResponse(errorHTML("Token exchange failed: " + txt), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	const data = await tokenRes.json();
	const token = data.access_token;
	if (!token) {
		return new NextResponse(errorHTML("No access_token in response"), {
			status: 500,
			headers: { "Content-Type": "text/html" },
		});
	}

	const res = new NextResponse(successHTML(token), {
		headers: { "Content-Type": "text/html" },
	});
	// clear state cookie
	res.cookies.set("decap_oauth_state", "", {
		httpOnly: true,
		sameSite: "lax",
		secure: true,
		path: "/",
		maxAge: 0,
	});
	return res;
}
