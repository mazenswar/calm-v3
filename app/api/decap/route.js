// /pages/api/decap/callback.js
export default async function handler(req, res) {
	try {
		const { code } = req.query;

		if (!code) {
			return res.status(400).json({ error: "Missing code" });
		}

		// Exchange code for token
		const response = await fetch(
			"https://github.com/login/oauth/access_token",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					client_id: process.env.GITHUB_CLIENT_ID,
					client_secret: process.env.GITHUB_CLIENT_SECRET,
					code,
				}),
			}
		);

		const data = await response.json();

		if (data.error) {
			return res.status(400).json({ error: data.error_description });
		}

		// Return token to Decap
		res.setHeader("Content-Type", "text/html");
		res.send(`
      <script>
        (function() {
          function receiveMessage(e) {
            if (!e.origin.match(/^https?:\\/\\/(localhost:3000|${
							process.env.VERCEL_URL
						})/)) return;
            window.opener.postMessage(${JSON.stringify(data)}, e.origin);
            window.close();
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage(${JSON.stringify(data)}, "*");
        })();
      </script>
    `);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
