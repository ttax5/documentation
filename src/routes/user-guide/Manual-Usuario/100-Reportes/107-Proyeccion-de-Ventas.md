# Proyección de Ventas

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Avanzado** → **Proyección de Ventas**  
> **Perfil de usuario:** Gerentes, Directores Financieros y Dueños de Local  

---

## ¿Qué es y para qué sirve esta pantalla?

La pantalla de **Proyección de Ventas** utiliza modelos analíticos y algoritmos de estimación con Inteligencia Artificial para pronosticar el comportamiento de facturación al cierre del mes en curso:

1. **Estimación de cierre de mes:** Proyecta la facturación total esperada al último día del mes en base al ritmo de ventas diarias registrado a la fecha, la estacionalidad semanal (diferenciando días de semana de fines de semana) y el historial operativo reciente.
2. **Monitoreo de metas comerciales (Target):** Permite comparar la proyección calculada contra el presupuesto u objetivo de ventas establecido para el período, facilitando la toma de acciones correctivas oportunas.
3. **Planificación de flujo de caja y egresos:** Provee una previsión confiable de los ingresos para coordinar pagos de alquileres, proveedores e impuestos.

---

## Requisitos para empezar a usarlo

- Contar con el permiso de **Consulta de Proyecciones de Ventas con IA** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que el local cuente con actividad comercial continua y ventas registradas durante los días transcurridos del mes activo.

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Campo | Ubicación | Función |
|---|---|---|
| **Calcular Proyección** | Encabezado superior | Ejecuta el algoritmo predictivo actualizando los cálculos con las últimas ventas del día. |
| **Venta Real a la Fecha** | Tarjeta de métricas | Sumatoria de facturación efectivamente consolidada desde el primer día del mes hasta el momento actual. |
| **Venta Proyectada al Cierre** | Tarjeta de métricas | Estimación matemática del total que facturará el negocio al finalizar el último día del mes. |
| **Objetivo Mensual (Target)** | Tarjeta de métricas | Meta de facturación configurada por la administración del negocio. |
| **Porcentaje de Cumplimiento Estimado** | Tarjeta de métricas | Grado de alcance previsto respecto a la meta (por ejemplo: *104%* o *92%*). |
| **Gráfico de Tendencia (Real vs Proyectado)** | Centro de la pantalla | Curva visual que muestra el avance real de las ventas y la línea de proyección estimada hacia el cierre de mes. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Generar la proyección mensual
1. Ingresá a **Reportes** → **Análisis Avanzado** → **Proyección de Ventas**.
2. Hacé clic en el botón **Calcular Proyección**.
3. El sistema procesará las transacciones acumuladas y mostrará los resultados proyectados.

### Paso 2: Evaluar el cumplimiento de objetivos
1. Observá la tarjeta **Venta Proyectada al Cierre del Mes** y comparala con el **Objetivo Mensual**.
2. Verificá en el gráfico si la tendencia se mantiene ascendente o si presenta desaceleración en días laborales.
3. En caso de proyectar un valor por debajo del objetivo, planificá acciones comerciales de impulso (promociones en días de baja demanda, eventos o campañas de comunicación).

---

## Consejos de Gestión y Buenas Prácticas

- **Momento ideal de evaluación:** Si bien la herramienta está disponible todo el mes, las proyecciones alcanzan su mayor nivel de estabilidad y precisión estadística a partir del día 10 de cada período, cuando ya se han registrado patrones de días hábiles y fines de semana representativos.
- **Ajuste de objetivos:** Actualizá la meta mensual en la configuración al inicio de cada mes contemplando feriados y eventos especiales.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| La proyección muestra variaciones muy bruscas día a día. | Se está consultando en los primeros días del mes (1 al 5), donde hay escasa muestra de transacciones para consolidar la tendencia. | A medida que transcurren los días y se acumulan ventas de semanas completas, el modelo predictivo se estabiliza con alta precisión. |
| El cálculo no toma en cuenta feriados o fines de semana largos. | Los días atípicos pueden elevar temporalmente la media diaria. | Tené en cuenta que el sistema pondera los días según su peso histórico habitual en el negocio. |
| No se visualiza la línea del objetivo comercial. | No se ha cargado una meta de ventas para el mes activo. | Ingresá al módulo de configuración general para definir el target de facturación mensual. |
