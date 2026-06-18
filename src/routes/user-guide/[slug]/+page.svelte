<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { addLinkIconsToHeaders, highlightTextInHtml, copyToClipboard } from '$lib/utils/contentUtils';
	import { replaceWithVariables } from '$lib/helpers/textReplacer';
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { data }: { data: PageData } = $props();

	let processedContent = $state('');
	let showToast = $state(false);
	let toastMessage = $state('');

	// ── Process HTML on data change ───────────────────────────
	$effect(() => {
		if (!data.content) return;
		let html = data.content;

		// Fix relative image paths + lazy loading
		html = html.replace(
			/<img([^>]*)\ssrc\s*=\s*["'](?!https?:\/\/)(?!\/)([^"']+)["']([^>]*)>/gi,
			(_m, before, src, after) => {
				const fixedSrc = src.startsWith('images/') ? `${base}/${src}` : src;
				const hasLoading = /loading\s*=/.test(before + after);
				return `<img${before} src="${fixedSrc}"${hasLoading ? '' : ' loading="lazy"'}${after}>`;
			}
		);

		// Wrap tables for responsive scroll
		html = html.replace(
			/<table(?![^>]*class[^>]*table-wrapper)[^>]*>[\s\S]*?<\/table>/gi,
			(match) => `<div class="table-wrapper">${match}</div>`
		);

		// Add heading IDs where missing (Marked doesn't always add them)
		html = html.replace(/<(h[2-4])>([^<]+)<\/h[2-4]>/gi, (_m, tag, text) => {
			const id = text
				.toLowerCase()
				.normalize('NFD')
				.replace(/[\u0300-\u036f]/g, '')
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/(^-|-$)/g, '');
			return `<${tag} id="${id}">${text}</${tag}>`;
		});

		// Highlight search term if present
		const urlParams = new URLSearchParams($page.url.search);
		const highlight = urlParams.get('highlight');
		if (highlight) {
			html = highlightTextInHtml(html, highlight);
		}

		// Add anchor link icons to section headers
		let tempContent = addLinkIconsToHeaders(html);
		processedContent = replaceWithVariables(tempContent);
	});

	// ── Expose copyLinkToSection globally for inline onclick ──
	onMount(() => {
		(window as any).copyLinkToSection = (sectionId: string) => {
			const url = sectionId
				? `${window.location.origin}${base}/user-guide/${data.slug}#${sectionId}`
				: window.location.href;
			copyToClipboard(url).then((ok) => {
				if (ok) showToastMsg('Enlace copiado');
			});
		};
	});

	function showToastMsg(msg: string) {
		toastMessage = msg;
		showToast = true;
		setTimeout(() => (showToast = false), 2500);
	}

	function copyPageLink() {
		copyToClipboard(window.location.href).then((ok) => {
			if (ok) showToastMsg('Enlace copiado al portapapeles');
		});
	}

	async function openLLMPage() {
		try {
			const res = await fetch('/llms/files-register.json');
			if (res.ok) {
				const reg = await res.json();
				const match = reg.detailed_files?.find(
					(f: { slug?: string; txt_file: string; original_md: string }) => f.slug === data.slug
				);
				if (match) {
					window.open(`${base}/llms/${match.txt_file}`, '_blank');
					return;
				}
			}
		} catch {
			/* noop */
		}
		window.open(`${base}/api/llm/${data.slug}`, '_blank');
	}
</script>

<SEOHead
	title={replaceWithVariables(data.seo?.title || data.title)}
	description={data.seo?.description ? replaceWithVariables(data.seo?.description) : undefined}
	keywords={data.seo?.keywords ? replaceWithVariables(data.seo?.keywords) : undefined}
	section="Manual de Usuario"
/>

<!-- Toast -->
{#if showToast}
	<div class="doc-toast">
		<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
			<path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
		</svg>
		{toastMessage}
	</div>
{/if}

<!-- Article + TOC side-by-side -->
<div style="display: flex; gap: 2rem; align-items: flex-start;">

	<!-- Main Article -->
	<article style="flex: 1; min-width: 0;">

		<!-- Article Header -->
		<header class="doc-article-header">
			<!-- Breadcrumb -->
			<nav class="doc-article-breadcrumb" aria-label="Breadcrumb">
				<a href="{base}/user-guide">Documentación</a>
				<svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
				</svg>
				<span style="color: var(--color-text-faint)">{replaceWithVariables(data.title)}</span>
			</nav>

			<!-- Title -->
			<h1 class="doc-article-title">{replaceWithVariables(data.title)}</h1>

			<!-- Meta actions -->
			<div class="doc-article-meta">
				<button onclick={copyPageLink} class="doc-article-meta-btn">
					<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
					</svg>
					Copiar enlace
				</button>
				<button onclick={openLLMPage} class="doc-article-meta-btn">
					<svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
					</svg>
					Versión LLM
				</button>
			</div>
		</header>

		<!-- Markdown Content -->
		<div class="doc-article">
			{@html processedContent}
		</div>

		<!-- Footer navigation -->
		<footer class="doc-article-footer">
			<a href="{base}/user-guide" class="doc-nav-link">
				<svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
				</svg>
				Volver al índice
			</a>
		</footer>
	</article>

	<!-- Table of Contents -->
	<TableOfContents htmlContent={processedContent} />

</div>
