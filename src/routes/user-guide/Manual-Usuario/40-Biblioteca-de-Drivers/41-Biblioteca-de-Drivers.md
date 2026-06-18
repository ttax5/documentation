# Biblioteca de Drivers

<div id="biblioteca-drivers"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>📦</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Esta sección consolida los instaladores oficiales y manuales de configuración de los drivers requeridos para conectar ticketeras de mostrador, impresoras de comandas de cocina y dispositivos fiscales en tu local.
	</div>
</div>

---

## 🖨️ Modelos con Guía de Configuración Completa

Estos modelos cuentan con un manual paso a paso de resolución de problemas e instalación dedicada:

| Fabricante | Modelo de Impresora | Compatibilidad Windows | Enlace a Guía |
| :--- | :--- | :--- | :--- |
| **SAM4S** | Giant 100 | 7 / 8 / 10 / 11 | [📄 Ver Guía](/user-guide/sam4s-giant-100) |
| **CITIZEN** | CT-S310II | 10 / 11 | [📄 Ver Guía](/user-guide/citizen-ct-s310ii) |
| **EPSON** | TM-T20 / T20II / T20III | 7 / 8 / 10 / 11 | [📄 Ver Guía](/user-guide/epson-tm-t20) |
| **EPSON** | TM-T88V / TM-T88VI | 7 / 8 / 10 / 11 | [📄 Ver Guía](/user-guide/epson-tm-t88v) |
| **Genérico POS** | Térmicas de 80mm / 58mm | 7 / 8 / 10 / 11 | [📄 Ver Guía](/user-guide/drivers-genericos) |

---

## ⬇️ Descarga Directa de Controladores

Si ya conocés el proceso de instalación, podés descargar los controladores comprimidos (.zip) directamente desde acá:

| Marca | Modelo | Sistema Operativo | Enlace de Descarga |
| :--- | :--- | :--- | :--- |
| **3nStar** | LTT214 | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/3nstar/LTT214.zip) |
| **3nStar** | RPT005 | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/3nstar/RPT005.zip) |
| **3nStar** | RPT006w | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/3nstar/RPT006w.zip) |
| **HASAR** | 85E | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/hasar/85E.zip) |
| **HASAR** | 180 | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/hasar/HASAR-180.zip) |
| **HASAR** | 181 | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/hasar/HASAR-181.zip) |
| **HASAR** | 250 | Windows 7 / 8 / 10 / 11 | [⬇️ Descargar Driver](/drivers/hasar/HASAR-250.zip) |

---

## 📋 Guía Genérica de Instalación Rápida

<div class="doc-callout doc-callout-warning" style="margin-bottom: 1.5rem;">
	<span>⚠️</span>
	<div>
		<strong>Requisitos previos:</strong>
		<ul style="margin-top: 0.5rem; margin-bottom: 0;">
			<li>Tener permisos de **Administrador de Windows** para poder registrar puertos virtuales.</li>
			<li>Conectar y encender físicamente la ticketera (vía USB o red) antes de ejecutar el instalador.</li>
			<li>Desactivar temporalmente cortafuegos o antivirus si bloquean el registro de servicios locales.</li>
		</ul>
	</div>
</div>

### **🚀 Proceso de instalación estándar:**
1.  **Descargar:** Bajá el archivo zip correspondiente a tu impresora de la tabla superior.
2.  **Extraer:** Descomprimí el archivo en tu equipo.
3.  **Ejecutar:** Hacé clic secundario sobre el instalador `.exe` y elegí **Ejecutar como Administrador**.
4.  **Configurar puerto:** Durante el asistente, seleccioná el puerto correcto de conexión. Si es USB, usualmente será `USB001` o `USB002`. Si es de red, deberás ingresar la IP estática configurada en el equipo.
5.  **Impresión de prueba:** Generá una página de prueba desde las propiedades de impresora de Windows.

---

## 🚨 Resolución de problemas comunes

*   **¿La impresora sale con estado "Sin conexión"?**
    *   *Solución:* Desconectá el cable USB, conéctalo en otro puerto físico de la computadora y verificá si Windows emite el sonido de detección de hardware.
*   **¿La ticketera imprime caracteres extraños o símbolos?**
    *   *Solución:* Esto suele ocurrir por un conflicto de velocidad o codificación en el puerto (baud rate). Aseguráse de instalar el driver específico de la marca y evitar controladores genéricos si el equipo no los soporta.
*   **¿La impresora tiene papel pero la luz de alarma ("Error" / "Paper") parpadea?**
    *   *Solución:* Comprobá que el rollo térmico esté colocado en el sentido correcto (el lado sensible al calor debe mirar hacia arriba) y que la tapa esté completamente trabada.

---

<div class="doc-callout doc-callout-note" style="margin-top: 2rem;">
	<span>💬</span>
	<div>
		<strong>¿Necesitás asistencia remota para la configuración?</strong><br>
		Ponete en contacto con nuestro soporte técnico de Lunes a Viernes de 9:00 a 18:00 hs vía WhatsApp: <a href="https://wa.me/17867553113" target="_blank"><strong>+1 (786) 755-3113</strong></a>.
	</div>
</div>
