# Módulo de Arqueos de Caja

<div id="arqueos"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>💰</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> El panel de Arqueos consolida el control de caja: cuánto efectivo inició el turno, cuánto se cobró por cada medio de pago, qué gastos directos se registraron y cuál es la existencia real de dinero físico. Es la herramienta principal para la prevención de pérdidas.
	</div>
</div>

---

## 🔍 Acceso al módulo

1. En el menú de navegación lateral, dirigite a la sección **Ventas**.
2. Hacé clic en la opción **Arqueo de caja**.

---

## 📊 Vista General del Arqueo

Al ingresar al módulo, visualizarás los **cierres de caja históricos** ordenados de forma cronológica descendente. Cada arqueo consolidará la siguiente información:

| Métrica | Descripción |
| :--- | :--- |
| **Importe Inicial** | El efectivo declarado al momento de abrir el turno. |
| **Total de Cobros** | La suma de todas las ventas cobradas durante el turno. |
| **Total de Pagos** | Egresos directos por gastos a proveedores de caja. |
| **Ingresos / Egresos** | Aportes o retiros manuales de cambio realizados. |
| **Importe Teórico** | El dinero neto calculado por el sistema (Inicial + Ventas + Ingresos - Egresos - Gastos). |
| **Importe Real Declarado** | La cantidad física de dinero declarada al cerrar caja. |
| **Diferencia** | Desviación de saldo (sobrante o faltante). |

---

## 📅 Arqueo en Tiempo Real (Caja Activa)

Durante el transcurso de la jornada, podés realizar un arqueo provisorio (X de caja) para ver las cifras en tiempo real:

```text
  🌅 Apertura de Caja (ej. $20.000 de cambio)
               ↓
  🛒 Registro continuo de ventas y cobros en el salón
               ↓
  👁️ Visualizar el estado parcial en tiempo real (monto teórico)
               ↓
  🌙 Cierre de Caja y recuento físico (arqueo ciego)
```

---

## 📥 Exportación de Reportes a Excel

Para auditoría contable o fiscal, el sistema permite descargar el listado completo de cierres en formato Excel aplicando filtros dinámicos:

<div class="doc-callout doc-callout-tip">
	<span>📊</span>
	<div>
		<strong>Filtros disponibles para la descarga:</strong>
		<ul style="margin-top: 0.5rem; margin-bottom: 0;">
			<li><strong>Caja específica:</strong> En caso de que administres múltiples cajas en simultáneo.</li>
			<li><strong>Usuario responsable:</strong> Filtra los cierres hechos por un cajero o encargado particular.</li>
			<li><strong>Rango de fechas:</strong> Permite delimitar por día, semana o mes cerrado.</li>
		</ul>
	</div>
</div>

---

## 📂 Pestañas de Detalle de Caja

Para un análisis minucioso de cada arqueo cerrado, podés navegar a través de sus pestañas secundarias:

*   📑 **1. Zetas (Cierre Diario):** Informes diarios de control fiscal necesarios para la contabilidad oficial.
*   📑 **2. Cobros:** Desglose detallado de todos los pagos ingresados según el medio (ej. Efectivo: `$30.000`, Tarjeta de Débito: `$15.000`, QR MercadoPago: `$8.000`).
*   📑 **3. Pagos:** Listado de comprobantes y facturas pagadas directamente desde la caja con su tipo de comprobante asociado (Factura A/B/C).
*   📑 **4. Traspasos:** Registro de movimientos de valores internos (ej. transferencia de `$10.000` de la caja de Salón a la caja de Delivery).
*   📑 **5. Listado de Mesas:** El historial completo de las mesas abiertas y cobradas durante el turno para cruce de comandas.

---

## 🔢 Metodología para un Arqueo Perfecto

### 🌅 Al abrir el local (Inicio de Turno)
1. **Contá físicamente el dinero** del cajón monedero. No confíes a ciegas en el cambio reportado en el sobre anterior.
2. **Abrí la caja en el sistema** ingresando exactamente ese monto inicial en pesos.

### 🌙 Al cerrar el local (Fin de Turno)
1. **Realizá el recuento físico** detallado del dinero en efectivo y separe el monto inicial asignado para el siguiente turno.
2. **Ingresá la declaración de billetes** denominación por denominación en la ventana de cierre (arqueo ciego).
3. **Analizá la diferencia:**
   *   Si la diferencia es **$0 (Cuadrada)** 🟢, procedé a emitir el informe final.
   *   Si la diferencia es negativa o positiva 🔴, revisá las causales detalladas a continuación.

---

## ⚠️ ¿Qué hacer si no cuadra el arqueo?

Si el dinero físico declarado no coincide con el importe teórico calculado por el sistema, seguí estos pasos de control:

1.  **Revisá los comprobantes de Gastos:** Verificá que no hayas olvidado registrar un egreso de caja para un pago menor a un proveedor (ej. un envío o un insumo rápido).
2.  **Verificá cobros en tarjetas/QR:** Cruzá los cierres de lote físicos de las terminales Posnet o el historial de cobros QR con los listados del sistema. A veces un cobro se registra con tarjeta pero se carga como efectivo por error.
3.  **Controlá las propinas:** Aseguráse de que los montos destinados a propina se hayan asentado correctamente y no se hayan mezclado con la recaudación.
4.  **Verificá los descuentos:** Aseguráse de que todas las bonificaciones o invitaciones aplicadas a las mesas cuenten con el descuento correspondiente asentado en el sistema.

---

## 🚨 Resolución de problemas comunes

*   **¿No me permite cerrar el arqueo de caja?**
    *   *Solución:* El sistema impide cerrar el turno si existen mesas abiertas en el salón. Debés cerrar y cobrar todas las mesas activas o anular las que se hayan abierto por error antes de intentar el cierre.
*   **¿El reporte de Excel se descarga vacío?**
    *   *Solución:* Verificá el rango de fechas seleccionado en los filtros. Si definís el mismo día para inicio y fin, aseguráse de que los turnos se hayan cerrado dentro de ese rango horario.
*   **¿No aparece una venta cobrada en el listado del día?**
    *   *Solución:* Validá que no se haya procesado la venta en una caja secundaria o punto de venta alternativo por error. Cada arqueo es independiente por caja física.
