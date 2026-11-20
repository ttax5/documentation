# Listado de Reservas

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Reservas** → **Listado de Reservas**  
> **Usuarios habilitados:** Recepcionistas y Encargados de Salon

---

## Descripcion General

El Listado de Reservas es la pantalla de consulta y gestion de todos los turnos agendados para un dia o periodo determinado. Desde aqui, el personal de recepcion puede ver en orden cronologico las reservas del dia, conocer el estado de cada una y actuar en consecuencia cuando el cliente llega al local.

Cada reserva muestra los datos principales del grupo: nombre del cliente, horario de llegada, cantidad de comensales, observaciones especiales y el estado actual del turno. Los estados posibles permiten llevar un control de asistencia preciso: una reserva puede estar Pendiente de confirmacion, Confirmada por el cliente, Presente cuando el grupo ya fue sentado, o Cancelada si el turno fue anulado.

El modulo cuenta con filtros de fecha que permiten cambiar la vista entre el dia actual, dias anteriores o proximas fechas para anticipar la ocupacion del local. Esta vision de mediano plazo es especialmente util para los encargados que necesitan planificar el personal y la mise en place de los turnos siguientes.

---

## Requisitos Previos

- Contar con el permiso de Consulta y Recepcion de Reservas asignado al rol del usuario.
- Tener reservas previamente cargadas desde el modulo de Nueva Reserva para que el listado muestre resultados.

---

## Guia de Uso

### Consultar las reservas del dia

1. Ingresar al Listado de Reservas desde el menu Ventas → Reservas.
2. El sistema muestra por defecto las reservas correspondientes al dia actual en orden cronologico de horario de llegada.
3. Utilizar el **Filtro Fecha** para cambiar la vista y consultar reservas de otros dias o de la semana en curso.
4. Revisar las observaciones de cada reserva para preparar con anticipacion los requerimientos especiales de cada grupo.

### Recepcionar un cliente con reserva

1. Cuando el cliente llega al local, buscar su reserva en el listado del dia por nombre o por horario.
2. Verificar los datos del grupo: cantidad de comensales y observaciones especiales.
3. Tocar el boton **Sentar** u **Ocupar** en la fila de la reserva correspondiente.
4. El sistema asigna la mesa prevista para esa reserva y cambia su estado a ocupada en el Mapa de Mesas y el Salon de Ventas, iniciando el consumo activo de la mesa.

### Cancelar una reserva

1. Localizar la reserva que se desea cancelar en el listado.
2. Tocar el boton **Cancelar** en la fila correspondiente.
3. Ingresar el motivo de la cancelacion cuando el sistema lo solicite.
4. Confirmar la accion. La reserva queda marcada como cancelada y la disponibilidad del horario se libera.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Filtro Fecha** | Cambia el dia visualizado en el listado para consultar reservas pasadas, el dia actual o fechas futuras. |
| **Sentar / Ocupar** | Recepciona al cliente, abre la mesa asignada a la reserva y actualiza el estado a ocupada en el salon. |
| **Cancelar** | Anula la reserva seleccionada registrando el motivo de la cancelacion e informando la disponibilidad liberada. |
| **Paginador** | Navega entre las paginas del listado cuando la cantidad de reservas supera la vista de una sola pantalla. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| La reserva del cliente no aparece en el listado aunque fue cargada previamente. | Verificar que el filtro de fecha del listado coincida con la fecha en que se registro la reserva. Es posible que el filtro este mostrando otro dia. Ajustar la fecha del filtro para localizar el turno correspondiente. |
| El boton Sentar no responde o aparece inactivo para una reserva. | Confirmar que el usuario tiene el permiso de Recepcion de Reservas habilitado. Tambien verificar que la reserva no este en estado Cancelada, ya que las reservas canceladas no pueden ser activadas desde este listado. |
