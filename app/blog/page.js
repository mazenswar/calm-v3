import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { postsListQuery, POSTS_PAGE_SIZE } from "@/lib/sanity.queries";

export const revalidate = 60; // ISR for list

export default async function BlogIndex({ searchParams }) {
	const page = Math.max(0, parseInt(searchParams?.page || "0", 10) || 0);
	const posts = await client.fetch(
		postsListQuery,
		{ $page: page, $size: POSTS_PAGE_SIZE },
		{ next: { revalidate } }
	);

	return (
		<main className="container blog-list">
			<h1>Blog</h1>
			<ul className="grid" role="list">
				{posts.map((p) => (
					<li key={p._id} className="card">
						{p.mainImage && (
							<Image
								src={urlFor(p.mainImage)
									.width(800)
									.height(450)
									.fit("crop")
									.url()}
								alt={p.mainImage.alt || p.title}
								width={800}
								height={450}
							/>
						)}
						<h2>
							<Link href={`/blog/${p.slug}`}>{p.title}</Link>
						</h2>
						{p.excerpt && <p className="muted">{p.excerpt}</p>}
						<p className="byline">{p.author?.name}</p>
					</li>
				))}
			</ul>
			<nav className="pager">
				{page > 0 && <Link href={`/blog?page=${page - 1}`}>← Newer</Link>}
				{posts.length === POSTS_PAGE_SIZE && (
					<Link href={`/blog?page=${page + 1}`}>Older →</Link>
				)}
			</nav>
		</main>
	);
}
