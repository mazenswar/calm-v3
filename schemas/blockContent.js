import { defineType, defineArrayMember } from "sanity";

export default defineType({
	name: "blockContent",
	title: "Block Content",
	type: "array",
	of: [
		defineArrayMember({ type: "block" }),
		defineArrayMember({
			type: "image",
			options: { hotspot: true },
			fields: [
				{ name: "alt", type: "string", title: "Alt text" },
				{ name: "caption", type: "string", title: "Caption" },
			],
		}),
	],
});
