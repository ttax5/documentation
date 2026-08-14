# Puestos de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Puestos de Comanda**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

La seccion de Puestos de Comanda permite registrar y administrar los dispositivos fisicos que funcionan como terminales de visualizacion del sistema KDS (Kitchen Display System). Estos dispositivos pueden ser monitores, tablets o computadoras instalados en las distintas areas de preparacion del establecimiento, como la cocina o la barra.

Cada puesto de comanda se vincula a uno o varios sectores de produccion, lo que determina que pedidos se mostraran en cada pantalla. De este modo, es posible configurar, por ejemplo, que una tablet ubicada en la cocina muestre unicamente los pedidos correspondientes a los sectores de "Cocina Caliente" y "Parrilla", mientras que el monitor de la barra visualice exclusivamente los pedidos de "Tragos" y "Cafeteria".

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Los sectores de comanda deben estar previamente creados (ver seccion **Sectores de Comanda**).
- Se debe disponer de los dispositivos fisicos (monitores, tablets o computadoras) que funcionaran como terminales KDS, conectados a la red del establecimiento.

---

## Guia de Uso

### Registro de un nuevo puesto

1. Presionar el boton **Nuevo Puesto** ubicado en la parte superior de la pantalla.
2. En el campo **Nombre**, ingresar una denominacion que identifique al dispositivo de forma clara (por ejemplo: "Monitor Cocina Principal", "Tablet Barra 1", "Pantalla Pasteleria").
3. En la seccion de **Sectores**, seleccionar los sectores de preparacion cuyos pedidos se visualizaran en este puesto. Es posible asignar uno o varios sectores a un mismo puesto.
4. Presionar **Guardar** para confirmar el registro.

### Conexion del dispositivo al puesto

Una vez registrado el puesto en el sistema, acceder al dispositivo fisico correspondiente (tablet, monitor o computadora), iniciar sesion en el sistema y seleccionar el puesto configurado. A partir de ese momento, el dispositivo comenzara a recibir y mostrar las comandas de los sectores asignados.

### Modificacion de sectores asignados

Para agregar o quitar sectores de un puesto existente, seleccionar el puesto en el listado, modificar la seleccion de sectores y presionar **Guardar**. Los cambios se aplicaran de forma inmediata en la pantalla del dispositivo vinculado.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Nuevo Puesto** | Registra un nuevo dispositivo en el sistema y permite asociarlo a uno o varios sectores de preparacion. |
| **Configurar Sectores** | Permite modificar los sectores de preparacion cuyas comandas se mostraran en la pantalla del puesto seleccionado. |
| **Eliminar Puesto** | Remueve el registro del dispositivo del sistema. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| La pantalla del puesto muestra comandas de sectores que no corresponden. | Acceder a la configuracion del puesto y verificar que unicamente esten seleccionados los sectores deseados. Deseleccionar los sectores incorrectos y guardar los cambios. |
| El dispositivo no muestra ninguna comanda. | Verificar que el puesto tenga al menos un sector asignado y que existan productos vinculados a ese sector. Comprobar ademas que la sesion del dispositivo este conectada al puesto correcto. |
| Se necesita que un mismo sector se vea en mas de un dispositivo. | Crear un puesto de comanda para cada dispositivo y asignar el mismo sector a todos los puestos que deban visualizarlo. |
