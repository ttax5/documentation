# Menú

> **Dónde está:** Productos → **Menú**
> **Para qué sirve:** es tu carta de venta. Define qué productos se pueden vender, a qué precio y por dónde sale la comanda.
> **Quién lo usa:** encargados de carta, administradores.

---

## 🧭 Antes de entrar acá

El Menú es la pantalla donde **se crean los productos de venta**. No hace falta darlos de alta en ningún otro lado antes.

Sí conviene tener preparado:

| Lo que vas a necesitar | Dónde se configura |
|---|---|
| Las **categorías** para agrupar los productos | [Categorías](/user-guide/categorias) |
| Las **variantes** (sabores, tamaños, agregados) si el producto las lleva | [Variantes](/user-guide/variantes-grupo-sabores) |
| Las **impresoras** de cada sector | Configuración → Impresoras |
| Los **puestos (KDS)**, si usás pantallas en cocina | Comandero → Puestos |

Si no tenés nada de esto todavía, igual podés cargar productos y completarlo después.

---

## 📋 El selector de menú

Arriba a la izquierda de la barra de herramientas está **Menú: Default ▾**. Es un desplegable con **todos los menús disponibles**.

| Elemento | Qué hace |
|---|---|
| **Menú activo** (ej. *Default*) | Muestra los productos y precios de ese menú. Elegí otro de la lista para cambiar. |
| **+ Nuevo Menú** | Al final del desplegable. Crea un menú nuevo, vacío. |

**Cada menú tiene sus propios productos y sus propios precios.** Un mismo producto puede estar en varios menús con precio distinto en cada uno.

Podés crear **tantos menús como necesites**. Los motivos los define cada comercio: una carta para el salón y otra para delivery, una de mediodía y otra de noche, cartas por temporada, o una carta restringida a determinados usuarios.

---

## 🎛️ La barra de herramientas

Al lado del selector de menú tenés estos botones:

| Botón | Qué hace |
|---|---|
| ➕ **Agregar Producto** | Añade un producto nuevo a este menú. Es la vía principal para crear productos de venta. → guía completa: [Agregar Producto al Menú](/user-guide/agregar-producto) |
| ⬆️ **Importar** | Carga productos desde CSV, Excel u otro PaxaPos. |
| ⬇️ **Exportar** | Descarga la lista de productos en formato CSV/Excel. |
| ⚙️ **Configurar** | Edita los parámetros del menú: nombre, alias público, carrito, pago online, tipos de servicio, imagen y usuarios con acceso. → guía completa: [Configurar Menú](/user-guide/configurar-menu) |
| **?** | Ayuda contextual de la pantalla. |
| **⋯** | Abre dos acciones más: **Aplicar precios futuros** y **Eliminar Menú**. |

---

## 💰 Los dos precios

Tu carta tiene **dos columnas de precios** que se comportan distinto: **Precio** y **Precio Futuro**.

| | ⚡ **Precio** | 📅 **Precio Futuro** |
|---|---|---|
| Cuándo se aplica | **Al instante** | Cuando vos lo decidís |
| Para qué sirve | corregir un precio puntual | preparar un cambio de precios sin tocar la carta |
| Cómo se activa | se guarda y ya está | desde **⋯ → Aplicar precios futuros** |

El **Precio Futuro** te deja cargar tranquilo los precios nuevos de todos los productos que quieras. Mientras tanto la carta sigue vendiendo con los precios viejos. Cuando aplicás los precios futuros, se cambian de una sola vez **todos los productos que tengan un precio futuro configurado**.

Sirve tanto para **aumentar como para disminuir** los precios de varios productos a la vez.

---

## 📊 La tabla de productos

Cada fila es un producto publicado en este menú. Varias columnas se **editan directamente en la tabla**: hacés clic sobre el campo, lo modificás, y confirmás con **✓** o descartás con **✗**.

### Las columnas

En orden de izquierda a derecha:

| Columna | Qué es | Editable |
|---|---|---|
| **Seleccionar** | Casilla para marcar el producto y aplicarle acciones en conjunto. | — |
| **Producto** | La foto y el **nombre interno**: cómo figura dentro del sistema PaxaPos, el que ven los mozos al buscarlo. | ✅ (el nombre) |
| **Stock** | Marca si el producto está disponible. Al hacer clic se elige entre **Con Stock** y **Sin Stock**. | ✅ |
| **Ticket** | El nombre **en el ticket que recibe el cliente**. Puede ser más largo y descriptivo que el interno. | ✅ |
| **Puesto** | En qué **KDS** (pantalla de cocina) aparece el pedido. | — |
| **Categoría** | Agrupa el producto dentro de la carta. Se elige entre las categorías ya configuradas en [Categorías](/user-guide/categorias). | ✅ |
| **Impresoras** | Dónde se **imprime la comanda** de este producto (Cocina, Barra, Parrilla…). | — |
| **Precio** | El precio **por unidad** que se le cobra al cliente y que aparece en el ticket. | ✅ |
| **Precio Futuro** | El precio que se aplicará desde **⋯ → Aplicar precios futuros**. | ✅ |
| **Variantes** | Cuántas variantes tiene asignadas el producto. Se configuran en [Variantes](/user-guide/variantes-grupo-sabores). | — |
| **Orden** | Orden de aparición en el ticket. **Menor número = aparece primero.** | ✅ |
| **Impuesto** | La alícuota de IVA configurada para el producto. | — |
| **Acciones** | Ver, editar o eliminar el producto. Se explican más abajo. | — |

> 💡 **Impresora y Puesto no son lo mismo.** La **impresora** saca la comanda en papel; el **puesto** la muestra en una pantalla KDS en cocina. Un producto puede usar uno, el otro, o los dos.

### Así se ve cada campo al editarlo

**Stock** — se elige entre dos opciones:

![Editar el stock](images/productos/41-menu/04-columna-stock.webp)

**Producto** (nombre interno) y **Ticket** — se escriben libremente:

![Editar el nombre interno](images/productos/41-menu/05-nombre-interno.webp)

![Editar el nombre en ticket](images/productos/41-menu/06-nombre-ticket.webp)

**Categoría** — se elige entre las ya configuradas:

![Editar la categoría](images/productos/41-menu/07-categoria.webp)

**Precio** y **Precio Futuro** — se cargan como importe:

![Editar el precio de venta](images/productos/41-menu/08-precio-venta.webp)

![Editar el precio futuro](images/productos/41-menu/09-precio-futuro.webp)

Arriba de la tabla tenés además un **buscador de productos** y el botón **Filtros**.

---

## ⚙️ Las acciones de cada producto

![Botones de acción de cada fila](images/productos/41-menu/11-acciones.webp)

| Botón | Qué hace |
|---|---|
| 👁️ **Ver** | Abre la vista detallada del producto. Se explica en el apartado siguiente. |
| ✏️ **Editar** | Edita los parámetros con los que se cargó el producto, **y también el producto maestro**. Usa el mismo formulario que **Agregar Producto**. |
| 🗑️ **Eliminar** | Borra el producto **de forma permanente**. |

---

## 🔍 La vista detallada de un producto

![Cómo se vende este producto](images/productos/41-menu/12-ver-producto.webp)

Al tocar el **ojo 👁️** entrás a la ficha del producto. Lo principal que vas a encontrar:

**🛒 Cómo se vende este producto**
Un bloque por **cada menú** donde el producto está publicado, con su precio de venta, categoría, nombre abreviado e impuesto. Desde acá podés:
- **Ver en Menú** — te lleva al menú correspondiente.
- **➕ Agregar a otro menú** — publica el mismo producto en otro menú, sin volver a crearlo.

**📊 Información Detallada y Estadísticas**
Tres solapas:

| Solapa | Qué muestra |
|---|---|
| **Detalle de Ventas** | Cada venta del producto: mesa, menú, cantidad, precio y fecha. |
| **Detalle x Menú** | Cómo se vende el producto en cada menú donde está publicado. |
| **Stock** | Las unidades disponibles. |

---

## ▶️ Cómo se usa

### Cambiar el precio de un producto ahora

1. Buscá el producto en la tabla.
2. Hacé clic sobre el importe de la columna **Precio**.
3. Escribí el precio nuevo.
4. Confirmá con **✓**.

El cambio es inmediato: la próxima venta ya sale con el precio nuevo.

### Preparar un cambio de precios para después

1. Hacé clic en la columna **Precio Futuro** de cada producto que quieras modificar.
2. Cargá el precio nuevo y confirmá con **✓**. La carta **sigue vendiendo al precio viejo**.
3. Repetí con todos los productos que necesites.
4. Cuando llegue el momento, abrí **⋯ → Aplicar precios futuros**.

Todos los productos con precio futuro cargado pasan a su precio nuevo al mismo tiempo.

### Marcar un producto como agotado

1. Hacé clic en la columna **Stock** del producto.
2. Elegí **Sin Stock**.
3. Confirmá con **✓**.

### Publicar un producto en otro menú

1. Tocá el **ojo 👁️** del producto.
2. En el bloque **Cómo se vende este producto**, tocá **➕ Agregar a otro menú**.
3. Elegí el menú y completá el precio y la categoría para esa carta.

No hace falta crear el producto de nuevo: es el mismo producto con otro precio.

---

## 🔗 Cómo se conecta con el resto

**Recibe de:**
- [Categorías](/user-guide/categorias) → las opciones de la columna Categoría
- [Variantes](/user-guide/variantes-grupo-sabores) → las variantes que se le pueden asignar
- Configuración → Impresoras · Comandero → Puestos → las opciones de despacho

**Alimenta a:**
- **Salón de Ventas** → los productos que el mozo ve al adicionar
- **Comandero / KDS** → según la impresora y el puesto de cada producto
- **Reportes** → las ventas de cada producto

---

## ⚠️ Cuidado con esto

> ⚠️ **La edición en la tabla no pide confirmación extra.**
> Apenas tocás **✓**, el cambio queda guardado y se aplica a las próximas ventas. No hay un botón "Guardar" general ni un aviso previo.

> ⚠️ **Aplicar precios futuros afecta a todos los productos a la vez.**
> Esa acción aplica **todos** los precios futuros cargados, no solo el que estás mirando. Antes de tocarla, revisá la columna **Precio Futuro** completa.

> ⚠️ **Eliminar es permanente.**
> El tacho rojo borra el producto de forma definitiva. Si solo querés dejar de venderlo por un tiempo, marcalo **Sin Stock**.

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| El mozo no encuentra un producto. | No está publicado en el menú que ese usuario tiene asignado, o está **Sin Stock**. | Verificá la columna Stock y que el producto esté en el menú correcto. |
| La comanda no sale en cocina. | El producto tiene la impresora **Sin asignar**. | Editá el producto y asigná la impresora del sector que corresponda. |
| Cambié un precio y sigue cobrando el anterior. | Cargaste el importe en **Precio Futuro** en lugar de en **Precio**. | Movelo a la columna Precio, o abrí **⋯ → Aplicar precios futuros**. |
| Los productos aparecen desordenados en el ticket. | La columna **Orden** está vacía o repetida. | Asigná números distintos: menor número aparece primero. |
| Un producto no se agrupa con los demás. | No tiene categoría asignada (aparece como `/`). | Asignale una categoría desde la tabla. |

---

## ❓ Preguntas frecuentes

**¿Puedo tener el mismo producto a distinto precio en dos menús?**
Sí. Es justamente para eso que sirven los menús múltiples. Usá **Agregar a otro menú** desde la ficha del producto y poné el precio que corresponda a esa carta.

**¿Cuál es la diferencia entre el nombre del Producto y el de Ticket?**
El de la columna **Producto** es el que ves vos y el personal dentro del sistema, suele ser corto para encontrarlo rápido. El de **Ticket** es el que lee el cliente y puede ser más largo y descriptivo. Por ejemplo, `Empanada Carne Cuchillo` en el sistema y `Empanada de Carne Cortada a Cuchillo` en el ticket.

**¿Qué diferencia hay entre Impresora y Puesto?**
La impresora saca la **comanda en papel** en un sector. El puesto la muestra en una **pantalla KDS** en cocina. Son dos canales distintos y podés usar los dos a la vez.

**¿Si marco un producto Sin Stock se borra?**
No. Solo deja de estar disponible para la venta. Podés volver a marcarlo **Con Stock** cuando quieras.
