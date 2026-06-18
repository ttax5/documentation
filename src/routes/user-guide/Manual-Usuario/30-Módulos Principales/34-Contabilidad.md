# Módulo de Contabilidad y Compras

<div id="contabilidad"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>📊</span>
	<div>
		<strong>¿Para qué sirve esto?</strong> El módulo de Contabilidad te permite llevar un registro pormenorizado de los egresos e ingresos indirectos de tu negocio, organizar tus proveedores, asentar las facturas de compra y controlar tus deudas para fin de mes.
	</div>
</div>

---

## 🏪 1. Configuración de Proveedores

Para llevar un control preciso de a quién le compras mercadería y cuánto dinero le debés, primero debés registrar a tus proveedores en la base de datos:

### **Paso a paso para crear un proveedor:**
1. Dirigite al menú lateral y navegá a: **Compras** ➡️ **Proveedores**.
2. Hacé clic en el botón **Nuevo Proveedor**.
3. Completá la ficha técnica del proveedor:

| Campo | Propósito | Ejemplo |
| :--- | :--- | :--- |
| **Nombre o Razón Social** | Nombre comercial o de fantasía. | *Verdulería Don José* |
| **Tipo de Impuesto** | Responsabilidad tributaria ante el fisco. | *IVA Responsable Inscripto* |
| **Teléfono** | Teléfono de contacto de la distribuidora. | *011-4567-8910* |
| **Tipo de Documento** | Documento identificatorio (CUIT/DNI). | *CUIT* |
| **Número de Documento** | Identificación fiscal numérica. | *20-12345678-9* |

4. Hacé clic en **Guardar**. Repetí el proceso para todos los proveedores habituales.

---

## 💰 Registrar Gastos y Facturas de Compra

<div id="facturas-gasto"></div>

Una vez que tengas creados los perfiles de proveedores, podés asentar las facturas de gastos operativos de tu local (comida, alquiler, servicios, etc.):

### **Paso a paso para cargar un gasto:**
1. Desde el módulo de **Contabilidad**, hacé clic en **Nuevo Gasto**.
2. Completá los datos del comprobante recibido:

| Campo | Propósito | Ejemplo |
| :--- | :--- | :--- |
| **Proveedor** | Seleccioná el proveedor emisor desde el buscador. | *Verdulería Don José* |
| **Tipo de Factura** | Tipo de comprobante fiscal. | *Factura B* (o Factura A/C/Ticket). |
| **Número de Factura** | Identificador de 12 dígitos de la factura. | *0001-00001234* |
| **Fecha de Emisión** | Fecha en la que se generó la factura. | *15/01/2026* |
| **Monto Total** | Importe final del comprobante con IVA incluido. | *$25.000,00* |
| **Clasificación** | Categoría contable del gasto para ordenamiento. | *Mercadería* (o Servicios, Alquiler). |
| **Observación** | Nota aclaratoria opcional para control interno. | *Compra verduras primera quincena* |

---

### **Opciones de registro final:**

*   🟢 **Opción A: Guardar como Pagada**
    *   *Cuándo usar:* Si ya realizaste el pago en efectivo o por transferencia al recibir la mercadería.
    *   *Resultado:* El sistema registra el gasto y descuenta automáticamente el dinero de la caja activa del día, cerrando la transacción.
*   🟡 **Opción B: Continuar sin Pagar (Compra a Cuenta Corriente)**
    *   *Cuándo usar:* Si el proveedor te da financiamiento (compras "en cuenta" para abonar a fin de semana o mes).
    *   *Resultado:* El gasto se registra en tus balances pero el saldo queda marcado como pendiente, indexándose dentro del **Resumen de Deudas a Proveedores** para su posterior liquidación.

---

## 📈 Flujo Operativo del Gasto

```text
  📩 Llega la factura del proveedor
               ↓
  💾 Se registra el comprobante en el sistema
               ↓
    🤔 ¿Se pagó en el momento?
         /           \
     (SÍ)             (NO)
      /                 \
🟢 Guardar como Pagada   🟡 Continuar sin Pagar
      │                   (Registra deuda pendiente)
      │                           ↓
  Transacción            💰 Liquidar desde panel
   Cerrada                "Resumen de Deudas"
      │                           │
      └───────────┬───────────────┘
                  ↓
         ✅ Contabilidad al día
```

---

## 🚨 Resolución de problemas comunes

*   **¿El sistema no te permite registrar un nuevo gasto?**
    *   *Solución:* Aseguráse de que el proveedor emisor esté previamente creado en la base de datos de Compras. No se pueden registrar facturas de proveedores inexistentes.
*   **¿Cargaste una factura por un importe erróneo?**
    *   *Solución:* Buscá la factura en el **Listado de Gastos**, hacé clic en **Editar**, modificá los montos y guardá los cambios. El balance diario de caja se recalculará automáticamente.
*   **¿No sabés qué clasificación asignarle a un gasto específico?**
    *   *Solución:* Te recomendamos consultar con tu contador o administrador del local para categorizar de forma uniforme (ej. diferenciar insumos de cocina de gastos generales de mantenimiento).
