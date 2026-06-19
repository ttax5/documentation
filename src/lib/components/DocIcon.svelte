<script lang="ts">
	let { name, class: className = '', size = 20 } = $props<{
		name: string;
		class?: string;
		size?: number;
	}>();

	// Normalize name to handle title case, spaces or accents
	const cleanName = $derived(
		name
			.toLowerCase()
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.trim()
			.replace(/\s+/g, '-')
	);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="2"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="doc-icon {className}"
>
	{#if cleanName === 'primeros-pasos'}
		<!-- Compass -->
		<circle cx="12" cy="12" r="10" />
		<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
	{:else if cleanName === 'introduccion'}
		<!-- Map / Info -->
		<circle cx="12" cy="12" r="10" />
		<line x1="12" y1="16" x2="12" y2="12" />
		<line x1="12" y1="8" x2="12.01" y2="8" />
	{:else if cleanName === 'configuracion' || cleanName === 'configuracion-de-impresoras'}
		<!-- Settings / Gear -->
		<circle cx="12" cy="12" r="3" />
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
	{:else if cleanName === 'iniciar-sesion'}
		<!-- LogIn / Shield -->
		<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
		<polyline points="10 17 15 12 10 7" />
		<line x1="15" y1="12" x2="3" y2="12" />
	{:else if cleanName === 'crear-usuarios' || cleanName === 'agregar-personal'}
		<!-- Users -->
		<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
		<path d="M16 3.13a4 4 0 0 1 0 7.75" />
	{:else if cleanName === 'tipos-de-pago'}
		<!-- CreditCard -->
		<rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
		<line x1="1" y1="10" x2="23" y2="10" />
	{:else if cleanName === 'menu'}
		<!-- BookOpen / Menu List -->
		<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
		<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
	{:else if cleanName === 'salon'}
		<!-- Grid / Layout -->
		<rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
		<line x1="9" y1="3" x2="9" y2="21" />
		<line x1="15" y1="3" x2="15" y2="21" />
		<line x1="3" y1="9" x2="21" y2="9" />
		<line x1="3" y1="15" x2="21" y2="15" />
	{:else if cleanName === 'kitchen-display-system-kds'}
		<!-- Monitor / KDS -->
		<rect x="2" y="3" width="20" height="14" rx="2" />
		<line x1="8" y1="21" x2="16" y2="21" />
		<line x1="12" y1="17" x2="12" y2="21" />
	{:else if cleanName === 'contabilidad' || cleanName === 'arqueos'}
		<!-- DollarSign / Financials -->
		<line x1="12" y1="1" x2="12" y2="23" />
		<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
	{:else if cleanName === 'compras-y-stock'}
		<!-- Package / Stock -->
		<line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
		<polygon points="12 22.08 12 12 3 6.92 3 17.08 12 22.08" />
		<polygon points="12 22.08 21 17.08 21 6.92 12 12 12 22.08" />
		<polygon points="12 12 21 6.92 12 1.84 3 6.92 12 12" />
	{:else if cleanName === 'arca-y-facturacion'}
		<!-- FileText / Tax -->
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
		<polyline points="14 2 14 8 20 8" />
		<line x1="16" y1="13" x2="8" y2="13" />
		<line x1="16" y1="17" x2="8" y2="17" />
		<polyline points="10 9 9 9 8 9" />
	{:else if cleanName === 'estadisticas' || cleanName === 'business-intelligence'}
		<!-- BarChart2 -->
		<line x1="18" y1="20" x2="18" y2="10" />
		<line x1="12" y1="20" x2="12" y2="4" />
		<line x1="6" y1="20" x2="6" y2="14" />
	{:else if cleanName === 'buchon-bot'}
		<!-- Bot / Robot -->
		<rect x="3" y="11" width="18" height="10" rx="2" />
		<circle cx="12" cy="5" r="2" />
		<path d="M12 7v4" />
		<line x1="8" y1="16" x2="8" y2="16" />
		<line x1="16" y1="16" x2="16" y2="16" />
	{:else if cleanName === 'biblioteca-de-drivers' || cleanName === 'sam4s-giant-100' || cleanName === 'citizen-ct-s310ii' || cleanName === 'epson-tm-t20' || cleanName === 'epson-tm-t88' || cleanName === 'drivers-genericos'}
		<!-- Printer -->
		<polyline points="6 9 6 2 18 2 18 9" />
		<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
		<rect x="6" y="14" width="12" height="8" />
	{:else if cleanName === 'preguntas-frecuentes'}
		<!-- HelpCircle -->
		<circle cx="12" cy="12" r="10" />
		<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
		<line x1="12" y1="17" x2="12.01" y2="17" />
	{:else if cleanName === 'operaciones'}
		<!-- Activity / Terminal / Play -->
		<rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
		<rect x="9" y="9" width="6" height="6" />
	{:else if cleanName === 'extra'}
		<!-- Wrench / Tool -->
		<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
	{:else if cleanName === 'otros'}
		<!-- Folder -->
		<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
	{:else}
		<!-- Default File -->
		<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
		<polyline points="14 2 14 8 20 8" />
	{/if}
</svg>
