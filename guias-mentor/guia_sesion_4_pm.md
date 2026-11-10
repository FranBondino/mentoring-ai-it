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
¡Bienvenida a nuestra cuarta y última sesión, Anabela! En las tres sesiones anteriores construimos una base técnica enorme: vimos cómo trabaja un equipo de desarrollo ágil y cómo funcionan las APIs y Git (Sesión 1), cómo funciona por dentro un LLM y cómo se diseña una arquitectura RAG (Sesión 2), y cómo construir chatbots y agentes autónomos con ReAct, Tool Calling y guardrails (Sesión 3). Hoy vamos a ponerle el broche de oro a tu perfil: vamos a dominar **los números financieros de la IA (AI Economics)**, cómo **medir la calidad y auditar un chatbot en producción (Evals y Langfuse)**, y vamos a cerrar entrenando **casos reales de entrevistas de IT**.

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
Nuestro plan de vuelo de hoy tiene tres paradas muy concretas: primero, **AI Economics**, donde vas a aprender a calcular cuánto cuesta operar un chatbot o flujo de traducción con IA y cómo defender su retorno de inversión (ROI). Segundo, **Gobernanza y Calidad**, donde vamos a usar herramientas reales como Langfuse para radiografiar qué pasa adentro de cada respuesta del bot. Y tercero, **Simulación de Rol**, donde vamos a resolver en vivo tres crisis típicas que te plantean en entrevistas para roles de PM.

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
En el software tradicional que vimos en la Sesión 1, vos alquilás un servidor en la nube por un monto fijo al mes y da casi lo mismo si un usuario hace diez clics o mil clics. En la Inteligencia Artificial eso cambia radicalmente: cada vez que un usuario manda un mensaje, una placa de video gigante (**GPU**) tiene que hacer miles de millones de cálculos matemáticos en vivo, y el proveedor nos cobra por cada **Token** procesado. Y mirá dos detalles fundamentales para vos: primero, los **Output Tokens** (las palabras que el modelo escribe de respuesta) cuestan entre **3 y 4 veces más caros** que los **Input Tokens** (lo que el modelo lee). Segundo —y esto en localización es clave—: el **español consume entre un 20% y un 30% más de tokens que el inglés** para decir exactamente lo mismo, por cómo el tokenizador parte nuestras conjugaciones y tildes. Saber esto te permite presupuestar un proyecto multilingüe sin llevarte sorpresas.

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
Si en una entrevista o reunión de presupuesto mencionás **Prompt Caching**, te ganás automáticamente el respeto del equipo de ingeniería. ¿Qué es el Prompt Caching? Cuando armamos un chatbot o un validador automático de traducciones, el 80% del prompt es siempre idéntico (el rol del sistema, las reglas de formato, el glosario base y los ejemplos) y solo cambia el 20% final (la consulta o el párrafo nuevo del usuario). Si estructuramos el prompt poniendo **todo el bloque fijo bien arriba al principio** y la parte variable al final, las APIs modernas guardan ese bloque fijo en memoria caché y nos hacen hasta un **75% a 90% de descuento** en esos tokens de entrada, además de responder muchísimo más rápido.

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
En las Sesiones 2 y 3 vimos la diferencia técnica entre **RAG** y **Fine-Tuning**; acá en la Slide 5 tenés la foto financiera completa para defenderla ante un directorio. Fijate en la tabla: con **RAG**, el costo inicial es bajo, actualizar un dato nuevo cuesta centavos y tarda segundos (solo subís el PDF o glosario nuevo a la Base Vectorial), y podés auditar de qué página salió cada respuesta. En cambio, con **Fine-Tuning**, tenés un costo altísimo de preparación y entrenamiento en GPUs, cada vez que cambia un manual queda desactualizado y no tenés citas de fuentes. Por eso en el 95% de los casos corporativos arrancamos con RAG + Prompt Engineering, y solo sumamos Fine-Tuning si necesitamos enseñar un formato o estilo lingüístico ultra específico.

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
¡Juguemos con esta calculadora en vivo! Imaginá que querés proponer en una empresa automatizar con IA la primera pasada de revisión de calidad (QA), clasificación de tickets o pre-análisis de documentos. Movamos el primer slider: supongamos que procesan **1.500 documentos o tickets al mes**. Segundo slider: a una persona le lleva promedio **20 minutos** revisar cada uno. Tercer slider: el costo hora profesional es de **25 dólares**. Mirá el panel de resultados a la derecha: hacerlo 100% manual cuesta **12.500 dólares por mes**. En cambio, procesarlo con un pipeline de IA (consumiendo unos 4.000 tokens por documento) cuesta apenas **unos ~90 dólares de API al mes**. Incluso manteniendo a un especialista humano supervisando el 20% del tiempo (Human-in-the-Loop), el ahorro neto supera el 80%. Así es como un PM justifica un proyecto de IA con números contundentes.

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
Para que ningún dato confidencial o personal se filtre, acá resumimos el blindaje de tres capas que exige un PM Senior: 1) **Sanitización / Enmascaramiento de PII (Personally Identifiable Information)**: antes de que el texto viaje a la API del LLM, un filtro local reemplaza nombres propios, mails, teléfonos o montos confidenciales por etiquetas genéricas como `[CLIENTE_1]` o `[EMAIL_OCULTO]`, y a la vuelta los vuelve a reemplazar. 2) **Acuerdo Enterprise SLA con Zero-Retention**, como vimos en la Sesión 2. Y 3) **Permisos por Rol (RBAC)** en la Base Vectorial, para que un usuario junior no pueda preguntarle al bot por documentos confidenciales de directorio.

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
Como un chatbot redacta distinto cada vez, para auditar su calidad usamos un sistema llamado **LLM-as-a-Judge (Un LLM como Juez)** que califica cada respuesta del 0 al 1 en tres métricas clave (la famosa **Tríada RAG**): 1) **Faithfulness (Fidelidad)**: ¿todo lo que dijo el bot sale estrictamente de los fragmentos del manual recuperados, o inventó algo de su cosecha? Si inventó aunque sea un dato menor, reprueba en Fidelidad. 2) **Answer Relevance (Relevancia)**: ¿el bot fue al grano y respondió exactamente lo que preguntó el usuario, o se fue por las ramas? Y 3) **Context Recall / Precision**: ¿el buscador vectorial trajo el párrafo correcto del manual? Si esta tercera métrica da baja, ya sabés que el problema no es el prompt del LLM, sino que tenés que ajustar el Chunking o los Embeddings en la Base Vectorial.

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
Mirá el caso de prueba a la izquierda: el manual oficial dice claramente que el soporte estándar responde en **24 horas hábiles** y que no cubre fines de semana salvo plan Enterprise. El usuario pregunta si le van a responder un domingo gratis, ¡y mirá lo que contesta el bot abajo!: *'¡Por supuesto! Nuestro equipo de guardia 24/7 resolverá tu ticket este mismo domingo sin costo adicional'*. ¡Una alucinación hermosa y súper amable que nos mete en un lío comercial bárbaro! Si movemos a la derecha el slider de **Fidelidad (Faithfulness)** hacia abajo (por ejemplo a 20%), fijate cómo el tablero automáticamente marca **RECHAZADO (FAIL)** y bloquea este prompt para que no pueda subir a producción.

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
Herramientas como **Langfuse** o **LangSmith** son el tablero de control (Observabilidad) donde vive un PM de IA. Cada vez que un usuario manda un mensaje al chatbot, Langfuse guarda una **Traza (Trace)** completa. Hacé clic conmigo en cada renglón del árbol de la izquierda para abrir las cajas negras: en el paso 1 ves que buscar en la **Base Vectorial** tardó apenas `180 milisegundos` y trajo 3 chunks con similitud 0.89; en el paso 2 ves que el filtro de seguridad tardó `90 milisegundos`; y en el paso 3 ves que la generación del **LLM (GPT-4o)** tardó `1.45 segundos` y costó exactamente `$0.0042 dólares`. Si mañana el bot empieza a tardar 8 segundos o a responder mal, abrís esta traza y en diez segundos sabés exactamente en qué eslabón de la cadena está el problema.

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
Cuando vas a una entrevista para un rol de Project Manager o Product Manager en tecnología, nadie espera que te pongas a programar código en vivo. Lo que están evaluando es si tenés **criterio de arquitectura, control de riesgos y visión de negocio**. La fórmula ganadora para responder cualquier pregunta técnica tiene siempre tres pasos: **1) Diagnóstico Técnico** (nombrar con precisión el componente: *'eso es un problema de Chunking en el pipeline RAG'* o *'eso requiere un freno Human-in-the-Loop'*); **2) Acción en el Backlog** (qué le pedís priorizar al equipo de ingeniería); y **3) Impacto de Negocio** (cómo eso protege el presupuesto, la velocidad o la seguridad del cliente).

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
Mirá el **Caso 1** en el simulador de entrevista: el entrevistador te dice: *'Lanzamos nuestro agente a producción hace una semana y la factura de OpenAI vino diez veces más cara de lo estimado. ¿Qué hacés como PM?'*. Si elegís la respuesta ingenua (pedir más presupuesto o apagar el bot), perdés puntos. Hagamos clic en la **Respuesta Estratégica de PM**: 1) Abrís **Langfuse** para auditar las trazas y ver si hay **Loops Infinitos** en el ciclo ReAct y fijás un límite duro de `Max Iterations = 5`; 2) Activás **Prompt Caching** para ahorrar hasta un 80% en las instrucciones repetidas del sistema; y 3) Implementás **Model Routing**: usás un modelo rápido y económico (como `GPT-4o-mini` o `Claude Haiku`) para las tareas simples del flujo, y reservás el modelo grande solo para el razonamiento complejo.

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
Mirá el **Caso 2**: el entrevistador te plantea: *'Los usuarios se quejan de que el chatbot tarda 12 segundos con la pantalla en blanco antes de mostrar la respuesta porque tiene que consultar tres APIs distintas. ¿Cómo lo solucionás?'*. Hagamos clic en la respuesta experta y mirá qué elegancia: atacás tanto la velocidad real como la velocidad percibida. Primero, en el Frontend pedís activar **Token Streaming** (que las palabras vayan apareciendo en vivo sílaba por sílaba apenas se generan, reduciendo el *Time To First Token* a menos de un segundo). Segundo, en el Backend pedís **Parallel Tool Calling** (que el agente llame a las 3 APIs al mismo tiempo en paralelo en vez de esperar una detrás de la otra). Y tercero, optimizás el **KV Cache** y achicás el tamaño de los chunks inyectados.

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
Y en el **Caso 3**, el comité de seguridad te pregunta: *'¿Cómo nos aseguramos de que ningún empleado filtre datos personales de clientes o tarifas bajo NDA al usar el asistente de IA?'*. Hacemos clic en la defensa completa: 1) Ponemos un **Proxy de Sanitización (PII Masking)** en nuestro API Gateway que anonimiza nombres, mails y cifras confidenciales antes de que salgan de nuestro servidor; 2) Operamos exclusivamente bajo contrato **Enterprise SLA con Zero-Data Retention**; y 3) Aplicamos **Metadata Filtering atado a los permisos del usuario** para que cada persona solo pueda recuperar en el RAG los documentos que su rol tiene autorizados.

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
¡Felicitaciones Anabela, completaste las 4 sesiones del programa! Mirá hacia atrás todo el camino que recorriste en apenas cuatro horas: hoy entendés perfectamente qué hace un developer, cómo se conectan los sistemas por APIs, cómo funciona Git y el pipeline de CI/CD, cómo operan por dentro los LLMs, cómo se diseña una arquitectura RAG con Embeddings y Bases Vectoriales, cómo construir un chatbot agéntico con ReAct, Tool Calling y Pydantic, y cómo presupuestar, auditar con Langfuse y defender un producto de IA en cualquier entrevista o reunión ejecutiva. Tu combinación de experiencia en proyectos y lenguaje sumada a este dominio técnico es un diferencial enorme en el mercado actual.

### 💡 Explicación en Palabras Simples de los Términos Técnicos (Para explicar fácil a Anabela)
- **Perfil AI Product / Project Manager:** El profesional capaz de unir la precisión lingüística y la gestión de proyectos con la arquitectura técnica, los costos y la calidad de los sistemas de IA.

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 4 trofeos / pilares completados por Anabela y recordale que todo el portal interactivo, los 4 glosarios y el generador de PRD quedan 100% a su disposición.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🏁 Cierre Final del Programa: Te queda todo el Portal Interactivo con las 4 presentaciones, los 4 Glosarios Completos y el Generador de PRD para consultar y repasar cada vez que tengas una reunión técnica o una entrevista. ¡Muchísimos éxitos en lo que se viene!"**

---

