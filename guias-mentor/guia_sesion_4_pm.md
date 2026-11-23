# 🎙️ Sesión 4: Costos reales de IA, Lanzamiento, Evals y Entrevistas

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Cerrar el programa bajando a tierra cómo se decide, presupuesta, lanza y defiende un producto de IA en producción: Build vs. Buy vs. Configure, Model Routing y Batch API (-50%) sobre TCO real, cálculo honesto de capacidad liberada, Shadow Mode y Canary, UX y Spikes en Agile, Evals y Model Drift en Langfuse, y práctica con casos de entrevista reales.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. Costos reales, Build vs. Buy y tiempo liberado (Slides 1 a 6):** Model Routing (80% a modelo chico ahorra ~76%), Batch API (-50% nocturno), TCO completo (incluyendo +20–30% de tokens en ES/PT), decidir **Build vs. Buy vs. Configure** con Model Gateway y presentar **capacidad liberada** ante Finanzas sin vender recorte de nómina.
- **2. Salida gradual, UX y riesgos 2026 (Slides 7 a 8):** Salir con **Shadow Mode → Canary → feedback**, bajar la espera con **Token Streaming (< 1s)** y botones en Jira/TMS, correr un **Discovery Spike** de 1 semana antes de prometer fechas, y manejar **Shadow AI, EU AI Act e IP**.
- **3. AI Evals en la práctica y Langfuse (Slides 9 a 11):** Saber qué ticket abrir según qué métrica de la **Tríada RAG** cayó, sumar **Trajectory Evals** en agentes, detectar **Model Drift** calibrado con criterio de negocio/idioma y revisar cada semana trazas y **P95** en **Langfuse**.
- **4. Entrevistas reales y cierre (Slides 12 a 15):** Cómo ordenar respuestas y defender su experiencia en Localización, **2 casos con 3 opciones parejas** (Adopción baja → gana B; Model Drift → gana C + Extra Director) y 4 pasos concretos para practicar en el mes.

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 18 min** | Costos reales, Build vs. Buy y tiempo del equipo | Slides 1 a 6 | Model Routing (80/20), Batch API (-50%), los 4 costos ocultos del TCO (incluyendo idioma ES/PT vs EN), cuándo comprar vs. construir y calculadora de capacidad liberada. |
| **18 - 33 min** | Salida gradual, UX y riesgos actuales | Slides 7 a 8 | Shadow Mode → Canary → circuito de feedback, Token Streaming (< 1s), Discovery Spikes de 1 semana en Agile y riesgos reales hoy (Shadow AI, EU AI Act e IP). |
| **33 - 45 min** | AI Evals en la práctica y monitoreo en Langfuse | Slides 9 a 11 | Qué parte del sistema tocar cuando baja cada métrica de la Tríada RAG, Trajectory Evals en agentes, Model Drift calibrado con criterio humano y revisión semanal en Langfuse. |
| **45 - 60 min** | Entrevistas reales y cierre del programa | Slides 12 a 15 | Cómo ordenar respuestas y contar su experiencia en Localización con ejemplos concretos, 2 casos de entrevista con opciones parejas (baja adopción y Model Drift) y plan para el mes. |

---

## Slide 1: Llevar la IA a Producción: Costos, Calidad y Entrevistas
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Sesión 4 · Cierre · Costos & Build/Buy · Rollout & Evals · Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Conectar S1–S3 (cómo se construye) con S4 (costos reales, Build vs Buy, salida a producción, Evals/Drift y entrevistas).
- **👆 Qué tocar en la Slide:** Señalá las 4 tarjetas S1 → S2 → S3 → S4 en portada.
- **💬 La analogía ganadora:** En S1–S3 viste cómo se arma el sistema; hoy ves cómo se maneja cuando ya hay presupuesto, usuarios reales y preguntas de directorio.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ARRANQUE DE LA ÚLTIMA CLASE (Las 4 sesiones en perspectiva):**
• En las primeras tres clases vimos cómo trabajan los equipos de desarrollo (S1), cómo funciona un LLM y un RAG por dentro (S2), y cómo un agente ejecuta acciones con herramientas y frenos humanos (S3).

**2️⃣ QUÉ NOS FALTA VER HOY:**
• Hoy no vamos a repetir lo básico de tokens ni de PII que ya tenés claro. Nos enfocamos en lo que te toca resolver cuando el producto ya existe o lo están por aprobar: **cuánto sale de verdad, qué conviene comprar en vez de programar, cómo salir a usuarios reales sin romper nada y cómo responder casos difíciles en entrevistas**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Paso a Producción (Productización):** Todo lo que pasa después del prototipo: presupuesto real, experiencia de uso, monitoreo semanal y manejo de riesgos.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la portada y repasá las 4 tarjetas del recorrido: Base (S1), Memoria (S2), Acción (S3) y Hoy salida a producción y entrevistas (S4).

### 🔗 Puente de Conexión → Slide 2 (Qué vamos a ver hoy (Sesión 4))
> **"Miremos rápido en la Slide 2 los cuatro bloques de hoy."**

---

## Slide 2: Qué vamos a ver hoy (Sesión 4)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. Costos & Build/Buy · 2. Rollout & UX · 3. Evals & Langfuse · 4. Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar el mapa completo de la hora en 4 bloques concretos.
- **👆 Qué tocar en la Slide:** Recorré las 4 tarjetas en 30 segundos.
- **💬 La analogía ganadora:** Cuatro frentes concretos: presupuesto, salida a producción, calidad y entrevistas.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LOS 4 BLOQUES DE HOY (Grilla 2×2):**
• **1. Costos reales y Build vs. Buy:** Model Routing, Batch API a mitad de precio, gastos fijos que suelen olvidarse y cuándo comprar un SaaS en lugar de desarrollar.
• **2. Cómo lanzar y UX para IA:** Salir por etapas (*Shadow Mode → Canary*), evitar pantallas congeladas, usar *Spikes* cortos en Agile y manejar *Shadow AI* y *EU AI Act*.
• **3. Evaluar calidad y monitorear en Langfuse:** Qué parte tocar cuando cae una métrica, Evals en agentes y cómo detectar *Model Drift*.
• **4. Entrevistas reales y cierre:** Cómo contar tu experiencia previa en Localización y practicar 2 casos con opciones parejas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **FinOps en IA:** Controlar y bajar el gasto mensual de un sistema de IA en la nube sin arruinar la calidad.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 4 tarjetas de la grilla marcando los tiempos de la hora.

### 🔗 Puente de Conexión → Slide 3 (FinOps 1: Model Routing (enrutamiento de modelos))
> **"Arranquemos por la decisión de costos más común cuando ya hay tráfico real: el Model Routing en la Slide 3."**

---

## Slide 3: FinOps 1: Model Routing (enrutamiento de modelos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Model Routing · Carriles 80/20 · Simulador de ahorro

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar un clasificador liviano para mandar el 80% de pedidos simples a modelos Flash/Haiku y dejar el modelo caro solo para el 20% difícil.
- **👆 Qué tocar en la Slide:** Explicá los 2 carriles a la izquierda y mové el slider al 80% a la derecha ($1,200 → $288).
- **💬 La analogía ganadora:** En una guardia no atiende el especialista más caro los casos de rutina; filtra primero la atención general y deriva solo lo complejo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ POR QUÉ NO USAR UN SOLO MODELO PARA TODO (Tarjeta izquierda):**
• Mandar una duda simple o la clasificación de un ticket a *Claude Opus* o *GPT-4o* es pagar alrededor de **20 veces más** y esperar el triple de tiempo sin ningún beneficio.
• Con **Model Routing**, ponés un filtro rápido en la entrada que separa en dos carriles:
  • **Carril rápido (70%-85%):** Modelos chicos (*Gemini Flash, Claude Haiku, GPT-4o-mini, AWS Nova Micro*) a ~$0.15/1M tokens en ~`0.3 seg`.
  • **Carril complejo (15%-30%):** Modelos grandes solo para contratos ambiguos, transcreación o decisiones de varios pasos.

**2️⃣ SIMULADOR EN VIVO (Mové el deslizador derecho):**
• Si todo va al modelo grande gastás **$1,200/mes**. Si mandás el **80%** de lo simple al modelo chico, la cuenta cae a **$288/mes** (**76% menos**) y el diagrama SVG actualiza al instante el peso de cada rama.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador Model Routing + Diagrama SVG
1. Señalá primero el diagrama SVG a la izquierda (`Consulta → Router → Modelo Chico / Modelo Grande`) para mostrar dónde actúa el filtro.
2. Llevá el deslizador derecho a **0%** → la cuenta marca **$1,200.00 / mes** (`0% de ahorro`) y la rama violeta del diagrama toma el **100%**.
3. Volvelo a **80%** (valor recomendado) → baja a **$288.00 / mes** (`76% de ahorro · $912 USD`) y se engrosa la rama verde (**80%**) frente a la violeta (**20%**).
4. Subí a **90%** → da **$174.00 / mes** (`86% de ahorro · $1,026 USD`). Aclará a Anabela que no conviene llevarlo a 95% si hay casos legales o ambiguos que requieren el modelo grande.
- **Ejemplo práctico para contar:** Mesa de ayuda con 10.000 tickets/mes: clasificar idioma, prioridad o dudas repetitivas pasa por *Flash/Haiku*, y solo reclamos complejos o contratos bajo NDA se derivan a *Sonnet/GPT-4o*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing:** Un filtro en la puerta que manda las tareas fáciles a un modelo barato y rápido, y las difíciles al modelo más potente.

### ⚡ Dinámica / Interacción en Pantalla
- Explicá los dos carriles a la izquierda y mové el deslizador de la derecha en vivo para ver cómo cambia el gráfico SVG y baja el costo de $1,200 a $288 USD/mes.

### 🔗 Puente de Conexión → Slide 4 (FinOps 2: Batch API (-50%) y costos ocultos (TCO))
> **"Eso resuelve el chat en vivo. Pero ¿qué pasa cuando tenés un volumen grande que puede esperar a la noche, y qué gastos extras suelen quedar afuera del primer presupuesto? Pasemos a la Slide 4."**

---

## Slide 4: FinOps 2: Batch API (-50%) y costos ocultos (TCO)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Batch API (-50%) · TCO real · Idiomas ES/PT vs EN

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar Batch API (-50%) para tareas que pueden esperar horas y sumar al presupuesto los 4 gastos ocultos del TCO (incluyendo +20-30% de tokens en ES/PT).
- **👆 Qué tocar en la Slide:** Compará la tarjeta izquierda (Tiempo real vs Batch) y los 4 puntos del TCO a la derecha.
- **💬 La analogía ganadora:** Batch API es el envío programado nocturno a mitad de precio en lugar de moto urgente; el TCO es contar seguro y mantenimiento además de la nafta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ SEPARAR LO URGENTE DE LO NOCTURNO (Tarjeta izquierda):**
• **Síncrono (100% tarifa):** Chat donde la persona está esperando en pantalla en menos de 2 segundos.
• **Batch API / Asíncrono (50% tarifa):** Si te entran 3.000 strings de un release o querés auditar glosarios durante la noche para la mañana siguiente, lo mandás por **Batch API** (OpenAI, Anthropic, AWS Bedrock) y te cobran **la mitad**.

**2️⃣ LOS 4 COSTOS OCULTOS DEL TCO (Tarjeta derecha):**
• Si solo multiplicás tokens de salida subestimás el gasto real. En la cuenta completa entran: **1)** las vueltas internas del agente ReAct, **2)** infraestructura fija de Vector DB y monitoreo (~$70–$250/mes), **3)** la **diferencia por idioma**: los tokenizadores están más optimizados para inglés y en español o portugués suelen gastar ~20–30% más tokens, y **4)** tokens de evaluaciones automáticas + horas humanas de revisión.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Gráfico Batch API (-50%) y Barra de TCO
1. En la tarjeta izquierda, señalá la barra azul completa (**Síncrono · < 2s · 100% tarifa**) frente a la barra verde a mitad de ancho (**Batch API · 1-12h · -50% costo**).
2. En la tarjeta derecha, señalá la barra horizontal apilada (`Tokens base` / `Vueltas agente` / `Idioma ES/PT` / `Infra + Evals`) para mostrar visualmente que la API pura es solo una fracción del presupuesto mensual.
- **Ejemplo práctico para contar:** Cierre de release a las 18:00 hs con 3.000 strings nuevos para revisar glosario antes de las 9:00 hs: entra por *Batch API* pagando 50%, y presupuestás ~20-30% extra de tokens por ser español/portugués frente a inglés.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **TCO (Costo Total de Propiedad):** Todo lo que cuesta mantener el sistema andando por mes: tokens, base vectorial, monitoreo, evaluaciones y revisión humana.

### ⚡ Dinámica / Interacción en Pantalla
- Compará las barras Síncrono vs. Batch API a la izquierda y recorré la barra apilada con los 4 puntos del TCO a la derecha marcando la diferencia de tokens por idioma.

### 🔗 Puente de Conexión → Slide 5 (Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in))
> **"Igual, antes de calcular servidores y APIs, hay una pregunta previa que ahorra meses de trabajo. Vamos a la Slide 5: Build vs. Buy vs. Configure."**

---

## Slide 5: Build vs. Buy vs. Configure (y cómo evitar Vendor Lock-in)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Build vs. Buy · Model Gateway · Vendor Lock-in

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Evaluar Buy vs Configure vs Build antes de pedir devs, y usar un Model Gateway si se desarrolla propio para no quedar atado a un proveedor.
- **👆 Qué tocar en la Slide:** Recorré las 3 tarjetas y tocá '1. Llamadas internas', '2. Piloto QA + Jira' y '3. Motor 500k docs/mes'.
- **💬 La analogía ganadora:** Para ir al aeropuerto te tomás un taxi (Buy); no te comprás una fábrica de autos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ANTES DE PEDIR PROGRAMADORES (3 columnas):**
• **BUY (SaaS):** Si es una necesidad común sin diferencial propio (resumir llamadas, DeepL Pro), comprás licencia en días y no distraés ingenieros.
• **CONFIGURE (Conectado):** Para flujos internos conectando Jira, Slack o documentos, armás sobre AWS Bedrock KB, n8n o MCP en 1–3 semanas.
• **BUILD (Propio):** Solo si es parte central del negocio y hay escala. Y si desarrollás, poné un **Model Gateway** (*AWS Bedrock / LiteLLM*) para cambiar entre Claude, Gemini y GPT sin reescribir código (**evitar Vendor Lock-in**).

**2️⃣ 3 CASOS CONCRETOS (Botones de abajo):**
• Probalos con Anabela: *1. Llamadas internas → BUY*, *2. Piloto QA + Jira → CONFIGURE*, *3. Motor 500k docs/mes → BUILD con Gateway*.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Diagrama Model Gateway y Casos Build vs. Buy
1. Mostrá primero las 3 tarjetas superiores (`BUY · SAAS`, `CONFIGURE`, `BUILD · GATEWAY`) y el diagrama SVG inferior izquierdo (`Tu Producto → Model Gateway [Bedrock / LiteLLM] → Claude / GPT-4o / Gemini`).
2. Antes de tocar cada botón abajo a la derecha, preguntale a Anabela qué elegiría ella.
3. Presioná **'1. Llamadas internas'** → sale en azul `Conviene BUY (SaaS) · ~3 días` (no justifica equipo propio).
4. Presioná **'2. Piloto QA + Jira'** → sale en ámbar `Conviene CONFIGURE (Managed + MCP) · ~2 semanas`.
5. Presioná **'3. Motor 500k docs/mes'** → sale en violeta `Conviene BUILD vía Model Gateway · 8-12 semanas`.
- **Ejemplo práctico para contar:** Si dentro de 6 meses sale un modelo más barato o preciso para español/portugués, tener un *Model Gateway* en el medio te deja cambiarlo en configuración sin rehacer la aplicación.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Gateway (Anti Vendor Lock-in):** Un adaptador único (como AWS Bedrock o LiteLLM) para cambiar de modelo de IA sin rehacer la aplicación.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 3 columnas arriba, señalá el esquema de Model Gateway a la izquierda y hacé clic en los 3 botones abajo ('1. Llamadas internas', '2. Piloto QA + Jira', '3. Motor 500k docs/mes').

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Costos de IA vs. tiempo del equipo)
> **"Cuando sí tiene sentido construir o configurar un proyecto interno, ¿cómo armás los números para Finanzas con criterio realista? Pasemos a la Slide 6."**

---

## Slide 6: Ejercicio 1: Costos de IA vs. tiempo del equipo
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Capacidad liberada · TCO real · Cuenta Finanzas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Calcular costo IA + TCO + 20% HITL frente al tiempo manual, aclarando que es capacidad liberada y no recorte directo de nómina el mes 1.
- **👆 Qué tocar en la Slide:** Mostrá los defaults ($209.16 IA + TCO, $5,000 HITL, $19,790.84 capacidad liberada, ~3.3 semanas para piloto $15k) y probá 500 docs / 5 min.
- **💬 La analogía ganadora:** Si liberás 1.000 horas del equipo no reducís personal al día siguiente: usás esas horas para absorber más volumen o bajar atrasos sin contratar de más.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CÓMO PRESENTAR LOS NÚMEROS SIN EXAGERAR (Izquierda y derecha):**
• Con **5.000 documentos/mes** de **15 min** a **$20/h**, hoy ese trabajo equivale a **1.250 horas** (7.8 personas FTE), o sea **$25,000 USD/mes** de valor de tiempo.
• Activando **Model Routing + Batch**, la API cae de $225 a $27; sumando **$180 fijos de Vector DB/Langfuse + 8% de Evals**, el costo IA total real da **$209.16 USD/mes**. Sumado al **20% de revisión humana ($5,000/mes)**, liberás capacidad equivalente a **$19,790.84 USD/mes**.

**2️⃣ EL DETALLE QUE TE HACE SONAR HONESTA ANTE FINANZAS (Nota inferior):**
• Aclará siempre que esto es **capacidad liberada del equipo** (para absorber más volumen o bajar demoras), no ahorro inmediato de sueldos el mes 1. Usándolo como referencia frente a un piloto de **$15,000**, equivale a unas **3.3 semanas** de horas liberadas.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Calculadora FinOps vs. Tiempo del Equipo (3 pruebas en vivo)
1. **Prueba 1 (Caso base equilibrado):** Dejá los defaults (`5.000 docs`, `15 min`, `$20/h`, los 3 checks activos). Señalá las barras superiores (**Manual $25,000 USD** vs **Operación IA + HITL $5,209 (21%)**), el costo IA+TCO (`$209.16 USD`), HITL (`$5,000.00 USD`), capacidad liberada (`$19,790.84 USD`) y repago de piloto `$15.000` en `~3.3 semanas`.
2. **Prueba 2 (Impacto de FinOps):** Destildá `Model Routing (80/20)` y `Batch API nocturna` → el gasto IA+TCO sube de `$209.16` a `$423.00 USD/mes` (`$225` de API × `1.08` de Evals + `$180` fijos). Volvé a tildar ambos.
3. **Prueba 3 (Cuándo NO conviene construir):** Bajá el primer slider a `500 docs` y el segundo a `5 min` → el tiempo manual cae a `$833.33 USD`, el costo fijo de infra (`$180`) hace que la IA+TCO (`$182.92`) empuje la barra al **42%** (`$350 USD`) y el repago de `$15.000` salte a **`~134.3 semanas`** (> 2 años).
4. Volvé a `5.000 docs` y `15 min` y cerrá leyendo la nota inferior sobre capacidad liberada frente a nómina.
- **Ejemplo práctico para contar:** Propuesta ante Finanzas para asistir en revisión documental de 5.000 archivos/mes: en lugar de prometer bajar sueldos desde el mes 1, mostrás que el equipo existente absorbe más volumen y acorta entregas sin nuevas contrataciones.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Capacidad Liberada:** Horas del equipo que dejan de ir a revisión repetitiva y pasan a tareas de mayor criterio, absorbiendo más trabajo sin sumar sueldos.

### ⚡ Dinámica / Interacción en Pantalla
- Dejá los defaults (5.000 docs, 15 min, $20/h) con los 3 checks marcados, luego destildá Routing/Batch y bajá volumen a 500 docs para mostrar cuándo no se justifica.

### 🔗 Puente de Conexión → Slide 7 (Lanzamiento gradual: Shadow Mode, Canary y feedback)
> **"Con el caso armado y aprobado, viene la parte operativa: ¿cómo salimos a producción sin afectar al negocio ni exponer errores frente a clientes? Vamos a la Slide 7."**

---

## Slide 7: Lanzamiento gradual: Shadow Mode, Canary y feedback
- **⏱️ Tiempo estimado:** 6 Min | **🏷️ Etiquetas:** Shadow Mode · Canary Rollout · Feedback continuo

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Lanzar en 3 etapas: Shadow Mode (silencioso), Canary con Feature Flags (5% → 100%) y circuito de feedback hacia el Golden Dataset.
- **👆 Qué tocar en la Slide:** Hacé clic en Etapa 1, Etapa 2 y Etapa 3 mirando cómo cambia la barra inferior.
- **💬 La analogía ganadora:** Primero trabaja a puertas cerradas al lado del equipo (Shadow), después atiende un 5% de pedidos supervisado (Canary) y cada corrección queda anotada.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ETAPA 1: SHADOW MODE / MODO SOMBRA (Clic en Etapa 1):**
• Nunca salís directo para el 100% de los usuarios. Las primeras 1–2 semanas el sistema corre en **Shadow Mode**: procesa pedidos reales en segundo plano sin mostrarle nada al cliente.
• Mirá el tablero de abajo: **0% de clientes expuestos** y avanzás recién cuando coincide **≥ 90%** con lo que resolvió el equipo humano.

**2️⃣ ETAPA 2: CANARY 5% → 25% → 100% (Clic en Etapa 2):**
• Con *Feature Flags*, prendés para un **5%** o un proyecto piloto mirando latencia P95 y costos, sabiendo que con un clic volvés atrás.

**3️⃣ ETAPA 3: CIRCUITO DE FEEDBACK (Clic en Etapa 3):**
• Recogés reportes del especialista y cada corrección entra al *Golden Dataset* para que el mismo error no vuelva a pasar.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Pipeline Interactivo de Rollout (SVG + Tarjetas)
1. Recorré el diagrama SVG superior (`1. Shadow Mode → 2. Canary Rollout → 3. Producción + Feedback`) y señalá la flecha punteada inferior (`Correcciones → Golden Dataset`).
2. Clic en **1. Shadow Mode** (tarjeta o nodo SVG) → el panel inferior marca `0% clientes`, `Sin impacto en el usuario final`, `Acuerdo ≥ 90%` y revisar diferencias en Langfuse.
3. Clic en **2. Canary Rollout** → cambia a `5% → 25% → 100% gradual`, `Acotado, con rollback en 1 clic` y `Latencia P95 < 1.5s y costo estable 7 días`.
4. Clic en **3. Circuito de feedback** → pasa a `100% en vivo con feedback` y sumar cada error corregido al *Golden Dataset*.
- **Ejemplo práctico para contar:** Asistente nuevo de QA lingüístico: corre 2 semanas en *Shadow* frente al criterio del equipo; recién al superar 90% de coincidencia se habilita *Canary* en un único par de idiomas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Shadow Mode (Modo Sombra):** Correr el agente sobre casos reales sin que el usuario vea sus respuestas, solo para medir acierto contra el equipo humano.
- **Canary Rollout + Feature Flags:** Habilitar la función para un porcentaje chico de usuarios con una llave de apagado rápido.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las 3 etapas (en las tarjetas o en el pipeline SVG superior) para mostrar cómo cambian exposición, riesgo, criterio de avance y tarea del PM.

### 🔗 Puente de Conexión → Slide 8 (UX en productos de IA, Spikes en Agile y riesgos actuales)
> **"Ahora bien: muchos sistemas funcionan bien en pruebas y aun así nadie los usa, o chocan con reglas nuevas de la empresa. Veamos UX, planificación en Agile y riesgos actuales en la Slide 8."**

---

## Slide 8: UX en productos de IA, Spikes en Agile y riesgos actuales
- **⏱️ Tiempo estimado:** 9 Min | **🏷️ Etiquetas:** UX & Streaming · Discovery Spike · Shadow AI & EU AI Act

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar por qué falla la adopción por mala UX, cómo usar Discovery Spikes de 1 semana antes de comprometer fechas, y los 3 riesgos de 2026 (Shadow AI, EU AI Act, IP).
- **👆 Qué tocar en la Slide:** Tocá '12s congelada' vs '0.8s streaming' y repasá los 3 bloques de la derecha.
- **💬 La analogía ganadora:** Discovery Spike es probar una tanda chica de 30 casos antes de prometer 3 meses; frenar Shadow AI es ofrecer una vía segura en vez de solo prohibir.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ UX EN IA Y PLANNING REALISTA (Tarjeta izquierda + Demo):**
• Un modelo bueno fracasa si tarda 12 segundos con la pantalla en blanco: necesitás **Token Streaming** (primeras palabras en &lt; 1s), llamadas en paralelo y avisos de estado (*'Consultando Jira...'*).
• Y no mandes a todos a un chat vacío: poné botones contextuales dentro de Jira/TMS donde ya trabajan.
• En **Agile**, antes de prometer un trimestre cuando no sabés si tus datos alcanzan, corré un **Discovery Spike de 1 semana con ~30 casos reales**.

**2️⃣ RIESGOS ACTUALES (Tarjeta derecha):**
• **Shadow AI:** Si solo prohibís usar IA por mail, la gente igual pega textos en cuentas personales; la única forma real de frenarlo es dar una alternativa interna segura.
• **EU AI Act:** Si el sistema toca RRHH, evaluaciones o crédito, exige trazas, supervisión humana y avisar al usuario.
• Y revisá siempre **Propiedad Intelectual (IP)** y sesgos en idiomas fuera del inglés.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Mini-demo UX de Espera Percibida
1. Tocá primero el botón **'12s congelada'** → la consola cambia a rojo mostrando 3 llamadas en fila sin respuesta ni feedback visual (causa directa de abandono).
2. Volvé a tocar **'0.8s streaming'** → muestra en verde el aviso temprano a los `0.3s` (`Consultando Jira + glosario en paralelo`) y respuesta progresiva desde los `0.8s`.
3. Conectalo enseguida con la tarjeta derecha (**Shadow AI**): si la herramienta oficial tarda 12s y obliga a salir de Jira, el equipo vuelve a usar cuentas externas personales.
- **Ejemplo práctico para contar:** En vez de mandar un correo prohibiendo chatbots públicos, ponés un botón directo en Jira/TMS con *streaming* rápido conectado al modelo corporativo bajo NDA.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Discovery Spike:** Una prueba corta de 5 días con ~30 casos reales al arranque para comprobar si los datos sirven antes de armar todo el roadmap.
- **Shadow AI:** Cuando la gente usa herramientas de IA personales en el trabajo porque la empresa no le dio una opción aprobada que le sirva.

### ⚡ Dinámica / Interacción en Pantalla
- Alterná los dos botones de la mini-demo ('12s congelada' vs '0.8s streaming') y repasá los 3 riesgos actuales de la derecha.

### 🔗 Puente de Conexión → Slide 9 (AI Evals en la práctica: Tríada RAG, Agentes y Model Drift)
> **"Ya vimos cómo presupuestar y lanzar cuidando la experiencia. Pasemos al bloque 3 (Slides 9 a 11) para bajar a tierra cómo evaluar calidad y usar Langfuse."**

---

## Slide 9: AI Evals en la práctica: Tríada RAG, Agentes y Model Drift
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tríada RAG → Sprint · Trajectory Evals · Model Drift & SME

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mapear la Tríada RAG a tickets concretos del sprint, sumar Trajectory Evals para agentes y entender Model Drift + calibración con criterio humano (SME).
- **👆 Qué tocar en la Slide:** Recorré el triángulo a la izquierda y el diagrama de trayectoria a la derecha.
- **💬 La analogía ganadora:** Si el buscador trajo la página equivocada del manual, el problema no es quien redactó la respuesta: hay que corregir el índice.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ ARREGLAR SEGÚN QUÉ MÉTRICA CAE (Tarjeta izquierda):**
• En S2 vimos el *Golden Dataset* en CI/CD. En el día a día te sirve para no mandar tickets a ciegas:
  • Baja **Fidelidad** → el modelo inventó → ajustar *Prompt / Temperatura 0.0 / Guardrail*.
  • Baja **Precisión de Contexto** → el buscador trajo mal párrafo → revisar *Chunking / Metadatos / Vector DB* (no el prompt).
  • Baja **Relevancia** → dio vueltas → ajustar formato e instrucción.

**2️⃣ AGENTES Y MODEL DRIFT (Tarjeta derecha):**
• En agentes mirás además la trayectoria (**Trajectory Evaluation**): si eligió la herramienta correcta y con JSON válido.
• Y ojo con el **Model Drift**: a veces el proveedor cambia el modelo por detrás o el equipo pasa a un modelo más chico y la calidad cae sin que nadie haya tocado el código. Calibrar un *LLM-as-a-Judge* pide criterio real del idioma y del negocio (ahí aporta directo tu experiencia en **Traducción y QA**).

### 🎛️ Cómo usar el simulador / ejemplo práctico: Diagramas SVG de Tríada RAG y Trajectory Evaluation
1. En el diagrama triangular izquierdo, señalá las 3 aristas: **Pregunta ↔ Contexto** (`Precisión Contexto`), **Contexto ↔ Respuesta** (`Fidelidad`) y **Pregunta ↔ Respuesta** (`Relevancia`).
2. Usá ese triángulo para remarcar que el PM no pide "mejorar el prompt" para todo: si falla `Contexto`, el ajuste va al buscador/chunking.
3. En el diagrama derecho (`Input → Tool 1 → JSON OK → Tool 2 → Salida`), señalá el corchete inferior **`Eval de trayectoria (paso a paso)`**.
- **Ejemplo práctico para contar:** Un agente de soporte responde algo prolijo, pero en el camino consultó 4 veces la misma API y mandó mal un campo JSON: en agentes medís toda la secuencia, no solo la frase final.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Drift:** Caída silenciosa de calidad en producción aunque el código no haya cambiado, por actualización del proveedor o cambio de modelo.
- **Trajectory Evaluation:** Revisar si un agente eligió bien las herramientas paso a paso, más allá de cómo redactó la respuesta final.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá el triángulo de la Tríada RAG a la izquierda y el flujo de Trajectory Evaluation a la derecha para explicar qué parte arreglás según cada falla.

### 🔗 Puente de Conexión → Slide 10 (Ejercicio 2: Simulador de auditoría Evals)
> **"Probémoslo rápido en el simulador de la Slide 10 para ver cómo cambia el ticket según la falla."**

---

## Slide 10: Ejercicio 2: Simulador de auditoría Evals
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Auditoría Evals · Alucinación vs Retrieval · Diagnóstico

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Distinguir con los 3 presets cuándo el problema es del prompt (Fidelidad) y cuándo es del buscador (Contexto).
- **👆 Qué tocar en la Slide:** Tocá 'Alucinación', 'Fallo Retrieval', 'Sana' y mové el slider 3.
- **💬 La analogía ganadora:** Es separar si alguien contestó mal porque le dieron la fotocopia equivocada (Contexto) o porque inventó fuera de la hoja (Fidelidad).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL EJEMPLO EN PANTALLA (Izquierda):**
• El manual dice que *Checkout v4* está **bloqueado en QA lingüístico**, pero al final el bot inventó que *'mañana se aprueba automáticamente sin más pruebas'*.

**2️⃣ PROBAR LOS 3 PRESETS (Derecha):**
• **Alucinación:** Contexto `1.0` pero Fidelidad `0.2` → **RECHAZADO · Ticket para Prompt / Temperatura / Guardrail**.
• **Fallo Retrieval:** Fidelidad `0.9` pero Contexto `0.3` → **RECHAZADO · Ticket para Chunking / Metadatos / Vector DB**.
• **Sana:** Todo ≥ `0.95` → **Pasa a Canary**.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Calificador Interactivo Tríada RAG (Presets + Sliders)
1. Leé primero la tarjeta izquierda: el fragmento dice explícitamente que *Checkout v4* está bloqueado en QA PT-BR, pero al final del texto del bot aparece la frase marcada en rojo (*"mañana al mediodía se aprobará automáticamente"*).
2. Con el preset **'Alucinación'** activo (`0.2 / 1.0 / 0.9`) → marca `RECHAZADO (70%)` y asigna ticket a `Prompt / Temperatura 0.0 / Guardrail`.
3. Tocá **'Fallo Retrieval'** (`0.9 / 0.3 / 0.8`) → marca `RECHAZADO (67%)` y deriva a `Chunking / Metadatos / Vector DB` (sin tocar el prompt).
4. Tocá **'Sana'** (`0.95 / 0.95 / 0.95`) → cambia a verde `APROBADO PARA CANARY (95%)`.
5. Con los otros dos en `0.95`, bajá manualmente el 3er slider (`3. Relevancia`) a `0.5` → muestra el 3er veredicto posible: `Baja Relevancia (< 0.80): Ticket para ajustar formato e instrucción de respuesta`.
- **Ejemplo práctico para contar:** En la diaria del equipo, cuando alguien reporta "el bot se equivocó", este criterio te permite abrir el ticket en la fila correcta (base vectorial vs. prompt vs. formato) sin ida y vuelta.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Diagnóstico de causa raíz:** Identificar si el error salió del buscador vectorial o del modelo antes de abrir una tarea en Jira.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá los 3 presets arriba a la derecha ('Alucinación', 'Fallo Retrieval', 'Sana') y mové el slider de Relevancia para ver cómo cambia el ticket.

### 🔗 Puente de Conexión → Slide 11 (Monitoreo en producción con Langfuse)
> **"Y cuando ya está andando en vivo, ¿dónde mirás todas estas trazas sin pedirle favores a un developer? Vamos a la Slide 11: Langfuse."**

---

## Slide 11: Monitoreo en producción con Langfuse
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Langfuse · Traces & Spans · Latencia P95

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Leer trazas estilo waterfall en Langfuse (Router/Retrieval, LLM, Eval) y revisar cada semana origen de errores, Model Drift y P95.
- **👆 Qué tocar en la Slide:** Desplegá Span 1 y Span 2 a la izquierda y tocá 'Simular reporte → mandar al Golden Dataset'.
- **💬 La analogía ganadora:** Es la caja negra y el ticket detallado de cada consulta: ves en 10 segundos qué paso tardó o falló y cuánto costó.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ RADIOGRAFÍA DE UNA CONSULTA EN LANGFUSE (Árbol izquierdo):**
• Cada mensaje deja una **Traza** dividida en pasos (**Spans**): arriba ves la regla temporal (`0ms → 500ms → 1.15s`) y la barra proporcional de cuánto demoró cada etapa (`160ms` Router/Retrieval vs. `900ms` LLM).
• Probá el botón **'Simular reporte → mandar al Golden Dataset'** para ver cómo entra una corrección real al set de pruebas.

**2️⃣ QUÉ MIRÁS TODAS LAS SEMANAS (Tarjeta derecha):**
• 1) Si reportan un error, mirás Span 1 vs. Span 2 sin adivinar; 2) Si cae el promedio de *Faithfulness* sin cambios propios, detectás **Model Drift**; 3) Controlás costo por área y **latencia P95**.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Traza Waterfall Interactiva en Langfuse
1. Señalá primero la regla temporal (`0ms` → `500ms` → `1.15s`) y las 4 barras horizontales: la barra ámbar del **Span 2** muestra a simple vista dónde está el `78%` de la espera (`900ms` de `1.15s`).
2. Hacé clic en **`[Span 1] Router y Retrieval`** para desplegar su detalle: usó `Gemini Flash` (`$0.0001`), filtró `ES-LATAM, 2026` con similitud `0.91`.
3. Hacé clic en **`[Span 2] Generación LLM`** para desplegar `TTFT: 220ms · Streaming`, `180 tokens` y la cita al manual.
4. En **`[Span 3] Eval y Feedback`** (abierto), tocá el botón **`Simular reporte → mandar al Golden Dataset`** → el estado cambia a verde: `PASS: Caso #S4-PROD-992 guardado con la corrección → sumado al Golden Dataset.`
- **Ejemplo práctico para contar:** Un lunes reportan que el asistente respondió mal un dato de lanzamiento: en 20 segundos abrís la traza, confirmás si la búsqueda trajo el chunk viejo (*Span 1*) o si redactó mal (*Span 2*), y guardás el caso para pruebas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Latencia P95:** El tiempo máximo que tarda para el 95% de los usuarios; evita que un promedio lindo esconda demoras feas en casos puntuales.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá las barras de tiempo waterfall, hacé clic para desplegar Span 1 y Span 2, tocá 'Simular reporte → mandar al Golden Dataset' y repasá los 3 chequeos semanales.

### 🔗 Puente de Conexión → Slide 12 (Cómo encarar entrevistas técnicas y defender tu perfil)
> **"Con toda la parte técnica y operativa cubierta, usemos los últimos 15 minutos para entrevistas y cómo defender tu perfil. Pasemos a la Slide 12."**

---

## Slide 12: Cómo encarar entrevistas técnicas y defender tu perfil
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Entrevistas IT · Trade-offs · Localización → IA

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Ordenar respuestas en 3 puntos (qué mirás → qué decidís y qué resignás → cómo medís) y conectar Localización con Evals, HITL y costos multilingües.
- **👆 Qué tocar en la Slide:** Señalá primero los 3 pasos a la izquierda y después los 3 puentes a la derecha.
- **💬 La analogía ganadora:** Tu experiencia en Localización no queda afuera: es exactamente el criterio de lenguaje, calidad y coordinación que falta en muchos equipos técnicos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ QUIEREN ESCUCHAR CUANDO TE HACEN UN CASO (Izquierda):**
• Nadie espera que escribas código. Miran si ordenás la cabeza así: **1)** qué revisás primero con datos (Langfuse + usuarios), **2)** qué cambio proponés y qué **trade-off** aceptás, y **3)** cómo medís si funcionó.

**2️⃣ LO QUE YA TRAÉS DE LOCALIZACIÓN (Derecha):**
• No empezás de cero: haber armado **glosarios y QA lingüístico** te da criterio directo para armar rúbricas de evaluación y contexto; **coordinar traductores y entregas** es gestionar flujos *Human-in-the-Loop*, SLAs y stakeholders; y manejar **proyectos multilingües** te hace detectar enseguida el mayor gasto de tokens en ES/PT y los matices culturales.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Práctica Oral con Puentes Visuales (Localización → IA)
1. Pedile a Anabela que lea la estructura de 3 pasos a la izquierda (`Diagnóstico con datos → Propuesta y trade-off → Métrica de corte`) como plantilla mental antes de contestar cualquier caso.
2. Usá los 3 conectores visuales de la derecha (`Glosarios y QA → Rúbricas Evals`, `Coordinar traductores → Flujos HITL`, `Multilingüe ES/PT → FinOps y sesgos`) y elegí uno al azar para que lo diga en 30 segundos conectado con un proyecto real suyo.
- **Ejemplo práctico para contar:** Si el entrevistador pregunta *"¿Qué experiencia tenés evaluando calidad en IA?"*, puede responder: *"Vengo de dirigir glosarios y QA lingüístico multilingüe: definir criterios objetivos de fidelidad, ambigüedad y tono es exactamente la base para armar rúbricas de AI Evals y calibrar revisores humanos."*

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Trade-off:** Elegir qué priorizás y qué dejás de lado (por ejemplo, velocidad o costo frente a cobertura total en una primera etapa).

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 3 pasos de la izquierda y usá los 3 puentes visuales de la derecha para practicar respuestas cortas con Anabela.

### 🔗 Puente de Conexión → Slide 13 (Caso de entrevista 1: Baja adopción y presupuesto en riesgo)
> **"Vamos a probarlo en dos casos reales donde las tres opciones parecen razonables a primera vista. Pasemos a la Slide 13."**

---

## Slide 13: Caso de entrevista 1: Baja adopción y presupuesto en riesgo
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Caso adopción · UX + FinOps · 3 opciones parejas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Caso donde el bot funciona técnicamente pero no se adopta: la mejor opción es la B (auditar datos/entrevistas + llevarlo al flujo real con streaming + bajar costo).
- **👆 Qué tocar en la Slide:** 1° '1. Auditar uso' → 2° Que Anabela elija entre A, B y C (gana la B).
- **💬 La analogía ganadora:** Si nadie usa una herramienta cara, no sirve mandar un mail obligando ni agregarle funciones: primero mirás dónde se traban.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA PREGUNTA (Leela tal cual):**
• *'Lanzamos un asistente interno hace 2 meses. Pasa las pruebas técnicas, pero solo lo usa el 12% del equipo y Finanzas corta el presupuesto en 30 días. ¿Qué hacés?'*

**2️⃣ COMPARAR LAS 3 OPCIONES (A, B y C — acá la mejor es la B):**
• Preguntale a Anabela cuál elegiría antes de hacer clic.
• **Opción A (Mail de dirección + capacitación):** Empuja el uso una semana y después vuelve a caer porque el problema real no se tocó.
• **Opción C (Pedir 2 meses y modelo más caro):** Finanzas corta en 30 días; pedir más tiempo y gasto sin entender por qué no lo usan acelera el cierre.
• **Opción B (Mejor camino):** Cruzás Langfuse con 8–10 charlas cortas (espera larga sin streaming, salir de Jira), llevás el bot a un flujo puntual en Jira con streaming y bajás el gasto con Routing/Batch para defender el presupuesto.

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador de Entrevista 1: Baja Adopción
1. Leé el recuadro superior `Escenario` y dejá que Anabela piense qué revisaría primero.
2. Tocá **'1. Auditar uso'** en el tablero izquierdo → el `12%` cambia a `Bajo · En riesgo`, muestra los hallazgos (espera sin streaming, salir de Jira, uso personal) y habilita **'2. Aplicar plan'**.
3. Antes de tocar nada a la derecha, pedile a Anabela que elija entre **Opción A, B o C**.
4. Si menciona A o C, podés cliquearla para mostrar en rojo la devolución del entrevistador; luego tocá **'Opción B'** → se marca en verde, dispara el plan (`Uso sostenido`) y deja la respuesta armada en el chat.
5. Tocá **'Reiniciar'** si quieren repetir la respuesta oral desde cero.
- **Ejemplo práctico para contar:** Diferenciar frente al entrevistador un problema de precisión del modelo de un problema de fricción en el flujo de trabajo y costo por usuario activo.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fricción de flujo:** Obligar a la persona a salir de su herramienta diaria (Jira/TMS) para copiar y pegar textos en un chat aparte.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Auditar uso' a la izquierda, dejá que Anabela elija entre Opción A, B y C a la derecha antes de probarlas, y usá 'Reiniciar' si quieren practicarlo de nuevo.

### 🔗 Puente de Conexión → Slide 14 (Caso de entrevista 2: Caída silenciosa de calidad (Model Drift))
> **"Bien resuelto: entendiste el problema de uso y de presupuesto antes de pedir más desarrollo. Vamos al segundo caso en la Slide 14."**

---

## Slide 14: Caso de entrevista 2: Caída silenciosa de calidad (Model Drift)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Model Drift · Feature Flag + Routing · Extra Director

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver un Model Drift en terminología sin tirar todo el ahorro ni tapar con revisión manual 100%: gana la C (rollback selectivo + Evals por categoría + Routing).
- **👆 Qué tocar en la Slide:** 1° '1. Simular caída' → 2° Debatir A, B y C (gana C) → 3° Abrir bloque Extra abajo.
- **💬 La analogía ganadora:** Si un cambio de proveedor falla solo en textos legales, no frenás toda la operación ni revisás todo a mano: separás por tipo de tarea.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA PREGUNTA DE LOCALIZACIÓN / MODEL DRIFT:**
• *'Migramos a un modelo más barato (-60%). Los unit tests pasan, pero Localización reporta errores de glosario y quejas. ¿Qué hacés?'*

**2️⃣ DEBATE ENTRE A, B Y C (Gana la C) + EXTRA:**
• **Opción A (Volver todo atrás para siempre):** Apaga el fuego, pero perdés todo el ahorro y seguís sin Evals.
• **Opción B (Revisión manual al 100%):** Arma un cuello de botella más caro que el modelo grande.
• **Opción C (Mejor camino):** Revertís con *feature flag* solo en terminología crítica, corrés el *Golden Dataset* por categoría en Langfuse y dejás el modelo chico únicamente donde saca ≥ 0.90, sumando alertas de Drift.
• Si sobra 1 minuto, abrí el botón **'Extra: agente en 30 días sin datos limpios'** abajo a la izquierda (*Discovery Spike* + *Shadow Mode*).

### 🎛️ Cómo usar el simulador / ejemplo práctico: Simulador de Entrevista 2: Model Drift + Bloque Extra
1. Leé el `Escenario` superior: ahorraron 60% pasando a modelo chico, el código pasa los tests, pero fallan términos legales.
2. Tocá **'1. Simular caída'** → `0.64` cambia a `0.64 (ALERTA)`, el chat explica que los tests unitarios solo miran JSON y no glosario ES/PT, y se habilita **'2. Rollback + Routing'**.
3. Debatí con Anabela entre **Opción A, B y C** antes de cliquear. Mostrá las objeciones de A o B si hace falta, y tocá **'Opción C'** → se marca en verde y la fidelidad sube a `0.95 (OK)`.
4. Tocá abajo a la izquierda **'Extra: agente en 30 días sin datos limpios'** para desplegar cómo negociar un pedido urgente sin prometer fechas imposibles (`Spike de 5 días + Configure/Buy + Shadow Mode`).
- **Ejemplo práctico para contar:** Cambio de proveedor o modelo económico que rompe terminología de glosario bajo NDA sin disparar errores de código: la salida es segmentar por categoría en Langfuse en vez de revertir todo a ciegas.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Routing por categoría:** Dejar el modelo económico donde las pruebas dan arriba de 0.90 y mantener el modelo grande en los casos donde el detalle importa.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Simular caída' a la izquierda, debatan A, B y C a la derecha (gana la C), y abrí 'Extra: agente en 30 días sin datos limpios' abajo.

### 🔗 Puente de Conexión → Slide 15 (Cierre del programa y próximos pasos)
> **"Con esto cerramos los casos de entrevista. Pasemos a la última slide, la Slide 15, para repasar todo y ver cómo seguir este mes."**

---

## Slide 15: Cierre del programa y próximos pasos
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Cierre · Repaso S1–S4 · Próximo mes

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cerrar de forma cercana repasando las 4 clases y dejando 4 tareas semanales concretas para el próximo mes.
- **👆 Qué tocar en la Slide:** Mostrá las 4 tarjetas S1–S4, la fila de 4 semanas y los 3 botones finales.
- **💬 La analogía ganadora:** Te queda el mapa entero ordenado en un solo lugar para repasar 15 minutos antes de cualquier charla técnica.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CIERRE DEL RECORRIDO (Las 4 sesiones):**
• En cuatro clases conectaste tu base de gestión y localización con cómo trabajan hoy los equipos de software (S1), LLMs y RAG (S2), Agentes y MCP (S3) y hoy costos reales, salida gradual, Evals/Drift y entrevistas (S4).

**2️⃣ CÓMO SEGUIR PRACTICANDO ESTE MES (4 pasos simples):**
• **Semana 1:** Bajá a una página tu caso práctico usando el Mock PRD de S2 y el cálculo honesto de TCO/tiempo de hoy.
• **Semana 2:** Ajustá CV y LinkedIn conectando tu trayectoria en Localización con proyectos de IA y QA.
• **Semana 3:** Repasá en voz alta cómo mostraste el flujo de Antigravity + AWS MCP en 2 minutos.
• **Semana 4:** Volvé al Simulador S4 y practicá defender los dos casos sin mirar la respuesta.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Portfolio práctico de 1 página:** Un caso concreto (problema, arquitectura, riesgos, TCO y cómo lo medirías) listo para contar en 3 minutos en una entrevista.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 4 sesiones, recorré los 4 pasos simples para el próximo mes y recordale dónde quedan el Simulador S4, Glosario S4 y Portal.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🏁 Cierre Final: Todo el portal con las 4 presentaciones, glosarios, Mock PRD y simuladores te queda abierto para consultar cuando tengas una entrevista o reunión técnica. ¡Muchos éxitos!"**

---

## Guía paso a paso: Simulador Práctico Independiente (actividad_practica_sesion_4.html)

Usá este laboratorio en los últimos 5–8 minutos si queda tiempo después de la Slide 15, o dejáselo a Anabela para practicar sola antes de una entrevista. Tiene 4 decisiones a la izquierda y 3 casos de crisis a la derecha.

1. Abrí **`Simulador Práctico S4`** desde la barra superior (o el botón de cierre en la Slide 15). Dejá los 4 selectores de la izquierda en la opción inicial (configuración básica sin controles).
2. **Paso 1 — Provocar el fallo:** Sin cambiar ningún selector, tocá **`Caso 1 (Baja adopción y presupuesto)`** a la derecha → la consola sale en rojo mostrando por qué fracasa un bot caro sin streaming ni integración.
3. **Paso 2 — Arreglar un frente y mostrar qué falta:** Cambiá manualmente **`1. FinOps`** y **`2. Salida/UX`** a la opción recomendada y volvé a tocar `Caso 1` → pasa a verde (`CASO 1 RESUELTO`). Enseguida tocá **`Caso 2 (Model Drift)`** → sigue en rojo porque falta **`3. Evaluaciones y monitoreo`** (demuestra que ahorrar costos sin Evals no protege la calidad).
4. **Paso 3 — Escenario completo:** Tocá **`Cargar configuración recomendada`** arriba a la izquierda (ajusta los 4 selectores) y probá **`Caso 2`** y **`Caso 3`** repasando cada diagnóstico en consola junto con Anabela.

### Casos del Simulador Práctico

- **Caso 1: Baja adopción y presupuesto en riesgo** *(Requiere: 1. FinOps + 2. Salida/UX)*: Conectar trazas + entrevistas para llevar el flujo dentro de Jira/TMS con Token Streaming (< 1s) y bajar factura con Routing/Batch.
- **Caso 2: Model Drift en Localización** *(Requiere: 3. Evals + 1. FinOps)*: Rollback selectivo con Feature Flag en glosario crítico, Golden Dataset por categoría en Langfuse y alertas de Drift sin perder todo el ahorro.
- **Caso 3: Pedido apurado (30 días) y Shadow AI** *(Requiere: 4. Gobernanza + 2. Salida/UX)*: Discovery Spike de 1 semana con 30 casos reales + salida Configure/Buy segura contra Shadow AI mientras prueban en Shadow Mode y cuidan trazas EU AI Act.

