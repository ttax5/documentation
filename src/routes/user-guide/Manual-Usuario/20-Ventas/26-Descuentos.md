# Descuentos

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Descuentos**  
> **Usuarios habilitados:** Encargados de Local y Administradores

---

## Descripcion General

El modulo de Descuentos permite configurar y administrar los porcentajes de bonificacion y promociones predefinidas que el sistema pone a disposicion del personal durante el proceso de cobro. En lugar de ingresar descuentos de forma manual en cada venta, los encargados y administradores configuran aqui los descuentos disponibles con su nombre y porcentaje, y el cajero los aplica desde la pantalla de cobro con un solo toque.

Algunos ejemplos habituales son descuentos fijos por tipo de cliente (Empleados 10%, Jubilados 15%) o por medio de pago (Efectivo 5%). Centralizar esta configuracion garantiza que todos los descuentos aplicados sean consistentes y esten previamente autorizados por la administracion, evitando bonificaciones discrecionales no controladas.

El modulo tambien permite establecer qué descuentos requieren autorizacion especial, como el ingreso de una clave de supervisor antes de ser aplicados. Esto agrega una capa de control sobre los descuentos de mayor impacto, asegurando que solo personal con autoridad suficiente pueda aplicarlos en caja.

![Listado de descuentos configurados con tabla de acciones](images/ventas/descuentos-listado.png)
_Pantalla de Descuentos con listado de bonificaciones, porcentajes configurados y acciones de edicion_

---

## Requisitos Previos

- Contar con el permiso de Aplicacion y Configuracion de Descuentos asignado al rol del usuario.
- Para crear o modificar descuentos es necesario tener un perfil de Encargado o Administrador.

---

## Guia de Uso

### Crear un nuevo descuento

1. Desde la pantalla de Descuentos, tocar el boton **Crear Descuento** ubicado en la parte superior de la pantalla.
2. Ingresar el nombre identificador del descuento, por ejemplo: "10% Empleados" o "15% Efectivo".
3. Ingresar el porcentaje de bonificacion que se aplicara sobre el total de la venta.
4. Configurar si el descuento requiere autorizacion de encargado antes de poder ser aplicado en caja.
5. Tocar **Guardar** para confirmar. El descuento quedara disponible de inmediato en la pantalla de cobro del Salon de Ventas y la Caja Rapida.

### Buscar un descuento existente

1. En el campo de busqueda de la pantalla, ingresar el nombre o parte del nombre del descuento que se desea localizar.
2. Tocar **Buscar** para filtrar el listado y ver los resultados coincidentes.
3. Desde el listado resultante es posible acceder a las acciones de Editar o Borrar el descuento seleccionado.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Crear Descuento** | Abre el formulario para registrar una nueva bonificacion con nombre y porcentaje definidos. |
| **Buscar** | Filtra el listado de descuentos por nombre para localizar rapidamente una bonificacion configurada. |
| **Editar** | Permite modificar el nombre, el porcentaje o la configuracion de autorizacion de un descuento existente. |
| **Borrar** | Elimina el descuento seleccionado del listado, dejandolo inaccesible desde la pantalla de cobro. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El cajero no puede aplicar un descuento durante el cobro y el boton aparece bloqueado. | El descuento esta configurado con requerimiento de autorizacion de supervisor. El encargado debe ingresar su clave para habilitar la aplicacion, o bien revisar la configuracion del descuento en este modulo para ajustar el nivel de autorizacion requerido. |
| Un descuento creado no aparece disponible en la pantalla de cobro. | Verificar que el descuento fue guardado correctamente y que el porcentaje es mayor a cero. Tambien confirmar que el rol del cajero tiene permiso para ver y aplicar descuentos durante el cobro. |
