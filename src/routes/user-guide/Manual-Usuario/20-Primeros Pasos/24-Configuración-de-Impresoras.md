# Configuración de Impresoras

<div id="configurar-impresoras"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🖨️</span>
	<div>
		<strong>Tu objetivo:</strong> Configurar y vincular todas las impresoras para tickets, comandas y facturas fiscales en tu local gastronómico de forma rápida y sencilla.
	</div>
</div>

---

## 📋 Panel de Control de Impresoras

Para ajustar el comportamiento de las impresoras según tu operatoria:

| Configuración | Comportamiento | Recomendación |
| :--- | :--- | :--- |
| **Impresora Fiscal por defecto** | Define cuál impresora emitirá facturas de valor legal ante AFIP/ARCA. | Seleccionar la ticketera fiscal homologada conectada a la PC. |
| **Imprimir por fiscal al hacer checkout** | Genera la factura automáticamente al momento de cobrar y cerrar la mesa. | 🟢 **Habilitado (ON)** para automatizar la facturación. |
| **Documento al cerrar mesa** | Permite elegir entre imprimir una factura legal o un remito de control simple. | **Fiscal** para facturación legal; **Remito** para comprobante de mesa. |
| **Impresora de Remitos por Defecto** | Impresora encargada de emitir tickets no fiscales (mostrador, caja, control). | Seleccionar la ticketera de mostrador principal. |
| **Impresora para apertura de cajón** | Envía el pulso eléctrico para abrir el cajón de dinero al registrar cobros. | Seleccionar la ticketera física conectada al cable del cajón (RJ11). |

---

## 🔧 ¿Qué es Fiscalberry? (IMPORTANTE)

<div id="que-es-fiscalberry"></div>

<div class="doc-callout doc-callout-warning">
	<span>⚠️</span>
	<div>
		<strong>Requisito Crítico:</strong> Sin la aplicación <strong>Fiscalberry</strong> activa en tu equipo, el sistema no podrá comunicarse con las ticketeras físicas ni emitir comprobantes legales.
	</div>
</div>

**Fiscalberry** actúa como el puente de software que traduce y envía de forma segura las peticiones desde la aplicación web de **{{BRAND_NAME}}** hacia tus impresoras locales.

### **⚡ Guía de Instalación Rápida:**

1.  **DESCARGAR:** Bajá el instalador oficial desde el siguiente enlace:
    [⬇️ **Descargar Fiscalberry para Windows**](https://github.com/paxapos/fiscalberry/releases/latest/download/fiscalberry-win.exe)
2.  **INSTALAR:** Ejecutá el archivo `.exe` descargado con permisos de administrador en la PC principal de tu comercio (hacé clic secundario y seleccioná *Ejecutar como Administrador*).
3.  **VINCULAR:**
    *   Mantené Fiscalberry abierto y funcionando en segundo plano.
    *   Dirigite al módulo de impresoras dentro de **{{BRAND_NAME}}** y recargá la página (`F5` o `Ctrl + R`).
    *   Verás una nueva **paxaprinter** con un ícono verde en la barra lateral izquierda del panel. Seleccioná esa impresora y configurala según el cuadro anterior.
4.  **PROBAR:** Realizá una impresión de prueba para confirmar la correcta vinculación.

---

## ✅ Test de Funcionamiento

Antes de comenzar el servicio, realizá las siguientes pruebas de control:

*   🎫 **Prueba de Tickets de Control**
    *   *Acción:* Crear una venta de prueba, cerrarla y verificar que la ticketera de caja emita el remito/ticket de cobro.
*   🍳 **Prueba de Comandas (Cocina/Barra)**
    *   *Acción:* Cargar un pedido en una mesa, presionar **Enviar a Cocina** y verificar que la comanda se imprima correctamente en el sector correspondiente.
*   📄 **Prueba de Facturación Fiscal**
    *   *Acción:* Emitir una factura desde el facturador y corroborar que el formato legal del ticket sea emitido por la impresora fiscal.
*   💵 **Prueba del Cajón Monedero**
    *   *Acción:* Simular un cobro en efectivo y comprobar si el cajón se abre automáticamente de forma correcta.

---

## 🚨 Resolución de Problemas Comunes

*   **¿La impresora no imprime nada?**
    *   *Solución:* Comprobá que esté encendida, que tenga papel térmico cargado del lado correcto y que el cable USB esté conectado firmemente a la PC.
*   **¿Aparece "Error de conexión con Fiscalberry"?**
    *   *Solución:* Aseguráse de que el programa Fiscalberry esté abierto y ejecutándose (revisá los íconos de la barra de tareas de Windows). Si es necesario, reiniciá la aplicación.
*   **¿El cajón monedero no se abre?**
    *   *Solución:* Verificá que el cable RJ11 (similar al telefónico) esté conectado desde la base del cajón hacia la parte trasera de la ticketera, y que la impresora tenga habilitada la función de apertura de cajón en su driver o configuración interna.
*   **¿Las comandas de cocina salen por la ticketera de caja?**
    *   *Solución:* Ingresá a la configuración de sectores en {{BRAND_NAME}} y reasigna cada categoría de plato a la impresora del sector de producción adecuado.

---

<div class="doc-callout doc-callout-note" style="margin-top: 2rem;">
	<span>💬</span>
	<div>
		<strong>¿Necesitás soporte técnico adicional?</strong><br>
		Escribinos por WhatsApp al: <a href="https://wa.me/17867553113" target="_blank"><strong>+1 (786) 755-3113</strong></a>. Nuestro equipo te ayudará con la configuración de tus dispositivos.
	</div>
</div>
