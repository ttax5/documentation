# Variantes

> **Dónde está:** Productos → **Variantes**
> **Para qué sirve:** define las opciones que el cliente elige al pedir un producto (sabores, tamaños, gustos, agregados).
> **Quién lo usa:** encargados de carta, administradores.

---

## 🧭 Antes de entrar acá

Una variante se asigna a un producto **desde el Paso 2** de [Agregar Producto al Menú](/user-guide/agregar-producto). No hace falta crear el producto primero: podés crear la variante acá y después ir a asignarla, o crearla sobre la marcha desde el mismo formulario del producto.

---

## 📋 El listado

![Listado de variantes](images/productos/43-variantes/01-listado.webp)

*"Grupos de opciones que el cliente elige al pedir (sabores, tamaños, gustos)"*

**Acciones de cabecera:** **Listado de Opciones** (vista transversal, se explica más abajo) y **+ Crear Variante**.

Cada tarjeta muestra:

| Elemento | Qué es |
|---|---|
| **Variante: &lt;nombre&gt;** | El nombre de la variante. |
| **Min: X \| Max: Y** | Cuántas opciones puede/debe elegir el cliente. |
| **Opciones** | Las opciones configuradas, o el aviso *"No hay opciones configuradas para esta variante"* si todavía no tiene ninguna. |
| **Menús y productos que usan esta variante** | Trazabilidad: en qué productos está asignada. Si no está asignada a ninguno, dice *"Esta variante no está asignada a ningún producto"*. |
| **Editar / Borrar** | Editar abre el formulario. Borrar elimina la variante. |
| Fecha | Cuándo se creó. |

> 💡 Antes de tocar **Borrar**, mirá el bloque de trazabilidad: te dice si esa variante está en uso.

---

## 📝 El formulario (crear o editar)

![Formulario de variante](images/productos/43-variantes/02-formulario-editar.webp)

### Configuración Básica

| Campo | Qué es |
|---|---|
| **Nombre de la Variante** | El nombre del grupo de opciones. |
| **Cantidad Mínima** | Mínimo de opciones que debe seleccionar el cliente. |
| **Cantidad Máxima** | Máximo de opciones que puede seleccionar el cliente. |
| **Variante Privada** | Si está marcada, no se muestra en pedimelo.online. |
| **Mostrar cada opción como producto independiente en KDS** | Si está marcada, cada opción sale como un ítem individual en la pantalla de cocina, en vez de agruparse bajo el producto padre. |

> 💡 **Cómo leer Min/Max:** Min 0 / Max 1 = opcional, el cliente elige una o ninguna. Min 1 / Max 1 = obligatorio elegir exactamente una. Min 0 / Max 3 = hasta tres opciones, ninguna obligatoria.

### Opciones de la Variante

*"Agrega las opciones disponibles para esta variante (ej: lechuga, tomate, zanahoria para 'Opciones de Ensalada')"*

Por cada opción, con **+ Agregar Opción**:

| Campo | Qué es |
|---|---|
| **Nombre de la Opción** | Ej: "Grande", "Con cebolla". |
| **Precio** | Lo que suma esa opción al precio del producto. Puede ser 0. |
| **Impresora** | Por dónde sale esa opción en la comanda. Independiente de la impresora del producto. |
| **Puesto** | En qué KDS aparece esa opción. También independiente del producto. |

> 🔑 **Cada opción tiene su propio precio, impresora y puesto.** No hereda los del producto al que está asignada — una opción puede sumar plata y salir por una impresora distinta a la del producto padre.

Cada opción tiene su botón **Eliminar** individual. Al pie del formulario está **Borrar** (la variante completa) y **Volver al Listado**.

---

## 🔍 Listado de Opciones

![Listado de Opciones en Variantes](images/productos/43-variantes/03-listado-opciones.webp)

Vista transversal de **todas las opciones de todas las variantes**, con filtros por variante, categoría, impresora y puesto.

Columnas: **Nombre Producto · Nombre Opción · Grupo · Categoría · Precio · Printer · Puesto · Creado · Acciones**

Sirve para auditar de una sola vez precios de agregados o detectar opciones sin impresora o puesto asignado, sin tener que abrir variante por variante.

---

## ▶️ Cómo se usa

### Crear una variante

1. Tocá **+ Crear Variante**.
2. Completá **Nombre**, **Cantidad Mínima** y **Cantidad Máxima**.
3. Agregá las opciones con **+ Agregar Opción**: nombre, precio, impresora y puesto de cada una.
4. Guardá.
5. Andá al producto (en [Menú](/user-guide/menu), editalo) y asignale la variante en el Paso 2.

### Ofrecer un agregado con costo extra

1. En la variante correspondiente, agregá una opción con su **Precio**.
2. Si ese agregado se prepara en un sector distinto, asignale su propia **Impresora**.

---

## 🔗 Cómo se conecta con el resto

**Alimenta a:**
- [Menú](/user-guide/menu) → las variantes disponibles para asignar a un producto, en el Paso 2 de [Agregar Producto al Menú](/user-guide/agregar-producto)
- El KDS y las impresoras, según cómo esté configurada cada opción

---

## ⚠️ Cuidado con esto

> ⚠️ **Una variante sin opciones no hace nada.** Si la creás y no le agregás ninguna opción, el cliente no tiene nada para elegir. Revisá el aviso *"No hay opciones configuradas"* en el listado.

> ⚠️ **Antes de borrar una variante, revisá dónde se usa.** El bloque de trazabilidad de cada tarjeta lista los productos que la tienen asignada.

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| El cliente no puede elegir nada al pedir el producto. | La variante no tiene opciones configuradas. | Editá la variante y agregá al menos una opción. |
| Un agregado no sale en la comanda correcta. | La opción tiene su propia impresora, distinta a la del producto. | Revisá el campo Impresora de esa opción puntual, no la del producto. |
| No encuentro la variante que necesito al armar un producto. | Todavía no fue creada. | Creala desde acá y volvé al formulario del producto. |

---

## ❓ Preguntas frecuentes

**¿Las opciones de una variante siempre suman precio?**
No. El campo Precio puede quedar en 0 — sirve tanto para agregados que se cobran (ej. "Extra queso +$500") como para opciones sin costo (ej. "Sin cebolla").

**¿Puedo usar la misma variante en varios productos?**
Sí. Una variante no pertenece a un producto: se asigna a los que necesites. El bloque de trazabilidad muestra todos los productos que la usan.
