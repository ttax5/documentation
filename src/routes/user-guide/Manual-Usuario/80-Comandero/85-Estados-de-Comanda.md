# Estados de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Estados de Comanda**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

Los Estados de Comanda definen las etapas por las que transita un pedido completo dentro del flujo de trabajo del sistema de comandas. Cada estado representa una fase del proceso de preparacion y despacho, desde que la orden ingresa al sistema hasta que es entregada al cliente.

Los estados predeterminados del sistema incluyen etapas como *Ingresada*, *En Preparacion*, *Lista* y *Entregada*, aunque pueden ser personalizados segun las necesidades operativas del establecimiento. Esta seccion permite configurar el nombre, el color visual y el comportamiento de notificaciones de cada estado, adaptando el flujo de trabajo a la operatoria particular de cada cocina.

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Se recomienda definir previamente el flujo operativo deseado para la cocina antes de modificar los estados predeterminados.

---

## Guia de Uso

### Consulta de estados existentes

Al ingresar a la seccion, el sistema presenta el listado completo de estados de comanda configurados, mostrando su nombre, color asociado y configuracion de notificaciones. Los estados se presentan en el orden secuencial en que se aplican durante el ciclo de vida de un pedido.

### Modificacion de un estado

1. Seleccionar el estado que se desea modificar haciendo clic sobre su nombre en el listado.
2. En el campo **Nombre**, ajustar la denominacion de la etapa segun la terminologia utilizada en el establecimiento (por ejemplo: cambiar "Lista" por "Despachar" o "En Preparacion" por "En Coccion").
3. En el selector de **Color**, definir el color de resalte que se aplicara a la tarjeta de comanda en la pantalla KDS cuando el pedido se encuentre en este estado. Se recomienda utilizar colores distinguibles entre si para facilitar la identificacion visual rapida.
4. En la seccion de **Alertas**, activar o desactivar las notificaciones automaticas al mozo que se generan cuando un pedido ingresa a este estado.
5. Presionar **Guardar** para aplicar los cambios en todas las pantallas KDS del sistema.

### Configuracion de notificaciones

Cada estado permite activar el envio de avisos automaticos al mozo asignado al pedido. Esta funcionalidad resulta especialmente util en estados como *Listo* o *Despachar*, donde el mozo necesita ser informado para proceder al retiro de los platos.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Editar Estado** | Permite modificar el nombre, color visual y configuracion de alertas del estado seleccionado. |
| **Asignar Color** | Define el color de fondo o borde de la tarjeta de comanda en la pantalla KDS para el estado seleccionado. |
| **Activar Notificacion al Mozo** | Habilita el envio de avisos automaticos al salon cuando un pedido alcanza este estado. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No es posible eliminar un estado del sistema. | Los estados nativos del sistema no pueden ser eliminados, ya que forman parte del flujo operativo base. Sin embargo, es posible modificar su nombre y color, o desactivarlos si no se utilizan en la operatoria del establecimiento. |
| Los colores de las tarjetas en la pantalla KDS no se actualizan. | Verificar que los cambios hayan sido guardados correctamente. Si el problema persiste, actualizar la pagina del navegador en el dispositivo KDS. |
| El mozo no recibe notificaciones cuando un pedido esta listo. | Verificar que el estado correspondiente tenga activada la opcion de notificacion al mozo. Consultar ademas que el dispositivo del mozo tenga las notificaciones habilitadas. |
