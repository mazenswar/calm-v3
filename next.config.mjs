// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			// Serve the static admin app for /admin root
			{ source: "/admin", destination: "/admin/index.html" },
			// And let everything under /admin/ resolve as-is from /public/admin/*
			{ source: "/admin/:path*", destination: "/admin/:path*" },
		];
	},
};

export default nextConfig;
