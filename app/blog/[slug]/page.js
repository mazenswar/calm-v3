// File: /app/blog/[slug]/page.js
import Image from "next/image";
import Script from "next/script";
import { PortableText } from "@portabletext/react";
import { postBySlugQuery } from "@/lib/sanity.queries";
import { urlFor } from "@/lib/sanity.image"; // your builder wrapper
import "./style.scss";
import ShareButton from "./ShareButton";

/* ---------------- Base URL + GROQ proxy ---------------- */
function getBaseUrl() {
	return (
		process.env.NEXT_PUBLIC_SITE_URL ||
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:3000")
	);
}

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

/* ---------------- Small helpers ---------------- */
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

function formatDate(iso) {
	try {
		const d = new Date(iso || Date.now());
		return new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		}).format(d);
	} catch {
		return "";
	}
}

function buildShareTargets({ url, title, excerpt }) {
	const u = encodeURIComponent(url);
	const t = encodeURIComponent(title || "");
	const d = encodeURIComponent(excerpt || "");
	return {
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
	};
}

/* ---------------- PortableText components ---------------- */
const ptComponents = {
	block: {
		normal: ({ children }) => <p>{children}</p>,
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
		image: ({ value }) => {
			const ref = value?.asset?._ref;
			if (!ref) return null;

			// Dimensions from ref; fallback to 16:9
			const dims = getRefDimensions(ref) || {
				width: 1600,
				height: 900,
				aspectRatio: 16 / 9,
			};
			const src = urlFor(value)
				.width(Math.min(1600, dims.width))
				.quality(80)
				.url();

			return (
				<figure className="pt-figure">
					<div
						className="pt-figure__media"
						style={{
							position: "relative",
							width: "100%",
							aspectRatio: `${dims.width} / ${dims.height}`,
						}}
					>
						<Image
							src={src}
							alt={value?.alt || ""}
							fill
							sizes="(min-width: 1024px) 900px, 100vw"
						/>
					</div>
					{value?.caption ? (
						<figcaption className="pt-figcaption">{value.caption}</figcaption>
					) : null}
				</figure>
			);
		},
	},
};

/* ---------------- Metadata ---------------- */
export async function generateMetadata({ params }) {
	const { slug } = await params;
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

/* ---------------- Page ---------------- */
export default async function BlogPostPage({ params }) {
	const { slug } = await params;
	const post = await groqFetch(postBySlugQuery, { slug });
	const pageUrl = `${getBaseUrl()}/blog/${slug}`;

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

	/* ---- Hero image (optional) ---- */
	const heroRef = post.mainImage?.asset?._ref || post.mainImage?.ref; // tolerate either shape
	const heroDims = heroRef ? getRefDimensions(heroRef) : null;
	const heroSrc = post.mainImage
		? urlFor(post.mainImage).width(1600).quality(80).url()
		: null;

	return (
		<main id="blog__page">
			<section className="block">
				<div className="block__content container">
					<article>
						<header className="stack">
							<h1>{post.title}</h1>
							{post.excerpt ? <p className="muted">{post.excerpt}</p> : null}

							<div className="post-meta">
								<div className="post-meta__author">
									{post?.author?.image?.asset?._ref ? (
										<div className="post-meta__avatar">
											<Image
												src={urlFor(post.author.image)
													.width(96)
													.height(96)
													.fit("crop")
													.quality(80)
													.url()}
												alt={post?.author?.name || "Author"}
												width={48}
												height={48}
											/>
										</div>
									) : null}

									<div className="post-meta__byline">
										{post?.author?.name ? (
											<div className="post-meta__by">By {post.author.name}</div>
										) : null}
										{post?.publishedAt || post?._createdAt ? (
											<time
												className="post-meta__date muted"
												dateTime={post.publishedAt || post._createdAt}
											>
												{formatDate(post.publishedAt || post._createdAt)}
											</time>
										) : null}
									</div>
								</div>

								{(() => {
									const targets = buildShareTargets({
										url: pageUrl,
										title: post?.title,
										excerpt: post?.excerpt,
									});
									return (
										<>
											<ShareButton
												url={`${getBaseUrl()}/blog/${slug}`}
												title={post.title}
												text={post.excerpt}
											/>

											<Script id="share-handler" strategy="afterInteractive">
												{`
                          (function () {
                            function copyOrShare() {
                              var url = ${JSON.stringify(pageUrl)};
                              var title = ${JSON.stringify(post?.title || "")};
                              var text = ${JSON.stringify(post?.excerpt || "")};

                              if (typeof navigator !== 'undefined' && navigator.share) {
                                navigator.share({ title: title || document.title, text: text || '', url })
                                  .catch(function () {});
                                return;
                              }

                              if (navigator.clipboard && navigator.clipboard.writeText) {
                                navigator.clipboard.writeText(url).then(function () {
                                  var btn = document.getElementById('copyShareBtn');
                                  if (!btn) return;
                                  var prev = btn.textContent;
                                  btn.textContent = 'Copied!';
                                  setTimeout(function(){ btn.textContent = prev; }, 1500);
                                }).catch(function(){});
                                return;
                              }

                              var ok = false;
                              try { ok = document.execCommand('copy'); } catch(e) {}
                              if (!ok) window.prompt('Copy this link:', url);
                            }

                            if (typeof window !== 'undefined') {
                              window.addEventListener('DOMContentLoaded', function(){
                                var btn = document.getElementById('copyShareBtn');
                                if (btn) btn.addEventListener('click', copyOrShare, false);
                              });
                            }
                          })();
                        `}
											</Script>
										</>
									);
								})()}
							</div>

							{heroSrc && heroDims && (
								<figure className="post-hero">
									<div
										className="post-hero__media"
										style={{
											position: "relative",
											width: "100%",
											aspectRatio: `${heroDims.width} / ${heroDims.height}`,
										}}
									>
										<Image
											src={heroSrc}
											alt={post.title || ""}
											fill
											sizes="(min-width: 1024px) 1100px, 100vw"
											priority
										/>
									</div>
								</figure>
							)}
						</header>

						{post.body ? (
							<div className="prose">
								<PortableText value={post.body} components={ptComponents} />
							</div>
						) : null}
					</article>
				</div>
			</section>
		</main>
	);
}
