import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity.queries";

export const revalidate = 300; // ISR for post

export async function generateStaticParams() {
	const slugs = await client.fetch(
		postSlugsQuery,
		{},
		{ next: { revalidate: 60 } }
	);
	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
	const site = process.env.SITE_URL || "";
	const post = await client.fetch(
		postBySlugQuery,
		{ slug: params.slug },
		{ next: { revalidate } }
	);
	if (!post) return { title: "Post not found" };

	const title = post.seoTitle || post.title;
	const description = post.seoDescription || post.excerpt || "";
	const url = `${site}/blog/${post.slug}`;
	const ogImage = post.mainImage
		? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
		: `${site}/og-default.jpg`;

	return {
		title,
		description,
		alternates: { canonical: url },
		openGraph: {
			type: "article",
			url,
			title,
			description,
			images: ogImage
				? [
						{
							url: ogImage,
							width: 1200,
							height: 630,
							alt: post.mainImage?.alt || title,
						},
				  ]
				: [],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ogImage ? [ogImage] : [],
		},
	};
}

export default async function PostPage({ params }) {
	const post = await client.fetch(
		postBySlugQuery,
		{ slug: params.slug },
		{ next: { revalidate } }
	);
	if (!post) return null;

	const site = process.env.SITE_URL || "";
	const imageUrl = post.mainImage
		? urlFor(post.mainImage).width(1200).height(630).fit("crop").url()
		: null;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.seoTitle || post.title,
		description: post.seoDescription || post.excerpt || undefined,
		datePublished: post.publishedAt,
		dateModified: post._updatedAt || post.publishedAt,
		image: imageUrl ? [imageUrl] : undefined,
		mainEntityOfPage: `${site}/blog/${post.slug}`,
		author: post.author?.name
			? { "@type": "Person", name: post.author.name }
			: undefined,
		publisher: { "@type": "Organization", name: "CALM Therapy" },
	};

	return (
		<article className="container post">
			<header>
				<h1>{post.title}</h1>
				{post.mainImage && (
					<Image
						src={urlFor(post.mainImage)
							.width(1200)
							.height(630)
							.fit("crop")
							.url()}
						alt={post.mainImage.alt || post.title}
						width={1200}
						height={630}
						priority
					/>
				)}
			</header>
			<PortableText value={post.body} />

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
		</article>
	);
}
