# Sectores de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Sectores de Comanda**  
> **Usuarios habilitados:** Administradores y Encargados de Operacion

---

## Descripcion General

Los Sectores de Comanda representan las areas fisicas de produccion dentro del establecimiento gastronomico. Cada sector corresponde a una estacion de trabajo donde se preparan determinados tipos de productos. Ejemplos tipicos incluyen: Cocina Caliente, Cocina Fria, Barra de Tragos, Parrilla, Pasteleria, entre otros.

La configuracion de sectores determina hacia que pantalla KDS o impresora se dirige cada producto del menu al momento de enviar una comanda. Una correcta definicion de sectores garantiza que cada pedido llegue al area de preparacion correspondiente, evitando confusiones operativas y optimizando el flujo de trabajo en cocina.

![Listado de Sectores de Comanda](images/comandero/sectores-listado.png)
_Pantalla principal de Sectores de Comanda con listado y opciones de administracion_

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Es recomendable tener previamente identificadas las estaciones de trabajo fisicas del local.

---

## Guia de Uso

### Creacion de un nuevo sector

1. Presionar el boton **Crear Sector** ubicado en la esquina superior derecha de la pantalla.
2. En el modal emergente, ingresar en el campo **Nombre** la denominacion que identifica al area de produccion (por ejemplo: "cocina", "Barra", "Parrilla").
3. Presionar **Guardar** para confirmar la creacion del sector.

![Formulario para crear sector](images/comandero/sectores-crear.png)
_Ventana modal para el ingreso del nombre del nuevo sector_

### Edicion y eliminacion de un sector existente

- **Editar:** Presionar el boton **Editar** junto al sector en la tabla para modificar su nombre.
- **Borrar:** Presionar el boton **Borrar** para remover un sector que ya no este en uso (asegurarse de que no tenga productos asociados).

### Vinculacion de productos a sectores

Una vez creados los sectores, es necesario vincular cada producto o categoria del menu al sector de preparacion que le corresponde desde la ficha del producto en el Maestro de Productos.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Crear Sector** | Abre la ventana modal para registrar una nueva area de produccion en el sistema. |
| **Editar** | Permite modificar el nombre del sector seleccionado. |
| **Borrar** | Elimina el sector del sistema siempre que no posea productos vinculados. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Un producto se despacha hacia el sector equivocado. | Acceder a la ficha del producto en el catalogo y verificar que el campo de sector de preparacion este correctamente asignado. Corregir la asignacion y guardar los cambios. |
| Se creo un sector pero no recibe comandas. | Verificar que al menos un producto del menu tenga asignado ese sector. Adicionalmente, comprobar que exista un puesto de comanda vinculado a dicho sector (ver seccion **Puestos de Comanda**). |
