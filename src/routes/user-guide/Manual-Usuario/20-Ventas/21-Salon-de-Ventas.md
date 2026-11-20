# Salon de Ventas

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Salon de Ventas**  
> **Usuarios habilitados:** Cajeros, Mozos y Encargados de Salon

---

## Descripcion General

El Salon de Ventas es la pantalla principal de operacion del local. Desde aqui se gestiona todo el ciclo de atencion de las mesas: apertura, toma de pedidos, envio de comandas a cocina y barra, impresion del pre-ticket, cobro y cierre. Es el punto de contacto central entre el personal de sala y el sistema, y concentra las acciones mas frecuentes del turno de trabajo.

Cada mesa se representa como una tarjeta visual identificada por numero y mozo asignado. El color de la tarjeta indica el estado actual: verde para mesa libre, rojo para mesa ocupada con consumo activo, amarillo cuando el cliente ya pidio la cuenta. Esta codificacion permite al encargado de salon monitorear el estado del salon de un vistazo sin necesidad de desplazarse fisicamente por el local.

El modulo tambien integra la gestion de pedidos de Delivery y Mostrador, que aparecen como entradas diferenciadas dentro de la misma pantalla, permitiendo al personal atender simultaneamente clientes de mesa y pedidos para llevar desde una unica interfaz unificada.

![Vista del Salon de Ventas con mesas por mozo](images/ventas/salon-de-ventas.png)
_Vista del Salon de Ventas organizada por mozo, con tarjetas de mesas y botones de apertura_

---

## Requisitos Previos

- Tener un arqueo de caja activo y abierto para el turno correspondiente. Sin arqueo iniciado no es posible registrar cobranzas.
- Contar con el permiso de Operacion de Salon y Adicion asignado al rol del usuario.
- Tener configurados los sectores, mesas y mozos en el modulo de administracion antes de comenzar la operacion.

---

## Guia de Uso

### Abrir una mesa y tomar el pedido

1. En la pantalla del Salon de Ventas, localizar la tarjeta de la mesa deseada. El color verde indica que esta libre.
2. Tocar la tarjeta de la mesa libre para abrirla.
3. Asignar el mozo responsable de esa mesa desde el selector que aparece.
4. Indicar la cantidad de comensales si el sistema lo solicita.
5. Desde el catalogo de productos, seleccionar los items pedidos por el cliente y agregarlos al detalle de la mesa.
6. Tocar **Enviar Comanda** para transmitir el pedido a cocina y/o barra segun la configuracion de impresoras. La tarjeta de mesa cambia de color a rojo, indicando que esta ocupada.

### Cobrar y cerrar la mesa

1. Cuando el cliente solicite la cuenta, tocar la tarjeta de la mesa ocupada para acceder al detalle de consumo.
2. Tocar **Adicion** o **Pre-ticket** para imprimir la cuenta preliminar que se entrega al cliente.
3. Tocar **Cobrar** para abrir la pantalla de cobro.
4. Seleccionar la forma de pago: Efectivo, Tarjeta de debito o credito, o Mercado Pago.
5. Ingresar el monto recibido o confirmar el importe total.
6. Tocar **Cerrar y Facturar** para emitir el comprobante fiscal y liberar la mesa. La tarjeta vuelve a color verde.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Mesa Libre** | Abre una mesa disponible, permite asignar mozo y comenzar a cargar productos al consumo. |
| **Mesa Abierta** | Accede al detalle de consumo activo de la mesa y permite adicionar productos o iniciar el proceso de cobro. |
| **Adicion / Pre-ticket** | Imprime la cuenta preliminar del consumo actual para presentar al cliente antes del cobro definitivo. |
| **Cobrar** | Abre la pantalla de cobro donde se selecciona el medio de pago y se registra la transaccion. |
| **Cambiar Mozo** | Reasigna la mesa a otro mozo sin interrumpir el consumo activo ni perder los productos ya cargados. |
| **Dividir Mesa** | Permite separar el consumo de una mesa en dos o mas cuentas independientes para cobrar por separado. |
| **Enviar Comanda** | Transmite el pedido cargado a las impresoras de cocina y barra configuradas en el sistema. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No es posible registrar el cobro o el boton Cobrar aparece desactivado. | Verificar que exista un arqueo de caja abierto para el turno. Ir al modulo de Caja y abrir el arqueo correspondiente antes de intentar cobrar nuevamente. |
| La comanda no se imprime en cocina o barra. | Revisar que la impresora de destino este encendida y conectada a la red. Verificar la configuracion de impresoras en el modulo de Administracion. |
| Se cargo un producto equivocado en la mesa. | Acceder al detalle de la mesa, seleccionar el item incorrecto y utilizar la opcion **Anular Item**. Puede requerir clave de supervisor segun la configuracion de permisos del rol. |
| La mesa aparece ocupada pero el cliente ya se retiro sin cerrar el cobro. | Acceder a la mesa desde el Salon, revisar el consumo y proceder al cobro o anulacion segun corresponda para liberar la mesa y devolverla al estado verde. |
