# Ventas por Mozo

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Ventas** → **Ventas x Mozo**  
> **Perfil de usuario:** Encargados de Salón, Jefes de Operaciones y Gerentes  

---

## ¿Qué es y para qué sirve esta pantalla?

El reporte de **Ventas por Mozo** proporciona una visión analítica del rendimiento individual del equipo de salón durante un período determinado:

1. **Evaluación de productividad y desempeño:** Detalla el monto total facturado, el volumen de mesas atendidas y el ticket promedio generado por cada camarero o adicionista.
2. **Cálculo transparente de comisiones e incentivos:** Provee la base de datos oficial para liquidar porcentajes o incentivos por ventas según el esquema implementado por el establecimiento.
3. **Optimización de asignación de sectores:** Permite detectar disparidades en la carga de trabajo entre distintas áreas del salón para balancear las asignaciones operativas.

---

## Requisitos para empezar a usarlo

- Tener habilitados y correctamente registrados los perfiles del personal en [Mozos](/user-guide/mozos).
- Contar con el permiso de **Consulta de Reporte de Ventas por Mozo** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que el personal asigne el mozo correspondiente al abrir o comandar cada mesa desde el [Salón de Ventas](/user-guide/salon-de-ventas).

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Columna | Ubicación | Función |
|---|---|---|
| **Filtro Fecha / Rango** | Encabezado | Establece el período de consulta (día específico, semana, quincena o mes). |
| **Filtro Sector / Salón** | Encabezado | Permite segmentar las ventas por áreas físicas del local (Planta Baja, Terraza, Barra, etc.). |
| **Columna Mozo** | Grilla de resultados | Identifica con nombre y número de legajo al camarero. |
| **Columna Mesas Atendidas** | Grilla de resultados | Cantidad total de mesas cerradas y cobradas bajo la titularidad de ese mozo. |
| **Columna Facturación Total** | Grilla de resultados | Sumatoria del importe neto/bruto de las cuentas asociadas. |
| **Columna Ticket Promedio** | Grilla de resultados | Promedio de venta por mesa (Facturación Total dividida por Mesas Atendidas). |
| **Columna Comisión Estimada** | Grilla de resultados | Cálculo automático del porcentaje de comisión parametrizado en la configuración. |
| **Exportar Planilla** | Esquina superior | Descarga el reporte detallado en formato Excel o CSV. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Consultar el rendimiento por período
1. Ingresá a **Reportes** → **Análisis Ventas** → **Ventas x Mozo**.
2. Indicá las fechas del período a evaluar (por ejemplo, el corte semanal o quincenal).
3. Seleccioná un sector específico si deseás evaluar un área puntual del salón, o dejá la opción en *Todos*.
4. Hacé clic en **Buscar** o **Actualizar**.

### Paso 2: Evaluar la tabla de resultados
1. Ordená la columna **Facturación Total** en orden descendente para identificar a los camareros con mayor volumen de venta.
2. Compará el **Ticket Promedio** entre los mozos para detectar oportunidades de capacitación en venta sugestiva (postres, entradas, cafetería o maridajes).
3. Verificá los totales de **Mesas Atendidas** para constatar la distribución equitativa de clientes en el salón.

### Paso 3: Exportar el informe para liquidación
1. Presioná el botón **Exportar Excel**.
2. Utilizá la planilla descargada como comprobante para el cálculo de incentivos o archivo contable.

---

## Consejos de Gestión y Buenas Prácticas

- **Reasignación de mesas:** Si un mozo toma el relevo de otro durante el turno, es fundamental realizar el traspaso de titularidad de la mesa desde el salón para que las métricas finales reflejen con exactitud la labor de cada colaborador.
- **Fomento de venta cruzada:** Utilizá el análisis de Ticket Promedio para reconocer las mejores prácticas de atención y capacitar al resto del equipo.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| Un mozo activo figura con $0 o con menos ventas de las reales. | Las mesas fueron abiertas sin asignar mozo titular o se facturaron a través de una caja rápida/usuario genérico. | Recordá al personal asignar obligatoriamente el mozo al abrir la mesa. Podés corregir la titularidad de ventas no cerradas desde el salón. |
| Figuran mozos que ya no forman parte del personal activo. | Registraron ventas históricas dentro del rango de fechas consultado. | El sistema preserva la integridad de los datos históricos. Si no deseás verlos en listas actuales de asignación, desactivalos en la configuración de personal. |
| El porcentaje de comisión no coincide con el valor esperado. | La tasa de comisión no fue actualizada en el perfil del mozo antes de generar las ventas. | Verificá y actualizá el porcentaje asignado en la ficha del mozo dentro de la configuración del sistema. |
