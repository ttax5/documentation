<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
	{@render children()}
</div>
