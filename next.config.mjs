/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "cdn.sanity.io" },
			{ protocol: "https", hostname: "images.sanitycdn.com" }, // new CDN domain
		],
	},
};

export default nextConfig;
