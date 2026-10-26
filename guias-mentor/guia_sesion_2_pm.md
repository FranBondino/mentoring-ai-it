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
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Sesión 2 · LLMs · Arquitectura RAG

### 🗣️ Guion Literal (Qué decir)
> "¡Bienvenida a la Sesión 2, Anabela! En nuestro primer encuentro vimos cómo se construye el software moderno con APIs, servidores y bases de datos. Hoy nos vamos a meter en el corazón de la revolución actual: cómo nacieron y cómo funcionan por dentro los Grandes Modelos de Lenguaje (LLMs como GPT-4, Claude o Gemini) y cómo hacen las empresas para conectarlos con sus propios documentos, manuales y glosarios privados sin que el modelo invente respuestas. Además, como vos venís del mundo del lenguaje y la traducción, te va a encantar ver cómo la ingeniería transformó la lingüística en matemática."

### ⚡ Dinámica / Interacción en Pantalla
- Presentá la portada destacando cómo hoy conectamos los cimientos de software de la Sesión 1 con la Inteligencia Artificial Generativa.

### 🔗 Puente de Conexión → Slide 2 (El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017))
> **"Para arrancar bien desde la raíz, veamos cuál fue el paper científico que disparó el advenimiento de todos los LLMs modernos y cómo funciona su motor probabilístico bajo el capó. Pasemos a la Slide 2."**

---

## Slide 2: El Origen y Motor de los LLMs: 'Attention Is All You Need' (2017)
- **⏱️ Tiempo estimado:** 5 Min | **🏷️ Etiquetas:** Attention Is All You Need · Transformer (GPT) · Next-Token Prediction · RAG vs Fine-Tuning

### 🗣️ Guion Literal (Qué decir)
> "Para entender qué es un LLM de verdad, tenemos que ir al momento exacto en que nació todo este auge: junio de 2017. Un equipo de investigadores de Google publica el paper más famoso de la historia moderna de la IA: **'Attention Is All You Need'** (Vaswani et al.). Y mirá qué increíble: ese paper se escribió para resolver un problema de **traducción de idiomas**. Antes de 2017, los modelos traducían leyendo palabra por palabra de izquierda a derecha, y cuando llegaban al final de un párrafo largo ya se habían olvidado del principio. Este paper inventó la arquitectura **Transformer** (de ahí viene la sigla **GPT**: *Generative Pre-trained Transformer*) y su corazón: el mecanismo de **Self-Attention (Auto-Atención)**. ¿Qué hace el Self-Attention? En vez de leer en fila india, el modelo mira toda la página al mismo tiempo y calcula matemáticamente qué palabras están conectadas con cuáles (por ejemplo, si lee la palabra *'bank'*, presta atención al resto de la oración para saber si habla de un banco financiero o de la orilla de un río). Con ese motor Transformer, lo que hace el LLM es **Next-Token Prediction**: calcular estadísticamente cuál es la siguiente palabra o sílaba más probable. Por eso, cuando no tiene un dato privado de tu empresa, 'alucina' e inventa una respuesta que suena linda para completar el patrón. Y fijate en la tarjeta violeta de abajo a la derecha: para que no alucine con datos de tu empresa, no usamos **Fine-Tuning** (que solo sirve para enseñarle estilo o tono), sino que usamos **RAG**, conectándolo en vivo a tus documentos."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá primero el contraste superior (Mito vs. Realidad), luego hacé foco en la tarjeta naranja inferior del Paper 'Attention Is All You Need' (Google, 2017) y cerrá con la tarjeta violeta de Fine-Tuning vs. RAG.

### 🔗 Puente de Conexión → Slide 3 (Tokens: La Economía y Lingüística de la IA)
> **"Recién te dije que el Transformer no predice palabras enteras, sino 'pedacitos de palabras' y que así es como nos cobran las APIs. Pasemos a la Slide 3 para probar en vivo cómo lee y factura un LLM mediante los Tokens."**

---

## Slide 3: Tokens: La Economía y Lingüística de la IA
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Tokenización BPE · Raíz Semántica · Input vs Output Cost

### 🗣️ Guion Literal (Qué decir)
> "Mirá el simulador a la derecha y hagamos clic en **'Tokenizar Texto (BPE)'**. ¿Ves cómo la frase de 9 palabras se acaba de partir en 15 bloquecitos de colores (`La`, ` locali`, `zación`, ` auto`, `mática`...)? Esos bloques son los **Tokens**. Los modelos usan un algoritmo llamado *Byte Pair Encoding (BPE)* que, en lugar de memorizar millones de palabras conjugadas por separado, separa la raíz conceptual (por ejemplo, `'localiz'`) de los sufijos gramaticales (`'-ación'`, `'-ador'`). Como regla rápida de PM: **1.000 tokens equivalen a unas 750 palabras en inglés** (y en español consumimos un 20% más de tokens por nuestras conjugaciones y tildes). ¿Por qué te importa esto como líder de proyecto? Porque las APIs de IA no cobran por mes: cobran por cada millón de tokens de entrada (**Input**) y de salida (**Output**), y generar tokens de salida cuesta de 3 a 4 veces más caro que leer tokens de entrada."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en el botón interactivo 'Tokenizar Texto (BPE)' para que la frase 'La localización automática con IA optimiza glosarios técnicos globales.' se divida en 15 bloques de colores en vivo. También podés hacer clic en la imagen BPE inferior para ampliarla.

### 🔗 Puente de Conexión → Slide 4 (Ventanas de Contexto & El Sesgo 'Lost in the Middle')
> **"Si los tokens son los ladrillitos que entran y salen del modelo, la siguiente pregunta lógica es: ¿cuántos tokens entran como máximo en una sola consulta antes de que el modelo se quede sin memoria? Vamos a la Slide 4."**

---

## Slide 4: Ventanas de Contexto & El Sesgo 'Lost in the Middle'
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Context Window · Memoria de Corto Plazo · Lost in the Middle

### 🗣️ Guion Literal (Qué decir)
> "La **Ventana de Contexto** es la memoria RAM de corto plazo del modelo: es el tamaño físico del escritorio donde le apoyás tus instrucciones y documentos en cada llamada a la API. Hoy hay modelos donde entran 128.000 o hasta 1 millón de tokens (libros enteros). Entonces alguien en tu equipo te podría decir: *'¡Genial Anabela! Metamos los 50 manuales de producto y todas las memorias de traducción juntas adentro del prompt en cada pregunta'*. Mirá el gráfico de la derecha para ver por qué eso es una pésima idea. Los investigadores de Stanford descubrieron el fenómeno **'Lost in the Middle'** (Perdido en el Medio): igual que un humano leyendo un contrato a las 3 de la mañana, el LLM presta muchísima atención al primer párrafo del prompt y al último párrafo (zonas verdes), pero su retención se desploma en la mitad del documento (zona roja), además de que te saldría carísimo pagar todos esos tokens en cada pregunta."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic sobre el gráfico del mapa de calor (Heatmap en curva U) para mostrar cómo la atención del modelo es del 95%+ al inicio y al final, pero cae al ~40% en el medio.

### 🔗 Puente de Conexión → Slide 5 (Embeddings: Traduciendo Significado a Coordenadas)
> **"Entonces, si no podemos tirarle manuales enteros por la cabeza al modelo en cada pregunta, necesitamos un buscador inteligente que encuentre solo los 3 párrafos exactos que responden a la duda del usuario. ¿Cómo busca una IA por significado y no por palabra exacta? Pasemos a la Slide 5: Embeddings."**

---

## Slide 5: Embeddings: Traduciendo Significado a Coordenadas
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Embeddings · Espacio Vectorial · Similitud de Coseno

### 🗣️ Guion Literal (Qué decir)
> "Acá ocurre la verdadera magia matemática. Un buscador viejo (como apretar Ctrl+F en Word) busca letras exactas: si buscás *'glosario bilingüe'* y el manual dice *'terminología aprobada'*, el Ctrl+F te da cero resultados. ¿Cómo lo resuelve la IA? Con un modelo de **Embeddings**. Un Embedding toma cualquier frase o párrafo y lo convierte en una lista larga de números (un vector de 1536 coordenadas) que representa su **significado conceptual**. Mirá el mapa de la diapositiva: en ese espacio geométrico, todos los conceptos lingüísticos y de localización quedan guardados físicamente juntitos en el mismo barrio porque significan cosas parecidas, mientras que los conceptos de infraestructura cloud quedan agrupados en otro rincón, y una receta de cocina queda en otra galaxia. Midiendo el ángulo entre dos puntos (**Similitud de Coseno**), la computadora entiende sinónimos, contexto e intención aunque no compartan ni una sola palabra."

### ⚡ Dinámica / Interacción en Pantalla
- Pasá el mouse por los puntos del mapa vectorial interactivo ('Memoria de Traducción', 'Microservicios API') y hacé clic en el radar 3D para ampliarlo.

### 🔗 Puente de Conexión → Slide 6 (Bases Vectoriales & Metadata Filtering)
> **"Una vez que convertimos nuestros manuales y glosarios en estas coordenadas matemáticas llamadas Embeddings, ¿dónde los guardamos para poder consultarlos en milisegundos? Pasemos a la Slide 6."**

---

## Slide 6: Bases Vectoriales & Metadata Filtering
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Vector DB (Pinecone) · Metadata Filtering · Precisión de Búsqueda

### 🗣️ Guion Literal (Qué decir)
> "Esas coordenadas se guardan en la tercera base de datos que nombramos en la Sesión 1: la **Base de Datos Vectorial** (como Pinecone, Qdrant o Chroma). Ahora bien, imaginate que en tu empresa tenés cargadas las guías de estilo y manuales de 20 clientes distintos y de los últimos 5 años. Si hacés una búsqueda semántica pura, por ahí el buscador te trae un párrafo semánticamente idéntico a lo que preguntaste, ¡pero de un manual vencido de 2021 o de otro cliente! Hacé clic conmigo en los botones de abajo de la slide para ver cómo se soluciona: aplicamos **Metadata Filtering** (Filtrado por Metadatos). Antes de buscar por significado, le ponemos un filtro duro de etiquetas —como `Idioma = ES-LATAM`, `Año = 2026`, `Tipo = Guía de Estilo`—. Eso apaga instantáneamente el 90% de los documentos que no corresponden y busca similitud semántica únicamente adentro de los documentos vigentes."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los botones de filtro interactivos ('Idioma: ES-LATAM', 'Año: 2026', 'Doc: Guía de Estilo') para ver cómo se apagan los puntos irrelevantes en el mapa vectorial.

### 🔗 Puente de Conexión → Slide 7 (Chunking & Overlap: El Arte de Fragmentar Documentos)
> **"Pero antes de poder guardar un manual de 200 páginas adentro de esta base vectorial, tenemos un desafío práctico: no podemos convertir un libro entero en un solo punto del mapa. Tenemos que cortarlo en pedacitos. Vamos a la Slide 7 para ver cómo se hace eso con Chunking y Overlap."**

---

## Slide 7: Chunking & Overlap: El Arte de Fragmentar Documentos
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Chunking · Recursive Split · Overlap (10-20%)

### 🗣️ Guion Literal (Qué decir)
> "Cortar un documento largo en fragmentos más chicos (por ejemplo, de 400 o 500 tokens cada uno) se llama **Chunking**. El problema es que si cortás el texto a machetazos fijos cada 500 tokens, podés cortar una regla terminológica o una condición de negocio justo por la mitad: en el Fragmento 1 queda el título de la regla y en el Fragmento 2 queda la excepción, perdiendo todo el sentido. Por eso como PM siempre pedís dos cosas en tu especificación: primero, usar **Recursive Character Chunking** (que respeta párrafos y puntos seguidos antes de cortar); y segundo —mirá lo que pasa cuando movés el slider de la derecha—, configurar un **Overlap (Solapamiento) del 10% al 15%**. Igual que cuando ponés tejas en un techo superponiendo el borde de una con la siguiente para que no se filtre el agua, el Overlap repite las últimas dos oraciones del Fragmento A al principio del Fragmento B para que ninguna idea quede partida al medio."

### ⚡ Dinámica / Interacción en Pantalla
- Mové el slider interactivo de 'Overlap (%)' en la diapositiva para mostrar visualmente cómo los fragmentos contiguos comparten una franja de texto para no cortar ideas a la mitad.

### 🔗 Puente de Conexión → Slide 8 (Anatomía de RAG — Fase 1: Ingestión Offline)
> **"¡Listo! Ya tenés todas las piezas del rompecabezas: Tokens, Ventana de Contexto, Embeddings, Base Vectorial y Chunking con Overlap. Ahora veamos cómo se unen todas en la arquitectura más pedida del mundo corporativo: RAG. Pasemos a la Slide 8."**

---

## Slide 8: Anatomía de RAG — Fase 1: Ingestión Offline
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** RAG (Retrieval-Augmented Generation) · Pipeline Batch · Indexación

### 🗣️ Guion Literal (Qué decir)
> "**RAG** significa *Retrieval-Augmented Generation* (Generación Aumentada por Recuperación), y es literalmente tomarle un examen a la IA a **libro abierto**. Tiene dos fases. Acá en la Slide 8 vemos la **Fase 1 (Ingestión Offline)**, que ocurre tras bambalinas antes de que el usuario use el chat: 1) Tomamos los PDFs oficiales, guías de estilo y glosarios limpios; 2) Los pasamos por la cortadora de **Chunking con 15% de Overlap**; 3) Pasamos cada fragmento por el modelo de **Embeddings** para calcular sus coordenadas; y 4) Guardamos esos vectores con sus etiquetas de metadatos en la **Base Vectorial**. Esto deja nuestra biblioteca corporativa indexada y lista."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los 4 pasos interactivos del pipeline de Ingestión (1. Documentos Crudos -> 2. Chunking & Overlap -> 3. Modelo de Embeddings -> 4. Base Vectorial).

### 🔗 Puente de Conexión → Slide 9 (Anatomía de RAG — Fase 2: Consulta en Tiempo Real)
> **"Una vez que la biblioteca vectorial ya está armada en silencio, ¿qué pasa en vivo en los dos segundos que transcurren desde que un usuario escribe una pregunta en el chat hasta que el bot le responde? Pasemos a la Slide 9: Fase 2 de RAG."**

---

## Slide 9: Anatomía de RAG — Fase 2: Consulta en Tiempo Real
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Retrieval Online · Inyección de Contexto · Cero Alucinación

### 🗣️ Guion Literal (Qué decir)
> "Mirá la **Fase 2 (Consulta en Vivo)**: una lingüista o un PM entra al chatbot y pregunta: *'¿Cómo debemos traducir los términos del módulo de facturación para LatAm?'*. En menos de dos segundos pasa esto: Paso 1: El sistema convierte esa pregunta en un vector (Embedding) y va a buscar a la Base Vectorial los 3 fragmentos (chunks) de la guía de estilo que estén geométricamente más cerca. Paso 2: El backend arma en secreto un **Prompt Enriquecido** que dice: *'Sos el asistente oficial de la empresa. Respondé a la pregunta del usuario basándote EXCLUSIVAMENTE en estos 3 fragmentos oficiales que te adjunto acá abajo'*. Paso 3: Recién ahí se lo manda al LLM (GPT-4 o Claude). El LLM lee los 3 fragmentos servidos en bandeja en su ventana de contexto y redacta una respuesta perfecta citando la fuente exacta."

### ⚡ Dinámica / Interacción en Pantalla
- Hacé clic en los pasos del flujo en tiempo real y abrí el diagrama completo de arquitectura RAG en pantalla completa para repasar el circuito entero.

### 🔗 Puente de Conexión → Slide 10 (Taller Práctico: El Mock PRD de tu Chatbot RAG)
> **"Así es como se construye un chatbot empresarial serio. Ahora, ¿cómo documentás vos como PM los requerimientos de este chatbot para tu equipo de ingeniería? Pasemos a la Slide 10 para ver el Taller del Mock PRD."**

---

## Slide 10: Taller Práctico: El Mock PRD de tu Chatbot RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** PRD (Product Requirements Document) · Definition of Done · Alcance

### 🗣️ Guion Literal (Qué decir)
> "Cuando liderás un proyecto de IA, los ingenieros no esperan que vos programes en Python, pero sí esperan que les entregues un **PRD (Product Requirements Document)** claro. Mirá qué definís vos en este documento para nuestro *Enterprise Knowledge & Localization Bot*: 1) Qué fuentes de datos entran (manuales de producto, guías de estilo, memorias aprobadas) y cuáles quedan afuera; 2) La estrategia de ingesta recomendada (Chunking recursivo de 500 tokens con 15% de overlap y filtros por cliente/idioma); y 3) El **Definition of Done (DoD)**: qué condiciones de seguridad y precisión tiene que cumplir el bot para que vos apruebes su salida a producción."

### ⚡ Dinámica / Interacción en Pantalla
- Mostrá los bloques constitutivos del PRD en pantalla y recordale que en el portal principal tiene la app interactiva 'Generador de PRD' lista para usar.

### 🔗 Puente de Conexión → Slide 11 (Gobernanza de IA, Privacidad & Prevención de Data Leakage)
> **"Y hablando de esas condiciones de seguridad innegociables para salir a producción, el primer miedo que te va a plantear cualquier director o cliente es: '¿Mis documentos confidenciales se van a filtrar a internet si usamos IA?'. Vamos a la Slide 11 para ver cómo se blinda eso."**

---

## Slide 11: Gobernanza de IA, Privacidad & Prevención de Data Leakage
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Data Leakage · Enterprise SLA · Zero-Data Retention

### 🗣️ Guion Literal (Qué decir)
> "Si un empleado copia y pega un contrato confidencial o un documento bajo NDA de un cliente en el ChatGPT gratuito web, esos datos pueden ser usados por el proveedor para entrenar futuros modelos públicos. Eso se llama **Data Leakage (Fuga de Datos)** y es un pecado mortal corporativo. ¿Cómo lo resolvemos profesionalmente cuando construimos nuestro propio chatbot? Exigiendo en el proyecto que nos conectemos mediante **APIs Corporativas bajo un Enterprise SLA** (como Azure OpenAI o AWS Bedrock) con cláusula de **Zero-Data Retention (Retención Cero)**. Eso garantiza por contrato y por arquitectura que los datos viajan encriptados, el proveedor borra la consulta de su memoria apenas devuelve la respuesta, ningún humano la revisa y jamás se usa un solo token de tu empresa para entrenar modelos públicos."

### ⚡ Dinámica / Interacción en Pantalla
- Contrastá la tarjeta roja izquierda (API Pública / Chat gratuito = Peligro de Fuga) contra la tarjeta verde derecha (API Corporativa bajo Enterprise SLA con Zero-Retention).

### 🔗 Puente de Conexión → Slide 12 (Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer')
> **"Ya blindamos la privacidad legal de los datos. Ahora blindemos la veracidad: ¿qué pasa si un usuario le pregunta al chatbot algo que NO está en ningún manual de la empresa? ¿Cómo evitamos que el bot invente? Pasemos a la Slide 12."**

---

## Slide 12: Mitigación de Alucinaciones: Umbral de Confianza y 'No-Answer'
- **⏱️ Tiempo estimado:** 3 Min | **🏷️ Etiquetas:** Confidence Threshold (0.75) · Fallback Seguro · No-Answer Logic

### 🗣️ Guion Literal (Qué decir)
> "Probá mover este slider en la pantalla porque muestra exactamente cómo le ponemos un bozal a las alucinaciones. Cuando un usuario hace una pregunta y vamos a buscar a la Base Vectorial, cada fragmento encontrado viene con un puntaje de similitud del 0 al 1. Nosotros como PMs fijamos una regla dura llamada **Confidence Threshold (Umbral de Confianza)**, por ejemplo en **0.75**. Si alguien le pregunta al bot sobre un tema que no figura en los manuales, los fragmentos encontrados van a tener un puntaje bajísimo (por ejemplo, 0.42). En ese instante, antes de llamar al LLM, el sistema corta el flujo y dispara una respuesta segura (**No-Answer Fallback**): *'No dispongo de documentación oficial autorizada sobre ese punto'*. Preferimos mil veces un bot que diga 'no sé' a un bot que invente una regla falsa."

### ⚡ Dinámica / Interacción en Pantalla
- Mové el slider interactivo del 'Score de Similitud Semántica' por debajo y por encima de 0.75 para ver cómo el bot bloquea la respuesta o la autoriza.

### 🔗 Puente de Conexión → Slide 13 (Evaluación de Calidad: Golden Dataset & Evals en CI/CD)
> **"Ahora bien: ya tenemos nuestro bot con RAG, con privacidad Enterprise SLA y con umbral de confianza en 0.75. ¿Cómo probamos científicamente que el bot responde bien antes de lanzarlo a toda la empresa? Pasemos a la Slide 13."**

---

## Slide 13: Evaluación de Calidad: Golden Dataset & Evals en CI/CD
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Golden Dataset · Ground Truth · Evals Automatizadas · Langfuse

### 🗣️ Guion Literal (Qué decir)
> "En software tradicional corríamos tests automáticos de código. Pero como la IA redacta distinto cada vez, no alcanza con que vos te sientes cinco minutos a chatear dos preguntas al azar para decir 'anda bien'. En proyectos de IA armamos lo que se llama un **Golden Dataset**: una planilla curada por expertos del negocio (acá tu ojo de traductora y PM es irreemplazable) con 50 a 100 preguntas reales difíciles y cuál es la respuesta ideal esperada (**Ground Truth**). Cada vez que los desarrolladores tocan el prompt o cambian la configuración del chunking, el pipeline de **CI/CD** le dispara automáticamente esas 100 preguntas al bot y mide con métricas estadísticas (**Evals**) si las respuestas siguen siendo fieles al manual. Si la precisión baja del 90%, el despliegue se frena solo."

### ⚡ Dinámica / Interacción en Pantalla
- Señalá el flujo que une el Golden Dataset (50-100 preguntas de control) con el pipeline de CI/CD que vimos en la Sesión 1.

### 🔗 Puente de Conexión → Slide 14 (Roleplay: Defensa Técnica de Arquitectura RAG)
> **"Con todo este arsenal técnico sobre la mesa, pongámonos a prueba en un escenario real de reunión o entrevista con un director técnico. Vamos a la Slide 14."**

---

## Slide 14: Roleplay: Defensa Técnica de Arquitectura RAG
- **⏱️ Tiempo estimado:** 4 Min | **🏷️ Etiquetas:** Roleplay CTO · RAG vs Fine-Tuning · Argumentación Ejecutiva

### 🗣️ Guion Literal (Qué decir)
> "Imaginá que estás en una reunión o entrevista y el líder técnico te tira esta pregunta con trampa: *'Anabela, ¿por qué no hacemos Fine-Tuning para alimentar al modelo con nuestros glosarios y manuales de producto que cambian cada semana?'*. Con lo que aprendiste hoy, le respondés con una seguridad total en tres puntos: 1) **Naturaleza técnica**: el Fine-Tuning ajusta los pesos neuronales para cambiar el *estilo o tono*, no sirve como memoria de datos que cambian cada semana; 2) **Costo y mantenimiento**: re-entrenar un modelo cada viernes es carísimo y sigue sufriendo alucinaciones; y 3) **La solución correcta es RAG**: indexamos los glosarios en una Base Vectorial con Metadata Filtering, de modo que cuando un glosario se actualiza un martes, en dos segundos el bot ya responde con la versión nueva y citando la página exacta."

### ⚡ Dinámica / Interacción en Pantalla
- Leé el planteo del Director de Ingeniería en pantalla y hacé clic en el botón para revelar los 3 pilares de la respuesta ganadora de Anabela.

### 🔗 Puente de Conexión → Slide 15 (Cierre Sesión 2: Tu Valor como IT Product/Project Manager)
> **"Responder así te separa inmediatamente del 95% de los candidatos y gestores que tocan de oído. Pasemos a la Slide 15 para cerrar esta segunda sesión y conectar con el mundo de los Agentes."**

---

## Slide 15: Cierre Sesión 2: Tu Valor como IT Product/Project Manager
- **⏱️ Tiempo estimado:** 2 Min | **🏷️ Etiquetas:** Resumen S2 · App Mock PRD · Puente a Sesión 3 (Agentes)

### 🗣️ Guion Literal (Qué decir)
> "¡Brillante sesión, Anabela! Mirá todo lo que dominaste hoy: ya sabés cómo lee y factura un LLM por Tokens, qué es la Ventana de Contexto y por qué se pierde en el medio, cómo funcionan los Embeddings y las Bases Vectoriales, cómo cortar documentos con Chunking y Overlap, y cómo armar un chatbot RAG seguro y auditable con un Golden Dataset."

### ⚡ Dinámica / Interacción en Pantalla
- Repasá los 3 pilares consolidados hoy y señalá el acceso al Glosario S2 y a la App interactiva del Mock PRD.

### 🏁 Cierre y Puente hacia la Próxima Sesión
> **"🔗 Conexión con la Sesión 3: Hasta acá nuestro chatbot RAG es un 'erudito de biblioteca': lee manuales y responde preguntas con precisión total, pero tiene las manos atadas (es IA Pasiva). En la Sesión 3 le vamos a dar manos al chatbot: vamos a ver cómo construir **Agentes Autónomos (IA Activa)** que no solo responden dudas, sino que se conectan por API a Jira, al TMS o al ERP para ejecutar tareas, verificar capacidad de equipos y pedirte autorización por Slack."**

---

