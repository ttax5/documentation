<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import DocIcon from '$lib/components/DocIcon.svelte';

	let { data } = $props<{ data: any }>();
</script>

<SEOHead
	title="Manual de Usuario"
	description="Aprende paso a paso cómo usar todas las funciones del sistema. Desde la configuración inicial hasta la gestión avanzada."
	keywords="manual usuario, guía, tutorial, paxapos"
	section="Manual de Usuario"
/>

<!-- ── Index page ──────────────────────────────────────────── -->
<div>
	<!-- Hero header -->
	<div class="doc-index-header">
		<h1 class="doc-index-title">Documentación</h1>
		<p class="doc-index-subtitle">
			Bienvenido al manual interactivo de PaxaPOS. Elige una categoría del menú o
			explora los módulos disponibles para comenzar.
		</p>
	</div>

	<!-- Modules by category -->
	{#if data.moduleCategories}
		{#each data.moduleCategories as category}
			<section class="doc-index-section">
				<h2 class="doc-index-section-title">
					<DocIcon name={category.title} size={16} class="doc-cat-icon" />
					<span>{category.title}</span>
				</h2>

				<div class="doc-module-grid">
					{#each category.modules as module}
						<button
							class="doc-module-card"
							onclick={() => goto(`${base}/user-guide/${module.slug}`)}
						>
							<span class="doc-module-card-icon">
								<DocIcon name={module.slug} size={20} />
							</span>
							<div class="doc-module-card-text">
								<div class="doc-module-card-title">{module.title}</div>
							</div>
							<span class="doc-module-card-arrow">→</span>
						</button>
					{/each}
				</div>
			</section>
		{/each}
	{/if}

	<!-- Help callout -->
	<div
		class="doc-callout doc-callout-note"
		style="margin-top: 3rem; align-items: flex-start;"
	>
		<span style="font-size: 1.25rem; flex-shrink:0;">💡</span>
		<div>
			<strong>¿No encuentras lo que buscas?</strong>
			<p style="margin: 0.25rem 0 0;">
				Usa la barra de búsqueda superior o el chat de soporte disponible 24/7 en la esquina inferior derecha.
			</p>
		</div>
	</div>
</div>
