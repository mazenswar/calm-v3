/** @type {import('next').NextConfig} */
const config = {
	async rewrites() {
		return [
			// Always serve the static CMS app at /admin
			{ source: "/admin", destination: "/admin/index.html" },
		];
	},

	async headers() {
		return [
			// Make sure the CMS can always fetch the latest config
			{
				source: "/admin/config.yml",
				headers: [
					{ key: "Content-Type", value: "text/yaml; charset=utf-8" },
					{ key: "Cache-Control", value: "no-store, must-revalidate" },
				],
			},
			// Optional: cache other admin assets aggressively (but *not* config.yml)
			{
				source: "/admin/:path*",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
		];
	},
};

export default config;
