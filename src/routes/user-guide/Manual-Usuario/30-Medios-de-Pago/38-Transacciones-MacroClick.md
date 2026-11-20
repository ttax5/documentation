# Transacciones Macro Click de Pagos

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Transacciones MacroClick**  
> **Usuarios habilitados:** Cajeros y Contadores

---

## Descripcion General

Este modulo muestra el detalle y permite el control de las operaciones de pago realizadas mediante la pasarela Macro Click de Pagos del Banco Macro. Desde aqui el personal de caja y el area contable pueden verificar el estado de cada cobro electronico procesado por este canal, ya sea a traves de un boton de pago digital o de un enlace de cobro enviado al cliente.

El modulo centraliza la informacion necesaria para confirmar que un pago acreditado por el cliente efectivamente ingreso al sistema, mostrando datos como el numero de transferencia, la referencia de la operacion, el monto cobrado y el estado de la acreditacion en la cuenta bancaria del comercio. Esta informacion es fundamental para autorizar la entrega de un pedido cuando el cliente pago por canal digital.

La conciliacion bancaria mediante este modulo permite comparar los registros internos del sistema con el resumen de movimientos de la cuenta bancaria, utilizando el numero de transferencia y la referencia de cada operacion como puntos de control. El procesador MacroClick debe estar configurado y activo en el modulo de Configuracion de Procesadores para que las transacciones sean reportadas en esta pantalla.

---

## Requisitos Previos

- Contar con el permiso de Consulta de Transacciones MacroClick asignado al usuario.
- El procesador MacroClick debe estar configurado con sus credenciales y marcado como activo en el modulo de Configuracion de Procesadores.

---

## Guia de Uso

### Verificar el estado de un pago recibido por MacroClick

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Transacciones MacroClick**.
2. Ingresar el numero de orden, numero de referencia o dato identificatorio del cliente en la casilla de busqueda.
3. Tocar **Buscar** para localizar la transaccion.
4. Verificar el estado que figura en la columna correspondiente. Si la operacion figura como Aprobada o Acreditada, el pago fue confirmado por el banco.
5. Si la transaccion aun figura como Pendiente o En Proceso, tocar el boton **Actualizar Estado** para que el sistema consulte en tiempo real con la plataforma de Banco Macro si el cobro fue acreditado.

### Conciliar pagos con el resumen bancario

1. Definir el rango de fechas a conciliar usando el filtro de fechas del encabezado del modulo.
2. Tocar **Buscar** para listar todas las transacciones del periodo.
3. Comparar cada registro del sistema con los movimientos del resumen bancario, utilizando el numero de transferencia y la referencia de operacion como claves de comparacion.
4. Para cualquier operacion con discrepancia, tocar **Ver Detalle** para acceder a la informacion completa de la transaccion y obtener los datos necesarios para la gestion con el banco.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Buscar** | Filtra las transacciones registradas por numero de referencia, numero de orden o datos del cliente para localizar una operacion especifica. |
| **Actualizar Estado** | Realiza una consulta en tiempo real al servicio de Banco Macro para sincronizar el estado de acreditacion del cobro seleccionado con la informacion disponible en la pasarela. |
| **Ver Detalle** | Despliega la informacion completa de la transaccion seleccionada, incluyendo numero de transferencia, referencia, monto, fecha de cobro y estado de acreditacion. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El cliente confirma que realizo el pago pero la transaccion figura como Pendiente en el sistema. | Puede tratarse de una demora en el envio del webhook de notificacion por parte del banco. Tocar el boton Actualizar Estado para forzar una consulta directa con la plataforma de Macro Click y sincronizar el estado del cobro. Si el problema persiste despues de varios minutos, consultar el resumen de la cuenta bancaria para confirmar si el acreditacion se realizo. |
| No se encuentran transacciones del dia en el listado. | Verificar que el filtro de fechas este configurado correctamente con el dia actual como fecha de busqueda. Confirmar ademas que el procesador MacroClick se encuentre activo en el modulo de Configuracion de Procesadores. Si el procesador esta inactivo, las transacciones no seran reportadas en este modulo. |
| El boton Actualizar Estado devuelve un error de comunicacion con la pasarela. | Verificar que el comercio cuente con conexion a internet activa. Si la conexion es correcta, puede existir una interrupcion temporal en el servicio de Banco Macro. Reintentar despues de unos minutos o consultar el estado del servicio con el soporte del banco. |
