import { client } from "@/lib/sanity.server";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity.queries";

export async function generateStaticParams() {
	const slugs = await client.fetch(postSlugsQuery);
	return slugs.map((slug) => ({ slug }));
}

export default async function PostPage({ params }) {
	const post = await client.fetch(postBySlugQuery, { slug: params.slug });
	if (!post) return <div>Not found</div>;
	return (
		<article>
			<h1>{post.title}</h1>
			<p>{post.excerpt}</p>
			{/* TODO: render body with @portabletext/react */}
		</article>
	);
}
