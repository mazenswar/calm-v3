// File: /app/blog/[slug]/page.js
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { postBySlugQuery } from "@/lib/sanity.queries";
import "./style.scss";

// Base URL for server fetches
function getBaseUrl() {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ||
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000")
	);
}

// GROQ proxy helper
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

// -------- Sanity image helpers (no data fetch; URL + dimensions from ref) --------
const builder = imageUrlBuilder({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
});

function urlFor(source) {
	return builder.image(source).auto("format");
}

// Parse `image-<hash>-<w>x<h>-<format>` from asset ref to get natural dimensions
function getRefDimensions(ref) {
	if (typeof ref !== "string") return null;
	const m = ref.match(/-(\d+)x(\d+)-/);
	if (!m) return null;
	const w = parseInt(m[1], 10);
	const h = parseInt(m[2], 10);
	if (!Number.isFinite(w) || !Number.isFinite(h) || w === 0 || h === 0)
		return null;
	return { width: w, height: h, aspectRatio: w / h };
}

// -------- Portable Text renderers --------
const ptComponents = {
	block: {
		// Promote <p><strong>Heading</strong></p> to <h3>
		normal: ({ children, value }) => {
			const kids = Array.isArray(value?.children) ? value.children : [];
			const isStandaloneStrong =
				kids.length === 1 &&
				kids[0]?.marks?.includes?.("strong") &&
				typeof kids[0]?.text === "string" &&
				kids[0].text.trim().length > 0;

			if (isStandaloneStrong) return <h3 className="h3">{children}</h3>;
			return <p>{children}</p>;
		},
		h2: ({ children }) => <h2 className="h2">{children}</h2>,
		h3: ({ children }) => <h3 className="h3">{children}</h3>,
		blockquote: ({ children }) => (
			<blockquote className="pt-blockquote">{children}</blockquote>
		),
	},
	list: {
		bullet: ({ children }) => <ul className="pt-ul">{children}</ul>,
		number: ({ children }) => <ol className="pt-ol">{children}</ol>,
	},
	listItem: {
		bullet: ({ children }) => <li className="pt-li">{children}</li>,
		number: ({ children }) => <li className="pt-li">{children}</li>,
	},
	marks: {
		em: ({ children }) => <em className="pt-em">{children}</em>,
		strong: ({ children }) => <strong className="pt-strong">{children}</strong>,
		code: ({ children }) => <code className="pt-code">{children}</code>,
		link: ({ children, value }) => {
			const href = value?.href || "#";
			const isExt = /^https?:\/\//i.test(href);
			return (
				<a
					href={href}
					target={isExt ? "_blank" : undefined}
					rel={isExt ? "noopener noreferrer" : undefined}
					className="pt-link"
				>
					{children}
				</a>
			);
		},
	},
	types: {
		// Block images inside Portable Text
		image: ({ value }) => {
			const ref = value?.asset?._ref;
			if (!ref) return null;

			const dims = getRefDimensions(ref) || {
				width: 1600,
				height: 900,
				aspectRatio: 16 / 9,
			};
			const src = urlFor(value)
				.width(Math.min(1600, dims.width))
				.quality(80)
				.url();

			// Use a responsive wrapper with aspect-ratio + next/image fill
			return (
				<figure className="pt-figure">
					<div
						className="pt-figure__media"
						style={{
							aspectRatio: `${dims.width} / ${dims.height}`,
							position: "relative",
							width: "100%",
						}}
					>
						<Image
							src={src}
							alt={value.alt || ""}
							fill
							sizes="(min-width: 1024px) 900px, 100vw"
							priority={false}
							style={{ objectFit: "cover" }}
						/>
					</div>
					{value.caption && (
						<figcaption className="pt-figcaption">{value.caption}</figcaption>
					)}
				</figure>
			);
		},
		// Optional: code blocks (if your schema includes {type: 'code'})
		code: ({ value }) => {
			if (!value?.code) return null;
			return (
				<pre className="pt-pre">
					<code>{value.code}</code>
				</pre>
			);
		},
	},
};

export async function generateMetadata({ params }) {
	const { slug } = await params; // <-- await it
	const post = await groqFetch(postBySlugQuery, { slug });
	const title = post?.seoTitle || post?.title || "Post";
	const description = post?.seoDescription || post?.excerpt || "";
	const url = `${getBaseUrl()}/blog/${slug}`;
	const ogImage =
		post?.mainImage &&
		urlFor(post.mainImage)
			.width(1200)
			.height(630)
			.fit("crop")
			.quality(80)
			.url();

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
	const { slug } = await params;
	const post = await groqFetch(postBySlugQuery, { slug: slug });
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

	// Hero image (optional)
	const heroRef = post.mainImage?.asset?._ref;
	const heroDims = heroRef ? getRefDimensions(heroRef) : null;
	const heroSrc =
		post.mainImage && urlFor(post.mainImage).width(1600).quality(80).url();

	return (
		<main id="blog__page">
			<section className="block">
				<div className="block__content container">
					<article>
						<header className="stack">
							<h1>{post.title}</h1>
							{post.excerpt && <p className="muted">{post.excerpt}</p>}
							{heroSrc && heroDims && (
								<figure className="post-hero">
									<div
										className="post-hero__media"
										style={{
											aspectRatio: `${heroDims.width} / ${heroDims.height}`,
											position: "relative",
											width: "100%",
										}}
									>
										<Image
											src={heroSrc}
											alt={post.title || ""}
											fill
											sizes="(min-width: 1024px) 1100px, 100vw"
											priority
											style={{ objectFit: "cover" }}
										/>
									</div>
								</figure>
							)}
						</header>

						{post.body && (
							<div className="prose">
								<PortableText value={post.body} components={ptComponents} />
							</div>
						)}
					</article>
				</div>
			</section>
		</main>
	);
}
