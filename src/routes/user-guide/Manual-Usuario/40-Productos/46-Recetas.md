# Recetas

> **Dónde está:** Productos → **Recetas**
> **Para qué sirve:** índice de lectura de las recetas cargadas — "Manual de Cocina" imprimible.
> **Quién lo usa:** cocina, administradores.

---

## 🧭 Antes de entrar acá

⚠️ **Esta pantalla no es donde se cargan las recetas.** Es solo un **índice de lectura**. Para cargar o editar ingredientes de una receta, andá al producto (desde el [Maestro](/user-guide/maestro-de-productos) o [Sub-Productos](/user-guide/subproductos-elaborados)) y usá su acción **Crear Receta** — eso te lleva al formulario real, que vive en el módulo **Stock**.

---

## 📋 El índice

![Manual de Cocina](images/productos/46-recetas/01-indice.webp)

Se titula **"Manual de Cocina"**, con un botón **Imprimir Manual** para sacarlo en papel para la cocina.

Tiene un buscador (**Buscar receta...**) y un **Índice de Recetas** dividido en dos secciones:

- 🍴 **Productos en Venta**
- 🧪 **Subproductos**

Confirma algo importante: **tanto los productos de venta como los subproductos pueden tener receta.** No es exclusivo de uno u otro tipo.

---

## 📝 Cómo se carga una receta (en Stock)

El formulario real de carga, al que se llega con **Crear Receta** desde el Maestro o desde Sub-Productos, tiene estos campos:

| Campo | Qué es |
|---|---|
| **Generar receta con IA** | Botón que analiza el producto y sugiere ingredientes con proporciones estimadas. |
| **Rendimiento** | Cuánto sale de la receta, en la **unidad de medida de stock** del producto (ej. "Ingresar cantidad de Kilos que salen con esta receta"). El texto se adapta a la unidad configurada en el producto. |
| **Detalle de elaboración** | Editor de texto libre para el procedimiento. |
| **Ingredientes** | Uno por fila: **Producto** (mostrado como `[UM] Nombre`), **Cantidad**, **Observación** (opcional). Se agregan con **+ Agregar Ingrediente**. |

> 🔑 **Los ingredientes pueden ser mercaderías o subproductos.** El rótulo del campo dice "mercadería utilizada por este producto", pero en la práctica también podés elegir **otro subproducto** como ingrediente — lo que permite anidar recetas en varios niveles: por ejemplo, un relleno que a su vez tiene otro elaborado como ingrediente.

---

## 🔗 Cómo se conecta con el resto

**Recibe de:**
- [Maestro de Productos](/user-guide/maestro-de-productos) y [Sub-Productos](/user-guide/subproductos-elaborados) → el botón **Crear Receta** de cada fila

**Alimenta a:**
- Stock → producción por lote y descuento de ingredientes
- El costo del producto

---

## ⚠️ Cuidado con esto

> ⚠️ **No confundas este índice con el formulario de carga.** Acá solo se lee y se imprime. Si buscás cargar ingredientes, la acción está en el Maestro o en Sub-Productos, no en esta pantalla.

---

## ❓ Preguntas frecuentes

**¿Un producto de venta puede tener receta directamente, sin pasar por un subproducto?**
Sí. El índice separa "Productos en Venta" de "Subproductos" justamente porque ambos pueden tener su propia receta.

**¿Para qué sirve "Generar receta con IA"?**
Sugiere ingredientes y proporciones estimadas automáticamente, como punto de partida. Conviene revisarlos antes de guardar, no tomarlos como definitivos.
