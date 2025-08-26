// app/api/decap/route.js
import { NextResponse } from "next/server";

const ALLOW_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL || "*";
const CORS_HEADERS = {
	"Access-Control-Allow-Origin": ALLOW_ORIGIN,
	"Access-Control-Allow-Methods": "GET, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function withCors(resp) {
	Object.entries(CORS_HEADERS).forEach(([k, v]) => resp.headers.set(k, v));
	return resp;
}

// Health check / base_url root — Decap may hit this and browsers will preflight it.
export async function GET() {
	const resp = NextResponse.json(
		{ ok: true, service: "decap-cms" },
		{ status: 200 }
	);
	return withCors(resp);
}

// Allow preflight
export async function OPTIONS() {
	const resp = new NextResponse(null, { status: 204 });
	return withCors(resp);
}
