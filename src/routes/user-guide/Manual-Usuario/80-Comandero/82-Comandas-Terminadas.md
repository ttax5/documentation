# Comandas Terminadas

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Comandas Terminadas**  
> **Usuarios habilitados:** Jefes de Cocina, Encargados de Cocina y Encargados de Salon

---

## Descripcion General

La seccion de Comandas Terminadas (o Historico de Comandas) constituye el registro de todos los pedidos finalizados y despachados desde la pantalla de cocina (KDS). Su funcion principal es proporcionar una herramienta de consulta, control y auditoria que permite revisar el desempeno operativo, verificar que pedidos se despacharon y realizar busquedas puntuales.

![Historico de Comandas Terminadas](images/comandero/historico-comandas-terminadas.png)
_Cabecera y filtros de busqueda en el Historico de Comandas Finalizadas_

---

## Requisitos Previos

- El usuario debe contar con permisos de acceso al modulo de Comandero.
- Debe existir al menos una comanda que haya sido finalizada desde la pantalla de Comandas Activas durante el turno en curso.

---

## Guia de Uso

### Consulta de comandas finalizadas

Al ingresar a la seccion, el sistema presenta el contador total de comandas finalizadas (ej: "1 Comandas - Pagina 1 de 1") y el listado de pedidos completados con su detalle.

### Busqueda y filtrado

Para localizar una comanda especifica rapidamente:
1. **N° Mesa:** Ingresar el numero o nombre de la mesa correspondiente.
2. **Selector de Sectores / Filtro:** Filtrar por un sector o estado especifico ("Todos", "cocina", etc.).
3. **Producto:** Escribir el nombre del producto para encontrar ordenes que contengan dicho articulo.
4. Presionar el boton **🔍 Buscar** para ejecutar la consulta.

### Consulta de tiempos de preparacion

Cada comanda terminada registra el tiempo exacto transcurrido entre su ingreso al sistema y su despacho. Esta informacion permite evaluar el rendimiento del sector de preparacion e identificar potenciales cuellos de botella en el flujo de trabajo.

### Reapertura de una comanda

En caso de que un pedido haya sido finalizado de manera accidental, es posible revertir esta accion mediante el boton **Reabrir Comanda**. Al ejecutar esta operacion, la comanda se remueve del listado de terminadas y se reincorpora a la pantalla de **Comandas Activas**, permitiendo al personal de cocina retomar su gestion.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Buscar** | Filtra los registros historicos segun mesa, sector y producto especificado. |
| **Paginador** | Permite navegar entre las diferentes paginas del historico de comandas. |
| **Ver Detalle** | Despliega la composicion del pedido despachado con sus respectivos horarios. |
| **Reabrir Comanda** | Devuelve el pedido a la pantalla de Comandas Activas (KDS), restableciendo su estado para que pueda ser gestionado nuevamente por el personal de cocina. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No se encuentra un pedido en el listado. | Las comandas terminadas se muestran unicamente para el turno o arqueo en curso. Para buscar pedidos de dias anteriores, utilizar el filtro de fecha o consultar el historial de arqueos. |
| Se necesita reabrir una comanda pero el boton no esta disponible. | Verificar que el usuario cuente con los permisos necesarios para realizar esta operacion. Consultar con el administrador del sistema si es necesario. |
