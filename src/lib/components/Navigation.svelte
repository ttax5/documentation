<script lang="ts">
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import {
		searchContent,
		type SearchableItem,
		getSlugFromModuleId,
	} from '$lib/helpers/constants';

	// ── State ─────────────────────────────────────────────────
	let searchQuery = $state('');
	let showSearchResults = $state(false);
	let searchResults: SearchableItem[] = $state([]);
	let isSearching = $state(false);
	let showMobileSearch = $state(false);
	let darkMode = $state(false);

	let searchInputDesktop: HTMLInputElement;
	let searchInputMobile: HTMLInputElement;

	// ── Init theme ────────────────────────────────────────────
	import { onMount } from 'svelte';
	onMount(() => {
		darkMode = document.documentElement.classList.contains('dark');
	});

	// ── Dark mode toggle ──────────────────────────────────────
	function toggleDark() {
		darkMode = !darkMode;
		if (darkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.style.colorScheme = 'dark';
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.style.colorScheme = 'light';
			localStorage.setItem('theme', 'light');
		}
	}

	// ── Search ────────────────────────────────────────────────
	const handleSearch = async (event: Event) => {
		const target = event.target as HTMLInputElement;
		searchQuery = target.value;

		if (searchQuery.length < 2) {
			showSearchResults = false;
			searchResults = [];
			return;
		}

		isSearching = true;
		showSearchResults = true;
		try {
			searchResults = await searchContent(searchQuery, 8);
		} catch {
			searchResults = [];
		} finally {
			isSearching = false;
		}
	};

	const selectSearchResult = (item: SearchableItem) => {
		const currentQuery = searchQuery;
		searchQuery = '';
		showSearchResults = false;
		searchResults = [];
		showMobileSearch = false;

		const slug = item.id ? getSlugFromModuleId(item.id) : null;
		const url =
			item.id && item.href === '/user-guide'
				? `${base}/user-guide/${slug}?highlight=${encodeURIComponent(currentQuery)}`
				: `${base}${item.href}?highlight=${encodeURIComponent(currentQuery)}`;
		goto(url);
	};

	const handleBlur = () =>
		setTimeout(() => {
			showSearchResults = false;
			if (!searchQuery.trim()) showMobileSearch = false;
		}, 200);

	const toggleMobileSearch = () => {
		showMobileSearch = !showMobileSearch;
		if (showMobileSearch) {
			setTimeout(() => searchInputMobile?.focus(), 100);
		}
	};
</script>

<!-- Reading progress bar injected by page -->
<div id="reading-progress"></div>

<!-- ── Top Navigation ──────────────────────────────────────── -->
<nav class="doc-nav">
	<div class="doc-nav-inner">
		<!-- Logo -->
		<a href="{base}/user-guide" class="doc-nav-logo">
			<img src="{base}/paxapos-logo.png" alt="PaxaPOS Logo" style="height: 28px; object-fit: contain;" />
			<span>PaxaPOS</span>
			<span class="doc-nav-divider"></span>
			<span class="doc-nav-badge">Docs</span>
		</a>

		<!-- Desktop Search -->
		<div class="doc-search-wrap hidden md:block">
			<div class="relative">
				<svg class="doc-search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input
					bind:this={searchInputDesktop}
					type="search"
					placeholder="Buscar en el manual..."
					class="doc-search-input"
					bind:value={searchQuery}
					oninput={handleSearch}
					onfocus={() => { if (searchQuery.length >= 2) showSearchResults = true; }}
					onblur={handleBlur}
				/>
				{#if showSearchResults}
					<div class="doc-search-results">
						{#if isSearching}
							<div class="px-4 py-3 text-sm" style="color: var(--color-text-muted)">Buscando...</div>
						{:else if searchResults.length > 0}
							{#each searchResults as result}
								<button type="button" class="doc-search-result-item" onclick={() => selectSearchResult(result)}>
									<div class="doc-search-result-title">{result.title}</div>
									<div class="doc-search-result-type">{result.type}</div>
									{#if result.preview}
										<div class="doc-search-result-preview">{result.preview}</div>
									{/if}
								</button>
							{/each}
						{:else}
							<div class="px-4 py-3 text-sm" style="color: var(--color-text-muted)">Sin resultados para "{searchQuery}"</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>

		<!-- Actions -->
		<div class="doc-nav-actions">
			<!-- Mobile search toggle -->
			<button type="button" class="doc-btn-icon md:hidden" onclick={toggleMobileSearch} aria-label="Buscar">
				<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
			</button>

			<!-- Dark mode toggle -->
			<button type="button" class="doc-btn-icon" onclick={toggleDark} aria-label="Cambiar tema">
				{#if darkMode}
					<!-- Sun icon -->
					<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
					</svg>
				{:else}
					<!-- Moon icon -->
					<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile search panel -->
	{#if showMobileSearch}
		<div class="doc-mobile-search-panel md:hidden">
			<div class="relative">
				<svg class="doc-search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
				</svg>
				<input
					bind:this={searchInputMobile}
					type="search"
					placeholder="Buscar en el manual..."
					class="doc-search-input"
					style="font-size: 16px"
					bind:value={searchQuery}
					oninput={handleSearch}
					onblur={handleBlur}
				/>
			</div>
			{#if showSearchResults && searchQuery.length >= 2}
				<div class="doc-search-results mt-2">
					{#if isSearching}
						<div class="px-4 py-3 text-sm" style="color: var(--color-text-muted)">Buscando...</div>
					{:else if searchResults.length > 0}
						{#each searchResults as result}
							<button type="button" class="doc-search-result-item" onclick={() => selectSearchResult(result)}>
								<div class="doc-search-result-title">{result.title}</div>
								<div class="doc-search-result-type">{result.type}</div>
								{#if result.preview}
									<div class="doc-search-result-preview">{result.preview}</div>
								{/if}
							</button>
						{/each}
					{:else}
						<div class="px-4 py-3 text-sm" style="color: var(--color-text-muted)">Sin resultados</div>
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</nav>
