# Buscar Duplicados

> **Dónde está:** Productos → **Buscar Duplicados**
> **Para qué sirve:** detecta automáticamente productos con nombres parecidos o iguales, y los fusiona.
> **Quién lo usa:** administradores.

---

## 🧭 Antes de entrar acá

Antes de crear un producto que ya podría existir con otro nombre, conviene chequear acá. Y si comprás lo mismo a otro proveedor o en otra presentación, la solución no es duplicar el producto — es agregarle una **mercadería** nueva desde el [Maestro de Productos](/user-guide/maestro-de-productos).

---

## 📋 El listado de grupos

![Grupos de duplicados detectados](images/productos/48-duplicados/01-listado.webp)

*"Detección automática de productos duplicados en todo el sistema"*

El sistema agrupa automáticamente los productos que detecta como posibles duplicados. Por cada grupo:

| Elemento | Qué es |
|---|---|
| **Razón de duplicación** | Por qué el sistema los agrupó (ej. "Nombres fonéticamente similares"). |
| **Tabla de productos** | ID, nombre y acciones de cada producto del grupo. |
| 👁️ **Ver** | Abre la ficha del producto. |
| 🔍 **Duplicados** | Abre el detalle de similitud para ese producto puntual (ver abajo). |
| **Analizar duplicados** | Vuelve a analizar ese grupo específico. |
| **Unificar ahora** | Fusiona los productos de ese grupo. |

> 💡 **"Analizar duplicados" y "Unificar ahora" son por grupo**, no una acción global: cada grupo detectado tiene su propio par de botones.

Al pie de toda la pantalla: **Ejecutar nuevo análisis** (vuelve a analizar todo el sistema desde cero) y **Volver al listado**.

---

## 🔍 El detalle por producto

![Detalle de duplicados de un producto](images/productos/48-duplicados/02-detalle-producto.webp)

Al tocar **Duplicados** en la fila de un producto, entrás a su análisis puntual: **"Análisis de duplicados para el producto ID: X – Nombre: Y"**.

Muestra una tabla con cada posible duplicado y su **Similitud**: un porcentaje y el detalle de cómo se calculó (ej. *"Fonéticamente iguales, trigramas similares (100%), palabras similares (95%), edición cercana (dist. 1)"*).

El sistema explica textualmente qué va a pasar:

> *"Con 'duplicados' nos referimos a productos que tienen nombres similares o idénticos al producto seleccionado. Si hace click en 'Unificar producto', los productos listados abajo se fusionarán con el producto principal (**se mantendrán las categorías, impresoras y puestos**)."*

Es decir: el producto que abriste (el "principal") **es el que sobrevive**, con su configuración de categorías, impresoras y puestos. Los demás del listado desaparecen, fusionados en él.

---

## ▶️ Cómo se usa

### Revisar y unificar un grupo completo

1. Entrá a **Buscar Duplicados**.
2. Revisá cada grupo y su "Razón de duplicación".
3. Si son realmente el mismo producto, tocá **Unificar ahora** en ese grupo.

### Unificar contra un producto específico

1. En la fila del producto que **querés que sobreviva**, tocá **Duplicados**.
2. Revisá el % de similitud y la explicación de cada posible duplicado.
3. Si corresponde, tocá **Unificar productos**. Ese producto pasa a ser el principal; los demás se fusionan en él.

---

## 🔗 Cómo se conecta con el resto

**Analiza:**
- Todo el [Maestro de Productos](/user-guide/maestro-de-productos), de cualquier tipo

---

## ⚠️ Cuidado con esto

> ⚠️ **Unificar es irreversible.** Los productos fusionados dejan de existir como entidades separadas. Antes de unificar, fijate cuál de los productos del grupo querés que sea el que sobrevive — sus categorías, impresoras y puestos son los que van a quedar.

> ⚠️ **Un % de similitud alto no siempre significa que sea el mismo producto.** Nombres parecidos pueden corresponder a cosas distintas (por ejemplo, un producto de venta y un ingrediente que comparten una palabra). Revisá cada grupo antes de unificar, no lo hagas a ciegas.

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| El sistema agrupó dos productos que no son lo mismo. | La detección se basa en similitud de nombres, no en el uso real del producto. | No unifiques ese grupo. Si el nombre genera confusión, considerá renombrar uno de los dos. |
| No aparece un duplicado que sé que existe. | La detección automática no encontró suficiente similitud entre los nombres. | Buscalo manualmente en el [Maestro de Productos](/user-guide/maestro-de-productos). |

---

## ❓ Preguntas frecuentes

**¿Qué pasa con las ventas históricas del producto que se fusiona?**
El texto del sistema no lo detalla explícitamente; lo que sí confirma es que se conservan categorías, impresoras y puestos del producto principal. Ante la duda, revisá el histórico de ventas de ambos productos antes de unificar.

**¿Puedo deshacer una unificación?**
No hay una acción de "deshacer" visible en la pantalla. Tratá la unificación como una decisión definitiva.
