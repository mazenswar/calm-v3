import { NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";

export async function GET() {
	try {
		const data = await client.fetch('*[_type=="post"][0]{_id,title}');
		return NextResponse.json({ ok: true, data });
	} catch (e) {
		return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
	}
}
