<script lang="ts">
	import { fileNameToSlug } from '$lib/utils/contentUtils';
	import { base } from '$app/paths';

	let isOpen = $state(false);
	let messages: Array<{ text: string; isUser: boolean; timestamp: Date }> = $state([]);
	let currentMessage = $state('');
	let chatContainer: HTMLElement;
	let manualContent: Array<{ id: string; title: string; folder: string; rawText: string }> = $state([]);
	let isLoading = $state(false);
	let initialized = $state(false);

	// Función para convertir IDs a slugs para URLs reales
	function getSlugFromId(id: string): string {
		return fileNameToSlug(id);
	}

	// FAQ optimizado como fallback
	const faqResponses = {
		mozo: `**Gestión de Personal - Mozos** 👨‍💼

Para crear y gestionar mozos:

**Pasos básicos:**
• Ir al módulo "Agregar Personal"
• Completar datos del empleado
• Asignar rol "Mozo"
• Configurar permisos y horarios

🔗 **[Ver Guía Completa: Agregar Personal](${base}/user-guide/agregar-personal)**`,

		impresora: `**Configuración de Impresoras** 🖨️

Configura impresoras para tickets y comandas:

**Tipos soportados:**
• Impresoras de tickets (clientes)
• Impresoras de cocina (comandas)
• Impresoras fiscales

**Pasos:**
• Conectar impresora (USB/Red)
• Configurar en el software
• Probar impresión

🔗 **[Ver Guía Completa: Configuración de Impresoras](${base}/user-guide/configuracion-impresoras)**`,

		salon: `**Gestión del Salón** 🏪

Administra mesas y clientes eficientemente:

**Funciones principales:**
• Administración de mesas
• Asignación de mozos
• Control de pedidos
• Estados de ocupación

🔗 **[Ver Guía Completa: Salón](${base}/user-guide/salon)**`,

		cocina: `**Kitchen Display System (KDS)** 👨‍🍳

Sistema digital para optimizar la cocina:

**Beneficios:**
• Elimina papeles en cocina
• Organización por tiempos
• Control visual completo
• Comunicación directa con salón

🔗 **[Ver Guía Completa: KDS](${base}/user-guide/kds)**`,

		pago: `**Sistema de Pagos** 💳

Gestiona múltiples formas de pago:

**Métodos disponibles:**
• Efectivo
• Tarjetas de débito/crédito
• Transferencias
• Billeteras digitales

🔗 **[Ver Guía Completa: Tipos de Pago](${base}/user-guide/tipos-de-pago)**`,

		menu: `**Gestión de Menú** 📋

Administra tu carta y productos:

**Funciones:**
• Crear categorías y productos
• Configurar precios
• Gestionar disponibilidad
• Combos y promociones

🔗 **[Ver Guía Completa: Menú](${base}/user-guide/menu)**`,

		arqueo: `**Arqueos de Caja** 💰

Controla el dinero diariamente:

**Proceso:**
• Contar efectivo físico
• Comparar con sistema
• Registrar diferencias
• Cerrar turno

🔗 **[Ver Guía Completa: Arqueos](${base}/user-guide/arqueos)**`,

		facturacion: `**Facturación y AFIP** 📄

Cumple normativas fiscales:

**Comprobantes:**
• Tickets fiscales
• Facturas A, B, C
• Integración con AFIP
• Reportes automáticos

🔗 **[Ver Guía Completa: AFIP y Facturación](${base}/user-guide/arca-facturacion)**`,

		usuario: `**Gestión de Usuarios** 👥

Administra accesos al sistema:

**Tipos de usuario:**
• Administrador • Encargado
• Mozo • Cocina

**Configuración:**
• Crear usuarios
• Asignar permisos
• Gestionar accesos

🔗 **[Ver Guía Completa: Crear Usuarios](${base}/user-guide/crear-usuarios)**`,
	};

	// Cargar contenido lazy al abrir el chatbot por primera vez
	async function ensureLoaded() {
		if (initialized) return;
		initialized = true;
		await loadManualContent();
		addMessage(
			'¡Hola! 👋 Soy tu asistente del sistema gastronómico.\n\n**Puedo ayudarte con:**\n• Buscar información específica en el manual\n• Configuración de impresoras\n• Gestión de personal y mozos\n• Administración del salón\n• Sistema de cocina (KDS)\n• Facturación y AFIP\n• ¡Y mucho más!\n\n**Pregúntame algo específico:** "¿cómo configurar impresoras?" o "crear mozo"',
			false,
		);
	}

	async function loadManualContent() {
		try {
			const response = await fetch('/search-index.json');
			if (!response.ok) throw new Error(`HTTP ${response.status}`);
			const searchIndex: Array<{ id: string; slug: string; title: string; content: string; type: string }> = await response.json();

			manualContent = searchIndex.map((item) => ({
				id: item.id,
				title: item.title,
				folder: item.type,
				rawText: item.content,
			}));

			console.log(`📚 Manual cargado: ${manualContent.length} módulos`);
		} catch (error) {
			console.error('Error cargando manual:', error);
		}
	}

	function addMessage(text: string, isUser: boolean) {
		messages = [...messages, { text, isUser, timestamp: new Date() }];
		setTimeout(() => {
			if (chatContainer) {
				chatContainer.scrollTop = chatContainer.scrollHeight;
			}
		}, 100);
	}

	function detectKeyword(question: string): string | null {
		const q = question.toLowerCase();

		// Detección simple pero efectiva
		if (q.includes('mozo') || q.includes('personal') || q.includes('empleado')) return 'mozo';
		if (q.includes('impresora') || q.includes('imprimir')) return 'impresora';
		if (q.includes('salón') || q.includes('salon') || q.includes('mesa')) return 'salon';
		if (q.includes('cocina') || q.includes('kds') || q.includes('kitchen')) return 'cocina';
		if (q.includes('pago') || q.includes('cobrar') || q.includes('tarjeta')) return 'pago';
		if (q.includes('menú') || q.includes('menu') || q.includes('producto')) return 'menu';
		if (q.includes('arqueo') || q.includes('caja') || q.includes('cierre')) return 'arqueo';
		if (q.includes('factura') || q.includes('afip') || q.includes('fiscal'))
			return 'facturacion';
		if (q.includes('usuario') && (q.includes('crear') || q.includes('agregar')))
			return 'usuario';

		return null;
	}

	function searchInManual(question: string) {
		if (!manualContent || manualContent.length === 0) {
			return null;
		}

		const searchTerms = question
			.toLowerCase()
			.split(' ')
			.filter((term) => term.length > 2);
		const results = [];

		for (const module of manualContent) {
			let score = 0;
			const textLower = module.rawText.toLowerCase();
			const titleLower = module.title.toLowerCase();

			// Puntuación por términos encontrados
			for (const term of searchTerms) {
				// Bonus si está en el título
				if (titleLower.includes(term)) {
					score += 10;
				}
				// Puntos por apariciones en el contenido
				const matches = (textLower.match(new RegExp(term, 'g')) || []).length;
				score += matches * 2;
			}

			if (score > 0) {
				results.push({
					...module,
					score,
					relevantText: extractRelevantText(module.rawText, searchTerms),
				});
			}
		}

		// Ordenar por relevancia
		results.sort((a, b) => b.score - a.score);
		return results.slice(0, 2); // Top 2 resultados
	}

	function extractRelevantText(text: string, searchTerms: string[]): string {
		const sentences = text.split(/[.!?]\n/);
		const relevantSentences = [];

		for (const sentence of sentences) {
			const sentenceLower = sentence.toLowerCase();
			let termCount = 0;

			for (const term of searchTerms) {
				if (sentenceLower.includes(term)) {
					termCount++;
				}
			}

			if (termCount > 0) {
				relevantSentences.push({ sentence: sentence.trim(), score: termCount });
			}
		}

		// Ordenar por relevancia y tomar las mejores
		relevantSentences.sort((a, b) => b.score - a.score);
		const topSentences = relevantSentences.slice(0, 3).map((s) => s.sentence);

		return (
			topSentences.join('. ').substring(0, 300) +
			(topSentences.join('. ').length > 300 ? '...' : '')
		);
	}

	async function generateResponse(question: string): Promise<string> {
		// 1. Primero intentar búsqueda en tiempo real en el manual
		const manualResults = searchInManual(question);

		if (manualResults && manualResults.length > 0) {
			const bestResult = manualResults[0];
			const moduleSlug = getSlugFromId(bestResult.id);

			let response = `**${bestResult.title}** (${bestResult.folder})\n\n`;
			response += bestResult.relevantText;
			response += `\n\n🔗 **[Ver guía completa: ${bestResult.title}](${base}/user-guide/${moduleSlug})**`;

			// Si hay más resultados, mencionarlos
			if (manualResults.length > 1) {
				response += `\n\n**También podrías revisar:**`;
				manualResults.slice(1).forEach((result) => {
					const slug = getSlugFromId(result.id);
					response += `\n• [${result.title}](${base}/user-guide/${slug})`;
				});
			}

			return response;
		}

		// 2. Si no encuentra en el manual, usar FAQ como fallback
		const keyword = detectKeyword(question);
		if (keyword && keyword in faqResponses) {
			return faqResponses[keyword as keyof typeof faqResponses];
		}

		// 3. Respuesta por defecto con sugerencias
		return `No encontré información específica sobre "${question}".

**Puedo ayudarte con:**
• **"mozo"** - Crear y gestionar personal
• **"impresora"** - Configurar impresión
• **"salón"** - Administrar mesas
• **"cocina"** - Sistema KDS
• **"pago"** - Métodos de pago
• **"menú"** - Gestionar productos
• **"arqueo"** - Control de caja
• **"facturación"** - AFIP y comprobantes

**Intenta ser más específico:** "¿cómo configurar impresoras?" o "crear usuario mozo"

🔗 **[Ver Manual Completo](${base}/user-guide)**`;
	}

	async function sendMessage() {
		if (!currentMessage.trim() || isLoading) return;

		const userMessage = currentMessage.trim();
		currentMessage = '';
		addMessage(userMessage, true);

		isLoading = true;

		try {
			const response = await generateResponse(userMessage);
			addMessage(response, false);
		} catch (error) {
			addMessage(
				'Lo siento, ocurrió un error procesando tu consulta. Por favor intenta de nuevo.',
				false,
			);
		} finally {
			isLoading = false;
		}
	}

	function formatBotMessage(text: string): string {
		return (
			text
				.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
				// Enlaces con emoji y formato bold: 🔗 **[texto](url)** - SIN target="_blank" - RESPONSIVE
				.replace(
					/🔗 \*\*\[([^\]]+)\]\(([^)]+)\)\*\*/g,
					'<a href="$2" class="inline-block mt-2 px-3 py-2 md:px-4 md:py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm">$1</a>',
				)
				// Enlaces simples: [texto](url) - SIN target="_blank"
				.replace(
					/\[([^\]]+)\]\(([^)]+)\)/g,
					'<a href="$2" class="text-blue-600 hover:text-blue-700 underline font-medium text-sm">$1</a>',
				)
				// Bullet points con •
				.replace(/• /g, '<span class="text-blue-600">•</span> ')
		);
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}

	function toggleChat() {
		isOpen = !isOpen;
		if (isOpen) ensureLoaded();
	}
</script>

<!-- Botón flotante -->
{#if !isOpen}
	<button
		onclick={toggleChat}
		class="doc-chatbot-btn group"
		aria-label="Abrir ChatBot de soporte"
	>
		<svg
			class="h-6 w-6 transition-transform group-hover:scale-110"
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
			/>
		</svg>
		<div class="doc-chatbot-status-dot"></div>
	</button>
{/if}

<!-- Ventana del chat -->
{#if isOpen}
	<div class="doc-chatbot-window">
		<!-- Header -->
		<div class="doc-chatbot-header">
			<div style="display:flex; align-items:center; gap:0.75rem;">
				<div class="doc-chatbot-avatar">
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
					</svg>
				</div>
				<div>
					<span style="font-weight:600; font-size:0.95rem;">Asistente Virtual</span>
					<div style="display:flex; align-items:center; gap:0.25rem; font-size:0.75rem; opacity:0.9;">
						<div style="height:6px; width:6px; border-radius:50%; background:#4ade80;"></div>
						<span>En línea</span>
					</div>
				</div>
			</div>
			<button
				onclick={toggleChat}
				class="doc-chatbot-close"
				aria-label="Cerrar ChatBot"
			>
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
				</svg>
			</button>
		</div>

		<!-- Mensajes -->
		<div bind:this={chatContainer} class="doc-chatbot-messages">
			{#each messages as message}
				<div class="doc-chatbot-message-row" style="justify-content: {message.isUser ? 'flex-end' : 'flex-start'}">
					{#if !message.isUser}
						<div class="doc-chatbot-bot-avatar">
							<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
							</svg>
						</div>
						<div class="doc-chatbot-bubble bot">
							<div class="text-sm leading-relaxed">
								{@html formatBotMessage(message.text)}
							</div>
							<p class="doc-chatbot-time bot-time">
								{message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
							</p>
						</div>
					{:else}
						<div class="doc-chatbot-bubble user">
							<p class="text-sm leading-relaxed">{message.text}</p>
							<p class="doc-chatbot-time user-time">
								{message.timestamp.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
							</p>
						</div>
					{/if}
				</div>
			{/each}

			{#if isLoading}
				<div class="doc-chatbot-message-row" style="justify-content: flex-start">
					<div class="doc-chatbot-bot-avatar">
						<svg class="h-3 w-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97C9.02 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
					</div>
					<div class="doc-chatbot-bubble bot">
						<div style="display:flex; align-items:center; gap:0.5rem; font-size:0.875rem;">
							<span style="opacity:0.8;">Buscando</span>
							<div class="doc-chatbot-dots">
								<div></div><div></div><div></div>
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>

		<!-- Input -->
		<div class="doc-chatbot-input-area">
			<textarea
				bind:value={currentMessage}
				onkeydown={handleKeyDown}
				placeholder="Pregunta algo sobre el software..."
				class="doc-chatbot-textarea"
				rows="1"
				disabled={isLoading}
			></textarea>
			<button
				onclick={sendMessage}
				disabled={!currentMessage.trim() || isLoading}
				class="doc-chatbot-send-btn"
			>
				{#if isLoading}
					<svg class="h-4 w-4 animate-spin" fill="currentColor" viewBox="0 0 24 24">
						<path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.364-6.364l-2.828 2.828M9.464 14.536l-2.828 2.828m9.9-2.828l-2.828-2.828M9.464 9.464L6.636 6.636"/>
					</svg>
				{:else}
					<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
				{/if}
			</button>
		</div>
	</div>
{/if}

<style>
	/* Chatbot Custom CSS */
	.doc-chatbot-btn {
		position: fixed;
		right: 1.5rem;
		bottom: 1.5rem;
		z-index: 50;
		border-radius: 50%;
		background: linear-gradient(135deg, #ef4444, #dc2626);
		padding: 1rem;
		color: #ffffff;
		box-shadow: 0 10px 25px -5px rgba(220,38,38,0.4), 0 8px 10px -6px rgba(220,38,38,0.2);
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.doc-chatbot-btn:hover {
		transform: scale(1.05) translateY(-5px);
		box-shadow: 0 20px 25px -5px rgba(0,0,0,0.3), 0 8px 10px -6px rgba(0,0,0,0.1);
	}
	.doc-chatbot-status-dot {
		position: absolute;
		top: 0;
		right: 0;
		height: 12px;
		width: 12px;
		background: #4ade80;
		border-radius: 50%;
		border: 2px solid var(--color-bg);
		animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
	}
	
	.doc-chatbot-window {
		position: fixed;
		bottom: 1.5rem;
		right: 1.5rem;
		z-index: 50;
		width: 380px;
		height: 600px;
		max-height: calc(100vh - 3rem);
		max-width: calc(100vw - 3rem);
		display: flex;
		flex-direction: column;
		background: var(--color-bg);
		border-radius: 16px;
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
		border: 1px solid var(--color-border);
		overflow: hidden;
		animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.doc-chatbot-header {
		background: var(--color-primary);
		color: #ffffff;
		padding: 1rem 1.25rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
	}
	.doc-chatbot-avatar {
		display: flex;
		height: 2rem;
		width: 2rem;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
	}
	.doc-chatbot-close {
		padding: 0.5rem;
		border-radius: 8px;
		transition: background 0.2s;
		color: rgba(255,255,255,0.8);
		border: none;
		background: transparent;
		cursor: pointer;
	}
	.doc-chatbot-close:hover {
		background: rgba(255,255,255,0.2);
		color: white;
	}

	.doc-chatbot-messages {
		flex: 1;
		overflow-y: auto;
		background: var(--color-bg-subtle);
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.doc-chatbot-message-row {
		display: flex;
		width: 100%;
		gap: 0.5rem;
	}
	.doc-chatbot-bot-avatar {
		margin-top: 0.25rem;
		flex-shrink: 0;
		height: 1.75rem;
		width: 1.75rem;
		border-radius: 50%;
		background: var(--color-primary);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.doc-chatbot-bubble {
		max-width: 85%;
		padding: 0.875rem 1rem;
		box-shadow: var(--shadow-sm);
	}
	.doc-chatbot-bubble.bot {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 12px 12px 12px 2px;
		color: var(--color-text);
	}
	.doc-chatbot-bubble.user {
		background: var(--color-primary);
		color: #ffffff;
		border-radius: 12px 12px 2px 12px;
	}
	.doc-chatbot-time {
		margin-top: 0.5rem;
		font-size: 0.7rem;
	}
	.doc-chatbot-time.bot-time { color: var(--color-text-muted); }
	.doc-chatbot-time.user-time { color: rgba(255,255,255,0.8); text-align: right; }

	.doc-chatbot-input-area {
		padding: 1rem;
		background: var(--color-bg);
		border-top: 1px solid var(--color-border);
		display: flex;
		gap: 0.75rem;
		align-items: flex-end;
	}
	.doc-chatbot-textarea {
		flex: 1;
		resize: none;
		border-radius: 12px;
		border: 1px solid var(--color-border);
		background: var(--color-bg-subtle);
		color: var(--color-text);
		padding: 0.75rem 1rem;
		font-size: 0.875rem;
		outline: none;
		transition: all 0.2s;
		font-family: inherit;
		max-height: 120px;
	}
	.doc-chatbot-textarea:focus {
		border-color: var(--color-primary);
		background: var(--color-bg);
		box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.1);
	}
	.doc-chatbot-send-btn {
		border-radius: 12px;
		background: var(--color-primary);
		color: white;
		border: none;
		padding: 0.75rem;
		cursor: pointer;
		transition: transform 0.2s, background 0.2s;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.doc-chatbot-send-btn:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0,0,0,0.15);
	}
	.doc-chatbot-send-btn:disabled {
		background: var(--color-border);
		cursor: not-allowed;
		transform: none;
	}

	.doc-chatbot-dots { display: flex; gap: 4px; }
	.doc-chatbot-dots div {
		width: 6px; height: 6px;
		background: var(--color-text-muted);
		border-radius: 50%;
		animation: dotFade 1.4s infinite ease-in-out both;
	}
	.doc-chatbot-dots div:nth-child(1) { animation-delay: -0.32s; }
	.doc-chatbot-dots div:nth-child(2) { animation-delay: -0.16s; }

	@keyframes slideUp {
		from { opacity: 0; transform: translateY(20px) scale(0.95); }
		to { opacity: 1; transform: translateY(0) scale(1); }
	}
	@keyframes dotFade {
		0%, 80%, 100% { opacity: 0.2; }
		40% { opacity: 1; }
	}

	/* Scrollbars */
	.doc-chatbot-messages::-webkit-scrollbar { width: 4px; }
	.doc-chatbot-messages::-webkit-scrollbar-track { background: transparent; }
	.doc-chatbot-messages::-webkit-scrollbar-thumb {
		background: var(--color-border);
		border-radius: 4px;
	}

	@media (max-width: 768px) {
		.doc-chatbot-window {
			bottom: 0; right: 0;
			width: 100vw; height: 100vh;
			max-width: 100vw; max-height: 100vh;
			border-radius: 0;
			border: none;
		}
		.doc-chatbot-btn {
			bottom: 1rem; right: 1rem;
		}
	}
</style>
