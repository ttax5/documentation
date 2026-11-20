import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
	replaceWithVariables,
	processGroupedContent,
	setBrandGlobally,
	setSystemUrlGlobally,
	getBrandName,
	getSystemUrl,
} from '../textReplacer';

describe('textReplacer', () => {
	const initialBrand = getBrandName();
	const initialUrl = getSystemUrl();

	beforeEach(() => {
		setBrandGlobally(initialBrand);
		setSystemUrlGlobally(initialUrl);
	});

	afterEach(() => {
		setBrandGlobally(initialBrand);
		setSystemUrlGlobally(initialUrl);
	});

	describe('replaceWithVariables', () => {
		// ─── Textos vacíos y falsy ───────────────────────────────────────
		describe('textos vacíos y falsy', () => {
			it('devuelve cadena vacía cuando el contenido es vacío', () => {
				expect(replaceWithVariables('')).toBe('');
				expect(replaceWithVariables('', 'MiMarca', 'https://pos.test')).toBe('');
			});

			it('devuelve el valor original si content es falsy', () => {
				expect(replaceWithVariables(null as unknown as string)).toBe(null);
				expect(replaceWithVariables(undefined as unknown as string)).toBe(undefined);
			});

			it('mantiene la marca por defecto si el parámetro brand es vacío', () => {
				const result = replaceWithVariables('Bienvenido a {{BRAND_NAME}}', '');
				expect(result).toBe(`Bienvenido a ${initialBrand}`);
			});

			it('mantiene la URL por defecto si el parámetro url es vacío', () => {
				const result = replaceWithVariables('Visita {{SYSTEM_URL}}', undefined, '');
				expect(result).toBe(`Visita ${initialUrl}`);
			});
		});

		// ─── Textos normales ─────────────────────────────────────────────
		describe('textos normales', () => {
			it('devuelve el texto sin cambios si no contiene variables', () => {
				const input = 'Este es un texto plano sin ninguna variable.';
				expect(replaceWithVariables(input)).toBe(input);
				expect(replaceWithVariables(input, 'PaxAPOS', 'https://pos.test')).toBe(input);
			});

			it('reemplaza {{BRAND_NAME}} con el valor proporcionado', () => {
				const input = 'Bienvenido al manual de {{BRAND_NAME}}.';
				const result = replaceWithVariables(input, 'PaxAPOS');
				expect(result).toBe('Bienvenido al manual de PaxAPOS.');
			});

			it('reemplaza {{SYSTEM_URL}} con el valor proporcionado', () => {
				const input = 'Acceda al sistema en {{SYSTEM_URL}}/login';
				const result = replaceWithVariables(input, undefined, 'https://app.paxapos.com');
				expect(result).toBe('Acceda al sistema en https://app.paxapos.com/login');
			});

			it('reemplaza ambas variables simultáneamente', () => {
				const input = 'Con {{BRAND_NAME}} puede operar desde {{SYSTEM_URL}}.';
				const result = replaceWithVariables(input, 'MiPOS', 'https://pos.local');
				expect(result).toBe('Con MiPOS puede operar desde https://pos.local.');
			});

			it('reemplaza múltiples ocurrencias de la misma variable', () => {
				const input =
					'{{BRAND_NAME}} es rápido. Pruebe {{BRAND_NAME}} en {{SYSTEM_URL}} o contacte soporte en {{SYSTEM_URL}}/ayuda.';
				const result = replaceWithVariables(input, 'PaxAPOS', 'https://paxapos.com');
				expect(result).toBe(
					'PaxAPOS es rápido. Pruebe PaxAPOS en https://paxapos.com o contacte soporte en https://paxapos.com/ayuda.',
				);
			});

			it('utiliza los valores globales cuando no se proporcionan argumentos', () => {
				setBrandGlobally('StoreMarca');
				setSystemUrlGlobally('https://store.local');

				const input = 'Bienvenido a {{BRAND_NAME}} en {{SYSTEM_URL}}';
				expect(replaceWithVariables(input)).toBe('Bienvenido a StoreMarca en https://store.local');
			});
		});

		// ─── Textos con tildes y caracteres en español ──────────────────
		describe('textos con tildes y caracteres en español', () => {
			it('preserva tildes y caracteres especiales en el contenido original', () => {
				const input =
					'Guía de configuración rápida: emisión y facturación electrónica en {{BRAND_NAME}}.';
				const result = replaceWithVariables(input, 'PaxAPOS');
				expect(result).toBe(
					'Guía de configuración rápida: emisión y facturación electrónica en PaxAPOS.',
				);
			});

			it('permite marcas con tildes y caracteres españoles (á, é, í, ó, ú, ñ)', () => {
				const input = 'Bienvenido al sistema {{BRAND_NAME}}.';
				const result = replaceWithVariables(input, 'Gestión & Solución Gastronómica del Año');
				expect(result).toBe('Bienvenido al sistema Gestión & Solución Gastronómica del Año.');
			});

			it('permite URLs con dominios o rutas con caracteres acentuados o especiales', () => {
				const input = 'Consulte la guía en {{SYSTEM_URL}}';
				const result = replaceWithVariables(input, undefined, 'https://sistema-gestión.com.ar/guía');
				expect(result).toBe('Consulte la guía en https://sistema-gestión.com.ar/guía');
			});

			it('maneja signos de apertura y cierre (¡!, ¿?) con tildes y diéresis (ü)', () => {
				const input =
					'¡Hola! ¿Desea configurar el menú de {{BRAND_NAME}} para clientes bilingües?';
				const result = replaceWithVariables(input, 'PaxAPOS');
				expect(result).toBe(
					'¡Hola! ¿Desea configurar el menú de PaxAPOS para clientes bilingües?',
				);
			});

			it('reemplaza variables adyacentes a palabras con tildes sin romper la codificación', () => {
				const input = 'Módulos: {{BRAND_NAME}}, salón, administración, stock y arqueos.';
				const result = replaceWithVariables(input, 'RestoGestión');
				expect(result).toBe('Módulos: RestoGestión, salón, administración, stock y arqueos.');
			});
		});

		// ─── Textos con símbolos y caracteres especiales ─────────────────
		describe('textos con símbolos y caracteres especiales', () => {
			it('maneja símbolos monetarios, porcentajes, operadores y puntuación en el contenido', () => {
				const input =
					'Total: $1.250,50 + 21% IVA = $1.513,10 @ {{BRAND_NAME}} [OK] (ref: #4589) & {{SYSTEM_URL}}';
				const result = replaceWithVariables(input, 'PaxAPOS', 'https://pos.test');
				expect(result).toBe(
					'Total: $1.250,50 + 21% IVA = $1.513,10 @ PaxAPOS [OK] (ref: #4589) & https://pos.test',
				);
			});

			it('maneja marcas con símbolos complejos (incluyendo $ y caracteres de regex)', () => {
				const brandWithSymbols = 'PaxAPOS $100 & Co. (v2.0) [Pro] * {Plus} / #1';
				const input = 'Licencia de {{BRAND_NAME}} activada.';
				const result = replaceWithVariables(input, brandWithSymbols);
				expect(result).toBe('Licencia de PaxAPOS $100 & Co. (v2.0) [Pro] * {Plus} / #1 activada.');
			});

			it('maneja URLs con puertos, queries, fragmentos y caracteres especiales', () => {
				const complexUrl =
					'https://pos.example.com:8080/api/v1/auth?client_id=123&redirect=true#section-top';
				const input = 'Endpoint: {{SYSTEM_URL}}';
				const result = replaceWithVariables(input, undefined, complexUrl);
				expect(result).toBe(`Endpoint: ${complexUrl}`);
			});

			it('maneja textos en formato Markdown y HTML con símbolos (<, >, `, *, _, #)', () => {
				const markdownInput =
					'# {{BRAND_NAME}}\n\nConsulte `<script>` en [Enlace]({{SYSTEM_URL}}) **importante**';
				const result = replaceWithVariables(markdownInput, 'PaxAPOS', 'https://pos.test');
				expect(result).toBe(
					'# PaxAPOS\n\nConsulte `<script>` en [Enlace]({{SYSTEM_URL}}) **importante**'.replace(
						'{{SYSTEM_URL}}',
						'https://pos.test',
					),
				);
			});

			it('soporta textos con formato JSON con llaves dobles adyacentes', () => {
				const jsonInput = '{"brand": "{{BRAND_NAME}}", "host": "{{SYSTEM_URL}}"}';
				const result = replaceWithVariables(jsonInput, 'PaxAPOS', 'http://127.0.0.1:3000');
				expect(result).toBe('{"brand": "PaxAPOS", "host": "http://127.0.0.1:3000"}');
			});
		});
	});

	// ─── processGroupedContent ───────────────────────────────────────
	describe('processGroupedContent', () => {
		it('retorna array vacío cuando la entrada es un array vacío', () => {
			expect(processGroupedContent([])).toEqual([]);
		});

		it('procesa grupos y elementos con textos normales reemplazando variables', () => {
			const grouped = [
				{
					folder: '10-{{BRAND_NAME}} Comenzamos',
					items: [
						{
							title: 'Intro a {{BRAND_NAME}}',
							html: '<p>{{BRAND_NAME}} en {{SYSTEM_URL}}</p>',
							rawMarkdown: '# {{BRAND_NAME}}',
						},
					],
				},
			];

			const result = processGroupedContent(grouped, 'PaxAPOS', 'https://pos.test');
			expect(result[0].folder).toBe('10-PaxAPOS Comenzamos');
			expect(result[0].items[0].title).toBe('Intro a PaxAPOS');
			expect(result[0].items[0].html).toBe('<p>PaxAPOS en https://pos.test</p>');
			expect(result[0].items[0].rawMarkdown).toBe('# PaxAPOS');
		});

		it('maneja campos vacíos o undefined dentro de la estructura agrupada', () => {
			const grouped = [
				{
					folder: '',
					items: [
						{
							title: '',
							html: '',
							rawMarkdown: '',
						},
						{
							// Sin propiedades
						},
					],
				},
				{
					// Sin items
				},
			];

			const result = processGroupedContent(grouped, 'PaxAPOS');
			expect(result[0].folder).toBe('');
			expect(result[0].items[0].title).toBe('');
			expect(result[1].folder).toBeUndefined();
			expect(result[1].items).toBeUndefined();
		});

		it('procesa contenido agrupado con tildes y símbolos', () => {
			const grouped = [
				{
					folder: '30-Módulos Principales & Configuración (v2.0)',
					items: [
						{
							title: 'Facturación Electrónica en {{BRAND_NAME}} [AFIP]',
							html: '<div>Cobro: $100 & IVA en {{SYSTEM_URL}}</div>',
							rawMarkdown: '## Salón & Mesas: $500',
						},
					],
				},
			];

			const result = processGroupedContent(
				grouped,
				'Solución Gastronómica',
				'https://app.pos.test:8080/salón',
			);

			expect(result[0].folder).toBe('30-Módulos Principales & Configuración (v2.0)');
			expect(result[0].items[0].title).toBe(
				'Facturación Electrónica en Solución Gastronómica [AFIP]',
			);
			expect(result[0].items[0].html).toBe(
				'<div>Cobro: $100 & IVA en https://app.pos.test:8080/salón</div>',
			);
			expect(result[0].items[0].rawMarkdown).toBe('## Salón & Mesas: $500');
		});
	});

	// ─── Funciones globales getter/setter ────────────────────────────
	describe('funciones globales getter/setter', () => {
		it('setBrandGlobally y getBrandName actualizan y devuelven el nombre de marca', () => {
			setBrandGlobally('NuevaMarca');
			expect(getBrandName()).toBe('NuevaMarca');

			// Con tildes y símbolos
			setBrandGlobally('Solución & Gestión (v3) $');
			expect(getBrandName()).toBe('Solución & Gestión (v3) $');

			// Con cadena vacía
			setBrandGlobally('');
			expect(getBrandName()).toBe('');
		});

		it('setSystemUrlGlobally y getSystemUrl actualizan y devuelven la URL del sistema', () => {
			setSystemUrlGlobally('https://nuevo-pos.com');
			expect(getSystemUrl()).toBe('https://nuevo-pos.com');

			// Con tildes y símbolos
			setSystemUrlGlobally('https://año-nuevo.test:8080/login?v=1&ref=test#sección');
			expect(getSystemUrl()).toBe('https://año-nuevo.test:8080/login?v=1&ref=test#sección');

			// Con cadena vacía
			setSystemUrlGlobally('');
			expect(getSystemUrl()).toBe('');
		});
	});
});
