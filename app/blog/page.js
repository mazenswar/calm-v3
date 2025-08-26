import { client } from "@/lib/sanity.server";
import { postsListQuery } from "@/lib/sanity.queries";

export default async function BlogPage() {
	const posts = await client.fetch(postsListQuery, { page: 0, size: 10 });
	return (
		<section>
			<h1>Blog</h1>
			<ul>
				{posts.map((post) => (
					<li key={post._id}>
						<a href={`/blog/${post.slug}`}>{post.title}</a>
					</li>
				))}
			</ul>
		</section>
	);
}
