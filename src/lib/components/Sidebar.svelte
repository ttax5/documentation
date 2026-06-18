<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';

	let {
		categories,
		currentSlug
	} = $props<{
		categories: Array<{
			title: string;
			modules: Array<{ slug: string; title: string }>;
		}>;
		currentSlug: string;
	}>();

	// Category icons map (same as +page.js)
	const categoryIcons: Record<string, string> = {
		'Primeros Pasos': '🚀',
		'Configuración': '⚙️',
		'Operaciones': '🍽️',
		'Biblioteca de Drivers': '🖨️',
		'Extra': '🔧',
		'Otros': '📄',
	};
</script>

<!-- ── Desktop Sidebar ──────────────────────────────────────── -->
<aside class="doc-sidebar hidden lg:block">
	{#each categories as category}
		<div class="doc-sidebar-section">
			<div class="doc-sidebar-category">
				{categoryIcons[category.title] || '📄'}
				{category.title}
			</div>
			{#each category.modules as module}
				<a
					href="{base}/user-guide/{module.slug}"
					class="doc-sidebar-link {currentSlug === module.slug ? 'active' : ''}"
				>
					{module.title}
				</a>
			{/each}
		</div>
	{/each}
</aside>

<!-- ── Mobile Dropdown ──────────────────────────────────────── -->
<div class="doc-mobile-nav lg:hidden">
	<select
		class="doc-mobile-select"
		value={currentSlug}
		onchange={(e) => {
			const t = e.target as HTMLSelectElement;
			if (t.value) goto(`${base}/user-guide/${t.value}`);
		}}
	>
		<option value="" disabled>Ir a un módulo...</option>
		{#each categories as category}
			<optgroup label={category.title}>
				{#each category.modules as module}
					<option value={module.slug}>{module.title}</option>
				{/each}
			</optgroup>
		{/each}
	</select>
</div>
