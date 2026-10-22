import { browser } from '$app/environment';

const STORAGE_KEY = 'paxapos-theme';
let isDarkState = false;

export function getIsDarkMode(): boolean {
	return isDarkState;
}

// Función para aplicar el tema al DOM y persistir en localStorage
export function applyThemeToDOM(dark: boolean, persist = false) {
	if (!browser) return;
	isDarkState = dark;

	const html = document.documentElement;

	if (dark) {
		html.classList.add('dark');
		html.style.colorScheme = 'dark';
	} else {
		html.classList.remove('dark');
		html.style.colorScheme = 'light';
	}

	if (persist) {
		localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
	}
}

// Alternar entre modo oscuro y claro (persiste la elección)
export function toggleTheme() {
	applyThemeToDOM(!isDarkState, true);
}

// Función para inicializar el tema
export function initThemeStore() {
	if (!browser) return;

	// Preferencia guardada por el usuario tiene prioridad
	const saved = localStorage.getItem(STORAGE_KEY);
	if (saved === 'dark' || saved === 'light') {
		applyThemeToDOM(saved === 'dark');
		return;
	}

	// Si no hay preferencia guardada, usar la del sistema
	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	applyThemeToDOM(mediaQuery.matches);

	function handleChange(e: MediaQueryListEvent) {
		// Solo escuchar cambios del sistema si el usuario no eligió manualmente
		if (!localStorage.getItem(STORAGE_KEY)) {
			applyThemeToDOM(e.matches);
		}
	}

	if (mediaQuery.addEventListener) {
		mediaQuery.addEventListener('change', handleChange);
		return () => mediaQuery.removeEventListener('change', handleChange);
	} else if (mediaQuery.addListener) {
		mediaQuery.addListener(handleChange);
		return () => mediaQuery.removeListener(handleChange);
	}
}
