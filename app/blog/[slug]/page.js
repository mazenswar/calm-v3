// File: /app/blog/[slug]/page.js
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { postBySlugQuery } from "@/lib/sanity.queries";
import "./style.scss";

// Build-safe base URL for server fetches
function getBaseUrl() {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ||
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000")
	);
}

// In /app/blog/[slug]/page.js (keep your existing code, add components)
const ptComponents = {
	block: {
		// Normal paragraphs, with a promotion heuristic:
		normal: ({ children, value }) => {
			const kids = Array.isArray(value?.children) ? value.children : [];
			const isStandaloneStrong =
				kids.length === 1 &&
				kids[0]?.marks?.includes?.("strong") &&
				typeof kids[0]?.text === "string" &&
				kids[0].text.trim().length > 0;

			if (isStandaloneStrong) {
				return <h3 className="h3">{children}</h3>;
			}
			return <p>{children}</p>;
		},
		h2: ({ children }) => <h2 className="h2">{children}</h2>,
		h3: ({ children }) => <h3 className="h3">{children}</h3>,
	},
	// you can add list, marks, types, etc., later
};

// Build a Sanity CDN image URL (no direct data fetch; just URL math)
const builder = imageUrlBuilder({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

// Defensive: if image is missing/invalid, return null
function urlForImage(source, { w = 1600, h, q = 80, fit = "max" } = {}) {
	try {
		if (!source) return null;
		let url = builder.image(source).width(w).quality(q).fit(fit);
		if (h) url = url.height(h);
		return url.url();
	} catch {
		return null;
	}
}

// Server helper to call our GROQ proxy (no direct Sanity calls)
async function groqFetch(query, params) {
	const res = await fetch(`${getBaseUrl()}/api/groq`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query, params }),
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`GROQ proxy error: ${res.status}`);
	const json = await res.json();
	if (!json.ok) throw new Error(json.error || "Unknown GROQ proxy error");
	return json.data;
}

export const revalidate = 60;

export async function generateMetadata({ params }) {
	const post = await groqFetch(postBySlugQuery, { slug: params.slug });
	const title = post?.seoTitle || post?.title || "Post";
	const description = post?.seoDescription || post?.excerpt || "";
	const url = `${getBaseUrl()}/blog/${params.slug}`;

	// Prefer explicit SEO image if you add one later; otherwise use mainImage
	const ogImage =
		urlForImage(post?.mainImage, { w: 1200, h: 630, fit: "crop", q: 80 }) ||
		undefined;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			type: "article",
			images: ogImage
				? [{ url: ogImage, width: 1200, height: 630, alt: title }]
				: undefined,
		},
	};
}

export default async function BlogPostPage({ params }) {
	const post = await groqFetch(postBySlugQuery, { slug: params.slug });

	if (!post) {
		return (
			<main>
				<section className="block">
					<div className="block__content container">
						<p>Post not found.</p>
					</div>
				</section>
			</main>
		);
	}

	const heroUrl = urlForImage(post.mainImage, { w: 1600, q: 80 }); // wide, responsive-friendly

	return (
		<main id="blog__page">
			<section className="block">
				<div className="block__content container">
					<article>
						<header className="stack">
							<h1>{post.title}</h1>
							{post.excerpt && <p className="muted">{post.excerpt}</p>}
							{heroUrl && (
								<figure className="post-hero">
									{/* Keep <img> for simplicity; swap to next/image if your next.config allows sanity CDN */}
									<img
										src={heroUrl}
										alt={post.title || ""}
										loading="eager"
										decoding="async"
										width={1600}
										height={900}
										style={{ width: "100%", height: "auto", display: "block" }}
									/>
								</figure>
							)}
						</header>

						{post.body && (
							<div className="text">
								<PortableText value={post.body} components={ptComponents} />
							</div>
						)}
					</article>
				</div>
			</section>
		</main>
	);
}
