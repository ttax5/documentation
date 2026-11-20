# Configuracion de Procesadores de Pago

> **Ubicacion en el sistema:** Menu principal → **Medios de Pago** → **Configuracion de Procesadores**  
> **Usuarios habilitados:** Administradores del Comercio

---

## Descripcion General

Este modulo permite vincular y configurar las pasarelas y procesadores de pago digitales disponibles en el sistema, incluyendo Prisma Payway, Mercado Pago y Macro Click de Pagos. Desde aqui el administrador gestiona las credenciales de acceso a cada plataforma, habilitando al comercio para recibir cobros integrados directamente desde la pantalla de venta.

La configuracion de procesadores es el paso previo e indispensable para que los cajeros puedan operar con medios de pago electronicos. Sin las credenciales correctamente ingresadas y el procesador activo, las terminales y las pasarelas QR no podran comunicarse con las entidades financieras correspondientes.

Cada procesador opera de forma independiente y puede activarse o desactivarse segun las necesidades del comercio, permitiendo habilitar unicamente los canales de cobro que se encuentren contratados y operativos en el local.

---

## Requisitos Previos

- Contar con el permiso de Configuracion de Pasarelas de Pago asignado al usuario.
- Tener a disposicion las credenciales otorgadas por la entidad financiera o proveedor del procesador (API Keys, Secret Tokens u otros parametros de acceso).

---

## Guia de Uso

### Activar y configurar un procesador de pago

1. Ingresar al modulo desde Menu principal → **Medios de Pago** → **Configuracion de Procesadores**.
2. Localizar el procesador deseado en la lista (por ejemplo: Payway, Mercado Pago o Macro Click).
3. Tocar el boton **Configurar** correspondiente al procesador seleccionado.
4. Ingresar las credenciales proporcionadas por la entidad financiera, tales como API Key, Secret Token u otros campos requeridos.
5. Tocar **Guardar Cambios** para que el sistema registre y valide las credenciales ingresadas.
6. Verificar que el procesador quede marcado como activo en la columna de Estado.

### Desactivar un procesador de pago

1. Localizar el procesador en la lista de procesadores configurados.
2. Usar el toggle de la columna **Estado** para cambiarlo de Activo a Inactivo.
3. El procesador dejara de aparecer como opcion disponible en la pantalla de cobro de forma inmediata.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Configurar** | Abre el panel de ingreso de credenciales del procesador seleccionado, donde se cargan las API Keys, Secret Tokens y demas parametros requeridos por la entidad financiera. |
| **Activar / Desactivar** | Habilita o deshabilita el procesador en la pantalla de cobro sin eliminar las credenciales ya ingresadas. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| Las credenciales ingresadas generan error de autenticacion. | Verificar que las claves hayan sido copiadas correctamente y sin espacios adicionales. Ingresar al portal web del proveedor para confirmar que las credenciales esten vigentes y no hayan sido regeneradas. |
| El procesador figura como activo pero no aparece en la pantalla de cobro. | Cerrar sesion y volver a ingresar al sistema. Si el problema persiste, verificar que el rol del cajero tenga habilitado el medio de pago correspondiente en la configuracion de perfiles de usuario. |
