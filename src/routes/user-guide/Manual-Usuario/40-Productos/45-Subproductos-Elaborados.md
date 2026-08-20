# Sub-Productos (Elaborados)

> **Dónde está:** Productos → **Sub-Productos (Elaborados)**
> **Para qué sirve:** listado de los productos que elaborás internamente — con stock y costo propio — en vez de comprarlos hechos.
> **Quién lo usa:** encargados de cocina, administradores.

---

## 🧭 Antes de entrar acá

Esta pantalla es una **vista filtrada del [Maestro de Productos](/user-guide/maestro-de-productos)**: muestra solo los que son de tipo SUBPRODUCTO. Para crear uno nuevo, andá al Maestro y usá **Crear Nuevo Producto** — acá no hay alta propia.

---

## 📋 El listado

![Listado de Sub-Productos](images/productos/45-subproductos/01-listado.webp)

*"Productos no vendibles: opciones de variantes e ingredientes elaborados"*

### Las columnas

| Columna | Qué es |
|---|---|
| **Nombre Interno** | El nombre del subproducto. |
| **En Variantes** ① | El nombre de la [variante](/user-guide/variantes-grupo-sabores) donde este subproducto se usa como opción. `—` si no se usa en ninguna. |
| **Como Variante** ② | Un número asociado a las variantes. Su comportamiento exacto todavía no está confirmado — no lo documentamos en detalle hasta verificarlo con más casos. |
| **Ingredientes** | Cuántos ingredientes tiene cargados en su [receta](/user-guide/recetas). `—` si no tiene receta cargada. |
| **Acciones** | Ver producto · Editar · Crear Receta · Borrar. |

> 💡 **Un subproducto puede ser, a la vez, la opción de una variante.** Por ejemplo, un sabor de helado elaborado internamente puede aparecer acá como subproducto y, al mismo tiempo, ser una de las opciones que el cliente elige en la variante "Sabor".

---

## ▶️ Cómo se usa

### Cargarle la receta a un subproducto

1. En la fila del subproducto, tocá **Crear Receta** (ícono de hoja).
2. Te lleva al formulario de recetas, en el módulo Stock: cargá el rendimiento del lote y los ingredientes.
3. Los ingredientes pueden ser mercaderías **o otros subproductos** — las recetas se pueden anidar en varios niveles.

Ver el detalle completo en [Recetas](/user-guide/recetas).

### Revisar de qué está hecho o dónde se usa un subproducto

Tocá **Ver producto** (ícono de ojo) para ver su ficha completa: cómo se compra, stock actual y, si tiene receta, sus ingredientes.

---

## 🔗 Cómo se conecta con el resto

**Es una vista de:**
- [Maestro de Productos](/user-guide/maestro-de-productos) → filtrado por tipo SUBPRODUCTO

**Se conecta con:**
- [Recetas](/user-guide/recetas) → dónde se cargan sus ingredientes
- [Variantes](/user-guide/variantes-grupo-sabores) → si el subproducto es, además, una opción de variante
- Stock → producción por lote y stock del elaborado

---

## ⚠️ Cuidado con esto

> ⚠️ **Un subproducto puede publicarse en un menú como si fuera un producto de venta.** No es exclusivo de acá, pero conviene tenerlo presente: por ejemplo, podés vender el mismo relleno por kilo además de usarlo dentro de otras recetas. Esa acción se hace desde el [Maestro de Productos](/user-guide/maestro-de-productos), no desde esta pantalla.

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| No encuentro un subproducto que acabo de crear. | Se crea desde el Maestro, no desde acá. | Confirmá que lo diste de alta con **Crear Nuevo Producto** en el [Maestro de Productos](/user-guide/maestro-de-productos). |
| Un subproducto no descuenta stock al venderse. | Probablemente no tiene receta cargada, o no está vinculado como ingrediente de lo que se vendió. | Revisá la columna Ingredientes: si dice `—`, todavía no tiene receta. |

---

## ❓ Preguntas frecuentes

**¿Para qué sirve un subproducto si al final lo puedo vender igual que un producto normal?**
La diferencia es que el subproducto **lleva stock y costo propios**, elaborados por lote (por ejemplo, 20 kg de relleno de una sola vez). Eso permite reutilizarlo en varias recetas sin repetir los ingredientes crudos en cada una, y controlar cuánto tenés disponible.

**¿Todos los subproductos tienen que tener receta?**
No es obligatorio, pero sin receta no hay forma de que el sistema descuente sus ingredientes al producirlo, ni de calcular su costo automáticamente.
