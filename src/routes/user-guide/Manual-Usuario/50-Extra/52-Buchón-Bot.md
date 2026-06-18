# Buchón Bot

<div id="buchon-bot"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>🎯</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> Es tu "espía digital" que te avisa por Telegram cuando ocurre algún evento relevante en tu negocio. Desde alertas cuando el stock baja, hasta avisos si se registran movimientos inusuales. ¡Tus ojos cuando no estás!
	</div>
</div>

<div class="doc-callout doc-callout-warning" style="margin-bottom: 2rem;">
	<span>⚠️</span>
	<div>
		<strong>Acceso Exclusivo:</strong> Este módulo está diseñado únicamente para el usuario de <strong>Propietario / Dueño</strong>. El personal o empleados no tienen permisos para visualizar o editar esta configuración.
	</div>
</div>

---

## 📱 ¿Cómo funciona?

```
🚨 Se registra un evento clave en el sistema
   ↓
🤖 Buchón Bot lo detecta automáticamente
   ↓
📲 Te llega una notificación inmediata a Telegram
   ↓
🏃‍♂️ Tomás acciones rápidas desde tu celular
```

---

## 🔍 Alertas Disponibles

El bot te enviará notificaciones instantáneas ante las siguientes situaciones de stock e inventario:

| Situación | Ejemplo de Notificación | Importancia / Acción |
| :--- | :--- | :--- |
| **Stock Crítico** | `⚠️ Quedan solo 2 Coca-Colas` | Permite contactar al proveedor antes de que se agote por completo. |
| **Stock Agotado** | `🚨 ¡Se acabó el Asado!` | Permite dar aviso inmediato a los mozos para pausar la venta de ese plato. |
| **Movimiento Manual** | `👀 Se descontaron 50 empanadas sin venta` | Ideal para detectar mermas inusuales, desperdicios o errores administrativos. |

---

## ⚙️ Configuración Paso a Paso

### **Paso 1 — Conectar Telegram**
1. Abrí la app de **Telegram** en tu teléfono móvil.
2. Buscá el bot oficial de **{{BRAND_NAME}}** (solicitá el link directo a soporte técnico).
3. Iniciá el chat enviando el comando `/start`.
4. El bot te responderá con tu **Chat ID** numérico. Copialo.

### **Paso 2 — Habilitar alertas en el sistema**
1. Iniciá sesión en {{BRAND_NAME}} con tu cuenta de Propietario.
2. Dirigite a **Configuración** → **Buchón Bot**.
3. Pegá tu **Chat ID** de Telegram en el campo correspondiente.
4. Marcá las casillas de las alertas que deseás recibir:

| Alerta | Recomendación | Propósito |
| :--- | :---: | :--- |
| **Stock Bajo** | ✅ **Activar** | Evitar quiebres de stock en insumos clave. |
| **Ventas Grandes** | ✅ **Activar** | Monitoreo y control de transacciones de montos elevados. |
| **Anulaciones** | ✅ **Activar** | Prevención de fraudes al anular tickets cobrados o mesas. |
| **Acceso fuera de hora** | ⚠️ **Opcional** | Control de seguridad si el local permanece cerrado. |

### **Paso 3 — Ajustar límites y umbrales**
Definí las reglas específicas para activar los envíos:

*   **Stock mínimo general:** Cantidad de unidades a partir de la cual se considera stock crítico (ej. `5` unidades).
*   **Descuento máximo permitido:** Porcentaje máximo de descuento que un cajero puede aplicar sin que el bot te alerte (ej. `50%`).
*   **Horarios permitidos:** Rango de horas en el que es habitual operar (ej. `08:00` a `00:00` hs). Cualquier acción fuera de este horario generará alerta.

---

## 💡 Casos de Uso Prácticos

### **Caso A: Gestión en un Restaurante**
```
📲 Alerta: "⚠️ Quedan 3 milanesas - Stock crítico"
   ↓
📞 El dueño llama al proveedor para reponer antes del próximo turno.
```

### **Caso B: Prevención en una Pizzería**
```
📲 Alerta: "🍅 ¡Se acabó la salsa de tomate!"
   ↓
🍕 Se notifica a cocina y se desactiva temporalmente el producto en el menú digital.
```

---

## 🚨 Resolución de Problemas Frecuentes

*   **¿No te llegan los mensajes?**
    *   *Solución:* Aseguráse de haber enviado `/start` al bot en Telegram y que el **Chat ID** guardado en el sistema sea idéntico al que te brindó el bot.
*   **¿Te llegan demasiadas notificaciones?**
    *   *Solución:* Incrementá el umbral de alerta (por ejemplo, bajá el stock mínimo de alerta a `2` unidades o subí el monto mínimo de ventas grandes).
*   **¿Alertas incorrectas de stock?**
    *   *Solución:* Revisá que la conversión de unidades (cajas, packs, botellas individuales) esté bien cargada en el Maestro de Productos.

---

<div class="doc-callout doc-callout-note" style="margin-top: 2rem;">
	<span>💬</span>
	<div>
		<strong>¿Necesitás ayuda con la integración?</strong><br>
		Contactá con nuestro equipo de soporte técnico y te ayudaremos a dejar configuradas todas tus alertas en pocos minutos.
	</div>
</div>
