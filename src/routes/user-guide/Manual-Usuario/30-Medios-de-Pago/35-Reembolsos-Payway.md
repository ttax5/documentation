# Reembolsos Payway

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Reembolsos Payway**  
> **Usuarios habilitados:** Encargados de Local y Contadores

---

## Descripcion General

Este modulo permite procesar devoluciones parciales o totales de cobros efectuados mediante tarjetas procesadas por Prisma Payway, en los casos en que el lote de operaciones del dia ya fue cerrado. A traves de este modulo, el sistema envia la solicitud de reembolso directamente a la procesadora, que acredita el importe correspondiente en la tarjeta del cliente en los plazos establecidos por la entidad financiera.

El reembolso es el mecanismo de devolucion correcto cuando el cobro fue realizado en un dia anterior al dia actual. Esta distincion es importante: si el cobro fue realizado el mismo dia y el lote aun no fue cerrado, la operacion correcta es una anulacion y no un reembolso. Utilizar el canal equivocado puede generar inconsistencias en la conciliacion del lote.

El modulo mantiene un historial detallado de todos los reembolsos procesados, con informacion del cupon original, el monto devuelto, la fecha de solicitud y el estado de la devolucion, facilitando el seguimiento de cada caso tanto para el area de atencion al cliente como para el equipo contable.

---

## Requisitos Previos

- Contar con el permiso de Procesamiento de Reembolsos y Devoluciones asignado al usuario.
- El lote del dia en que se realizo el cobro original debe encontrarse cerrado. Si el cobro fue realizado en el dia actual y el lote aun esta abierto, utilizar el modulo de Anulaciones Payway.

---

## Guia de Uso

### Procesar una devolucion parcial o total

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Reembolsos Payway**.
2. Localizar la operacion original utilizando el buscador. Se puede buscar por numero de cupon, fecha del cobro o monto de la transaccion.
3. Seleccionar la transaccion encontrada en el listado de resultados.
4. Tocar el boton **Solicitar Reembolso**.
5. Ingresar el monto a devolver en el campo habilitado. Puede ser el total de la transaccion o un importe parcial segun corresponda.
6. Revisar los datos del reembolso y tocar **Confirmar Reembolso** para ejecutar la operacion de forma definitiva.
7. Verificar que el sistema muestre la confirmacion del reembolso procesado y registrar el numero de operacion para seguimiento.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Solicitar Reembolso** | Inicia el proceso de devolucion electronica, abriendo el formulario donde se especifica el monto a reintegrar al cliente. |
| **Confirmar Reembolso** | Ejecuta la operacion de devolucion de manera definitiva, enviando la solicitud a la procesadora Payway para su acreditacion en la tarjeta del cliente. |
| **Ver Historial** | Muestra el listado de todos los reembolsos procesados anteriormente, con fecha, monto, cupon de origen y estado de cada devolucion. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El sistema devuelve un error al intentar procesar el reembolso. | La causa mas frecuente es que la tarjeta del cliente haya expirado o sido dada de baja desde la fecha del cobro original. En ese caso, el reembolso electronico no puede ejecutarse y es necesario contactar al soporte de Payway para gestionar la devolucion por un canal alternativo. |
| El boton de Solicitar Reembolso no esta disponible para una transaccion. | Verificar que el lote correspondiente al dia del cobro este cerrado. Si el cobro fue realizado el mismo dia y el lote aun esta abierto, la operacion correcta es una anulacion. Ir al modulo de Anulaciones Payway en su lugar. |
| El reembolso fue confirmado pero el cliente no recibio el credito en su tarjeta. | Los plazos de acreditacion dependen de la entidad financiera del cliente y pueden demorar entre 48 horas y varios dias habiles. Proporcionar al cliente el numero de operacion del reembolso para que pueda realizar el seguimiento con su banco. |
