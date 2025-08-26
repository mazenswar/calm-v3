import { createClient } from "next-sanity";

export const apiVersion = process.env.SANITY_API_VERSION || "2025-01-01";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true,
});

export const draftClient = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	token: process.env.SANITY_READ_TOKEN,
	perspective: "previewDrafts",
});
