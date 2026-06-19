<script lang="ts">
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import DocIcon from '$lib/components/DocIcon.svelte';

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
</script>

<!-- ── Desktop Sidebar ──────────────────────────────────────── -->
<aside class="doc-sidebar hidden lg:block">
	{#each categories as category}
		<div class="doc-sidebar-section">
			<div class="doc-sidebar-category">
				<DocIcon name={category.title} size={15} class="sidebar-category-icon" />
				<span>{category.title}</span>
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
