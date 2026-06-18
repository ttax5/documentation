<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { htmlContent } = $props<{ htmlContent: string }>();

	interface TocHeading {
		id: string;
		text: string;
		level: number;
	}

	let headings: TocHeading[] = $state([]);
	let activeId = $state('');
	let readingProgress = $state(0);

	// Parse headings from content
	$effect(() => {
		if (!htmlContent || typeof document === 'undefined') return;

		const tmp = document.createElement('div');
		tmp.innerHTML = htmlContent;
		const nodes = tmp.querySelectorAll('h2, h3, h4');

		headings = Array.from(nodes).map((el) => {
			let id = el.id;
			if (!id && el.textContent) {
				id = el.textContent
					.toLowerCase()
					.normalize('NFD')
					.replace(/[\u0300-\u036f]/g, '')
					.replace(/[^a-z0-9]+/g, '-')
					.replace(/(^-|-$)/g, '');
			}
			return {
				id,
				text: el.textContent?.trim() || '',
				level: parseInt(el.tagName[1])
			};
		});
	});

	let observer: IntersectionObserver | null = null;
	let scrollHandler: (() => void) | null = null;

	// Set up IntersectionObserver after content is rendered in DOM
	$effect(() => {
		if (!headings.length || typeof window === 'undefined') return;

		observer?.disconnect();

		// Wait a tick for DOM to render
		const tid = setTimeout(() => {
			const targets = document.querySelectorAll('article h2[id], article h3[id], article h4[id]');

			if (!targets.length) return;

			observer = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							activeId = entry.target.id;
						}
					}
				},
				{
					rootMargin: `-${60 + 16}px 0px -70% 0px`,
					threshold: 0
				}
			);

			targets.forEach((el) => observer?.observe(el));
		}, 300);

		return () => clearTimeout(tid);
	});

	// Reading progress
	onMount(() => {
		const updateProgress = () => {
			const article = document.querySelector('article');
			if (!article) return;

			const rect = article.getBoundingClientRect();
			const totalHeight = article.offsetHeight;
			const scrolled = -rect.top + (window.innerHeight * 0.3);
			readingProgress = Math.min(100, Math.max(0, (scrolled / totalHeight) * 100));

			// Also update the top progress bar
			const bar = document.getElementById('reading-progress');
			if (bar) bar.style.width = `${readingProgress}%`;
		};

		scrollHandler = updateProgress;
		window.addEventListener('scroll', updateProgress, { passive: true });
		updateProgress();

		return () => {
			if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
			observer?.disconnect();
		};
	});

	function scrollTo(e: MouseEvent, id: string) {
		e.preventDefault();
		const el = document.getElementById(id);
		if (!el) return;
		const y = el.getBoundingClientRect().top + window.scrollY - 76;
		window.scrollTo({ top: y, behavior: 'smooth' });
		activeId = id;
		history.pushState(null, '', `#${id}`);
	}
</script>

{#if headings.length > 0}
	<aside class="doc-toc hidden xl:block">
		<div class="doc-toc-title">En esta página</div>

		<!-- Reading progress bar -->
		<div class="doc-toc-progress">
			<div class="doc-toc-progress-bar" style="width: {readingProgress}%"></div>
		</div>

		<ul class="doc-toc-list">
			{#each headings as heading}
				<li
					class="doc-toc-item level-{heading.level} {activeId === heading.id ? 'active' : ''}"
				>
					<a
						href="#{heading.id}"
						onclick={(e) => scrollTo(e, heading.id)}
					>
						{heading.text}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}
