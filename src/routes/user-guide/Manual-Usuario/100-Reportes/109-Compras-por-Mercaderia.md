# Compras por Mercadería

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Avanzado** → **Compras x Mercadería**  
> **Perfil de usuario:** Compradores, Chefs Ejecutivos, Encargados de Costos y Administradores  

---

## ¿Qué es y para qué sirve esta pantalla?

El reporte de **Compras por Mercadería** consolida el historial detallado de adquisiciones de insumos y materias primas realizadas por el establecimiento durante un período determinado:

1. **Volumen total de abastecimiento:** Informa la cantidad acumulada (en kilogramos, litros, unidades o paquetes) que se ha comprado de cada producto o ingrediente.
2. **Control del gasto acumulado y costo promedio:** Calcula el dinero total desembolsado en cada materia prima y determina el costo unitario promedio ponderado, permitiendo evaluar el impacto inflacionario en los insumos clave.
3. **Auditoría por rubros y proveedores:** Permite clasificar las compras por familias de insumos (Carnicería, Verdulería, Lácteos, Bebidas, Descartables, Limpieza) y evaluar la concentración de compras con proveedores específicos.

---

## Requisitos para empezar a usarlo

- Tener catalogados los insumos en [Mercaderías](/user-guide/mercaderias) y sus familias en [Rubros de Compras](/user-guide/rubros-de-compras).
- Contar con el permiso de **Acceso a Estadísticas de Compras por Insumo** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).
- Que las compras o facturas de compra hayan sido registradas a través del módulo de [Flujo de Compras](/user-guide/flujo-de-compras) o [Digitalizar Factura de Gasto](/user-guide/digitalizar-factura-gasto).

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Filtro | Ubicación | Función |
|---|---|---|
| **Filtro Rango de Fechas** | Encabezado superior | Delimita el período temporal de compras a consolidar. |
| **Filtrar por Rubro** | Encabezado superior | Filtra las mercaderías según su categoría de compra (ejemplo: *Carnicería*, *Panadería*, *Bebidas*). |
| **Filtrar por Proveedor** | Encabezado superior | Permite aislar los insumos adquiridos a un proveedor específico. |
| **Columna Insumo / Mercadería** | Grilla de resultados | Nombre técnico o comercial del producto adquirido. |
| **Columna Rubro** | Grilla de resultados | Clasificación a la que pertenece la mercadería. |
| **Columna Unidad de Medida** | Grilla de resultados | Unidad estándar de control (kg, litro, unidad, caja). |
| **Columna Cantidad Comprada** | Grilla de resultados | Volumen físico total ingresado al depósito. |
| **Columna Gasto Total** | Grilla de resultados | Suma monetaria total abonada por dicho insumo en el período. |
| **Columna Costo Promedio** | Grilla de resultados | Costo unitario medio obtenido (Gasto Total dividido por Cantidad Comprada). |
| **Columna Último Costo Registrado** | Grilla de resultados | Precio unitario abonado en la compra más reciente. |
| **Exportar Planilla** | Esquina superior | Descarga el detalle para auditoría o conciliación impositiva en Excel. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Establecer los filtros de búsqueda
1. Ingresá a **Reportes** → **Análisis Avanzado** → **Compras x Mercadería**.
2. Indicá el rango de fechas a auditar (por ejemplo, el mes en curso o el último trimestre).
3. Si deseás evaluar un rubro crítico (como *Carnicería*), seleccioná la opción en el filtro **Rubro**.
4. Hacé clic en **Buscar**.

### Paso 2: Auditar volúmenes y costos
1. Revisá la columna **Cantidad Comprada** para conocer el volumen total de insumo consumido y repuesto.
2. Compará la columna **Costo Promedio** con la columna **Último Costo Registrado** para identificar incrementos recientes de precios por parte del proveedor.
3. Verificá qué insumos representan el mayor porcentaje de **Gasto Total** del negocio.

### Paso 3: Descargar y utilizar los datos
1. Tocá el botón **Exportar Excel**.
2. Utilizá la información para renegociar listas de precios con proveedores o actualizar el costeo en recetas.

---

## Consejos de Gestión y Buenas Prácticas

- **Detección temprana de aumentos:** Cuando el último costo registrado supere significativamente al costo promedio, revisá de inmediato las fichas técnicas en [Recetas](/user-guide/recetas) para asegurar que el margen de ganancia de los platos finales no se vea comprometido.
- **Estandarización de unidades:** Verificá que todos los proveedores entreguen las mercaderías bajo la misma unidad de medida (por ejemplo, siempre en kilogramos) para evitar distorsiones en el cálculo del costo promedio.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| Los montos o cantidades no coinciden con las facturas físicas de los proveedores. | Existen comprobantes o remitos pendientes de ingresar al sistema. | Completá la carga de facturas pendientes a través del módulo de [Historial de Compras](/user-guide/historial-de-compras) o [Gasto Manual](/user-guide/gasto-manual). |
| Un insumo aparece duplicado con nombres similares. | Se dio de alta la mercadería más de una vez en el catálogo con variaciones ortográficas. | Unificá los insumos desde el catálogo de [Mercaderías](/user-guide/mercaderias) para consolidar su historial bajo un único registro. |
| El costo unitario figura con valores irreales (ej. extremadamente alto o bajo). | Se cargó una compra con error en la unidad de medida (ejemplo: precio por caja ingresado en la columna de unidades individuales). | Editá la factura de compra correspondiente para corregir la cantidad o unidad ingresada. |
