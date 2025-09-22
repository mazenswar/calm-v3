// scripts/checkMetadata.mjs
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import { metadata } from "../config/metadata.mjs";

function toLocal(url) {
	return url.replace("https://calmtherapy.center", "http://localhost:3000");
}

// Flatten pages + specialties into one list
function collectUrls(meta) {
	const urls = [];

	for (const key in meta.pages) {
		if (meta.pages[key]?.alternates?.canonical) {
			urls.push({
				key,
				url: meta.pages[key].alternates.canonical,
				expected: {
					title: meta.pages[key].title,
					description: meta.pages[key].description,
				},
			});
		}
	}

	for (const key in meta.specialties) {
		if (meta.specialties[key]?.openGraph?.url) {
			urls.push({
				key,
				url: meta.specialties[key].openGraph.url,
				expected: {
					title: meta.specialties[key].title,
					description: meta.specialties[key].description,
				},
			});
		}
	}

	return urls;
}

function compare(actual, expected, label, key, url) {
	if (!expected) return;
	if ((actual || "").trim() !== (expected || "").trim()) {
		console.warn(`\n=== ${key} ===`);
		console.warn(`URL: ${url}`);
		console.warn(`⚠️ ${label} mismatch`);
		console.log("   Expected:", expected);
		console.log("   Actual:  ", actual, "\n");
	}
}

async function checkPage({ key, url, expected }) {
	try {
		const res = await fetch(toLocal(url));
		if (!res.ok) {
			console.error(`\n=== ${key} ===`);
			console.error(`URL: ${url}`);
			console.error(`❌ Failed to fetch: ${res.status}`);
			return;
		}

		const text = await res.text();
		const dom = new JSDOM(text);

		const actualTitle =
			dom.window.document.querySelector("title")?.textContent || "";
		const actualDesc =
			dom.window.document.querySelector("meta[name='description']")?.content ||
			"";

		compare(actualTitle, expected.title, "Title", key, url);
		compare(actualDesc, expected.description, "Description", key, url);
	} catch (err) {
		console.error(`\n=== ${key} ===`);
		console.error(`URL: ${url}`);
		console.error(`❌ Error: ${err.message}`);
	}
}

async function run() {
	const urls = collectUrls(metadata);
	for (const entry of urls) {
		await checkPage(entry);
	}
}

run();
