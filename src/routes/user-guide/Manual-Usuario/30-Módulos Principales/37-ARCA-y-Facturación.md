# ARCA y Facturación Electrónica

<div id="arca-facturacion"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🎯</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Para comenzar a emitir facturas electrónicas con validez legal ante AFIP/ARCA, debés vincular tu cuenta fiscal con el sistema. Este proceso se realiza una única vez.
	</div>
</div>

<div class="doc-callout doc-callout-warning" style="margin-bottom: 2rem;">
	<span>⚠️</span>
	<div>
		<strong>Requisito Obligatorio:</strong> Para realizar este trámite debés poseer **Clave Fiscal de nivel 3** en la plataforma de ARCA.
	</div>
</div>

---

## 🚀 1. Habilitar Facturación Electrónica (Web Service)

<div id="habilitar-servicio"></div>

### 🌐 1.1 Ingreso a ARCA y acceso a Administrador
<div id="ingreso-arca"></div>

1. **Ingresá en el portal oficial de ARCA** (www.afip.gob.ar) o directamente en el enlace de acceso: [https://auth.afip.gob.ar/contribuyente/](https://auth.afip.gob.ar/contribuyente/).
2. Escribí tu **CUIT**, presioná "Siguiente", ingresá tu clave fiscal y hacé clic en **Ingresar**.
3. En la pantalla de servicios interactivos, buscá y seleccioná la opción **Administrador de Relaciones de Clave Fiscal**.

![Ingreso a ARCA](images/afip/1-Inicio-sesion.webp)
*Pantalla de ingreso a ARCA con Clave Fiscal.*

![Administrador de Relaciones](images/afip/2-Administrador-relaciones.webp)
*Menú principal con opción de Administrador de Relaciones.*

4. **Si administrás más de un CUIT:** Seleccioná el CUIT correspondiente al comercio que deseas dar de alta.

---

### 🔗 1.2 Asociar Servicio
<div id="crear-relacion"></div>

1. Hacé clic en el botón **Nueva Relación**.

![Nueva Relación](images/afip/3-Nueva-relacion.webp)
*Botón para crear una nueva relación.*

2. En el campo **Servicio**, presioná **Buscar**.

![Buscar Servicio](images/afip/4-Servicios.webp)
*Campo de búsqueda de servicios.*

3. Verificá que en el campo **Representado** figure correctamente el CUIT de tu comercio.
4. Desplegá la carpeta **ARCA** ➡️ **WebServices**.

![WebServices ARCA](images/afip/5-Web-service.webp)
*Menú desplegable de ARCA mostrando WebServices.*

---

### 📑 1.3 Selección de Servicio según Factura
<div id="elegir-servicio"></div>

Seleccioná el Web Service correspondiente según tu operatoria:

| Tipo de Comprobante | Web Service a seleccionar |
| :--- | :--- |
| **Facturas electrónicas A, B, C o M** | **Facturación Electrónica** |
| **Facturas de exportación** | **Facturación electrónica de exportación** |
| **Facturas clase T (Turismo)** | **Web Service Comprobantes T** |

<div class="doc-callout doc-callout-warning">
	<span>⚠️</span>
	<div>
		<strong>Nota:</strong> Si necesitás emitir diferentes tipos de facturas (ej. locales y exportación), deberás repetir este proceso completo de vinculación para cada uno de los servicios.
	</div>
</div>

---

### 👤 1.4 Asignar Representante de Integración
<div id="asignar-representante"></div>

1. En el campo **Representante**, hacé clic en **Buscar**.

![Buscar Representante](images/afip/6-Buscar-representante.webp)
*Campo para buscar representante.*

2. Ingresá el CUIT del desarrollador autorizado: **`20303683268`** y presioná **Buscar**.

![Ingresar CUIT Representante](images/afip/7-Representante.webp)
*Ingreso del CUIT del representante autorizado.*

3. El sistema te indicará que el CUIT pertenece a: **VILAR ALEJANDRO ERNESTO**.

<div class="doc-callout doc-callout-note">
	<span>💡</span>
	<div>
		<strong>Advertencia de ARCA:</strong> Podés ignorar cualquier cartel en rojo o advertencia sobre delegación de computadores fiscales y continuar con el paso de confirmación.
	</div>
</div>

---

### ✅ 1.5 Confirmar la Delegación
<div id="confirmar-relacion"></div>

1. Presioná el botón **Confirmar** para finalizar el enlace de servicio.

![Confirmar Relación](images/afip/8-Confirmar-representante.webp)
*Botón de confirmación final de la relación.*

---

## Store 2. Crear un nuevo Punto de Venta (PVD) Electrónico

<div id="crear-punto-venta"></div>

Este paso sirve para dar de alta el punto de facturación digital en tu cuenta fiscal.

---

### ⚙️ 2.1 Habilitar Servicio de Administración de Puntos de Venta
<div id="adherir-servicio"></div>

1. Ingresá nuevamente a **Administrador de Relaciones de Clave Fiscal**.
2. Seleccioná la opción **Adherir Servicio**.
3. Desplegá **ARCA** ➡️ **Servicios Interactivos** y buscá el servicio **Administración de puntos de venta y domicilios**.
4. Confirmá la adhesión y salí del sitio de ARCA para que impacte el cambio.

---

### 🔄 2.2 Acceder a la Gestión de PVD
<div id="reingresar-arca"></div>

1. Volvé a ingresar al portal de ARCA con tu Clave Fiscal.
2. En la lista de tus servicios activos, seleccioná **Administración de puntos de venta y domicilios**.
3. Elegí el nombre de tu empresa fiscal y seleccioná la opción **A/B/M de Puntos de Venta**.

---

### ➕ 2.3 Dar de alta el Punto de Venta
<div id="crear-pvd"></div>

1. En la parte inferior, hacé clic en **Agregar**.
2. Completá los siguientes parámetros fiscales:

| Campo | Configuración | Ejemplo |
| :--- | :--- | :--- |
| **Número** | Ingresá un número de punto de venta que no esté en uso. | *3* |
| **Nombre Fantasía** | Nombre para identificar este canal de venta. | *Factura Electrónica* |
| **Sistema** | Seleccioná el sistema según tu régimen impositivo (ver tabla abajo). | *RECE para aplicativos y Web Services* |
| **Domicilio** | Seleccioná el domicilio fiscal asociado al local. | *(Tu dirección registrada)* |

#### **Opciones para el campo "Sistema":**

| Tu condición impositiva | Opción a seleccionar |
| :--- | :--- |
| **Monotributista** | *Factura Electrónica - Monotributo - Web Services* |
| **Responsable Inscripto** | *RECE para aplicativos y Web Services* |
| **Factura de Exportación** | *Comprobantes de Exportación - Web Services* |

3. Hacé clic en **Aceptar** para confirmar la creación del punto de venta en ARCA.

---

### 📞 2.4 Notificación Obligatoria a Soporte Técnico
<div id="confirmar-pvd"></div>

<div class="doc-callout doc-callout-warning">
	<span>🚨</span>
	<div>
		<strong>Paso Crítico:</strong> Una vez creado el Punto de Venta en ARCA, debés informarnos para que carguemos los certificados digitales de facturación en tu servidor. Sin esto, el sistema web arrojará error al intentar facturar.
	</div>
</div>

Envianos un mensaje haciendo clic en el enlace directo de WhatsApp:
👉 [<button class="doc-article-meta-btn" style="cursor: pointer; font-weight: bold;">💬 Enviar mensaje por WhatsApp</button>](https://wa.me/17867553113?text=Hola!%20Ya%20complet%C3%A9%20la%20configuraci%C3%B3n%20en%20ARCA%20y%20necesito%20que%20configuren%20mi%20PVD%20para%20facturaci%C3%B3n%20electr%C3%B3nica.%20Mi%20CUIT%20es:%20__%20y%20el%20punto%20de%20venta%20creado%20es:%20__)

**Datos a enviar:**
*   ✔️ **CUIT** del comercio.
*   ✔️ **Número** del Punto de Venta creado (ej. `3`).
*   ✔️ **Régimen** impositivo (Monotributo o Responsable Inscripto).

*(La habilitación técnica se procesará en un plazo de 24 a 48 horas hábiles).*

---

## 🚨 Resolución de problemas comunes

*   **¿El CUIT de representante da error o no existe?**
    *   *Solución:* Aseguráse de copiar el número exactamente sin guiones: `20303683268`.
*   **¿No aparece el servicio "Administración de puntos de venta" en tu panel?**
    *   *Solución:* Es necesario cerrar la sesión en el portal de ARCA y volver a ingresar con clave fiscal para que se actualice el menú de servicios adheridos.
*   **¿El sistema de facturación web da error de "Certificado Vencido"?**
    *   *Solución:* Esto indica que la relación en ARCA o el certificado cargado en el servidor ha caducado. Ponete en contacto con nuestro equipo para actualizar las credenciales de conexión.
