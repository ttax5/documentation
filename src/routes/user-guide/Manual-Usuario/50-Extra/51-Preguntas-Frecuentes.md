# Preguntas Frecuentes

<div id="preguntas-frecuentes"></div>

<div class="doc-callout doc-callout-note" style="margin-bottom: 2rem;">
	<span>❓</span>
	<div>
		<strong>Centro de ayuda rápida</strong> — Esta sección reúne las consultas más comunes sobre {{BRAND_NAME}} y sus soluciones técnicas paso a paso. Encontrarás respuestas inmediatas a problemas frecuentes de configuración, impresión, stock y operaciones diarias.
	</div>
</div>

---

## 🚨 Solución Universal — Probá esto primero

<div id="solucion-universal"></div>

<div class="doc-callout doc-callout-warning" style="margin-bottom: 2rem;">
	<span>⚠️</span>
	<div>
		<strong>ANTES DE REVISAR LOS PROBLEMAS ESPECÍFICOS:</strong><br>
		Si experimentás <strong>cualquier error raro</strong>, <strong>pantalla en blanco</strong> o <strong>comportamiento inesperado</strong>, probá primero estas soluciones básicas:
	</div>
</div>

### 🔄 Solución Rápida

| Paso | Acción |
| :---: | :--- |
| **1** | Cerrá completamente la aplicación |
| **2** | Volvé a abrir |
| **3** | Intentá nuevamente la operación |

### 🖥️ Solución Completa

| Paso | Acción |
| :---: | :--- |
| **1** | Cerrá sesión |
| **2** | Reiniciá el dispositivo (PC, tablet, etc.) |
| **3** | Volvé a iniciar sesión |

<div class="doc-callout doc-callout-tip" style="margin-bottom: 1.5rem;">
	<span>💡</span>
	<div>
		<strong>¿Por qué funciona esto?</strong> Muchos problemas se deben a memoria temporalmente sobrecargada, conexiones de red intermitentes o datos en caché corruptos. Un reinicio limpia todo esto. Si el problema <strong>persiste después del reinicio</strong>, revisá las soluciones específicas a continuación.
	</div>
</div>

---

## 🔧 Problemas Técnicos Resueltos

---

### 1. Los tipos de pago no aparecen al cobrar una mesa

<div id="tipos-pago-no-aparecen"></div>

**Problema:** Configuré los tipos de pago pero cuando voy a cobrar no veo las opciones de Visa, MercadoPago, etc.

**Solución:**

1.  **Verificar casillas:** Ve a la **P roja** → _Tipos de Pago_ y asegurate de que tengas marcada la casilla **"Para Cobros"** en cada método.
2.  **Revisar nombres:** Verificá que los nombres no tengan caracteres especiales o espacios al principio/final.
3.  **Reiniciar sesión:** Cerrá completamente y volvé a abrir para que tome los cambios.

---

### 2. Los mozos no ven todas las mesas que deberían ver

<div id="mozos-no-ven-mesas"></div>

**Problema:** Configuré un mozo pero solo ve algunas mesas o no ve ninguna.

**Solución:**

1.  **Revisar visibilidad:** En **P roja** → _Mozos_ → [Mozo] → editá y verificá la sección **"Qué Usuarios Puede Ver"**.
2.  **Configuración por sectores:** Si querés que vea todas las mesas, dejá todas las opciones **sin marcar**. Si querés sectores específicos, marcá solo las que corresponden.
3.  **Verificar rol:** Asegurate de que tenga el rol correcto (Mozo, Vendedor, etc.).
4.  **Reiniciar el módulo Salón:** Cerrá y volvé a abrir el módulo de Salón.

---

### 3. Las comandas no salen en la impresora de cocina

<div id="comandas-no-imprimen"></div>

**Problema:** Tomo el pedido pero la impresora de cocina no imprime la comanda.

**Solución:**

1.  **Verificar asignación:** En configuración de impresoras, asegurate de tener asignada la **impresora de comandas** correctamente.
2.  **Revisar impresora configurada:** Los productos pueden tener impresoras asignadas que les indican por qué comandera van a imprimirse. Verificá en _Productos en venta → [Tu producto] → printer_ que la impresora esté bien seleccionada.
3.  **Probar impresora:** Hacé una **impresión de prueba** desde el panel de impresoras para verificar conectividad.
4.  **Verificar papel:** Asegurate de que la impresora tenga papel y esté encendida.

---

### 4. No imprime facturas fiscales o aparece "Error de Fiscalberry"

<div id="error-fiscalberry"></div>

**Problema:** Al intentar imprimir una factura fiscal no sale nada o aparece "Error de Fiscalberry".

<div class="doc-callout doc-callout-warning" style="margin-bottom: 1.5rem;">
	<span>🚨</span>
	<div>
		<strong>¡Lo más importante!</strong> Verificá que <strong>Fiscalberry esté abierto y funcionando</strong> en la PC con la impresora fiscal. Es el error más común: Fiscalberry debe estar ejecutándose en segundo plano.
	</div>
</div>

**Solución:**

1.  **Revisar conexión:** Verificá que la impresora fiscal esté encendida y conectada correctamente (USB/Serie).
2.  **Test de impresión:** Abrí el módulo impresoras y hacé un **test de impresión** directo para verificar que la comunicación funciona.

---

### 5. El stock de mercadería no coincide con la realidad

<div id="stock-incorrecto"></div>

**Problema:** Compré 12 botellas pero el sistema muestra números incorrectos en stock.

**Solución:**

1.  **Verificar "Cantidad que suma":** En la mercadería, revisá que el campo **"Cantidad que Suma en Stock"** esté bien calculado (si comprás 1 caja de 12, debe decir 12).
2.  **Revisar unidades:** Asegurate de que las unidades de compra y venta sean consistentes (no mezclar cajas con unidades).
3.  **Revisar conversión:** Verificá en _Maestro de Productos_ que la conversión entre mercadería y producto esté correcta.

---

### 6. No puedo crear una factura A porque falta el cliente

<div id="falta-cliente-factura"></div>

**Problema:** Al querer facturar aparece error porque no está cargado el cliente.

**Solución:**

1.  **Agregar cliente en la mesa:** En el Salón, seleccioná la mesa y hacé clic en **"Agregar Cliente"**.
2.  **Crear cliente nuevo:** Clic en **"Crear Cliente"** y completá todos los datos obligatorios (CUIT, razón social, dirección).
3.  **Verificar tipo de documento:** Asegurate de seleccionar el tipo correcto (CUIT para empresas, CUIL para personas).
4.  **Condición IVA:** Seleccioná la condición ante IVA correcta del cliente.

---

### 7. El arqueo no cierra: hay diferencia entre sistema y caja real

<div id="arqueo-no-cierra"></div>

**Problema:** El sistema dice que debería haber $50.000 pero en la caja física hay $48.500.

**Solución:**

1.  **Revisar movimientos del día:** Ve a _Arqueo → Movimientos_ y verificá todas las transacciones: ventas, pagos, ingresos y egresos.
2.  **Verificar propinas:** Asegurate de que las propinas estén registradas correctamente (no como ventas adicionales).
3.  **Revisar pagos a proveedores:** Confirmá que todos los pagos realizados estén cargados en el sistema.
4.  **Contar nuevamente:** Volvé a contar el efectivo físico, separando billetes por denominación.

---

### 8. Los productos con variantes no se cargan correctamente

<div id="variantes-no-funcionan"></div>

**Problema:** Configuré variantes (como "tipo de salsa") pero al tomar el pedido no aparecen las opciones.

**Solución:**

1.  **Verificar asignación:** En _Productos → [Tu producto] → Editar_ asegurate de tener asignada la variante en **"Asignar Variante"**.
2.  **Revisar opciones:** Cada opción de la variante debe estar vinculada a un producto del Maestro (subproducto o producto en venta).
3.  **Probar desde el menú:** Ve al módulo de ventas y verificá que al seleccionar el producto aparezcan las opciones.
4.  **Reiniciar menú:** Cerrá y volvé a abrir {{BRAND_NAME}}.

---

### 9. Las estadísticas muestran números que no coinciden con la realidad

<div id="estadisticas-incorrectas"></div>

**Problema:** En Business Intelligence veo que vendí $100.000 pero en el arqueo tengo menos dinero.

**Solución:**

1.  **Revisar tipos de pago:** En _Estadísticas → Ventas por Tipo de Cobro_ verificá cuánto fue efectivo vs tarjetas/transferencias.
2.  **Verificar período:** Asegurate de que estés viendo el mismo período en estadísticas y arqueo.
3.  **Incluir todos los gastos:** Los pagos a proveedores reducen el efectivo pero no las ventas.

---

### 10. El KDS no muestra los pedidos de algunas categorías

<div id="kds-categorias-faltantes"></div>

**Problema:** Los platos principales aparecen en la pantalla de cocina pero las ensaladas no.

**Solución:**

1.  **Verificar configuración del KDS:** Asegurate de haber configurado todos los **Puestos de cocina** (fríos, calientes, bar, etc.).
2.  **Asignar productos:** Cada producto debe estar asignado al puesto correcto (_Ensaladas → Puesto Fríos_).
3.  **Revisar categorías:** Los productos deben tener categorías bien definidas y asignadas.
4.  **Reiniciar KDS:** Refrescá la pantalla del Kitchen Display System (`F5`).

---

### 11. {{BRAND_NAME}} funciona lento en mi configuración

<div id="software-lento"></div>

**Problema:** La plataforma tarda mucho en cargar o responder.

**Solución:**

1.  **Limpiar caché:** Borrá la caché del navegador y los datos temporales presionando `Ctrl + F5` para forzar recarga, o `Ctrl + R`.
2.  **Cerrar aplicaciones:** Cerrá otras aplicaciones que puedan estar consumiendo recursos.
3.  **Verificar conexión a internet:** Asegurate de tener una conexión estable y rápida.

---

### 12. ¿Cómo manejo inventario con múltiples depósitos?

<div id="multiples-depositos"></div>

**Problema:** Tengo varios depósitos y no sé cómo gestionar el inventario entre ellos.

**Solución:**

1.  **Configurar depósitos:** Ve a _P roja → Depósitos_ y creá todos los depósitos que necesites.
2.  **Asignar productos a depósitos:** Al crear o editar un producto, asignalo al depósito correspondiente.

---

### 13. No puedo abrir la caja al inicio del turno

<div id="no-puedo-abrir-caja"></div>

**Problema:** Cuando intento abrir la caja desde el módulo Salón, no pasa nada o aparece un error.

**Solución:**

1.  **Verificar que no esté abierta:** Revisá si la caja ya está abierta desde otro usuario o turno anterior.
2.  **Cerrar caja anterior:** Si quedó una caja abierta del turno anterior, primero tenés que cerrarla.
3.  **Verificar permisos:** Asegurate de que tu usuario tenga permisos para gestionar cajas.
4.  **Reiniciar el módulo:** Cerrá completamente el módulo Salón y volvé a abrirlo.
5.  **Verificar configuración de cajas:** En **P roja** → _Cajas_ verificá que las cajas estén correctamente configuradas.

---

### 14. El arqueo no coincide al cerrar la caja

<div id="arqueo-cierre-caja"></div>

**Problema:** Al cerrar la caja, el sistema me dice que hay diferencia entre lo que cuento y lo que debería haber.

**Solución:**

1.  **Contar correctamente los billetes:** Recordá que se ingresa la **cantidad de billetes**, no el monto total. Si tenés $30,000 en 3 billetes de $10,000, ingresás **3**, no 30000.
2.  **Revisar todas las denominaciones:** Asegurate de contar y cargar todas las denominaciones (desde $20,000 hasta $1).
3.  **Verificar ingresos y egresos:** Revisá que hayas registrado todos los ingresos y egresos del día en el sistema.
4.  **Revisar pagos mixtos:** Verificá que los pagos con tarjeta, transferencia, etc. no estén contabilizados como efectivo.
5.  **Revisar monto inicial:** Confirmá que el monto inicial con el que abriste la caja sea correcto.
6.  **Contar nuevamente:** Volvé a contar físicamente el dinero, separando por denominación.

<div class="doc-callout doc-callout-tip" style="margin-bottom: 1.5rem;">
	<span>💡</span>
	<div>
		Llevá un <strong>registro manual</strong> durante el día de ingresos y egresos extraordinarios para comparar al cierre.
	</div>
</div>

---

### 15. Olvidé registrar un ingreso o egreso de caja

<div id="olvide-registrar-movimiento"></div>

**Problema:** Me di cuenta que saqué o puse dinero en la caja pero no lo registré en el sistema.

**Solución:**

1.  **Registrar inmediatamente:** Andá a la esquina superior derecha del módulo Salón y hacé clic en **"Ingresos"** o **"Egresos"** según corresponda.
2.  **Ingresar datos correctos:**

| Campo | Qué completar |
| :--- | :--- |
| **Monto** | La cantidad exacta que ingresó o salió |
| **Caja** | Seleccioná la caja correcta |
| **Concepto** | Describí brevemente el motivo (ej: "Compra de cambio", "Pago delivery") |

3.  **Verificar el registro:** Revisá en el módulo de Arqueos que el movimiento haya quedado registrado.

<div class="doc-callout doc-callout-tip" style="margin-bottom: 1.5rem;">
	<span>💡</span>
	<div>
		Creá el hábito de registrar los movimientos <strong>en el momento en que ocurren</strong> para evitar olvidos.
	</div>
</div>

---

### 16. Anulé una mesa por error y necesito recuperarla

<div id="recuperar-mesa-anulada"></div>

**Problema:** Usé la opción "Anular Mesa" pero era la mesa equivocada o la necesito recuperar.

<div class="doc-callout doc-callout-warning" style="margin-bottom: 1.5rem;">
	<span>⚠️</span>
	<div>
		<strong>Importante:</strong> Dirigite al listado de mesas dentro de <strong>Arqueos</strong> y ubicá la mesa que necesitás recuperar. Una vez allí, seleccioná la mesa y hacé clic en <strong>"Re abrir"</strong>.
	</div>
</div>

---

### 17. Los ingresos/egresos no aparecen en el arqueo

<div id="ingresos-egresos-no-aparecen"></div>

**Problema:** Registré ingresos o egresos pero no los veo reflejados en el arqueo de caja.

**Solución:**

1.  **Verificar la caja correcta:** Asegurate de que hayas seleccionado la caja correcta al registrar el movimiento.
2.  **Verificar la fecha:** Confirmá que estés viendo el arqueo del día correcto.
3.  **Actualizar la vista:** Refrescá la pantalla del módulo Arqueos (`F5`).
4.  **Revisar el registro:** Ve a _Arqueo → Movimientos_ y buscá el movimiento por fecha y monto.
5.  **Verificar permisos:** Asegurate de que tengas permisos para ver todos los movimientos de caja.

<div class="doc-callout doc-callout-tip" style="margin-bottom: 1.5rem;">
	<span>💡</span>
	<div>
		Si el movimiento no aparece, puede que se haya registrado en <strong>otra caja</strong> o con <strong>otra fecha</strong>.
	</div>
</div>

---

## 📞 ¿No encontraste tu respuesta?

<div class="doc-callout doc-callout-note" style="margin-top: 1rem;">
	<span>💬</span>
	<div>
		Si tu problema no está listado aquí o necesitás información adicional, no dudes en contactarnos.<br><br>
		<strong>¡Hacé clic para chatear directamente con nuestro soporte técnico!</strong><br>
		<a href="https://wa.me/17867553113?" target="_blank"><strong>+1 (786) 755-3113</strong></a>
	</div>
</div>
