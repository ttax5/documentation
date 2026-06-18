# Compras y Gestión de Stock

<div id="compras-stock"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>📦</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Este módulo es el núcleo del control de inventario de tu local. Aquí registrás lo que compras (materias primas y bebidas) y lo vinculás a lo que vendés (platos y cócteles) para que el stock se descuente de manera automática en cada venta.
	</div>
</div>

---

## 🔑 Concepto Clave: Mercadería vs Producto

Es fundamental comprender la diferencia entre estos dos elementos para llevar una contabilidad de stock precisa:

```text
  📥 MERCADERÍA (Compra)            ➡️          🛍️ PRODUCTO (Venta)
  Lo que ingresa del proveedor                  Lo que se sirve al comensal
  Ejemplo: Caja de 12 Coca-Colas                Ejemplo: 1 Coca-Cola de 500ml
```

*   **Mercadería:** El insumo o pack que comprás al proveedor por volumen (ej. *Cajón de tomates*, *Bolsa de harina de 25kg*).
*   **Producto:** El ítem final que figura en tu Menú y que consumen los clientes (ej. *Ensalada*, *Pizza*).

---

## 📦 1. Crear Nueva Mercadería

Hacé esto cada vez que incorpores un insumo o producto de compra que no exista previamente en tu catálogo:

### **Paso a paso:**
1. Navegá a **Compras** ➡️ **Mercadería** en el menú lateral.
2. Hacé clic en **Nueva Mercadería**.
3. Completá los campos del formulario:
   *   **Nombre:** Identificador comercial de compra (ej. *Cerveza Quilmes Pack x6*).
   *   **Unidad de Medida de Compra:** La presentación en la que te entrega el proveedor (ej. *Pack*, *Caja*, *Bolsa*, *Cajón*).
   *   **Cantidad que suma en Stock:** El número de unidades individuales de consumo que contiene la unidad de compra (ej. si comprás un pack de 6 cervezas, la cantidad a ingresar es `6`).

---

## 🛍️ 2. Vincular Mercadería a un Producto de Venta

Para que el sistema descuente stock automáticamente al vender, debés enlazar la mercadería al producto final:

### **Paso a paso:**
1. Dirigite a **Productos** ➡️ **Maestro de productos**.
2. Buscá el producto que deseás asociar (ej. *Cerveza Quilmes*).
3. Hacé clic en **Acciones** ➡️ **Agregar Mercadería**.
4. Configurá la equivalencia de stock:
   *   **Nombre de Compra:** Vinculá la mercadería correspondiente (*Cerveza Quilmes Pack x6*).
   *   **Relación de Consumo:** Cuánto se descuenta por cada venta (ej. `1` unidad de botella por cada venta de *Cerveza Quilmes*).
5. Hacé clic en **Guardar**.

---

## 📉 Ciclo de vida del Inventario

```text
  1. Compra de Mercadería ➡️ 2. Carga en Stock ➡️ 3. Venta en Salón ➡️ 4. Descuento Automático
```

---

## ⚙️ Gestión y Control de Depósitos

### 🏢 1. Depósitos Físicos
El sistema permite crear múltiples depósitos para organizar físicamente tu mercadería:
*   **Depósito Principal (Cámara/Almacén):** Donde se recibe la mercadería a granel del proveedor.
*   **Barra:** Stock de bebidas refrigeradas listo para el servicio.
*   **Cocina:** Insumos y materias primas en uso diario por los cocineros.

Podés realizar **Traspasos de Stock** entre depósitos para mantener la trazabilidad de qué insumo está en cada sector.

---

### 📥 2. Cargar Stock Inicial

Para iniciar el control de inventario, debés declarar tu stock físico por primera vez:

1. Ingresá a **Stock de Mercaderías**.
2. Hacé clic en **Stockear Mercadería**.
3. Completá las variables de control:

| Variable | Requisito | Propósito |
| :--- | :--- | :--- |
| **Mercadería** | 🔴 Obligatorio | Seleccioná el insumo a stockear. |
| **Cantidad Inicial** | 🔴 Obligatorio | La cantidad de unidades individuales que tenés físicamente en el depósito (ej. `24` botellas). |
| **Stock Mínimo** | ⚪ Opcional | El stock de alerta. El sistema te notificará cuando te queden menos de estas unidades para reponer. |

4. Hacé clic en **Guardar**.

---

### 📋 3. Historial de Movimientos de Stock
El panel de movimientos registra de forma inalterable cada entrada y salida para auditoría:

| Tipo de Movimiento | Causa | Impacto en Stock |
| :--- | :--- | :--- |
| **Compra Recepcionada** | Ingreso de mercadería por factura cargada. | 📈 Incrementa stock |
| **Venta Realizada** | Salida por consumo de mesa cerrada en salón. | 📉 Reduce stock |
| **Ajuste Manual** | Corrección por inventario físico mensual. | 🔄 Corrige stock |
| **Desperdicio (Merma)** | Insumos vencidos, roturas o mermas de producción. | 📉 Reduce stock |

---

### 🗑️ 4. Registro de Desperdicios (Mermas)
Es vital registrar las pérdidas para mantener los números de stock limpios y no generar descuadres:

**Motivos comunes de merma:**
*   🥬 **Vencimientos:** Verduras o lácteos que perdieron frescura.
*   🍺 **Roturas:** Botellas de vidrio quebradas en el salón o depósito.
*   🍕 **Errores de marcha:** Platos quemados o preparados por error que no se sirvieron.

**Cómo registrar un desperdicio:**
1. Ingresá al módulo **Desperdicios** ➡️ **Registrar Merma**.
2. Seleccioná el producto, la cantidad perdida y el motivo.
3. El sistema descontará el stock al instante y guardará la pérdida valorizada para tus reportes de costos.

---

### 🔒 5. Cierre de Inventario Mensual

Al finalizar cada mes, debés realizar un conteo físico ciego para corregir desviaciones:

1. Realizá el conteo manual de todas las mercaderías en tus depósitos.
2. Ingresá las cantidades reales en el panel de **Cierre de Inventario**.
3. Hacé clic en **Reinicializar Stock**. El sistema guardará la foto de diferencias y abrirá el nuevo período limpio.

---

## 🚨 Resolución de problemas comunes

*   **¿El stock marca valores negativos (ej. -5 botellas)?**
    *   *Solución:* Esto ocurre si estás vendiendo productos sin haber cargado sus correspondientes compras o remitos en el módulo de Compras. Aseguráse de recepcionar las facturas a tiempo.
*   **¿No aparece el insumo al intentar cargar una receta?**
    *   *Solución:* Verificá que la mercadería esté creada y que no esté clasificada únicamente como producto de reventa. Debe tener habilitada la propiedad de insumo.
*   **¿Un traspaso de mercadería no restó stock en el depósito origen?**
    *   *Solución:* Confirmá que el traspaso haya sido marcado como "Completado" y no haya quedado en estado "Pendiente de Recepción" por parte del encargado del depósito de destino.
