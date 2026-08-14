# Ventas por Tipo de Pago

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Ventas** → **Ventas x Tipos Cobro**  
> **Perfil de usuario:** Contadores, Cajeros, Tesoreros y Administradores  

---

## ¿Qué es y para qué sirve esta pantalla?

El informe de **Ventas por Tipo de Pago** detalla el origen de los ingresos monetarios del negocio según el canal financiero o medio de cobro seleccionado por los clientes:

1. **Distribución porcentual de cobros:** Clasifica los importes acumulados en Efectivo, Tarjetas de Débito, Tarjetas de Crédito, Billeteras Virtuales (Mercado Pago, MODO, Transferencias QR), Cuentas Corrientes y Plataformas de Delivery.
2. **Conciliación contable y bancaria:** Brinda la información necesaria para contrastar los cierres de lote de las terminales electrónicas (Payway, posnet, integraciones online) frente a lo registrado en el software de caja.
3. **Control de flujo de fondos:** Ayuda a prever los tiempos de acreditación bancaria y las comisiones financieras asociadas a cobros digitales.

---

## Requisitos para empezar a usarlo

- Tener dados de alta los instrumentos de cobro en [Tipos de Pago](/user-guide/tipos-de-pago).
- Contar con el permiso de **Consulta de Desglose por Medio de Pago** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que las transacciones en caja hayan sido cobradas y cerradas correctamente.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Columna | Ubicación | Función |
|---|---|---|
| **Filtro Rango de Fechas** | Encabezado superior | Establece el período de auditoría a consultar. |
| **Filtro Caja / Punto de Venta** | Encabezado superior | Permite aislar los cobros de una caja en particular o consolidar todas las cajas del establecimiento. |
| **Gráfico Circular (Distribución de Medios)** | Centro del panel | Muestra la representación gráfica porcentual de cada instrumento financiero sobre el total cobrado. |
| **Columna Medio de Pago** | Tabla de resultados | Nombre del canal de pago (ejemplo: *Efectivo*, *Payway Débito*, *Mercado Pago QR*). |
| **Columna Cantidad de Operaciones** | Tabla de resultados | Número de comprobantes o transacciones procesadas con esa modalidad. |
| **Columna Monto Recaudado** | Tabla de resultados | Sumatoria en moneda local percibida por ese medio. |
| **Columna Participación (%)** | Tabla de resultados | Porcentaje que representa respecto a la recaudación total del período. |
| **Exportar Reporte** | Esquina superior | Descarga los datos en formato Excel para conciliaciones contables. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Seleccionar el período y la caja a auditar
1. Ingresá a **Reportes** → **Análisis Ventas** → **Ventas x Tipos Cobro**.
2. Indicá el rango de fechas (por ejemplo, el día de la fecha o el período mensual contable).
3. Seleccioná la caja física a auditar o dejá la selección general.
4. Presioná **Filtrar**.

### Paso 2: Realizar la conciliación de valores
1. Verificá la fila de **Efectivo** contra el dinero físico rendido en el arqueo de caja.
2. Compará la fila de **Tarjetas / Payway** contra los cupones físicos o el resumen de cierre de lote emitido por el posnet.
3. Contrastá los totales de **QR / Billeteras Virtuales** con los reportes de acreditaciones provistos por las plataformas online.

### Paso 3: Descargar el comprobante de auditoría
1. Hacé clic en **Exportar Excel**.
2. Adjuntá el informe a la carpeta de rendición diaria o mensual para el área de administración y contabilidad.

---

## Consejos de Gestión y Buenas Prácticas

- **Cierre diario de terminales:** Realizá la conciliación de tarjetas al finalizar cada jornada antes de emitir el cierre de lote definitivo en la terminal Payway.
- **Detección de comisiones:** Monitorear periódicamente la participación de medios digitales permite estimar con mayor exactitud los costos de procesamiento financiero y retenciones impositivas.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| El total de tarjetas en el sistema no coincide con el cierre del posnet (Payway/LapPos). | Un cobro fue procesado en el posnet pero ingresado en el sistema con otra forma de pago (o viceversa). | Ingresá al módulo de [Histórico de Mesas](/user-guide/historico-de-mesas) o [Transacciones de Cobro](/user-guide/transacciones-de-cobro) para reasignar la forma de pago correspondiente. |
| Figuran transacciones en medios de pago no reconocidos o duplicados. | Existen instrumentos de pago antiguos o creados con nombres similares en la configuración. | Revisá y estandarizá el catálogo en [Tipos de Pago](/user-guide/tipos-de-pago). |
| No figuran pagos de aplicaciones de delivery (ej. PedidosYa, Rappi). | Los pedidos fueron ingresados como cobrados en mostrador o pendientes de rendición. | Comprobá la configuración del [Módulo Delivery](/user-guide/modulo-delivery) y verificá que las órdenes se asocien a su canal de cobro correspondiente. |
