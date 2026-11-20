# Caja Rapida

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Caja Rapida**  
> **Usuarios habilitados:** Cajeros y Personal de Mostrador / Take-away

---

## Descripcion General

La Caja Rapida es una pantalla de tipo registradora pensada para la venta inmediata en mostrador, sin necesidad de asignar mesas ni gestionar un salon. Es la herramienta ideal para locales con alto volumen de clientes al paso, como bares de desayuno, cafeterias, heladerias o cualquier operacion de take-away donde la velocidad de atencion es prioritaria.

La interfaz esta diseñada para minimizar la cantidad de pasos necesarios entre la seleccion del producto y el cobro. El panel izquierdo muestra los productos mas vendidos como botones de acceso rapido, mientras que el teclado numerico tactil central permite ingresar cantidades o importes de forma directa. El ticket fiscal se imprime automaticamente al confirmar el pago, sin pasos intermedios.

A diferencia del Salon de Ventas, la Caja Rapida no genera comandas hacia cocina ni requiere apertura de mesas. Es una operacion de circuito corto: el producto se selecciona, se cobra y se cierra en una sola secuencia, lo que la hace especialmente eficiente para operaciones de alto trafico en mostrador.

---

## Requisitos Previos

- Tener una caja abierta con arqueo de caja iniciado para el turno correspondiente.
- Contar con el permiso de Caja Rapida y Cobranzas asignado al rol del usuario.

---

## Guia de Uso

### Seleccionar productos y armar el carrito

1. En el panel izquierdo de la pantalla, localizar el producto que el cliente solicita entre los botones de acceso rapido.
2. Tocar el boton del producto para agregarlo al carrito de la venta actual.
3. Si se requiere modificar la cantidad, utilizar el teclado numerico tactil para ingresar el valor deseado antes de confirmar la adicion.
4. Tocar **Agregar** para incorporar el item al detalle de la venta con la cantidad especificada.
5. Repetir el proceso para cada producto adicional que forme parte del pedido.

### Cobrar y emitir el ticket

1. Verificar el resumen del carrito y el **Total a Pagar** que aparece en pantalla.
2. Tocar el boton **Cobrar** (identificado en color verde) para abrir la pantalla de pago.
3. Seleccionar el medio de pago: Efectivo, Tarjeta de debito o credito, u otro medio habilitado.
4. Confirmar el importe. El ticket fiscal se imprime automaticamente al completar la transaccion.
5. La caja queda lista para iniciar una nueva venta de inmediato.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Productos** | Panel izquierdo con botones de acceso rapido a los productos mas vendidos del local. |
| **Agregar** | Incorpora el producto seleccionado al carrito de la venta actual con la cantidad indicada. |
| **Vaciar** | Limpia por completo el carrito activo, eliminando todos los productos cargados sin procesar el cobro. |
| **Cobrar** | Abre la pantalla de cobro para seleccionar el medio de pago y confirmar la transaccion. |
| **Abrir Caja** | Inicia el arqueo de caja del turno para habilitar el registro de ventas y cobranzas. |
| **Cerrar Caja** | Finaliza el arqueo del turno y consolida los movimientos de caja del periodo. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El boton Cobrar aparece desactivado y no responde. | Verificar que el carrito tenga al menos un producto cargado. El cobro no puede iniciarse con el carrito vacio. Agregar al menos un item para habilitar el boton. |
| Se agrego un producto equivocado al carrito. | Localizar el item incorrecto en el detalle del carrito y tocar el icono de papelera o eliminar que aparece junto al producto para quitarlo antes de proceder al cobro. |
| La caja no permite registrar ventas al iniciar el turno. | Verificar que se haya realizado la apertura de caja con el arqueo inicial del turno. Tocar **Abrir Caja** e ingresar el monto inicial para habilitar la operacion. |
