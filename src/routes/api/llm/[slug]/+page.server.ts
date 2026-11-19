import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { fileNameToSlug } from '$lib/utils/contentUtils';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

function loadSlugMapping(): Record<string, string> {
	const registerPath = join(process.cwd(), 'static', 'llms', 'files-register.json');
	if (!existsSync(registerPath)) {
		console.error('files-register.json no encontrado. Ejecutar: pnpm run generate:ai');
		return {};
	}

	const register = JSON.parse(readFileSync(registerPath, 'utf-8'));
	const mapping: Record<string, string> = {};

	for (const file of register.detailed_files) {
		mapping[fileNameToSlug(file.original_md)] = file.txt_file;
	}

	return mapping;
}

const slugMapping = loadSlugMapping();

export const entries: EntryGenerator = () => Object.keys(slugMapping).map((slug) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const fileName = slugMapping[params.slug];
	if (!fileName) error(404, `Archivo LLM no encontrado para slug: ${params.slug}`);
	return { href: `/llms/${fileName}` };
};
