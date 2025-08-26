// File: /app/blog/[slug]/page.js
import { PortableText } from "@portabletext/react";
import { postBySlugQuery } from "@/lib/sanity.queries";

// Build-safe base URL for server fetches
function getBaseUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
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
	const url = `${process.env.NEXT_PUBLIC_SITE_URL || ""}/blog/${params.slug}`;
	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			title,
			description,
			url,
			type: "article",
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

	return (
		<main>
			<section className="block">
				<div className="block__content container">
					<article>
						<header className="stack">
							<h1>{post.title}</h1>
							{post.excerpt && <p className="muted">{post.excerpt}</p>}
						</header>

						{post.body && (
							<div className="prose">
								<PortableText value={post.body} />
							</div>
						)}
					</article>
				</div>
			</section>
		</main>
	);
}
