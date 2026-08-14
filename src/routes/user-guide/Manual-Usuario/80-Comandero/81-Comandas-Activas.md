# Comandas Activas (KDS - Pantalla de Cocina)

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Comandas Activas**  
> **Usuarios habilitados:** Cocineros, Barmanes y Jefes de Cocina

---

## Descripcion General

La pantalla de Comandas Activas funciona como un sistema de visualizacion de cocina (KDS, por sus siglas en ingles: Kitchen Display System). Su proposito principal es reemplazar el uso de comandas impresas en papel, centralizando la recepcion y gestion de pedidos en una interfaz digital e interactiva.

Cada vez que un mozo envia una orden desde el salon, esta se refleja automaticamente en la pantalla del sector de preparacion correspondiente. El sistema organiza los pedidos por orden de llegada y permite al personal de cocina o barra gestionar el flujo de trabajo de manera visual, desde la recepcion del pedido hasta su despacho al salon.

---

## Requisitos Previos

- El puesto de comanda debe estar correctamente configurado y vinculado al sector de preparacion correspondiente (ver seccion **Puestos de Comanda**).
- El dispositivo debe contar con conexion activa a la red local o a internet.
- Los productos del menu deben tener asignado un sector de comanda (ver seccion **Sectores de Comanda**).

---

## Guia de Uso

### Recepcion de pedidos

Al enviar una orden desde el Salon de Ventas, el pedido ingresa automaticamente a la pantalla de Comandas Activas. El sistema emite una alerta auditiva para notificar al personal de cocina y presenta la orden en formato de tarjeta, organizada cronologicamente segun el momento de ingreso.

### Inicio de preparacion

Para indicar que un pedido comenzo a prepararse, presionar el boton **Iniciar Preparacion** en la tarjeta correspondiente. Esta accion cambia el estado del pedido a *En Proceso* y activa el cronometro de seguimiento.

### Seguimiento de tiempos

Cada tarjeta de comanda incluye un indicador visual de tiempo transcurrido que cambia de color segun la demora acumulada:

| Indicador | Significado |
|---|---|
| **Verde** | El pedido se encuentra dentro del tiempo normal de preparacion. |
| **Amarillo** | El pedido se aproxima al limite de espera configurado. |
| **Rojo** | El pedido ha superado el tiempo esperado y se considera demorado. |

### Finalizacion y despacho

Una vez completada la preparacion del pedido, presionar el boton **Terminar** o **Marchar**. Esta accion produce dos efectos simultaneos: la tarjeta se remueve de la pantalla de Comandas Activas y se envia una notificacion automatica al mozo responsable para que proceda al retiro del pedido desde el sector de preparacion.

---

## Elementos de la Interfaz

| Elemento | Descripcion |
|---|---|
| **Tarjeta de Comanda** | Presenta la informacion del pedido: numero de mesa, mozo asignado, detalle de los items solicitados y observaciones especiales del cliente (por ejemplo: "sin sal", "bien cocido", "sin TACC"). |
| **Iniciar Preparacion** | Cambia el estado del pedido a *En Proceso* y activa el registro de tiempo de preparacion. |
| **Terminar / Marchar** | Marca el pedido como *Listo para retirar* y notifica al mozo correspondiente. |
| **Llamar Mozo** | Envia una alerta directa al mozo para solicitar el retiro de los platos desde el sector de preparacion. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Se finalizo un pedido de manera accidental. | Acceder al modulo de **Comandas Terminadas** y utilizar la opcion **Reabrir Comanda** para devolver el pedido a la pantalla activa. |
| No se reciben comandas en la pantalla. | Verificar la conexion del dispositivo a la red local o a internet. Si la conexion es estable, actualizar la pagina del navegador. |
| Un producto aparece en el sector incorrecto. | Revisar la configuracion del producto en el catalogo y corregir el sector de preparacion asignado (ver seccion **Sectores de Comanda**). |
