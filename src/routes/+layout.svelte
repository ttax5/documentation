<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import ChatBotSimple from '$lib/components/ChatBotSimple.svelte';
	import { autoReplaceBrand } from '$lib/helpers/textReplacer';

	let { children } = $props();
</script>

<div
	class="min-h-screen bg-white text-gray-900 transition-colors duration-200 dark:bg-gray-900 dark:text-white"
	use:autoReplaceBrand
>
	<!-- Navigation -->
	<Navigation />

	<!-- Main content -->
	<main class="w-full max-w-full overflow-x-hidden bg-white dark:bg-gray-900">
		<div class="mx-auto w-full max-w-7xl px-0 sm:px-4 lg:px-8">
			{@render children()}
		</div>
	</main>

	<!-- ChatBot simple y optimizado -->
	<ChatBotSimple />
</div>

<style>
	/* Estilos básicos sin dependencias externas problemáticas */
	:global(.markdown-content) {
		line-height: 1.6;
		color: rgb(55 65 81); /* gray-700 */
	}

	/* Modo oscuro */
	:global(.dark .markdown-content) {
		color: rgb(209 213 219); /* gray-300 */
	}

	/* Eliminar márgenes laterales en móvil */
	@media (max-width: 640px) {
		main {
			padding-left: 0 !important;
			padding-right: 0 !important;
			margin-left: 0 !important;
			margin-right: 0 !important;
		}

		main > div {
			padding-left: 0 !important;
			padding-right: 0 !important;
			margin-left: 0 !important;
			margin-right: 0 !important;
			max-width: 100% !important;
			width: 100% !important;
		}
	}
</style>
