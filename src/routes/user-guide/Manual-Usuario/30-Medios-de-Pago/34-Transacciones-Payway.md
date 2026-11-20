# Transacciones Payway

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Transacciones Payway**  
> **Usuarios habilitados:** Cajeros, Encargados de Local y Contadores

---

## Descripcion General

Este modulo muestra el historial completo y el estado en tiempo real de todos los cobros procesados mediante las terminales POS Smart de Prisma Payway. Permite consultar transacciones aprobadas, rechazadas o pendientes, brindando al personal de caja y al area contable una vision detallada de la actividad de cobro con tarjetas.

Cada registro incluye informacion critica de la operacion: numero de cupon, numero de lote, tipo y ultimos digitos de la tarjeta utilizada, monto procesado, fecha y hora de la transaccion, y el estado final devuelto por la procesadora. Esta informacion es fundamental para resolver disputas con clientes, auditar cobros y realizar conciliaciones con los resumenes de tarjeta.

El modulo funciona como registro de auditoria permanente, permitiendo rastrear cualquier cobro realizado por las posnets vinculadas al comercio sin importar que caja lo proceso o que cajero estaba operando en ese momento.

---

## Requisitos Previos

- Contar con el permiso de Auditoria de Transacciones Payway asignado al usuario.
- Las terminales Payway deben estar vinculadas y operativas para que sus transacciones sean reportadas en este modulo.

---

## Guia de Uso

### Consultar un cobro especifico con tarjeta

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Transacciones Payway**.
2. Ingresar la fecha del cobro en el filtro de **Fecha** o definir un rango en el selector de **Rango de Fechas**.
3. Escribir el numero de cupon, numero de ticket o monto en la casilla de busqueda para localizar la transaccion.
4. Tocar **Buscar** para aplicar los filtros ingresados.
5. Verificar que la columna **Estado** de la transaccion encontrada indique Aprobada.
6. Tocar **Ver Detalle** para acceder a la informacion completa de la operacion.

### Filtrar transacciones por rango de fechas

1. En el encabezado del modulo, seleccionar la fecha inicial en el primer campo del selector de **Rango de Fechas**.
2. Seleccionar la fecha final en el segundo campo del selector.
3. Tocar **Buscar** o el boton de aplicar filtro para que el listado muestre unicamente las transacciones del periodo indicado.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Buscar** | Filtra las transacciones registradas por numero de ticket, numero de cupon, monto u otros criterios disponibles en el encabezado del listado. |
| **Rango de Fechas** | Permite definir un periodo especifico para visualizar unicamente los cobros realizados entre la fecha inicial y la fecha final seleccionadas. |
| **Ver Detalle** | Despliega la informacion completa de la transaccion seleccionada, incluyendo numero de lote, cupon, tarjeta utilizada, monto y estado devuelto por la procesadora. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Una transaccion figura con estado Rechazada. | La causa mas frecuente es fondos insuficientes en la cuenta del cliente, limite de tarjeta superado o tarjeta bloqueada. Solicitar al cliente que utilice otro medio de pago o se comunique con su banco. |
| Una transaccion no aparece en el listado despues de un cobro realizado. | Verificar que el filtro de fechas cubra el dia en que se realizo el cobro. Si la fecha es correcta, confirmar con el cajero el numero de caja o terminal utilizada y verificar que ese dispositivo este vinculado al sistema. |
| Una transaccion figura como Pendiente durante mucho tiempo. | Puede indicar una interrupcion en la comunicacion entre la posnet y la procesadora al momento del cobro. Contactar al soporte de Payway con el numero de cupon para verificar el estado real de la operacion en la plataforma de Prisma. |
