import { describe, it, expect, beforeEach } from 'vitest';
import {
	getMarkdownFiles,
	getMarkdownFile,
	getAllSlugs,
	getModuleCategories,
	categorizeByFolder,
	generateSEO,
	resetMarkdownCache,
} from '../markdownDetector';

describe('markdownDetector', () => {
	beforeEach(() => {
		resetMarkdownCache();
	});

	// ─── categorizeByFolder ──────────────────────────────────────────
	describe('categorizeByFolder', () => {
		it('clasifica correctamente rutas de carpetas estándar', () => {
			expect(
				categorizeByFolder('/routes/user-guide/Manual-Usuario/10-Comenzamos/11-Intro.md'),
			).toEqual({
				category: 'Comenzamos',
				order: 10,
			});
			expect(
				categorizeByFolder('/routes/user-guide/Manual-Usuario/20-Ventas/21-Salon.md'),
			).toEqual({
				category: 'Ventas',
				order: 20,
			});
			expect(
				categorizeByFolder(
					'/routes/user-guide/Manual-Usuario/110-Configuracion/111-Info.md',
				),
			).toEqual({
				category: 'Configuracion',
				order: 110,
			});
			expect(
				categorizeByFolder(
					'/routes/user-guide/Manual-Usuario/140-Biblioteca-de-Drivers/142-Printer.md',
				),
			).toEqual({
				category: 'Biblioteca de Drivers',
				order: 140,
			});
			expect(
				categorizeByFolder('/routes/user-guide/Manual-Usuario/150-Extra/151-FAQ.md'),
			).toEqual({
				category: 'Extra',
				order: 150,
			});
		});

		it('asigna categoría "Otros" y orden 999 a rutas no coincidentes o desconocidas', () => {
			expect(categorizeByFolder('/ruta/desconocida/archivo.md')).toEqual({
				category: 'Otros',
				order: 999,
			});
		});

		it('maneja textos vacíos devolviendo la categoría por defecto', () => {
			expect(categorizeByFolder('')).toEqual({
				category: 'Otros',
				order: 999,
			});
		});

		it('maneja rutas con tildes, caracteres especiales y símbolos', () => {
			// Tildes en la carpeta y en el archivo
			expect(
				categorizeByFolder(
					'/Manual-Usuario/110-Configuración-Avanzada/112-ARCA-y-Facturación.md',
				),
			).toEqual({
				category: 'Configuración Avanzada',
				order: 110,
			});

			// Símbolos, espacios y caracteres especiales
			expect(
				categorizeByFolder(
					'/Manual-Usuario/140-Drivers-(POS-&-Redes-v2.0)-#1/driver.md',
				),
			).toEqual({
				category: 'Drivers (POS & Redes v2.0) #1',
				order: 140,
			});

			// Símbolos arbitrarios
			expect(categorizeByFolder('!@#$%^&*()_+')).toEqual({
				category: 'Otros',
				order: 999,
			});
		});
	});

	// ─── generateSEO ─────────────────────────────────────────────────
	describe('generateSEO', () => {
		it('genera metadatos SEO para textos normales', () => {
			const title = 'Configuración de Impresoras';
			const content =
				'# Configuración de Impresoras\n\nInstrucciones para configurar impresoras térmicas en el sistema.\n\nPárrafo adicional.';
			const slug = 'configuracion-de-impresoras';

			const seo = generateSEO(title, content, slug);

			expect(seo.title).toBe('Configuración de Impresoras - Manual');
			expect(seo.description).toBe(
				'Instrucciones para configurar impresoras térmicas en el sistema.',
			);
			expect(seo.keywords).toContain('configuracion de impresoras');
			expect(seo.keywords).toContain('paxapos');
			expect(seo.keywords).toContain('configuración de impresoras');
			expect(seo.keywords).toContain('tutorial');
			expect(seo.keywords).toContain('guía');
		});

		it('maneja textos vacíos sin arrojar excepciones y con valores de fallback', () => {
			const seo = generateSEO('', '', '');

			expect(seo.title).toBe(' - Manual');
			expect(seo.description).toBe('Guía completa sobre .');
			expect(seo.keywords).toContain('paxapos');
			expect(seo.keywords).toContain('tutorial');
		});

		it('maneja contenido vacío manteniendo el título provisto en la descripción de respaldo', () => {
			const seo = generateSEO('Módulo Simple', '', 'modulo-simple');

			expect(seo.title).toBe('Módulo Simple - Manual');
			expect(seo.description).toBe('Guía completa sobre Módulo Simple.');
		});

		it('genera metadatos para textos con tildes y caracteres en español', () => {
			const title = 'ARCA y Facturación Electrónica';
			const content =
				'# ARCA y Facturación\n\nGuía completa sobre emisión de comprobantes fiscales y configuración de puntos de venta en el salón comercial.';
			const slug = 'arca-y-facturacion';

			const seo = generateSEO(title, content, slug);

			expect(seo.title).toBe('ARCA y Facturación Electrónica - Manual');
			expect(seo.description).toContain('emisión de comprobantes');
			expect(seo.description).toContain('salón');
			expect(seo.keywords).toContain('arca y facturacion');
			expect(seo.keywords).toContain('arca y facturación electrónica');
		});

		it('limpia etiquetas HTML y caracteres markdown en la descripción', () => {
			const title = 'Limpieza de Símbolos';
			const content =
				'<div id="toc">Índice</div>\n\n# Título Ignorado\n\n**Texto en negrita** con *cursiva* y `código` <etiqueta> limpia.';
			const slug = 'limpieza-de-simbolos';

			const seo = generateSEO(title, content, slug);

			expect(seo.description).not.toContain('<div');
			expect(seo.description).not.toContain('</div>');
			expect(seo.description).not.toContain('<etiqueta>');
			expect(seo.description).not.toContain('*');
			expect(seo.description).not.toContain('#');
			expect(seo.description).not.toContain('<');
			expect(seo.description).not.toContain('>');
		});

		it('trunca descripciones que superan los 160 caracteres agregando puntos suspensivos', () => {
			const title = 'Texto Largo';
			const longParagraph =
				'Este es un texto sumamente largo diseñado para exceder el límite establecido de ciento sesenta caracteres para comprobar que la descripción generada se recorta a 157 caracteres y añade puntos suspensivos al final.';
			const content = `# Encabezado\n\n${longParagraph}`;
			const slug = 'texto-largo';

			const seo = generateSEO(title, content, slug);

			expect(seo.description.length).toBeLessThanOrEqual(160);
			expect(seo.description.endsWith('...')).toBe(true);
		});

		it('soporta títulos y contenidos con símbolos especiales', () => {
			const title = 'Redes & Wi-Fi: Puertos 8080/tcp + $100 [OK]';
			const content =
				'# Conectividad @ Wi-Fi\n\nVerificar parámetros: IP=192.168.1.1 (máscara 255.255.255.0) & DNS 8.8.8.8. Descuento: 50%!';
			const slug = 'redes-wifi';

			const seo = generateSEO(title, content, slug);

			expect(seo.title).toBe('Redes & Wi-Fi: Puertos 8080/tcp + $100 [OK] - Manual');
			expect(seo.description).toContain('IP=192.168.1.1');
			expect(seo.description).toContain('50%!');
		});
	});

	// ─── getMarkdownFiles ────────────────────────────────────────────
	describe('getMarkdownFiles', () => {
		it('detecta y procesa los archivos markdown existentes del manual', async () => {
			const result = await getMarkdownFiles();

			expect(result).toBeDefined();
			expect(result.markdownFiles).toBeDefined();
			expect(result.entries).toBeDefined();
			expect(result.moduleCategories).toBeDefined();

			// Verificar que detectó archivos
			const slugs = Object.keys(result.markdownFiles);
			expect(slugs.length).toBeGreaterThan(0);
			expect(result.entries.length).toBe(slugs.length);

			// Verificar presencia de archivos conocidos
			expect(slugs).toContain('introduccion');
			expect(slugs).toContain('iniciar-sesion');
			expect(slugs).toContain('arca-y-facturacion');
		});

		it('genera estructura válida de datos para cada archivo cargado', async () => {
			const { markdownFiles } = await getMarkdownFiles();
			const firstSlug = Object.keys(markdownFiles)[0];
			const fileData = markdownFiles[firstSlug];

			expect(fileData).toHaveProperty('fileName');
			expect(fileData).toHaveProperty('path');
			expect(fileData).toHaveProperty('title');
			expect(fileData).toHaveProperty('content');
			expect(fileData).toHaveProperty('category');
			expect(fileData).toHaveProperty('categoryOrder');
			expect(fileData).toHaveProperty('seo');

			expect(typeof fileData.title).toBe('string');
			expect(typeof fileData.content).toBe('string');
			expect(fileData.seo).toHaveProperty('title');
			expect(fileData.seo).toHaveProperty('description');
			expect(fileData.seo).toHaveProperty('keywords');
		});

		it('normaliza correctamente nombres de archivo con tildes para generar los slugs', async () => {
			const { markdownFiles } = await getMarkdownFiles();

			// '112-ARCA-y-Facturación.md' debe tener slug 'arca-y-facturacion'
			expect(markdownFiles['arca-y-facturacion']).toBeDefined();
			expect(markdownFiles['arca-y-facturacion'].fileName).toContain('Facturación');

			// '12-Iniciar-sesión.md' debe tener slug 'iniciar-sesion'
			expect(markdownFiles['iniciar-sesion']).toBeDefined();
			expect(markdownFiles['iniciar-sesion'].fileName).toContain('sesión');

			// '152-Buchón-Bot.md' debe tener slug 'buchon-bot'
			expect(markdownFiles['buchon-bot']).toBeDefined();
			expect(markdownFiles['buchon-bot'].fileName).toContain('Buchón');
		});

		it('remueve el encabezado H1 del contenido almacenado', async () => {
			const { markdownFiles } = await getMarkdownFiles();
			const fileData = markdownFiles['introduccion'];

			if (fileData) {
				// No debe comenzar con '# '
				expect(fileData.content.startsWith('# ')).toBe(false);
			}
		});
	});

	// ─── getMarkdownFile ─────────────────────────────────────────────
	describe('getMarkdownFile', () => {
		it('obtiene el archivo correcto para un slug normal existente', async () => {
			const file = await getMarkdownFile('introduccion');
			expect(file).not.toBeNull();
			expect(file?.fileName).toBe('11-Introduccion.md');
			expect(file?.category).toBe('Comenzamos');
		});

		it('obtiene el archivo correcto usando slug normalizado de un archivo con tilde', async () => {
			const file = await getMarkdownFile('arca-y-facturacion');
			expect(file).not.toBeNull();
			expect(file?.fileName).toBe('112-ARCA-y-Facturación.md');
			expect(file?.category).toBe('Configuracion');
		});

		it('devuelve null cuando el slug está vacío', async () => {
			const file = await getMarkdownFile('');
			expect(file).toBeNull();
		});

		it('devuelve null si se consulta con un slug que contiene tildes no normalizadas', async () => {
			// El slug en el mapa es 'iniciar-sesion', no 'iniciar-sesión'
			const file = await getMarkdownFile('iniciar-sesión');
			expect(file).toBeNull();
		});

		it('devuelve null para slugs inexistentes o con caracteres y símbolos arbitrarios', async () => {
			expect(await getMarkdownFile('inexistente-12345')).toBeNull();
			expect(await getMarkdownFile('!@#$%^&*()')).toBeNull();
			expect(await getMarkdownFile('   ')).toBeNull();
		});
	});

	// ─── getAllSlugs ─────────────────────────────────────────────────
	describe('getAllSlugs', () => {
		it('devuelve una lista no vacía de todos los slugs disponibles', async () => {
			const slugs = await getAllSlugs();
			expect(Array.isArray(slugs)).toBe(true);
			expect(slugs.length).toBeGreaterThan(0);

			for (const item of slugs) {
				expect(item).toHaveProperty('slug');
				expect(typeof item.slug).toBe('string');
				expect(item.slug.length).toBeGreaterThan(0);
				// El slug debe ser minúsculas y sin espacios
				expect(item.slug).toBe(item.slug.toLowerCase());
				expect(item.slug).not.toContain(' ');
			}
		});
	});

	// ─── getModuleCategories ─────────────────────────────────────────
	describe('getModuleCategories', () => {
		it('devuelve las categorías agrupadas y ordenadas por el campo order', async () => {
			const categories = await getModuleCategories();
			expect(Array.isArray(categories)).toBe(true);
			expect(categories.length).toBeGreaterThan(0);

			for (let i = 0; i < categories.length - 1; i++) {
				expect(categories[i].order).toBeLessThanOrEqual(categories[i + 1].order);
			}
		});

		it('cada categoría contiene módulos ordenados por fileName', async () => {
			const categories = await getModuleCategories();

			for (const category of categories) {
				expect(category).toHaveProperty('title');
				expect(category).toHaveProperty('order');
				expect(category).toHaveProperty('modules');
				expect(Array.isArray(category.modules)).toBe(true);

				// Verificar orden de módulos
				for (let i = 0; i < category.modules.length - 1; i++) {
					const cmp = category.modules[i].fileName.localeCompare(
						category.modules[i + 1].fileName,
					);
					expect(cmp).toBeLessThanOrEqual(0);
				}

				// Verificar estructura de cada módulo
				for (const mod of category.modules) {
					expect(mod).toHaveProperty('slug');
					expect(mod).toHaveProperty('title');
					expect(mod).toHaveProperty('fileName');
				}
			}
		});
	});
});
