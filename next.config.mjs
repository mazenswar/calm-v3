/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// Next/Image: allow Sanity CDN (project images)
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/**",
			},
		],
	},

	async redirects() {
		return [
			// Redirect old misspelled routes to correct spelling
			{
				source: "/specialities/:slug*",
				destination: "/specialties/:slug*",
				permanent: true,
			},
		];
	},

	// Basic, broadly compatible security headers.
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Permissions-Policy",
						value: [
							"accelerometer=()",
							"camera=()",
							"geolocation=()",
							"gyroscope=()",
							"magnetometer=()",
							"microphone=()",
							"payment=()",
							"usb=()",
						].join(", "),
					},
				],
			},
		];
	},
};

export default nextConfig;
