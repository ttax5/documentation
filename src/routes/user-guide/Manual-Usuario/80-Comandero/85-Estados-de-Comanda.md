# Estados de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Estados de Comanda**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

Los Estados de Comanda definen las etapas por las que transita un pedido completo (el pedido de una mesa) dentro del flujo de trabajo del sistema de comandas. Cada estado representa una fase del proceso de preparacion y despacho, avanzando secuencialmente de izquierda a derecha.

El flujo tipico comprende estados como *Pendiente* (1 de 5), *Confirmada* (2 de 5), *Marchando* (3 de 5), *Saliendo* (4 de 5) y *Listo* (5 de 5). Esta configuracion permite definir el nombre, su posicion relativa en la secuencia y los colores representativos.

![Flujo de Estados de Comanda](images/comandero/estados-flujo.png)
_Diagrama secuencial del ciclo de vida de una comanda en el sistema_

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Se recomienda definir previamente el flujo operativo deseado para la cocina antes de crear o modificar los estados.

---

## Guia de Uso

### Visualizacion del flujo de estados

Al ingresar a la seccion, el sistema presenta la representacion grafica del flujo con las tarjetas de cada estado ordenadas cronologicamente (1 de N, 2 de N, etc.) con sus respectivos colores identificatorios.

### Agregar un nuevo estado al flujo

1. Presionar el boton **+ Agregar Estado** ubicado en la esquina superior derecha.
2. En el formulario modal:
   - **Nombre:** Ingresar la denominacion del estado (por ejemplo: "En Preparacion", "Marchando").
   - **Estado anterior:** Seleccionar que estado precede al nuevo estado dentro del flujo.
   - **Estado posterior:** Seleccionar que estado le sigue en la transicion.
   - **Colores:** Seleccionar o ingresar el color distintivo para identificar visualmente este estado en la pantalla KDS.
3. Presionar **Guardar** para confirmar e incorporar el estado al flujo.

![Formulario para agregar estado de comanda](images/comandero/estados-agregar.png)
_Modal de configuracion de nuevo estado de comanda_

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **+ Agregar Estado** | Abre el formulario para intercalar o anadir una nueva etapa al ciclo de vida de la comanda. |
| **Definir Transiciones** | Permite enlazar el estado anterior y posterior para estructurar el orden del flujo. |
| **Asignar Colores** | Configura el color visual de la tarjeta de estado para rapida identificacion en cocina. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No es posible eliminar un estado del sistema. | Los estados nativos del sistema no pueden ser eliminados, ya que forman parte del flujo operativo base. Sin embargo, es posible modificar su nombre y color, o desactivarlos si no se utilizan en la operatoria del establecimiento. |
| Los colores de las tarjetas en la pantalla KDS no se actualizan. | Verificar que los cambios hayan sido guardados correctamente. Si el problema persiste, actualizar la pagina del navegador en el dispositivo KDS. |
| El mozo no recibe notificaciones cuando un pedido esta listo. | Verificar que el estado correspondiente tenga activada la opcion de notificacion al mozo. Consultar ademas que el dispositivo del mozo tenga las notificaciones habilitadas. |
