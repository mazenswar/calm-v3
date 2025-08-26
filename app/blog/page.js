// File: /app/blog/page.js
import Link from "next/link";
import { POSTS_PAGE_SIZE, postsListQuery } from "@/lib/sanity.queries";

// Build-safe base URL for server fetches (no relative fetch during SSG)
function getBaseUrl() {
	return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

// Simple helper to call our GROQ proxy (server-side)
async function groqFetch(query, params) {
	const res = await fetch(`${getBaseUrl()}/api/groq`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		// never touch Sanity directly from here
		body: JSON.stringify({ query, params }),
		// cache as you like; ISR at route/page level can also be used
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		// keep this terse; you can log server-side as needed
		throw new Error(`GROQ proxy error: ${res.status}`);
	}
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
					<ul role="list" className="stack">
						{posts?.map((p) => (
							<li key={p._id}>
								<article>
									<h2>
										<Link href={`/blog/${p.slug}`}>{p.title}</Link>
									</h2>
									{p.excerpt && <p className="muted">{p.excerpt}</p>}
								</article>
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}
