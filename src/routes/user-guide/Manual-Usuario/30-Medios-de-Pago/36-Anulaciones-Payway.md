# Anulaciones Payway

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Anulaciones Payway**  
> **Usuarios habilitados:** Encargados de Local y Cajeros

---

## Descripcion General

Este modulo permite anular transacciones cobradas por error mediante las terminales POS Smart de Prisma Payway, siempre que el cierre de lote diario no haya sido realizado aun. La anulacion cancela el cobro de forma inmediata en la procesadora, evitando que el cargo se consolide en el resumen de tarjeta del cliente.

La diferencia fundamental entre una anulacion y un reembolso radica en el momento en que se realiza la operacion. Las anulaciones corresponden exclusivamente a cobros del dia actual dentro del lote abierto, mientras que los reembolsos aplican a cobros de dias anteriores cuyo lote ya fue cerrado y liquidado. Utilizar la via correcta garantiza la integridad del cierre de lote y evita discrepancias en la conciliacion.

Dado que la anulacion actua sobre el lote antes de su cierre, el cargo nunca llega a impactar definitivamente en la cuenta del cliente, lo que representa una solucion mas rapida y directa que el reembolso en terminos de acreditacion.

---

## Requisitos Previos

- Contar con el permiso de Anulacion de Transacciones de Cobro asignado al usuario.
- El cobro a anular debe haber sido realizado el mismo dia y el lote de la terminal correspondiente debe estar abierto. Para cobros de dias anteriores, utilizar el modulo de Reembolsos Payway.

---

## Guia de Uso

### Anular un cobro realizado en el dia

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Anulaciones Payway**.
2. Localizar la transaccion a anular en el listado de cobros del dia. Se puede identificar por numero de ticket, monto o caja de origen.
3. Seleccionar la transaccion y tocar el boton **Anular Transaccion**.
4. Ingresar el motivo de la anulacion en el campo habilitado.
5. Confirmar la operacion. El sistema enviara la solicitud de anulacion a la procesadora Payway y el cobro quedara sin efecto en el lote.
6. Verificar que la transaccion cambie su estado a Anulada en el listado.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Anular Transaccion** | Cancela de forma inmediata el cobro registrado en el lote abierto del dia, impidiendo que el cargo se consolide en el resumen de tarjeta del cliente. |
| **Ver Detalle** | Muestra la informacion completa de la transaccion seleccionada, incluyendo monto, tarjeta, caja y cajero que realizo el cobro, antes de confirmar la anulacion. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El sistema no permite anular el cobro y muestra un mensaje de error. | El lote del dia ya fue cerrado. Una vez cerrado el lote, las anulaciones no estan disponibles. En este caso, ingresar al modulo de Reembolsos Payway para gestionar la devolucion del importe al cliente. |
| El boton de Anular Transaccion no esta visible para el usuario. | El usuario no cuenta con el permiso de Anulacion de Transacciones de Cobro. Solicitar al administrador del sistema que asigne el permiso correspondiente al perfil del usuario desde la configuracion de roles. |
| La transaccion figura como Anulada pero el cliente reporta que el cargo aparece en su tarjeta. | Puede tratarse de una demora en la actualizacion del sistema del banco del cliente. Proporcionar al cliente el numero de operacion de la anulacion para que lo consulte con su entidad financiera. Si el cargo persiste despues de 48 horas habiles, contactar al soporte de Payway. |
