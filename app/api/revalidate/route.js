// /app/api/revalidate/route.js
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import crypto from "crypto";

// Verify header signature from Sanity (if secret provided in UI)
function isValidSignature(req, body) {
	const webhookSecret = process.env.SANITY_WEBHOOK_SECRET;
	if (!webhookSecret) return false;
	const sigHeader =
		req.headers.get("X-Sanity-Signature") ||
		req.headers.get("x-sanity-signature");
	if (!sigHeader) return false;
	// Format: 'sha256=HEX'
	const [algo, sigHex] = sigHeader.split("=");
	if (algo !== "sha256" || !sigHex) return false;
	const hmac = crypto.createHmac("sha256", webhookSecret);
	hmac.update(body, "utf8");
	const expected = hmac.digest("hex");
	try {
		return crypto.timingSafeEqual(
			Buffer.from(sigHex, "hex"),
			Buffer.from(expected, "hex")
		);
	} catch {
		return false;
	}
}

export async function POST(request) {
	const url = new URL(request.url);
	const urlSecret = url.searchParams.get("secret");

	// Read raw body for signature check
	const raw = await request.text();
	let payload = {};
	try {
		payload = JSON.parse(raw || "{}");
	} catch {}

	// Accept either URL-secret OR header-signature
	const urlSecretOk = urlSecret && urlSecret === process.env.REVALIDATE_SECRET;
	const headerSigOk = isValidSignature(request, raw);

	if (!urlSecretOk && !headerSigOk) {
		return NextResponse.json(
			{ ok: false, error: "Unauthorized" },
			{ status: 401 }
		);
	}

	// Support both simple and enriched payloads
	const slug = payload?.slug || payload?.document?.slug?.current || null;

	const prevSlug =
		payload?.prevSlug || payload?.previous?.slug?.current || null;

	try {
		// Always revalidate the list
		revalidatePath("/blog");
		// Revalidate current and (if changed) previous slug
		if (slug) revalidatePath(`/blog/${slug}`);
		if (prevSlug && prevSlug !== slug) revalidatePath(`/blog/${prevSlug}`);
	} catch (e) {
		return NextResponse.json(
			{ ok: false, error: e?.message || "revalidate failed" },
			{ status: 500 }
		);
	}
	return NextResponse.json({ ok: true, slug, prevSlug });
}
