<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import SEOHead from '$lib/components/SEOHead.svelte';
	import Icon from '@iconify/svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	interface ModuleInfo {
		slug: string;
		title: string;
		description: string;
		category: string;
		icon: string;
		id: string;
	}

	const modulesList: ModuleInfo[] = data.modulesList || [];
	const categoryIconsMap: Record<string, string> = (data.categoryIcons as Record<string, string>) || {};

	// Agrupar módulos por categoría
	const groupedModules = $derived(
		modulesList.reduce(
			(acc, module) => {
				if (!acc[module.category]) {
					acc[module.category] = [];
				}
				acc[module.category].push(module);
				return acc;
			},
			{} as Record<string, ModuleInfo[]>,
		),
	);

	function navigateToModule(slug: string) {
		goto(`${base}/user-guide/${slug}`);
	}
</script>

<SEOHead
	title="Manual de Usuario"
	description="Manual completo para usuarios finales. Aprende paso a paso cómo usar todas las funciones del sistema."
	keywords="manual usuario, guía completa, tutorial sistema restaurante"
	url="/user-guide"
	type="article"
	section="Manual de Usuario"
/>

<div
	class="mx-auto min-h-screen max-w-7xl overflow-x-hidden bg-gray-100 px-3 py-4 sm:px-4 md:px-6 lg:px-8 dark:bg-gray-900"
>
	<div class="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:flex-row">
		<main class="w-full min-w-0 flex-1">
			<div
				class="overflow-x-hidden rounded-xl border border-gray-900 bg-white p-4 shadow-sm sm:p-5 md:p-6 lg:p-8 dark:border-gray-700 dark:bg-gray-800"
			>
				<div class="max-w-none">
					<!-- Header -->
					<div class="mb-8 text-center">
						<h1
							class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white"
						>
							Manual de Usuario
						</h1>
						<p
							class="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-400"
						>
							Aprende paso a paso cómo usar todas las funciones. Desde la
							configuración inicial hasta la gestión avanzada de tu restaurante.
						</p>
					</div>

					<!-- Módulos organizados por categorías -->
					<div class="space-y-8">
						{#each Object.entries(groupedModules) as [categoryName, categoryModules]}
							<section>
								<h2
									class="mb-6 flex items-center gap-2.5 border-b border-gray-200 pb-3 text-xl font-semibold text-gray-900 sm:text-2xl dark:border-gray-700 dark:text-white"
								>
									{#if categoryIconsMap[categoryName]}
										<Icon
											icon={categoryIconsMap[categoryName]}
											class="h-6 w-6 text-teal-600 sm:h-7 sm:w-7 dark:text-blue-400"
										/>
									{/if}
									<span>{categoryName}</span>
								</h2>

								<div
									class="grid grid-cols-1 gap-3 overflow-x-hidden sm:grid-cols-2 sm:gap-4 xl:grid-cols-3"
								>
									{#each categoryModules as module}
										<button
											onclick={() => navigateToModule(module.slug)}
											class="group flex min-h-[120px] w-full flex-col overflow-hidden rounded-xl border border-gray-900 bg-white p-4 text-left transition-colors duration-200 hover:border-teal-500 sm:p-6 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-500"
										>
											<div class="mb-3 flex items-start">
												<div
													class="mr-3 flex flex-shrink-0 items-center justify-center text-xl transition-transform duration-200 group-hover:scale-110 sm:text-2xl"
												>
													{#if module.icon?.includes(':')}
														<Icon
															icon={module.icon}
															class="h-6 w-6 text-teal-600 sm:h-7 sm:w-7 dark:text-blue-400"
														/>
													{:else}
														{module.icon}
													{/if}
												</div>
												<div class="min-w-0 flex-1 overflow-hidden">
													<h3
														class="mb-2 truncate text-sm leading-tight font-semibold text-gray-900 group-hover:text-teal-600 sm:text-base dark:text-white dark:group-hover:text-blue-400"
													>
														{module.title}
													</h3>
												</div>
											</div>

											<p
												class="mb-3 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400"
											>
												{module.description}
											</p>

											<div class="mt-auto">
												<div
													class="inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-700 dark:text-blue-400 dark:group-hover:text-blue-300"
												>
													Ver módulo
													<svg
														class="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M9 5l7 7-7 7"
														></path>
													</svg>
												</div>
											</div>
										</button>
									{/each}
								</div>
							</section>
						{/each}
					</div>

					<!-- Footer informativo -->
					<div class="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
						<div class="rounded-xl border border-gray-900 bg-teal-50/70 p-6 dark:border-gray-700 dark:bg-blue-900/20">
							<div class="flex flex-col items-start sm:flex-row">
								<div class="mb-3 flex-shrink-0 text-2xl sm:mr-4 sm:mb-0">
									💡
								</div>
								<div class="flex-1">
									<h3
										class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
									>
										¿Necesitas ayuda adicional?
									</h3>
									<p
										class="mb-4 leading-relaxed text-gray-600 dark:text-gray-400"
									>
										Si tienes dudas sobre algún módulo o necesitas soporte
										técnico, nuestro equipo está aquí para ayudarte.
									</p>
									<div
										class="grid grid-cols-1 gap-2 overflow-x-hidden text-xs sm:gap-3 sm:text-sm"
									>
										<div
											class="flex items-center overflow-hidden text-gray-600 dark:text-gray-400"
										>
											<svg
												class="mr-2 h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.951-1.488A11.956 11.956 0 002 18c.404-.441.802-.872 1.17-1.293C3.708 16.04 4 15.543 4 15c0-2.667 1.333-4 4-4s4 1.333 4 4"
												></path>
											</svg>
											<span class="truncate">Chat: Disponible 24/7</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
