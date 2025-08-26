// /app/api/groq/route.js
import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";

export async function POST(req) {
	try {
		const { query, params } = await req.json();
		if (!query)
			return NextResponse.json({ error: "Missing query" }, { status: 400 });
		const data = await client.fetch(query, params || {});
		return NextResponse.json({ ok: true, data });
	} catch (e) {
		return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
	}
}
