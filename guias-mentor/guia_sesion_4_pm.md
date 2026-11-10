# 🎙️ Sesión 4: Finanzas de la IA, Evaluación (Evals) & Simulación de Entrevistas

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Cerrar el programa integrando la visión financiera y de calidad de producto: estructura de costos de inferencia (Input vs. Output tokens), ahorro con Prompt Caching, cálculo de ROI de negocio, auditoría científica de calidad mediante AI Evals y trazas en Langfuse, y entrenamiento práctico con 3 casos interactivos de entrevista IT/IA.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## ⚡ Machete General de 60 Segundos (Leé esto 1 minuto antes de arrancar la llamada)

- **1. Finanzas de la IA y Ahorro (Slides 1 a 6):** A diferencia del software clásico de costo fijo, en IA pagás por cada **Token** procesado en placas de video (GPU). Los tokens de respuesta (**Output**) son 3 a 4 veces más caros que los de lectura (**Input**), y el español consume ~25% más tokens que el inglés. Con **Prompt Caching** ahorrás hasta un 90% en instrucciones fijas y con la **Calculadora de ROI** justificás el proyecto ante el directorio.
- **2. Privacidad y Blindaje Legal (Slide 7):** Para proteger contratos bajo NDA y datos personales (**PII**), aplicamos 3 barreras: 1) **Sanitización/Enmascaramiento de PII** (ocultar nombres y mails antes de salir a la nube), 2) Contrato **Enterprise Zero-Retention** (prohibido entrenar con tus datos), y 3) **Permisos por Rol (RBAC)** en la Base Vectorial.
- **3. Auditoría de Calidad (Evals) y Langfuse (Slides 8 a 10):** No probamos un bot 'a ojo': usamos **AI Evals (LLM-as-a-Judge)** midiendo la **Tríada RAG** (*Fidelidad al manual*, *Relevancia de respuesta* y *Precisión de búsqueda*). Y en producción usamos **Langfuse** para ver la radiografía (Traza) de cada mensaje: cuántos milisegundos tardó y cuántos centavos costó cada paso.
- **4. Simulacro de Entrevistas IT / IA (Slides 11 a 15):** En una entrevista de PM no te piden programar, sino aplicar la fórmula: **1) Diagnóstico técnico + 2) Acción en el Backlog + 3) Impacto en el negocio**. Practicamos 3 crisis en vivo: factura 10x más cara, lentitud de 12 segundos y prevención de fuga de datos.

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

### 🔗 Puente de Conexión → Slide 2 (Agenda Operativa de la Sesión 4)
> **"Miremos rápidamente en la Slide 2 los tres bloques prácticos que vamos a recorrer hoy."**

---

## Slide 2: Agenda Operativa de la Sesión 4
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** 1. AI Economics · 2. Gobernanza & Calidad · 3. Simulación de Rol

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mostrar el mapa de los 3 módulos que vamos a recorrer hoy: 1) Finanzas y Calculadora ROI, 2) Seguridad, Evals y Langfuse, y 3) Simulacro de 3 Casos de Entrevista.
- **👆 Qué tocar en la Slide:** Señalá las 3 tarjetas de colores en pantalla: Ámbar (AI Economics), Azul (Gobernanza y Calidad) y Violeta (Simulación de Rol).
- **💬 La analogía ganadora:** Son las 3 preguntas que siempre te hace un Directorio antes de lanzar un producto: 1) ¿Cuánto cuesta y cuánto ahorra?, 2) ¿Es seguro y confiable?, y 3) ¿Sabés manejar una crisis si algo falla?

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ NUESTRA HOJA DE RUTA DE HOY EN 3 BLOQUES (Señalá las 3 tarjetas):**
• **1. AI Economics (Tarjeta Ámbar):** Cómo calcular cuánto cuesta operar un flujo de IA por mes, cómo ahorrar hasta un 90% con Prompt Caching y cómo demostrar el Retorno de Inversión (ROI) con una calculadora en vivo.
• **2. Gobernanza y Calidad (Tarjeta Azul):** Cómo proteger datos confidenciales (PII/NDA), cómo calificar si el bot miente con la Tríada RAG y cómo radiografiar cada respuesta en **Langfuse**.
• **3. Simulación de Rol en Entrevistas (Tarjeta Violeta):** Cómo responder preguntas difíciles frente a líderes técnicos resolviendo 3 crisis en vivo.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **ROI (Return on Investment):** El retorno de inversión: cuántos dólares recupera o ahorra la empresa por cada dólar invertido en tecnología.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las 3 tarjetas de la agenda: 1. AI Economics (Ámbar), 2. Gobernanza & Calidad (Azul) y 3. Simulación de Rol (Violeta).

### 🔗 Puente de Conexión → Slide 3 (AI Economics: La Variable GPU (Input vs. Output Tokens))
> **"Arranquemos directo por el bolsillo del proyecto: ¿por qué operar software con IA tiene una estructura de costos totalmente distinta al software clásico? Pasemos a la Slide 3."**

---

## Slide 3: AI Economics: La Variable GPU (Input vs. Output Tokens)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** COGS (Costo Operativo) · Input vs Output Tokens · Español (+20-30% Tokens)

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar por qué en IA el costo es variable por uso (tokens en GPU), por qué escribir (Output) cuesta 3 a 4 veces más que leer (Input) y por qué el español consume ~25% más tokens que el inglés.
- **👆 Qué tocar en la Slide:** Señalá las tarjetas de Input Tokens vs. Output Tokens a la izquierda y la regla de conversión ('1k Tokens ≈ 750 palabras' y '+20-30% en español') a la derecha.
- **💬 La analogía ganadora:** El software clásico es como alquilar una oficina con tarifa plana de luz; la IA es como un taxi con reloj taxímetro: cada palabra que lee y escribe corre en el reloj, y encima en español las palabras son más largas y ocupan más fichas.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ SOFTWARE CLÁSICO VS. COSTO POR TOKEN EN IA (Tarjeta izquierda):**
• En el software tradicional alquilás un servidor por un monto fijo al mes. En cambio, en IA cada mensaje hace trabajar placas de video (**GPUs**) en tiempo real y el proveedor te cobra por cada **Token** procesado (como un reloj taxímetro).

**2️⃣ DOS REGLAS FINANCIERAS CLAVE PARA TU PRESUPUESTO (Tarjeta derecha):**
• **Regla 1 — Asimetría Input vs. Output:** Los **Output Tokens** (lo que la IA escribe) cuestan entre **3 y 4 veces más caros** que los **Input Tokens** (lo que la IA lee). Por eso pedimos respuestas concisas.
• **Regla 2 — El 'Impuesto' del Idioma Español:** Por cómo se parten las sílabas y tildes, **el español consume entre un 20% y un 30% más de tokens que el inglés** para decir exactamente lo mismo (1.000 tokens ≈ 750 palabras en inglés, pero ~580 en español).

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **COGS (Costo de la Mercadería Vendida / Costo Operativo):** El gasto directo en servidores y APIs de IA que te cuesta atender a cada usuario.
- **Input Tokens vs. Output Tokens:** Input es lo que la IA lee (más barato, procesado en bloque); Output es lo que la IA escribe palabra por palabra (3 a 4 veces más caro).

### ⚡ Dinámica / Interacción en Pantalla
- Señalá la regla métrica a la derecha ('1k Tokens ≈ 750 Palabras') y el dato clave de que el español consume entre 20% y 30% más de tokens.

### 🔗 Puente de Conexión → Slide 4 (Prompt Caching: El Súper Ahorro (Hasta 90% Off))
> **"Ahora bien: si en cada consulta tenemos que mandarle al modelo las instrucciones del sistema, la guía de estilo y el glosario, ¿tenemos que pagar el 100% de esos tokens repetidos miles de veces por día? Por suerte no. Vamos a la Slide 4."**

---

## Slide 4: Prompt Caching: El Súper Ahorro (Hasta 90% Off)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Prompt Caching · Ahorro de Costos · Reducción de Latencia

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Mostrar cómo ahorrar hasta un 90% de plata y acelerar el bot poniendo las instrucciones fijas y glosarios arriba del todo en el prompt (Prompt Caching).
- **👆 Qué tocar en la Slide:** Señalá la comparativa de barras a la derecha: cómo la parte fija del prompt queda guardada en memoria con hasta 90% de descuento.
- **💬 La analogía ganadora:** En vez de fotocopiar y pagar de nuevo el manual de 50 páginas en cada consulta, el proveedor lo deja plastificado arriba del escritorio y te cobra una fracción mínima por consultarlo.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ EL PROBLEMA DE PAGAR SIEMPRE LAS MISMAS INSTRUCCIONES:**
• Cuando armamos un chatbot o un agente de localización, el **80% del prompt es siempre idéntico** (instrucciones del rol, reglas de estilo, glosario base) y solo cambia el **20% final** (la consulta del usuario).

**2️⃣ CÓMO FUNCIONA EL PROMPT CACHING (Señalá las barras a la derecha):**
• Si ordenás el prompt poniendo **todo el bloque fijo bien arriba al principio** y la pregunta variable al final, proveedores como OpenAI, Anthropic y AWS Bedrock guardan ese bloque fijo en memoria caché.

**3️⃣ EL IMPACTO EN PLATA Y VELOCIDAD:**
• Te hacen entre un **75% y un 90% de descuento** sobre todos esos tokens repetidos y además la respuesta arranca el doble de rápido.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Prompt Caching:** Descuento de hasta 75%-90% que te dan los proveedores (OpenAI, Anthropic, AWS Bedrock) cuando ponés las instrucciones fijas y glosarios al principio del prompt para no reprocesarlos.
- **Prefijo Estático vs. Sufijo Dinámico:** Poner arriba todo lo que nunca cambia (reglas, glosario) y dejar abajo del todo lo único que cambia (la pregunta del usuario).

### ⚡ Dinámica / Interacción en Pantalla
- Compará las barras de costo y estructura del prompt estático arriba vs. variable abajo en la tarjeta derecha.

### 🔗 Puente de Conexión → Slide 5 (RAG vs. Fine-Tuning: La Comparativa Financiera de Negocio)
> **"Ya sabemos optimizar el costo por llamada con Prompt Caching. Veamos ahora en una tabla comparativa cuánto cuesta realmente armar una arquitectura RAG frente a hacer Fine-Tuning. Pasemos a la Slide 5."**

---

## Slide 5: RAG vs. Fine-Tuning: La Comparativa Financiera de Negocio
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** TCO (Costo Total) · Actualización en Tiempo Real · Trazabilidad

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Comparar con ojos de negocio y presupuesto por qué en el 95% de los proyectos corporativos conviene usar RAG (barato, actualizable al instante y con citas) en vez de Fine-Tuning.
- **👆 Qué tocar en la Slide:** Recorré las filas de la tabla comparativa contrastando la columna verde (RAG) contra la columna roja/naranja (Fine-Tuning).
- **💬 La analogía ganadora:** RAG es darle al empleado acceso al Google Drive actualizado todos los días (rápido y económico); Fine-Tuning es mandarlo a hacer un posgrado de 6 meses cada vez que cambia una tarifa.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA FOTO FINANCIERA PARA EL DIRECTORIO (Recorré la tabla comparativa):**
• Cuando un directivo pregunta si conviene hacer **RAG** o **Fine-Tuning**, acá tenés la comparativa económica:
  • **Con RAG (Columna Verde):** Costo inicial bajo, actualizar un manual o glosario nuevo cuesta centavos y tarda segundos (solo subís el archivo a la Base Vectorial), y tenés citas exactas de la página oficial para auditar.
  • **Con Fine-Tuning (Columna Naranja):** Costo alto de entrenamiento en GPUs, cada vez que cambia una regla queda desactualizado y no cita fuentes.

**2️⃣ REGLA EJECUTIVA DE PM:**
• El **95% de los proyectos corporativos arrancan con RAG + Prompt Caching**, y solo se suma Fine-Tuning cuando necesitás enseñar un estilo de redacción o formato muy específico.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **TCO (Total Cost of Ownership):** El costo total real de un proyecto sumando el desarrollo inicial más lo que cuesta mantenerlo y actualizarlo todos los meses.

### ⚡ Dinámica / Interacción en Pantalla
- Recorré las filas de la tabla comparativa contrastando Costo Inicial, Costo de Actualización, Control de Alucinaciones y Caso de Uso Ideal.

### 🔗 Puente de Conexión → Slide 6 (Ejercicio 1: Calculadora Interactiva de ROI (Automatización con IA))
> **"Pongamos todos estos números en movimiento con un ejercicio práctico en vivo. Pasemos a la Slide 6 para usar nuestra Calculadora Interactiva de ROI."**

---

## Slide 6: Ejercicio 1: Calculadora Interactiva de ROI (Automatización con IA)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Calculadora en Vivo · ROI Mensual · Hora-Hombre vs Costo API

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Usar en vivo la Calculadora de ROI para demostrar cómo una tarea manual de $12.500 USD/mes baja a menos de $100 USD/mes de API combinada con supervisión humana.
- **👆 Qué tocar en la Slide:** Mové los 3 sliders de la izquierda ('Documentos/mes', 'Minutos por documento', 'Costo Hora USD') y mostrá cómo cambian los números grandes a la derecha.
- **💬 La analogía ganadora:** Esta calculadora es tu arma secreta para reuniones con directores financieros: transforma 'queremos usar IA porque es moderna' en 'este proyecto nos ahorra $10.000 dólares por mes'.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ DEMO EN VIVO: CALCULADORA DE ROI (Mové los 3 deslizadores de la izquierda):**
• Imaginá que querés justificar ante el directorio automatizar el pre-análisis de documentos o clasificación de tickets:
  • **Slider 1:** Poné **1.500 documentos/tickets al mes**.
  • **Slider 2:** Poné **20 minutos humanos** por documento.
  • **Slider 3:** Poné **$25 USD** de costo hora profesional.

**2️⃣ MIRÁ EL IMPACTO FINANCIERO A LA DERECHA:**
• Hacer el 100% del trabajo a mano cuesta **$12.500 USD por mes**.
• Procesar la primera pasada con IA cuesta apenas **~$90 USD de API al mes**. Incluso dejando a un especialista humano revisando el 20% del tiempo (*Human-in-the-Loop*), generás un **ahorro neto superior al 80%**.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Costo Hora-Hombre vs. Costo de Inferencia:** Comparar cuánto cuesta el tiempo de un equipo haciendo trabajo repetitivo manual frente a los centavos que cobra la API por hacer el pre-procesamiento.

### ⚡ Dinámica / Interacción en Pantalla
- Mové en vivo los 3 sliders ('Documentos / Tickets Procesados al Mes', 'Minutos Humanos por Documento', 'Costo Hora Profesional USD') para ver cómo se actualizan al instante el Costo Humano, el Costo de API de IA y el Ahorro Neto Mensual.

### 🔗 Puente de Conexión → Slide 7 (Seguridad Corporativa: Blindaje contra Fuga de Datos (PII & NDA))
> **"Cuando presentás un ahorro así de grande, el directorio te aprueba el presupuesto, pero inmediatamente el área de Legales y Seguridad te hace la pregunta clave: '¿Cómo protegemos los datos sensibles?'. Vamos a la Slide 7."**

---

## Slide 7: Seguridad Corporativa: Blindaje contra Fuga de Datos (PII & NDA)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** PII Sanitization · Anonimización · Zero-Retention SLA · RBAC

### ⚡ Machete Express de 5 Segundos (Si no repasaste, mirá solo esto)
- **🎯 Qué explicás acá (En 1 frase):** Explicar las 3 barreras de seguridad para que nunca se filtren datos personales (PII) ni secretos bajo NDA al usar IA.
- **👆 Qué tocar en la Slide:** Señalá los 3 escudos: 1) Sanitización de PII (ocultar nombres/mails), 2) Contrato Enterprise Zero-Retention, y 3) Permisos por rol (RBAC).
- **💬 La analogía ganadora:** Igual que cuando un médico presenta un caso clínico en un congreso: antes de mostrar la radiografía le tapa el nombre y DNI al paciente ('Paciente X') para proteger su identidad.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ LA PREGUNTA OBLIGATORIA DE LEGALES Y SEGURIDAD:**
• Apenas mostrás ese ahorro en la calculadora, el abogado de la empresa pregunta: *'¿Cómo evitamos que se filtren datos personales de clientes (PII) o contratos bajo NDA?'*.

**2️⃣ LAS 3 CAPAS DE BLINDAJE QUE PROPONE UNA PM (Señalá los 3 bloques):**
• **1. Sanitización / Enmascaramiento de PII:** Antes de que el texto salga a la API de IA, un filtro automático reemplaza nombres reales, mails y montos por etiquetas como `[CLIENTE_1]` o `[EMAIL_OCULTO]`.
• **2. Contrato Enterprise con Zero-Data Retention:** Acuerdo legal y técnico donde el proveedor borra el texto apenas responde y tiene prohibido entrenar con tus datos.
• **3. Permisos por Rol (RBAC) en la Base Vectorial:** Un empleado junior solo puede consultar en el RAG documentos autorizados para su nivel.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **PII (Personally Identifiable Information):** Datos personales sensibles como nombre y apellido, DNI, email, teléfono, dirección o tarjeta de crédito.
- **Sanitización / Enmascaramiento de PII:** Un filtro automático que reemplaza nombres reales por etiquetas como `[CLIENTE_1]` antes de mandar el texto a la IA.
- **RBAC (Role-Based Access Control):** Control de acceso por rol: que el bot solo busque en los documentos que el cargo de ese empleado tiene permiso de ver.

### ⚡ Dinámica / Interacción en Pantalla
- Señalá las capas de protección: 1) Sanitización de PII (Datos Personales) antes de enviar al LLM y 2) Control de acceso por rol en la Base Vectorial.

### 🔗 Puente de Conexión → Slide 8 (Suite de Evaluaciones (AI Evals): La Tríada de Calidad RAG)
> **"Ya tenemos cerrados los costos y la seguridad. Ahora entremos al segundo gran pilar de hoy: ¿cómo medimos científicamente la calidad de las respuestas de un chatbot usando AI Evals? Pasemos a la Slide 8."**

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
- **🎯 Qué explicás acá (En 1 frase):** Probar en vivo cómo un auditor detecta una alucinación peligrosa (el bot promete soporte gratis un domingo cuando el manual dice lunes a viernes) y le baja la nota de Fidelidad para bloquearlo.
- **👆 Qué tocar en la Slide:** Leé el manual vs. la respuesta del bot a la izquierda, y mové el primer slider ('Faithfulness / Fidelidad') hacia abajo (ej. 20%) para que el cartel cambie a 'RECHAZADO'.
- **💬 La analogía ganadora:** Es el control de calidad en la línea de montaje: aunque el envase se vea lindo (tono amable), si adentro promete algo prohibido por contrato, el inspector frena la partida.

### 🗣️ Guion Paso a Paso (En 3 Bloques Cortos)
**1️⃣ CASO DE AUDITORÍA EN VIVO (Leé la columna izquierda con Anabela):**
• **El Manual Oficial dice:** Soporte responde en 24 hs hábiles de lunes a viernes (no cubre domingos salvo plan Enterprise).
• **El Bot responde:** *'¡Por supuesto! Nuestro equipo 24/7 resolverá tu ticket este mismo domingo sin costo adicional'*. ¡Es un **falso positivo amable**: suena cordial pero inventó una promesa comercial falsa!

**2️⃣ DEMO CON LOS DESLIZADORES DE EVALUACIÓN (Columna derecha):**
• Bajá el primer deslizador (**Faithfulness / Fidelidad**) al **20%**.
• Mirá cómo el sistema cambia automáticamente el veredicto a **RECHAZADO POR ALUCINACIÓN** e impide que ese cambio salga a producción.

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
- **👆 Qué tocar en la Slide:** Hacé clic primero en la opción incorrecta y después en la opción ganadora para desplegar la respuesta modelo de PM Senior.
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
- **👆 Qué tocar en la Slide:** Interactuá con las opciones del simulador del Caso 2 para revelar las 3 mejoras de velocidad.
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
- **👆 Qué tocar en la Slide:** Hacé clic en las opciones del Caso 3 para mostrar la defensa completa de 3 capas.
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

