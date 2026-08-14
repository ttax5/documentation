# Comandas Terminadas

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Comandas Terminadas**  
> **Usuarios habilitados:** Jefes de Cocina, Encargados de Cocina y Encargados de Salon

---

## Descripcion General

La seccion de Comandas Terminadas constituye el registro historico de todos los pedidos que fueron finalizados y despachados desde la pantalla de cocina (KDS). Su funcion principal es proporcionar una herramienta de consulta y auditoria que permite revisar el desempeno operativo del sector de preparacion, verificar tiempos de despacho y, en caso de ser necesario, corregir finalizaciones realizadas por error.

Las comandas que se muestran en esta seccion corresponden al turno o arqueo actualmente en curso. Para consultar pedidos de turnos anteriores, es necesario utilizar los filtros de fecha disponibles.

---

## Requisitos Previos

- El usuario debe contar con permisos de acceso al modulo de Comandero.
- Debe existir al menos una comanda que haya sido finalizada desde la pantalla de Comandas Activas durante el turno en curso.

---

## Guia de Uso

### Consulta de comandas finalizadas

Al ingresar a la seccion, el sistema presenta un listado de todas las comandas que fueron marcadas como terminadas durante el turno actual. Cada registro incluye la informacion basica del pedido: numero de mesa, mozo responsable, productos solicitados y datos de tiempos.

### Busqueda y filtrado

Para localizar una comanda especifica, utilizar los filtros disponibles en la parte superior de la pantalla. Es posible filtrar por numero de mesa, nombre del mozo o numero de pedido. Esta funcionalidad resulta especialmente util en momentos de alta demanda, cuando el volumen de pedidos finalizados es elevado.

### Consulta de tiempos de preparacion

Cada comanda terminada registra el tiempo exacto transcurrido entre su ingreso al sistema y su despacho. Esta informacion permite evaluar el rendimiento del sector de preparacion e identificar potenciales cuellos de botella en el flujo de trabajo.

### Reapertura de una comanda

En caso de que un pedido haya sido finalizado de manera accidental, es posible revertir esta accion mediante el boton **Reabrir Comanda**. Al ejecutar esta operacion, la comanda se remueve del listado de terminadas y se reincorpora a la pantalla de **Comandas Activas**, permitiendo al personal de cocina retomar su gestion.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Ver Detalle** | Despliega la informacion completa del pedido: productos incluidos, hora de ingreso al sistema y hora de despacho al salon. |
| **Reabrir Comanda** | Devuelve el pedido a la pantalla de Comandas Activas (KDS), restableciendo su estado para que pueda ser gestionado nuevamente por el personal de cocina. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No se encuentra un pedido en el listado. | Las comandas terminadas se muestran unicamente para el turno o arqueo en curso. Para buscar pedidos de dias anteriores, utilizar el filtro de fecha o consultar el historial de arqueos. |
| Se necesita reabrir una comanda pero el boton no esta disponible. | Verificar que el usuario cuente con los permisos necesarios para realizar esta operacion. Consultar con el administrador del sistema si es necesario. |
