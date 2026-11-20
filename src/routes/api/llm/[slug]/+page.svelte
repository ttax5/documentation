<script lang="ts">
	import { onMount } from 'svelte';

	let { data } = $props();

	onMount(() => {
		window.location.replace(data.href);
	});
</script>

<svelte:head>
	<title>Redirigiendo…</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<p class="px-4 py-8 sm:px-0">
	Redirigiendo a <a class="text-blue-600 underline dark:text-blue-400" href={data.href}>
		{data.href}
	</a>…
</p>
