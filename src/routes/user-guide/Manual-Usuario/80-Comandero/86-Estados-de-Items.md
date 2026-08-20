# Estados de Items de Comanda

> **Ubicacion en el sistema:** Menu principal → **Comandero** → **General** → **Estados de Items**  
> **Usuarios habilitados:** Administradores del Sistema

---

## Descripcion General

Los Estados de Items (o Estados por Puesto) permiten gestionar el flujo de preparacion individual de cada producto segun la estacion o puesto de trabajo asignado (cocina, parrilla, barra, vegetales, etc.). Cuando un ítem llega a la pantalla KDS de su puesto, avanza por estos estados de izquierda a derecha.

Esta funcionalidad asegura un control detallado y granular del despacho en cocina. Por ejemplo, en el puesto *Vegetales*, el flujo puede avanzar secuencialmente por: *Pendiente* (1 de 4) → *Elaborando* (2 de 4) → *Listo* (3 de 4) → *Saliendo* (4 de 4).

![Flujo de Estados por Puesto](images/comandero/estados-puesto-flujo.png)
_Vista del flujo de estados configurado para cada puesto de trabajo_

---

## Requisitos Previos

- El usuario debe contar con permisos de administracion del sistema.
- Los puestos de comanda deben encontrarse previamente definidos (ver seccion **Puestos de Comanda**).

---

## Guia de Uso

### Creacion de un nuevo estado para un puesto

1. Presionar el boton **+ Agregar estado** ubicado dentro de la tarjeta del puesto correspondiente o en el encabezado general.
2. En el modal emergente completar los siguientes campos:
   - **Nombre:** Denominacion del estado, pudiendo incluir emojis para distincion visual rápida (por ejemplo: "⏳ Pendiente", "🍳 Elaborando", "✅ Listo").
   - **Puesto:** Seleccionar el puesto de trabajo al que pertenece este estado (cocina, barra, vegetales, etc.).
   - **Estado anterior:** Indicar la etapa previa en la secuencia (o dejar en blanco / "Seleccione" si sera el primer estado del flujo).
   - **Color del estado:** Elegir la tonalidad visual que identificara este estado en la pantalla KDS (por ejemplo: Gris — Pendiente, Verde — Listo, etc.).
3. Presionar **Guardar** para registrar el estado en el puesto correspondiente.

![Formulario para agregar estado por puesto](images/comandero/estados-puesto-agregar.png)
_Modal de creacion y asignacion de estado a un puesto de trabajo_

### Seguimiento y actualizacion en KDS

Una vez definidos los flujos por puesto, los operarios de cada estacion pueden avanzar el estado de los platos de forma independiente a medida que avanza su preparacion.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **+ Agregar estado** | Abre el formulario para registrar un nuevo estado asignado a un puesto especifico. |
| **Organizar Secuencia** | Configura la correlatividad de los estados (estado anterior y posterior) por estacion. |
| **Identificacion Cromatica** | Asigna colores y etiquetas visuales a los estados para visualizacion rapida en KDS. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| El mozo no recibe aviso cuando un plato individual esta listo. | Acceder a la configuracion del estado de item correspondiente y verificar que la opcion **Notificar al Mozo** este activada. |
| No se puede cambiar el estado de un item en la pantalla KDS. | Verificar que existan estados de items configurados en el sistema. Si no se ha creado ningun estado de item, la funcionalidad de gestion individual por producto no estara disponible en la pantalla de cocina. |
| Se necesita diferenciar entradas y platos principales en el despacho. | Configurar estados de item que permitan marcar productos como listos de forma independiente. Activar las notificaciones en el estado de finalizacion para que el mozo pueda retirar las entradas sin esperar al resto del pedido. |
