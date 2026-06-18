# Configuración de Permisos por Rol

<div id="permisos-por-rol"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🎯</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Permite delimitar qué acciones puede realizar cada perfil de usuario dentro del sistema, protegiendo la información sensible de facturación y configuraciones críticas.
	</div>
</div>

<div class="doc-callout doc-callout-warning" style="margin-bottom: 2rem;">
	<span>⚠️</span>
	<div>
		<strong>Atención:</strong> Modificar los permisos sin comprender su alcance puede bloquear funciones operativas esenciales o exponer datos confidenciales a personal no autorizado.
	</div>
</div>

---

## ⚠️ Requisito importante antes de comenzar

Si decidís modificar los permisos de un rol específico, es **obligatorio configurar el esquema completo para el resto de los roles** (Dueño, Encargado, Cajero, Mozo, Cocinero). Modificar un único perfil de forma aislada puede generar inconsistencias operativas en el flujo de trabajo (por ejemplo, permitir que un mozo mande una comanda pero que el cocinero no tenga permiso de visualizarla).

---

## 📋 Paso a paso: Modificar permisos de un rol

### **Paso 1: Ingresar al panel de seguridad**
1. Hacé clic en **Configuración** en la barra de menú lateral.
2. Seleccioná la opción **Permisos por rol**.

### **Paso 2: Seleccionar el perfil**
3. En pantalla se listarán los roles predefinidos (*Dueño, Encargado, Cajero, Mozo, Adicionista, Cocinero, Auditor*).
4. Hacé clic sobre el rol que deseás configurar para desplegar su grilla de permisos.

### **Paso 3: Configurar las acciones por módulo**
Los permisos se estructuran sobre **6 áreas operativas principales**:

| Área | Alcance del Módulo |
| :--- | :--- |
| **Finanzas** | Flujo de caja, arqueos, egresos e ingresos de dinero. |
| **Operaciones** | Gestión general del salón, cocinas y comandas. |
| **Personal** | Fichas de empleados, turnos de trabajo y cuentas de usuario. |
| **Reportes** | Estadísticas de ventas, productos más vendidos y auditorías. |
| **Sistema** | Parámetros generales de la plataforma e impresoras. |
| **Ventas** | Toma de pedidos, facturación electrónica y manejo de mesas. |

Para cada área, podés tildar o destildar **4 niveles de control**:
*   👁️ **Ver:** Autoriza a visualizar la pantalla o listado.
*   ➕ **Crear:** Permite agregar nuevos registros o iniciar transacciones.
*   ✏️ **Editar:** Habilita la modificación de registros ya existentes.
*   🗑️ **Eliminar:** Otorga permisos para borrar registros o cancelar operaciones fiscales.

### **Paso 4: Confirmar y Guardar**
*   Los cambios se aplican y se guardan **automáticamente** al tildar o destildar cada casilla de verificación.
*   No hay un botón de guardar; los accesos del personal se actualizan en tiempo real al recargar su sesión.

---

## 🎭 Matriz de Configuración Recomendada

Te aconsejamos mantener la siguiente distribución de permisos básicos:

| Rol | Permisos Sugeridos | Propósito Operativo |
| :--- | :--- | :--- |
| **Dueño** | 🟢 **Acceso Total** en todos los módulos. | Control administrativo y estratégico absoluto. |
| **Encargado** | 🟡 **Acceso Total** (excepto Eliminación en Finanzas y Sistema). | Gestión operativa diaria del salón y resolución de conflictos. |
| **Cajero** | 🔵 **Ventas y Finanzas** (solo Ver/Crear). 🔴 **Sistema/Personal** bloqueado. | Operar la caja diaria, emitir facturas y realizar arqueos de cierre. |
| **Mozo** | 🔵 **Ventas** (solo Ver/Crear en comandas y mesas). | Registro rápido de pedidos a clientes en el salón. |
| **Cocinero** | 🔵 **Operaciones** (solo Ver comandas). | Preparación y despacho de platos en la cocina. |

---

## 🚨 Resolución de problemas comunes

*   **¿No encuentro el botón para guardar los cambios?**
    *   *Respuesta:* El panel de permisos graba las modificaciones de manera automática al marcar la casilla. Solo debés asegurarte de que la conexión a internet sea estable al realizar los cambios.
*   **¿Un empleado no puede facturar a pesar de tener el permiso asignado?**
    *   *Solución:* Comprobá si el empleado está asignado al rol correcto de Cajero y si tiene habilitados tanto el permiso de **Ventas** (Crear) como de **Finanzas** (Ver/Crear) para procesar pagos.
*   **¿Deseás restablecer los permisos por defecto?**
    *   *Solución:* Si realizaste cambios que afectaron la operatividad del sistema y querés volver al estado inicial, ponete en contacto con nuestro **soporte técnico** para restaurar los perfiles de fábrica. No intentes recrear la configuración manualmente si no estás seguro de la equivalencia de cada opción.
