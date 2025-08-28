// File: /app/blog/page.js
import Link from "next/link";
import { POSTS_PAGE_SIZE, postsListQuery } from "@/lib/sanity.queries";

// Build-safe absolute base URL for server fetches during SSG/ISR.
// WHY: Relative fetches can fail at build; fallback covers local + Vercel.
function getBaseUrl() {
	const fromPublic = process.env.NEXT_PUBLIC_SITE_URL; // prefer explicit
	if (fromPublic) return fromPublic.replace(/\/$/, "");

	// Vercel provides VERCEL_URL without protocol (e.g. my-app.vercel.app)
	const vercelUrl = process.env.VERCEL_URL;
	if (vercelUrl) return `https://${vercelUrl.replace(/\/$/, "")}`;

	// Local dev fallback
	return "http://localhost:3000";
}

async function groqFetch(query, params) {
	const res = await fetch(`${getBaseUrl()}/api/groq`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query, params }),
		next: { revalidate: 60 },
	});

	if (!res.ok) {
		// Minimal but useful error surfacing during build/runtime
		let detail = "";
		try {
			const j = await res.json();
			detail = j?.error ? ` - ${j.error}` : "";
		} catch (_) {}
		throw new Error(`GROQ proxy error: ${res.status}${detail}`);
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
	// Guard against undefined/0 page size from the query module
	const size =
		typeof POSTS_PAGE_SIZE === "number" && POSTS_PAGE_SIZE > 0
			? POSTS_PAGE_SIZE
			: 20;

	const posts = await groqFetch(postsListQuery, {
		page: 0,
		size,
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
