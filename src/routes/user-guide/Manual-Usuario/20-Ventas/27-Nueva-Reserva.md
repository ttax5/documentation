# Nueva Reserva

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Reservas** → **Nueva Reserva**  
> **Usuarios habilitados:** Recepcionistas, Mozos y Encargados

---

## Descripcion General

El modulo de Nueva Reserva permite registrar en el sistema los turnos de comensales agendados a futuro. A traves de este formulario, el personal de recepcion puede tomar reservas telefonicas o presenciales ingresando los datos del cliente, la fecha y horario de llegada, la cantidad de personas y cualquier observacion especial que sea relevante para preparar la atencion: celebraciones de cumpleaños, necesidad de silla de bebe, requerimientos dieteticos u otros pedidos anticipados.

Contar con un registro de reservas organizado permite al equipo del salon anticipar la ocupacion del local, preparar las mesas necesarias para cada franja horaria y asignar el personal de forma adecuada segun la demanda esperada. Esto mejora la experiencia del cliente, que llega y encuentra su lugar reservado y listo, y facilita la planificacion operativa del turno.

Cuando se carga una reserva, el sistema la registra en el Listado de Reservas del dia correspondiente, donde puede ser consultada, confirmada, modificada o cancelada por el personal de recepcion al momento de la llegada del cliente.

---

## Requisitos Previos

- Contar con el permiso de Gestion de Reservas asignado al rol del usuario.
- Tener configurados los sectores y mesas del local para poder asignar disponibilidad a los horarios.

---

## Guia de Uso

### Registrar una nueva reserva

1. Ingresar al modulo de Nueva Reserva desde el menu Ventas → Reservas.
2. Seleccionar la **Fecha** del turno y el **Horario** de llegada previsto del cliente.
3. Indicar la cantidad de **Comensales** que asistiran.
4. En el campo **Cliente**, buscar si el comensal ya tiene un registro en la base de datos ingresando su nombre o telefono. Si no existe, registrar los datos basicos: nombre y telefono de contacto.
5. Agregar en el campo de **Observaciones** cualquier indicacion especial: "festejo de cumpleaños", "silla de bebe", "alergia al gluten" u otros datos relevantes para la preparacion.
6. Tocar **Guardar Reserva** para confirmar el registro. La reserva quedara visible en el Listado de Reservas del dia correspondiente.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Fecha y Hora** | Define el dia y el horario de llegada previsto del grupo de comensales que realiza la reserva. |
| **Comensales** | Indica la cantidad de personas del grupo para dimensionar el espacio y la mesa necesaria. |
| **Cliente** | Busca un cliente existente en la base de datos o permite registrar los datos basicos de un nuevo comensal. |
| **Observaciones** | Campo de texto libre para registrar pedidos especiales, indicaciones o informacion relevante para la preparacion de la mesa. |
| **Guardar Reserva** | Confirma y registra la reserva en el sistema, dejandola disponible en el Listado de Reservas del dia. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No hay mesas disponibles para el horario solicitado y el sistema indica sector completo. | Ofrecer al cliente un horario alternativo o verificar si es posible agregar una mesa al sector desde el modulo de Administracion de Mesas antes de confirmar la reserva. |
| La reserva fue guardada pero no aparece en el Listado de Reservas del dia. | Verificar que la fecha seleccionada al guardar la reserva sea la correcta. Ingresar al Listado de Reservas y controlar el filtro de fecha para confirmar que coincide con la fecha en la que se registro el turno. |
