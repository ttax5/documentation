# Reporte Anual de Ventas

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Ventas** → **Reporte Anual**  
> **Perfil de usuario:** Gerentes, Directores y Dueños de Negocio  

---

## ¿Qué es y para qué sirve esta pantalla?

El **Reporte Anual de Ventas** proporciona un análisis macroeconómico y estratégico de la facturación del negocio a lo largo de los doce meses del año calendario:

1. **Análisis de estacionalidad:** Identifica con precisión los períodos del año con mayor demanda (temporadas altas, festividades, fines de semana largos) y los meses con menor afluencia (temporadas bajas), permitiendo planificar compras, contrataciones y promociones.
2. **Comparativa interanual:** Contrasta el desempeño del año seleccionado contra los años anteriores en un gráfico evolutivo, facilitando la evaluación del crecimiento real y el ajuste por inflación o cambios en la capacidad instalada.
3. **Consolidado mensual de gestión:** Sintetiza mes a mes la facturación neta, comensales totales y ticket promedio anual.

---

## Requisitos para empezar a usarlo

- Contar con el permiso de **Acceso a Reportes Anuales e Interanuales** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Disponer de registros de ventas cerrados en los ejercicios anuales correspondientes.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Campo | Ubicación | Función |
|---|---|---|
| **Selector de Año** | Encabezado superior | Permite elegir el año fiscal o calendario a visualizar. |
| **Selector de Años de Comparación** | Encabezado | Habilita la inclusión de uno o más años anteriores para trazar curvas comparativas en el mismo gráfico. |
| **Gráfico Interanual de Barras/Líneas** | Centro de la pantalla | Muestra la evolución mes a mes de los ingresos y permite comparar las curvas de tendencia. |
| **Columna Mes** | Grilla inferior | Detalla cada uno de los 12 meses (Enero a Diciembre). |
| **Columna Facturación Total** | Grilla inferior | Ingresos acumulados del mes correspondiente. |
| **Columna Crecimiento (%)** | Grilla inferior | Variación porcentual en relación con el mismo mes del año inmediatamente anterior. |
| **Columna Comensales Totales** | Grilla inferior | Volumen total de personas atendidas durante el mes. |
| **Exportar Reporte** | Esquina superior | Descarga el balance anual consolidado en formato Excel o PDF. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Seleccionar el año a consultar
1. Ingresá a **Reportes** → **Análisis Ventas** → **Reporte Anual**.
2. En el menú desplegable superior, seleccioná el **Año** principal de análisis.
3. Si deseás evaluar la evolución histórica, activá la casilla del año o años previos a contrastar.

### Paso 2: Interpretar gráficos y tendencias
1. Observá la curva de ventas: localizá los picos máximos de recaudación y los meses valle.
2. Evaluá si el crecimiento porcentual interanual acompaña las metas fijadas por la dirección.
3. Revisá en la tabla la correlación entre la cantidad de comensales y el volumen monetario mensual.

### Paso 3: Guardar el informe anual
1. Presioná **Exportar Excel** o **Exportar PDF**.
2. Utilizá el informe para la planificación presupuestaria anual, balance contable y fijación de objetivos comerciales.

---

## Consejos de Gestión y Buenas Prácticas

- **Planificación de aprovisionamiento:** Utilizá los datos de estacionalidad para coordinar acuerdos de precios por volumen con proveedores clave antes del inicio de los meses de mayor demanda.
- **Gestión de recursos humanos:** Programá el calendario de vacaciones del personal en los meses identificados históricamente como de menor actividad.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| El gráfico muestra una caída abrupta o un valor de $0 en un mes específico. | El local permaneció cerrado por reformas/vacaciones o existen jornadas cuyas ventas no fueron consolidadas. | Verificá en el módulo de [Cierres Contables](/user-guide/cierres-contables) y [Arqueos de Caja](/user-guide/arqueos-de-caja) la cantidad de días operativos efectivamente registrados en ese mes. |
| No aparecen los datos de años anteriores para comparar. | No se migraron las ventas históricas previas a la implementación del sistema. | El sistema únicamente puede contrastar ejercicios que cuenten con datos cargados en la base de datos de PaxaPOS. |
| El cálculo porcentual de crecimiento muestra valores desproporcionados. | El año de comparación tuvo un período atípico de inactividad o apertura parcial. | Tomá como referencia períodos con operatividad normal para evitar sesgos estadísticos. |
