# Rentabilidad de Subproductos y Recetas

> **Ubicación en el sistema:** Menú principal → **Reportes** → **Análisis Avanzado** → **Rentab. Subproductos**  
> **Perfil de usuario:** Chefs Ejecutivos, Jefes de Producción y Gerentes de Costos  

---

## ¿Qué es y para qué sirve esta pantalla?

El reporte de **Rentabilidad de Subproductos y Recetas** analiza la estructura de costos directos de cada elaboración culinaria frente a su precio final de venta al público en la carta:

1. **Rentabilidad real por receta:** Desglosa el costo teórico y real de los ingredientes que componen cada plato o preparado intermedio (salsas, masas, carnes porcionadas, rellenos) y lo contrasta con el precio vigente en el menú.
2. **Cálculo automático del margen de contribución:** Determina con exactitud la ganancia neta en moneda local y el margen porcentual (%) aportado por cada unidad vendida.
3. **Detección de platos en riesgo o con margen negativo:** Alerta de forma inmediata cuando el incremento en los precios de las materias primas reduce o elimina la rentabilidad de un producto comercial.

---

## Requisitos para empezar a usarlo

- Tener confeccionadas las fichas técnicas en [Recetas](/user-guide/recetas) y dados de alta los ítems elaborados en [Subproductos Elaborados](/user-guide/subproductos-elaborados).
- Mantener actualizados los precios de compra de los insumos en el módulo de compras.
- Contar con el permiso de **Consulta de Reporte de Rentabilidad de Subproductos** configurado en [Permisos por Rol](/user-guide/permisos-por-rol).

---

## Botones, Filtros y Métricas: ¿Qué es cada cosa?

| Elemento / Campo | Ubicación | Función |
|---|---|---|
| **Calcular Margen** | Encabezado superior | Recalcula el costo total de todas las recetas aplicando los precios de compra más recientes ingresados al sistema. |
| **Filtro Categoría / Tipo** | Encabezado | Permite segmentar el análisis por tipo de plato (ejemplo: *Pastas Caseras*, *Parrilla*, *Postres*, *Subproductos Intermedios*). |
| **Columna Producto / Preparado** | Grilla principal | Nombre del plato final o subproducto elaborado. |
| **Columna Costo de Materia Prima** | Grilla principal | Suma del costo de todos los insumos necesarios para confeccionar una porción. |
| **Columna Precio de Venta (PVP)** | Grilla principal | Precio comercial fijado en el menú activo del establecimiento. |
| **Columna Ganancia Neta ($)** | Grilla principal | Diferencia monetaria directa (Precio de Venta menos Costo de Elaboración). |
| **Columna Margen de Ganancia (%)** | Grilla principal | Porcentaje de rentabilidad obtenido sobre el precio de venta o sobre el costo. |
| **Exportar Detalle** | Esquina superior | Descarga la planilla de costos y márgenes en Excel. |

---

## Guía Paso a Paso: ¿Cómo se usa?

### Paso 1: Actualizar los cálculos de rentabilidad
1. Ingresá a **Reportes** → **Análisis Avanzado** → **Rentab. Subproductos**.
2. Hacé clic en el botón **Calcular Margen** para que el sistema procese las últimas facturas de compra y actualice el costo unitario de los ingredientes.

### Paso 2: Evaluar los márgenes por producto
1. Ordená la columna **Margen de Ganancia (%)** de menor a mayor para identificar los artículos más comprometidos.
2. Prestá especial atención a los productos con margen inferior al objetivo fijado por el negocio (por ejemplo, menor al 60% o 65% habitual en gastronomía).
3. Hacé clic sobre un producto puntual si deseás ver el desglose ingrediente por ingrediente que compone su costo.

### Paso 3: Tomar decisiones operativas y exportar
1. Si un plato presenta margen bajo o negativo, tomá una de las siguientes medidas:
   - Aumentar el precio de venta en [Menú](/user-guide/menu).
   - Revisar el gramaje de la porción en [Recetas](/user-guide/recetas).
   - Renegociar el precio del insumo principal con los proveedores.
2. Descargá el informe con **Exportar Excel** para compartirlo con la gerencia.

---

## Consejos de Gestión y Buenas Prácticas

- **Recálculo periódico:** Se aconseja presionar **Calcular Margen** al menos una vez por semana tras ingresar los comprobantes de compra de proveedores habituales.
- **Rendimiento de mermas:** Asegurate de contemplar el factor de merma en las recetas (por ejemplo, la pérdida de peso por cocción o limpieza de carnes y verduras) para que el costo calculado coincida con la realidad de cocina.

---

## ¿Qué hacer si algo no sale bien? (Problemas Comunes)

| Situación | Causa Posible | Solución |
|---|---|---|
| El margen de ganancia aparece en negativo (en rojo). | El costo de adquisición de las materias primas aumentó fuertemente y no se actualizó el precio de venta en la carta. | Actualizá el precio del plato en el [Menú](/user-guide/menu) o sustituí el ingrediente por una alternativa más competitiva. |
| El costo de un plato figura en $0. | La receta no tiene ingredientes asignados o los insumos carecen de precio de compra en el sistema. | Completá la composición de ingredientes en [Recetas](/user-guide/recetas) y cargá una compra inicial para los insumos sin costo. |
| El margen no se actualiza después de cargar una nueva factura. | No se presionó el botón de recálculo tras ingresar el comprobante de compra. | Tocá el botón **Calcular Margen** en el encabezado del reporte para refrescar la base de datos. |
