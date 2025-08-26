// /app/api/revalidate/route.js
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

// OPTIONAL: If you tag caches you can also use revalidateTag from "next/cache".
// import { revalidateTag } from "next/cache";

const SECRET = process.env.REVALIDATE_SECRET;

// Sanity can send JSON POST. Configure your webhook to:
// - Method: POST
// - Content type: application/json
// - Secret: (same value as REVALIDATE_SECRET)
// - Filter: _type == "post"   (or your type)
// - Events: create, update, delete
export async function POST(req) {
	try {
		// 1) Auth check
		const sentSecret =
			req.headers.get("x-sanity-secret") ||
			req.headers.get("x-vercel-signature") || // (not used by default, just in case)
			new URL(req.url).searchParams.get("secret"); // fallback if you kept it in URL

		if (!SECRET || sentSecret !== SECRET) {
			return NextResponse.json(
				{ ok: false, error: "Unauthorized" },
				{ status: 401 }
			);
		}

		// 2) Read body (Sanity JSON webhook)
		const body = await req.json().catch(() => ({}));

		// Body formats vary; these are common fields:
		// - body._type (document type)
		// - body.slug.current  OR  body.slug  OR  body.ids / body.document.slug.current
		// Normalize as best as possible:
		const docType =
			body._type ||
			body.type ||
			body.document?._type ||
			body.transition?._type ||
			body.payload?._type;

		// Try several locations for the slug
		const slug =
			body.slug?.current ||
			body.document?.slug?.current ||
			body.payload?.slug?.current ||
			body.slug ||
			body.document?.slug ||
			body.payload?.slug ||
			null;

		// 3) Revalidate paths (adjust these to your site structure)
		// Always refresh the blog index
		revalidatePath("/blog");

		// If we can determine a slug, refresh that post page too
		if (docType === "post" && slug) {
			revalidatePath(`/blog/${slug}`);
		}

		// OPTIONAL: If you’re using tags on fetches, also revalidate them.
		// revalidateTag("post");
		// revalidateTag(`post:${slug}`);

		return NextResponse.json({
			ok: true,
			revalidated: { index: "/blog", slug: slug ? `/blog/${slug}` : null },
		});
	} catch (e) {
		return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
	}
}
