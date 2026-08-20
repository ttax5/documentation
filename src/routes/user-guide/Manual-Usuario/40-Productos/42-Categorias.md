# Categorías

> **Dónde está:** Productos → **Categorías**
> **Para qué sirve:** agrupa los productos de la carta en rubros (Empanadas, Bebidas, Postres…) y define el orden en que aparecen.
> **Quién lo usa:** encargados de carta, administradores.

---

## 🧭 Antes de entrar acá

Las categorías se usan desde [Menú](/user-guide/menu), en la columna **Categoría** de cada producto. Podés crear categorías nuevas sobre la marcha, no hace falta tenerlas listas de antes.

---

## 📋 El listado

![Listado de categorías](images/productos/42-categorias/01-listado.webp)

El título de la pantalla es **"Categorías del Menú"**, con la leyenda *"Arrastrá para reorganizar · Las subcategorías se muestran anidadas"*.

### Acciones de cabecera

| Botón | Qué hace |
|---|---|
| **Ordenar A-Z** | Ordena alfabéticamente todas las categorías de una sola vez. |
| **Reparar árbol** | Corrige la estructura si quedó inconsistente. Es una acción de mantenimiento, no de uso diario. |
| **+ Nueva Categoría** | Abre el formulario para crear una categoría. |

Debajo hay un buscador (**Buscar categoría...**) con su botón **Buscar**.

### Cada fila de la lista

| Elemento | Qué es |
|---|---|
| **☰** (manija) | Para arrastrar y reordenar la categoría. |
| **Imagen** | La que se cargó en Apariencia Visual. |
| **Nombre** | El nombre de la categoría. |
| **"N productos"** | Cuántos productos tiene asignados. |
| **"En menú online"** | Indica si es visible en la tienda pública. |
| **Orden (`#-`)** | Solo informativo — se cambia arrastrando la fila, no se edita escribiendo. |
| ✏️ / 🗑️ | Aparecen al pasar el mouse sobre la fila: **Editar** y **Eliminar**. |

---

## 📝 El formulario (crear o editar)

![Formulario de categoría](images/productos/42-categorias/02-formulario-editar.webp)

Es el mismo formulario para crear una categoría nueva y para editar una existente.

### Información Básica

| Campo | Qué es |
|---|---|
| **Nombre de la Categoría** | El nombre del rubro. |
| **Categoría Padre** | Dejalo vacío para una categoría de nivel superior, o elegí otra para convertirla en subcategoría. |
| **Descripción** (opcional) | Texto visible en la tienda online. |
| **Orden de visualización** | Número. **Menor número aparece primero** (0 = primero). |
| **Categoría privada** | No la muestra en la tienda online. Para rubros internos que no querés que vea el cliente. |

### Apariencia Visual

| Campo | Qué es |
|---|---|
| **Imagen de la Categoría** | JPG o PNG, 500×500px recomendado. |
| **Color de Identificación** | Una paleta de colores predefinidos para identificar visualmente la categoría en la tienda. |

---

## ▶️ Cómo se usa

### Crear una categoría

1. Tocá **+ Nueva Categoría**.
2. Completá el **Nombre**.
3. Si es una subcategoría, elegí su **Categoría Padre**.
4. Opcional: descripción, orden, imagen y color.
5. Guardá.

### Convertir una categoría en subcategoría de otra

1. Editá la categoría (✏️).
2. En **Categoría Padre**, elegí la categoría que va a contenerla.
3. Guardá.

### Reordenar categorías

Arrastrá cada fila desde la manija **☰** hasta la posición que quieras. Si necesitás un orden alfabético rápido, usá **Ordenar A-Z** en vez de arrastrar una por una.

---

## 🔗 Cómo se conecta con el resto

**Alimenta a:**
- [Menú](/user-guide/menu) → las opciones de la columna Categoría de cada producto
- La tienda online (Pedimelo.online), si el menú está publicado

---

## ⚠️ Cuidado con esto

> ⚠️ **El orden del listado no se escribe, se arrastra.** El número `#-` de cada fila es solo informativo. Para cambiar el orden, arrastrá la fila desde la manija ☰.

> ⚠️ **La leyenda dice que las subcategorías aparecen anidadas, pero al 20/08/2026 no se ve así en la práctica.** Verificamos con una categoría que sí tiene **Categoría Padre** asignada en el formulario, y en el listado apareció igual que las demás, sin sangría. Si armás una jerarquía y no la ves reflejada visualmente, no es necesariamente un error tuyo — puede ser un problema del sistema. La relación padre-hijo igual queda guardada (se puede confirmar volviendo a entrar al formulario de edición).

---

## 🔧 Si algo no funciona

| Lo que ves | Por qué pasa | Cómo se arregla |
|---|---|---|
| No podés eliminar una categoría. | Probablemente tiene productos asociados. | Reubicá esos productos en otra categoría antes de eliminarla. |
| El árbol de categorías se ve raro o repetido. | La estructura quedó inconsistente. | Usá **Reparar árbol**. |
| Cargué una Categoría Padre pero no veo la subcategoría anidada en el listado. | Comportamiento inconsistente detectado en el sistema (ver advertencia arriba). | La relación se guardó igual; confirmalo reabriendo el formulario de edición de la categoría. |

---

## ❓ Preguntas frecuentes

**¿Puedo tener subcategorías dentro de subcategorías?**
El campo Categoría Padre no limita la profundidad, pero para mantener la carta legible conviene no anidar más de un nivel.

**¿Qué diferencia hay entre el Orden de una categoría y el Orden de un producto en el Menú?**
Son cosas distintas. El Orden de la categoría define en qué posición aparece el rubro entero (Empanadas antes que Bebidas, por ejemplo). El Orden de cada producto, en el [Menú](/user-guide/menu), define la posición del producto dentro de su categoría.
