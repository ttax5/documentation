# Sectores de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Sectores de Comanda**  
> **Usuarios habilitados:** Administradores y Encargados de Operacion

---

## Descripcion General

Los Sectores de Comanda representan las areas fisicas de produccion dentro del establecimiento gastronomico. Cada sector corresponde a una estacion de trabajo donde se preparan determinados tipos de productos. Ejemplos tipicos incluyen: Cocina Caliente, Cocina Fria, Barra de Tragos, Parrilla, Pasteleria, entre otros.

La configuracion de sectores determina hacia que pantalla KDS o impresora se dirige cada producto del menu al momento de enviar una comanda. Una correcta definicion de sectores garantiza que cada pedido llegue al area de preparacion correspondiente, evitando confusiones operativas y optimizando el flujo de trabajo en cocina.

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Es recomendable tener previamente identificadas las estaciones de trabajo fisicas del local y sus respectivos dispositivos de salida (pantallas KDS o impresoras).

---

## Guia de Uso

### Creacion de un nuevo sector

1. Presionar el boton **Nuevo Sector** ubicado en la parte superior de la pantalla.
2. En el campo **Nombre**, ingresar la denominacion que identifica al area de produccion (por ejemplo: "Barra de Tragos", "Cocina Caliente", "Pasteleria").
3. Seleccionar el dispositivo de salida correspondiente: la pantalla KDS o la impresora fisica donde se recibiran los pedidos de este sector.
4. Presionar **Guardar** para confirmar la configuracion.

### Edicion de un sector existente

Para modificar la denominacion o el dispositivo de salida asociado a un sector, seleccionar el sector en el listado y realizar los ajustes necesarios. Confirmar los cambios presionando **Guardar**.

### Vinculacion de productos a sectores

Una vez creados los sectores, es necesario vincular cada producto o categoria del menu al sector de preparacion que le corresponde. Esta asignacion se realiza desde la ficha del producto en el Maestro de Productos, seleccionando el sector adecuado en el campo correspondiente.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Nuevo Sector** | Registra una nueva area de produccion en el sistema y permite asociarle un dispositivo de salida. |
| **Editar Sector** | Permite modificar el nombre del sector o cambiar la impresora o pantalla KDS asociada. |
| **Eliminar Sector** | Remueve un sector del sistema. Solo es posible si no tiene productos asociados. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Un producto se despacha hacia el sector equivocado. | Acceder a la ficha del producto en el catalogo y verificar que el campo de sector de preparacion este correctamente asignado. Corregir la asignacion y guardar los cambios. |
| Se creo un sector pero no recibe comandas. | Verificar que al menos un producto del menu tenga asignado ese sector. Adicionalmente, comprobar que exista un puesto de comanda vinculado a dicho sector (ver seccion **Puestos de Comanda**). |
