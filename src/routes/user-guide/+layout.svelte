<script lang="ts">
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';

	let { children, data } = $props<{
		children: Snippet;
		data: any;
	}>();

	let currentSlug = $derived($page.params.slug || '');
</script>

<div class="doc-layout">
	<!-- Left Sidebar (desktop) -->
	{#if data.moduleCategories?.length}
		<Sidebar categories={data.moduleCategories} {currentSlug} />
	{/if}

	<!-- Right side: mobile dropdown + content -->
	<div class="doc-main" style="flex-direction: column; display: flex; flex: 1; min-width: 0;">
		<!-- Mobile / Tablet dropdown -->
		{#if data.moduleCategories?.length}
			<div
				class="lg:hidden"
				style="position: sticky; top: var(--nav-height); z-index: 50; background: var(--color-bg-subtle); border-bottom: 1px solid var(--color-border); padding: 0.625rem 1rem;"
			>
				<select
					style="width:100%; padding: 0.5rem 0.75rem; font-size: 0.875rem; color: var(--color-text); background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; outline: none; font-family: var(--font-sans);"
					value={currentSlug || ''}
					onchange={(e) => {
						const t = e.target as HTMLSelectElement;
						if (t.value) goto(`${base}/user-guide/${t.value}`);
					}}
				>
					<option value="" disabled>Ir a un módulo...</option>
					{#each data.moduleCategories as cat}
						<optgroup label={cat.title}>
							{#each cat.modules as mod}
								<option value={mod.slug}>{mod.title}</option>
							{/each}
						</optgroup>
					{/each}
				</select>
			</div>
		{/if}

		<!-- Content area -->
		<div style="flex: 1; display: flex; justify-content: center;">
			<div class="doc-content">
				{@render children()}
			</div>
		</div>
	</div>
</div>
