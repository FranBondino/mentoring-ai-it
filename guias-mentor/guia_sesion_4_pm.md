# 🎙️ Sesión 4: Liderazgo Ejecutivo de Productos de IA: FinOps, Build vs. Buy, Evals & Entrevistas

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Cerrar el programa elevando a Anabela al rol ejecutivo de AI Product / Project Manager: decidir Build vs. Buy vs. Configure, optimizar costos con Model Routing y Batch API (-50%) sobre TCO real, lanzar sin riesgo (Shadow Mode, Canary y AI UX), diagnosticar la Tríada RAG, Trajectory Evals y Model Drift en Langfuse, y resolver dilemas reales de entrevista con trade-offs claros.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. FinOps Avanzado, Build vs. Buy & ROI/Payback (Slides 1 a 6):** Model Routing (80% a Flash/Haiku ahorra ~76%), Batch API (-50% nocturno), TCO completo (incluyendo +20–30% por idiomas ES/PT), marco **Build vs. Buy vs. Configure** con Model Gateway y Calculadora de **ROI + Payback**.
- **2. Lanzamiento Seguro, AI UX & Gobernanza 2026 (Slides 7 a 8):** Stepper de **Shadow Mode → Canary Rollout → Data Flywheel**, cómo mejorar adopción con **Token Streaming (< 1s)** y flujos contextuales, **Discovery Spikes** de 1 semana en Agile probabilístico, y gestión de **Shadow AI, EU AI Act e IP**.
- **3. AI Evals Avanzados & Langfuse (Slides 9 a 11):** Conectar la **Tríada RAG** con tickets exactos de Backlog (Prompt vs. Vector DB), **Trajectory Evals** para agentes, **Model Drift** calibrado con criterio humano experto (**SME**) y el ritual semanal de 5 minutos en **Langfuse**.
- **4. Entrevistas Senior con Dilemas Reales & Plan 30 Días (Slides 12 a 15):** Ventaja injusta desde Localización, 2 simuladores con **3 opciones plausibles con trade-offs** (Crisis de Adopción 12% y Model Drift + Bonus Presión del VP) y un **Plan de Acción de 30 días**.

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 18 min** | FinOps Avanzado, Build vs. Buy & Business Case | Slides 1 a 6 | Model Routing (80/20), Batch API (-50%), los 4 costos ocultos del TCO (incluyendo impuesto multilingüe), marco Build vs. Buy vs. Configure (Model Gateway) y Calculadora de ROI & Payback. |
| **18 - 33 min** | Lanzamiento Seguro, AI UX & Gobernanza 2026 | Slides 7 a 8 | Stepper de Shadow Mode → Canary Rollout → Data Flywheel, Token Streaming (< 1s), Agile Probabilístico (Discovery Spike) y gobernanza de Shadow AI, EU AI Act e IP. |
| **33 - 45 min** | AI Evals Avanzados & Observabilidad en Langfuse | Slides 9 a 11 | Mapeo de Tríada RAG a tickets exactos de Backlog, Trajectory Evals de agentes, Model Drift con calibración SME y el ritual de 5 minutos en Langfuse. |
| **45 - 60 min** | Entrevistas Senior con Dilemas Reales & Plan 30 Días | Slides 12 a 15 | Ventaja injusta desde Localización, simulacros de 3 opciones (Adopción 12% y Model Drift + Bonus VP) y Plan de Acción de 30 días. |

---

## Slide 1: Liderazgo Ejecutivo de Productos de IA
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Sesión 4 · Cierre · FinOps & Build/Buy · AI UX & Evals · Rol PM Senior

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar la Sesión 4 como el salto de la arquitectura técnica (S1-S3) al liderazgo ejecutivo de producto IA (FinOps, Build/Buy, Rollout/UX, Evals y Entrevistas).
- **👆 Qué tocar en la Slide:** Recorré visualmente las 4 tarjetas S1 → S2 → S3 → S4 en portada.
- **💬 La analogía ganadora:** En S1–S3 aprendiste cómo funciona el avión y sus motores; hoy aprendés a dirigir la aerolínea: rentabilidad por ruta, cuándo alquilar vs. fabricar y cómo manejar turbulencias reales.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ BIENVENIDA A LA SESIÓN FINAL (El salto al rol ejecutivo):**
• En las **Sesiones 1 a 3** aprendiste cómo se construye todo por dentro: ingeniería y Agile (S1), memoria segura con RAG (S2) y manos con Agentes y MCP (S3).

**2️⃣ EL FOCO DE HOY (100% TEMAS NUEVOS):**
• Hoy no vamos a repetir cosas básicas de tokens ni de PII que ya dominás: nos ponemos el sombrero de **AI Product Manager** para decidir qué comprar vs. construir, defender un **Business Case con TCO real**, lanzar sin fricción y resolver **dilemas difíciles de entrevista**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **AI Product Leadership:** Tomar decisiones de negocio, inversión, experiencia de usuario y calidad alrededor de la IA sin depender de intuición.

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá la portada y señalá las 4 tarjetas del recorrido: Base (S1), Memoria (S2), Acción (S3) y Hoy Liderazgo Ejecutivo (S4).

### 🔗 Puente de Conexión → Slide 2 (Agenda Ejecutiva de la Sesión 4 (100% Temas Nuevos))
> **"Miremos en la Slide 2 los 4 bloques 100% nuevos que vamos a recorrer hoy en 60 minutos."**

---

## Slide 2: Agenda Ejecutiva de la Sesión 4 (100% Temas Nuevos)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. FinOps & Build/Buy · 2. Shadow Mode & AI UX · 3. Evals & Langfuse · 4. Dilemas & Plan 30D

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar el mapa completo de 4 bloques nuevos sin solaparse con S1–S3.
- **👆 Qué tocar en la Slide:** Señalá brevemente las 4 tarjetas de la agenda.
- **💬 La analogía ganadora:** Es tu tablero de Directora de Producto: Finanzas, Lanzamiento/UX, Calidad y Carrera.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LOS 4 BLOQUES DE HOY (Señalá la grilla 2×2):**
• **1. FinOps Avanzado & Build vs. Buy:** Model Routing (80/20), Batch API (-50%), costos ocultos del TCO, cuándo comprar SaaS vs. configurar vs. construir y la Calculadora de ROI & Payback.
• **2. Lanzamiento Seguro & AI UX:** Cómo salir con *Shadow Mode* y *Canary*, evitar pantallas congeladas, usar *Discovery Spikes* y gobernar *Shadow AI* y *EU AI Act*.
• **3. AI Evals Avanzados & Langfuse:** Diagnóstico de causa raíz en la Tríada RAG, Evals de Agentes y detección de *Model Drift*.
• **4. Entrevistas Senior & Plan 30 Días:** Tu diferencial desde Localización, 2 crisis con dilemas reales y tu hoja de ruta post-mentoría.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **FinOps en IA:** Disciplina para optimizar el costo real en la nube de un producto de IA sin sacrificar la calidad que el usuario percibe.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 4 tarjetas en pantalla destacando que cada bloque aporta herramientas nuevas de gestión.

### 🔗 Puente de Conexión → Slide 3 (FinOps 1: Model Routing (Enrutamiento de Modelos))
> **"Arranquemos con la palanca número uno de FinOps en producción: cómo dejar de pagar el modelo más caro para todo en la Slide 3."**

---

## Slide 3: FinOps 1: Model Routing (Enrutamiento de Modelos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Model Routing · Tiered Routing (80/20) · Simulador -76%

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** No usamos un modelo caro para todo: un Model Router manda el 80% fácil a Flash/Haiku y deja solo el 20% complejo al modelo Frontier.
- **👆 Qué tocar en la Slide:** 1° Señalá Ruta Rápida vs. Experta → 2° Mové el slider del simulador al 80% para ver $1,200 → $288/mes.
- **💬 La analogía ganadora:** En un hospital no te atiende un neurocirujano para tomarte la presión: la guardia general resuelve rápido el 80% y deriva solo lo complejo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL ERROR DE USAR UN ÚNICO MODELO FRONTIER (Tarjeta izquierda):**
• Si usás *Claude Opus* o *GPT-4o* para clasificar un ticket simple o responder una FAQ, estás pagando **20 veces más** y esperando el triple sin necesidad.
• Con **Model Routing**, un clasificador rápido en la puerta separa el tráfico en dos carriles:
  • **🟢 Ruta Rápida (70%-85%):** Modelos livianos (*Gemini Flash, Claude Haiku, GPT-4o-mini, AWS Nova Micro*) a ~$0.15/1M tokens en `0.3 seg`.
  • **🟣 Ruta Experta (15%-30%):** Modelos *Frontier* solo para contratos ambiguos, transcreación o razonamiento multi-paso.

**2️⃣ SIMULADOR EN VIVO (Mové el deslizador derecho):**
• Mandar el 100% al modelo grande cuesta **$1,200 USD/mes**. Al derivar el **80%** al modelo liviano, la factura cae a **$288 USD/mes** (**76% de ahorro**, $912 USD menos cada mes) y la UX se siente instantánea.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing:** Semáforo inteligente que manda tareas simples a un modelo barato y rápido, y tareas difíciles al modelo más potente.

### ⚡ Dinámica / Interacción en Pantalla
- Explicá las dos rutas a la izquierda y mové el deslizador de la derecha en vivo para mostrar la caída de $1,200 a $288 USD/mes.

### 🔗 Puente de Conexión → Slide 4 (FinOps 2: Batch API (-50%) & Los 4 Costos Ocultos (TCO))
> **"Ese ahorro es para chats en vivo. ¿Qué pasa cuando además tenés procesos masivos nocturnos, y qué costos ocultos suelen olvidar en un presupuesto? Pasemos a la Slide 4."**

---

## Slide 4: FinOps 2: Batch API (-50%) & Los 4 Costos Ocultos (TCO)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Batch API (-50%) · TCO Real · Impuesto Multilingüe

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Combinar Batch API (-50% en cargas nocturnas/asíncronas) con un presupuesto de TCO realista que incluya infraestructura fija y +25% por idiomas ES/PT.
- **👆 Qué tocar en la Slide:** Compará las 2 tarjetas: velocidades de API a la izquierda y los 4 costos ocultos del TCO a la derecha.
- **💬 La analogía ganadora:** Batch API es el envío en camión nocturno a mitad de precio frente a la moto urgente; el TCO es sumar seguro, peajes y patente además de la nafta.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ SEPARAR TIEMPO REAL DE PROCESAMIENTO NOCTURNO (Tarjeta izquierda):**
• **⚡ Síncrono (100% tarifa):** Chatbots donde un usuario espera respuesta en menos de 2 segundos.
• **🌙 Batch API / Asíncrono (50% Off):** Cuando procesás 3.000 strings de un release o auditás glosarios para mañana a la mañana, mandás el lote por **Batch API** (AWS Bedrock / OpenAI) y pagás **exactamente la mitad**.

**2️⃣ LOS 4 COSTOS OCULTOS DEL TCO (Tarjeta derecha):**
• Un PM Junior solo cotiza los tokens de salida. Vos incluís el **TCO completo**: **1)** Multiplicador agéntico ReAct (×4 lecturas), **2)** Infraestructura fija (Vector DB + Langfuse, ~$70–$250/mes), **3)** **Impuesto Multilingüe** (ES, PT y DE consumen ~20–30% más tokens que Inglés — clave en localización), y **4)** Evals automáticas (~8%) + horas HITL.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Impuesto Multilingüe de Tokens:** Español, portugués o alemán generan ~20–30% más tokens que el inglés para la misma frase, encareciendo los proyectos multilingües.
- **TCO (Costo Total de Propiedad):** La suma real de tokens, base vectorial, observabilidad, evaluaciones automáticas y tiempo humano de revisión.

### ⚡ Dinámica / Interacción en Pantalla
- Compará Síncrono vs. Batch API a la izquierda y recorré los 4 puntos del TCO a la derecha destacando el +20–30% multilingüe.

### 🔗 Puente de Conexión → Slide 5 (Build vs. Buy vs. Configure (y Vendor Lock-in))
> **"Ahora bien: antes de gastar un solo dólar en infraestructura o ingenieros, hay una pregunta previa que define a un PM Senior. Vamos a la Slide 5: Build vs. Buy vs. Configure."**

---

## Slide 5: Build vs. Buy vs. Configure (y Vendor Lock-in)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Build vs. Buy vs. Configure · Model Gateway · Anti Vendor Lock-in

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Un PM Senior decide primero si comprar SaaS (Buy), conectar herramientas (Configure) o construir propio detrás de un Model Gateway para evitar Vendor Lock-in.
- **👆 Qué tocar en la Slide:** Recorré Buy / Configure / Build y luego tocá los 3 botones del Mini-Asesor abajo.
- **💬 La analogía ganadora:** Si necesitás viajar al aeropuerto te tomás un taxi (Buy); si repartís en tu barrio alquilás una camioneta estándar (Configure); solo armás flota propia si sos Mercado Libre (Build).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ TU PRIMERA DECISIÓN COMO PM ANTES DE PEDIR DEVS (3 tarjetas superiores):**
• **🛒 BUY (SaaS):** Si es una tarea genérica sin ventaja competitiva (ej. resumir reuniones internas), comprás licencia en 3 días. No gastes ingenieros ahí.
• **🧩 CONFIGURE (Low-Code / MCP):** Para pilotos y automatizaciones conectando Jira o glosarios, orquestás con AWS Bedrock KB o MCP en 2 semanas.
• **🏗️ BUILD (Propio):** Solo cuando es tu diferencial core y tenés gran escala. Siempre detrás de un **Model Gateway** (*AWS Bedrock* o *LiteLLM*) para cambiar entre Claude, Gemini o GPT sin reescribir código (**anti Vendor Lock-in**).

**2️⃣ MINI-ASESOR EN VIVO (Tocá los 3 botones de abajo):**
• Probá los 3 casos con Anabela: *1. Resumir llamadas → BUY*, *2. Piloto QA conectado a Jira → CONFIGURE*, *3. Motor médico de 500k docs/mes → BUILD con Gateway*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Gateway (Anti Vendor Lock-in):** Un enchufe adaptador único (como AWS Bedrock o LiteLLM) para cambiar de modelo de IA en minutos sin quedar atado a un solo proveedor.

### ⚡ Dinámica / Interacción en Pantalla
- Explicá las 3 columnas arriba y hacé clic en los 3 escenarios del Mini-Asesor abajo para mostrar la recomendación en vivo.

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Calculadora Realista de ROI, TCO & Payback)
> **"Cuando ya elegiste construir o configurar un caso de alto impacto, ¿cómo defendés los números completos ante el Director Financiero? Abramos la Calculadora en la Slide 6."**

---

## Slide 6: Ejercicio 1: Calculadora Realista de ROI, TCO & Payback
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** ROI & Payback · Calculadora TCO · Business Case Finanzas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Calcular en vivo el retorno real incluyendo TCO fijo ($180/mes + 8% Evals), supervisión HITL (20%) y semanas de Payback sobre un setup de $8.000 USD.
- **👆 Qué tocar en la Slide:** Mostrá los defaults (Ahorro $19.790,84/mes · Payback 1.8 semanas) y jugá destildando Routing, Batch o TCO.
- **💬 La analogía ganadora:** Es el flujo de caja del proyecto: te permite sentarte frente al CFO sabiendo exactamente el costo fijo, la supervisión humana y en qué semana se paga solo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ARMANDO UN BUSINESS CASE CREÍBLE ANTE FINANZAS (Izquierda):**
• Con **5.000 documentos/mes** a **15 minutos** cada uno y **$20 USD/hora**, hacer el trabajo 100% manual requiere **1.250 horas** (7.8 personas FTE) y cuesta **$25.000 USD al mes**.

**2️⃣ ACTIVANDO LAS PALANCAS FINOPS Y EL TCO REAL (Checkboxes y resultados a la derecha):**
• Sin optimizar, la API base saldría $225/mes. Al activar **Model Routing + Batch API**, la inferencia baja a $27/mes; sumando el **TCO fijo ($180/mes de Vector DB y Langfuse + 8% de Evals)** el costo IA total real es **$209.16 USD/mes**.
• Incluso pagando un **20% de supervisión humana HITL ($5.000/mes)**, el **ahorro neto es $19.790.84 USD/mes**: una inversión inicial de $8.000 USD se recupera (**Payback**) en apenas **1.8 semanas** (ROI 380%).

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Payback Period (Período de Repago):** Cuántas semanas o meses tarda el ahorro mensual del proyecto en devolver la inversión inicial de desarrollo.

### ⚡ Dinámica / Interacción en Pantalla
- Dejá los valores base (5.000 docs, 15 min, $20/h) con los 3 checkboxes activos, luego destildá y tildá Routing/Batch/TCO para mostrar su impacto en el Payback.

### 🔗 Puente de Conexión → Slide 7 (Lanzamiento Seguro: Shadow Mode, Canary & Flywheel)
> **"Con los números aprobados, llega el momento de la verdad: ¿cómo lanzamos este producto a usuarios reales sin romper la operación ni quedar expuestos? Vamos al Bloque 2 en la Slide 7."**

---

## Slide 7: Lanzamiento Seguro: Shadow Mode, Canary & Flywheel
- **⏱️ Tiempo estimado:** 6 Min | **🏷️ Etiquetas:** Shadow Mode · Canary Rollout · Data Flywheel

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Desplegar en 3 etapas medibles: Shadow Mode (0% expuesto), Canary con Feature Flags (5% → 100%) y Data Flywheel continuo.
- **👆 Qué tocar en la Slide:** Hacé clic en Tarjeta 1, Tarjeta 2 y Tarjeta 3 para ver cómo cambia el tablero inferior.
- **💬 La analogía ganadora:** Como formar a un coordinador nuevo: dos semanas escucha en silencio al lado tuyo (Shadow), luego atiende un 5% de clientes supervisado (Canary) y cada corrección queda en el manual (Flywheel).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ FASE 1: SHADOW MODE / MODO SOMBRA (Clic en Tarjeta 1):**
• Nunca encendés un agente nuevo para todos los clientes el lunes a la mañana. Durante 1–2 semanas corre en **Shadow Mode**: procesa pedidos reales detrás de escena sin que el cliente vea nada.
• Mirá el panel abajo: **0% de tráfico expuesto**, riesgo cero y tu gate de salida es lograr **≥ 90% de acuerdo** contra el equipo experto.

**2️⃣ FASE 2: CANARY ROLLOUT 5% → 25% → 100% (Clic en Tarjeta 2):**
• Con *Feature Flags*, encendés solo al **5%** (o un proyecto piloto) vigilando latencia P95 y costos en Langfuse, con rollback en 1 clic si algo desvía.

**3️⃣ FASE 3: DATA FLYWHEEL (Clic en Tarjeta 3):**
• Sumás botones de **👍 / 👎**. Cada corrección de una lingüista o analista alimenta el *Golden Dataset* para mejorar cada sprint.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Shadow Mode (Modo Sombra):** El agente trabaja en paralelo leyendo casos reales pero sin responder al usuario final, solo para medir su acierto sin riesgo.
- **Canary Rollout + Feature Flags:** Abrir el sistema a un 5% de usuarios con una llave de apagado rápido para volver atrás en 1 segundo si aparece un error.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic sucesivamente en las 3 tarjetas de fase arriba para ir actualizando el tablero de Tráfico, Riesgo, Gate de Salida y Acción de la PM abajo.

### 🔗 Puente de Conexión → Slide 8 (AI UX, Agile Probabilístico & Gobernanza 2026)
> **"Pero incluso si un agente es preciso y barato, muchos proyectos fracasan porque la gente no los usa o porque chocan con nuevas normas legales. Veamos AI UX y Gobernanza 2026 en la Slide 8."**

---

## Slide 8: AI UX, Agile Probabilístico & Gobernanza 2026
- **⏱️ Tiempo estimado:** 9 Min | **🏷️ Etiquetas:** AI UX & Streaming · Discovery Spike · Shadow AI & EU AI Act

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cubrir lo que define el éxito real en 2026: UX rápida (Streaming + botones contextuales), Discovery Spikes de 1 semana antes de prometer fechas, y gobierno de Shadow AI / EU AI Act / IP.
- **👆 Qué tocar en la Slide:** Alterná '🐢 12s Congelada' y '⚡ 0.8s Streaming' en la tarjeta izquierda y señalá los 3 pilares de gobernanza a la derecha.
- **💬 La analogía ganadora:** Discovery Spike es probar la tela con una muestra de 30 piezas antes de cortar mil trajes; combatir el Shadow AI es abrir una autopista segura en vez de poner carteles de 'prohibido pasar'.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ AI UX: POR QUÉ FALLA LA ADOPCIÓN (Tarjeta izquierda + Mini-Demo):**
• Un bot preciso igual fracasa por mala UX. Necesitás **TTFT &lt; 1s** combinando **Token Streaming** + **Parallel Tool Calling** + mensajes de estado (probá los dos botones abajo para contrastar *12s congelado* vs. *0.8s streaming*).
• Además, evitá obligar a adivinar en un chat vacío: diseñá **botones contextuales dentro de Jira/TMS**, citas clicables y flujo *Copilot (Revisar y Aprobar)*.

**2️⃣ AGILE PROBABILÍSTICO (DISCOVERY SPIKE):**
• Nunca prometas fechas cerradas de 3 meses sin validar tus datos: corré un **Discovery Spike de 1 semana con 30 casos reales** para confirmar viabilidad técnica antes del roadmap.

**3️⃣ GOBERNANZA EJECUTIVA 2026 (Tarjeta derecha):**
• **Shadow AI:** Prohibir por mail empuja al equipo a cuentas personales; ganás dando una herramienta segura y rápida. **EU AI Act:** Casos de Alto Riesgo (RRHH/crédito) exigen trazas y supervisión humana, además de avisar que es IA. Y revisá siempre **Propiedad Intelectual (IP)** y sesgos multilingües.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **TTFT (Time To First Token):** Los segundos hasta que aparece la primera palabra en pantalla; debajo de 1 segundo evita que el usuario abandone.
- **Shadow AI:** Cuando los empleados usan cuentas personales gratuitas de IA a escondidas porque la empresa no les da una solución cómoda y aprobada.
- **Discovery Spike:** Prueba corta de 5 días con 30 casos reales al principio de un proyecto para verificar si los datos alcanzan antes de comprometer un roadmap.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá los dos botones de la mini-demo UX ('12s Congelada' vs. '0.8s Streaming') y conectá el Discovery Spike con los 3 riesgos de Gobernanza a la derecha.

### 🔗 Puente de Conexión → Slide 9 (AI Evals Avanzados: Tríada, Agentes & Model Drift)
> **"Ya sabemos lanzar y lograr que la gente adopte el producto. Ahora entremos al Bloque 3 (Slides 9 a 11) para auditar científicamente la calidad sin repetir lo básico."**

---

## Slide 9: AI Evals Avanzados: Tríada, Agentes & Model Drift
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tríada RAG → Backlog · Trajectory Evals · Model Drift & SME

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Saber traducir qué métrica de la Tríada cayó en qué pieza técnica arreglar, evaluar trayectorias de agentes y detectar Model Drift con calibración SME.
- **👆 Qué tocar en la Slide:** Recorré las 3 filas de la izquierda (Fidelidad / Contexto / Relevancia) y las 2 cajas de la derecha (Trajectory + Model Drift).
- **💬 La analogía ganadora:** Un buen médico no receta el mismo antibiótico para todo: si falla Contexto atiende la búsqueda (la biblioteca); si falla Fidelidad atiende la redacción (el orador).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ DE MÉTRICA QUE FALLA A TICKET DE BACKLOG (Tarjeta izquierda):**
• En S2 viste el *Golden Dataset* en CI/CD. Hoy lo traducimos en decisiones de PM: si cae **Fidelidad**, tocás *System Prompt / Temperatura 0.0 / Guardrail*; si cae **Precisión de Contexto**, tocás *Chunking / Metadatos / Vector DB* (no el prompt); si cae **Relevancia**, ajustás *formato e instrucción*.

**2️⃣ TRAJECTORY EVALS & MODEL DRIFT (Tarjeta derecha):**
• En Agentes evaluamos la trayectoria (**Trajectory Evaluation**): ¿llamó a la herramienta correcta con JSON válido sin dar vueltas extra?
• Y cuidado con el **Model Drift**: un proveedor actualiza su modelo en silencio y tu calidad cae sin que hayas tocado código. Calibrar un *LLM-as-a-Judge* requiere criterio experto (**SME**): ahí tu background en **Traducción y QA Lingüístico** es una ventaja enorme.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Trajectory Evaluation:** Evaluar el paso a paso de un agente: si eligió las herramientas correctas y en el menor número de vueltas.
- **Model Drift:** Cuando la calidad de la IA empeora sin cambios en tu código porque el proveedor actualizó el modelo o cambiaste a uno más económico.

### ⚡ Dinámica / Interacción en Pantalla
- Conectá cada métrica de la Tríada a la izquierda con su ticket exacto de ingeniería, y destacá Trajectory Evals + ventaja lingüística (SME) a la derecha.

### 🔗 Puente de Conexión → Slide 10 (Ejercicio 2: Simulador de Auditoría Evals (Causa Raíz))
> **"Probemos diagnosticar causas raíz en vivo en la Slide 10 usando el simulador con presets."**

---

## Slide 10: Ejercicio 2: Simulador de Auditoría Evals (Causa Raíz)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Auditoría Práctica · Alucinación vs Retrieval · Diagnóstico Sprint

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Practicar el diagnóstico de causa raíz usando los 3 presets: Alucinación (Prompt) vs. Fallo Retrieval (Chunking/Vector DB) vs. Sana (Canary).
- **👆 Qué tocar en la Slide:** Tocá los 3 botones preset arriba a la derecha: '🔍 Alucinación', '📂 Fallo Retrieval' y '✅ Sana'.
- **💬 La analogía ganadora:** Es diferenciar si el alumno contestó mal porque no leyó el capítulo correcto (Fallo Retrieval) o porque inventó un dato fuera del libro abierto (Alucinación).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL CASO REAL EN PANTALLA (Columna izquierda):**
• El manual oficial dice que *Checkout v4* está **bloqueado en QA lingüístico**, pero el bot alucina al final: *'mañana se aprobará automáticamente sin pruebas de QA'*.

**2️⃣ DIAGNOSTICAR SIN ADIVINAR CON LOS 3 PRESETS (Columna derecha):**
• **Clic en '🔍 Alucinación':** Contexto `1.0` pero Fidelidad `0.2` → **RECHAZADO · Ticket para Prompt / Temperatura / Guardrail**.
• **Clic en '📂 Fallo Retrieval':** Fidelidad `0.9` pero Contexto `0.3` → **RECHAZADO · Ticket para Chunking / Metadatos / Vector DB**.
• **Clic en '✅ Sana':** Todo ≥ `0.95` → **APROBADO PARA CANARY**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Causa Raíz en Evals:** Identificar si el error nació en el buscador (Vector DB) o en el modelo (Prompt/LLM) antes de asignarlo al sprint.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los 3 presets arriba a la derecha ('🔍 Alucinación', '📂 Fallo Retrieval', '✅ Sana') para ver cómo cambia el ticket de Backlog en el veredicto.

### 🔗 Puente de Conexión → Slide 11 (Observabilidad en Producción: Radiografía en Langfuse)
> **"Ahora, cuando el sistema ya está en producción, ¿en qué tablero mira la PM todo esto los lunes en 5 minutos? Pasemos a la Slide 11: Langfuse."**

---

## Slide 11: Observabilidad en Producción: Radiografía en Langfuse
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Langfuse LLMOps · Traces & Spans · Data Flywheel en Vivo

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar Langfuse para ver trazas completas (Router + Retrieval + Generation + Async Eval), alimentar el Data Flywheel y correr el ritual semanal de 5 minutos.
- **👆 Qué tocar en la Slide:** Hacé clic en los 4 nodos del árbol a la izquierda y tocá el botón '👎 Simular Reporte → Enviar al Golden Dataset'.
- **💬 La analogía ganadora:** Es la caja negra y la telemetría de cada consulta en vivo: en 10 segundos ves cuánto tardó, cuánto costó y qué paso falló.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ RADIOGRAFÍA EN LANGFUSE CON MODEL ROUTING (Árbol izquierdo):**
• Abrís la **Traza** de una consulta real y ves en segundos: **Span 1** muestra que el *Model Router* eligió *Flash* (`$0.0001`, `160ms`) y recuperó 2 chunks con similitud `0.91` y `0.87`; **Span 2** muestra la generación con Streaming (`TTFT 220ms`); **Span 3** muestra la Eval asíncrona (`0.97`).
• Tocá el botón **'👎 Simular Reporte → Enviar al Golden Dataset'** para mostrar cómo una corrección humana cierra el **Data Flywheel**.

**2️⃣ EL RITUAL DE 5 MINUTOS DE LA PM CADA LUNES (Tarjeta derecha):**
• 1) Diagnosticar Span 1 vs. Span 2 sin adivinar, 2) Mirar alertas de **Model Drift** si cae Faithfulness semanal, 3) Revisar costo por área y **latencia P95**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Latencia P95:** El tiempo máximo que espera el 95% de los usuarios; vigila que los casos lentos no arruinen la experiencia aunque el promedio parezca bueno.

### ⚡ Dinámica / Interacción en Pantalla
- Expandí los 4 pasos del árbol a la izquierda, tocá el botón '👎 Simular Reporte → Enviar al Golden Dataset' y repasá el Ritual de los Lunes a la derecha.

### 🔗 Puente de Conexión → Slide 12 (Entrevistas Senior: Fórmula de 3 Pasos + Tu Ventaja Injusta)
> **"Con todo el arsenal técnico y de liderazgo listo, dediquemos los últimos 15 minutos al Bloque 4: entrevistas senior con dilemas reales y tu Plan de 30 Días. Vamos a la Slide 12."**

---

## Slide 12: Entrevistas Senior: Fórmula de 3 Pasos + Tu Ventaja Injusta
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Trade-offs de PM · Fórmula 3 Pasos · Perfil Localización → IA

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Estructurar respuestas senior alrededor de evidencia → decisión con trade-off → impacto medible, apalancando el background de Localización de Anabela.
- **👆 Qué tocar en la Slide:** Señalá primero los 3 pasos a la izquierda y luego los 3 puentes profesionales de Anabela a la derecha.
- **💬 La analogía ganadora:** Tu trayectoria en Localización no es algo del pasado: es exactamente lo que hoy las empresas de IA buscan desesperadamente para evaluar y gobernar lenguaje.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CÓMO RESPONDE UNA PM SENIOR (Tarjeta izquierda):**
• En entrevistas de alto nivel no hay opciones obvias: evaluán tu criterio en 3 pasos: **1)** Diagnóstico con datos (Langfuse + usuarios), **2)** Decisión de Backlog explicando el **trade-off** (qué ganás y qué acotás), **3)** Impacto medible en negocio/adopción/ROI.

**2️⃣ TU VENTAJA INJUSTA DESDE LOCALIZACIÓN (Tarjeta derecha):**
• Vos no llegás en cero: **Glosarios y QA Lingüístico** son *Context Engineering y Rúbricas de Evals (SME)*; **Gestión de traductores multi-región** es *Orquestación HITL, SLAs y stakeholders*; y **Dominio Multilingüe** es *Token Economics (+25% ES/PT) y auditoría de sesgos culturales*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **SME (Subject Matter Expert):** Experto humano de dominio que define criterios de calidad y calibra las rúbricas de evaluación automática.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá la fórmula de 3 pasos a la izquierda y conectá los 3 puentes directos de Anabela (Localización → AI PM) a la derecha.

### 🔗 Puente de Conexión → Slide 13 (Entrevista Real 1: Adopción al 12% y Presupuesto en Riesgo)
> **"Pongamos esa fórmula y tu perfil a prueba ahora mismo en 2 dilemas reales donde todas las opciones parecen tentadoras al principio. Pasemos a la Slide 13."**

---

## Slide 13: Entrevista Real 1: Adopción al 12% y Presupuesto en Riesgo
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Dilema Adopción 12% · AI UX + FinOps · 3 Opciones Plausibles

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mostrar que los proyectos de IA mueren más por baja adopción/fricción UX y falta de ROI claro que por falla técnica, usando 3 opciones realistas.
- **👆 Qué tocar en la Slide:** 1° Izquierda: '1. Auditar Adopción' → 2° Derecha: probá A, B y C para comparar el feedback.
- **💬 La analogía ganadora:** Si nadie entra a un gimnasio moderno y caro, no sirve pintar las paredes ni obligar con un memo: mirás por qué la gente no llega (fricción), mejorás la entrada y ajustás costos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL DILEMA DEL HIRING MANAGER (Leé la pregunta):**
• *'El asistente funciona bien técnicamente, pero solo lo usa el 12% del equipo y Finanzas quiere cancelar el presupuesto en 30 días. ¿Qué priorizás?'*

**2️⃣ ANALIZAR LOS 3 CAMINOS (Hacé clic en Auditar y probá A, B y C):**
• **Opción A (Mail del VP + capacitación obligatoria):** Sube una semana por obligación y vuelve a caer porque no quitaste la fricción real.
• **Opción B (Pedir 2 meses y modelo más caro):** Finanzas corta en 30 días; sumar deuda técnica acelera la cancelación.
• **Opción C (PM Senior ✅):** Cruzás Langfuse + 10 entrevistas (41% abandona por espera de 12s y 38% usa *Shadow AI*), embebés el bot en 1 flujo clave dentro de Jira con **Token Streaming** y bajás 70% la factura con **Model Routing + Batch** para renovar con ROI positivo.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Fricción de Flujo (Workflow Friction):** Obligar al usuario a salir de su herramienta diaria (Jira/TMS) para copiar y pegar textos en otro chat aparte.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Auditar Adopción' a la izquierda y probá con Anabela las 3 opciones plausibles a la derecha (A comunicación, B más ingeniería, C estrategia integral).

### 🔗 Puente de Conexión → Slide 14 (Entrevista Real 2: Regresión Silenciosa (Model Drift))
> **"Excelente. Resolviste una crisis de negocio y adopción. Vamos al segundo dilema en la Slide 14: qué pasa cuando un ahorro de costos rompe la calidad lingüística sin que fallen los tests tradicionales."**

---

## Slide 14: Entrevista Real 2: Regresión Silenciosa (Model Drift)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Dilema Model Drift · Rollback por Flag + Routing · Bonus Presión VP

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver una regresión semántica silenciosa sin perder el 60% de ahorro: Rollback selectivo por Flag + Evals por categoría + Routing híbrido + Bonus VP.
- **👆 Qué tocar en la Slide:** 1° '1. Simular Regresión' → 2° Compará A, B y C → 3° Abrí '⚡ Bonus Entrevista: Presión del VP'.
- **💬 La analogía ganadora:** Si una nueva flota de camiones económicos falla solo en caminos de montaña, no vendés toda la flota ni mandás acompañantes a pie: dejás los económicos en autopista y los potentes solo en montaña.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL DILEMA REAL EN LOCALIZACIÓN (Leé la pregunta):**
• *'Para ahorrar 60% migramos a un modelo económico. Todos los tests unitarios pasan en verde, pero Localización reporta errores de terminología y quejas de clientes. ¿Qué hacés?'*

**2️⃣ ANALIZAR LAS 3 OPCIONES (A, B y C) + BONUS VP:**
• **Opción A (Rollback total para siempre):** Apaga el incendio pero destruye el ahorro y no instala Evals.
• **Opción B (Revisión manual 100%):** Crea un cuello de botella humano que cuesta más que el modelo.
• **Opción C (PM Senior ✅):** Rollback por *Feature Flag* solo en flujos críticos, evaluación del *Golden Dataset* por categoría en Langfuse y **Model Routing selectivo** (Flash donde saca ≥ 0.90, Frontier en terminología legal) + alertas de Drift.
• Si queda 1 minuto, abrí **'⚡ Bonus Entrevista: Presión del VP'** para mostrar cómo frenar pedidos irreales con un *Discovery Spike* de 1 semana.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Routing Selectivo por Categoría:** Mantener modelos livianos en las tareas donde las Evals superan 0.90 y reservar el modelo Frontier solo donde la precisión terminológica es crítica.

### ⚡ Dinámica / Interacción en Pantalla
- Tocá '1. Simular Regresión' a la izquierda, debatan las Opciones A, B y C a la derecha, y cerrá abriendo la tarjeta '⚡ Bonus Entrevista: Presión del VP'.

### 🔗 Puente de Conexión → Slide 15 (¡Felicitaciones Anabela por Completar las 4 Sesiones!)
> **"Resolviste los dilemas con nivel de Product Manager Senior. Pasemos a la última slide, la Slide 15, para celebrar y dejar claro tu Plan de Acción de los próximos 30 días."**

---

## Slide 15: ¡Felicitaciones Anabela por Completar las 4 Sesiones!
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Graduación · Plan de Acción 30 Días · AI PM Kit

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Cerrar celebrando las 4 sesiones y entregando un Plan de Acción concreto de 4 semanas para entrevistas y posicionamiento profesional.
- **👆 Qué tocar en la Slide:** Repasá las 4 insignias, el bloque de 4 semanas del Plan de 30 Días y los 3 botones inferiores.
- **💬 La analogía ganadora:** Terminaste el entrenamiento con un mapa completo y un kit de herramientas listo para salir a la cancha desde mañana.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ¡FELICITACIONES POR COMPLETAR EL PROGRAMA! (Repaso S1–S4):**
• En 4 sesiones uniste tu experiencia en gestión de proyectos y localización con el mapa completo de IT/IA: ingeniería y Agile (S1), LLMs y RAG (S2), Agentes ReAct/MCP (S3) y hoy FinOps real, Build vs. Buy, Lanzamiento/UX, Evals avanzadas y dilemas de entrevista (S4).

**2️⃣ TU PLAN DE ACCIÓN DE 30 DÍAS (Señalá el bloque de 4 semanas):**
• **Semana 1:** Armá un Caso de Estudio de 1 página con la App Mock PRD (S2) y el cálculo ROI/TCO.
• **Semana 2:** Actualizá CV y LinkedIn en clave *AI Product / Localization Ops*.
• **Semana 3:** Repasá tu demo práctica de Antigravity + AWS MCP y tu pitch de 2 min.
• **Semana 4:** Practicá en voz alta los dilemas del Simulador S4.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **AI Product / Project Manager:** Líder capaz de conectar las necesidades de negocio y lenguaje con arquitectura técnica, presupuesto FinOps, experiencia de usuario y calidad medible.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 4 insignias completadas, recorré semana por semana el Plan de Acción de 30 Días y mostrale los botones al Simulador S4, Glosario S4 y Portal.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🏁 Cierre Final del Programa: Tenés todo el Portal disponible con las 4 presentaciones, los 4 glosarios y los simuladores para repasar antes de cualquier entrevista. ¡Muchísimos éxitos!"**

---

