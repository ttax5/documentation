import { dev } from '$app/environment';
import { fileNameToSlug, extractMarkdownTitle } from './contentUtils';

// ─── Tipos ───────────────────────────────────────────────────

interface MarkdownFileData {
	fileName: string;
	path: string;
	title: string;
	content: string;
	category: string;
	categoryOrder: number;
	parentSlug: string | null;
	seo: { title: string; description: string; keywords: string };
}

interface ModuleEntry {
	slug: string;
	title: string;
	fileName: string;
	parentSlug?: string | null;
	children?: ModuleEntry[];
}

interface ModuleCategory {
	title: string;
	order: number;
	modules: ModuleEntry[];
}

interface MarkdownDetectorResult {
	markdownFiles: Record<string, MarkdownFileData>;
	entries: Array<{ slug: string }>;
	moduleCategories: ModuleCategory[];
}

// ─── Cache ───────────────────────────────────────────────────

let markdownCache: MarkdownDetectorResult | null = null;

export function resetMarkdownCache(): void {
	markdownCache = null;
}

// ─── Helpers ─────────────────────────────────────────────────

export function categorizeByFolder(path: string): { category: string; order: number } {
	const match = path.match(/\/Manual-Usuario\/(\d+)-([^/]+)\//);
	if (match) {
		const order = parseInt(match[1], 10);
		const rawName = match[2].replace(/-/g, ' ');
		return { category: rawName, order };
	}
	return { category: 'Otros', order: 999 };
}

/**
 * Deriva el slug del módulo padre a partir de la ruta.
 * Un hijo vive en una subcarpeta con el mismo nombre que su archivo padre:
 *   .../Manual-Usuario/40-Productos/41-Menu/50-Agregar-Producto.md
 * → padre = fileNameToSlug('41-Menu') = 'menu'
 * Devuelve null para módulos de primer nivel.
 */
function extractParentSlug(path: string): string | null {
	const match = path.match(/\/Manual-Usuario\/\d+-[^/]+\/(\d+-[^/]+)\/[^/]+\.md$/);
	if (match) return fileNameToSlug(match[1]);
	return null;
}

export function generateSEO(
	title: string,
	content: string,
	slug: string,
): { title: string; description: string; keywords: string } {
	const cleanContent = content
		.replace(/<div\s+id="[^"]*">\s*<\/div>/g, '')
		.replace(/^#.+$/m, '')
		.trim();

	const firstParagraph = cleanContent.split('\n\n')[0] || '';
	const description =
		firstParagraph.length > 160
			? firstParagraph.substring(0, 157) + '...'
			: firstParagraph || `Guía completa sobre ${title}.`;

	const keywords = [
		slug.replace(/-/g, ' '),
		'paxapos',
		title.toLowerCase(),
		'tutorial',
		'guía',
		'manual usuario',
	].join(', ');

	return {
		title: `${title} - Manual`,
		description: description.replace(/[#*<>]/g, '').trim(),
		keywords,
	};
}

// ─── API pública ─────────────────────────────────────────────

export async function getMarkdownFiles(): Promise<MarkdownDetectorResult> {
	if (!dev && markdownCache) return markdownCache;

	try {
		const modules = import.meta.glob('/src/routes/user-guide/Manual-Usuario/**/*.md', {
			query: '?raw',
			import: 'default',
		});

		const markdownFiles: Record<string, MarkdownFileData> = {};
		const entries: Array<{ slug: string }> = [];
		const categorizedModules: Record<string, ModuleCategory> = {};

		for (const [path, moduleLoader] of Object.entries(modules)) {
			try {
				const content = String(await moduleLoader());
				const fileName = path.split('/').pop();
				if (!fileName) continue;

				const slug = fileNameToSlug(fileName);
				const title = extractMarkdownTitle(content);
				const categoryInfo = categorizeByFolder(path);
				const parentSlug = extractParentSlug(path);
				const contentWithoutTitle = content.replace(/^#\s+.+(\r?\n)?/, '').trim();

				markdownFiles[slug] = {
					fileName,
					path,
					title,
					content: contentWithoutTitle,
					category: categoryInfo.category,
					categoryOrder: categoryInfo.order,
					parentSlug,
					seo: generateSEO(title, content, slug),
				};

				entries.push({ slug });

				if (!categorizedModules[categoryInfo.category]) {
					categorizedModules[categoryInfo.category] = {
						title: categoryInfo.category,
						order: categoryInfo.order,
						modules: [],
					};
				}

				categorizedModules[categoryInfo.category].modules.push({
					slug,
					title,
					fileName,
					parentSlug,
				});
			} catch (err) {
				console.warn(`Error procesando ${path}:`, err);
			}
		}

		// Anidar hijos bajo su módulo padre dentro de cada categoría.
		Object.values(categorizedModules).forEach((cat) => {
			const all = cat.modules;
			const topLevel = all.filter((m) => !m.parentSlug);
			const topSlugs = new Set(topLevel.map((m) => m.slug));

			const childrenByParent = new Map<string, ModuleEntry[]>();
			for (const m of all) {
				if (!m.parentSlug) continue;
				if (!childrenByParent.has(m.parentSlug)) childrenByParent.set(m.parentSlug, []);
				childrenByParent.get(m.parentSlug)!.push(m);
			}

			for (const parent of topLevel) {
				const kids = childrenByParent.get(parent.slug);
				if (kids) {
					parent.children = kids.sort((a, b) => a.fileName.localeCompare(b.fileName));
				}
			}

			// Hijos sin padre encontrado: se muestran como primer nivel para no perderlos.
			const orphans = all.filter((m) => m.parentSlug && !topSlugs.has(m.parentSlug));

			cat.modules = topLevel
				.concat(orphans)
				.sort((a, b) => a.fileName.localeCompare(b.fileName));
		});

		const moduleCategories = Object.values(categorizedModules).sort(
			(a, b) => a.order - b.order,
		);

		const result: MarkdownDetectorResult = { markdownFiles, entries, moduleCategories };

		if (!dev) markdownCache = result;

		return result;
	} catch (error) {
		console.error('Error detectando archivos markdown:', error);
		return { markdownFiles: {}, entries: [], moduleCategories: [] };
	}
}

export async function getMarkdownFile(slug: string): Promise<MarkdownFileData | null> {
	const { markdownFiles } = await getMarkdownFiles();
	return markdownFiles[slug] || null;
}

export async function getAllSlugs(): Promise<Array<{ slug: string }>> {
	const { entries } = await getMarkdownFiles();
	return entries;
}

export async function getModuleCategories(): Promise<ModuleCategory[]> {
	const { moduleCategories } = await getMarkdownFiles();
	return moduleCategories;
}
