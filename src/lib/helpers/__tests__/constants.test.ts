import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
	searchContent,
	getSlugFromModuleId,
	loadSearchIndex,
	resetSearchIndexCache,
	type SearchableItem,
} from '../constants';
import { setBrandGlobally, setSystemUrlGlobally } from '../textReplacer';

const mockSearchIndex: SearchableItem[] = [
	{
		title: 'Configuracion de Impresoras',
		href: '/user-guide/configuracion-de-impresoras',
		type: 'Guia Rapida',
		content: 'Instrucciones para instalar impresoras termicas USB y de red ethernet en el sistema.',
	},
	{
		title: 'ARCA y Facturación Electrónica AFIP',
		href: '/user-guide/arca-y-facturacion',
		type: 'Operaciones Fiscales',
		content:
			'Emisión de comprobantes, facturas A, B y notas de crédito en el salón de ventas. Configuración de puntos de venta.',
	},
	{
		title: 'Salón y Gestión de Mesas',
		href: '/user-guide/salon',
		type: 'Operaciones de Salón',
		content:
			'Manejo del salón de comensales, apertura de mesas, comandero y adición en tiempo real.',
	},
	{
		title: 'Redes & Conectividad (Puertos: 8080/tcp & 9000)',
		href: '/user-guide/redes',
		type: 'Configuración Avanzada',
		content:
			'Verificar IP: 192.168.1.1 [OK] + precio con $100 de descuento * 20% de recargo. Parámetros: user@domain.com.',
	},
	{
		title: 'Módulo de {{BRAND_NAME}}',
		href: '/user-guide/brand',
		type: 'Sistema {{BRAND_NAME}}',
		content: 'Plataforma oficial disponible para consulta en {{SYSTEM_URL}} para todos los usuarios.',
	},
];

describe('searchContent', () => {
	beforeEach(() => {
		resetSearchIndexCache();
		vi.spyOn(globalThis, 'fetch').mockImplementation(async () => {
			return {
				ok: true,
				json: async () => mockSearchIndex,
			} as Response;
		});
	});

	afterEach(() => {
		vi.restoreAllMocks();
		resetSearchIndexCache();
	});

	// ─── Textos vacíos y límites ─────────────────────────────────────
	describe('textos vacíos y queries cortas', () => {
		it('devuelve array vacío si la query está vacía', async () => {
			const results = await searchContent('');
			expect(results).toEqual([]);
		});

		it('devuelve array vacío si la query tiene solo 1 carácter', async () => {
			expect(await searchContent('a')).toEqual([]);
			expect(await searchContent(' ')).toEqual([]);
			expect(await searchContent('1')).toEqual([]);
			expect(await searchContent('$')).toEqual([]);
		});

		it('devuelve array vacío si la query consiste solo en espacios', async () => {
			const results = await searchContent('   ');
			expect(results).toEqual([]);
		});

		it('devuelve array vacío si el índice está vacío', async () => {
			resetSearchIndexCache();
			vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
				ok: true,
				json: async () => [],
			} as Response);

			const results = await searchContent('impresoras');
			expect(results).toEqual([]);
		});
	});

	// ─── Textos normales ─────────────────────────────────────────────
	describe('textos normales', () => {
		it('encuentra coincidencia en el título con mayor relevancia', async () => {
			const results = await searchContent('impresoras');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toBe('Configuracion de Impresoras');
			expect(results[0].href).toBe('/user-guide');
		});

		it('encuentra coincidencia en el tipo de elemento', async () => {
			const results = await searchContent('fiscales');
			expect(results.length).toBe(1);
			expect(results[0].title).toContain('Facturación');
		});

		it('encuentra coincidencia en el contenido y genera preview', async () => {
			const results = await searchContent('ethernet');
			expect(results.length).toBe(1);
			expect(results[0].title).toBe('Configuracion de Impresoras');
			expect(results[0].preview).toBeDefined();
			expect(results[0].preview).toContain('ethernet');
			expect(results[0].preview?.startsWith('...')).toBe(true);
			expect(results[0].preview?.endsWith('...')).toBe(true);
		});

		it('es insensible a mayúsculas y minúsculas', async () => {
			const lower = await searchContent('impresoras');
			const upper = await searchContent('IMPRESORAS');
			const mixed = await searchContent('ImPrEsOrAs');

			expect(lower).toEqual(upper);
			expect(lower).toEqual(mixed);
		});

		it('respeta el parámetro limit', async () => {
			const results = await searchContent('de', 2);
			expect(results.length).toBe(2);
		});

		it('devuelve array vacío si el término no existe', async () => {
			const results = await searchContent('termino_completamente_inexistente_xyz');
			expect(results).toEqual([]);
		});

		it('soporta búsquedas con múltiples palabras separadas por espacios', async () => {
			const results = await searchContent('instalar impresoras ethernet');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toBe('Configuracion de Impresoras');
		});

		it('reemplaza variables de plantilla ({{BRAND_NAME}}, {{SYSTEM_URL}}) en title y type', async () => {
			setBrandGlobally('PaxAPOS');
			setSystemUrlGlobally('https://app.paxapos.com');

			const results = await searchContent('plataforma oficial');
			expect(results.length).toBe(1);
			expect(results[0].title).toBe('Módulo de PaxAPOS');
			expect(results[0].type).toBe('Sistema PaxAPOS');

			setBrandGlobally('{{BRAND_NAME}}');
			setSystemUrlGlobally('{{SYSTEM_URL}}');
		});
	});

	// ─── Textos con tildes ───────────────────────────────────────────
	describe('textos con tildes y caracteres en español', () => {
		it('encuentra coincidencias exactas con tildes en el título', async () => {
			const results = await searchContent('facturación');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toContain('Facturación');
		});

		it('encuentra coincidencias con tildes en el contenido', async () => {
			const results = await searchContent('emisión');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toContain('Facturación Electrónica');
		});

		it('encuentra términos con tilde en mayúsculas', async () => {
			const results = await searchContent('FACTURACIÓN');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toContain('Facturación');
		});

		it('encuentra palabras con acento diacrítico en el salón', async () => {
			const results = await searchContent('salón');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toContain('Salón');
		});

		it('soporta búsqueda de palabras con ñ', async () => {
			const customIndex: SearchableItem[] = [
				{
					title: 'Diseño de Comandas y Añadidos',
					href: '/user-guide/diseno',
					type: 'Configuración',
					content: 'Aprende a añadir acompañamientos por año fiscal.',
				},
			];
			resetSearchIndexCache();
			vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
				ok: true,
				json: async () => customIndex,
			} as Response);

			const results = await searchContent('diseño');
			expect(results.length).toBe(1);
			expect(results[0].title).toBe('Diseño de Comandas y Añadidos');
		});
	});

	// ─── Textos con símbolos ─────────────────────────────────────────
	describe('textos con símbolos y caracteres especiales', () => {
		it('busca textos con caracteres especiales de RegExp sin lanzar errores', async () => {
			// Metacaracteres que podrían romper new RegExp si no estuvieran escapados
			const resultsBracket = await searchContent('[OK]');
			expect(resultsBracket.length).toBeGreaterThan(0);
			expect(resultsBracket[0].title).toContain('Redes & Conectividad');

			const resultsParen = await searchContent('(Puertos:');
			expect(resultsParen.length).toBeGreaterThan(0);

			const resultsSlash = await searchContent('8080/tcp');
			expect(resultsSlash.length).toBeGreaterThan(0);

			const resultsDollar = await searchContent('$100');
			expect(resultsDollar.length).toBeGreaterThan(0);

			const resultsPercent = await searchContent('20%');
			expect(resultsPercent.length).toBeGreaterThan(0);

			const resultsEmail = await searchContent('user@domain.com');
			expect(resultsEmail.length).toBeGreaterThan(0);
		});

		it('busca cadenas con símbolos combinados como & y +', async () => {
			const results = await searchContent('Redes & Conectividad');
			expect(results.length).toBeGreaterThan(0);
			expect(results[0].title).toContain('Redes & Conectividad');
		});

		it('maneja consultas compuestas exclusivamente de metacaracteres regex sin crash', async () => {
			// query >= 2 caracteres con caracteres de RegExp
			await expect(searchContent('.*')).resolves.toBeDefined();
			await expect(searchContent('+?')).resolves.toBeDefined();
			await expect(searchContent('()')).resolves.toBeDefined();
			await expect(searchContent('[]')).resolves.toBeDefined();
			await expect(searchContent('\\\\')).resolves.toBeDefined();
			await expect(searchContent('^$')).resolves.toBeDefined();
			await expect(searchContent('{}')).resolves.toBeDefined();
		});
	});

	// ─── Manejo de errores de carga ──────────────────────────────────
	describe('manejo de errores de carga del índice', () => {
		it('devuelve array vacío si fetch falla por error de red', async () => {
			resetSearchIndexCache();
			vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Network error'));
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const results = await searchContent('impresoras');
			expect(results).toEqual([]);
			expect(consoleSpy).toHaveBeenCalled();
		});

		it('devuelve array vacío si fetch responde con HTTP 404', async () => {
			resetSearchIndexCache();
			vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
				ok: false,
				status: 404,
			} as Response);
			const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

			const results = await searchContent('impresoras');
			expect(results).toEqual([]);
			expect(consoleSpy).toHaveBeenCalled();
		});
	});
});

describe('getSlugFromModuleId', () => {
	it('procesa identificadores de módulos normales', () => {
		expect(getSlugFromModuleId('21-Crear-Usuarios.md')).toBe('crear-usuarios');
		expect(getSlugFromModuleId('modulo-simple.md')).toBe('modulo-simple');
	});

	it('maneja cadenas vacías', () => {
		expect(getSlugFromModuleId('')).toBe('');
	});

	it('procesa identificadores con tildes', () => {
		expect(getSlugFromModuleId('32-Salón.md')).toBe('salon');
		expect(getSlugFromModuleId('37-ARCA-y-Facturación.md')).toBe('arca-y-facturacion');
		expect(getSlugFromModuleId('52-Buchón-Bot.md')).toBe('buchon-bot');
		expect(getSlugFromModuleId('Menú-de-Configuración.md')).toBe('menu-de-configuracion');
	});

	it('procesa identificadores con símbolos y caracteres especiales', () => {
		expect(getSlugFromModuleId('40-Redes & Conectividad (v2.0)!.md')).toBe('redes-conectividad-v20');
		expect(getSlugFromModuleId('!@#$%^&*()')).toBe('');
		expect(getSlugFromModuleId('---archivo---con---guiones---.md')).toBe('archivo-con-guiones');
	});
});

describe('loadSearchIndex', () => {
	beforeEach(() => {
		resetSearchIndexCache();
	});

	afterEach(() => {
		vi.restoreAllMocks();
		resetSearchIndexCache();
	});

	it('carga y almacena en caché el índice de búsqueda', async () => {
		const fetchSpy = vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
			ok: true,
			json: async () => mockSearchIndex,
		} as Response);

		const firstCall = await loadSearchIndex();
		expect(firstCall).toEqual(mockSearchIndex);
		expect(fetchSpy).toHaveBeenCalledTimes(1);

		// Segunda llamada debe usar caché sin llamar a fetch de nuevo
		const secondCall = await loadSearchIndex();
		expect(secondCall).toEqual(mockSearchIndex);
		expect(fetchSpy).toHaveBeenCalledTimes(1);
	});

	it('devuelve array vacío si fetch falla', async () => {
		vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(new Error('Fetch failed'));
		vi.spyOn(console, 'error').mockImplementation(() => {});

		const result = await loadSearchIndex();
		expect(result).toEqual([]);
	});
});
