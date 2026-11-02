# 🎙️ Sesión 2: Overview de LLMs, Embeddings y Arquitectura RAG

- **Duración total:** 60 Minutos
- **Alumna:** Anabela Hotian (Traductora de Inglés · Localization & Project Management)
- **Objetivo del Mentor:** Desmitificar el funcionamiento interno de los Grandes Modelos de Lenguaje (LLMs), aprovechando la afinidad lingüística de Anabela para dominar Tokenización BPE, Ventanas de Contexto, Embeddings Vectoriales, Chunking con Overlap y el diseño end-to-end de un sistema RAG corporativo.
- **Total de Diapositivas:** 15 slides (con guion verbatim + acción en pantalla + puente exacto de transición a la siguiente diapositiva)

## 🧭 Cronograma y Bloques de la Sesión

| Bloque Horario | Módulo | Diapositivas | Foco Pedagógico |
| :--- | :--- | :--- | :--- |
| **00 - 15 min** | Dentro del Cerebro del LLM | Slides 1 a 4 | Naturaleza probabilística (Next-Token Prediction), Tokenización BPE en vivo y el sesgo 'Lost in the Middle' en la Ventana de Contexto. |
| **15 - 30 min** | Geometría del Lenguaje & Datos | Slides 5 a 7 | Embeddings (mapas vectoriales 3D), Bases de Datos Vectoriales con Metadata Filtering y fragmentación documental (Chunking + Overlap). |
| **30 - 45 min** | Arquitectura RAG & Taller PRD | Slides 8 a 10 | Pipeline RAG Fase 1 (Ingestión Offline) y Fase 2 (Consulta Online en vivo), más taller práctico del Mock PRD. |
| **45 - 60 min** | Gobernanza, Calidad & Roleplay | Slides 11 a 15 | Prevención de Data Leakage (Enterprise SLA), umbrales anti-alucinación, Golden Dataset (Evals) y defensa RAG vs. Fine-Tuning. |

---

## Slide 1: Portada: IA Generativa & Arquitectura RAG
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Sesión 2 · LLMs · Arquitectura RAG · React Simulators

### 🗣️ Guion Literal (Qué decir)
> "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro vimos cómo se construye el software moderno con APIs, servidores, ambientes y bases de datos. Hoy nos vamos a meter en el corazón de la revolución actual: cómo nacieron y cómo funcionan por dentro los Grandes Modelos de Lenguaje (LLMs como GPT-4, Claude o Gemini) y cómo hacen las empresas para conectarlos con sus propios documentos, manuales y glosarios privados sin que el modelo invente respuestas.

* **1. Módulo 1 — Límites Físicos (Slides 2 a 4):** Desmitificamos la 'magia' de la IA probando en vivo predicción de tokens, Temperatura, BPE, Prompt Caching y el sesgo *Lost in the Middle*.
* **2. Módulo 2 — Bloques de RAG (Slides 5 a 7):** Exploramos cómo tu experiencia en lingüística y traducción se convierte en geometría mediante Embeddings de 1536 dimensiones, Similitud por Coseno, Metadata Filtering y Chunking con Overlap.
* **3. Módulo 3 — Taller Práctico (Slides 8 a 10):** Recorremos las 2 fases de RAG (Ingestión Batch vs. Consulta en Tiempo Real) y especificamos el Mock PRD de un *Enterprise Knowledge Bot*.
* **4. Módulo 4 — Gobernanza & QA (Slides 11 a 15):** Blindamos el producto con contratos Enterprise SLA (Zero-Retention), umbrales de confianza en `0.75`, Golden Datasets en CI/CD y roleplay de entrevista ejecutiva."

### ⚡ Dinámica / Interacción en Pantalla
- Presentá la portada destacando cómo hoy conectamos los cimientos de software de la Sesión 1 con la Inteligencia Artificial Generativa. Mostrá que las 4 tarjetas Bento son clicables para saltar directo a cada módulo.

### 🔗 Puente de Conexión → Slide 2 (El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017))
> **"Para arrancar bien desde la raíz, veamos cuál fue el paper científico que disparó el advenimiento de todos los LLMs modernos y cómo funciona su motor probabilístico bajo el capó. Pasemos a la Slide 2."**

---

## Slide 2: El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Attention Is All You Need · Transformer (GPT) · Next-Token & Temperatura · RAG vs Fine-Tuning

### 🗣️ Guion Literal (Qué decir)
> "Para entender qué es un LLM de verdad, vayamos al momento exacto en que nació todo este auge: junio de 2017, cuando un equipo de investigadores de Google publica el paper **'Attention Is All You Need'** (Vaswani et al.). Y mirá qué conexión directa con tu carrera: ese paper se escribió para resolver un cuello de botella de la **traducción automática de idiomas**.

* **El Mecanismo de Self-Attention (Auto-Atención):** Antes de 2017, las redes leían palabra por palabra en fila india y al llegar al final de un párrafo largo ya se habían olvidado del principio. La arquitectura **Transformer** (la **'T'** de **GPT**) mira toda la oración en paralelo y calcula matemáticamente cómo cada palabra modifica el sentido de las demás según el contexto.
* **Simulador en Vivo — Next-Token & Temperatura:** Mirá el simulador React en el centro de la diapositiva. El LLM no 'piensa': calcula probabilidades sobre cuál es el siguiente token. Cuando hacemos clic en **`Temp = 0.0 (RAG / Precisión)`**, el modelo elige siempre el token más probable (`glosario_aprobado` con 88%), ideal para bots corporativos. Pero si subimos a **`Temp = 0.9`**, aplanamos la curva y el modelo puede elegir un término inventado, disparando una **alucinación factual**.
* **Fine-Tuning (Estilo) vs. RAG (Conocimiento):** Fijate en la tarjeta violeta inferior: el Fine-Tuning solo sirve para enseñar tono o formato (ej. responder en JSON), nunca para cargar datos que cambian cada semana. Para conectar el modelo con tus manuales y glosarios privados sin alucinar, usamos **RAG**."

### ⚡ Dinámica / Interacción en Pantalla
- Contrastá primero las tarjetas superiores (Mito vs. Realidad). Luego interactuá en vivo con el Simulador React de Next-Token alternando entre 'Temp = 0.0 (RAG / Precisión)' y 'Temp = 0.9 (Creativa / Riesgo)' y cerrá con las dos tarjetas fundacionales inferiores.

### 🔗 Puente de Conexión → Slide 3 (Tokens: La Economía y Lingüística de la IA)
> **"Recién vimos en el simulador que el Transformer no predice palabras enteras, sino 'tokens', y que así es como nos facturan las APIs. Pasemos a la Slide 3 para experimentar en vivo con el Tokenizador BPE y la calculadora FinOps."**

---

## Slide 3: Tokens: La Economía y Lingüística de la IA
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tokenización BPE · Asimetría Input/Output · Prompt Caching (-55%)

### 🗣️ Guion Literal (Qué decir)
> "Mirá el simulador izquierdo de **Tokenización BPE (Byte Pair Encoding)**: nuestra frase de 9 palabras (*'La localización automática con IA optimiza glosarios técnicos globales.'*) se divide en **15 tokens de colores** (`La`, ` locali`, `zación`, ` auto`, `mática`...). En vez de memorizar un diccionario infinito, el modelo separa raíces conceptuales (`locali`) de sufijos morfológicos (`zación`).

* **Regla de Conversión y Asimetría de Costos:** En promedio, **1.000 tokens equivalen a ~750 palabras en inglés** (y ~650 en español por tildes y morfología). Además, las APIs cobran de forma asimétrica: generar tokens de salida (**Output**) cuesta de **3x a 5x más caro** que leer tokens de entrada (**Input**).
* **Calculadora FinOps de Prompt Caching:** Mirá el simulador de la derecha. Si tu chatbot recibe 5.000 consultas por día y en cada una enviás un System Prompt fijo de 1.500 tokens con las reglas de estilo, pagarías $225 USD/mes. Al activar **Prompt Caching**, el proveedor guarda ese prefijo estático en memoria caché, **ahorrando entre un 50% y 75% de la factura** y bajando la latencia al primer token de 1.150 ms a 380 ms."

### ⚡ Dinámica / Interacción en Pantalla
- En la tarjeta izquierda, alterná entre las 3 frases del Tokenizador React ('Frase 1: Localización', 'Frase 2: Regla RAG', 'Frase 3: Output JSON') y el botón 'Ver Texto Crudo / Tokenizar BPE'. En la tarjeta derecha, mové el slider de consultas diarias y activá/desactivá 'Prompt Caching'. Podés ampliar la imagen BPE con un clic.

### 🔗 Puente de Conexión → Slide 4 (Ventanas de Contexto & El Sesgo 'Lost in the Middle')
> **"Si los tokens son las unidades que entran y salen del modelo, la siguiente pregunta crítica de arquitectura es: ¿cuántos tokens entran en una sola llamada y por qué el modelo pierde atención en el medio? Vamos a la Slide 4."**

---

## Slide 4: Ventanas de Contexto & El Sesgo 'Lost in the Middle'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Context Window · Curva en U · Lost in the Middle · Primacy & Recency

### 🗣️ Guion Literal (Qué decir)
> "La **Ventana de Contexto** es la memoria RAM de corto plazo del modelo en cada llamada a la API. Como hoy existen ventanas de 128k a 1 millón de tokens, un error típico de principiante es decir: *'No hagamos RAG, metamos los 50 manuales enteros adentro del prompt en cada pregunta'*.

* **El Fenómeno 'Lost in the Middle' (Curva en U):** Probemos el simulador de la derecha. Cuando inyectás una regla crítica al **Inicio del Prompt (Posición 8%)** o al **Final (Posición 94%)**, el modelo la recuerda con un **95% a 99% de precisión** (sesgos de *Primacy* y *Recency*). Pero si el dato cae enterrado en el **Centro Geométrico (Posición 50%)** de un prompt masivo, la retención se desploma al **~38%**.
* **Decisión de Producto:** Como PM, exigís usar RAG para inyectar únicamente los **3 a 5 fragmentos más relevantes** (Top-K) y ordenarlos estratégicamente en los extremos del prompt."

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en los 3 botones ('Inicio del Prompt 8%', 'Centro Geométrico 50%', 'Final del Prompt 94%') o arrastrá el slider para ver cómo cae la atención del 99% al 38% en la zona media. Ampliá la imagen de la curva U si querés mostrar el paper de Stanford.

### 🔗 Puente de Conexión → Slide 5 (Embeddings: Traduciendo Significado a Coordenadas)
> **"Ahora bien: para traer solo los 3 fragmentos exactos entre miles de páginas, necesitamos un buscador que entienda el significado conceptual y no solo palabras idénticas. Pasemos a la Slide 5: Embeddings."**

---

## Slide 5: Embeddings: Traduciendo Significado a Coordenadas
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Embeddings (1536d) · Espacio Vectorial · Similitud por Coseno

### 🗣️ Guion Literal (Qué decir)
> "Un buscador tradicional por palabras clave (`Ctrl + F` o SQL `LIKE`) es ciego al significado: si el usuario busca *'reembolso por contracargo'* y el manual dice *'devolución por disputa de tarjeta'*, da cero resultados. La IA lo resuelve mediante **Embeddings**.

* **Geometría del Lenguaje (1536 Dimensiones):** Un modelo de Embeddings toma cualquier texto y lo traduce en una lista de 1536 coordenadas numéricas que capturan su **intención semántica**.
* **Similitud por Coseno en Vivo:** Hagamos clic en los puntos del mapa. Mirá cómo *'Glosario Técnico'* (`0.96`), *'Localización Software'* (`0.92`) y *'Memoria de Traducción'* (`0.89`) viven en el mismo vecindario geométrico. En cambio, los nodos verdes de DevOps (*'Pipeline CI/CD'*) quedan a media distancia (`0.48`), y el nodo rojo *'Automóvil Deportivo'* da una similitud de **`0.12`** (totalmente descartado)."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los distintos nodos de colores del mapa vectorial ('Glosario Técnico', 'Memoria de Traducción', 'Deploy en Cloud', 'Automóvil Deportivo') para que el panel inferior derecho muestre en vivo su vector de 1536 dimensiones y su puntaje de Similitud por Coseno.

### 🔗 Puente de Conexión → Slide 6 (Bases Vectoriales & Metadata Filtering)
> **"¿Y dónde guardamos millones de estos vectores de 1536 dimensiones para buscarlos en menos de 20 milisegundos sin mezclar documentos viejos con nuevos? Pasemos a la Slide 6."**

---

## Slide 6: Bases Vectoriales & Metadata Filtering
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Vector DB (Pinecone / pgvector) · Metadata Pre-Filtering · Búsqueda Híbrida

### 🗣️ Guion Literal (Qué decir)
> "Esos vectores se almacenan en una **Base de Datos Vectorial** (como Pinecone, Qdrant o `pgvector`). Pero atención a esta trampa real de producto: si buscás únicamente por similitud vectorial pura, la base puede traerte un fragmento con score altísimo (`0.86`) pero que pertenece a un **Manual Legacy de 2021 que ya está derogado** o a la guía de Estados Unidos.

* **Metadata Pre-Filtering (Filtro Duro + Semántico):** Mirá el simulador de la derecha. Cuando activamos las etiquetas **`Idioma: ES-LATAM`** y **`Año: 2026`**, la base aplica primero un filtro lógico instantáneo que descarta el 67% de ruido documental y calcula la similitud por coseno solo sobre los documentos vigentes.
* **Rol de la PM:** Definir qué metadatos obligatorios lleva cada documento (`idioma`, `año_vigencia`, `cliente`, `módulo`) es una tarea clave que especificás vos en el PRD."

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, activá y desactivá los botones 'Idioma: ES-LATAM', 'Año: 2026 (Vigente)' y 'Doc: Guía de Estilo' para mostrar cómo se apagan los vectores obsoletos (como el Manual Legacy 2021 o el documento EN-US) y cómo baja la latencia en milisegundos.

### 🔗 Puente de Conexión → Slide 7 (Chunking & Overlap: El Arte de Fragmentar Documentos)
> **"Antes de guardar un manual de 200 páginas en esta base vectorial, tenemos que dividirlo en bloques manejables sin romper oraciones ni reglas a la mitad. Vamos a la Slide 7: Chunking y Overlap."**

---

## Slide 7: Chunking & Overlap: El Arte de Fragmentar Documentos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Recursive Character Chunking · Chunk Overlap (15%) · Puente Semántico

### 🗣️ Guion Literal (Qué decir)
> "No podemos vectorizar un PDF de 300 páginas como un único bloque. El proceso de dividirlo en trozos de ~500 tokens (unos 1.000 caracteres) se llama **Chunking**.

* **Recursive Character Split vs. Corte Ciego:** Nunca cortamos por cantidad fija de caracteres a ciegas; pedimos *Recursive Character Chunking*, que respeta encabezados, párrafos y puntos seguidos.
* **Simulador de Overlap (Solapamiento):** Mirá qué pasa en el simulador derecho cuando ponemos **`0% Overlap`**: la regla se corta justo al medio y el Fragmento B pierde el sujeto de la oración, haciendo que el LLM alucine. Ahora hagamos clic en **`15% Overlap`**: los últimos 150 caracteres del Fragmento A (*'despliegue de la versión en producción si hay errores P1'*) se repiten al inicio del Fragmento B, creando un **puente semántico** que preserva el contexto completo."

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, llevá el slider de Overlap a '0%' para mostrar la alerta roja de corte abrupto, y luego subilo a '15%' para iluminar en azul el puente semántico compartido entre el Fragmento A y el Fragmento B.

### 🔗 Puente de Conexión → Slide 8 (Anatomía de RAG — Fase 1: Ingestión Offline (Batch))
> **"¡Ya dominás todas las piezas! Ahora unamos todo en la arquitectura completa de RAG en dos etapas. Pasemos a la Slide 8 para ver la Fase 1: Ingestión Batch."**

---

## Slide 8: Anatomía de RAG — Fase 1: Ingestión Offline (Batch)
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** RAG Fase 1 · Pipeline Batch Offline · Ground Truth

### 🗣️ Guion Literal (Qué decir)
> "**RAG** (*Retrieval-Augmented Generation*) es tomarle examen al LLM a **libro abierto**, y se divide en dos fases independientes. Acá en la Slide 8 vemos la **Fase 1: Ingestión del Dato (Batch Offline)**, que corre en segundo plano cuando cargamos o actualizamos manuales:

* **Paso 1 — Documentos (Ground Truth):** Extraemos y limpiamos los PDFs, Markdowns, wikis de Confluence y memorias de traducción aprobadas.
* **Paso 2 — Chunking:** Los fragmentamos en bloques de ~1.000 caracteres con **15% de Overlap**.
* **Paso 3 — Embedding:** Convertimos cada bloque en su vector semántico de **1536 dimensiones**.
* **Paso 4 — Vector DB:** Guardamos los vectores en Pinecone junto con su esquema JSON de metadatos. Nuestra biblioteca queda indexada."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el botón '▶ Simular Pipeline Batch' (o en cada uno de los 4 nodos: 1. Documentos -> 2. Chunking -> 3. Embedding -> 4. Vector DB) para recorrer la explicación técnica e indicadores de cada etapa.

### 🔗 Puente de Conexión → Slide 9 (Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live))
> **"Con la base vectorial ya indexada, ¿qué ocurre en los milisegundos posteriores a que un usuario envía una pregunta en el chat? Pasemos a la Slide 9: Fase 2 de RAG en Tiempo Real."**

---

## Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real (Live)
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** RAG Fase 2 · Top-K Retrieval · Prompt Aumentado · Cita Verificable

### 🗣️ Guion Literal (Qué decir)
> "Mirá la **Fase 2: Consulta en Tiempo Real (Online)** cuando alguien pregunta: *'¿Qué criterios de estilo y terminología se aplican al módulo de pagos para LATAM?'*:

* **Paso 1 — Vectorización de la Pregunta (~35 ms):** Convertimos la duda del usuario en un vector de 1536 dimensiones con el mismo modelo de Embeddings.
* **Paso 2 — Recuperación (Metadata Filter + Top-K):** Filtramos por `ES-LATAM` + `2026` y recuperamos los 3 fragmentos con mayor Similitud por Coseno (`Score >= 0.75`).
* **Paso 3 — Prompt Aumentado (Examen a Libro Abierto):** El backend inserta esos 3 fragmentos oficiales dentro del System Prompt instruyendo al modelo a responder *únicamente* con esa evidencia.
* **Paso 4 — Generación con Cita (`T = 0.0`):** El LLM redacta la respuesta exacta y adjunta la fuente clicable (ej. *Guía de Estilo Pagos LATAM 2026, pág. 14*)."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en '▶ Simular Consulta Live' para animar los 4 pasos en tiempo real y luego abrí el botón '🔍 Ver Diagrama Completo RAG' para mostrar en pantalla completa cómo se conectan las Fases 1 y 2.

### 🔗 Puente de Conexión → Slide 10 (Taller Práctico: El Mock PRD de tu Chatbot RAG)
> **"¿Cómo volcás toda esta arquitectura en un documento ejecutivo que tu equipo de ingeniería pueda construir y QA pueda auditar? Pasemos a la Slide 10: Taller del Mock PRD."**

---

## Slide 10: Taller Práctico: El Mock PRD de tu Chatbot RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Mock PRD · Definition of Done (DoD) · Criterios de Aceptación IA

### 🗣️ Guion Literal (Qué decir)
> "Como IT Product Manager o Project Manager en IA, tu entregable estrella no es el código: es el **PRD (Product Requirements Document)** y sus criterios de aceptación (**Definition of Done**).

* **Especificación Funcional y Datos:** Definís el problema de negocio, las fuentes oficiales (*Ground Truth*) y las etiquetas de metadatos obligatorias (`idioma`, `año_vigencia`, `módulo`).
* **Definition of Done (DoD) Técnico de IA:** Establecés métricas innegociables para aprobar el paso a producción: Chunking de `1000 chars / 15% overlap`, Vector DB con `Score >= 0.75`, contrato `Zero-Retention SLA` y evaluación automatizada `>= 90%`.
* **Herramientas Interactivas:** Desde los botones de abajo podés abrir tanto la **App Interactiva del Mock PRD** (que exporta tu documento en Markdown) como el **Simulador Práctico de 4 Misiones**."

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las dos tarjetas del PRD (Especificación Funcional vs. Definition of Done de IA) y mostrá los dos botones inferiores para lanzar en vivo la 'App Mock PRD S2' y el 'Simulador Práctico S2'.

### 🔗 Puente de Conexión → Slide 11 (Gobernanza de IA, Privacidad & Prevención de Data Leakage)
> **"Veamos ahora en detalle las tres compuertas de Gobernanza y Calidad que pusimos en ese Definition of Done. Empecemos en la Slide 11 por la seguridad corporativa y el riesgo de Data Leakage."**

---

## Slide 11: Gobernanza de IA, Privacidad & Prevención de Data Leakage
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Data Leakage · Enterprise SLA · Zero-Data Retention · PII Masking

### 🗣️ Guion Literal (Qué decir)
> "El primer freno de cualquier directorio o comité de ciberseguridad ante un proyecto de IA es el **Data Leakage (Fuga de Propiedad Intelectual)**.

* **Tarjeta Roja — Chat Público / Licencias Consumer:** Si un miembro del equipo pega un glosario confidencial o contrato bajo NDA en una cuenta gratuita o pública, el proveedor puede retener esos datos para re-entrenar futuros modelos públicos (RLHF), violando acuerdos de confidencialidad y normativas GDPR / ISO 27001.
* **Tarjeta Verde — API bajo Enterprise SLA con Zero-Data Retention:** En producción exigimos consumir los modelos vía API corporativa (Azure OpenAI, AWS Bedrock, Anthropic Enterprise) con cláusula contractual de **Retención Cero (Zero-Retention)** y enmascaramiento previo de datos personales (**PII Masking**). Probá el simulador de abajo para ver cómo pasa la auditoría SOC2 / ISO 27001."

### ⚡ Dinámica / Interacción en Pantalla
- Contrastá la tarjeta roja izquierda (Chat Público / Licencias Consumer) con la tarjeta verde derecha (API Corporativa bajo Enterprise SLA). Luego alterná los dos botones del Simulador React inferior ('Enviar por Chat Gratuito' vs. 'Enviar por API Enterprise SLA').

### 🔗 Puente de Conexión → Slide 12 (Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer')
> **"Ya blindamos la privacidad legal. Ahora blindemos la veracidad funcional: ¿cómo obligamos técnicamente al bot a decir 'no sé' cuando le preguntan algo fuera de los manuales? Vamos a la Slide 12."**

---

## Slide 12: Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Confidence Threshold (0.75) · Guardrail Determinista · Fallback No-Answer

### 🗣️ Guion Literal (Qué decir)
> "Un LLM por defecto siempre intenta complacerte, aunque tenga que inventar. Para ponerle un guardrail determinista, usamos el **Confidence Threshold (Umbral de Confianza Semántica)** calibrado en **0.75**.

* **Camino Verde (`Score >= 0.75` — Autorizado):** Hacé clic en el **Caso 1 (`Score 0.91`)**. Como la similitud en la base vectorial supera 0.75, el backend autoriza la llamada al LLM y devuelve la respuesta con su cita oficial.
* **Camino Rojo (`Score < 0.75` — Cortocircuito y Fallback):** Ahora hacé clic en el **Caso 3 (`Score 0.34`)** o bajá el slider. Cuando alguien pregunta algo que no está en los manuales, el backend **bloquea la llamada al LLM** (ahorrando tokens y evitando alucinaciones) y devuelve una respuesta controlada (**No-Answer Fallback**): *'No dispongo de información oficial verificada sobre ese punto en la base documental'*."

### ⚡ Dinámica / Interacción en Pantalla
- En el simulador React de la derecha, hacé clic en los 3 casos preconfigurados ('Caso 1: Score 0.91', 'Caso 2: Score 0.78', 'Caso 3: Score 0.34') y deslizá la barra de Score por encima y por debajo de 0.75 para ver cómo se conmuta en vivo entre 'AUTORIZADO' y 'BLOQUEADO'.

### 🔗 Puente de Conexión → Slide 13 (Evaluación de Calidad: Golden Dataset & Evals en CI/CD)
> **"¿Y cómo verificamos automáticamente que cada cambio que hacen los programadores no rompa esta precisión antes de subirlo a producción? Pasemos a la Slide 13: Golden Dataset y Evals."**

---

## Slide 13: Evaluación de Calidad: Golden Dataset & Evals en CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Golden Dataset · Evals en CI/CD · Context Adherence >= 90% · Langfuse

### 🗣️ Guion Literal (Qué decir)
> "En software probabilístico no alcanza con probar tres preguntas a mano antes de lanzar. Implementamos una arquitectura de **Evaluación Continua (Evals)** en tres pilares:

* **1. Golden Dataset (50 a 100 Casos Certificados):** Una base curada por expertos del negocio con preguntas reales, casos borde y sus respuestas ideales validadas (*Ground Truth*).
* **2. Evals Automatizadas en CI/CD:** Mirá el simulador de abajo. En el **PR #42**, el pipeline corre los 100 casos, mide un **Context Adherence de 96.4%** (`>= 90%`) y aprueba el deploy. En cambio, si un desarrollador sube el **PR #43** rompiendo el prompt y la fidelidad cae a `74.0%`, GitHub Actions **bloquea automáticamente el despliegue**.
* **3. Observabilidad en Producción (Langfuse / Arize):** Monitoreamos en vivo latencia P95, costo por conversación y deriva semántica."

### ⚡ Dinámica / Interacción en Pantalla
- Repasá las 3 tarjetas superiores y luego hacé clic en los dos escenarios del Simulador de Pipeline CI/CD inferior ('PR #42: Chunking 1000ch + 15% Overlap -> DEPLOY APPROVED' vs. 'PR #43: Prompt sin Guardrail -> DEPLOY BLOCKED').

### 🔗 Puente de Conexión → Slide 14 (Roleplay: Defensa Técnica en Entrevistas IT)
> **"Con todo este vocabulario y criterio arquitectónico listo, entrenemos cómo defender estas decisiones frente a un CTO o VP of Product en una entrevista real. Vamos a la Slide 14."**

---

## Slide 14: Roleplay: Defensa Técnica en Entrevistas IT
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Roleplay Ejecutivo · RAG vs Fine-Tuning · FinOps & Escalabilidad

### 🗣️ Guion Literal (Qué decir)
> "En una entrevista para IT Product Manager o AI Project Manager te van a hacer estas dos preguntas clásicas para medir tu senioridad técnica:

* **Pregunta 1 (CTO) — ¿Por qué usar RAG y no Fine-Tuning para glosarios semanales?:** Respondés con tres pilares contundentes: 1) El *Fine-Tuning* enseña forma, tono o formato (JSON), pero congela los hechos y sigue alucinando; 2) Re-entrenar cada semana es lento, caro e inauditable; 3) *RAG + Base Vectorial* actualiza el conocimiento en segundos, filtra por metadatos y exige cita documental con umbral `>= 0.75`.
* **Pregunta 2 (Head of Product) — ¿Cómo evitamos que el costo de API escale linealmente con los usuarios?:** Respondés con tu estrategia FinOps en tres capas: 1) **Prompt Caching** en el System Prompt para ahorrar 50%–75% en tokens de entrada; 2) **Caché Semántica + Cortocircuito (`< 0.75`)** para no invocar al LLM en preguntas repetidas o fuera de dominio; y 3) **Top-3 Chunks pre-filtrados** junto con *Rate Limits* por rol."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en las dos tarjetas interactivas del Roleplay React para mostrar u ocultar los 3 pilares ganadores y el pitch ejecutivo de cada pregunta de entrevista.

### 🔗 Puente de Conexión → Slide 15 (Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager)
> **"Responder con esa claridad ejecutiva te posiciona inmediatamente por encima del promedio del mercado. Pasemos a la Slide 15 para sintetizar tu valor como PM y conectar con la Sesión 3."**

---

## Slide 15: Cierre Sesión 2: Tu Ruta y Valor como IT Product/Project Manager
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Súper-Poder PM · Entregables S2 · Puente a Sesión 3 (Agentes ReAct)

### 🗣️ Guion Literal (Qué decir)
> "¡Felicitaciones, Anabela! Mirá el salto gigantesco que diste hoy en la Sesión 2:

* **Dominio Técnico-Comercial:** Ya sabés cómo funciona un Transformer por dentro, cómo calcular presupuestos de Tokens y Prompt Caching, cómo evitar el sesgo *Lost in the Middle*, y cómo diseñar un pipeline RAG completo con Embeddings, Metadata Filtering, Chunking con 15% de Overlap, umbral de 0.75, Enterprise SLA y Golden Datasets en CI/CD.
* **Práctica Disponible en el Portal:** Tenés listos el **Simulador Práctico S2 (4 Misiones)**, la **App Interactiva del Mock PRD** y el **Glosario Completo S2** con tablas comparativas."

### ⚡ Dinámica / Interacción en Pantalla
- Destacá el cuadro comparativo de las Sesiones 2, 3 y 4 y señalá los 3 botones de acceso directo en el banner inferior: Actividad Práctica S2, App Mock PRD y Glosario S2.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 3: Hoy construimos el 'Cerebro consultivo' (IA Pasiva con RAG: lee manuales y responde con precisión, pero no ejecuta acciones). En la **Sesión 3** le vamos a dar 'Manos y Autonomía': vamos a diseñar **Sistemas Agénticos con arquitectura ReAct (Reason + Act)** que invocan herramientas externas por API (*Tool Calling*), validan estructuras con *Pydantic* y operan con compuertas *Human-in-the-Loop (HITL)*."**

---

