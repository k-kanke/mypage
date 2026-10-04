export type LinkPreview = {
	url: string;
	title: string;
	description?: string;
	image?: string;
	siteName: string;
};

const decode = (s: string) =>
	s
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#0?39;/g, "'")
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>');

const metaContent = (html: string, key: string) => {
	for (const tag of html.match(/<meta[^>]*>/gi) ?? []) {
		const k = tag.match(/(?:property|name)=["']([^"']+)["']/i)?.[1];
		if (k?.toLowerCase() !== key) continue;
		const v = tag.match(/content=["']([^"']*)["']/i)?.[1];
		if (v) return decode(v);
	}
	return undefined;
};

const cache = new Map<string, Promise<LinkPreview>>();

// ビルド時に OGP を取得する。失敗時は URL のみの表示にフォールバックする。
export const fetchLinkPreview = (url: string): Promise<LinkPreview> => {
	let result = cache.get(url);
	if (!result) {
		result = load(url);
		cache.set(url, result);
	}
	return result;
};

const load = async (url: string): Promise<LinkPreview> => {
	const host = new URL(url).hostname;
	try {
		const res = await fetch(url, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; mypage-build)' },
			signal: AbortSignal.timeout(10000),
		});
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const html = await res.text();
		const image = metaContent(html, 'og:image');
		return {
			url,
			title: metaContent(html, 'og:title') ?? html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? url,
			description: metaContent(html, 'og:description') ?? metaContent(html, 'description'),
			image: image ? new URL(image, url).href : undefined,
			siteName: metaContent(html, 'og:site_name') ?? host,
		};
	} catch (e) {
		console.warn(`[ogp] failed to fetch ${url}:`, e);
		return { url, title: url, siteName: host };
	}
};
