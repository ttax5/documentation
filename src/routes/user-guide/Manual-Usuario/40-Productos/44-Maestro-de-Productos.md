# Maestro de Productos

> **Dónde está:** Productos → **Maestro de Productos**
> **Para qué sirve:** listado y administración de **todos** los productos del comercio, sea lo que sea que hagas con ellos.
> **Quién lo usa:** encargados de carta, administradores.

---

## 🧭 Antes de entrar acá

Este listado muestra productos de cualquier tipo, pero **no es la única puerta de entrada**. Cada tipo se da de alta en un lugar distinto:

| Querés crear... | Se crea en... |
|---|---|
| Un **producto de venta** | [Menú → Agregar Producto](/user-guide/agregar-producto) |
| Un **subproducto / elaborado** | Acá mismo, con **Crear Nuevo Producto** |
| Un **producto de compra** (mercadería) | Compras / Stock (fuera de esta sección) |

El Maestro sirve para **ver, filtrar y administrar** todo junto, y para dar de alta subproductos.

---

## 📋 El listado

![Filtros del listado](images/productos/44-maestro/01-listado.webp)

*"Todos los productos del comercio: los que vendés y los que comprás"*

### Los filtros

| # | Filtro | Opciones |
|---|---|---|
| 1 | **Tipo de producto** | Todos los tipos · Es Vendible y Comprable · No es Vendible ni Comprable · Es Vendible · Es Comprable |
| 2 | **Con/sin receta** | Con y sin receta · Sí Tiene Receta · No Tiene Receta |

Además: buscador por **Nombre o código de barras**, y dos casillas — **Incluir productos eliminados** y **Solo duplicados**.

### Las columnas

| Columna | Qué es |
|---|---|
| **Tipo** | VENTA, COMPRA, VENTA+COMPRA, SUBPRODUCTO, o combinaciones como SUBPRODUCTO+VARIANTE o SUBPRODUCTO+INGREDIENTE (n). Se explican más abajo. |
| **#** | El ID del producto. Estable, útil para referenciarlo en soporte. |
| **Producto** | El nombre. **Editable al instante** haciendo clic. |
| **Código** | Código de barras, o "Sin código". También editable al instante. |
| **En Menú** | En cuántos menús está publicado. `—` si no está en ninguno. |
| **Mercaderías** | Cuántas mercaderías tiene asociadas (vínculo con Compras). `—` si no tiene. |
| **Acciones** | Menú de acciones rápidas, se explica abajo. |

### Los tipos, explicados

| Tipo | Qué significa |
|---|---|
| **VENTA** | Se le cobra al cliente, publicado en algún menú. |
| **COMPRA** | Se compra a un proveedor, es insumo. |
| **VENTA + COMPRA** | Se compra hecho y se revende igual. |
| **SUBPRODUCTO** | Se elabora internamente, tiene stock propio. |
| **SUBPRODUCTO + VARIANTE** | Además es la opción de una [variante](/user-guide/variantes-grupo-sabores) de otro producto. |
| **SUBPRODUCTO + INGREDIENTE (n)** | Además se usa como ingrediente en `n` recetas. |

> 💡 **El tipo no se elige con un campo.** Se deriva de lo que hacés con el producto: publicarlo en un menú lo vuelve VENTA, darle una mercadería lo vuelve COMPRA. No hay ningún formulario con un campo "Tipo".

---

## ⚡ Acciones rápidas por fila

![Menú de acciones rápidas](images/productos/44-maestro/02-acciones-rapidas.webp)

El botón **Acciones** despliega un menú que **cambia según el estado del producto**: solo te ofrece lo que todavía no hiciste.

| Acción | Cuándo aparece | Qué hace |
|---|---|---|
| 👁️ **Ver Detalle** | Siempre | Abre la ficha completa del producto. |
| ➕ **Agregar a Menú** | Si el producto **no** está publicado en ningún menú | Lo publica, igual que [Agregar Producto al Menú](/user-guide/agregar-producto). |
| ➕ **Agregar Mercadería** | Si el producto **no** tiene mercadería asociada | Define cómo se compra: proveedor, unidad, presentación. |
| 📋 **Crear Receta** | Si el producto puede tener receta (venta o subproducto) | Abre la carga de ingredientes en Stock. |
| ✏️ **Editar** | Siempre | Edita los datos del producto. |
| 🗑️ **Eliminar** | Siempre | Borra el producto. |

> 💡 Un producto puramente **COMPRA** (como una mercadería base) no ofrece Crear Receta: no tiene sentido, porque se compra ya hecho.

---

## 📝 Crear Nuevo Producto

![Formulario Agregar Producto](images/productos/44-maestro/03-crear-producto.webp)

⚠️ **A pesar del nombre, este formulario crea un SUBPRODUCTO**, no un producto de venta. Los campos lo confirman: no hay precio, ni categoría, ni impresora — todos atributos de venta que viven en el Menú, no acá.

| Campo | Qué es |
|---|---|
| **Nombre** | El nombre del producto/subproducto. |
| **Imagen** | Foto del producto. |
| **Código de Barras** | Opcional. |
| **Unidad de Medida de Stock** | Kilo, Litro, Unidad, Docena, etc. Cómo se va a llevar el stock. |
| **Porcentaje de desperdicio** | Del 1 al 100. |
| **Descripción** | Editor de texto enriquecido. |
| **Tag** | Etiquetas para [Tags](/user-guide/tags-de-productos). *"Los TAG's sirven para fines estadísticos únicamente."* |

Se guarda con el botón **Agregar**.

---

## ▶️ Cómo se usa

### Elaborar algo internamente (relleno, salsa, masa)

1. Tocá **Crear Nuevo Producto**.
2. Completá Nombre y Unidad de Medida de Stock (con qué unidad lo vas a llevar).
3. Guardá con **Agregar**.
4. Volvé al listado, abrí sus **Acciones → Crear Receta** para cargarle los ingredientes.

### Buscar un producto puntual

Usá el buscador por **Nombre o código de barras**, o filtrá por **Tipo** si sabés qué estás buscando (por ejemplo, solo subproductos con "Es Comprable" desmarcado).

### Editar el nombre o el código sin abrir el formulario

Hacé clic directamente sobre el nombre o el código en la tabla — se edita al instante, igual que en [Menú](/user-guide/menu).

---

## 🔗 Cómo se conecta con el resto

**Recibe de:**
- Se completa desde [Menú](/user-guide/menu) (productos de venta) y desde Compras/Stock (mercaderías)

**Alimenta a:**
- [Sub-Productos (Elaborados)](/user-guide/subproductos-elaborados) → vista filtrada, solo tipo SUBPRODUCTO
- [Recetas](/user-guide/recetas) → los productos con receta cargada
- [Buscar Duplicados](/user-guide/analisis-duplicados) → analiza este mismo listado
- [Tags](/user-guide/tags-de-productos) → las etiquetas asignadas acá

---

## ⚠️ Cuidado con esto

> ⚠️ **"Crear Nuevo Producto" no crea un producto de venta.** Si necesitás vender algo nuevo, andá directo a [Menú → Agregar Producto](/user-guide/agregar-producto). Usar este formulario para eso te va a dejar un producto sin precio, sin categoría y sin impresora.

> ⚠️ **Producto y mercadería no son lo mismo.** Si comprás el mismo producto a otro proveedor o en otra presentación, agregale una **mercadería** nueva desde Acciones — no crees otro producto. El sistema usa siempre el costo de la última compra.

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| Cargué un producto y no aparece para vender. | Un producto del Maestro no se vende solo: falta publicarlo en un menú. | Abrí sus Acciones → **Agregar a Menú**. |
| No encuentro la opción "Crear Receta" en un producto. | Ese producto es puramente COMPRA. | Las recetas son para productos de venta o subproductos, no para mercaderías simples. |
| Tengo productos que parecen repetidos. | Puede ser un duplicado real. | Revisá [Buscar Duplicados](/user-guide/analisis-duplicados), o filtrá acá con **Solo duplicados**. |

---

## ❓ Preguntas frecuentes

**¿Por qué el botón dice "Crear Nuevo Producto" si en realidad crea un subproducto?**
Es una cuestión de nombres del sistema: el Maestro trata todo como "producto" internamente, pero lo que este formulario en particular da de alta —sin precio, sin categoría, con unidad de stock— es funcionalmente un subproducto/elaborado.

**¿Puedo eliminar un producto que ya vendí alguna vez?**
Si solo querés dejar de venderlo, es más seguro sacarlo del menú o marcarlo **Sin Stock** que eliminarlo directamente del Maestro — eliminar es la acción más drástica de las disponibles en esta pantalla.
