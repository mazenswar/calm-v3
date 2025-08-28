// File: /app/blog/page.js
import Link from "next/link";
import { POSTS_PAGE_SIZE, postsListQuery } from "@/lib/sanity.queries";

function getBaseUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL;
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
		<main>
			<section className="block">
				<div className="block__content container">
					<h1>Blog</h1>
					{!posts?.length ? (
						<p className="muted">No posts yet. Check back soon.</p>
					) : (
						<ul role="list" className="stack">
							{posts.map((p) => {
								const slug = p.slug?.current ?? p.slug; // tolerate both shapes
								return (
									<li key={p._id}>
										<article>
											<h2>
												<Link href={`/blog/${slug}`}>{p.title}</Link>
											</h2>
											{p.excerpt && <p className="muted">{p.excerpt}</p>}
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
