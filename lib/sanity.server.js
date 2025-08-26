import { createClient } from "next-sanity";

export const client = createClient({
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-01-01",
	useCdn: false,
	token: process.env.SANITY_READ_TOKEN, // optional, for drafts if needed
});
