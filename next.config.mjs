// next.config.mjs

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

	// Basic, broadly compatible security headers.
	// (Deliberately not using a strict CSP here to avoid breaking editor embeds, PT images, etc.)
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					// Prevent MIME-sniffing
					{ key: "X-Content-Type-Options", value: "nosniff" },
					// Clickjacking protection (relaxed if you ever need embedding)
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					// Minimal Referrer leakage
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					// Basic Permissions Policy (tighten as needed)
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
					// HSTS (enable once you’re sure HTTPS is always used in prod)
					// { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
				],
			},
		];
	},
};

export default nextConfig;
