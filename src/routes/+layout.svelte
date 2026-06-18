<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import ChatBotSimple from '$lib/components/ChatBotSimple.svelte';
	import { autoReplaceBrand } from '$lib/helpers/textReplacer';

	let { children } = $props();
</script>

<div class="min-h-screen" style="background: var(--color-bg); color: var(--color-text)" use:autoReplaceBrand>
	<Navigation />
	<main>
		{@render children()}
	</main>
	<ChatBotSimple />
</div>
