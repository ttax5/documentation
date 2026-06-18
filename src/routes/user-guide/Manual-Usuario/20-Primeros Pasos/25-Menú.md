# Configuración del Menú

<div id="configurar-menu"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🎯</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Vas a configurar toda la oferta comercial de tu negocio: comidas, bebidas, postres, etc. Sin el menú configurado, el sistema no tendrá productos para tomar pedidos ni registrar ventas.
	</div>
</div>

---

## 📚 Conceptos Básicos

### 🍽️ 1. El Menú o Carta
Es la lista de precios o carta digital que ven tus clientes y mozos con los platos y bebidas que ofreces.

<div class="doc-callout doc-callout-tip">
	<span>💡</span>
	<div>
		<strong>Dato útil:</strong> El nombre "Menú" es completamente configurable. Podés renombrarlo como "Carta", "Lista de Precios" o "Tarifario" según tu conveniencia comercial.
	</div>
</div>

### 🥘 2. Tipos de Productos
Un producto es cualquier elemento que vendés, fabricás o comprás. Se dividen en:
*   **Maestro de Productos:** El catálogo completo de todos los ítems existentes en el sistema (insumos, mercaderías de reventa, platos elaborados y subproductos).
*   **Productos para la Venta:** Los artículos que se muestran en el menú y que el cliente puede pedir (ej. *Pizza Margarita*, *Coca-Cola*).
*   **Subproductos:** Preparaciones intermedias que **no se venden de forma directa** al cliente pero forman parte de otras recetas (ej. *Salsa Fileto*, *Masa de Pizza*).

### ⚙️ 3. Variantes y Modificadores
Opciones asociadas a un producto para personalizarlo al tomar el pedido (ej. variante *Punto de Cocción de la Carne*, con opciones *Jugoso*, *A punto*, *Cocido*).

### 🏷️ 4. Categorías y Subcategorías
Estructura jerárquica para agrupar tus productos de forma visual y ordenada.

**Ejemplo de árbol de categorías:**
```text
Menú Principal
├── Entradas
├── Pastas
│   ├── Tallarines
│   └── Ravioles
└── Bebidas
    ├── Con Alcohol
    │   └── Cerveza
    └── Sin Alcohol
        ├── Coca Cola
        └── Sprite
```

### 👨‍🍳 5. Recetas e Ingredientes
*   **Receta:** La composición exacta para elaborar un producto, detallando cantidades y costos de insumos.
*   **Ingredientes:** Mercaderías básicas (ej. *harina*, *aceite*) o subproductos (ej. *salsa fileto*) que componen la receta de un plato elaborado.

---

## 🎯 Guía de Configuración paso a paso

### 📂 Etapa 1: Crear tu primer Menú o Carta

1. Hacé clic en **Productos** dentro del menú lateral.
2. Seleccioná la opción **Menú**.
3. Presioná el botón **+ Crear Nuevo**.
4. Nombre recomendado: `Menú Principal`.
5. Hacé clic en **Guardar**.

---

### 🗂️ Etapa 2: Estructurar tus Categorías

<div id="categorias"></div>

1. Ingresá a la sección **Categorías** dentro del panel de Productos.
2. Hacé clic en **Crear Categoría**.
3. Escribí el nombre (ej. *Platos Principales* o *Bebidas*).
4. Presioná **Guardar**.

**Estructura inicial sugerida:**
*   🥪 **Entradas:** Empanadas, papas fritas, fiambres.
*   🍝 **Platos Principales:** Carnes, minutas, pastas.
*   🍷 **Bebidas con Alcohol:** Cervezas, vinos, tragos.
*   🥤 **Bebidas sin Alcohol:** Aguas, gaseosas, jugos.
*   🍰 **Postres:** Flan, helado, tortas.

---

### ⚙️ Etapa 3: Crear Variantes y Guarniciones

<div id="variantes"></div>

1. Dirigite a **Variantes** en el menú.
2. Seleccioná **Crear Variante** y asignale un nombre (ej. *Guarnición*).
3. Agregá las opciones disponibles y sus recargos de precio si aplican:
   *   *Papas fritas* (+$0)
   *   *Puré de papas* (+$100)
   *   *Ensalada mixta* (+$150)
4. Ingresá al producto correspondiente (ej. *Milanesa*), buscá **Asignar Variante** y elegí *Guarnición*.

---

### 🍔 Etapa 4: Agregar Productos al Menú

<div id="agregar-productos"></div>

1. Dentro de tu Menú, seleccioná **Nuevo Producto**.
2. Completá los campos obligatorios del formulario:

| Campo | Requisito | Propósito |
| :--- | :--- | :--- |
| **Nombre** | 🔴 Obligatorio | Nombre comercial que verá el cliente y el mozo (ej. *Milanesa Napolitana*). |
| **Categoría** | 🔴 Obligatorio | Clasifica el plato dentro del menú (ej. *Platos Principales*). |
| **Precio** | 🔴 Obligatorio | Precio de venta al público en moneda local. |
| **Impuestos** | 🔴 Obligatorio | Alícuota de IVA aplicable (ej. *21%* o *10.5%*). |
| **Impresora de Destino** | 🔴 Obligatorio | Indica por qué ticketera se imprimirá la comanda (ej. *Cocina* o *Barra*). |
| **Nombre en Ticket** | ⚪ Opcional | Nombre abreviado para la comandera física (ej. *Mila Napo*). |

---

### 💾 Etapa 5: Guardar y Validar
1. Revisá los campos cargados en la ficha.
2. Presioná **Guardar**.
3. ¡Felicidades! Tu producto ya está listo para ser vendido en el salón.

---

## 💡 Consejos prácticos para el Menú

*   ✔️ **Carga Progresiva:** Empezá cargando tus 10 o 15 productos más vendidos para hacer las primeras pruebas de caja.
*   ✔️ **Abreviaciones Inteligentes:** El campo **Nombre en Ticket** es de gran ayuda para que el personal de cocina lea las comandas de forma rápida.
*   ✔️ **Categorías Simples:** No crees demasiadas categorías secundarias; mantiene la navegación en pantallas táctiles lo más limpia posible.

---

## 🚨 Referencia de errores comunes

*   **¿El botón "Guardar" está deshabilitado?**
    *   *Solución:* Aseguráse de haber completado todos los campos obligatorios del formulario (Nombre, Categoría, Precio e Impuestos).
*   **¿El producto no aparece en la pantalla de ventas del mozo?**
    *   *Solución:* Verificá que el producto esté marcado como "Activo" y que pertenezca al Menú que se encuentra actualmente asignado a ese Punto de Venta.
*   **¿La comanda de este producto no se imprime en cocina?**
    *   *Solución:* Revisá la ficha del producto y confirmá que tiene seleccionada la impresora destino adecuada (Cocina). Si dice "Ninguna", el sistema no generará el ticket de comandas.



