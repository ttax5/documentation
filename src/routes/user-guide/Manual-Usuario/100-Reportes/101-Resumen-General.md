# Resumen General de Ventas

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Ventas** → **Resumen General**  
> **Perfil de usuario:** Dueños de Local, Gerentes y Contadores  

---

## ¿Qué es y para qué sirve esta pantalla?

El **Resumen General** constituye el panel de control ejecutivo principal del área comercial. Centraliza la facturación total y los indicadores clave de rendimiento (KPIs) del negocio en una vista consolidada:

1. **Indicadores clave de rendimiento (KPIs):**
   - **Ventas Totales:** Facturación bruta y neta acumulada en el rango seleccionado.
   - **Ticket Promedio:** Importe medio facturado por comprobante o mesa atendida.
   - **Cantidad de Comensales:** Total de cubiertos o personas atendidas durante el período.
   - **Cubierto Promedio:** Gasto promedio por cliente (Ventas Totales divididas por la cantidad de comensales).
2. **Gráficos comparativos de evolución:** Permite contrastar el desempeño de ventas contra períodos de referencia equivalentes (día anterior, semana anterior o mismo período del año anterior), facilitando la detección inmediata de tendencias de crecimiento o caídas operativas.

---

## Requisitos para empezar a usarlo

- Contar con el permiso de **Acceso a Tablero de Control y KPIs de Ventas** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Contar con transacciones comerciales registradas en el sistema dentro del período a consultar.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Campo | Ubicación | Función |
|---|---|---|
| **Filtro Rango de Fechas** | Encabezado superior | Establece el período temporal de análisis (ejemplos: *Hoy*, *Ayer*, *Esta Semana*, *Este Mes*, *Mes Anterior* o un rango personalizado de fechas). |
| **Tarjetas de Totales (KPIs)** | Panel superior | Muestra los valores consolidados de Ventas Totales, Ticket Promedio, Total de Mesas Ocupadas y Cubierto Promedio. |
| **Gráfico de Facturación** | Centro de la pantalla | Representa la curva de ingresos a lo largo del tiempo dentro del período establecido. |
| **Comparativa de Períodos** | Panel lateral / inferior | Permite activar y desactivar la superposición de datos respecto a semanas o años previos. |
| **Exportar PDF / Excel** | Esquina superior derecha | Descarga el reporte consolidado en planilla de cálculo (.xlsx) o documento listo para imprimir (.pdf). |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Seleccionar el período de consulta
1. Dirigite al menú **Reportes** → **Análisis Ventas** → **Resumen General**.
2. En la barra superior, abrí el selector de fechas y elegí el período que deseás analizar (por ejemplo, *Este Mes* o un rango de fechas específico).
3. Hacé clic en **Aplicar** para actualizar la vista.

### Paso 2: Evaluar métricas y comparativas
1. Revisá los bloques numéricos principales: confirmá el volumen de **Ventas Totales** y el comportamiento del **Ticket Promedio**.
2. Analizá el gráfico de evolución para identificar picos de venta y días con menor rendimiento.
3. Activá la comparativa con el período anterior para validar el crecimiento comercial.

### Paso 3: Exportar el informe ejecutivo
1. Tocá el botón **Exportar Excel** para descargar la tabla detallada de datos contables, o **Exportar PDF** para un formato de presentación gerencial.
2. Guardá el archivo generado para auditoría interna o análisis contable.

---

## Consejos de Gestión y Buenas Prácticas

- **Revisión diaria y semanal:** Se recomienda auditar el Ticket Promedio al cierre de cada turno para evaluar el impacto de promociones, cambios de carta o sugerencias de venta del personal.
- **Análisis de cubiertos:** Comparar la cantidad de comensales versus la facturación total permite distinguir si un aumento en ventas se debe a mayor afluencia de público o a un incremento de precios.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| El reporte no incluye ventas del día activo. | La caja continúa abierta o se aplicó un filtro restrictivo de cajas cerradas. | Las transacciones se registran en tiempo real; verificá que el selector de estado incluya ventas en curso o no restrinja exclusivamente a arqueos ya cerrados. |
| Los totales difieren respecto al reporte de caja física. | Existen cobros no asentados, propinas diferenciadas o devoluciones/anulaciones registradas en el período. | Contrastá los cobros con el módulo de [Arqueos de Caja](/user-guide/arqueos-de-caja) y el reporte de [Ventas por Tipo de Pago](/user-guide/ventas-por-tipo-de-pago). |
| El gráfico no muestra datos en un rango amplio de fechas. | No se registraron operaciones o la fecha inicial es posterior a la final. | Verificá la coherencia del rango de fechas ingresado en el filtro superior. |
