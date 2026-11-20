# Instrumentos de Pago Manual

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Instrumentos de Pago Manual**  
> **Usuarios habilitados:** Administradores del Comercio y Encargados de Finanzas

---

## Descripcion General

Este modulo permite definir y administrar los medios de pago no integrados electronicamente que los cajeros pueden seleccionar al momento de registrar una venta. A diferencia de los procesadores digitales, estos instrumentos representan formas de cobro tradicionales como Efectivo, Transferencia Bancaria, Cheques o Vouchers, cuya verificacion queda a cargo del operador de caja.

Desde aqui el administrador puede crear tantos instrumentos como el comercio necesite, asignandoles un nombre descriptivo, configurando si requieren o no el ingreso de un numero de comprobante, y vinculandolos con la caja o cuenta contable destino que corresponda. Esta flexibilidad permite adaptar los medios de pago a la operatoria particular de cada negocio.

La correcta configuracion de los instrumentos de pago manual es fundamental para garantizar que los cajeros encuentren disponibles todas las opciones de cobro en la pantalla de venta y que los registros contables reflejen con exactitud el origen de cada ingreso.

---

## Requisitos Previos

- Contar con el permiso de Administracion de Medios de Pago asignado al usuario.
- Tener definidos previamente los nombres de las cuentas o cajas contables a las que se vinculara cada instrumento.

---

## Guia de Uso

### Agregar un nuevo instrumento de pago

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Instrumentos de Pago Manual**.
2. Tocar el boton **Nuevo Instrumento**.
3. Escribir el nombre del medio de pago en el campo correspondiente (por ejemplo: Transferencia Bancaria Mercado Pago, Cheque a 30 dias, Voucher de Empresa).
4. Seleccionar el tipo de comprobante que el instrumento debe exigir al cajero al momento del cobro (por ejemplo: Pedir Numero de Comprobante, Sin Comprobante Requerido).
5. Vincular el instrumento con la caja o cuenta contable destino si el sistema lo solicita.
6. Tocar **Guardar** para registrar el nuevo medio de pago.

### Editar un instrumento existente

1. Localizar el instrumento en el listado de medios de pago manuales.
2. Tocar el boton **Editar** ubicado junto al instrumento a modificar.
3. Realizar los cambios necesarios en el nombre, icono o configuracion del comprobante.
4. Tocar **Guardar** para confirmar los cambios.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Nuevo Instrumento** | Abre el formulario de creacion para agregar un nuevo medio de pago manual al sistema. |
| **Editar** | Permite modificar el nombre, icono o configuracion de comprobante de un instrumento ya existente. |
| **Activo / Inactivo** | Habilita o deshabilita el instrumento en la pantalla de cobro del cajero sin eliminarlo del sistema. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El cajero no visualiza el nuevo medio de pago en la pantalla de cobro. | Verificar que el instrumento se encuentre marcado como Activo en la columna de estado del listado. Tocar el toggle correspondiente para habilitarlo si figura como inactivo. |
| No es posible eliminar un instrumento que ya tiene transacciones registradas. | El sistema no permite borrar instrumentos con movimientos asociados para preservar la integridad del historial. Deshabilitarlo marcandolo como Inactivo para que deje de aparecer en la pantalla de cobro sin afectar los registros anteriores. |
