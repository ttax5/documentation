# Configurar Menú

> **Dónde está:** Productos → **Menú** → botón **⚙️ Configurar**
> **Para qué sirve:** define cómo se llama, se ve y se comporta el menú — incluido si es una carta pública online.
> **Quién lo usa:** administradores.

---

## 🧭 Antes de entrar acá

Esta pantalla edita el menú en sí, no un producto puntual. No hay requisitos previos: se puede configurar apenas se crea el menú.

---

![Formulario Configurar Menú](images/productos/41-menu-configurar/01-configurar-menu-completo.webp)

## 📄 Información General

| Campo | Qué es |
|---|---|
| **ID / Alias** | El identificador del menú. **No se puede modificar una vez creado.** |
| **Nombre del Menú** | El nombre visible del menú. |
| **Categoría Principal** | Desde qué categoría se muestran los productos. |

> 💡 **Todo menú tiene una versión pública.** El sistema muestra: *"El menú público en Pedimelo.online será: /menus/&lt;alias&gt;"*. Por eso el alias no se puede cambiar después: es parte de la dirección web del menú.

---

## ⚡ Funcionalidades

Tres casillas que habilitan el menú como carta online:

| Opción | Qué hace |
|---|---|
| **Con Carrito de Compras** | Permite que el cliente arme un pedido antes de confirmarlo. |
| **Login Obligatorio** | Requiere que el usuario inicie sesión para realizar pedidos. |
| **Pago Online Habilitado** | Usa MercadoPago configurado para este comercio. |
| **Publicar en Pedimelo.online** | Hace público el menú en la dirección `/menus/<alias>`. |

---

## 🛎️ Tipos de Servicio Disponibles

Marcá cuáles aplican a este menú: **Delivery**, **Take Away**, **Salón**.

---

## 🎨 Personalización Visual

| Campo | Qué es |
|---|---|
| **Imagen del Menú** | JPG o PNG. Tamaño recomendado 1200×630px. |
| **Color Principal** | Código hexadecimal o nombre en inglés del color principal del menú. |

---

## 👥 Usuarios con Acceso al Menú

> "Marca los usuarios que podrán ver y usar este menú en el módulo salón. Si un usuario NO está marcado, no tendrá acceso a este menú."

Lista de **Usuarios de mi Comercio** y **Usuarios Genéricos**. Solo los marcados pueden operar este menú desde el salón.

---

## 🔗 Cómo se conecta con el resto

- Vuelve a: [Menú](/user-guide/menu)
- Si activás **Publicar en Pedimelo.online**, el menú queda expuesto públicamente con la [Categoría Principal](/user-guide/categorias) que elijas acá
- Los **usuarios con acceso** deben existir antes en la gestión de usuarios del sistema

---

## ⚠️ Cuidado con esto

> ⚠️ **El alias es definitivo.** Una vez creado el menú, no se puede cambiar el ID/Alias. Si publicaste el menú online, cambiar de idea implica crear un menú nuevo con otro alias.

> ⚠️ **Un usuario no marcado no ve el menú.** Si armaste un menú nuevo y un mozo dice que no lo encuentra, revisá primero la lista de **Usuarios con Acceso al Menú**.

---

## ❓ Preguntas frecuentes

**¿Necesito activar "Publicar en Pedimelo.online" para usar el menú en el salón?**
No. Un menú interno (para mozos y caja) no necesita publicarse online. Esa opción es solo para exponerlo como carta pública.

**¿Qué pasa si no marco ningún tipo de servicio?**
El menú sigue funcionando puertas adentro, pero conviene marcar al menos uno si vas a usarlo como carta pública, para que el cliente sepa bajo qué modalidad puede pedir.
