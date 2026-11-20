# Mapa de Mesas

> **Ubicacion en el sistema:** Menu principal → **Ventas** → **Mapa de Mesas**  
> **Usuarios habilitados:** Encargados de Salon, Anfitriones y Mozos

---

## Descripcion General

El Mapa de Mesas ofrece una representacion grafica y visual de la distribucion del salon en tiempo real. A diferencia del listado de tarjetas del Salon de Ventas, esta pantalla muestra la disposicion fisica aproximada de las mesas dentro de cada sector del local, lo que facilita la lectura del estado de ocupacion de forma intuitiva y espacial.

Cada mesa se representa con un icono o figura en su posicion dentro del plano del sector, coloreada segun su estado actual de ocupacion. Esta vista es especialmente util para los anfitriones y encargados que necesitan asignar mesas a clientes que ingresan al local, ya que pueden identificar de un vistazo cuales estan disponibles, cuales estan siendo atendidas y cuales ya solicitaron la cuenta.

El mapa se organiza en pestañas por sector, permitiendo cambiar rapidamente entre el Salon Principal, el Patio, la Barra, la Terraza u otros sectores que hayan sido configurados. Tambien muestra el tiempo de ocupacion de cada mesa activa, lo que permite al encargado detectar mesas con mucho tiempo de permanencia y coordinar el servicio en consecuencia.

---

## Requisitos Previos

- Tener configurados los sectores y las mesas del local desde el modulo de Administracion de Mesas.
- Contar con el permiso de Visualizacion de Mapa de Salon asignado al rol del usuario.

---

## Guia de Uso

### Monitorear el estado del salon

1. Ingresar al Mapa de Mesas desde el menu de Ventas.
2. Seleccionar la pestaña del sector que se desea visualizar: Salon Principal, Patio, Barra, Terraza u otros.
3. Observar los colores de las mesas para identificar su estado actual:
   - Verde: mesa libre y disponible para ser asignada.
   - Rojo: mesa ocupada con consumo activo en curso.
   - Amarillo: mesa adicionada, el cliente ya solicito la cuenta y esta esperando el cobro.
   - Azul: mesa con reserva asignada para un horario proximo.
4. Cambiar entre pestañas de sectores segun sea necesario para tener una vision completa del local.

### Abrir una mesa desde el mapa

1. Localizar en el plano del sector una mesa con color verde (libre).
2. Tocar el icono de la mesa para iniciar su apertura.
3. Seleccionar el mozo responsable e indicar la cantidad de comensales.
4. Confirmar la apertura. La mesa cambia a color rojo indicando que esta ocupada y activa.

---

## Acciones Disponibles

| Accion | Descripcion |
|---|---|
| **Pestañas de Sector** | Cambia la vista entre los distintos sectores del local: Salon, Patio, Barra, Terraza u otros configurados. |
| **Mesa Libre** | Al tocar una mesa verde, permite abrirla asignando mozo y cantidad de comensales. |
| **Mesa Ocupada** | Al tocar una mesa roja o amarilla, muestra el detalle del consumo activo y da acceso a las acciones de adicion o cobro. |

---

## Resolucion de Problemas

| Situacion | Solucion |
|---|---|
| No aparecen mesas en la pantalla del mapa. | Verificar que se haya seleccionado una pestaña de sector activa. Si ningun sector muestra mesas, confirmar que los sectores y mesas esten configurados correctamente en el modulo de Administracion. |
| Una mesa aparece ocupada pero los clientes ya se retiraron del local. | El cobro de esa mesa no fue completado correctamente. Acceder a la mesa desde el Salon de Ventas o desde el propio mapa, revisar el consumo y proceder al cierre o anulacion correspondiente para liberar la mesa. |
| El color de una mesa no refleja el estado real de ocupacion. | Recargar la pantalla del Mapa de Mesas. Si el problema persiste, verificar la conexion del dispositivo a la red local del sistema. |
