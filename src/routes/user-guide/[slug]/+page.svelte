<script lang="ts">
	import { tick } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { getModuleCategories } from '$lib/utils/markdownDetector';
	import { highlightTextInHtml, copyToClipboard } from '$lib/utils/contentUtils';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	let showCopyMessage = $state(false);
	type SidebarModule = {
		slug: string;
		title: string;
		children?: Array<{ slug: string; title: string }>;
	};
	let moduleCategories: Array<{
		title: string;
		modules: SidebarModule[];
	}> = $state([]);

	// Derivar contenido procesado (highlighting si existe el query param)
	let processedContent = $derived.by(() => {
		const highlightParam = page.url.searchParams.get('highlight');
		if (highlightParam) {
			return highlightTextInHtml(data.content, highlightParam);
		}
		return data.content;
	});

	// Cargar categorías y manejar navegación por hash con cleanup
	$effect(() => {
		if (moduleCategories.length === 0) {
			getModuleCategories()
				.then((cats) => {
					moduleCategories = cats;
				})
				.catch((error) => {
					console.error('Error cargando categorías:', error);
					moduleCategories = [];
				});
		}

		const handleHashNavigation = () => {
			const hash = window.location.hash;
			if (hash) {
				tick().then(() => {
					try {
						const element = document.querySelector(hash);
						if (element) {
							element.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
								inline: 'nearest',
							});
						}
					} catch (error) {
						console.warn('Error en navegación por hash:', error);
					}
				});
			}
		};

		handleHashNavigation();
		window.addEventListener('hashchange', handleHashNavigation);

		return () => {
			window.removeEventListener('hashchange', handleHashNavigation);
		};
	});

	// Función para copiar el enlace de una sección específica
	function copyLinkToSection(sectionId: string) {
		const baseUrl = window.location.origin;
		const currentPath = `${base}/user-guide/${data.slug}`;
		const linkWithHash = sectionId
			? `${baseUrl}${currentPath}#${sectionId}`
			: `${baseUrl}${currentPath}`;

		copyToClipboard(linkWithHash).then((success) => {
			if (success) {
				showCopyMessage = true;
				setTimeout(() => {
					showCopyMessage = false;
				}, 2000);
			}
		});
	}

	// Función para abrir el archivo LLM en una nueva pestaña
	async function openLLMPage() {
		try {
			const response = await fetch('/llms/files-register.json');
			if (response.ok) {
				const register = await response.json();
				const match = register.detailed_files.find(
					(f: { slug?: string; txt_file: string; original_md: string }) => {
						if (f.slug === data.slug) return true;
						const slug = f.original_md
							.replace(/^\d+-/, '')
							.toLowerCase()
							.replace(/\s+/g, '-')
							.normalize('NFD')
							.replace(/[\u0300-\u036f]/g, '')
							.replace(/[^a-z0-9-]/g, '')
							.replace(/-+/g, '-')
							.replace(/^-|-$/g, '');
						return slug === data.slug;
					},
				);
				if (match) {
					window.open(`${base}/llms/${match.txt_file}`, '_blank');
					return;
				}
			}
		} catch (err) {
			console.error('Error obteniendo mapeo LLM:', err);
		}
		window.open(`${base}/api/llm/${data.slug}`, '_blank');
	}

	// Calcular el módulo actual para navegación móvil
	let currentSlug = $derived(page.params.slug);

	let openCategories = $state<Record<string, boolean>>({});

	function categoryHasCurrent(modules: SidebarModule[]): boolean {
		return modules.some(
			(m) =>
				m.slug === currentSlug ||
				(m.children ?? []).some((c) => c.slug === currentSlug),
		);
	}

	function isOpen(categoryTitle: string, modules: SidebarModule[]): boolean {
		if (openCategories[categoryTitle] !== undefined) {
			return openCategories[categoryTitle];
		}
		return categoryHasCurrent(modules);
	}

	function toggleCategory(categoryTitle: string, modules: SidebarModule[]) {
		openCategories[categoryTitle] = !isOpen(categoryTitle, modules);
	}

	// Plegado/desplegado de submódulos (hijos) por módulo padre
	let openModules = $state<Record<string, boolean>>({});

	function isModuleOpen(module: SidebarModule): boolean {
		if (openModules[module.slug] !== undefined) {
			return openModules[module.slug];
		}
		// Por defecto, abierto si el padre o alguno de sus hijos es la página actual
		return (
			module.slug === currentSlug ||
			(module.children ?? []).some((c) => c.slug === currentSlug)
		);
	}

	function toggleModule(module: SidebarModule) {
		openModules[module.slug] = !isModuleOpen(module);
	}
</script>

<!-- SEO dinámico por módulo -->
<SEOHead
	title={data.seo.title}
	description={data.seo.description}
	keywords={data.seo.keywords}
	section="Manual de Usuario"
/>

<!-- Mensaje de confirmación de copia -->
{#if showCopyMessage}
	<div
		class="fixed top-4 right-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white shadow-lg transition-all duration-300"
	>
		✅ Enlace copiado al portapapeles
	</div>
{/if}

<div
	class="relative z-10 mx-auto min-h-screen max-w-7xl overflow-x-hidden bg-gray-100 px-2 py-2 sm:px-4 md:px-6 lg:px-8 dark:bg-gray-900"
>
	<div class="flex flex-col gap-2 sm:gap-6 md:gap-8 lg:flex-row">
		<!-- Sidebar responsivo -->
		<aside class="relative z-20 flex-shrink-0 lg:w-64">
			<div
				class="rounded-xl border border-gray-900 bg-white p-2 shadow-sm sm:p-4 md:p-5 dark:border-gray-700 dark:bg-gray-800"
			>
				<h3
					class="mb-2 text-xs font-bold text-gray-900 sm:mb-4 sm:text-base md:text-lg dark:text-white"
				>
					Manual de Usuario
				</h3>

				<!-- Selector dropdown para móviles -->
				<div class="mb-2 block sm:mb-4 lg:hidden">
					<select
						class="w-full rounded-md border border-gray-900 bg-white px-2 py-1.5 text-xs text-gray-900 transition-colors hover:border-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 sm:px-3 sm:py-2 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
						value={currentSlug}
						onchange={async (e) => {
							const target = e.target as HTMLSelectElement;
							if (target.value) {
								goto(`${base}/user-guide/${target.value}`);
							}
						}}
					>
						<option value="">Seleccionar módulo...</option>
						{#each moduleCategories as category (category.title)}
							<optgroup label={category.title}>
								{#each category.modules as module (module.slug)}
									<option value={module.slug}>{module.title}</option>
									{#each module.children ?? [] as child (child.slug)}
										<option value={child.slug}>&nbsp;&nbsp;└ {child.title}</option>
									{/each}
								{/each}
							</optgroup>
						{/each}
					</select>
				</div>

				<!-- Lista de navegación para escritorio -->
				<div class="hidden space-y-2 sm:space-y-3 lg:block">
					{#each moduleCategories as category (category.title)}
						{@const catOpen = isOpen(category.title, category.modules)}
						<div class="space-y-1 sm:space-y-2">
							<button
								type="button"
								onclick={() => toggleCategory(category.title, category.modules)}
								class="flex w-full items-center justify-between border-b border-gray-200 pb-1 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase transition-colors hover:text-blue-600 sm:text-sm dark:border-gray-600 dark:text-gray-300 dark:hover:text-blue-400"
								aria-expanded={catOpen}
							>
								<span>{category.title}</span>
								<svg
									class="h-4 w-4 transform text-gray-400 transition-transform duration-200 dark:text-gray-400 {catOpen
										? 'rotate-180'
										: ''}"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>
							{#if catOpen}
								<div class="space-y-1">
									{#each category.modules as module (module.slug)}
										{@const hasChildren = !!(module.children && module.children.length)}
										{@const modOpen = isModuleOpen(module)}
										<div class="flex items-stretch gap-1">
											<a
												href="{base}/user-guide/{module.slug}"
												class="block flex-1 rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-200 sm:px-3 sm:py-2 sm:text-sm {currentSlug ===
												module.slug
													? 'border-l-2 border-teal-500 bg-teal-50 font-medium text-teal-900 dark:border-blue-500 dark:bg-blue-900 dark:text-blue-100'
													: 'text-gray-700 hover:bg-teal-50 hover:text-teal-700 dark:text-gray-200 dark:hover:bg-gray-700'}"
											>
												{module.title}
											</a>
											{#if hasChildren}
												<button
													type="button"
													onclick={() => toggleModule(module)}
													class="flex flex-shrink-0 items-center justify-center rounded-md px-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-700 dark:hover:text-blue-400"
													aria-expanded={modOpen}
													aria-label="Mostrar u ocultar subpáginas de {module.title}"
												>
													<svg
														class="h-3.5 w-3.5 transform transition-transform duration-200 {modOpen
															? 'rotate-180'
															: ''}"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M19 9l-7 7-7-7"
														/>
													</svg>
												</button>
											{/if}
										</div>
										{#if hasChildren && modOpen}
											<div
												class="ml-3 space-y-1 border-l border-gray-200 pl-2 dark:border-gray-600"
											>
												{#each module.children ?? [] as child (child.slug)}
													<a
														href="{base}/user-guide/{child.slug}"
														class="block w-full rounded-md px-2 py-1.5 text-left text-xs transition-colors duration-200 sm:px-3 sm:py-2 sm:text-sm {currentSlug ===
														child.slug
															? 'border-l-2 border-teal-500 bg-teal-50 font-medium text-teal-900 dark:border-blue-500 dark:bg-blue-900 dark:text-blue-100'
															: 'text-gray-600 hover:bg-teal-50 hover:text-teal-700 dark:text-gray-300 dark:hover:bg-gray-700'}"
													>
														{child.title}
													</a>
												{/each}
											</div>
										{/if}
									{/each}
								</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</aside>

		<!-- Contenido principal -->
		<main class="relative z-10 min-w-0 flex-1">
			<article
				class="overflow-hidden rounded-xl border border-gray-900 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<!-- Header del módulo -->
				<header
					class="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-500 p-3 text-white sm:p-6 md:p-8 dark:from-blue-600 dark:to-purple-700"
				>
					<h1 class="text-lg leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl">
						{data.title}
					</h1>
					<div
						class="mt-2 flex flex-wrap items-center gap-1 text-xs opacity-90 sm:gap-2 sm:text-sm"
					>
						<span class="rounded-full bg-white/20 px-2 py-1">Manual de Usuario</span>
						<span class="rounded-full bg-white/20 px-2 py-1">ID: {data.slug}</span>
						<!-- Botón para compartir -->
						<button
							onclick={() => copyLinkToSection('')}
							class="rounded-full bg-white/20 px-2 py-1 transition-colors hover:bg-white/30"
							title="Compartir esta página"
						>
							🔗 Compartir
						</button>
					</div>
				</header>

				<!-- Contenido del módulo -->
				<div class="p-2 sm:p-3 md:p-6">
					<div
						class="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-purple-600 dark:prose-code:text-purple-400 prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 markdown-paxapos max-w-none"
						onclick={(e) => {
							const target = e.target as HTMLElement;
							const btn = target.closest('[data-copy-section]');
							if (btn) {
								const sectionId = btn.getAttribute('data-copy-section') || '';
								copyLinkToSection(sectionId);
							}
						}}
					>
						{@html processedContent}
					</div>
				</div>

				<!-- Navegación inferior -->
				<div class="border-t border-gray-200 p-3 pt-0 sm:p-4 md:p-6 dark:border-gray-700">
					<div class="flex items-center justify-between">
						<a
							href="{base}/user-guide"
							class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-teal-600 dark:text-gray-400 dark:hover:text-white"
						>
							<svg
								class="mr-2 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 19l-7-7m0 0l7-7m-7 7h18"
								></path>
							</svg>
							Volver al índice
						</a>

						<button
							onclick={openLLMPage}
							class="inline-flex items-center rounded-md border border-gray-900 bg-teal-50 px-2 py-1 text-[10px] font-medium text-teal-700 transition-colors hover:border-teal-600 hover:bg-teal-100 sm:px-3 sm:py-1.5 sm:text-xs dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30"
						>
							<svg
								class="mr-1 h-2.5 w-2.5 sm:mr-1.5 sm:h-3 sm:w-3"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
							Ver archivo LLMs
						</button>
					</div>
				</div>
			</article>
		</main>
	</div>
</div>
