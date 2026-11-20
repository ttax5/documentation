import { replaceWithVariables } from './textReplacer';
import { fileNameToSlug } from '$lib/utils/contentUtils';

export interface SearchableItem {
	title: string;
	href: string;
	type: string;
	content?: string;
	id?: string;
	preview?: string;
}

// Cache del índice de búsqueda (se carga una sola vez)
let searchIndexCache: SearchableItem[] | null = null;

export function resetSearchIndexCache(): void {
	searchIndexCache = null;
}

/**
 * Carga el índice de búsqueda pre-generado en build time.
 * El archivo search-index.json se genera con: npm run generate:search
 */
export async function loadSearchIndex(): Promise<SearchableItem[]> {
	if (searchIndexCache) return searchIndexCache;

	try {
		const response = await fetch('/search-index.json');
		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}
		searchIndexCache = await response.json();
		return searchIndexCache!;
	} catch (error) {
		console.error('Error cargando índice de búsqueda:', error);
		return [];
	}
}

/**
 * Búsqueda client-side sobre el índice pre-compilado.
 * Funciona en GitHub Pages sin necesidad de servidor Node.js.
 */
export async function searchContent(query: string, limit: number = 8): Promise<SearchableItem[]> {
	if (query.length < 2) return [];

	const allContent = await loadSearchIndex();
	const searchTerm = query.toLowerCase();
	const results: Array<SearchableItem & { score: number }> = [];

	for (const item of allContent) {
		let score = 0;
		let preview = '';

		// Buscar en título (mayor peso)
		if (item.title.toLowerCase().includes(searchTerm)) {
			score += 10;
		}

		// Buscar en tipo
		if (item.type.toLowerCase().includes(searchTerm)) {
			score += 5;
		}

		// Buscar en contenido
		if (item.content && item.content.toLowerCase().includes(searchTerm)) {
			score += 3;

			// Bonus por múltiples ocurrencias
			const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
			const matches = (item.content.toLowerCase().match(new RegExp(escapedTerm, 'g')) || [])
				.length;
			score += matches * 0.5;

			// Crear preview del contenido
			const contentLower = item.content.toLowerCase();
			const queryIndex = contentLower.indexOf(searchTerm);
			if (queryIndex !== -1) {
				const start = Math.max(0, queryIndex - 50);
				const end = Math.min(item.content.length, queryIndex + searchTerm.length + 100);
				preview = '...' + item.content.substring(start, end) + '...';
			}
		}

		// Buscar palabras parciales
		const searchWords = searchTerm.split(' ').filter((word) => word.length > 1);
		for (const word of searchWords) {
			if (item.title.toLowerCase().includes(word)) score += 2;
			if (item.content && item.content.toLowerCase().includes(word)) score += 1;
		}

		if (score > 0) {
			results.push({
				...item,
				score,
				preview,
				href: '/user-guide',
				title: replaceWithVariables(item.title),
				type: replaceWithVariables(item.type),
			});
		}
	}

	// Ordenar por score descendente
	results.sort((a, b) => b.score - a.score);

	// Remover el score del resultado final
	return results.slice(0, limit).map(({ score: _score, ...item }) => {
		void _score;
		return item;
	});
}

/**
 * Convierte IDs de módulos a slugs para URLs.
 * Reutiliza la lógica centralizada de contentUtils.
 */
export function getSlugFromModuleId(id: string): string {
	return fileNameToSlug(id);
}
