# Ventas por Turnos

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Avanzado** → **Ventas por Turnos**  
> **Perfil de usuario:** Encargados de Operación, Jefes de Cocina, Administradores y Gerentes  

---

## ¿Qué es y para qué sirve esta pantalla?

El informe de **Ventas por Turnos** ofrece un desglose comparativo de la facturación y la afluencia de clientes segmentado por los bloques horarios operativos del establecimiento:

1. **Análisis de franjas horarias operativas:** Compara el volumen de ingresos obtenido entre los turnos habituales del negocio (por ejemplo: *Turno Mañana/Almuerzo*, *Turno Tarde/Merienda*, *Turno Noche/Cena* y *Turno Trasnoche*).
2. **Dimensionamiento de dotación de personal:** Permite determinar con base en datos reales la cantidad óptima de cocineros, bacheros, camareros y cajeros requeridos para cada franja de servicio.
3. **Planificación de ofertas específicas:** Identifica qué turnos presentan menor densidad de público para lanzar menús ejecutivos, promociones de meriendas o promociones especiales fuera de hora pico.

---

## Requisitos para empezar a usarlo

- Tener definidos los horarios de apertura y corte en [Turnos Mesa](/user-guide/turnos-mesa).
- Contar con el permiso de **Consulta de Comparativa de Ventas por Turno** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que las ventas se hayan registrado en las franjas horarias correspondientes.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Campo | Ubicación | Función |
|---|---|---|
| **Filtro Rango de Fechas** | Encabezado superior | Delimita el período de tiempo a consolidar (ejemplo: *Últimos 30 días*, *Este Fin de Semana*). |
| **Comparar Turnos** | Encabezado superior | Actualiza el análisis y genera la comparativa visual de barras entre turnos. |
| **Gráfico Comparativo de Turnos** | Centro del panel | Muestra visualmente la proporción de facturación y cantidad de clientes entre el Almuerzo, la Cena y otros turnos configurados. |
| **Columna Turno** | Grilla de resultados | Nombre del bloque operativo asignado. |
| **Columna Rango Horario** | Grilla de resultados | Horario de inicio y fin configurado para dicho turno. |
| **Columna Mesas Cerradas** | Grilla de resultados | Total de cuentas cobradas durante esa franja. |
| **Columna Total Comensales** | Grilla de resultados | Cantidad de personas atendidas. |
| **Columna Facturación Total** | Grilla de resultados | Importe acumulado facturado en ese turno. |
| **Columna Ticket Promedio** | Grilla de resultados | Gasto medio por mesa o comprobante en ese horario. |
| **Exportar Reporte** | Esquina superior | Descarga el comparativo en formato Excel. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Configurar el rango de análisis
1. Ingresá a **Reportes** → **Análisis Avanzado** → **Ventas por Turnos**.
2. Elegí el rango de fechas que deseás estudiar (por ejemplo, el último mes para obtener una media representativa).
3. Hacé clic en **Comparar Turnos**.

### Paso 2: Evaluar la distribución horaria
1. Revisá el gráfico de barras para identificar qué turno representa el mayor porcentaje del ingreso bruto.
2. Compará el **Ticket Promedio** del Almuerzo versus la Cena para verificar el comportamiento de consumo (generalmente el turno noche presenta mayor consumo de bebidas y postres).
3. Contrastá la cantidad de **Total Comensales** de cada franja para planificar los horarios de ingreso del personal.

### Paso 3: Descargar la planilla
1. Tocá el botón **Exportar Excel** para guardar el informe o presentarlo en reuniones de operaciones.

---

## Consejos de Gestión y Buenas Prácticas

- **Revisión de horarios de corte:** Si el local extiende su horario los fines de semana, asegurate de que los turnos nocturnos y de trasnoche cubran adecuadamente las mesas que cierran pasada la medianoche.
- **Eficiencia energética y de cocina:** Los datos de turnos permiten optimizar el encendido de equipamiento de cocina (hornos, freidoras) únicamente en los momentos de alta demanda.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| Todas las ventas se acumulan en un único turno. | No se definieron los límites horarios de cada turno o están solapados. | Ingresá a la sección de Configuración en [Turnos Mesa](/user-guide/turnos-mesa) y definí con precisión la hora de inicio y fin de cada franja horaria. |
| Hay mesas que no se computan en ningún turno. | Se cerraron en horarios no comprendidos dentro de los turnos activos. | Ajustá los límites horarios para que no queden baches entre el cierre de un turno y el inicio del siguiente. |
| El total de comensales figura en cero. | El personal no carga la cantidad de personas al abrir la mesa en el salón. | Capacitá a los mozos para que ingresen siempre el número real de comensales al ocupar una mesa. |
