// File: /app/blog/page.js
import Link from "next/link";
import Image from "next/image";
import { POSTS_PAGE_SIZE, postsListQuery } from "@/lib/sanity.queries";
import "./style.scss";

// Build-safe base URL for server fetches (no relative fetch during SSG)
function getBaseUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

// Simple helper to call our GROQ proxy (server-side)
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

export const metadata = {
	title: "Blog",
	description: "Latest posts from CALM Wellness Counseling",
};

export default async function BlogIndexPage() {
	const posts = await groqFetch(postsListQuery, {
		page: 0,
		size: POSTS_PAGE_SIZE,
	});

	return (
		<main className="blog">
			{/* HERO */}
			<section className="block blog-hero">
				<div className="block__content container">
					<div className="blog-hero__wrap">
						<div className="blog-hero__copy">
							<p className="eyebrow">Blog</p>
							<h1>Thoughtful notes on care, clarity, and growth</h1>
							<p className="lead muted">
								Essays and practical guidance on anxiety, OCD, perfectionism,
								KAP, and steadying change. New posts are added regularly.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* LIST */}
			<section className="block blog-list">
				<div className="block__content container">
					{!posts?.length ? (
						<p className="muted">No posts yet. Check back soon.</p>
					) : (
						<ul role="list" className="posts">
							{posts.map((p) => {
								const slug = p.slug?.current ?? p.slug;
								const cover = p.mainImage?.url; // tolerate absent images

								return (
									<li className="post" key={p._id}>
										<article className="postCard">
											<Link
												href={`/blog/${slug}`}
												className="postCard__media"
												aria-label={`Read: ${p.title}`}
											>
												{/* Optional cover; graceful fallback tint */}
												{cover ? (
													<Image
														src={cover}
														alt=""
														fill
														sizes="(max-width: 768px) 100vw, 33vw"
														style={{ objectFit: "cover" }}
														priority={false}
													/>
												) : (
													<span aria-hidden="true" />
												)}
											</Link>

											<div className="postCard__body">
												<h2 className="postCard__title line-clamp-2">
													<Link href={`/blog/${slug}`}>{p.title}</Link>
												</h2>

												{p.excerpt && (
													<p className="postCard__excerpt line-clamp-3 muted">
														{p.excerpt}
													</p>
												)}
											</div>

											<div className="postCard__footer">
												<Link className="postCard__link" href={`/blog/${slug}`}>
													Read more →
												</Link>
											</div>
										</article>
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</section>
		</main>
	);
}
