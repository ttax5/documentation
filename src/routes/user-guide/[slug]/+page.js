// @ts-nocheck
import { error } from '@sveltejs/kit';
import { marked } from 'marked';
import { base } from '$app/paths';
import { getMarkdownFile } from '$lib/utils/markdownDetector';
import { addLinkIconsToHeaders } from '$lib/utils/contentUtils';
import { replaceWithVariables } from '$lib/helpers/textReplacer';

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

function fixImagePaths(html) {
	const imgRegex = /<img([^>]*)\ssrc\s*=\s*["'](?!https?:\/\/)(?!\/)([^"']+)["']([^>]*)>/gi;
	return html.replace(imgRegex, (match, beforeSrc, src, afterSrc) => {
		if (src.startsWith('images/')) {
			const newSrc = `${base}/${src}`;
			return `<img${beforeSrc} src="${newSrc}"${afterSrc}>`;
		}
		return match;
	});
}

function wrapTablesForResponsive(html) {
	const tableRegex = /<table(?![^>]*class[^>]*table-wrapper)[^>]*>[\s\S]*?<\/table>/gi;
	return html.replace(tableRegex, (match) => {
		return `<div class="table-wrapper">${match}</div>`;
	});
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
		let htmlContent = await marked(markdownData.content);

		// Aplicar transformaciones estáticas de HTML server-side
		htmlContent = fixImagePaths(htmlContent);
		htmlContent = wrapTablesForResponsive(htmlContent);
		htmlContent = replaceWithVariables(htmlContent);
		htmlContent = addLinkIconsToHeaders(htmlContent);

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
