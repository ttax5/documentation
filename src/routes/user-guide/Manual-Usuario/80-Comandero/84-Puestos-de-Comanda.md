# Puestos de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Puestos de Comanda**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

La seccion de Puestos de Comanda permite registrar y administrar las estaciones de trabajo y puestos de preparacion del local (como "vegetales", "parrilla", "horno", etc.). Cada puesto se vincula a un sector de produccion y define su capacidad operativa y sus estados de flujo de trabajo.

![Listado de Puestos](images/comandero/puestos-listado.png)
_Tabla de puestos registrados con su capacidad, unidad de medida, sector y estados asociados_

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Los sectores de comanda deben estar previamente creados (ver seccion **Sectores de Comanda**).

---

## Guia de Uso

### Registro de un nuevo puesto

1. Presionar el boton **Crear Puesto** ubicado en la esquina superior derecha.
2. En el modal emergente completar los campos requeridos:
   - **Nombre:** Denominacion del puesto (por ejemplo: "vegetales", "Platos Calientes", "Barra").
   - **Capacidad:** Cantidad maxima de produccion simultanea estimada (por ejemplo: `1`).
   - **Unidad de Medida:** Unidad utilizada para medir la carga de trabajo (por ejemplo: "Atado", "Unidad", "Porcion").
   - **Sector:** Seleccionar el sector al que pertenece el puesto (por ejemplo: radio `cocina`).
3. Presionar **Guardar** para confirmar el registro.

![Modal de creacion de Puesto](images/comandero/puestos-crear.png)
_Formulario para dar de alta un nuevo puesto de comanda_

### Acciones sobre puestos existentes

- **Editar:** Permite actualizar el nombre, capacidad o unidad de medida del puesto.
- **Borrar:** Elimina el puesto si no tiene dependencias activas.
- **Agregar Estado:** Permite anadir un nuevo estado directamente al flujo de este puesto de trabajo.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Crear Puesto** | Abre el formulario para dar de alta una nueva estacion de preparacion. |
| **Editar** | Modifica los datos del puesto (nombre, capacidad, unidad). |
| **Borrar** | Elimina el puesto del sistema. |
| **Agregar Estado** | Crea e incorpora un nuevo estado al flujo especifico del puesto. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| La pantalla del puesto muestra comandas de sectores que no corresponden. | Acceder a la configuracion del puesto y verificar que unicamente esten seleccionados los sectores deseados. Deseleccionar los sectores incorrectos y guardar los cambios. |
| El dispositivo no muestra ninguna comanda. | Verificar que el puesto tenga al menos un sector asignado y que existan productos vinculados a ese sector. Comprobar ademas que la sesion del dispositivo este conectada al puesto correcto. |
| Se necesita que un mismo sector se vea en mas de un dispositivo. | Crear un puesto de comanda para cada dispositivo y asignar el mismo sector a todos los puestos que deban visualizarlo. |
