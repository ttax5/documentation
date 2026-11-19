<script lang="ts">
	import { onMount } from 'svelte';
	import { getStaticSeoFile, STATIC_SEO_FILES } from '$lib/helpers/seo';

	let message = $state('');

	onMount(() => {
		const type = new URLSearchParams(window.location.search).get('type');
		const target = getStaticSeoFile(type);

		if (target) {
			message = `Redirigiendo a ${target}…`;
			window.location.replace(target);
		} else if (type) {
			message = `Tipo desconocido: ${type}`;
		}
	});
</script>

<svelte:head>
	<title>Recursos SEO · PaxaPOS Documentation</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="px-4 py-8 sm:px-0">
	<h1 class="text-2xl font-bold">Recursos SEO</h1>
	<p class="mt-2 text-gray-600 dark:text-gray-300">
		Los recursos se generan como archivos estáticos durante el build. Los alias
		<code>/seo?type=…</code> redirigen a esos archivos, sin necesidad de servidor.
	</p>

	{#if message}
		<p class="mt-4 font-medium" role="status">{message}</p>
	{/if}

	<ul class="mt-6 space-y-2">
		{#each Object.entries(STATIC_SEO_FILES) as [type, file] (type)}
			<li>
				<code>/seo?type={type}</code>
				<span class="mx-2 text-gray-400">→</span>
				<code>{file}</code>
			</li>
		{/each}
	</ul>
</section>
