# Cierres de Lote (Prisma Payway)

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Cierres Payway**  
> **Usuarios habilitados:** Cajeros, Encargados de Cierre y Contadores

---

## Descripcion General

Este modulo permite realizar y auditar los cierres de lote diarios de las terminales de pago POS Smart de Prisma Payway vinculadas al comercio. El cierre de lote es la operacion mediante la cual todas las transacciones acumuladas durante el dia en una terminal son enviadas a la procesadora de tarjetas para su liquidacion, dando inicio al proceso de acreditacion de los fondos en la cuenta bancaria del comercio.

Realizar el cierre de lote es una tarea obligatoria al finalizar cada jornada operativa. Si el lote no se cierra, las transacciones del dia quedan en estado pendiente y los fondos no son acreditados por la entidad financiera. Ademas, mientras el lote permanezca abierto, no es posible procesar reembolsos de las operaciones del dia mediante el modulo de Reembolsos Payway.

El modulo tambien ofrece acceso al historico de cierres realizados, con los totales discriminados por tipo de tarjeta (credito y debito), lo que facilita la conciliacion bancaria y el control del flujo de ingresos del comercio en cada periodo.

---

## Requisitos Previos

- Contar con el permiso de Cierre de Lote de Posnets asignado al usuario.
- Las terminales Payway deben estar encendidas, conectadas a la red y sin transacciones pendientes de comunicacion con la procesadora.
- Verificar que no queden ventas en proceso de cobro activas en ninguna caja antes de ejecutar el cierre.

---

## Guia de Uso

### Realizar el cierre de lote al finalizar el dia

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Cierres Payway**.
2. Verificar que no queden ventas pendientes de cobro en las terminales listadas.
3. Seleccionar la terminal o terminales sobre las que se realizara el cierre si el local cuenta con varios dispositivos.
4. Tocar el boton **Cerrar Lote**.
5. El sistema enviara la orden de cierre a las terminales seleccionadas, que procesaran el envio de transacciones a Prisma Payway.
6. Una vez completado el proceso, el sistema emitira el comprobante de cierre de lote con el resumen de totales liquidados.
7. Tocar **Imprimir Resumen** para obtener el comprobante en la impresora fiscal o de comandas si se requiere una copia fisica.

### Consultar el historico de cierres anteriores

1. En el listado principal del modulo, revisar los cierres registrados con sus fechas correspondientes.
2. Localizar el cierre de la fecha a consultar.
3. Tocar **Ver Historial de Cierres** o seleccionar el registro para visualizar los totales de credito, debito y monto liquidado de ese dia.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Cerrar Lote** | Ejecuta la orden de cierre de lote a las terminales seleccionadas, enviando todas las transacciones del dia a la procesadora Payway para su liquidacion bancaria. |
| **Imprimir Resumen** | Imprime el comprobante del cierre de lote con los totales discriminados por tipo de tarjeta en la impresora fiscal o de comandas configurada. |
| **Ver Historial de Cierres** | Permite consultar los cierres realizados en fechas anteriores, con sus totales de credito, debito y monto total liquidado por cierre. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| La posnet no responde al ejecutar el cierre de lote. | Puede deberse a una interrupcion momentanea de la conexion a internet o a la red WiFi del local. Verificar la conectividad de la terminal, reiniciarla si es necesario, y reintentar el cierre desde el sistema. Como alternativa, es posible ejecutar el cierre directamente desde el teclado fisico de la terminal siguiendo el procedimiento manual de Payway. |
| El sistema no permite realizar un segundo cierre de lote en el mismo dia para la misma terminal. | Payway solo permite un cierre de lote diario por terminal. Si ya se realizo el cierre del dia, no es posible ejecutar otro hasta la siguiente jornada. Verificar el comprobante del cierre realizado para confirmar que las transacciones fueron incluidas correctamente. |
| El monto del cierre de lote no coincide con el total de ventas registradas en el sistema. | Verificar que todas las transacciones del dia figuren con estado Aprobada en el modulo de Transacciones Payway. Las diferencias pueden deberse a anulaciones realizadas durante el dia o a transacciones rechazadas que el sistema conto como ventas. Comparar el detalle del lote con el reporte de ventas del dia. |
