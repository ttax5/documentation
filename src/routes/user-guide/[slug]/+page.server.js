import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { getMarkdownFile, getAllSlugs } from '$lib/utils/markdownDetector';

export const prerender = true;

/**
 * Función para limpiar HTML para SEO, removiendo divs vacíos con ID
 * que se usan solo para navegación interna
 * @param {string} html - Contenido HTML a limpiar
 * @returns {string} HTML limpio sin divs vacíos
 */
function cleanHtmlForSEO(html) {
	return (
		html
			// Remover divs vacíos con ID (como <div id="arca-facturacion"></div>)
			.replace(/<div\s+id="[^"]*">\s*<\/div>\s*/g, '')
			// Remover comentarios HTML
			.replace(/<!--[\s\S]*?-->/g, '')
			// Limpiar espacios en blanco excesivos
			.replace(/\s+/g, ' ')
			.trim()
	);
}

export async function load({ params }) {
	const { slug } = params;

	try {
		// Usar la utilidad automatizada para obtener el archivo
		const markdownData = await getMarkdownFile(slug);

		if (!markdownData) {
			throw error(404, 'Módulo no encontrado');
		}

		// Convertir markdown a HTML
		const htmlContent = await marked(markdownData.content);

		// Crear una versión limpia para SEO sin divs vacíos
		const cleanContentForSEO = cleanHtmlForSEO(htmlContent);

		return {
			slug,
			title: markdownData.title,
			content: htmlContent,
			cleanContent: cleanContentForSEO,
			rawMarkdown: markdownData.content,
			seo: markdownData.seo,
		};
	} catch (err) {
		console.error('Error loading module:', err);
		throw error(500, 'Error al cargar el módulo');
	}
}

// Generar automáticamente todas las rutas basándose en archivos MD
export async function entries() {
	try {
		const slugs = await getAllSlugs();
		return slugs;
	} catch (error) {
		console.error('Error generando entradas automáticas:', error);
		return [];
	}
}
