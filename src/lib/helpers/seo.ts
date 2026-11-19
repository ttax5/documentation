export const STATIC_SEO_FILES = {
	sitemap: '/sitemap.xml',
	robots: '/robots.txt',
	metadata: '/seo-metadata',
	'content-index': '/content-index.json',
	'ai-metadata': '/ai-metadata.json',
	'ai-urls': '/urls.txt',
	'ai-index': '/llms/index.txt',
} as const;

export type SeoType = keyof typeof STATIC_SEO_FILES;

export function getStaticSeoFile(type: string | null): string | null {
	if (!type || !Object.hasOwn(STATIC_SEO_FILES, type)) return null;
	return STATIC_SEO_FILES[type as SeoType];
}
