# Terminales de Pago (Prisma Payway)

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Terminales Payway**  
> **Usuarios habilitados:** Cajeros y Administradores del Comercio

---

## Descripcion General

Este modulo permite administrar y vincular las terminales fisicas inteligentes POS Smart de Prisma Payway asignadas a las cajas del comercio. Desde aqui se registran los dispositivos, se los asocia a una caja especifica y se verifica el estado de conexion de cada terminal en tiempo real.

El emparejamiento correcto entre una terminal y su caja es indispensable para que el sistema pueda enviar automaticamente el monto a cobrar al dispositivo fisico, evitando que el cajero deba ingresar el importe de forma manual en la posnet. Esta integracion reduce errores operativos y agiliza el proceso de cobro con tarjetas de credito y debito.

El monitoreo del estado de conexion permite identificar de forma preventiva si alguna terminal se encuentra fuera de linea antes de que el cajero intente realizar un cobro, facilitando la resolucion del problema sin interrumpir la atencion al cliente.

---

## Requisitos Previos

- Las terminales fisicas Payway deben estar encendidas y conectadas a la red WiFi del local.
- Contar con el permiso de Administracion de Terminales POS asignado al usuario.
- Tener disponible el Numero de Serie (N/S) o la direccion IP que figura impresa o configurada en cada posnet.

---

## Guia de Uso

### Vincular una terminal a una caja

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Terminales Payway**.
2. Tocar el boton **Vincular Terminal**.
3. Ingresar el Numero de Serie (N/S) o la direccion IP de la posnet en el campo correspondiente. Este dato figura en la etiqueta del dispositivo o en el menu de configuracion de la terminal fisica.
4. Seleccionar la caja del local a la que pertenece la terminal en el selector de cajas.
5. Tocar **Guardar** para registrar la vinculacion.
6. Verificar que la terminal aparezca en el listado con estado Conectado.

### Verificar el estado de conexion de una terminal

1. Localizar la terminal en el listado de dispositivos vinculados.
2. Tocar el boton **Probar Conexion** para que el sistema envie un ping de prueba al dispositivo.
3. Si la terminal responde correctamente, el estado se actualizara a Conectado. Si no responde, el estado indicara Desconectado o Error de comunicacion.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Vincular Terminal** | Registra una nueva posnet en el sistema ingresando su numero de serie o direccion IP y asignandola a una caja del local. |
| **Probar Conexion** | Envia un ping de prueba a la terminal seleccionada para verificar que la comunicacion entre el sistema y el dispositivo fisico sea correcta. |
| **Desvincular** | Retira la terminal de la caja asignada y la elimina del listado de dispositivos activos del local. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| La terminal figura como Desconectada a pesar de estar encendida. | Verificar que la posnet este conectada a la misma red WiFi que el sistema. Comprobar que la direccion IP o el numero de serie ingresados sean correctos. Reiniciar el router o la posnet si la red es la correcta. |
| La terminal no recibe el monto desde el sistema al intentar cobrar. | Confirmar que la terminal este vinculada a la caja correcta desde la que se esta realizando la venta. Si la vinculacion es correcta, realizar una prueba de conexion y luego reintentar el cobro. |
| No es posible vincular una terminal que ya fue registrada en otro comercio. | Las terminales Payway estan asociadas al comercio en la plataforma de Prisma. Contactar al soporte de Payway para realizar la transferencia del dispositivo al comercio actual antes de intentar vincularla nuevamente. |
