import { describe, it, expect } from 'vitest';
import { getStaticSeoFile, STATIC_SEO_FILES } from '../seo';

describe('getStaticSeoFile', () => {
	it('redirige sitemap y robots a los archivos estáticos', () => {
		expect(getStaticSeoFile('sitemap')).toBe('/sitemap.xml');
		expect(getStaticSeoFile('robots')).toBe('/robots.txt');
	});

	it('no genera URLs con fragmentos', () => {
		for (const file of Object.values(STATIC_SEO_FILES)) {
			expect(file).not.toContain('#');
		}
	});

	it('devuelve null para tipos ausentes o desconocidos', () => {
		expect(getStaticSeoFile(null)).toBeNull();
		expect(getStaticSeoFile('desconocido')).toBeNull();
		expect(getStaticSeoFile('constructor')).toBeNull();
	});
});
