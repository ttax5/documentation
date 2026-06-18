<script lang="ts">
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	let { data } = $props<{ data: any }>();

	// Category icons
	const catIcons: Record<string, string> = {
		'Primeros Pasos': '🚀',
		'Configuración': '⚙️',
		'Operaciones': '🍽️',
		'Biblioteca de Drivers': '🖨️',
		'Extra': '🔧',
		'Otros': '📄',
	};

	// Module icons (from +layout.server.js mapping)
	const modIcons: Record<string, string> = {
		introduccion: '🚀',
		'iniciar-sesion': '🔐',
		'crear-usuarios': '👥',
		'tipos-de-pago': '💳',
		'agregar-personal': '👨‍💼',
		'configuracion-de-impresoras': '🖨️',
		menu: '🍽️',
		salon: '🏪',
		'kitchen-display-system-kds': '👨‍🍳',
		contabilidad: '📊',
		arqueos: '💰',
		'compras-y-stock': '📦',
		'arca-y-facturacion': '🏛️',
		estadisticas: '📈',
		'business-intelligence': '🧠',
		'buchon-bot': '🤖',
		'biblioteca-de-drivers': '🖨️',
		'sam4s-giant-100': '🖨️',
		'citizen-ct-s310ii': '🖨️',
		'epson-tm-t20': '🖨️',
		'epson-tm-t88': '🖨️',
		'drivers-genericos': '🖨️',
		'preguntas-frecuentes': '❓',
	};
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
					{catIcons[category.title] || '📄'}
					{category.title}
				</h2>

				<div class="doc-module-grid">
					{#each category.modules as module}
						<button
							class="doc-module-card"
							onclick={() => goto(`${base}/user-guide/${module.slug}`)}
						>
							<span class="doc-module-card-icon">
								{modIcons[module.slug] || catIcons[category.title] || '📄'}
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
