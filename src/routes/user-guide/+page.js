// @ts-nocheck
import { getModuleCategories } from '$lib/utils/markdownDetector';

export const prerender = true;

export async function load() {
	try {
		const moduleCategories = await getModuleCategories();

		// Generar lista plana de módulos con íconos automáticos
		const modulesList = [];

		// Mapeo de íconos por categoría (Iconify)
		const categoryIcons = {
			Comenzamos: 'lucide:rocket',
			'Primeros Pasos': 'lucide:footprints',
			Ventas: 'lucide:shopping-bag',
			'Medios de Pago': 'lucide:credit-card',
			Productos: 'lucide:package',
			Compras: 'lucide:shopping-cart',
			Stock: 'lucide:boxes',
			Finanzas: 'lucide:wallet-cards',
			Comandero: 'lucide:chef-hat',
			RRHH: 'lucide:users',
			Reportes: 'lucide:bar-chart-3',
			Configuracion: 'lucide:settings',
			Configuración: 'lucide:settings',
			'Biblioteca de Drivers': 'lucide:printer',
			Extra: 'lucide:sparkles',
			Otros: 'lucide:folder-open',
		};

		// Mapeo de íconos específicos por tipo de módulo (Iconify)
		const moduleIcons = {
			// 10-Comenzamos
			introduccion: 'lucide:compass',
			'iniciar-sesion': 'lucide:log-in',
			'recuperar-contrasena': 'lucide:key-round',

			// 20-Ventas
			'salon-de-ventas': 'lucide:utensils-crossed',
			salon: 'lucide:utensils-crossed',
			'caja-rapida': 'lucide:zap',
			'mapa-de-mesas': 'lucide:grid-3x3',
			'chat-del-salon': 'lucide:message-square',
			clientes: 'lucide:contact-2',
			descuentos: 'lucide:percent',
			'nueva-reserva': 'lucide:calendar-plus',
			'listado-de-reservas': 'lucide:calendar-range',

			// 30-Medios-de-Pago
			'configuracion-procesadores': 'lucide:sliders-horizontal',
			'instrumentos-pago-manual': 'lucide:hand-coins',
			'terminales-payway': 'lucide:smartphone-nfc',
			'transacciones-payway': 'lucide:arrow-left-right',
			'reembolsos-payway': 'lucide:rotate-ccw',
			'anulaciones-payway': 'lucide:ban',
			'cierres-payway': 'lucide:lock-keyhole',
			'transacciones-macroclick': 'lucide:mouse-pointer-click',
			'tipos-de-pago': 'lucide:coins',
			mercadopago: 'lucide:qr-code',

			// 40-Productos
			menu: 'lucide:book-open-check',
			categorias: 'lucide:tags',
			'variantes-grupo-sabores': 'lucide:layers',
			'maestro-de-productos': 'lucide:package-open',
			'subproductos-elaborados': 'lucide:flask-conical',
			recetas: 'lucide:scroll',
			'tags-de-productos': 'lucide:tag',
			'analisis-duplicados': 'lucide:copy-check',
			'notas-de-comanda': 'lucide:notebook-pen',
			'notas-de-producto': 'lucide:sticky-note',

			// 50-Compras
			'flujo-de-compras': 'lucide:git-pull-request',
			'todas-las-ordenes-compra': 'lucide:clipboard-list',
			'crear-orden-compra': 'lucide:file-plus-2',
			'pedir-mercaderia': 'lucide:truck',
			'pendientes-de-compra': 'lucide:clock',
			mercaderias: 'lucide:package-search',
			'mercaderias-sin-rubro': 'lucide:circle-help',
			proveedores: 'lucide:building-2',
			'historial-de-compras': 'lucide:history',

			// 60-Stock
			'resumen-de-stock': 'lucide:pie-chart',
			'stock-mercaderias': 'lucide:warehouse',
			'stock-subproductos': 'lucide:box',
			'movimientos-de-stock': 'lucide:arrow-up-down',
			'produccion-subproductos': 'lucide:factory',
			desperdicios: 'lucide:trash-2',
			depositos: 'lucide:building',
			'stock-valorizado': 'lucide:badge-dollar-sign',
			'stock-cerrados': 'lucide:shield-ban',
			'sugerencias-compra-ia': 'lucide:sparkles',

			// 70-Finanzas
			'arqueos-de-caja': 'lucide:vault',
			arqueos: 'lucide:vault',
			'traspasos-de-caja': 'lucide:arrow-right-left',
			'listado-de-cajas': 'lucide:layout-list',
			'transacciones-de-cobro': 'lucide:receipt',
			'digitalizar-factura-gasto': 'lucide:scan-line',
			'gasto-manual': 'lucide:receipt-text',
			'resumen-de-deuda': 'lucide:scale',
			'pagos-egresos': 'lucide:circle-minus',
			'historial-de-gastos': 'lucide:file-clock',
			'digitalizacion-ocr': 'lucide:file-scan',
			'historico-de-mesas': 'lucide:clock-4',
			'tickets-fiscales': 'lucide:ticket-check',
			'puntos-de-venta-pdv': 'lucide:monitor-dot',
			'cierres-contables': 'lucide:file-check-2',
			contabilidad: 'lucide:calculator',
			'arca-y-facturacion': 'lucide:landmark',

			// 80-Comandero
			'comandas-activas': 'lucide:flame',
			'comandas-terminadas': 'lucide:check-circle-2',
			'sectores-de-comanda': 'lucide:split',
			'puestos-de-comanda': 'lucide:monitor-smartphone',
			'estados-de-comanda': 'lucide:activity',
			'estados-de-items': 'lucide:list-checks',
			'kitchen-display-system-kds': 'lucide:tv-minimal',
			kds: 'lucide:tv-minimal',

			// 90-RRHH
			empleados: 'lucide:users-round',
			'empleados-trabajando': 'lucide:user-check',
			'registro-diario-fichaje': 'lucide:calendar-check-2',
			'reporte-mensual-fichaje': 'lucide:file-spreadsheet',
			departamentos: 'lucide:sitemap',
			'turnos-y-horarios-fichaje': 'lucide:alarm-clock',
			'sueldos-y-jornales': 'lucide:banknote',
			'datos-de-acceso-app': 'lucide:shield-check',
			'crear-usuarios': 'lucide:user-plus',
			'agregar-personal': 'lucide:user-round-plus',

			// 100-Reportes
			'resumen-general': 'lucide:layout-dashboard',
			'ventas-por-mozo': 'lucide:user-cog',
			'ventas-por-tipo-de-pago': 'lucide:credit-card-select',
			'reporte-de-gastos': 'lucide:file-minus',
			'reporte-de-propinas': 'lucide:heart-handshake',
			'productos-mas-vendidos': 'lucide:trophy',
			'rentabilidad-subproductos': 'lucide:trending-up',
			estadisticas: 'lucide:line-chart',
			'business-intelligence': 'lucide:brain-circuit',

			// 110-Configuración
			'info-fiscal-comercio': 'lucide:file-badge',
			'arca-afip': 'lucide:landmark',
			'config-del-comercio': 'lucide:store',
			'delvalle-qr': 'lucide:qr-code',
			'modulo-delivery': 'lucide:bike',
			'inteligencia-artificial': 'lucide:sparkles',
			'configuracion-email': 'lucide:mail-search',
			'configuracion-de-impresoras': 'lucide:printer-check',
			impresoras: 'lucide:printer',
			'configuracion-impresion': 'lucide:sliders',
			'perfiles-de-impresion': 'lucide:sliders-horizontal',
			'usuarios-del-sistema': 'lucide:users',
			'usuarios-con-pin': 'lucide:key-round',
			'token-jwt-api': 'lucide:key',
			roles: 'lucide:badge',
			'permisos-por-rol': 'lucide:shield-alert',
			'mis-sesiones-activas': 'lucide:laptop-2',
			'tipos-de-jornada': 'lucide:hourglass',
			'turnos-mesa': 'lucide:table-properties',
			mozos: 'lucide:user-square-2',
			'tipos-de-documento': 'lucide:id-card',
			'clasificacion-de-gastos': 'lucide:folder-output',
			'rubros-de-compras': 'lucide:folder-tree',
			'centros-de-costo': 'lucide:building-2',
			'unidades-de-medida': 'lucide:ruler',
			'tipos-de-impuesto': 'lucide:percent-diamond',

			// 140-Biblioteca de Drivers
			'biblioteca-de-drivers': 'lucide:folder-archive',
			'sam4s-giant-100': 'lucide:hard-drive',
			'citizen-ct-s310ii': 'lucide:cpu',
			'epson-tm-t20': 'lucide:receipt-text',
			'epson-tm-t88': 'lucide:file-text',
			'drivers-genericos': 'lucide:cog',

			// 150-Extra
			'preguntas-frecuentes': 'lucide:help-circle',
			'buchon-bot': 'lucide:bot',
		};

		const moduleDescriptions = {
			'comandas-activas':
				'Pantalla KDS en tiempo real para cocina y barra. Monitoreá pedidos, controlá tiempos por color y marchá o finalizá platos notificando al mozo.',
			'comandas-terminadas':
				'Historial de pedidos finalizados en el turno. Auditá los tiempos de despacho de cocina y reabrí comandas enviadas por error para devolverlas al KDS.',
			'sectores-de-comanda':
				'Administración de áreas de producción (Cocina, Barra, Parrilla, Fríos). Definí el ruteo automático de pedidos e impresiones por tipo de producto.',
			'puestos-de-comanda':
				'Vinculación de pantallas, monitores o tablets KDS físicas con cada sector de preparación para visualizar y operar los pedidos de cada estación.',
			'estados-de-comanda':
				'Personalización del flujo y las etapas globales de las comandas (Ingresada, En Marcha, Listo, Entregado) con códigos de color visuales.',
			'estados-de-items':
				'Control individual plato por plato. Marcá productos específicos como listos o emplatados mientras el resto de la orden continúa en preparación.',
		};

		moduleCategories.forEach((category) => {
			category.modules.forEach((module) => {
				const icon = moduleIcons[module.slug] || categoryIcons[category.title] || 'lucide:file-text';
				const description =
					moduleDescriptions[module.slug] || `Guía completa sobre ${module.title.toLowerCase()}`;

				modulesList.push({
					slug: module.slug,
					title: module.title,
					description: description,
					category: category.title,
					icon: icon,
					id: module.fileName.replace('.md', '').toLowerCase(),
				});
			});
		});

		return {
			modulesList,
			moduleCategories,
			categoryIcons,
		};
	} catch (error) {
		console.error('Error cargando módulos:', error);
		return {
			modulesList: [],
			moduleCategories: [],
		};
	}
}
