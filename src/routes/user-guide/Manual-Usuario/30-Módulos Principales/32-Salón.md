# Módulo de Salón

<div id="salon"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🛋️</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> El módulo de Salón es el corazón operativo de tu negocio. Desde esta pantalla los mozos y cajeros controlan las mesas activas, cargan los consumos (comandas), imprimen los remitos de control y procesan los cobros finales.
	</div>
</div>

---

## 💵 Gestión de Caja (Arqueo Diario)

<div id="gestion-caja"></div>

<div class="doc-callout doc-callout-warning" style="margin-bottom: 2rem;">
	<span>⚠️</span>
	<div>
		<strong>Importante:</strong> Antes de registrar cualquier pedido o interactuar con las mesas, es obligatorio realizar la <strong>Apertura de Caja</strong>. Al finalizar la jornada o el turno del personal, se debe realizar el <strong>Cierre de Caja</strong>.
	</div>
</div>

### 🔓 Abrir Caja (Inicio de Turno)
<div id="abrir-caja"></div>

**📍 Dónde encontrarlo:** Botón en la esquina superior derecha del panel de Salón.

**Paso a paso:**
1. Hacé clic en **Abrir Caja**.
2. Completá los campos requeridos en la ventana emergente:
   *   **Monto Inicial:** Dinero en efectivo con el que contás físicamente en el cajón monedero para dar vueltos (ej. `$20.000,00`).
   *   **Seleccionar Caja:** Elegí la caja física correspondiente a tu punto de venta (ej. *Caja Barra*).
3. Hacé clic en **Confirmar**. El sistema quedará habilitado para facturar.

---

### 🔒 Cerrar Caja (Fin de Turno)
<div id="cerrar-caja"></div>

**📍 Dónde encontrarlo:** Botón en la esquina superior derecha (reemplaza al botón de apertura cuando la caja está activa).

**Paso a paso:**
1. Hacé clic en **Cerrar Caja**.
2. El sistema te solicitará declarar la **cantidad física de billetes** que tenés en la caja.

<div class="doc-callout doc-callout-tip">
	<span>💡</span>
	<div>
		<strong>Importante:</strong> Debés ingresar el <strong>número de billetes</strong>, no la suma de dinero.
		<br><em>Ejemplo:</em> Si tenés $30.000 compuesto por 3 billetes de $10.000, debés ingresar el número <strong>3</strong> en la casilla correspondiente a la denominación de $10.000.
	</div>
</div>

3. Completá el desglose físico por denominación:
   *   Billetes de `$20.000`, `$10.000`, `$5.000`, `$2.000`, `$1.000`, `$500`, `$200`, `$100`, `$50`, `$20`, `$10`.
4. Hacé clic en **Confirmar Cierre**. El sistema procesará el arqueo e informará si existen sobrantes o faltantes en base a las ventas del día.

---

### 💰 Registro de Ingresos y Egresos Varios
<div id="ingresos-egresos"></div>

Utilizá este módulo para registrar cualquier entrada o salida de dinero físico que **no provenga de una venta directa** (ej. compra de insumos de emergencia, retiro de caja fuerte, etc.).

#### **📥 Registrar un Ingreso (Aporte de Efectivo, Propinas)**
1. Hacé clic en **Ingresos** (esquina superior derecha).
2. Completá los campos:
   *   **Monto:** Importe a ingresar.
   *   **Caja Destino:** La caja donde guardarás el efectivo.
   *   **Concepto:** Justificación (ej. *Ingreso de cambio sencillo*).
3. Presioná **Confirmar**.

#### **📤 Registrar un Egreso (Retiro, Pago a Proveedores)**
1. Hacé clic en **Egresos** (esquina superior derecha).
2. Completá los campos:
   *   **Monto:** Importe a retirar.
   *   **Caja Origen:** La caja de donde se retira el dinero.
   *   **Concepto:** Justificación (ej. *Pago de delivery de mercadería*).
3. Presioná **Confirmar**.

---

## 📋 Paso a paso: Abrir tu primera mesa

### **Paso 1: Seleccionar el Mozo**
1. Dirigite al módulo de **Salón** desde el panel lateral.
2. Visualizarás los perfiles de los mozos que están en servicio. Hacé clic en **Abrir Mesa** bajo el nombre del mozo que atenderá la mesa.

### **Paso 2: Completar la ficha de mesa**
3. En la ventana emergente, ingresá:
   *   **Nombre de la Mesa:** Identificador único (ej. *Mesa 5* o *Terraza 2*).
   *   **Cantidad de Cubiertos:** Cantidad de personas sentadas a la mesa.
4. Presioná **Guardar**. La mesa cambiará a estado activo (color verde) y quedará asignada al mozo seleccionado.

---

## 🍽️ Gestión de Mesa Abierta

Al hacer clic sobre cualquier mesa activa en el plano del salón, se desplegará el panel lateral de operaciones:

### 1. Nueva comanda (Tomar Pedido)
*   **Función:** Abre la carta de productos para cargar consumos.
*   **Uso:** Seleccioná las categorías y hacé clic en los platos y bebidas que ordenaron los comensales. Al terminar, presioná **Enviar a Cocina** para imprimir el ticket de preparación.

### 2. Imprimir Remito (Cerrar Mesa)
*   **Función:** Imprime el comprobante provisorio de la cuenta.
*   **Uso:** Hacé clic en **Imprimir Remito**. La ticketera emitirá un comprobante detallado y la mesa cambiará a color amarillo (estado *Esperando pago*).

### 3. Cobrar la cuenta
*   **Función:** Registra el ingreso del pago final.
*   **Uso:** Hacé clic en **Cobrar**. Elegí el medio de pago (Efectivo, Tarjeta, QR) y, si corresponde, emití la factura legal AFIP/ARCA correspondiente. La mesa se liberará automáticamente tras la transacción.

### 4. Opciones de modificación

*   **Descuentos:** Aplicá rebajas porcentuales o montos fijos a la mesa haciendo clic en **Agregar Descuento**.
*   **Editar Mesa:** Permite cambiar el mozo asignado, reubicar a los comensales en otra mesa del plano o corregir la cantidad de cubiertos.
*   **Anular Mesa:** Elimina por completo la mesa y sus consumos asociados.
    *   ⚠️ *Atención:* Esta opción cancela toda la operación y no deja registros históricos de venta en caja. Utilizala únicamente para corregir errores de apertura.

---

## 👤 Registro de Clientes (Para Facturación Electrónica)

Si un comensal solicita una factura formal (Factura A o B con CUIT/DNI), hacé clic en **Agregar Cliente** → **Crear Cliente** y completá su ficha fiscal:

| Dato requerido | Descripción |
| :--- | :--- |
| **Nombre o Razón Social** | Nombre completo de la persona o nombre legal de la empresa. |
| **Tipo de Documento / CUIT** | Selección de documento (CUIT, CUIL, DNI, Pasaporte). |
| **Dirección Fiscal** | Domicilio registrado del cliente para la factura. |
| **Email** | Dirección de correo electrónico para enviar el PDF de la factura. |
| **IVA Responsabilidad** | Condición ante el IVA (Responsable Inscripto, Monotributista, Consumidor Final). |

---

## 💡 Consejos para la operación del Salón

*   ✔️ **Uso de Colores:** Familiarizá al personal con el código de colores: **Verde** (Mesa comiendo), **Amarillo** (Mesa pidió la cuenta / Remito impreso) y **Gris** (Mesa libre).
*   ✔️ **Cierres Rápidos:** Aseguráse de que los mozos soliciten la impresión del remito antes de ir a cobrar a la mesa. Esto bloquea la mesa en el sistema y evita que se agreguen más consumos por error mientras el cliente paga.

---

## 🚨 Resolución de problemas comunes

*   **¿No puedo abrir una mesa nueva?**
    *   *Solución:* Comprobá que la caja esté abierta. Si el botón en la esquina superior dice "Abrir Caja", el sistema no te permitirá realizar ninguna acción comercial.
*   **¿El botón de cobro no está disponible en la mesa?**
    *   *Solución:* Aseguráse de haber presionado previamente el botón de **Imprimir Remito** o de tener los permisos jerárquicos necesarios en tu rol de usuario.
*   **¿Duplicaste una comanda por error?**
    *   *Solución:* Entrá a la mesa, seleccioná el ítem duplicado y disminuí la cantidad a despachar antes de presionar el botón de guardar. Si ya fue impreso en cocina, deberás anular el plato e informar al cocinero.
*   **¿No ves tus mesas activas?**
    *   *Solución:* Verificá en el panel superior que tengas seleccionado el mozo correspondiente. Las mesas están enlazadas al mozo que las abrió.
*   **¿La mesa no cambia de color al cobrar?**
    *   *Solución:* Intentá refrescar la pantalla presionando `F5` o `Ctrl + R`. Si el cobro se procesó, la mesa debería aparecer en gris (libre).

---

<div class="doc-callout doc-callout-note" style="margin-top: 2rem;">
	<span>💡</span>
	<div>
		<strong>¿Necesitás ayuda?</strong> Nuestro asistente virtual está disponible 24/7 en la esquina inferior derecha para resolver tus dudas operativas de inmediato.
	</div>
</div>
