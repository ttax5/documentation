# Clientes

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Clientes**  
> **Usuarios habilitados:** Cajeros, Recepcionistas y Administradores

---

## Descripcion General

El modulo de Clientes es la base de datos de comensales y compradores del local. Permite registrar, buscar y administrar la informacion de cada cliente: nombre, telefono, domicilio, correo electronico y numero de documento o CUIT para la emision de Facturas A o B a nombre del cliente. Contar con esta informacion disponible agiliza el proceso de facturacion y evita errores en los datos fiscales al momento del cobro.

Mas alla de los datos basicos, el modulo permite asignar categorias y etiquetas personalizadas a los clientes para aplicar descuentos diferenciados o identificar grupos de interes. Esta informacion es especialmente util para operaciones de delivery, donde la busqueda rapida del cliente por telefono o nombre permite recuperar su domicilio de entrega sin necesidad de ingresarlo manualmente en cada pedido.

El modulo tambien incluye una seccion de Campañas de WhatsApp, desde la cual es posible diseñar y gestionar envios masivos de mensajes a segmentos de clientes. Cada campaña se configura con un nombre, un template de mensaje, fechas de vigencia y el segmento de destinatarios, y el sistema registra las metricas de envio con el detalle de mensajes enviados y errores producidos.

![Pantalla de busqueda de Clientes con filtros avanzados](images/ventas/clientes-busqueda.png)
_Formulario de busqueda de clientes con filtros por codigo, nombre, mail, documento y categoria_

---

## Requisitos Previos

- Contar con el permiso de Gestion de Clientes asignado al rol del usuario.
- Para la funcionalidad de Campañas de WhatsApp, tener configurados previamente los templates de mensajes en la seccion de configuracion correspondiente.

---

## Guia de Uso

### Registrar un nuevo cliente

1. Desde la pantalla de Clientes, tocar el boton **Nuevo Cliente** ubicado en la parte superior.
2. Completar el formulario con los datos del cliente: Nombre, Telefono, Correo electronico, CUIT o DNI y Domicilio.
3. Asignar una categoria o tag si corresponde para segmentacion o descuentos personalizados.
4. Tocar **Guardar** para registrar el cliente en la base de datos. Quedara disponible para ser buscado y vinculado a ventas futuras.

### Buscar y vincular un cliente a una venta

1. Utilizar los campos de busqueda disponibles: Codigo, Nombre, Mail, Numero de Documento, Telefono o Domicilio.
2. Seleccionar el tipo de cliente o tag desde los selectores disponibles si se desea filtrar por categoria.
3. Tocar **Buscar** para ejecutar la consulta y ver los resultados.
4. Seleccionar el cliente correspondiente de la lista de resultados. El sistema lo vincula automaticamente a la venta activa o pedido de delivery en curso.
5. Tocar **Limpiar** para resetear todos los filtros y realizar una nueva busqueda.

### Crear una campaña de WhatsApp

1. Dentro del modulo de Clientes, acceder a la seccion de **Campañas de WhatsApp**.
2. Tocar el boton **Crear Campaña** para abrir el formulario de configuracion.
3. Ingresar el nombre de la campaña, seleccionar el estado inicial y definir las fechas de inicio y vigencia.
4. Seleccionar el template de mensaje previamente configurado que se utilizara para el envio.
5. Confirmar la campaña. El sistema registrara los envios y mostrara las metricas de mensajes enviados y errores en el listado de campañas.

![Pantalla de Campañas de WhatsApp](images/ventas/campanas-whatsapp.png)
_Modulo de Campañas de WhatsApp con listado de envios, estado, metricas y boton de creacion_

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Crear Nuevo Cliente** | Abre el formulario de alta para registrar un nuevo comensal o comprador en la base de datos. |
| **Buscar** | Ejecuta la consulta de clientes aplicando los filtros ingresados en los campos de busqueda. |
| **Limpiar** | Resetea todos los campos de busqueda y selectores para iniciar una nueva consulta. |
| **Editar** | Abre el formulario de modificacion para actualizar los datos de un cliente existente. |
| **Eliminar** | Elimina el registro del cliente de la base de datos de forma permanente. |
| **Crear Campaña WhatsApp** | Abre el asistente de configuracion para diseñar y programar un envio masivo de mensajes. |
| **Configurar Templates** | Accede a la pantalla de configuracion de templates de mensajes por situacion para las campañas. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El campo CUIT genera un error de validacion al guardar el cliente. | Verificar que el CUIT ingresado tenga exactamente 11 digitos numericos sin guiones ni espacios. El sistema valida el formato y el digito verificador antes de aceptar el dato. |
| La campaña de WhatsApp fue creada pero los mensajes no llegan a los destinatarios. | Verificar que los templates de mensajes esten correctamente configurados y aprobados en la seccion de configuracion. También confirmar que los numeros de telefono de los clientes esten registrados en formato internacional. |
| Al buscar un cliente no aparecen resultados aunque el cliente existe. | Verificar que los datos ingresados en los campos de busqueda sean correctos y coincidan exactamente con los datos registrados. Intentar buscar con menos filtros o con otro campo alternativo como el telefono o el numero de documento. |
