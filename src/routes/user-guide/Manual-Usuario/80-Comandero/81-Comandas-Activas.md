# Comandas Activas (KDS - Pantalla de Cocina)

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Comandas Activas**  
> **Usuarios habilitados:** Cocineros, Barmanes y Jefes de Cocina

---

## Descripcion General

La pantalla de Comandas Activas funciona como un sistema de visualizacion de cocina (KDS - Kitchen Display System). Su proposito principal es centralizar la recepcion y gestion de pedidos en una interfaz digital interactiva en tiempo real.

Cada comanda enviada desde el salon se muestra como una tarjeta con el nombre del mozo, la mesa, la hora, el identificador del pedido, el detalle de los productos y sus respectivos estados. En la barra superior es posible filtrar por un sector especifico o visualizar **Todos los sectores**.

![Pantalla KDS de Comandas Activas](images/comandero/kds-pantalla-activas.png)
_Pantalla KDS en tiempo real con tarjetas de pedidos y acciones de cambio de estado_

---

## Requisitos Previos

- El puesto de comanda debe estar correctamente configurado y vinculado al sector de preparacion correspondiente (ver seccion **Puestos de Comanda**).
- El dispositivo debe contar con conexion activa a la red local o a internet.
- Los productos del menu deben tener asignado un sector de comanda (ver seccion **Sectores de Comanda**).

---

## Guia de Uso

### Recepcion de pedidos y visualizacion

Al ingresar una comanda, esta aparece inmediatamente en la pantalla KDS. En el encabezado de cada tarjeta se puede observar:
- **Mozo asignado** y **Mesa** (ej: "Mozo Omar", mesa "Jsjsj").
- **Hora y N° de orden** (ej: `21:01 13/12 #7`).
- **Estado actual** de la comanda (ej: *MARCHANDO*, *SALIENDO*).

### Avance de estados de la comanda

Cada tarjeta dispone de un boton inferior dinamico que permite avanzar la comanda al siguiente estado configurado en el flujo:
- Por ejemplo, presionar **CAMBIAR A SALIENDO** o **CAMBIAR A LISTO** para avanzar el ciclo del pedido.
- El color de la cabecera de la tarjeta refleja el estado actual del pedido.

### Gestion de ítems individuales

Los productos individuales dentro de la tarjeta muestran su propio estado (por ejemplo, etiqueta **LISTO**), permitiendo al personal de cocina marcar productos que ya estan listos antes de despachar la orden completa.

---

## Elementos de la Interfaz

| Elemento | Descripcion |
|---|---|
| **Selector de Sector** | Menu desplegable en la barra superior ("Todos los sectores", "cocina", etc.) para filtrar los pedidos segun la estacion. |
| **Tarjeta de Comanda** | Contenedor principal con mozo, mesa, hora, numero de comanda y lista de productos solicitados. |
| **Boton de Cambio de Estado** | Boton de accion rapida (ej: "CAMBIAR A SALIENDO", "CAMBIAR A LISTO") para avanzar la comanda en el flujo. |
| **Indicador de Item** | Etiqueta de estado individual para cada plato o bebida dentro de la comanda. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Se finalizo un pedido de manera accidental. | Acceder al modulo de **Comandas Terminadas** y utilizar la opcion **Reabrir Comanda** para devolver el pedido a la pantalla activa. |
| No se reciben comandas en la pantalla. | Verificar la conexion del dispositivo a la red local o a internet. Si la conexion es estable, actualizar la pagina del navegador. |
| Un producto aparece en el sector incorrecto. | Revisar la configuracion del producto en el catalogo y corregir el sector de preparacion asignado (ver seccion **Sectores de Comanda**). |
