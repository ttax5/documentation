<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="flex min-h-screen bg-gray-100 dark:bg-gray-900">
	<div class="flex-1 lg:ml-0">
		<main class="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900">
			<div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
				{@render children()}
			</div>
		</main>
	</div>
</div>
