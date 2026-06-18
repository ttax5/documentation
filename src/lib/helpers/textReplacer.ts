import { browser } from '$app/environment';

function getConfig() {
	if (browser && typeof window !== 'undefined' && (window as any).__APP_CONFIG__) {
		const config = (window as any).__APP_CONFIG__;
		if (config.BRAND_NAME && config.BRAND_NAME.includes('{{')) {
			console.error('❌ ERROR: Variables de configuración no reemplazadas');
		}
		return config;
	}
	return { BRAND_NAME: '', SYSTEM_URL: '' };
}

const config = getConfig();
const REPLACEMENT_WORD = (config.BRAND_NAME && config.BRAND_NAME !== '{{BRAND_NAME}}') ? config.BRAND_NAME : 'PaxaPOS';
const DEFAULT_SYSTEM_URL = (config.SYSTEM_URL && config.SYSTEM_URL !== '{{SYSTEM_URL}}') ? config.SYSTEM_URL : 'https://paxapos.com';

const BRAND_VARIABLE = /\{\{BRAND_NAME\}\}/g;
const SYSTEM_URL_VARIABLE = /\{\{SYSTEM_URL\}\}/g;

function replaceVariables(content: string, brand: string, url: string): string {
	if (!content) return content;
	let result = content;
	result = result.replace(BRAND_VARIABLE, brand || REPLACEMENT_WORD);
	result = result.replace(SYSTEM_URL_VARIABLE, url || DEFAULT_SYSTEM_URL);
	return result;
}

export function replaceWithVariables(content: string, brand?: string, url?: string): string {
	const cfg = getConfig();
	const b = brand || (cfg.BRAND_NAME && cfg.BRAND_NAME !== '{{BRAND_NAME}}' ? cfg.BRAND_NAME : REPLACEMENT_WORD);
	const u = url || (cfg.SYSTEM_URL && cfg.SYSTEM_URL !== '{{SYSTEM_URL}}' ? cfg.SYSTEM_URL : DEFAULT_SYSTEM_URL);
	return replaceVariables(content, b, u);
}

export function processGroupedContent(
	groupedContent: any[],
	newWord?: string,
	newUrl?: string,
): any[] {
	return groupedContent.map((group) => ({
		...group,
		folder: group.folder ? replaceWithVariables(group.folder, newWord, newUrl) : group.folder,
		items: group.items
			? group.items.map((item: any) => ({
					...item,
					title: item.title ? replaceWithVariables(item.title, newWord, newUrl) : item.title,
					html: item.html ? replaceWithVariables(item.html, newWord, newUrl) : item.html,
					rawMarkdown: item.rawMarkdown
						? replaceWithVariables(item.rawMarkdown, newWord, newUrl)
						: item.rawMarkdown,
				}))
			: group.items,
	}));
}

export function autoReplaceBrand(node: HTMLElement) {
	function processTextNodes() {
		const cfg = getConfig();
		const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, {
			acceptNode: (textNode) => {
				const parent = textNode.parentElement;
				if (!parent) return NodeFilter.FILTER_REJECT;
				const tagName = parent.tagName.toLowerCase();
				if (['script', 'style', 'code', 'pre'].includes(tagName)) {
					return NodeFilter.FILTER_REJECT;
				}
				return NodeFilter.FILTER_ACCEPT;
			},
		});

		const textNodes: Text[] = [];
		let currentNode;
		while ((currentNode = walker.nextNode())) {
			textNodes.push(currentNode as Text);
		}

		textNodes.forEach((textNode) => {
			const originalText = textNode.textContent || '';
			const replacedText = replaceWithVariables(originalText, cfg.BRAND_NAME, cfg.SYSTEM_URL);
			if (originalText !== replacedText) {
				textNode.textContent = replacedText;
			}
		});
	}

	processTextNodes();

	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type === 'childList') {
				mutation.addedNodes.forEach((addedNode) => {
					if (addedNode.nodeType === Node.ELEMENT_NODE) {
						processTextNodes();
					}
				});
			}
		});
	});

	observer.observe(node, { childList: true, subtree: true });

	return {
		destroy() {
			observer.disconnect();
		},
	};
}
