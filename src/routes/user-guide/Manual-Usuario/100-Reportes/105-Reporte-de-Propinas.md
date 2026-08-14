# Reporte de Propinas

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Ventas** → **Propinas**  
> **Perfil de usuario:** Encargados de Salón, Jefes de Cocina, Cajeros y Mozos  

---

## ¿Qué es y para qué sirve esta pantalla?

El **Reporte de Propinas** centraliza el registro y control de todas las gratificaciones voluntarias que los clientes abonan a través de medios digitales (tarjetas de débito, crédito o transferencias QR) durante el proceso de cobro:

1. **Reparto y liquidación transparente:** Permite computar de manera auditada las sumas percibidas digitalmente para proceder al retiro de efectivo de la caja y realizar el reparto justo entre el personal de salón y de cocina según el porcentaje o sistema acordado.
2. **Auditoría de cobros electrónicos:** Discrimina las propinas del importe neto de venta para evitar confusiones en los totales de facturación impositiva del negocio.
3. **Historial por turno y colaborador:** Detalla las propinas obtenidas por jornada, turno y mozo responsable de la atención.

---

## Requisitos para empezar a usarlo

- Tener habilitado el parámetro de captura de propinas electrónicas en la configuración del punto de cobro.
- Contar con el permiso de **Consulta y Reparto de Propinas Digitales** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que los cajeros ingresen el valor de la propina en el campo designado dentro de la ventana de cobro al procesar pagos con tarjeta o QR.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Columna | Ubicación | Función |
|---|---|---|
| **Filtro Fecha / Turno** | Encabezado superior | Selecciona el día o turno operativo específico a auditar. |
| **Filtro Mozo / Personal** | Encabezado superior | Permite consultar las propinas asociadas a un camarero puntual o ver el total del equipo. |
| **Columna Fecha y Hora** | Grilla de resultados | Momento exacto en que se efectuó el cobro de la mesa. |
| **Columna Número de Mesa** | Grilla de resultados | Identificador de la mesa o ticket de venta. |
| **Columna Mozo Titular** | Grilla de resultados | Nombre del empleado que atendió la orden. |
| **Columna Medio de Cobro** | Grilla de resultados | Instrumento con el cual se procesó la propina (ejemplo: *Payway Crédito*, *Mercado Pago QR*). |
| **Columna Propina Digital** | Grilla de resultados | Importe de la gratificación ingresada. |
| **Total Propina Acumulada** | Pie de tabla / Tarjeta | Sumatoria total de propinas a liquidar en el turno o período seleccionado. |
| **Exportar Liquidación** | Esquina superior | Descarga el detalle para firmar la conformidad de entrega del dinero. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Consultar las propinas al cierre de turno
1. Dirigite a **Reportes** → **Análisis Ventas** → **Propinas**.
2. Seleccioná la fecha y el turno operativo que acaba de finalizar.
3. Presioná **Buscar**.

### Paso 2: Verificar importes y totales
1. Revisá el valor en **Total Propina Acumulada** para constatar el monto total que debe retirarse de la caja en concepto de gratificaciones digitales.
2. Si el local realiza reparto individual por mozo, revisá el subtotal de cada trabajador en la grilla.
3. Si el reparto es comunitario (pozo común de propinas entre salón y cocina), utilizá el monto total consolidado.

### Paso 3: Registrar el egreso y exportar
1. Realizá la salida de dinero correspondiente en el módulo de caja para mantener equilibrado el efectivo.
2. Hacé clic en **Exportar Excel** o **Imprimir Planilla** para que los colaboradores firmen la recepción del efectivo.

---

## Consejos de Gestión y Buenas Prácticas

- **Carga obligatoria en caja:** Capacitá a los cajeros para que pregunten siempre al cliente si desea incluir propina antes de pasar la tarjeta por la terminal, e ingresen el importe en el casillero correspondiente del sistema.
- **Rendición inmediata:** Liquidar las propinas digitales al finalizar cada turno o jornada previene diferencias en el arqueo y asegura la satisfacción del equipo de trabajo.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| Un cobro con propina no aparece reflejado en este reporte. | El cajero sumó la propina al total del producto o no completó el campo específico **Propina** en la ventana de cobro. | Instruí al personal para utilizar siempre el campo designado de propinas al cobrar. Si la mesa aún no fue arqueada, puede corregirse la transacción en el historial. |
| El total de propinas no coincide con el total de vouchers firmados. | Existen cupones duplicados o comprobantes de propina no registrados en el sistema. | Cotejá cada ticket físico con las filas del reporte filtrado por fecha y hora. |
| El mozo que atendió la mesa no figura como titular de la propina. | La mesa fue cobrada bajo el usuario del cajero o con otro mozo asignado por error. | Verificá en el detalle de la mesa y reasigná la autoría del servicio si corresponde. |
