# Estados de Items de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Estados de Items**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

Los Estados de Items de Comanda permiten gestionar el ciclo de vida individual de cada producto dentro de una misma comanda. A diferencia de los Estados de Comanda, que aplican al pedido completo de una mesa, los estados de items operan a nivel de cada plato o bebida por separado.

Esta funcionalidad resulta especialmente util en establecimientos donde los tiempos de preparacion varian significativamente entre productos. Por ejemplo, una entrada fria puede estar lista mucho antes que un plato principal de coccion prolongada. Mediante los estados de items, el personal de cocina puede notificar al mozo que determinados productos estan listos para ser retirados sin necesidad de esperar a que se complete la totalidad del pedido.

Los estados de item tipicos incluyen etapas como *Recibido*, *En Coccion*, *Emplatado*, *Listo* y *Anulado*.

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Se recomienda contar con el flujo de estados de comanda previamente configurado (ver seccion **Estados de Comanda**) antes de definir los estados individuales de items.

---

## Guia de Uso

### Creacion de un nuevo estado de item

1. Presionar el boton **Nuevo Estado de Item** ubicado en la parte superior de la pantalla.
2. En el campo **Nombre**, ingresar la denominacion de la etapa que se desea registrar (por ejemplo: "En Coccion", "Listo para Emplatar", "Marchando").
3. Configurar la opcion de **Notificacion al Mozo**, indicando si el ingreso de un item a este estado debe generar un aviso automatico al mozo asignado. Se recomienda activar esta opcion en estados que indiquen que un producto esta listo para ser retirado.
4. Presionar **Guardar** para registrar el estado en el sistema.

### Edicion de un estado existente

Seleccionar el estado en el listado, realizar las modificaciones necesarias en su nombre o configuracion de notificaciones, y presionar **Guardar** para confirmar los cambios.

### Uso en la pantalla KDS

Una vez configurados los estados de items, el personal de cocina puede actualizar el estado de cada producto de forma individual desde la tarjeta de comanda en la pantalla KDS. Al cambiar el estado de un item a una etapa que tenga notificaciones habilitadas, el sistema enviara automaticamente un aviso al mozo para que proceda al retiro parcial del pedido.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Nuevo Estado de Item** | Registra una nueva etapa en el ciclo de vida individual de los productos dentro de una comanda. |
| **Editar Estado de Item** | Permite modificar el nombre del estado y su configuracion de notificaciones. |
| **Activar Notificacion por Item** | Habilita el envio de avisos automaticos al mozo cuando un producto individual alcanza este estado, permitiendo el retiro parcial de platos. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El mozo no recibe aviso cuando un plato individual esta listo. | Acceder a la configuracion del estado de item correspondiente y verificar que la opcion **Notificar al Mozo** este activada. |
| No se puede cambiar el estado de un item en la pantalla KDS. | Verificar que existan estados de items configurados en el sistema. Si no se ha creado ningun estado de item, la funcionalidad de gestion individual por producto no estara disponible en la pantalla de cocina. |
| Se necesita diferenciar entradas y platos principales en el despacho. | Configurar estados de item que permitan marcar productos como listos de forma independiente. Activar las notificaciones en el estado de finalizacion para que el mozo pueda retirar las entradas sin esperar al resto del pedido. |
