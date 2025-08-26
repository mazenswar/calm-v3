import { defineField, defineType } from "sanity";

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			validation: (r) => r.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (r) => r.required(),
		}),
		defineField({ name: "excerpt", type: "text", rows: 3 }),
		defineField({
			name: "mainImage",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alt text",
					validation: (r) => r.required(),
				},
				{ name: "caption", type: "string" },
			],
		}),
		defineField({
			name: "author",
			type: "reference",
			to: [{ type: "author" }],
		}),
		defineField({
			name: "categories",
			type: "array",
			of: [{ type: "reference", to: [{ type: "category" }] }],
		}),
		defineField({
			name: "publishedAt",
			type: "datetime",
			initialValue: () => new Date().toISOString(),
		}),
		defineField({ name: "body", type: "blockContent" }),
		// SEO
		defineField({ name: "seoTitle", type: "string" }),
		defineField({ name: "seoDescription", type: "text" }),
	],
	preview: {
		select: { title: "title", media: "mainImage", subtitle: "author.name" },
	},
	orderings: [
		{
			title: "Published desc",
			name: "publishedDesc",
			by: [{ field: "publishedAt", direction: "desc" }],
		},
	],
});
