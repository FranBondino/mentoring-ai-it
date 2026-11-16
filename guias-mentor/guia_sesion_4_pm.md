# 🎙️ Sesión 4: Finanzas de la IA, Evaluación (Evals) & Simulación de Entrevistas

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Cerrar el programa integrando la visión financiera y de calidad de producto: estructura de costos de inferencia (Input vs. Output tokens), ahorro con Prompt Caching, cálculo de ROI de negocio, auditoría científica de calidad mediante AI Evals y trazas en Langfuse, y entrenamiento práctico con 3 casos interactivos de entrevista IT/IA.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. FinOps Avanzado: Model Routing, Batch API & ROI (Slides 1 a 4 y 6):** Sin repetir lo básico de tokens, enseñamos dos armas nuevas de ahorro: **Model Routing** (derivar el 80% de consultas fáciles a un modelo liviano como *Flash/Haiku* ahorrando ~77%) y **Batch API** (procesar paquetes grandes de forma asíncrona a **mitad de precio -50%**), cerrando con la **Calculadora de ROI**.
- **2. Lanzamiento en Producción y Guardrails PII (Slides 5 y 7):** Cómo se lanza un agente al mundo real sin quemarse: **1) Shadow Mode (Modo Sombra)** → **2) Canary Release (5% a 100%)** → **3) Data Flywheel (👍/👎 al Golden Dataset)**. Y en seguridad, cómo funciona la doble aduana de **Input/Output Guardrails** ocultando nombres y montos bajo NDA en vivo.
- **3. Auditoría de Calidad (AI Evals) y Langfuse (Slides 8 a 10):** Cómo evaluar científicamente al bot con un **Golden Dataset** y un **LLM-as-a-Judge** que califica la **Tríada RAG** (*Fidelidad al manual*, *Precisión de Contexto* y *Relevancia*). Y cómo usar **Langfuse** para radiografiar tiempos (`ms`) y costos (`USD`) paso por paso.
- **4. Simulacro de Entrevistas IT / IA (Slides 11 a 15):** La fórmula de 3 pasos (*1. Diagnóstico en Langfuse + 2. Acción en el Backlog + 3. Impacto de Negocio*) practicada en vivo en los 3 simuladores de entrevista (Presupuesto 10x, Latencia de 12s y Fuga de Datos).

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 18 min** | Finanzas de la IA & Calculadora ROI | Slides 1 a 6 | Costos unitarios de GPU por token (Input vs Output), ahorro del 90% con Prompt Caching, balance financiero RAG vs Fine-Tuning y práctica con la Calculadora de ROI. |
| **18 - 38 min** | Seguridad, AI Evals & Langfuse | Slides 7 a 10 | Capas de blindaje contra Data Leakage, métricas de evaluación semántica (Faithfulness, Relevance), simulador de Rúbricas Evals e inspección de trazas en Langfuse. |
| **38 - 60 min** | Simulacro de Entrevistas & Graduación | Slides 11 a 15 | Estrategia frente a Hiring Managers y resolución interactiva de 3 crisis en vivo (Presupuesto, Latencia y Fuga PII), más cierre del programa. |

---

## Slide 1: Portada: Finanzas de la IA, Evals & Entrevistas (Sesión Final)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Sesión 4 · Final · AI Economics · Evals & Langfuse · Entrevistas IT

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Presentar la última sesión del programa: pasamos de la arquitectura técnica (RAG y Agentes) al liderazgo ejecutivo (Finanzas/ROI, Calidad con Evals/Langfuse y Entrevistas).
- **👆 Qué tocar en la Slide:** Mostrá la portada de la Sesión 4 y repasá el camino completo S1 → S2 → S3 → S4.
- **💬 La analogía ganadora:** En las Sesiones 1 a 3 aprendiste cómo se construye y maneja el avión; hoy en la Sesión 4 aprendés a leer el tablero de combustible (costos), la caja negra (Langfuse) y a aprobar el examen de comandante (entrevistas).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ BIENVENIDA A LA SESIÓN FINAL (El recorrido completo):**
• En las **Sesiones 1 a 3** construiste toda tu base técnica: desarrollo de software, APIs y Agile (S1), LLMs y arquitectura RAG (S2), y Agentes Autónomos con ReAct, MCP y guardrails (S3).

**2️⃣ EL OBJETIVO DE HOY EN LA SESIÓN 4:**
• Hoy le ponemos el broche ejecutivo a tu perfil: vamos a dominar **las finanzas de la IA (AI Economics)**, cómo **auditar la calidad de un bot en producción (AI Evals y Langfuse)**, y vamos a entrenar **3 casos reales de entrevistas de PM**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **AI Economics (Economía de la IA):** Cómo calcular cuánto cuesta operar un producto de IA por mes y cuánto dinero le ahorra a la empresa (ROI).
- **AI Evals & Observabilidad:** Las pruebas automáticas de calidad y el tablero de monitoreo (Langfuse) para vigilar que el bot no mienta ni gaste de más.

### ⚡ Dinámica / Interacción en Pantalla
- Presentá la portada celebrando el recorrido por las 4 sesiones y el enfoque ejecutivo de esta clase de cierre.

### 🔗 Puente de Conexión → Slide 2 (Agenda Ejecutiva de la Sesión 4 (100% Temas Nuevos))
> **"Miremos rápidamente en la Slide 2 los tres bloques prácticos que vamos a recorrer hoy."**

---

## Slide 2: Agenda Ejecutiva de la Sesión 4 (100% Temas Nuevos)
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. FinOps & Rollout · 2. Guardrails, Evals & Langfuse · 3. Simulacro de Entrevistas

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mostrar los 3 bloques 100% nuevos de hoy: 1) FinOps Avanzado (Model Routing, Batch API -50% y ROI), 2) Lanzamiento en Shadow Mode, Guardrails PII, Evals y Langfuse, y 3) Simulacro de 3 Entrevistas.
- **👆 Qué tocar en la Slide:** Señalá las 3 tarjetas de colores en pantalla: Ámbar (FinOps & Lanzamiento), Azul (Guardrails, Evals & Langfuse) y Violeta (Entrevistas IT).
- **💬 La analogía ganadora:** En las Sesiones 1 a 3 construimos el auto de carrera; hoy aprendemos la estrategia de boxes para gastar menos combustible (FinOps), las pruebas de choque (Evals) y cómo manejar en lluvia (Entrevistas).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ NUESTRA HOJA DE RUTA DE HOY EN 3 BLOQUES NUEVOS (Señalá las 3 tarjetas):**
• **1. Estrategia FinOps y Lanzamiento (Tarjeta Ámbar):** Cómo reducir un 80% el costo operativo usando un **Model Router** (combinar modelos livianos con modelos potentes), cómo pagar la mitad con **Batch API (-50%)**, cómo lanzar en **Shadow Mode** y nuestra **Calculadora de ROI**.
• **2. Guardrails Activos, AI Evals y Langfuse (Tarjeta Azul):** Cómo ocultar datos confidenciales en vivo antes de que salgan a internet, cómo tomarle examen automático al bot (**Tríada RAG**) y cómo ver su radiografía en **Langfuse**.
• **3. Simulacro de Entrevistas IT (Tarjeta Violeta):** Cómo responder preguntas de crisis en entrevistas eligiendo entre opciones reales.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **FinOps para IA:** La disciplina de optimizar costos en la nube para que tu producto de IA sea rentable sin perder calidad.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 3 tarjetas de la agenda: 1. AI Economics (Ámbar), 2. Gobernanza & Calidad (Azul) y 3. Simulación de Rol (Violeta).

### 🔗 Puente de Conexión → Slide 3 (FinOps 1: Model Routing (Enrutamiento Inteligente de Modelos))
> **"Arranquemos por la estrategia financiera número uno que usan todas las empresas en 2026 para no fundirse pagando tokens: el Model Routing. Pasemos a la Slide 3."**

---

## Slide 3: FinOps 1: Model Routing (Enrutamiento Inteligente de Modelos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Model Routing · Small vs Frontier Models · Simulador de Ahorro (-77%)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Nunca usamos el modelo más grande y caro para todo: ponemos un 'semáforo' (Model Router) que manda el 80% de las consultas fáciles a un modelo rápido y económico (Flash/Haiku) y solo el 20% difícil al modelo grande.
- **👆 Qué tocar en la Slide:** 1° Explicá las 2 rutas a la izquierda (Verde = Liviano, Violeta = Experto) → 2° Mové el deslizador de la derecha para mostrar cómo baja la factura de $1.200 a $276 USD/mes.
- **💬 La analogía ganadora:** En una clínica médica no te atiende un neurocirujano para tomarte la presión: la guardia general resuelve el 80% de las consultas simples rápido y barato, y solo deriva al especialista los casos complejos.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL ERROR DE USAR UN SOLO MODELO PARA TODO (Tarjeta izquierda):**
• En las sesiones anteriores vimos que los proveedores cobran por token. Ahora bien: si usás el modelo más potente del mercado (*Claude Opus* o *GPT-4o*) para responder preguntas simples como *'¿En qué carpeta está el glosario?'*, estás pagando **20 veces más caro** y esperando el triple de tiempo sin necesidad.
• Por eso como PM diseñás un **Model Router (Enrutador de Modelos)** con dos carriles:
  • **🟢 Ruta Rápida (80% del tráfico):** Va a un modelo liviano (*Gemini Flash*, *Claude Haiku*, *GPT-4o-mini* o *AWS Nova Micro*), que cuesta centavos y responde en `0.3 segundos`.
  • **🟣 Ruta Experta (20% del tráfico):** Solo cuando el pedido requiere cruzar varios sistemas o analizar un contrato difícil, salta al modelo grande (*Frontier*).

**2️⃣ DEMO EN EL SIMULADOR DE LA DERECHA (Mové el deslizador de %):**
• Mirá los números: si mandás el 100% de las consultas al modelo grande, gastás **$1.200 USD al mes**.
• Cuando derivás el **80% de las consultas simples al modelo liviano**, la factura cae a **$276 USD al mes** (**77% de ahorro**) y encima el usuario siente que el bot vuela.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing (Enrutamiento de Modelos):** Un clasificador en la puerta que decide automáticamente si una consulta es fácil (y la manda a un modelo económico) o difícil (y la manda al modelo más potente).
- **Modelos Small/Flash vs. Modelos Frontier:** Los modelos Small/Flash (como Gemini Flash, Claude Haiku o GPT-4o-mini) cuestan hasta 20 veces menos y responden en 0.3s; los Frontier (Opus, Sonnet, GPT-4o) son los más potentes para razonamiento complejo.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá la regla métrica a la derecha ('1k Tokens ≈ 750 Palabras') y el dato clave de que el español consume entre 20% y 30% más de tokens.

### 🔗 Puente de Conexión → Slide 4 (FinOps 2: Batch API (-50% Descuento) & Costos Ocultos)
> **"Además del Model Routing para las consultas en vivo, ¿qué pasa cuando tenés que procesar 5.000 documentos o módulos de localización de golpe? Hay un segundo truco financiero clave en la Slide 4."**

---

## Slide 4: FinOps 2: Batch API (-50% Descuento) & Costos Ocultos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Batch API (-50%) · Síncrono vs Asíncrono · Costos Ocultos (TCO)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Si una tarea masiva (ej. pre-traducir o auditar 2.000 archivos) no necesita respuesta en 1 segundo y puede esperar unas horas, usamos la Batch API y todos los proveedores nos cobran exactamente la mitad (-50%).
- **👆 Qué tocar en la Slide:** 1° Compará a la izquierda Tiempo Real (100%) vs Batch API (50% Off) → 2° Repasá a la derecha los 4 costos ocultos que un PM siempre incluye en el presupuesto.
- **💬 La analogía ganadora:** Es la diferencia entre mandar un paquete por moto urgente en el acto (tarifa completa) vs. mandarlo en el camión de reparto nocturno programado (mitad de precio).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ TIEMPO REAL VS. BATCH API AL 50% DE PRECIO (Tarjeta izquierda):**
• En la Sesión 2 y 3 ya vimos cómo ahorrar en el chat en vivo con *Prompt Caching*. Pero en proyectos de localización o análisis documental hay un secreto financiero enorme llamado **Batch API (Procesamiento por Lotes)**:
  • **⚡ Modo Síncrono (Tiempo Real):** Cuando una persona está chateando en vivo y necesita respuesta en 2 segundos, pagás tarifa normal.
  • **🌙 Modo Batch / Asíncrono (50% de Descuento):** Cuando entra un paquete de 3.000 textos para pre-traducir o auditar contra el glosario para mañana a la mañana, lo mandás por **Batch API** (en OpenAI, Anthropic o **AWS Bedrock**) y te cobran **exactamente la mitad (50% off)**.

**2️⃣ LOS 4 COSTOS OCULTOS QUE TE DIFERENCIAN EN UNA ENTREVISTA (Tarjeta derecha):**
• Si te preguntan qué entra en el presupuesto de un proyecto de IA, nombrás estos 4 puntos que los juniors siempre se olvidan: **1) Las vueltas internas del agente ReAct**, **2) El alquiler mensual de la Base Vectorial (Pinecone)**, **3) Los tokens que consume el Juez Auditor (Evals)** y **4) El +25% de tokens que consume el español o portugués frente al inglés**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Batch API (Inferencia por Lotes Asíncrona):** Modalidad de OpenAI, Anthropic y AWS Bedrock donde enviás miles de documentos juntos en un archivo; te devuelven todo procesado en unas horas cobrándote exactamente el 50% del precio.
- **Multiplicador Agéntico:** Recordar en el presupuesto que si un agente da 4 vueltas en el bucle ReAct para resolver una tarea, realiza 4 llamadas al modelo y no 1 sola.

### ⚡ Dinámica / Interacción en Pantalla
- Compará las barras de costo y estructura del prompt estático arriba vs. variable abajo en la tarjeta derecha.

### 🔗 Puente de Conexión → Slide 5 (Lanzamiento Seguro en Producción: Shadow Mode & Canary Rollout)
> **"Ya sabemos cómo optimizar al máximo el presupuesto. Ahora, una vez que el agente está construido y presupuestado, ¿cómo lo lanzamos a los usuarios reales sin riesgo de que haga lío el primer día? Pasemos a la Slide 5."**

---

## Slide 5: Lanzamiento Seguro en Producción: Shadow Mode & Canary Rollout
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Shadow Mode · Canary Release (5% -> 100%) · Data Flywheel (Feedback)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Nunca lanzamos un bot de IA al 100% de los clientes el Día 1: primero corre en 'Modo Sombra' (Shadow Mode) en secreto junto al equipo humano, luego sale al 5% (Canary) y aprende de cada corrección (Data Flywheel).
- **👆 Qué tocar en la Slide:** Recorré de izquierda a derecha las 3 fases de lanzamiento: Fase 1 (Shadow Mode), Fase 2 (Canary Release) y Fase 3 (Data Flywheel).
- **💬 La analogía ganadora:** Igual que cuando entrenás a un coordinador nuevo: las primeras dos semanas escucha las llamadas al lado tuyo y anota qué haría sin hablar con el cliente (Shadow Mode); después atiende solo los casos fáciles (Canary) hasta largarse solo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ FASE 1: SHADOW MODE / MODO SOMBRA (Tarjeta azul izquierda):**
• Si en una entrevista te preguntan *'¿Cómo lanzarías este agente a producción?'*, jamás digas *'lo prendo el lunes para todos los clientes'*.
• El estándar profesional arranca con **2 semanas en Shadow Mode (Modo Sombra)**: el agente lee los tickets reales en segundo plano y redacta qué haría, pero **su respuesta queda oculta para el cliente**. Así medís si coincide con las decisiones de tus especialistas humanos con **riesgo cero**.

**2️⃣ FASE 2: CANARY RELEASE 5% → 25% → 100% (Tarjeta ámbar central):**
• Una vez que en Modo Sombra supera el 90% de acierto, hacés un **Canary Release**: lo encendés en vivo solo para el **5% de las consultas** (o para un único equipo interno) mientras vigilás costos y tiempos en Langfuse.

**3️⃣ FASE 3: DATA FLYWHEEL / RUEDA DE FEEDBACK (Tarjeta verde derecha):**
• Le ponés botones de **👍 / 👎** a cada respuesta. Cada vez que un analista corrige al bot, ese caso va directo a nuestro **Golden Dataset** para que nunca repita el mismo error.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Shadow Mode (Modo Sombra):** Poner al agente a procesar los pedidos reales en silencio detrás de escena; su respuesta no le llega al cliente, sino que se guarda para compararla contra lo que hizo el empleado humano.
- **Canary Release (Despliegue Canario):** Habilitar la funcionalidad nueva solo para un grupo chiquito (ej. el 5% de los usuarios) y, si todo sale bien en las métricas, ir subiendo a 25%, 50% y 100%.
- **Data Flywheel (Rueda de Mejora Continua):** El circuito donde cada corrección humana (botón 👎) alimenta automáticamente la base de pruebas (Golden Dataset) para que el bot sea más inteligente cada semana.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las filas de la tabla comparativa contrastando Costo Inicial, Costo de Actualización, Control de Alucinaciones y Caso de Uso Ideal.

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Calculadora Interactiva de ROI (Automatización con IA))
> **"Con toda esta estrategia financiera y de lanzamiento clara, abramos en la Slide 6 nuestra Calculadora Interactiva de ROI para ponerle números reales en dólares."**

---

## Slide 6: Ejercicio 1: Calculadora Interactiva de ROI (Automatización con IA)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Calculadora en Vivo · ROI Mensual · Hora-Hombre vs Costo API

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar en vivo la Calculadora de ROI para demostrar cómo una tarea manual de $12.500 USD/mes baja a menos de $100 USD/mes de API combinada con supervisión humana.
- **👆 Qué tocar en la Slide:** Mové los 3 sliders de la izquierda ('Documentos/mes', 'Minutos por documento', 'Costo Hora USD') y mostrá cómo cambian los números grandes a la derecha.
- **💬 La analogía ganadora:** Esta calculadora es tu arma secreta para reuniones con directores financieros: transforma 'queremos usar IA porque es moderna' en 'este proyecto nos ahorra $10.000 dólares por mes'.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ DEMO EN VIVO: CALCULADORA DE ROI (Mové los 3 deslizadores de la izquierda):**
• Imaginá que querés justificar ante Finanzas automatizar la primera revisión de documentos de localización o clasificación de tickets:
  • **Slider 1 (Volumen):** Poné **5.000 documentos/tickets al mes**.
  • **Slider 2 (Tiempo humano):** Poné **15 minutos** por documento.
  • **Slider 3 (Costo Hora):** Poné **$20 USD / hora**.

**2️⃣ MIRÁ EL IMPACTO FINANCIERO A LA DERECHA:**
• Hacer el 100% del trabajo a mano cuesta **$25.000 USD por mes** (1.250 horas humanas = casi 8 personas a tiempo completo).
• En cambio, la factura de API de IA con **Prompt Caching** es de apenas **$137.50 USD al mes** ($0.0275 por documento). Incluso manteniendo a un especialista humano supervisando el 20% del tiempo (*Human-in-the-Loop*), generás un **ahorro neto de casi $20.000 USD por mes**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Costo Hora-Hombre vs. Costo de Inferencia:** Comparar cuánto cuesta el tiempo de un equipo haciendo trabajo repetitivo manual frente a los centavos que cobra la API por hacer el pre-procesamiento.

### ⚡ Dinámica / Interacción en Pantalla
- Mové en vivo los 3 sliders ('Documentos / Tickets Procesados al Mes', 'Minutos Humanos por Documento', 'Costo Hora Profesional USD') para ver cómo se actualizan al instante el Costo Humano, el Costo de API de IA y el Ahorro Neto Mensual.

### 🔗 Puente de Conexión → Slide 7 (Guardrails Activos: Aduana de Entrada y Salida (PII & Topics))
> **"Cuando presentás un ahorro así de grande, el directorio te aprueba el presupuesto, pero inmediatamente el área de Legales y Seguridad te hace la pregunta clave: '¿Cómo protegemos los datos sensibles?'. Vamos a la Slide 7."**

---

## Slide 7: Guardrails Activos: Aduana de Entrada y Salida (PII & Topics)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Input/Output Guardrails · PII Redaction en Vivo · AWS Bedrock Guardrails

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Para que nunca se filtren nombres de clientes ni tarifas bajo NDA, ponemos un filtro automático en la puerta (Input Guardrail) que reemplaza los datos privados por etiquetas genéricas antes de que viajen a la nube.
- **👆 Qué tocar en la Slide:** 1° Explicá las 2 aduanas a la izquierda (Entrada y Salida) → 2° A la derecha tocá el botón '⚠️ Simular Sin Filtro PII / 🔒 Activar Guardrail PII' para ver cómo se ocultan 'María Gómez' y '$85.000 USD'.
- **💬 La analogía ganadora:** Como cuando en un juicio o documento público tachan con marcador negro los nombres propios y montos secretos antes de entregarle la copia a un externo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA DOBLE ADUANA AUTOMÁTICA: INPUT Y OUTPUT GUARDRAILS (Tarjeta izquierda):**
• En la Sesión 2 vimos que firmamos contratos *Zero-Data Retention*. Pero en empresas grandes (bancos, salud, localización bajo NDA) Seguridad Informatica te pide un paso más: **que el nombre del cliente ni siquiera viaje por internet** (en tu curso de AWS esto se llama **Amazon Bedrock Guardrails**).
• Funciona con dos aduanas:
  • **1. Aduana de Entrada (Input Guardrail):** Antes de salir a la nube, detecta nombres, mails y cifras secretas y los reemplaza por etiquetas genéricas.
  • **2. Aduana de Salida (Output Guardrail):** Antes de mostrar la respuesta, verifica que el bot no haya nombrado a un competidor ni prometido algo ilegal.

**2️⃣ DEMO EN VIVO DE SANITIZACIÓN PII (Tocá el botón arriba a la derecha):**
• Mirá lo que escribió el empleado arriba: *'Resumí el reclamo de María Gómez (maria@bancopatagonia.com) por el contrato de $85.000 USD'*.
• Mirá abajo lo que realmente viaja a la IA con el Guardrail activo: **`[PERSONA_01]`**, **`[EMAIL_OCULTO]`** y **`[MONTO_CONFIDENCIAL]`**. La IA resume el reclamo perfecto sin haberse enterado jamás de quién era el cliente ni cuánto pagó.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Input Guardrail (Aduana de Entrada):** El filtro de seguridad que revisa lo que escribió el usuario ANTES de mandarlo a la IA: oculta datos personales (PII) y frena intentos de trampa (Jailbreak).
- **Output Guardrail (Aduana de Salida):** El filtro que revisa lo que contestó la IA ANTES de mostrárselo al usuario: verifica que no mencione competidores ni incumpla reglas de la empresa.
- **PII Redaction / Masking (Enmascaramiento):** Cambiar automáticamente datos reales ('María Gómez', '$85.000') por códigos ('[PERSONA_01]', '[MONTO_CONFIDENCIAL]') para que la IA nunca vea el dato real.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las capas de protección: 1) Sanitización de PII (Datos Personales) antes de enviar al LLM y 2) Control de acceso por rol en la Base Vectorial.

### 🔗 Puente de Conexión → Slide 8 (Suite de Evaluaciones (AI Evals): La Tríada de Calidad RAG)
> **"Ya blindamos las finanzas y la privacidad. Ahora entremos al corazón de la calidad en la Sesión 4: ¿cómo evaluamos científicamente si el bot dice la verdad usando AI Evals? Vamos a la Slide 8."**

---

## Slide 8: Suite de Evaluaciones (AI Evals): La Tríada de Calidad RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Faithfulness (Fidelidad) · Answer Relevance · Context Precision · LLM-as-a-Judge

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar las 3 notas con las que evaluamos científicamente a un chatbot RAG (Fidelidad al manual, Relevancia de la respuesta y Precisión de búsqueda) usando otra IA como juez.
- **👆 Qué tocar en la Slide:** Señalá las 3 tarjetas de la Tríada RAG: 1. Faithfulness (Fidelidad), 2. Answer Relevance (Relevancia) y 3. Context Precision (Recuperación).
- **💬 La analogía ganadora:** Igual que cuando corregís un examen a libro abierto: 1) ¿No inventó nada fuera del libro? (Fidelidad), 2) ¿Respondió lo que le preguntaron? (Relevancia), y 3) ¿Abrió el libro en la página correcta? (Context Precision).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CÓMO MEDIMOS LA CALIDAD SIN REVISAR A OJO (Concepto de AI Evals):**
• Como no podemos leer a mano 10.000 conversaciones por día, usamos un modelo auditor (**LLM-as-a-Judge**) que califica cada respuesta del 0 al 100% en tres métricas llamadas la **Tríada de Calidad RAG**.

**2️⃣ LAS 3 NOTAS DE LA TRÍADA RAG (Señalá las 3 tarjetas):**
• **1. Faithfulness (Fidelidad al Manual):** ¿Todo lo que dijo el bot sale estrictamente del documento oficial recuperado, o inventó algo de su cosecha?
• **2. Answer Relevance (Relevancia de Respuesta):** ¿Fue al grano y respondió exactamente lo que preguntó el usuario?
• **3. Context Precision / Recall (Precisión del Buscador):** ¿La Base Vectorial trajo el párrafo correcto del manual? Si esta nota da baja, sabés que tenés que ajustar el *Chunking* o los *Embeddings*.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **AI Evals (Evaluaciones de IA):** Batería de pruebas automáticas para medir con puntaje numérico del 0 al 100% la calidad de un chatbot antes de lanzarlo.
- **LLM-as-a-Judge (IA como Juez):** Usar un modelo auditor estricto para que corrija las respuestas de nuestro chatbot comparándolas contra el manual oficial.
- **Faithfulness (Fidelidad):** Mide que el bot no haya inventado absolutamente ningún dato que no figure en los fragmentos recuperados del documento.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las 3 tarjetas de métricas clave: 1. Faithfulness / Fidelidad al Contexto, 2. Answer Relevance / Relevancia de Respuesta y 3. Context Recall / Recuperación.

### 🔗 Puente de Conexión → Slide 9 (Ejercicio 2: Simulador de Rúbricas Evals en Acción)
> **"Practiquemos ser nosotros los auditores de calidad ahora mismo en un caso concreto. Pasemos a la Slide 9: Ejercicio de Rúbricas Evals en Acción."**

---

## Slide 9: Ejercicio 2: Simulador de Rúbricas Evals en Acción
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Auditoría Práctica · Detección de Alucinación · Umbral de Aprobación

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Probar en vivo cómo la métrica de Fidelidad (Faithfulness) detecta que el bot inventó al final de su respuesta que el módulo Checkout v4 'se aprobará mañana sin pruebas adicionales'.
- **👆 Qué tocar en la Slide:** Leé el fragmento oficial vs. la frase roja alucinada a la izquierda, y mové el deslizador '1. Fidelidad al Manual' a 0.2 (o tocá '🔍 Calificar Alucinación').
- **💬 La analogía ganadora:** Es el control de calidad en la fábrica: aunque la primera mitad de la respuesta sea correcta, si al final inventa una fecha de lanzamiento prohibida por QA, el inspector frena la salida.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CASO DE AUDITORÍA EN VIVO (Leé la columna izquierda con Anabela):**
• **Pregunta:** *'¿Cuál es el estado de los módulos Pagos v3 y Checkout v4 para el lanzamiento en ES y PT?'*.
• **Lo que dice el Manual Oficial (Ground Truth):** *Pagos v3* está activo, pero *Checkout v4* está **bloqueado en revisión de QA lingüístico**.
• **Lo que respondió el Bot (Mirá el texto subrayado en rojo):** Dijo bien la primera parte, pero al final inventó de su cosecha: *'Además, te confirmo que mañana al mediodía se aprobará automáticamente sin necesitar más pruebas de QA'*. ¡Una alucinación peligrosa!

**2️⃣ DEMO CON LOS 3 DESLIZADORES DE LA TRÍADA RAG (Columna derecha):**
• Fijate que **Precisión de Contexto (`1.0`)** y **Relevancia (`0.9`)** están bien porque trajo el párrafo correcto y habló del tema, pero en **Fidelidad al Manual** le ponemos **`0.2`** (porque inventó un dato fuera del documento).
• Como la Fidelidad cayó por debajo de `0.80`, el sistema marca **RECHAZADO** y bloquea automáticamente ese prompt.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Falso Positivo Amable (Alucinación Comercial):** El error más peligroso de los chatbots: cuando por querer sonar serviciales le prometen al cliente descuentos o coberturas que no existen.

### ⚡ Dinámica / Interacción en Pantalla
- Leé con Anabela el Contexto Oficial vs. la Respuesta Generada por el Bot a la izquierda, y mové los 3 sliders de calificación a la derecha para ver cómo cambia el veredicto ('APROBADO' vs. 'RECHAZADO POR ALUCINACIÓN').

### 🔗 Puente de Conexión → Slide 10 (Observabilidad & Tracing en Producción (Langfuse))
> **"Cuando detectamos un fallo así o cuando una consulta tarda demasiado en producción, ¿en qué pantalla mira un PM y su equipo técnico la 'radiografía' de lo que pasó adentro del bot? Pasemos a la Slide 10: Langfuse."**

---

## Slide 10: Observabilidad & Tracing en Producción (Langfuse)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Observabilidad (LLMOps) · Langfuse · Traces & Spans · Auditoría de Costo y Latencia

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mostrar cómo se usa Langfuse en la vida real: el tablero donde hacés clic en cualquier mensaje y ves cuánto tardó y cuánto costó cada paso interno del bot.
- **👆 Qué tocar en la Slide:** Hacé clic en los 3 renglones del árbol de la izquierda ('1. VectorDB Retrieval', '2. Security Guardrail', '3. LLM Generation') para ver cómo cambian los tiempos y costos a la derecha.
- **💬 La analogía ganadora:** Langfuse es la 'caja negra' y el ticket detallado del supermercado todo en uno: te muestra segundo por segundo qué hizo el bot por dentro y cuántos centavos costó cada renglón.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ ES LANGFUSE (El tablero de control del PM de IA):**
• Cuando tu chatbot o agente ya está funcionando en vivo, **Langfuse** es la pantalla donde ves la 'radiografía' (**Traza / Trace**) de cada mensaje que envían los usuarios.

**2️⃣ DEMO INTERACTIVA EN EL ÁRBOL DE TRAZAS (Hacé clic en los 3 renglones de la izquierda):**
• **Clic en 1. VectorDB Retrieval:** Ves que buscar en Pinecone tardó `180 ms` y trajo 3 fragmentos con similitud `0.89`.
• **Clic en 2. Security Guardrail:** Ves que el filtro de seguridad tardó `90 ms` y ocultó los datos privados.
• **Clic en 3. LLM Generation:** Ves que GPT-4o tardó `1.45 segundos` y esa respuesta exacta costó **`$0.0042 USD`**. Si mañana algo falla o se vuelve lento, abrís Langfuse y en 10 segundos sabés en qué paso estuvo el problema.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Langfuse / Observabilidad LLMOps:** La herramienta visual donde los Product Managers e ingenieros ven el historial interno de cada respuesta del bot, sus tiempos y sus costos.
- **Trace (Traza) y Span (Paso):** La 'Traza' es el recorrido completo de una pregunta de punta a punta; cada 'Span' es uno de los pasos individuales (ej. buscar en la base vectorial o llamar al LLM).

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic sobre cada una de las 3 filas del árbol de ejecución ('1. VectorDB Retrieval', '2. Security Guardrail Check', '3. LLM Generation GPT-4o') para desplegar los detalles técnicos ocultos (tiempos en ms y costos en USD).

### 🔗 Puente de Conexión → Slide 11 (Preparación de Entrevistas para Roles de PM IT / IA)
> **"¡Impresionante! Con esto ya tenés todas las herramientas estratégicas, técnicas y financieras. Ahora dediquemos el último tramo de la sesión a prepararte para brillar en entrevistas reales. Vamos a la Slide 11."**

---

## Slide 11: Preparación de Entrevistas para Roles de PM IT / IA
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Estructura de Respuesta · Mindset de PM Técnico · Negocio + Arquitectura

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Darle la estructura mental de 3 pasos para lucirse en cualquier entrevista de PM: 1) Nombrar la pieza técnica exacta, 2) Decir qué priorizar en el backlog, y 3) Explicar el impacto en plata o seguridad.
- **👆 Qué tocar en la Slide:** Señalá los 3 escalones de la fórmula ganadora en pantalla.
- **💬 La analogía ganadora:** En una entrevista de PM no te evalúan como mecánico que desarma el motor con llave inglesa, sino como jefe de equipo de Fórmula 1 que sabe leer la telemetría y pedir el cambio exacto en boxes.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ QUÉ BUSCAN EN UNA ENTREVISTA DE PM IT / IA:**
• En una entrevista para liderar proyectos de tecnología o IA, nadie te va a pedir que escribas código en Python. Lo que evalúan es tu **criterio para diagnosticar problemas y proteger el negocio**.

**2️⃣ LA FÓRMULA GANADORA DE 3 PASOS (Señalá los 3 escalones):**
• **Paso 1 — Diagnóstico Técnico con Nombre Propio:** Identificás la pieza exacta (*'eso es un Loop Infinito en ReAct'* o *'eso es falta de Chunk Overlap'*).
• **Paso 2 — Acción Concreta en el Backlog:** Qué le pedís priorizar a los desarrolladores en el próximo Sprint.
• **Paso 3 — Impacto en el Negocio:** Cómo esa mejora cuida el presupuesto, la velocidad o la seguridad del cliente.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Trade-off de Producto:** El equilibrio entre tres variables que compiten entre sí: Calidad, Velocidad (Latencia) y Costo.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá la fórmula ganadora de 3 pasos para responder preguntas técnicas en entrevistas sin ser programadora.

### 🔗 Puente de Conexión → Slide 12 (Simulación Caso 1: Desvío Inesperado de Presupuesto de API)
> **"Entrenemos esta fórmula ahora mismo con tres simuladores interactivos de entrevistas basados en casos reales. Pasemos a la Slide 12: Caso 1."**

---

## Slide 12: Simulación Caso 1: Desvío Inesperado de Presupuesto de API
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Roleplay Caso 1 · Loop Infinito + Prompt Caching · Model Routing

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver en vivo el Caso 1 de entrevista: la factura de IA vino 10 veces más cara → auditamos en Langfuse, cortamos loops con Max Iterations = 5, activamos Prompt Caching y usamos modelos más chicos para tareas simples.
- **👆 Qué tocar en la Slide:** 1° Izquierda: tocá '1. Simular Desvío de Costo' → 2° Derecha: probá la Opción A (incorrecta) y luego la Opción B (Estratégica PM) para estabilizar la factura.
- **💬 La analogía ganadora:** Si viene una factura de luz gigante en la empresa, no cerrás la oficina: mirás qué máquina quedó encendida toda la noche (Langfuse + Max Iterations) y ponés lámparas de bajo consumo donde no hace falta un reflector (Model Routing).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CRISIS 1 DE ENTREVISTA: LA FACTURA VINO 10 VECES MÁS CARA (Leé la pregunta):**
• El entrevistador te dice: *'Lanzamos nuestro agente hace una semana y la factura de OpenAI vino 10 veces más cara de lo calculado. ¿Qué hacés como PM?'*.

**2️⃣ DEMO EN EL SIMULADOR (Tocá la opción incorrecta y luego la Respuesta Estratégica de PM):**
• En vez de entrar en pánico o apagar el producto, respondés con 3 acciones técnicas concretas:
  1. **Auditar en Langfuse + Max Iterations = 5:** Revisar si hubo agentes trabados en *Loops Infinitos* reintentando llamadas fallidas y poner un tope de 5 intentos.
  2. **Activar Prompt Caching:** Para ahorrar hasta un 80%-90% en las instrucciones repetidas del sistema.
  3. **Model Routing (Enrutamiento de Modelos):** Usar un modelo liviano y económico (como *GPT-4o-mini* o *Claude Haiku*) para el 80% de las consultas simples, y dejar el modelo grande solo para los pasos complejos.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Model Routing (Enrutamiento de Modelos):** Usar un modelo rápido y súper económico (como GPT-4o-mini o Claude Haiku) para el 80% de las consultas fáciles, y llamar al modelo grande solo para los casos difíciles.

### ⚡ Dinámica / Interacción en Pantalla
- Leé la pregunta del entrevistador en el chat y hacé clic primero en la opción incorrecta ('Pedir más presupuesto / bajar usuarios') y luego en la opción ganadora ('Auditar en Langfuse + Max Iterations + Prompt Caching').

### 🔗 Puente de Conexión → Slide 13 (Simulación Caso 2: Latencia Crítica en Producción (12 Segundos))
> **"¡Excelente! Resolvimos la crisis financiera. Vamos a la Slide 13 para enfrentar el segundo desafío clásico de entrevista: una crisis de lentitud en vivo."**

---

## Slide 13: Simulación Caso 2: Latencia Crítica en Producción (12 Segundos)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Roleplay Caso 2 · Streaming UI · Parallel Tool Calling · KV Cache

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver en vivo el Caso 2 de entrevista: el bot tarda 12 segundos con la pantalla en blanco → activamos Streaming de palabras, llamamos a las APIs en paralelo y usamos KV Cache.
- **👆 Qué tocar en la Slide:** 1° Izquierda: tocá '1. Simular Espera de 12.0s' → 2° Derecha: probá la Opción A y luego la Opción B (Streaming + Parallel Tool Calling + KV Cache) para bajar a 0.9s.
- **💬 La analogía ganadora:** En un restaurante, si tardan 12 minutos en traerte todo junto sin decirte nada te vas; pero si al segundo 1 te traen la panera (Streaming) y en la cocina preparan la entrada y el plato al mismo tiempo (Parallel Tool Calling), la experiencia es excelente.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CRISIS 2 DE ENTREVISTA: EL BOT TARDA 12 SEGUNDOS EN RESPONDER (Leé la pregunta):**
• El entrevistador te plantea: *'Los usuarios abandonan el chat porque queda 12 segundos con la pantalla en blanco mientras consulta 3 APIs distintas. ¿Cómo lo resolvés?'*.

**2️⃣ DEMO EN EL SIMULADOR (Hacé clic en la solución arquitectónica):**
• Atacás tanto la espera percibida como la velocidad real en 3 pasos:
  1. **Token Streaming en la interfaz:** Que las palabras vayan apareciendo sílaba por sílaba en vivo en menos de 1 segundo en vez de esperar al párrafo entero.
  2. **Parallel Tool Calling (Llamadas en Paralelo):** Que el agente consulte las 3 APIs al mismo tiempo en simultáneo en vez de esperar una detrás de la otra.
  3. **KV Cache + Chunks compactos:** Guardar el contexto fijo en memoria rápida para acelerar cada vuelta.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Token Streaming:** Hacer que la respuesta vaya apareciendo palabra por palabra en la pantalla apenas se genera, en vez de esperar a que termine todo el párrafo.
- **Parallel Tool Calling:** Hacer que el agente consulte las 3 APIs al mismo tiempo en simultáneo en lugar de esperar una detrás de la otra.

### ⚡ Dinámica / Interacción en Pantalla
- Interactuá con los botones del simulador de chat del Caso 2 para contrastar la respuesta básica contra la solución arquitectónica de latencia.

### 🔗 Puente de Conexión → Slide 14 (Simulación Caso 3: Blindaje contra Fuga de Datos (Data Leakage))
> **"Ya salvamos el presupuesto y la velocidad del producto. Pasemos a la Slide 14 para resolver el tercer y último caso de entrevista: el blindaje legal y de ciberseguridad."**

---

## Slide 14: Simulación Caso 3: Blindaje contra Fuga de Datos (Data Leakage)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Roleplay Caso 3 · PII Masking Proxy · Enterprise SLA · Metadata RBAC

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Resolver en vivo el Caso 3 de entrevista: miedo a filtrar datos confidenciales bajo NDA → ponemos un filtro de PII antes de salir a la nube, contrato Enterprise Zero-Retention y permisos por rol en el RAG.
- **👆 Qué tocar en la Slide:** 1° Izquierda: tocá '1. Simular Envío Crudo' → 2° Derecha: probá la Opción A y luego la Opción B (Proxy PII + Zero-Retention + RBAC).
- **💬 La analogía ganadora:** Tres candados independientes: ocultás los nombres antes de enviar el archivo (PII Masking), firmás contrato de confidencialidad bancaria con el proveedor (Enterprise SLA) y cada empleado solo abre su propio cajón (RBAC).

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CRISIS 3 DE ENTREVISTA: MIEDO A FUGA DE DATOS BAJO NDA (Leé la pregunta):**
• El comité legal pregunta: *'¿Cómo garantizamos que ningún empleado filtre tarifas confidenciales o datos personales de clientes al usar el asistente?'*.

**2️⃣ DEMO EN EL SIMULADOR (Hacé clic en la defensa de 3 capas):**
• Respondés con los 3 candados corporativos:
  1. **Proxy de Sanitización (PII Masking) en el API Gateway:** Un filtro que oculta nombres, mails y cifras antes de que salgan del servidor de la empresa.
  2. **Contrato Enterprise con Zero-Data Retention:** Prohibición contractual y técnica de guardar o entrenar con nuestros datos.
  3. **Metadata Pre-Filtering con RBAC:** Que el buscador vectorial filtre primero por los permisos del rol del usuario.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **PII Masking Proxy:** Un filtro intermedio que reemplaza automáticamente nombres de clientes y cifras secretas por códigos genéricos antes de mandar la consulta al modelo.

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el simulador del Caso 3 para mostrar cómo un proxy sanitizador intercepta datos sensibles antes de salir hacia la nube.

### 🔗 Puente de Conexión → Slide 15 (¡Felicitaciones por Completar el Programa de Mentoría!)
> **"Superaste los tres casos de entrevista con nivel de PM Senior. Pasemos a la última diapositiva del programa, la Slide 15, para celebrar todo lo que construiste."**

---

## Slide 15: ¡Felicitaciones por Completar el Programa de Mentoría!
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Graduación · Resumen de las 4 Sesiones · Próximos Pasos

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Celebrar la graduación de Anabela repasando cómo ahora domina los 4 mundos: Desarrollo/Agile (S1), IA Generativa/RAG (S2), Agentes Autónomos (S3) y Finanzas/Evals/Entrevistas (S4).
- **👆 Qué tocar en la Slide:** Repasá las 4 insignias del programa y mostrale que todos los simuladores, glosarios y guías quedan disponibles en su portal web.
- **💬 La analogía ganadora:** Pasó de ver la tecnología desde afuera como una caja negra a tener el mapa completo de arquitectura, costos, calidad y seguridad para liderar equipos de IA.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ ¡FELICITACIONES POR COMPLETAR LAS 4 SESIONES! (Repaso de logros):**
• En 4 sesiones construiste un dominio integral que une tu experiencia en gestión y lenguaje con la ingeniería moderna:
  • **Sesión 1:** Arquitectura web, APIs REST, Git, CI/CD, Cloud/AWS y equipos Agile.
  • **Sesión 2:** LLMs por dentro, Tokens, Embeddings, Bases Vectoriales y diseño de RAG.
  • **Sesión 3:** Agentes Autónomos (IA Activa), ReAct, Orchestrator-Workers, Tool Calling/MCP, Pydantic, HITL y uso práctico de Google Antigravity.
  • **Sesión 4:** Finanzas de IA (ROI y Caching), Privacidad PII, Auditoría con Evals/Langfuse y resolución de entrevistas.

**2️⃣ TUS RECURSOS PERMANENTES EN EL PORTAL:**
• Te quedan siempre disponibles las **4 presentaciones interactivas**, los **4 glosarios con modo lectura rápida**, los **simuladores prácticos**, la **plantilla de PRD** y la **Guía de Antigravity + AWS MCP** para repasar antes de cualquier reunión o entrevista.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Perfil AI Product / Project Manager:** El profesional capaz de unir la precisión lingüística y la gestión de proyectos con la arquitectura técnica, los costos y la calidad de los sistemas de IA.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 4 trofeos / pilares completados por Anabela y recordale que todo el portal interactivo, los 4 glosarios y el generador de PRD quedan 100% a su disposición.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🏁 Cierre Final del Programa: Te queda todo el Portal Interactivo con las 4 presentaciones, los 4 Glosarios Completos y el Generador de PRD para consultar y repasar cada vez que tengas una reunión técnica o una entrevista. ¡Muchísimos éxitos en lo que se viene!"**

---

