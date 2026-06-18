# Crear Usuarios

<div id="crear-usuarios"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🎯</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Vas a crear cuentas individuales y protegidas para los dueños, encargados, cajeros y personal administrativo que van a operar <strong>{{BRAND_NAME}}</strong>. Cada uno ingresará con su propio email y contraseña para mayor seguridad y auditoría.
	</div>
</div>

---

## 📋 Paso a paso: Crear tu primer usuario

### **Paso 1: Acceder al módulo de usuarios**
1. Abrí el menú lateral y buscá la sección **Configuración**.
2. Hacé clic en la opción **Usuarios**.

### **Paso 2: Iniciar la creación**
3. En la pantalla del listado de usuarios, hacé clic en el botón destacado **Crear Usuario**.

### **Paso 3: Completar los datos**
Completá el formulario con la información del nuevo integrante:

| Campo | Descripción |
| :--- | :--- |
| **Nombre** | Nombre y apellido completo del empleado (ej. *María Pérez*). |
| **Mail** | Correo electrónico que usará para iniciar sesión. |
| **Contraseña** | Clave provisoria y segura para su primer ingreso. |
| **Rol** | El perfil de permisos que determinará qué puede ver y hacer en el sistema. |

---

## 🎭 Roles y Permisos Disponibles

Seleccioná el rol adecuado según el puesto de trabajo:

| Rol | Orientado a | Permisos Clave |
| :--- | :--- | :--- |
| **Dueño / Administrador** | Propietarios y gerentes | Acceso total a configuraciones, reportes de ventas, costos y gestión de personal. |
| **Encargado** | Supervisores de turno | Cierre de caja, edición de pedidos, aplicación de descuentos y control operativo. |
| **Cajero** | Personal de cobro | Operaciones de caja, cobros, facturación electrónica y arqueos de caja diarios. |
| **Mozo** | Personal de salón | Apertura de mesas, adición de consumos y envío de comandas a cocina. |
| **Cocinero / Barra** | Personal de producción | Visualización exclusiva de pantallas de comandas y preparación de platos. |

---

## 📱 Método alternativo: Usuario con PIN (Para mozos y cocineros)

<div id="usuario-con-pin"></div>

<div class="doc-callout doc-callout-tip" style="margin-bottom: 1.5rem;">
	<span>💡</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Es un método ultra rápido diseñado para tablets y terminales comunes de salón. En lugar de escribir un email y clave, el mozo toca su nombre e ingresa un <strong>PIN numérico de 4 dígitos</strong> (ej. <code>1111</code>) para registrar una orden al instante.
	</div>
</div>

### **Cómo configurar un usuario con PIN:**

1. Dirigite a **Configuración** en el menú lateral.
2. Seleccioná la opción **Usuarios con PIN**.
3. Hacé clic en **Crear Usuario**.
4. Completá la ficha:
   *   **Nombre de Usuario:** Un alias identificativo (ej. *Turno Noche* o el nombre del mozo).
   *   **Rol:** Asigná el perfil (usualmente *Mozo* o *Cocinero*).
   *   **PIN:** Escribí un código numérico de 4 dígitos.
5. Hacé clic en **Guardar**.

### **¿Cómo ingresa el personal?**
1. En la pantalla principal de login de {{BRAND_NAME}}, seleccionan **"Ingresar con PIN"**.
2. Digitan su código asignado.
3. ¡Listo! Ya están operando el salón.

---

## 💡 Consejos de seguridad y buenas prácticas

*   ⚠️ **Cuentas individuales:** Evitá compartir el usuario de Administrador/Dueño con el personal para mantener un registro claro de auditoría.
*   ⚠️ **PINs no predecibles:** Evitá usar códigos obvios como `0000`, `1234` o el año corriente.
*   ⚠️ **Esquema híbrido:** Recomendamos usar cuentas con email para roles administrativos (Cajeros, Encargados, Dueño) y el sistema de PIN rápido para los Mozos en el salón.

---

## 🚨 Resolución de problemas comunes

*   **¿El sistema no te permite guardar el usuario?**
    *   *Solución:* Aseguráse de que el correo electrónico no esté registrado previamente por otro usuario. El campo de email debe ser único en la base de datos.
*   **¿El mozo no ve la opción de PIN al abrir la aplicación?**
    *   *Solución:* Aseguráse de que estás en la pantalla de login del punto de venta correcto y que el usuario con PIN fue guardado y activado.
*   **¿El PIN ingresado da error?**
    *   *Solución:* Verificá desde la cuenta de administrador que el PIN no se haya modificado o que la cuenta del empleado no esté suspendida.
